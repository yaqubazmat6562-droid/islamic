/* =========================================================
   AL ASSISTANT — INTELLIGENT CHATBOT
   Local Database Se Jawab Deta Hai
   Koi AI API Nahi Chahiye
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       DOM ELEMENTS
    ===================================================== */
    const assistantBtn = document.getElementById("alAssistantBtn");
    const chatWindow = document.getElementById("alChatWindow");
    const closeBtn = document.getElementById("alChatClose");
    const messagesArea = document.getElementById("alChatMessages");
    const inputField = document.getElementById("alChatInput");
    const sendBtn = document.getElementById("alChatSend");
    const suggestionsArea = document.getElementById("alSuggestions");

    let isProcessing = false;

    /* =====================================================
       INITIALIZE
    ===================================================== */
    function init() {
        if (!assistantBtn || !chatWindow) {
            console.warn("[Al Assistant] Elements not found");
            return;
        }

        assistantBtn.addEventListener("click", toggleChat);
        closeBtn.addEventListener("click", toggleChat);
        sendBtn.addEventListener("click", handleSend);
        inputField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") handleSend();
        });

        // Welcome message
        setTimeout(() => {
            addBotMessage(
                "السلام علیکم! 🌿\n\nمیں <strong>Al Assistant</strong> ہوں۔ آپ مجھ سے پوچھ سکتے ہیں:\n\n" +
                "📖 قرآن کی کوئی سورت\n📚 کسی بھی حدیث کتاب کی حدیث\n🤲 کوئی بھی دعا\n🧭 اسلامی رہنمائی\n\n" +
                "نیچے دیے گئے بٹن دبائیں یا اپنا سوال لکھیں!"
            );
            renderSuggestions();
        }, 300);
    }

    /* =====================================================
       TOGGLE CHAT WINDOW
    ===================================================== */
    function toggleChat() {
        chatWindow.classList.toggle("active");
        if (chatWindow.classList.contains("active")) {
            setTimeout(() => inputField.focus(), 300);
        }
    }

    /* =====================================================
       HANDLE SEND
    ===================================================== */
    function handleSend() {
        const query = inputField.value.trim();
        if (!query || isProcessing) return;

        addUserMessage(query);
        inputField.value = "";
        isProcessing = true;
        sendBtn.disabled = true;

        showTyping();

        setTimeout(() => {
            hideTyping();
            const response = processQuery(query);
            addBotMessage(response);
            isProcessing = false;
            sendBtn.disabled = false;
            inputField.focus();
        }, 600);
    }

    /* =====================================================
       ADD MESSAGES
    ===================================================== */
    function addUserMessage(text) {
        const div = document.createElement("div");
        div.className = "al-msg user";
        div.textContent = text;
        messagesArea.appendChild(div);
        scrollToBottom();
    }

    function addBotMessage(html) {
        const div = document.createElement("div");
        div.className = "al-msg bot";
        div.innerHTML = html;
        messagesArea.appendChild(div);
        scrollToBottom();
    }

    function showTyping() {
        const div = document.createElement("div");
        div.className = "al-typing";
        div.id = "alTypingIndicator";
        div.innerHTML = "<span></span><span></span><span></span>";
        messagesArea.appendChild(div);
        scrollToBottom();
    }

    function hideTyping() {
        const typing = document.getElementById("alTypingIndicator");
        if (typing) typing.remove();
    }

    function scrollToBottom() {
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    /* =====================================================
       SUGGESTIONS (Quick Reply Buttons)
    ===================================================== */
    function renderSuggestions() {
        const suggestions = [
            { text: "📖 سورۃ الفاتحہ", query: "surah fatiha" },
            { text: "📖 سورۃ یٰسین", query: "surah yasin" },
            { text: "📚 بخاری حدیث 1", query: "bukhari hadith 1" },
            { text: "🤲 صبح کی دعا", query: "morning dua" },
            { text: "🤲 مغفرت کی دعا", query: "forgiveness dua" },
            { text: "🧭 صبر کی رہنمائی", query: "patience guidance" },
            { text: "🧭 نماز کی اہمیت", query: "salah guidance" }
        ];

        suggestionsArea.innerHTML = "";
        suggestions.forEach(s => {
            const btn = document.createElement("button");
            btn.className = "al-suggestion-chip";
            btn.textContent = s.text;
            btn.addEventListener("click", () => {
                inputField.value = s.query;
                handleSend();
            });
            suggestionsArea.appendChild(btn);
        });
    }

    /* =====================================================
       QUERY PROCESSOR — MAIN BRAIN
    ===================================================== */
    function processQuery(query) {
        if (typeof ISLAMIC_DATABASE === "undefined") {
            return "⚠️ Database load nahi hua. Please refresh karein.";
        }

        const q = query.toLowerCase().trim();

        /* ---- 1. SURAH QUERY ---- */
        const surahResult = findSurah(q);
        if (surahResult) return surahResult;

        /* ---- 2. HADITH QUERY ---- */
        const hadithResult = findHadith(q);
        if (hadithResult) return hadithResult;

        /* ---- 3. DUA QUERY ---- */
        const duaResult = findDua(q);
        if (duaResult) return duaResult;

        /* ---- 4. GUIDANCE QUERY ---- */
        const guidanceResult = findGuidance(q);
        if (guidanceResult) return guidanceResult;

        /* ---- 5. GREETING / HELP ---- */
        if (q.match(/^(salam|assalam|hi|hello|hey|السلام|ہیلو)/)) {
            return "وعلیکم السلام! 🌿<br><br>کیسے مدد کر سکتا ہوں؟<br><br>آپ پوچھ سکتے ہیں:<br>• \"Surah Fatiha\"<br>• \"Bukhari hadith 5\"<br>• \"Morning dua\"<br>• \"Patience\"";
        }

        if (q.match(/help|madad|مدد|کیا کر/) || q.length < 3) {
            return "🌿 <strong>میں آپ کی مدد کر سکتا ہوں:</strong><br><br>" +
                   "📖 <strong>Quran:</strong> \"Surah Fatiha\" ya \"سورۃ یٰسین\"<br>" +
                   "📚 <strong>Hadith:</strong> \"Bukhari hadith 1\" ya \"Muslim 15\"<br>" +
                   "🤲 <strong>Dua:</strong> \"Morning dua\" ya \"Forgiveness dua\"<br>" +
                   "🧭 <strong>Guidance:</strong> \"Patience\" ya \"Salah\"<br><br>" +
                   "اپنا سوال اردو یا انگریزی میں لکھیں۔";
        }

        /* ---- 6. FALLBACK ---- */
        return "🤔 مجھے اس کا جواب نہیں ملا: <strong>\"" + escapeHtml(query) + "\"</strong><br><br>" +
               "براہ کرم یہ کوشش کریں:<br>" +
               "• <strong>Surah</strong> ka naam likhein (e.g. \"Surah Baqarah\")<br>" +
               "• <strong>Hadith book + number</strong> (e.g. \"Bukhari 15\")<br>" +
               "• <strong>Dua category</strong> (e.g. \"Morning dua\")<br>" +
               "• <strong>Topic</strong> (e.g. \"Patience\", \"Salah\")";
    }

    /* =====================================================
       FIND SURAH
    ===================================================== */
    function findSurah(q) {
        // Detect "surah X" or "سورۃ X" or just surah name
        const surahMatch = q.match(/(?:surah|سورۃ|سورہ)\s*([a-z\u0600-\u06FF\s]+)/i);
        if (!surahMatch) return null;

        const searchName = surahMatch[1].trim();

        // Find in database
        const surahs = ISLAMIC_DATABASE.quranSurahs || [];
        let found = null;

        for (const s of surahs) {
            const engName = s.englishName.toLowerCase();
            const engTrans = s.englishNameTranslation.toLowerCase();
            
            if (engName.includes(searchName) ||
                engTrans.includes(searchName) ||
                searchName.includes(engName)) {
                found = s;
                break;
            }
        }

        // Check by number: "surah 36"
        const numMatch = q.match(/(?:surah|سورۃ)\s*(\d+)/);
        if (numMatch) {
            const num = parseInt(numMatch[1]);
            found = surahs.find(s => s.number === num);
        }

        if (!found) return null;

        const content = ISLAMIC_DATABASE.quranContent[found.number];
        if (!content) {
            return `📖 <strong>${found.englishName}</strong> (Surah ${found.number})<br>` +
                   `<em>${found.englishNameTranslation}</em><br><br>` +
                   `Ayahs: ${found.numberOfAyahs} | ${found.revelationType}<br><br>` +
                   `⚠️ Is Surah ka full content abhi offline available nahi.`;
        }

        // Build response with first 5 ayahs
        const maxAyahs = Math.min(5, content.arabic.length);
        let html = `<span class="al-label">📖 SURAH ${found.number}</span>` +
                   `<strong style="font-size:16px;">${found.englishName}</strong><br>` +
                   `<em style="color:#a9d8b8;font-size:12px;">${found.englishNameTranslation} • ${found.numberOfAyahs} Ayahs • ${found.revelationType}</em>`;

        for (let i = 0; i < maxAyahs; i++) {
            html += `<span class="al-arabic">${content.arabic[i]}</span>`;
            if (content.urdu && content.urdu[i]) {
                html += `<span class="al-urdu">${content.urdu[i]}</span>`;
            }
        }

        if (content.arabic.length > maxAyahs) {
            html += `<span class="al-reference">... aur ${content.arabic.length - maxAyahs} ayahs baqi hain. Poori Surah Quran page par dekhein.</span>`;
        }

        return html;
    }

    /* =====================================================
       FIND HADITH
    ===================================================== */
    function findHadith(q) {
        // Detect "bukhari 15" or "bukhari hadith 15"
        const hadithMatch = q.match(/(bukhari|muslim|abudawud|abu dawud|tirmidhi|nasai|malik)\s*(?:hadith\s*)?(\d+)?/i);
        if (!hadithMatch) return null;

        const bookKey = normalizeBookName(hadithMatch[1]);
        const hadithNum = hadithMatch[2] ? parseInt(hadithMatch[2]) : null;

        const book = ISLAMIC_DATABASE.getHadithBook(bookKey);
        if (!book) return null;

        if (!hadithNum) {
            // Show book info
            return `<span class="al-label">📚 HADITH BOOK</span>` +
                   `<strong style="font-size:16px;">${book.title}</strong><br>` +
                   `<em style="color:#a9d8b8;">${book.arabic} • ${book.author}</em><br><br>` +
                   `Total Hadiths: <strong>${book.hadiths.length}</strong><br><br>` +
                   `Specific hadith ke liye likhein: <em>"${hadithMatch[1]} hadith 5"</em>`;
        }

        const hadith = book.hadiths[hadithNum - 1];
        if (!hadith) {
            return `⚠️ ${book.title} mein hadith #${hadithNum} nahi mili. Total: ${book.hadiths.length}`;
        }

        return `<span class="al-label">📚 ${book.title.toUpperCase()} • HADITH #${hadithNum}</span>` +
               `<span class="al-arabic">${hadith.arabic || ""}</span>` +
               (hadith.urdu ? `<span class="al-urdu">${hadith.urdu}</span>` : "") +
               (hadith.english ? `<span class="al-english">${hadith.english}</span>` : "") +
               (hadith.reference ? `<span class="al-reference">📖 ${hadith.reference}</span>` : "");
    }

    function normalizeBookName(name) {
        const n = name.toLowerCase().replace(/\s+/g, "");
        if (n.includes("bukhari")) return "bukhari";
        if (n.includes("muslim")) return "muslim";
        if (n.includes("abudawud") || n.includes("abudaud")) return "abudawud";
        if (n.includes("tirmidhi")) return "tirmidhi";
        if (n.includes("nasai")) return "nasai";
        if (n.includes("malik")) return "malik";
        return null;
    }

    /* =====================================================
       FIND DUA
    ===================================================== */
    function findDua(q) {
        const categories = {
            "morning": ["morning", "subah", "صبح", "fajr"],
            "evening": ["evening", "shaam", "شام", "maghrib"],
            "prayer": ["prayer", "salah", "نماز", "namaz", "wudu", "وضو"],
            "forgiveness": ["forgiveness", "maghfirat", "مغفرت", "بخشش", "استغفار", "istighfar", "tawbah", "توبہ"],
            "protection": ["protection", "hifazat", "حفاظت", "پناہ", "panah"],
            "travel": ["travel", "safar", "سفر"],
            "food": ["food", "khana", "کھانا", "eating", "iftar", "افطار"],
            "sleep": ["sleep", "sona", "سونا", "bed", "wake", "نیند"],
            "family": ["family", "parents", "والدین", "بیوی", "بچے", "children"],
            "general": ["general", "عام"]
        };

        let matchedCategory = null;
        for (const [cat, keywords] of Object.entries(categories)) {
            for (const kw of keywords) {
                if (q.includes(kw)) {
                    matchedCategory = cat;
                    break;
                }
            }
            if (matchedCategory) break;
        }

        if (!matchedCategory) return null;

        const duas = ISLAMIC_DATABASE.getDuasByCategory(matchedCategory);
        if (!duas || duas.length === 0) {
            return `🤲 Is category mein koi dua nahi mili.`;
        }

        // Show first dua
        const dua = duas[0];
        let html = `<span class="al-label">🤲 ${matchedCategory.toUpperCase()} DUA</span>` +
                   `<strong style="font-size:15px;">${dua.title}</strong>`;

        if (dua.arabic) html += `<span class="al-arabic">${dua.arabic}</span>`;
        if (dua.urdu) html += `<span class="al-urdu">${dua.urdu}</span>`;
        if (dua.english) html += `<span class="al-english">${dua.english}</span>`;
        if (dua.reference) html += `<span class="al-reference">📖 ${dua.reference}</span>`;

        if (duas.length > 1) {
            html += `<span class="al-reference">✨ Is category mein ${duas.length} duas hain. Duas page par dekhein.</span>`;
        }

        return html;
    }

    /* =====================================================
       FIND GUIDANCE
    ===================================================== */
    function findGuidance(q) {
        const categories = {
            "quran": ["quran", "قرآن"],
            "salah": ["salah", "namaz", "نماز", "prayer"],
            "family": ["family", "parents", "والدین", "خاندان"],
            "character": ["character", "akhlaq", "اخلاق", "manners"],
            "patience": ["patience", "sabr", "صبر", "tawakkul"],
            "halal": ["halal", "haram", "حلال", "حرام"],
            "ramadan": ["ramadan", "روزہ", "fasting", "روزے"],
            "daily": ["daily", "روزانہ", "life"]
        };

        let matchedCategory = null;
        for (const [cat, keywords] of Object.entries(categories)) {
            for (const kw of keywords) {
                if (q.includes(kw)) {
                    matchedCategory = cat;
                    break;
                }
            }
            if (matchedCategory) break;
        }

        if (!matchedCategory) return null;

        const guidanceList = ISLAMIC_DATABASE.getGuidanceByCategory(matchedCategory);
        if (!guidanceList || guidanceList.length === 0) {
            return `🧭 Is category mein koi guidance nahi mili.`;
        }

        const g = guidanceList[0];
        let html = `<span class="al-label">🧭 ${matchedCategory.toUpperCase()} GUIDANCE</span>` +
                   `<strong style="font-size:15px;">${g.title}</strong>`;

        if (g.arabic) html += `<span class="al-arabic">${g.arabic}</span>`;
        if (g.urdu) html += `<span class="al-urdu">${g.urdu}</span>`;
        if (g.english) html += `<span class="al-english">${g.english}</span>`;
        if (g.content) html += `<div style="margin-top:8px;color:#c8e8d5;">${g.content}</div>`;
        if (g.reference) html += `<span class="al-reference">📖 ${g.reference}</span>`;

        return html;
    }

    /* =====================================================
       UTILITIES
    ===================================================== */
    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* =====================================================
       START
    ===================================================== */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();