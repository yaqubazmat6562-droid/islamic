/* =========================================================
   ISLAMICWAY — DYNAMIC SEARCH ENGINE v4.0
   ✅ Quran: Surah number, name, ayah
   ✅ Hadith: #15, 15, keywords
   ✅ Duas: title, text, category
   ✅ Guidance + Articles
========================================================= */

const SearchEngine = {

    index: [],
    isBuilt: false,

    buildIndex() {
        if (this.isBuilt) return;
        this.index = [];

        /* ---------- QURAN ---------- */
        if (typeof ISLAMIC_DATABASE !== "undefined" && ISLAMIC_DATABASE.quranSurahs) {
            ISLAMIC_DATABASE.quranSurahs.forEach(surah => {
                this.index.push({
                    type: "quran",
                    icon: "📖",
                    title: `Surah ${surah.englishName}`,
                    subtitle: `${surah.englishNameTranslation} • ${surah.numberOfAyahs} Ayahs • Surah #${surah.number}`,
                    page: "quran",
                    surahNumber: surah.number,
                    keywords: `${surah.englishName} ${surah.name} ${surah.englishNameTranslation} surah ${surah.number} quran ${surah.revelationType}`.toLowerCase()
                });
            });
        }

        /* ---------- HADITH ---------- */
        if (typeof ISLAMIC_DATABASE !== "undefined" && ISLAMIC_DATABASE.hadithBooks) {
            Object.entries(ISLAMIC_DATABASE.hadithBooks).forEach(([bookKey, book]) => {

                // Book itself
                this.index.push({
                    type: "hadith",
                    icon: "📚",
                    title: book.title,
                    subtitle: `${book.author} • ${book.hadiths.length} Hadiths`,
                    page: "hadith",
                    bookKey: bookKey,
                    keywords: `${book.title} ${book.arabic} ${book.author} ${bookKey} hadith book collection`.toLowerCase()
                });

                // Individual hadiths (searchable by number)
                book.hadiths.forEach((hadith, idx) => {
                    const hadithNum = idx + 1;
                    this.index.push({
                        type: "hadith",
                        icon: "📜",
                        title: `${book.title} — Hadith #${hadithNum}`,
                        subtitle: hadith.urdu ? hadith.urdu.substring(0, 90) + "..." : hadith.arabic.substring(0, 70) + "...",
                        page: "hadith",
                        bookKey: bookKey,
                        hadithNumber: hadithNum,
                        keywords: `${book.title} hadith ${hadithNum} #${hadithNum} number ${hadithNum} ${bookKey} ${hadith.urdu || ""} ${hadith.arabic || ""}`.toLowerCase()
                    });
                });
            });
        }

        /* ---------- DUAS ---------- */
        if (typeof ISLAMIC_DATABASE !== "undefined" && ISLAMIC_DATABASE.duas) {
            ISLAMIC_DATABASE.duas.forEach(dua => {
                this.index.push({
                    type: "dua",
                    icon: "🤲",
                    title: dua.title,
                    subtitle: dua.urdu ? dua.urdu.substring(0, 80) : dua.english.substring(0, 80),
                    page: "duas",
                    duaId: dua.id,
                    keywords: `${dua.title} ${dua.arabic} ${dua.urdu} ${dua.english} ${dua.category} ${dua.reference} dua ${dua.id}`.toLowerCase()
                });
            });
        }

        /* ---------- GUIDANCE ---------- */
        if (typeof ISLAMIC_DATABASE !== "undefined" && ISLAMIC_DATABASE.guidance) {
            ISLAMIC_DATABASE.guidance.forEach(item => {
                this.index.push({
                    type: "guidance",
                    icon: "🧭",
                    title: item.title,
                    subtitle: item.english ? item.english.substring(0, 80) : item.urdu.substring(0, 80),
                    page: "guidance",
                    guidanceId: item.id,
                    keywords: `${item.title} ${item.arabic} ${item.urdu} ${item.english} ${item.content} ${item.category} ${item.reference} guidance ${item.id}`.toLowerCase()
                });
            });
        }

        /* ---------- ARTICLES ---------- */
        const articlesList = [
            { id: 1, icon: "🕌", title: "A Step Closer to Allah", subtitle: "Strengthen your connection with Allah", keywords: "step closer allah connection journey relationship near" },
            { id: 2, icon: "❤️", title: "Patience and Trust in Allah", subtitle: "Sabr and Tawakkul in Islam", keywords: "patience sabr tawakkul trust allah hardship" },
            { id: 3, icon: "🌙", title: "The Beauty of Good Character", subtitle: "Akhlaq in Islam", keywords: "character akhlaq good manners kindness beauty" }
        ];

        articlesList.forEach(art => {
            this.index.push({
                type: "article",
                icon: "📝",
                title: art.title,
                subtitle: art.subtitle,
                page: "articles",
                articleId: art.id,
                keywords: `${art.title} ${art.keywords} article`.toLowerCase()
            });
        });

        this.isBuilt = true;
        console.log(`[SearchEngine] Index built: ${this.index.length} items ✅`);
    },

    search(query) {
        if (!this.isBuilt) this.buildIndex();
        if (!query || query.trim().length < 1) return [];

        const q = query.toLowerCase().trim();
        const results = [];

        this.index.forEach(item => {
            let score = 0;

            // Exact #number
            const numberMatch = q.match(/^#?(\d+)$/);
            if (numberMatch) {
                const num = parseInt(numberMatch[1], 10);
                if (item.type === "hadith" && item.hadithNumber === num) score += 100;
                if (item.type === "quran" && item.surahNumber === num) score += 100;
                if (item.type === "dua" && item.duaId === num) score += 80;
                if (item.type === "guidance" && item.guidanceId === num) score += 80;
            }

            if (item.title.toLowerCase() === q) score += 50;
            if (item.title.toLowerCase().includes(q)) score += 30;
            if (item.subtitle && item.subtitle.toLowerCase().includes(q)) score += 15;
            if (item.keywords && item.keywords.includes(q)) score += 10;

            const words = q.split(/\s+/).filter(w => w.length > 1);
            if (words.length > 1) {
                const matchedWords = words.filter(w => item.keywords && item.keywords.includes(w));
                score += matchedWords.length * 5;
            }

            if (score > 0) results.push({ ...item, score });
        });

        results.sort((a, b) => b.score - a.score);
        return results.slice(0, 50);
    },

    getPopular() {
        return ["Surah Yasin", "Sahih Bukhari", "Morning Dua", "Patience", "Forgiveness", "Ramadan", "Parents", "#15", "#100", "#300"];
    },

    filterByType(results, type) {
        if (type === "all") return results;
        return results.filter(r => r.type === type);
    }
};

/* =========================================================
   SEARCH PAGE UI
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("globalSearchInput");
    const searchBtn = document.getElementById("globalSearchBtn");
    const resultsContainer = document.getElementById("searchResults");
    const popularContainer = document.getElementById("popularSearches");
    const filterTabs = document.querySelectorAll(".search-filter-tab");
    const emptyState = document.getElementById("searchEmptyState");
    const suggestionBox = document.getElementById("searchSuggestions");

    let currentQuery = "";
    let currentFilter = "all";

    function initSearchIndex() {
        if (typeof ISLAMIC_DATABASE !== "undefined") {
            SearchEngine.buildIndex();
            renderPopularSearches();
        } else {
            setTimeout(initSearchIndex, 200);
        }
    }
    initSearchIndex();

    function renderPopularSearches() {
        if (!popularContainer) return;
        popularContainer.innerHTML = SearchEngine.getPopular().map(p =>
            `<button class="popular-chip" data-query="${p}">${p}</button>`
        ).join("");
        popularContainer.querySelectorAll(".popular-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                const q = chip.dataset.query;
                if (searchInput) searchInput.value = q;
                performSearch(q);
                hideSuggestions();
            });
        });
    }

    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener("input", function () {
            const value = this.value.trim();
            showSuggestions(value);
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (value.length >= 1) performSearch(value);
                else clearResults();
            }, 250);
        });
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                performSearch(this.value.trim());
                hideSuggestions();
            }
            if (event.key === "Escape") hideSuggestions();
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            if (searchInput) {
                performSearch(searchInput.value.trim());
                hideSuggestions();
            }
        });
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.dataset.filter;
            if (currentQuery) performSearch(currentQuery);
        });
    });

    function performSearch(query) {
        currentQuery = query;
        if (!query || query.length < 1) { clearResults(); return; }
        let results = SearchEngine.search(query);
        results = SearchEngine.filterByType(results, currentFilter);
        renderResults(results, query);
    }

    function renderResults(results, query) {
        if (!resultsContainer) return;
        if (emptyState) emptyState.style.display = "none";

        if (results.length === 0) {
            resultsContainer.innerHTML = "";
            if (emptyState) {
                emptyState.style.display = "block";
                emptyState.innerHTML = `
                    <div class="search-empty-icon">🔍</div>
                    <h3>No results for "${escapeHtml(query)}"</h3>
                    <p>Try: <strong>Surah Yasin</strong>, <strong>Sahih Bukhari</strong>, <strong>#15</strong>, or <strong>Morning Dua</strong></p>
                `;
            }
            return;
        }

        resultsContainer.innerHTML = results.map((item, idx) => `
            <div class="search-result-card"
                 data-page="${item.page}"
                 data-type="${item.type}"
                 data-surah="${item.surahNumber || ''}"
                 data-book="${item.bookKey || ''}"
                 data-hadith="${item.hadithNumber || ''}"
                 data-dua="${item.duaId || ''}"
                 data-guidance="${item.guidanceId || ''}"
                 data-article="${item.articleId || ''}"
                 data-index="${idx}">
                <div class="search-result-icon">${item.icon}</div>
                <div class="search-result-content">
                    <div class="search-result-type">${getTypeLabel(item.type)}</div>
                    <h3>${highlight(item.title, query)}</h3>
                    <p>${escapeHtml(item.subtitle)}</p>
                </div>
                <div class="search-result-arrow">→</div>
            </div>
        `).join("");

        resultsContainer.querySelectorAll(".search-result-card").forEach(card => {
            card.addEventListener("click", () => handleResultClick(card));
        });
    }

    function handleResultClick(card) {
        const page = card.dataset.page;
        const type = card.dataset.type;
        const surahNum = card.dataset.surah;
        const bookKey = card.dataset.book;
        const hadithNum = card.dataset.hadith;
        const duaId = card.dataset.dua;
        const guidanceId = card.dataset.guidance;
        const articleId = card.dataset.article;

        hideSuggestions();

        if (typeof showPage === "function") showPage(page);

        setTimeout(() => {
            // QURAN
            if (type === "quran" && surahNum) {
                if (typeof openSurah === "function") openSurah(parseInt(surahNum, 10));
            }
            // HADITH
            if (type === "hadith" && bookKey) {
                if (typeof window.openHadithBookBySearch === "function") {
                    window.openHadithBookBySearch(bookKey, hadithNum ? parseInt(hadithNum, 10) : null);
                }
            }
            // DUA
            if (type === "dua" && duaId) {
                if (typeof openDuaReader === "function") {
                    const idx = (ISLAMIC_DATABASE?.duas || []).findIndex(d => d.id === parseInt(duaId, 10));
                    if (idx !== -1) openDuaReader(idx);
                }
            }
            // GUIDANCE
            if (type === "guidance" && guidanceId) {
                if (typeof openGuidanceReader === "function") {
                    const idx = (ISLAMIC_DATABASE?.guidance || []).findIndex(g => g.id === parseInt(guidanceId, 10));
                    if (idx !== -1) openGuidanceReader(idx);
                }
            }
            // ARTICLE
            if (type === "article" && articleId) {
                if (typeof openArticle === "function") openArticle(parseInt(articleId, 10));
            }
        }, 350);
    }

    function clearResults() {
        if (resultsContainer) resultsContainer.innerHTML = "";
        if (emptyState) emptyState.style.display = "none";
    }

    function showSuggestions(query) {
        if (!suggestionBox) return;
        if (!query || query.length < 1) { hideSuggestions(); return; }

        const matches = SearchEngine.search(query).slice(0, 7);
        if (matches.length === 0) { hideSuggestions(); return; }

        suggestionBox.innerHTML = matches.map(item => `
            <div class="suggestion-item"
                 data-page="${item.page}"
                 data-type="${item.type}"
                 data-surah="${item.surahNumber || ''}"
                 data-book="${item.bookKey || ''}"
                 data-hadith="${item.hadithNumber || ''}"
                 data-dua="${item.duaId || ''}"
                 data-guidance="${item.guidanceId || ''}"
                 data-article="${item.articleId || ''}">
                <span class="suggestion-icon">${item.icon}</span>
                <span class="suggestion-text">${highlight(item.title, query)}</span>
                <span class="suggestion-type">${getTypeLabel(item.type)}</span>
            </div>
        `).join("");

        suggestionBox.style.display = "block";

        suggestionBox.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                const titleText = item.querySelector(".suggestion-text").textContent;
                if (searchInput) searchInput.value = titleText;
                handleResultClick(item);
            });
        });
    }

    function hideSuggestions() {
        if (suggestionBox) suggestionBox.style.display = "none";
    }

    function getTypeLabel(type) {
        return {
            quran: "Quran",
            hadith: "Hadith",
            dua: "Dua",
            article: "Article",
            guidance: "Guidance"
        }[type] || "Result";
    }

    function highlight(text, query) {
        const safeText = escapeHtml(text);
        if (!query) return safeText;

        const numMatch = query.match(/^#?(\d+)$/);
        if (numMatch) {
            const regex = new RegExp(`(#?${numMatch[1]})`, "gi");
            return safeText.replace(regex, `<mark>$1</mark>`);
        }

        const words = query.split(/\s+/).filter(w => w.length > 1);
        if (words.length === 0) return safeText;

        const regex = new RegExp(`(${words.map(escapeRegex).join("|")})`, "gi");
        return safeText.replace(regex, `<mark>$1</mark>`);
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function escapeHtml(text) {
        return String(text ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    document.addEventListener("click", (event) => {
        if (!suggestionBox) return;
        const wrapper = document.querySelector(".search-input-wrapper");
        if (wrapper && !wrapper.contains(event.target)) {
            hideSuggestions();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {
            event.preventDefault();
            const page = document.getElementById("page-search");
            if (page && !page.classList.contains("active-page")) {
                if (typeof showPage === "function") showPage("search");
                setTimeout(() => searchInput && searchInput.focus(), 200);
            } else if (searchInput) {
                searchInput.focus();
            }
        }
    });

    if (emptyState) emptyState.style.display = "none";
});