(function () {
  // ---------- DATA & STATE ----------
  let notes = [];
  let editModeId = null;
  let searchQuery = '';

  // DOM elements
  const notesContainer = document.getElementById('notesContainer');
  const noteCountSpan = document.getElementById('noteCount');
  const filteredCountSpan = document.getElementById('filteredCount');
  const searchInput = document.getElementById('searchInput');
  const newNoteBtn = document.getElementById('newNoteBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const deleteLastBtn = document.getElementById('deleteLastBtn');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  // ---------- UTILITIES ----------
  const generateId = () =>
    Date.now() + '-' + Math.random().toString(36).substring(2, 9);

  const formatDate = (timestamp) => {
    const d = new Date(timestamp);
    return (
      d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }) +
      ' · ' +
      d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
  };

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------- PERSISTENCE ----------
  const STORAGE_KEY = 'mujy_green_notepad';

  function loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        notes = JSON.parse(stored);
        notes = notes.map((n) => ({
          ...n,
          id: n.id || generateId(),
          createdAt: n.createdAt || Date.now(),
          updatedAt: n.updatedAt || n.createdAt || Date.now(),
        }));
      }
    } catch (e) {
      console.warn('Failed to load notes', e);
      notes = [];
    }

    if (notes.length === 0) {
      const now = Date.now();
      notes = [
        {
          id: generateId(),
          title: '🌱 Welcome to MUJY Green',
          content:
            'This is your dynamic notepad.\n\n• Edit title & content by clicking on them.\n• Use the toolbar to create, delete, or clear notes.\n• Search filters notes in real time.\n\nEverything is saved automatically in your browser.',
          createdAt: now,
          updatedAt: now,
        },
      ];
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.warn('Could not save notes', e);
    }
  }

  // ---------- RENDER ----------
  function renderNotes() {
    const query = searchQuery.trim().toLowerCase();
    const filtered = query
      ? notes.filter(
          (n) =>
            n.title.toLowerCase().includes(query) ||
            n.content.toLowerCase().includes(query)
        )
      : notes;

    noteCountSpan.textContent = notes.length;
    filteredCountSpan.textContent = filtered.length;

    if (notes.length === 0) {
      notesContainer.innerHTML = `
        <div class="empty-state">
          <span>🌿</span>
          <div>Your green notepad is empty.</div>
          <div style="font-size:1rem;">Click <strong>“New Note”</strong> to begin.</div>
        </div>
      `;
      return;
    }

    if (filtered.length === 0) {
      notesContainer.innerHTML = `
        <div class="empty-state">
          <span>🔍</span>
          <div>No notes match “${escapeHtml(searchQuery)}”.</div>
          <div style="font-size:1rem; margin-top:0.5rem;">Try a different keyword.</div>
        </div>
      `;
      return;
    }

    notesContainer.innerHTML = filtered
      .map((note) => {
        const isEditing = editModeId === note.id;
        return `
          <div class="note-card ${isEditing ? 'editing' : ''}" data-note-id="${note.id}">
            <div class="note-header">
              <span class="note-date">${formatDate(note.updatedAt || note.createdAt)}</span>
              <div class="note-actions">
                <button class="edit-btn" data-action="edit" data-id="${note.id}" title="Edit note">✏️</button>
                <button class="delete-btn" data-action="delete" data-id="${note.id}" title="Delete note">🗑️</button>
              </div>
            </div>
            <div class="note-title"
                 contenteditable="${isEditing}"
                 data-field="title"
                 data-id="${note.id}"
                 spellcheck="false">${escapeHtml(note.title)}</div>
            <div class="note-content"
                 contenteditable="${isEditing}"
                 data-field="content"
                 data-id="${note.id}"
                 spellcheck="false">${escapeHtml(note.content)}</div>
          </div>
        `;
      })
      .join('');
  }

  // ---------- EVENT LISTENERS ----------
  function attachContainerListeners() {
    notesContainer.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;
      const action = target.dataset.action;
      if (!action) return;
      const noteId = target.dataset.id;
      if (!noteId) return;

      if (action === 'delete') {
        deleteNoteById(noteId);
      } else if (action === 'edit') {
        toggleEditMode(noteId);
      }
    });

    notesContainer.addEventListener(
      'blur',
      (e) => {
        const el = e.target;
        if (!el.hasAttribute('contenteditable')) return;
        if (el.getAttribute('contenteditable') !== 'true') return;

        const field = el.dataset.field;
        const noteId = el.dataset.id;
        if (!field || !noteId) return;

        const newValue =
          el.innerText.trim() || (field === 'title' ? 'Untitled' : '');
        const note = notes.find((n) => n.id === noteId);
        if (!note) return;

        if (field === 'title' && note.title !== newValue) {
          note.title = newValue;
          note.updatedAt = Date.now();
          saveToStorage();
        } else if (field === 'content' && note.content !== newValue) {
          note.content = newValue;
          note.updatedAt = Date.now();
          saveToStorage();
        }

        if (editModeId === noteId) {
          editModeId = null;
        }
        setTimeout(() => renderNotes(), 50);
      },
      true
    );

    notesContainer.addEventListener('keydown', (e) => {
      if (e.target.classList.contains('note-title') && e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    });
  }

  // ---------- NOTE OPERATIONS ----------
  function deleteNoteById(id) {
    const index = notes.findIndex((n) => n.id === id);
    if (index === -1) return;
    notes.splice(index, 1);
    if (editModeId === id) editModeId = null;
    saveToStorage();
    renderNotes();
  }

  function toggleEditMode(id) {
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    if (editModeId === id) {
      editModeId = null;
    } else {
      editModeId = id;
    }
    renderNotes();

    if (editModeId === id) {
      const card = notesContainer.querySelector(
        `.note-card[data-note-id="${id}"]`
      );
      if (card) {
        const titleEl = card.querySelector('.note-title');
        if (titleEl) {
          titleEl.focus();
          const range = document.createRange();
          const sel = window.getSelection();
          range.selectNodeContents(titleEl);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  }

  function addNewNote() {
    const now = Date.now();
    const newNote = {
      id: generateId(),
      title: '🌿 New note',
      content: 'Write something green...',
      createdAt: now,
      updatedAt: now,
    };
    notes.unshift(newNote);
    saveToStorage();
    editModeId = newNote.id;
    renderNotes();

    setTimeout(() => {
      const newCard = notesContainer.querySelector(
        `.note-card[data-note-id="${newNote.id}"] .note-title`
      );
      if (newCard) newCard.focus();
    }, 60);
  }

  function clearAllNotes() {
    if (notes.length === 0) return;
    if (!confirm('Delete all notes? This cannot be undone.')) return;
    notes = [];
    editModeId = null;
    saveToStorage();
    renderNotes();
  }

  function deleteLastNote() {
    if (notes.length === 0) return;
    const lastIndex = notes.length - 1;
    const deleted = notes.splice(lastIndex, 1)[0];
    if (editModeId === deleted.id) editModeId = null;
    saveToStorage();
    renderNotes();
  }

  // ---------- SEARCH ----------
  function handleSearch() {
    searchQuery = searchInput.value;
    renderNotes();
  }

  // ---------- INIT ----------
  function init() {
    loadFromStorage();
    renderNotes();
    attachContainerListeners();

    newNoteBtn.addEventListener('click', addNewNote);
    clearAllBtn.addEventListener('click', clearAllNotes);
    deleteLastBtn.addEventListener('click', deleteLastNote);

    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      renderNotes();
      searchInput.focus();
    });

    window.addEventListener('beforeunload', () => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        activeEl.hasAttribute('contenteditable') &&
        activeEl.getAttribute('contenteditable') === 'true'
      ) {
        const field = activeEl.dataset.field;
        const noteId = activeEl.dataset.id;
        if (noteId && field) {
          const note = notes.find((n) => n.id === noteId);
          if (note) {
            const newVal =
              activeEl.innerText.trim() ||
              (field === 'title' ? 'Untitled' : '');
            if (field === 'title') note.title = newVal;
            else if (field === 'content') note.content = newVal;
            note.updatedAt = Date.now();
            saveToStorage();
          }
        }
      }
    });
  }

  init();
})();