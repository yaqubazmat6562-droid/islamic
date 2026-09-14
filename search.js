/* =========================================================
   ISLAMICWAY — FULLY DYNAMIC SEARCH ENGINE
   Searches: Quran, Hadith, Duas, Articles, Guidance
   ========================================================= */

const SearchEngine = {

    /* =====================================================
       SEARCH DATABASE
    ===================================================== */

    database: [

        /* ---------- QURAN SURAHS ---------- */
        { type: "quran", icon: "📖", title: "Surah Al-Fatihah", subtitle: "The Opening - 7 Ayahs", page: "quran", keywords: "fatiha fatihah opening first surah quran" },
        { type: "quran", icon: "📖", title: "Surah Al-Baqarah", subtitle: "The Cow - 286 Ayahs", page: "quran", keywords: "baqarah cow longest surah quran" },
        { type: "quran", icon: "📖", title: "Surah Yasin", subtitle: "Yaseen - 83 Ayahs", page: "quran", keywords: "yasin yaseen heart of quran" },
        { type: "quran", icon: "📖", title: "Surah Ar-Rahman", subtitle: "The Most Merciful - 78 Ayahs", page: "quran", keywords: "rahman merciful blessing quran" },
        { type: "quran", icon: "📖", title: "Surah Al-Mulk", subtitle: "The Sovereignty - 30 Ayahs", page: "quran", keywords: "mulk sovereignty protection quran" },
        { type: "quran", icon: "📖", title: "Surah Al-Kahf", subtitle: "The Cave - 110 Ayahs", page: "quran", keywords: "kahf cave friday light quran" },

        /* ---------- HADITH BOOKS ---------- */
        { type: "hadith", icon: "📚", title: "Sahih Bukhari", subtitle: "Imam Muhammad al-Bukhari", page: "hadith", keywords: "bukhari sahih most authentic hadith" },
        { type: "hadith", icon: "📚", title: "Sahih Muslim", subtitle: "Imam Muslim ibn al-Hajjaj", page: "hadith", keywords: "muslim sahih hadith collection" },
        { type: "hadith", icon: "📚", title: "Sunan Abu Dawud", subtitle: "Imam Abu Dawud", page: "hadith", keywords: "abu dawud sunan hadith" },
        { type: "hadith", icon: "📚", title: "Jami at-Tirmidhi", subtitle: "Imam al-Tirmidhi", page: "hadith", keywords: "tirmidhi jami hadith sunan" },
        { type: "hadith", icon: "📚", title: "Sunan an-Nasa'i", subtitle: "Imam an-Nasa'i", page: "hadith", keywords: "nasai sunan hadith" },
        { type: "hadith", icon: "📚", title: "Muwatta Imam Malik", subtitle: "Imam Malik ibn Anas", page: "hadith", keywords: "malik muwatta hadith" },

        /* ---------- DUAS ---------- */
        { type: "dua", icon: "🤲", title: "Morning Dua", subtitle: "Dua for starting the day", page: "duas", keywords: "morning subah fajr dua start day" },
        { type: "dua", icon: "🤲", title: "Evening Dua", subtitle: "Dua for evening protection", page: "duas", keywords: "evening shaam maghrib dua protection" },
        { type: "dua", icon: "🤲", title: "Dua for Forgiveness", subtitle: "Seek Allah's mercy", page: "duas", keywords: "forgiveness maghfirat istighfar tawbah mercy" },
        { type: "dua", icon: "🤲", title: "Dua for Protection", subtitle: "Protection from evil", page: "duas", keywords: "protection hifazat evil nazar bad" },
        { type: "dua", icon: "🤲", title: "Dua for Travel", subtitle: "Safety during journeys", page: "duas", keywords: "travel safar journey safety" },
        { type: "dua", icon: "🤲", title: "Dua Before Eating", subtitle: "Bismillah", page: "duas", keywords: "eating food khana bismillah" },
        { type: "dua", icon: "🤲", title: "Dua Before Sleeping", subtitle: "Sleep with Allah's name", page: "duas", keywords: "sleeping sleep sone raat night dua" },
        { type: "dua", icon: "🤲", title: "Dua for Family", subtitle: "Blessings for family", page: "duas", keywords: "family ahl ghar blessings" },

        /* ---------- ARTICLES ---------- */
        { type: "article", icon: "📝", title: "A Step Closer to Allah", subtitle: "Strengthen your connection", page: "articles", keywords: "closer to allah connection journey relationship" },
        { type: "article", icon: "📝", title: "The Beauty of the Quran", subtitle: "Discover Quranic guidance", page: "articles", keywords: "beauty quran holy book guidance" },
        { type: "article", icon: "📝", title: "Power of Dua", subtitle: "Understanding Dua's importance", page: "articles", keywords: "power dua supplication prayer importance" },
        { type: "article", icon: "📝", title: "Patience and Trust in Allah", subtitle: "Sabr and Tawakkul", page: "articles", keywords: "patience sabr tawakkul trust allah" },
        { type: "article", icon: "📝", title: "The Beauty of Good Character", subtitle: "Akhlaq in Islam", page: "articles", keywords: "character akhlaq good manners kindness" },

        /* ---------- GUIDANCE ---------- */
        { type: "guidance", icon: "🧭", title: "Guidance from the Quran", subtitle: "Quran 17:9", page: "guidance", keywords: "guidance quran hidayah" },
        { type: "guidance", icon: "🧭", title: "Importance of Salah", subtitle: "Quran 2:43", page: "guidance", keywords: "salah prayer namaz importance worship" },
        { type: "guidance", icon: "🧭", title: "Be Patient", subtitle: "Quran 2:153", page: "guidance", keywords: "patience sabr hardship" },
        { type: "guidance", icon: "🧭", title: "Kindness to Parents", subtitle: "Quran 17:23", page: "guidance", keywords: "parents walidain kindness respect family" },
        { type: "guidance", icon: "🧭", title: "Good Character", subtitle: "Quran 2:83", page: "guidance", keywords: "character akhlaq good speak" },
        { type: "guidance", icon: "🧭", title: "Eat What Is Halal", subtitle: "Quran 2:172", page: "guidance", keywords: "halal haram food eat tayyib" },
        { type: "guidance", icon: "🧭", title: "Remember Allah", subtitle: "Quran 13:28", page: "guidance", keywords: "dhikr remember allah peace heart" },
        { type: "guidance", icon: "🧭", title: "Trust in Allah", subtitle: "Quran 5:23", page: "guidance", keywords: "trust tawakkul allah believers" },
        { type: "guidance", icon: "🧭", title: "Purpose of Fasting", subtitle: "Quran 2:183", page: "guidance", keywords: "fasting roza ramadan taqwa" },
        { type: "guidance", icon: "🧭", title: "Forgive Others", subtitle: "Quran 24:22", page: "guidance", keywords: "forgive pardon overlook mercy" },
        { type: "guidance", icon: "🧭", title: "Be Thankful", subtitle: "Quran 14:7", page: "guidance", keywords: "thankful shukr gratitude blessings" },
        { type: "guidance", icon: "🧭", title: "Hope in Allah", subtitle: "Quran 39:53", page: "guidance", keywords: "hope rahmah mercy despair" }
    ],

    /* =====================================================
       SEARCH FUNCTION
    ===================================================== */

    search(query) {

        if (!query || query.trim().length < 2) {
            return [];
        }

        const q = query.toLowerCase().trim();

        return this.database.filter(item => {

            return (
                item.title.toLowerCase().includes(q) ||
                item.subtitle.toLowerCase().includes(q) ||
                item.keywords.toLowerCase().includes(q) ||
                item.type.toLowerCase().includes(q)
            );

        });

    },

    /* =====================================================
       GET POPULAR SUGGESTIONS
    ===================================================== */

    getPopular() {
        return [
            "Quran", "Hadith", "Dua", "Salah",
            "Patience", "Forgiveness", "Ramadan", "Parents",
            "Morning Dua", "Surah Yasin", "Sahih Bukhari",
            "Guidance", "Halal", "Character", "Trust in Allah"
        ];
    },

    /* =====================================================
       GET CATEGORY FILTER
    ===================================================== */

    filterByType(results, type) {
        if (type === "all") return results;
        return results.filter(r => r.type === type);
    }

};


/* =========================================================
   SEARCH PAGE UI — INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       DOM ELEMENTS
    ============================================ */

    const searchInput = document.getElementById("globalSearchInput");
    const searchBtn = document.getElementById("globalSearchBtn");
    const resultsContainer = document.getElementById("searchResults");
    const popularContainer = document.getElementById("popularSearches");
    const filterTabs = document.querySelectorAll(".search-filter-tab");
    const emptyState = document.getElementById("searchEmptyState");
    const suggestionBox = document.getElementById("searchSuggestions");


    /* ============================================
       STATE
    ============================================ */

    let currentQuery = "";
    let currentFilter = "all";
    let currentResults = [];


    /* ============================================
       POPULAR SEARCHES — RENDER
    ============================================ */

    if (popularContainer) {

        const popular = SearchEngine.getPopular();

        popularContainer.innerHTML = popular.map(p =>
            `<button class="popular-chip" data-query="${p}">${p}</button>`
        ).join("");

        popularContainer.querySelectorAll(".popular-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                const q = chip.dataset.query;
                if (searchInput) searchInput.value = q;
                performSearch(q);
            });
        });
    }


    /* ============================================
       LIVE SEARCH — AS USER TYPES
    ============================================ */

    if (searchInput) {

        let debounceTimer;

        searchInput.addEventListener("input", function () {

            const value = this.value.trim();

            // Live suggestions
            showSuggestions(value);

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (value.length >= 2) {
                    performSearch(value);
                } else if (value.length === 0) {
                    clearResults();
                }
            }, 250);

        });

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                performSearch(this.value.trim());
                hideSuggestions();
            }
            if (event.key === "Escape") {
                hideSuggestions();
            }
        });

    }


    /* ============================================
       SEARCH BUTTON
    ============================================ */

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            if (searchInput) {
                performSearch(searchInput.value.trim());
                hideSuggestions();
            }
        });
    }


    /* ============================================
       FILTER TABS
    ============================================ */

    filterTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            currentFilter = tab.dataset.filter;

            if (currentQuery) {
                performSearch(currentQuery);
            }
        });
    });


    /* ============================================
       PERFORM SEARCH
    ============================================ */

    function performSearch(query) {

        currentQuery = query;

        if (!query || query.length < 2) {
            clearResults();
            return;
        }

        // Search the database
        let results = SearchEngine.search(query);

        // Apply type filter
        results = SearchEngine.filterByType(results, currentFilter);

        currentResults = results;

        renderResults(results, query);

    }


    /* ============================================
       RENDER RESULTS
    ============================================ */

    function renderResults(results, query) {

        if (!resultsContainer) return;

        // Hide empty state
        if (emptyState) emptyState.style.display = "none";

        if (results.length === 0) {

            resultsContainer.innerHTML = "";

            if (emptyState) {
                emptyState.style.display = "block";
                emptyState.innerHTML = `
                    <div class="search-empty-icon">🔍</div>
                    <h3>No results found for "${escapeHtml(query)}"</h3>
                    <p>Try different keywords or browse popular searches above.</p>
                `;
            }
            return;
        }

        resultsContainer.innerHTML = results.map(item => `
            <div class="search-result-card" data-page="${item.page}" data-type="${item.type}">
                <div class="search-result-icon">${item.icon}</div>
                <div class="search-result-content">
                    <div class="search-result-type">${getTypeLabel(item.type)}</div>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.subtitle)}</p>
                </div>
                <div class="search-result-arrow">→</div>
            </div>
        `).join("");

        // Attach click handlers
        resultsContainer.querySelectorAll(".search-result-card").forEach(card => {
            card.addEventListener("click", () => {
                const page = card.dataset.page;
                if (page && typeof showPage === "function") {
                    showPage(page);
                } else if (page) {
                    window.location.hash = page;
                }
            });
        });
    }


    /* ============================================
       CLEAR RESULTS
    ============================================ */

    function clearResults() {

        if (resultsContainer) resultsContainer.innerHTML = "";
        if (emptyState) emptyState.style.display = "none";
    }


    /* ============================================
       LIVE SUGGESTIONS
    ============================================ */

    function showSuggestions(query) {

        if (!suggestionBox) return;

        if (!query || query.length < 2) {
            hideSuggestions();
            return;
        }

        const matches = SearchEngine.search(query).slice(0, 6);

        if (matches.length === 0) {
            hideSuggestions();
            return;
        }

        suggestionBox.innerHTML = matches.map(item => `
            <div class="suggestion-item" data-query="${escapeHtml(item.title)}">
                <span class="suggestion-icon">${item.icon}</span>
                <span class="suggestion-text">${highlightMatch(item.title, query)}</span>
                <span class="suggestion-type">${getTypeLabel(item.type)}</span>
            </div>
        `).join("");

        suggestionBox.style.display = "block";

        suggestionBox.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                const q = item.dataset.query;
                if (searchInput) searchInput.value = q;
                performSearch(q);
                hideSuggestions();
            });
        });
    }


    function hideSuggestions() {
        if (suggestionBox) suggestionBox.style.display = "none";
    }


    /* ============================================
       HIGHLIGHT MATCH
    ============================================ */

    function highlightMatch(text, query) {

        const safeText = escapeHtml(text);
        const safeQuery = escapeHtml(query);

        const regex = new RegExp(`(${safeQuery})`, "gi");

        return safeText.replace(regex, `<mark>$1</mark>`);
    }


    /* ============================================
       GET TYPE LABEL
    ============================================ */

    function getTypeLabel(type) {

        const labels = {
            quran: "Quran",
            hadith: "Hadith",
            dua: "Dua",
            article: "Article",
            guidance: "Guidance"
        };

        return labels[type] || "Result";
    }


    /* ============================================
       ESCAPE HTML
    ============================================ */

    function escapeHtml(text) {
        return String(text ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* ============================================
       CLICK OUTSIDE → HIDE SUGGESTIONS
    ============================================ */

    document.addEventListener("click", (event) => {

        if (!suggestionBox) return;

        const searchWrapper = document.querySelector(".search-input-wrapper");

        if (searchWrapper && !searchWrapper.contains(event.target)) {
            hideSuggestions();
        }
    });


    /* ============================================
       KEYBOARD SHORTCUT: "/" FOCUS SEARCH
    ============================================ */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {
            event.preventDefault();

            const page = document.getElementById("page-search");

            if (page && !page.classList.contains("active-page")) {

                if (typeof showPage === "function") {
                    showPage("search");
                }

                setTimeout(() => {
                    if (searchInput) searchInput.focus();
                }, 200);

            } else if (searchInput) {
                searchInput.focus();
            }
        }
    });


    /* ============================================
       INITIAL STATE
    ============================================ */

    if (emptyState) emptyState.style.display = "none";

});