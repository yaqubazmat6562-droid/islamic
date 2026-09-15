/* =========================================
   POWER OF DUA - COMPLETE DYNAMIC JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    loadDuas();
    initTheme();
    initScrollAnimations();
});


/* =========================================
   THEME TOGGLE
   ========================================= */

function initTheme() {
    const themeBtn = document.getElementById("themeBtn");
    
    // Load saved theme
    const savedTheme = localStorage.getItem("duaTheme") || "dark";
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isLight = document.body.classList.contains("light-theme");
            const newTheme = isLight ? "dark" : "light";
            applyTheme(newTheme);
            localStorage.setItem("duaTheme", newTheme);
        });
    }
}

function applyTheme(theme) {
    const themeBtn = document.getElementById("themeBtn");
    
    if (theme === "light") {
        document.body.classList.add("light-theme");
        if (themeBtn) themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("light-theme");
        if (themeBtn) themeBtn.textContent = "🌙";
    }
}


/* =========================================
   DUA DATABASE
   ========================================= */

const duas = [
    {
        id: 1,
        title: "Dua Before Eating",
        category: "food",
        arabic: "بِسْمِ اللَّهِ",
        urdu: "اللہ کے نام سے (شروع کرتا ہوں)",
        translation: "In the name of Allah.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 2,
        title: "Dua After Eating",
        category: "food",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
        urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا اور پلایا",
        translation: "All praise is for Allah who fed us and gave us drink.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 3,
        title: "Morning Dua",
        category: "morning",
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",
        urdu: "اے اللہ! تیری مدد سے ہم نے صبح کی",
        translation: "O Allah, by You we enter the morning and by You we enter the evening.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 4,
        title: "Evening Dua",
        category: "evening",
        arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا",
        urdu: "اے اللہ! تیری مدد سے ہم نے شام کی",
        translation: "O Allah, by You we enter the evening and by You we enter the morning.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 5,
        title: "Dua Before Sleeping",
        category: "sleep",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        urdu: "اے اللہ! تیرے نام سے میں مرتا اور جیتا ہوں",
        translation: "In Your name, O Allah, I die and I live.",
        reference: "Sahih Bukhari"
    },
    {
        id: 6,
        title: "Dua After Waking Up",
        category: "sleep",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
        urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی بخشی",
        translation: "All praise is for Allah who gave us life after death.",
        reference: "Sahih Bukhari"
    },
    {
        id: 7,
        title: "Dua for Forgiveness",
        category: "forgiveness",
        arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
        urdu: "اے میرے رب! مجھے معاف کر اور میری توبہ قبول کر",
        translation: "My Lord, forgive me and accept my repentance. You are the Most Forgiving, Most Merciful.",
        reference: "Sunan at-Tirmidhi"
    },
    {
        id: 8,
        title: "Dua for Protection",
        category: "protection",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
        translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
        reference: "Sahih Muslim"
    },
    {
        id: 9,
        title: "Dua for Travel",
        category: "travel",
        arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
        urdu: "پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کیا",
        translation: "Glory be to Him who has subjected this to us, and we could not have done it ourselves.",
        reference: "Surah Az-Zukhruf 43:13"
    },
    {
        id: 10,
        title: "Dua for Family",
        category: "family",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
        urdu: "اے ہمارے رب! ہمیں اپنی بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما",
        translation: "Our Lord, grant us from among our spouses and offspring comfort to our eyes.",
        reference: "Surah Al-Furqan 25:74"
    },
    {
        id: 11,
        title: "Dua for Guidance",
        category: "prayer",
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        urdu: "ہمیں سیدھے راستے کی ہدایت فرما",
        translation: "Guide us to the straight path.",
        reference: "Surah Al-Fatihah 1:6"
    },
    {
        id: 12,
        title: "Dua for Patience",
        category: "prayer",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
        urdu: "اے ہمارے رب! ہم پر صبر انڈیل دے",
        translation: "Our Lord, pour upon us patience.",
        reference: "Surah Al-Baqarah 2:250"
    },
    {
        id: 13,
        title: "Dua for Knowledge",
        category: "knowledge",
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        urdu: "اے میرے رب! میرے علم میں اضافہ فرما",
        translation: "My Lord, increase me in knowledge.",
        reference: "Surah Ta-Ha 20:114"
    },
    {
        id: 14,
        title: "Dua for Mercy",
        category: "forgiveness",
        arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        urdu: "اے میرے رب! معاف کر اور رحم فرما",
        translation: "My Lord, forgive and have mercy, and You are the best of those who show mercy.",
        reference: "Surah Al-Mu'minun 23:118"
    },
    {
        id: 15,
        title: "Dua for Ease",
        category: "prayer",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        urdu: "اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے",
        translation: "My Lord, expand for me my chest and ease for me my task.",
        reference: "Surah Ta-Ha 20:25-26"
    },
    {
        id: 16,
        title: "Dua for Anxiety",
        category: "protection",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
        urdu: "اے اللہ! میں غم اور پریشانی سے تیری پناہ مانگتا ہوں",
        translation: "O Allah, I seek refuge in You from worry and grief.",
        reference: "Sahih Bukhari"
    },
    {
        id: 17,
        title: "Dua for Parents",
        category: "family",
        arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        urdu: "اے میرے رب! میرے والدین پر رحم فرما جیسے انہوں نے مجھے بچپن میں پالا",
        translation: "My Lord, have mercy upon them as they brought me up when I was small.",
        reference: "Surah Al-Isra 17:24"
    },
    {
        id: 18,
        title: "Dua for Steadfastness",
        category: "prayer",
        arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        urdu: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت رکھ",
        translation: "O Turner of hearts, keep my heart firm upon Your religion.",
        reference: "Sunan at-Tirmidhi"
    },
    {
        id: 19,
        title: "Dua for Protection from Evil Eye",
        category: "protection",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ",
        urdu: "میں اللہ کے مکمل کلمات سے ہر شیطان اور زہریلے جانور سے پناہ مانگتا ہوں",
        translation: "I seek refuge in the perfect words of Allah from every devil and poisonous creature.",
        reference: "Sahih Bukhari"
    },
    {
        id: 20,
        title: "Dua for Acceptance",
        category: "prayer",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        urdu: "اے ہمارے رب! ہم سے قبول فرما، بے شک تو سننے والا جاننے والا ہے",
        translation: "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.",
        reference: "Surah Al-Baqarah 2:127"
    },
    {
        id: 21,
        title: "Dua for Barakah",
        category: "general",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",
        urdu: "اے اللہ! جو رزق تو نے دیا ہے اس میں برکت دے",
        translation: "O Allah, bless us in what You have provided us.",
        reference: "Sunan Ibn Majah"
    },
    {
        id: 22,
        title: "Dua for Health",
        category: "health",
        arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي",
        urdu: "اے اللہ! میرے جسم کو صحت عطا فرما",
        translation: "O Allah, grant health to my body.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 23,
        title: "Dua for Entering Home",
        category: "home",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ",
        urdu: "اے اللہ! میں تجھ سے گھر میں داخل ہونے کی خیر مانگتا ہوں",
        translation: "O Allah, I ask You for the best of entering.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 24,
        title: "Dua for Leaving Home",
        category: "home",
        arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
        urdu: "اللہ کے نام سے، میں اللہ پر بھروسہ کرتا ہوں",
        translation: "In the name of Allah, I place my trust in Allah.",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 25,
        title: "Dua for Rain",
        category: "nature",
        arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
        urdu: "اے اللہ! نفع بخش بارش برسا",
        translation: "O Allah, send beneficial rain.",
        reference: "Sahih Bukhari"
    },
    {
        id: 26,
        title: "Dua for Anger",
        category: "protection",
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        urdu: "میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے",
        translation: "I seek refuge in Allah from Satan the accursed.",
        reference: "Sahih Bukhari"
    },
    {
        id: 27,
        title: "Dua for Debt Relief",
        category: "general",
        arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",
        urdu: "اے اللہ! اپنے حلال سے مجھے کافی کر دے اور حرام سے بچا",
        translation: "O Allah, suffice me with Your lawful and protect me from Your unlawful.",
        reference: "Sunan at-Tirmidhi"
    },
    {
        id: 28,
        title: "Dua for Good Dreams",
        category: "sleep",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا رَأَيْتُ",
        urdu: "اے اللہ! میں اس خواب کے شر سے تیری پناہ مانگتا ہوں جو میں نے دیکھا",
        translation: "O Allah, I seek refuge in You from the evil of what I saw.",
        reference: "Sahih Muslim"
    },
    {
        id: 29,
        title: "Dua for Acceptance of Good Deeds",
        category: "prayer",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        urdu: "اے ہمارے رب! ہم سے قبول فرما، بے شک تو سننے والا جاننے والا ہے",
        translation: "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.",
        reference: "Surah Al-Baqarah 2:127"
    },
    {
        id: 30,
        title: "Dua for Forgiveness of All Believers",
        category: "forgiveness",
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
        urdu: "اے ہمارے رب! مجھے، میرے والدین کو اور تمام مومنین کو معاف فرما",
        translation: "Our Lord, forgive me and my parents and the believers.",
        reference: "Surah Ibrahim 14:41"
    }
];


/* =========================================
   STATE
   ========================================= */

let allDuas = [...duas];
let filteredDuas = [...duas];
let currentCategory = "all";
let searchQuery = "";


/* =========================================
   LOAD DUAS
   ========================================= */

function loadDuas(list = filteredDuas) {
    const container = document.getElementById("duaContainer");
    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-dua">
                <div class="no-dua-icon">🔎</div>
                <h3>No Dua Found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    list.forEach((dua, index) => {
        const card = document.createElement("div");
        card.className = "dynamic-dua-card";
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="dua-card-header">
                <h3>🤲 ${dua.title}</h3>
                <span class="dua-category-badge">${formatCategory(dua.category)}</span>
            </div>

            <div class="arabic-dua">
                ${dua.arabic}
            </div>

            <p class="dua-translation">
                ${dua.translation}
            </p>

            ${dua.urdu ? `<div class="dua-urdu">${dua.urdu}</div>` : ""}

            <div class="dua-reference">
                <strong>📖 Reference:</strong> ${dua.reference}
            </div>

            <div class="dua-actions">
                <button class="copy-btn" onclick="copyDua(${dua.id})">
                    📋 Copy
                </button>
                <button class="share-btn" onclick="shareDua(${dua.id})">
                    🔗 Share
                </button>
                <button class="favorite-btn" onclick="favoriteDua(${dua.id})">
                    ❤️ Favorite
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}


/* =========================================
   FORMAT CATEGORY
   ========================================= */

function formatCategory(category) {
    const names = {
        morning: "Morning",
        evening: "Evening",
        protection: "Protection",
        forgiveness: "Forgiveness",
        prayer: "Prayer",
        family: "Family",
        health: "Health",
        food: "Food",
        sleep: "Sleep",
        travel: "Travel",
        home: "Home",
        knowledge: "Knowledge",
        nature: "Nature",
        general: "General"
    };
    return names[category] || "General";
}


/* =========================================
   CATEGORY FILTER
   ========================================= */

function filterDuas(category, btn) {
    currentCategory = category;

    // Update active button
    if (btn) {
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    }

    // Clear search
    const searchInput = document.getElementById("duaSearch");
    if (searchInput) searchInput.value = "";
    searchQuery = "";

    applyFilters();
}


/* =========================================
   SEARCH DUA
   ========================================= */

function searchDua() {
    const input = document.getElementById("duaSearch");
    if (!input) return;

    searchQuery = input.value.toLowerCase().trim();
    applyFilters();
}


/* =========================================
   APPLY FILTERS
   ========================================= */

function applyFilters() {
    filteredDuas = allDuas.filter(dua => {
        // Category filter
        const categoryMatch =
            currentCategory === "all" ||
            dua.category === currentCategory;

        // Search filter
        const searchMatch =
            !searchQuery ||
            dua.title.toLowerCase().includes(searchQuery) ||
            dua.translation.toLowerCase().includes(searchQuery) ||
            dua.arabic.includes(searchQuery) ||
            (dua.urdu && dua.urdu.includes(searchQuery)) ||
            dua.reference.toLowerCase().includes(searchQuery) ||
            dua.category.toLowerCase().includes(searchQuery);

        return categoryMatch && searchMatch;
    });

    loadDuas(filteredDuas);
}


/* =========================================
   COPY DUA
   ========================================= */

function copyDua(id) {
    const dua = allDuas.find(item => item.id === id);
    if (!dua) return;

    const text = `
${dua.title}

${dua.arabic}

${dua.translation}

${dua.urdu || ""}

Reference: ${dua.reference}

— IslamicWay
    `.trim();

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showNotification("✅ Dua copied successfully!"))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}


/* =========================================
   SHARE DUA
   ========================================= */

function shareDua(id) {
    const dua = allDuas.find(item => item.id === id);
    if (!dua) return;

    const text = `
${dua.title}

${dua.arabic}

${dua.translation}

Reference: ${dua.reference}

— IslamicWay
    `.trim();

    if (navigator.share) {
        navigator.share({
            title: dua.title,
            text: text
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text)
            .then(() => showNotification("🔗 Dua copied for sharing!"))
            .catch(() => fallbackCopy(text));
    }
}


/* =========================================
   FALLBACK COPY
   ========================================= */

function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");
        showNotification("✅ Dua copied successfully!");
    } catch (error) {
        showNotification("❌ Unable to copy Dua.");
    }

    textarea.remove();
}


/* =========================================
   FAVORITE DUA
   ========================================= */

function favoriteDua(id) {
    let favorites = JSON.parse(localStorage.getItem("favoriteDuas")) || [];

    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
        localStorage.setItem("favoriteDuas", JSON.stringify(favorites));
        showNotification("💔 Removed from Favorites");
        return;
    }

    favorites.push(id);
    localStorage.setItem("favoriteDuas", JSON.stringify(favorites));
    showNotification("❤️ Added to Favorites");
}


/* =========================================
   RANDOM DUA
   ========================================= */

function showRandomDua() {
    if (!allDuas.length) return;

    const randomIndex = Math.floor(Math.random() * allDuas.length);
    const randomDua = allDuas[randomIndex];

    // Clear filters first
    currentCategory = "all";
    searchQuery = "";
    const searchInput = document.getElementById("duaSearch");
    if (searchInput) searchInput.value = "";
    
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    const allBtn = document.querySelector(".cat-btn");
    if (allBtn) allBtn.classList.add("active");

    // Show only the random dua
    filteredDuas = [randomDua];
    loadDuas(filteredDuas);

    // Scroll to the dua
    setTimeout(() => {
        const section = document.getElementById("duaSection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 100);
}


/* =========================================
   SHOW DUA MESSAGE
   ========================================= */

function showDuaMessage() {
    const message = document.getElementById("duaMessage");
    if (!message) return;

    const messages = [
        "Keep making Dua. Allah hears every sincere prayer. 🤲",
        "Never lose hope in Allah's mercy. ❤️",
        "Trust Allah's timing and keep asking Him. 🌙",
        "Your Dua is an act of worship. ✨",
        "Be patient, keep praying and trust Allah. 🕊️",
        "Allah answers in three ways: Yes, Not yet, I have better for you. 💚",
        "Dua can change what has been decreed. 🌟",
        "The best time to make Dua is right now. ⏰"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    message.style.opacity = "0";

    setTimeout(() => {
        message.textContent = randomMessage;
        message.style.transition = "opacity 0.5s ease";
        message.style.opacity = "1";
    }, 150);
}


/* =========================================
   SHOW NOTIFICATION
   ========================================= */

function showNotification(text) {
    const old = document.querySelector(".dua-notification");
    if (old) old.remove();

    const notification = document.createElement("div");
    notification.className = "dua-notification";
    notification.textContent = text;

    Object.assign(notification.style, {
        position: "fixed",
        bottom: "25px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "9999",
        padding: "14px 24px",
        borderRadius: "30px",
        background: "linear-gradient(135deg, #42c988, #28aa72)",
        color: "#06251b",
        fontWeight: "700",
        fontSize: "14px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        animation: "notificationIn 0.4s ease"
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.4s ease";

        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 2200);
}


/* =========================================
   BACK BUTTON
   ========================================= */

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}


/* =========================================
   SCROLL TO DUAS
   ========================================= */

function scrollToDuas() {
    const section = document.getElementById("duaSection");
    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   SCROLL ANIMATIONS
   ========================================= */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll(
        ".dua-card, .benefit-card, .time-card, .etiquette-item, .verse-card, .hadith-card"
    );

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
}


/* =========================================
   KEYBOARD SHORTCUTS
   ========================================= */

document.addEventListener("keydown", function (event) {
    // "/" to focus search
    if (
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
    ) {
        event.preventDefault();
        const search = document.getElementById("duaSearch");
        if (search) {
            search.focus();
            search.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    // "Escape" to clear search
    if (event.key === "Escape") {
        const search = document.getElementById("duaSearch");
        if (search && document.activeElement === search) {
            search.value = "";
            searchQuery = "";
            applyFilters();
            search.blur();
        }
    }
});


/* =========================================
   NOTIFICATION ANIMATION STYLE
   ========================================= */

const notificationStyle = document.createElement("style");
notificationStyle.textContent = `
    @keyframes notificationIn {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
`;
document.head.appendChild(notificationStyle);


/* =========================================
   EXPOSE FUNCTIONS GLOBALLY
   ========================================= */

window.filterDuas = filterDuas;
window.searchDua = searchDua;
window.copyDua = copyDua;
window.shareDua = shareDua;
window.favoriteDua = favoriteDua;
window.showRandomDua = showRandomDua;
window.showDuaMessage = showDuaMessage;
window.goBack = goBack;
window.scrollToDuas = scrollToDuas;