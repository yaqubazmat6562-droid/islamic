/* =========================================================
   ISLAMICWAY - COMPLETE JAVASCRIPT (FIXED v4.0)
   ✅ Hadith search: #15, #300, keywords
   ✅ Quran dynamic
   ✅ Duas, Guidance, Articles
   ✅ No duplicates
========================================================= */

/* =====================================================
   DARK / LIGHT THEME TOGGLE
===================================================== */

const themeButton = document.getElementById("themeButton");

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light-theme");
        if (themeButton) themeButton.textContent = "🌙";
    } else {
        document.body.classList.remove("light-theme");
        if (themeButton) themeButton.textContent = "☀️";
    }
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        const isLight = document.body.classList.contains("light-theme");
        const newTheme = isLight ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("islamicTheme", newTheme);
    });
}

const savedTheme = localStorage.getItem("islamicTheme") || "dark";
applyTheme(savedTheme);


/* =========================================================
   1. PAGE NAVIGATION + CALENDAR
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link");

    window.showPage = function showPage(pageName, updateUrl = true) {

        pages.forEach(page => {
            page.classList.remove("active");
            page.style.display = "none";
        });

        const selectedPage = document.getElementById("page-" + pageName);

        if (!selectedPage) {
            const homePage = document.getElementById("page-home");
            if (homePage) {
                homePage.classList.add("active");
                homePage.style.display = "block";
            }
            return;
        }

        selectedPage.classList.add("active");
        selectedPage.style.display = "block";

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.page === pageName) {
                link.classList.add("active");
            }
        });

        if (updateUrl) {
            history.pushState({ page: pageName }, "", "#" + pageName);
        }

        if (pageName === "prayer") {
            loadIslamicCalendar();
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const pageName = this.dataset.page;
            if (pageName) {
                event.preventDefault();
                showPage(pageName);
            }
        });
    });

    document.querySelectorAll("[data-page]").forEach(element => {
        if (!element.classList.contains("nav-link")) {
            element.addEventListener("click", function (event) {
                const pageName = this.dataset.page;
                if (pageName) {
                    event.preventDefault();
                    showPage(pageName);
                }
            });
        }
    });

    window.addEventListener("popstate", () => {
        const pageName = window.location.hash.replace("#", "");
        if (pageName) {
            showPage(pageName, false);
        } else {
            showPage("home", false);
        }
    });

    const startingPage = window.location.hash.replace("#", "");
    if (startingPage) {
        showPage(startingPage, false);
    } else {
        showPage("home", false);
    }

    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", function (event) {
            event.preventDefault();
            showPage("home");
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            showPage("home");
        }
    });

    /* =====================================================
       DYNAMIC ISLAMIC CALENDAR
    ===================================================== */

    let calendarDate = new Date();

    const city = "Kuala Lumpur";
    const country = "Malaysia";
    const method = 17;

    const englishMonths = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const calendarDays = document.getElementById("calendarDays");
    const calendarMonth = document.getElementById("calendarMonth");
    const calendarHijriMonth = document.getElementById("calendarHijriMonth");
    const calendarLoading = document.getElementById("calendarLoading");
    const calendarError = document.getElementById("calendarError");
    const selectedGregorian = document.getElementById("selectedGregorian");
    const selectedHijri = document.getElementById("selectedHijri");
    const previousMonth = document.getElementById("previousMonth");
    const nextMonth = document.getElementById("nextMonth");
    const todayButton = document.getElementById("todayButton");
    const retryCalendar = document.getElementById("retryCalendar");

    function formatDate(year, month, day) {
        return (
            year + "-" +
            String(month).padStart(2, "0") + "-" +
            String(day).padStart(2, "0")
        );
    }

    async function loadIslamicCalendar() {

        if (!calendarDays) return;

        showCalendarLoading();

        const year = calendarDate.getFullYear();
        const month = calendarDate.getMonth() + 1;

        const urls = [
            "https://api.aladhan.com/v1/calendarByCity/" +
                year + "/" + month +
                "?city=" + encodeURIComponent(city) +
                "&country=" + encodeURIComponent(country) +
                "&method=" + method +
                "&calendarMethod=MATHEMATICAL",

            "https://api.aladhan.com/v1/calendarByCity/" +
                year + "/" + month +
                "?city=" + encodeURIComponent(city) +
                "&country=" + encodeURIComponent(country) +
                "&method=" + method
        ];

        let json = null;

        for (const url of urls) {
            try {
                const response = await fetch(url);
                if (!response.ok) continue;
                const data = await response.json();
                if (data && data.code === 200 && data.data) {
                    json = data;
                    break;
                }
            } catch (e) {
                console.warn("Calendar API failed, trying next...");
            }
        }

        try {
            if (!json) throw new Error("All calendar APIs failed");
            renderCalendar(json.data);
            hideCalendarLoading();
        } catch (error) {
            console.error("Islamic Calendar Error:", error);
            showCalendarError();
        }
    }

    function renderCalendar(data) {

        if (!calendarDays) return;

        calendarDays.innerHTML = "";

        const year = calendarDate.getFullYear();
        const monthIndex = calendarDate.getMonth();

        if (calendarMonth) {
            calendarMonth.textContent = englishMonths[monthIndex] + " " + year;
        }

        if (
            calendarHijriMonth &&
            data.length > 0 &&
            data[0].date &&
            data[0].date.hijri
        ) {
            calendarHijriMonth.textContent =
                data[0].date.hijri.month.en + " " +
                data[0].date.hijri.year + " AH";
        }

        const firstDay = new Date(year, monthIndex, 1).getDay();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.className = "calendar-day empty";
            calendarDays.appendChild(emptyCell);
        }

        const today = new Date();
        const todayString = formatDate(
            today.getFullYear(),
            today.getMonth() + 1,
            today.getDate()
        );

        data.forEach(dayData => {

            const day = document.createElement("div");
            day.className = "calendar-day";

            const gregorianDay = dayData.date.gregorian.day;
            const hijriDay = dayData.date.hijri.day;
            const hijriMonth = dayData.date.hijri.month.en;
            const dateString = dayData.date.gregorian.date;

            day.innerHTML = `
                <div class="gregorian-number">${gregorianDay}</div>
                <div class="hijri-number">${hijriDay}</div>
                <div class="hijri-month">${hijriMonth}</div>
            `;

            if (dateString === todayString) {
                day.classList.add("today");
            }

            const dateObject = new Date(year, monthIndex, Number(gregorianDay));

            if (dateObject.getDay() === 5) {
                day.classList.add("friday");
            }

            day.addEventListener("click", () => {
                selectCalendarDate(dayData);
            });

            calendarDays.appendChild(day);
        });

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        if (currentMonth === monthIndex && currentYear === year) {
            const todayData = data.find(item =>
                item.date.gregorian.date === todayString
            );
            if (todayData) selectCalendarDate(todayData, false);
        }
    }

    function selectCalendarDate(dayData, scrollToDate = true) {

        if (!dayData || !dayData.date) return;

        const gregorian = dayData.date.gregorian;
        const hijri = dayData.date.hijri;

        if (selectedGregorian) {
            selectedGregorian.textContent =
                gregorian.weekday.en + ", " +
                gregorian.day + " " +
                gregorian.month.en + " " +
                gregorian.year;
        }

        if (selectedHijri) {
            selectedHijri.textContent =
                hijri.day + " " + hijri.month.en + " " +
                hijri.year + " AH";
        }

        document.querySelectorAll(".calendar-day").forEach(day => {
            day.classList.remove("selected");
        });

        const allDays = Array.from(document.querySelectorAll(".calendar-day"));
        const clickedDay = allDays.find(day => {
            const number = day.querySelector(".gregorian-number");
            return number && number.textContent.trim() === String(gregorian.day);
        });

        if (clickedDay) clickedDay.classList.add("selected");

        if (scrollToDate) {
            const selectedBox = document.querySelector(".selected-date-box");
            if (selectedBox) {
                selectedBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        }
    }

    if (previousMonth) {
        previousMonth.addEventListener("click", function () {
            calendarDate.setMonth(calendarDate.getMonth() - 1);
            loadIslamicCalendar();
        });
    }

    if (nextMonth) {
        nextMonth.addEventListener("click", function () {
            calendarDate.setMonth(calendarDate.getMonth() + 1);
            loadIslamicCalendar();
        });
    }

    if (todayButton) {
        todayButton.addEventListener("click", function () {
            calendarDate = new Date();
            loadIslamicCalendar();
        });
    }

    if (retryCalendar) {
        retryCalendar.addEventListener("click", function () {
            loadIslamicCalendar();
        });
    }

    function showCalendarLoading() {
        if (calendarLoading) calendarLoading.style.display = "flex";
        if (calendarError) calendarError.style.display = "none";
        if (calendarDays) calendarDays.style.display = "none";
    }

    function hideCalendarLoading() {
        if (calendarLoading) calendarLoading.style.display = "none";
        if (calendarError) calendarError.style.display = "none";
        if (calendarDays) calendarDays.style.display = "grid";
    }

    function showCalendarError() {
        if (calendarLoading) calendarLoading.style.display = "none";
        if (calendarDays) calendarDays.style.display = "none";
        if (calendarError) calendarError.style.display = "flex";
    }

    if (calendarDays) {
        loadIslamicCalendar();
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
            event.preventDefault();
            const searchInput = document.querySelector("#globalSearchInput");
            if (searchInput) searchInput.focus();
        }
    });

});


/* =========================================================
   DYNAMIC QURAN
========================================================= */

const QURAN_APIS = [
    "https://api.alquran.cloud/v1",
    "https://api.quran.com/api/v4"
];

const AUDIO_BASES = [
    "https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/",
    "https://everyayah.com/data/Alafasy_128kbps/"
];

let allSurahs = [];
let currentSurah = 1;

const surahList = document.getElementById("surahList");
const quranReader = document.getElementById("quranReader");
const quranLoading = document.getElementById("quranLoading");
const quranError = document.getElementById("quranError");
const surahSearch = document.getElementById("surahSearch");
const ayahContainer = document.getElementById("ayahContainer");
const readerArabicName = document.getElementById("readerArabicName");
const readerEnglishName = document.getElementById("readerEnglishName");
const readerTranslation = document.getElementById("readerTranslation");
const readerAyahCount = document.getElementById("readerAyahCount");
const readerRevelation = document.getElementById("readerRevelation");
const fullSurahAudio = document.getElementById("fullSurahAudio");
const playSurah = document.getElementById("playSurah");
const pauseSurah = document.getElementById("pauseSurah");
const stopSurah = document.getElementById("stopSurah");
const backToSurahs = document.getElementById("backToSurahs");
const previousSurah = document.getElementById("previousSurah");
const nextSurah = document.getElementById("nextSurah");
const showAllSurahs = document.getElementById("showAllSurahs");
const retryQuran = document.getElementById("retryQuran");

async function fetchQuranEndpoint(endpoint) {
    for (const baseUrl of QURAN_APIS) {
        try {
            const response = await fetch(baseUrl + endpoint);
            if (!response.ok) continue;
            const json = await response.json();
            if (json && (json.code === 200 || json.data)) return json;
        } catch (e) {
            console.warn(`Quran API failed: ${baseUrl}`);
        }
    }
    throw new Error("All Quran APIs failed");
}

async function loadQuranSurahs() {

    if (!surahList) return;

    showQuranLoading();

    try {
        const json = await fetchQuranEndpoint("/surah");
        if (!json.data) throw new Error("Invalid Surah data");

        allSurahs = json.data;
        renderSurahList(allSurahs);
        hideQuranLoading();
        console.log("[Quran] Loaded from API ✅");

    } catch (error) {
        console.warn("[Quran] API failed, using local database");

        if (typeof ISLAMIC_DATABASE !== "undefined" && ISLAMIC_DATABASE.quranSurahs) {
            allSurahs = ISLAMIC_DATABASE.quranSurahs;
            renderSurahList(allSurahs);
            hideQuranLoading();
            console.log("[Quran] Loaded from local database ✅");
        } else {
            showQuranError();
        }
    }
}

function renderSurahList(surahs) {

    if (!surahList) return;

    surahList.innerHTML = "";

    if (surahs.length === 0) {
        surahList.innerHTML = `<div class="no-surah">No Surah Found</div>`;
        return;
    }

    surahs.forEach(surah => {
        const card = document.createElement("div");
        card.className = "surah-card";

        card.innerHTML = `
            <span class="revelation-badge">${surah.revelationType}</span>
            <div class="surah-number">${surah.number}</div>
            <div class="surah-arabic">${surah.name}</div>
            <div class="surah-english">${surah.englishName}</div>
            <div class="surah-meta">
                ${surah.englishNameTranslation} • ${surah.numberOfAyahs} Ayahs
            </div>
        `;

        card.addEventListener("click", () => openSurah(surah.number));
        surahList.appendChild(card);
    });
}

async function openSurah(surahNumber) {

    currentSurah = surahNumber;

    if (surahList) surahList.style.display = "none";
    if (quranReader) quranReader.style.display = "block";

    if (ayahContainer) {
        ayahContainer.innerHTML = `
            <div class="quran-loading">
                <div class="quran-spinner"></div>
                <p>Loading Surah...</p>
            </div>
        `;
    }

    try {
        const arabicJSON = await fetchQuranEndpoint(
            "/surah/" + surahNumber + "/quran-uthmani"
        );
        const urduJSON = await fetchQuranEndpoint(
            "/surah/" + surahNumber + "/ur.jalandhry"
        );

        const arabicData = arabicJSON.data;
        const urduData = urduJSON.data;

        if (readerArabicName) readerArabicName.textContent = arabicData.name;
        if (readerEnglishName) readerEnglishName.textContent = arabicData.englishName;
        if (readerTranslation) readerTranslation.textContent = "اردو ترجمہ — فتح محمد جالندھری";
        if (readerAyahCount) readerAyahCount.textContent = arabicData.numberOfAyahs + " Ayahs";
        if (readerRevelation) readerRevelation.textContent = arabicData.revelationType;

        renderAyahs(arabicData.ayahs, urduData.ayahs);
        loadFullSurahAudio(surahNumber);
        console.log("[Quran] Loaded from API ✅");

        window.scrollTo({ top: 0, behavior: "smooth" });
        return;

    } catch (error) {
        console.warn("[Quran] API failed — trying local database");
    }

    const surahInfo = allSurahs.find(s => s.number === surahNumber);

// Pehle local database check karo
let localContent = ISLAMIC_DATABASE?.quranContent?.[surahNumber];

// Agar local mein nahi hai, to FullQuranDatabase se load karo (saari 114 Surahs)
if (!localContent && typeof FullQuranDatabase !== "undefined") {
    console.log("[Quran] Local mein nahi — FullQuranDatabase se load kar raha hoon...");
    localContent = await FullQuranDatabase.loadSurah(surahNumber);
    console.log("[Quran] FullQuranDatabase se load ho gaya ✅");
}

    if (surahInfo && localContent) {
        if (readerArabicName) readerArabicName.textContent = surahInfo.name;
        if (readerEnglishName) readerEnglishName.textContent = surahInfo.englishName;
        if (readerTranslation) readerTranslation.textContent = surahInfo.englishNameTranslation + " — اردو ترجمہ";
        if (readerAyahCount) readerAyahCount.textContent = surahInfo.numberOfAyahs + " Ayahs";
        if (readerRevelation) readerRevelation.textContent = surahInfo.revelationType;

        const arabicAyahs = localContent.arabic.map((text, i) => ({
            numberInSurah: i + 1,
            text: text
        }));
        const urduAyahs = localContent.urdu.map(text => ({ text }));

        renderAyahs(arabicAyahs, urduAyahs);
        loadFullSurahAudio(surahNumber);
        console.log("[Quran] Loaded from built-in DB ✅");
        window.scrollTo({ top: 0, behavior: "smooth" });

    } else {
        if (ayahContainer) {
            ayahContainer.innerHTML = `
                <div class="quran-error">
                    <h3>سورہ دستیاب نہیں</h3>
                    <p>Internet connection check کریں۔</p>
                    <button class="quran-retry" onclick="openSurah(${surahNumber})">
                        Retry
                    </button>
                </div>
            `;
        }
    }
}

function renderAyahs(arabicAyahs, urduAyahs) {

    if (!ayahContainer) return;

    ayahContainer.innerHTML = "";

    arabicAyahs.forEach((ayah, index) => {
        const urdu = urduAyahs[index];
        const card = document.createElement("div");
        card.className = "ayah-card";

        card.innerHTML = `
            <div class="ayah-top">
                <div class="ayah-number">${ayah.numberInSurah}</div>
            </div>
            <div class="ayah-arabic">${ayah.text} ۝</div>
            <div class="ayah-translation">
                <span class="translation-label">اردو ترجمہ</span>
                <br>
                ${urdu ? urdu.text : ""}
            </div>
        `;

        ayahContainer.appendChild(card);
    });
}

function loadFullSurahAudio(surahNumber) {

    if (!fullSurahAudio) return;

    const audioURL = AUDIO_BASES[0] + surahNumber + ".mp3";

    fullSurahAudio.pause();
    fullSurahAudio.currentTime = 0;
    fullSurahAudio.src = audioURL;

    fullSurahAudio.onerror = function () {
        console.warn("Primary audio failed, trying fallback...");
        fullSurahAudio.src = AUDIO_BASES[1] + String(surahNumber).padStart(3, "0") + ".mp3";
    };

    fullSurahAudio.load();
}

if (playSurah) {
    playSurah.addEventListener("click", async () => {
        try { await fullSurahAudio.play(); }
        catch (error) { console.error("Audio play error:", error); }
    });
}

if (pauseSurah) {
    pauseSurah.addEventListener("click", () => {
        if (fullSurahAudio) fullSurahAudio.pause();
    });
}

if (stopSurah) {
    stopSurah.addEventListener("click", () => {
        if (fullSurahAudio) {
            fullSurahAudio.pause();
            fullSurahAudio.currentTime = 0;
        }
    });
}

if (backToSurahs) {
    backToSurahs.addEventListener("click", () => {
        if (quranReader) quranReader.style.display = "none";
        if (surahList) surahList.style.display = "grid";
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (surahSearch) {
    surahSearch.addEventListener("input", function () {
        const keyword = this.value.toLowerCase().trim();

        if (!keyword) {
            renderSurahList(allSurahs);
            return;
        }

        const filtered = allSurahs.filter(surah => {
            return (
                surah.englishName.toLowerCase().includes(keyword) ||
                surah.englishNameTranslation.toLowerCase().includes(keyword) ||
                surah.name.includes(keyword) ||
                String(surah.number) === keyword
            );
        });

        renderSurahList(filtered);
    });
}

if (showAllSurahs) {
    showAllSurahs.addEventListener("click", () => {
        if (surahSearch) surahSearch.value = "";
        renderSurahList(allSurahs);
        if (quranReader) quranReader.style.display = "none";
        if (surahList) surahList.style.display = "grid";
    });
}

if (previousSurah) {
    previousSurah.addEventListener("click", () => {
        if (currentSurah > 1) openSurah(currentSurah - 1);
    });
}

if (nextSurah) {
    nextSurah.addEventListener("click", () => {
        if (currentSurah < 114) openSurah(currentSurah + 1);
    });
}

function showQuranLoading() {
    if (quranLoading) quranLoading.style.display = "flex";
    if (quranError) quranError.style.display = "none";
    if (surahList) surahList.style.display = "none";
}

function hideQuranLoading() {
    if (quranLoading) quranLoading.style.display = "none";
    if (quranError) quranError.style.display = "none";
    if (surahList) surahList.style.display = "grid";
}

function showQuranError() {
    if (quranLoading) quranLoading.style.display = "none";
    if (quranError) quranError.style.display = "block";
}

if (retryQuran) {
    retryQuran.addEventListener("click", loadQuranSurahs);
}

if (surahList) {
    loadQuranSurahs();
}


/* =====================================================
   HADITH SYSTEM — SINGLE CLEAN VERSION
   ✅ Search: #15, 15, keywords, Arabic, Urdu
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const HADITH_URLS = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/",
        "https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/"
    ];

    const hadithBooks = {
        bukhari:  { title: "Sahih Bukhari",       arabic: "صحيح البخاري",      author: "Imam Muhammad al-Bukhari",  arabicEdition: "ara-bukhari",  urduEdition: "urd-bukhari"  },
        muslim:   { title: "Sahih Muslim",        arabic: "صحيح مسلم",         author: "Imam Muslim ibn al-Hajjaj", arabicEdition: "ara-muslim",   urduEdition: "urd-muslim"   },
        abudawud: { title: "Sunan Abu Dawud",     arabic: "سنن أبي داود",      author: "Imam Abu Dawud",            arabicEdition: "ara-abudawud", urduEdition: "urd-abudawud" },
        tirmidhi: { title: "Jami at-Tirmidhi",    arabic: "جامع الترمذي",      author: "Imam al-Tirmidhi",          arabicEdition: "ara-tirmidhi", urduEdition: "urd-tirmidhi" },
        nasai:    { title: "Sunan an-Nasa'i",     arabic: "سنن النسائي",       author: "Imam an-Nasa'i",            arabicEdition: "ara-nasai",    urduEdition: "urd-nasai"    },
        malik:    { title: "Muwatta Imam Malik",  arabic: "موطأ الإمام مالك",  author: "Imam Malik ibn Anas",       arabicEdition: "ara-malik",    urduEdition: "urd-malik"    }
    };

    const booksScreen = document.getElementById("hadithBooksScreen");
    const readerScreen = document.getElementById("hadithReaderScreen");
    const hadithList = document.getElementById("hadithList");
    const loading = document.getElementById("hadithLoading");
    const errorBox = document.getElementById("hadithError");
    const bookTitle = document.getElementById("hadithBookTitle");
    const bookArabic = document.getElementById("hadithBookArabic");
    const searchInput = document.getElementById("hadithSearch");
    const pageNumber = document.getElementById("hadithPageNumber");
    const previousButton = document.getElementById("previousHadithPage");
    const nextButton = document.getElementById("nextHadithPage");

    let currentBook = null;
    let currentBookKey = null;
    let currentPage = 1;
    let allArabicHadith = [];
    let allUrduHadith = [];
    let displayedHadith = [];
    let highlightHadithNumber = null;

    const ITEMS_PER_PAGE = 20;

    /* =====================================================
       FETCH HADITH FROM API
    ===================================================== */
    async function fetchHadithJSON(edition) {
        const paths = [edition + ".min.json", edition + ".json"];

        for (const baseUrl of HADITH_URLS) {
            for (const path of paths) {
                try {
                    const res = await fetch(baseUrl + path);
                    if (res.ok) {
                        const json = await res.json();
                        if (json && json.hadiths) return json;
                    }
                } catch (e) {
                    console.warn(`Failed: ${baseUrl}${path}`);
                }
            }
        }
        throw new Error("All Hadith URLs failed for " + edition);
    }

    /* =====================================================
       OPEN HADITH BOOK
    ===================================================== */
    async function openHadithBook(bookKey, highlightNumber = null) {

        currentBook = hadithBooks[bookKey];
        currentBookKey = bookKey;
        if (!currentBook) return;

        highlightHadithNumber = highlightNumber;

        booksScreen.style.display = "none";
        readerScreen.style.display = "block";

        bookTitle.textContent = currentBook.title;
        bookArabic.textContent = currentBook.arabic;

        currentPage = 1;
        allArabicHadith = [];
        allUrduHadith = [];
        displayedHadith = [];
        searchInput.value = "";

        showLoading();

        try {
            const arabicData = await fetchHadithJSON(currentBook.arabicEdition);
            const urduData = await fetchHadithJSON(currentBook.urduEdition);

            allArabicHadith = arabicData.hadiths || [];
            allUrduHadith = urduData.hadiths || [];

            if (allArabicHadith.length === 0) throw new Error("No Hadith found");

            displayedHadith = allArabicHadith;
            hideLoading();

            if (highlightHadithNumber && highlightHadithNumber > 0) {
                currentPage = Math.ceil(highlightHadithNumber / ITEMS_PER_PAGE);
            }

            renderHadith();
            console.log("[Hadith] Loaded from API ✅");

        } catch (error) {
            console.warn("[Hadith] API failed, using local database");

            if (typeof ISLAMIC_DATABASE !== "undefined" &&
                ISLAMIC_DATABASE.hadithBooks &&
                ISLAMIC_DATABASE.hadithBooks[bookKey]) {

                const dbBook = ISLAMIC_DATABASE.hadithBooks[bookKey];
                allArabicHadith = dbBook.hadiths.map(h => ({ text: h.arabic }));
                allUrduHadith = dbBook.hadiths.map(h => ({ text: h.urdu }));
                displayedHadith = allArabicHadith;
                hideLoading();

                if (highlightHadithNumber && highlightHadithNumber > 0) {
                    currentPage = Math.ceil(highlightHadithNumber / ITEMS_PER_PAGE);
                }

                renderHadith();
                console.log("[Hadith] Loaded from built-in DB ✅");
                return;
            }

            hideLoading();
            showError();
        }
    }

    /* =====================================================
       RENDER HADITH
    ===================================================== */
    function renderHadith() {

        hadithList.innerHTML = "";

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = displayedHadith.slice(start, end);

        if (pageItems.length === 0) {
            hadithList.innerHTML = `<div style="text-align:center;padding:40px;color:#8ed8a8;">No Hadith Found</div>`;
            updatePagination();
            return;
        }

        pageItems.forEach(function (hadith, index) {

            const actualIndex = start + index;
            const arabicText = hadith.text || hadith.arabic || "";
            let urduText = "";
            if (allUrduHadith[actualIndex]) urduText = allUrduHadith[actualIndex].text || "";

            const hadithNum = actualIndex + 1;
            const card = document.createElement("div");
            card.className = "hadith-card";
            card.setAttribute("data-hadith-num", hadithNum);

            if (highlightHadithNumber && hadithNum === highlightHadithNumber) {
                card.classList.add("highlight-hadith");
            }

            card.innerHTML = `
                <div class="hadith-card-top">
                    <span class="hadith-number">Hadith #${hadithNum}</span>
                    <span class="hadith-reference">${currentBook.title}</span>
                </div>
                <div class="hadith-arabic">${escapeHTML(arabicText)}</div>
                <div class="hadith-urdu">
                    <div class="hadith-urdu-title">اردو ترجمہ</div>
                    ${escapeHTML(urduText)}
                </div>
            `;

            hadithList.appendChild(card);
        });

        updatePagination();

        if (highlightHadithNumber && highlightHadithNumber > 0) {
            setTimeout(() => {
                const target = hadithList.querySelector(".highlight-hadith");
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "center" });
                }
                highlightHadithNumber = null;
            }, 400);
        }
    }

    /* =====================================================
       SEARCH HADITH — #15, 15, TEXT, ARABIC, URDU
    ===================================================== */
    function searchHadith() {

        const query = searchInput.value.trim().toLowerCase();

        // Empty → show all
        if (!query) {
            displayedHadith = allArabicHadith;
            currentPage = 1;
            highlightHadithNumber = null;
            renderHadith();
            return;
        }

        // NUMBER SEARCH (#15 ya 15)
        const numMatch = query.match(/^#?(\d+)$/);
        if (numMatch) {
            const targetNum = parseInt(numMatch[1], 10);

            if (targetNum >= 1 && targetNum <= allArabicHadith.length) {
                // Sirf uss hadith ko dikhao
                displayedHadith = [allArabicHadith[targetNum - 1]];
                currentPage = 1;

                // ⭐ Original number highlight karo — NOT 1
                highlightHadithNumber = targetNum;

                renderHadith();
                return;
            } else {
                displayedHadith = [];
                currentPage = 1;
                renderHadith();
                return;
            }
        }

        // TEXT SEARCH — Arabic + Urdu
        displayedHadith = allArabicHadith.filter(function (hadith, idx) {
            const arabicText = (hadith.text || "").toLowerCase();
            const urduText = (allUrduHadith[idx]?.text || "").toLowerCase();
            return arabicText.includes(query) || urduText.includes(query);
        });

        currentPage = 1;
        highlightHadithNumber = null;
        renderHadith();
    }

    /* =====================================================
       PAGINATION
    ===================================================== */
    function updatePagination() {
        const totalPages = Math.ceil(displayedHadith.length / ITEMS_PER_PAGE) || 1;
        pageNumber.textContent = "Page " + currentPage + " / " + totalPages;
        previousButton.disabled = currentPage <= 1;
        nextButton.disabled = currentPage >= totalPages;
    }

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                highlightHadithNumber = null;
                renderHadith();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const totalPages = Math.ceil(displayedHadith.length / ITEMS_PER_PAGE);
            if (currentPage < totalPages) {
                currentPage++;
                highlightHadithNumber = null;
                renderHadith();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    /* =====================================================
       EVENT LISTENERS
    ===================================================== */
    const hadithSearchBtn = document.getElementById("hadithSearchBtn");
    if (hadithSearchBtn) hadithSearchBtn.addEventListener("click", searchHadith);

    if (searchInput) {
        searchInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") searchHadith();
        });
    }

    const hadithResetBtn = document.getElementById("hadithResetBtn");
    if (hadithResetBtn) {
        hadithResetBtn.addEventListener("click", function () {
            searchInput.value = "";
            displayedHadith = allArabicHadith;
            currentPage = 1;
            highlightHadithNumber = null;
            renderHadith();
        });
    }

    document.querySelectorAll(".hadith-book-card").forEach(function (card) {
        card.addEventListener("click", function () {
            const book = card.dataset.book;
            openHadithBook(book);
        });
    });

    const backBtn = document.getElementById("backToHadithBooks");
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            readerScreen.style.display = "none";
            booksScreen.style.display = "block";
            hadithList.innerHTML = "";
            highlightHadithNumber = null;
        });
    }

    const retryBtn = document.getElementById("retryHadith");
    if (retryBtn) {
        retryBtn.addEventListener("click", function () {
            if (currentBookKey) openHadithBook(currentBookKey);
        });
    }

    /* =====================================================
       EXPOSE FOR GLOBAL SEARCH
    ===================================================== */
    window.openHadithBookBySearch = function (bookKey, hadithNumber) {
        if (typeof showPage === "function") showPage("hadith");
        setTimeout(() => {
            openHadithBook(bookKey, hadithNumber || null);
        }, 200);
    };

    /* =====================================================
       HELPERS
    ===================================================== */
    function showLoading() {
        if (loading) loading.style.display = "block";
        if (errorBox) errorBox.style.display = "none";
        if (hadithList) hadithList.innerHTML = "";
    }
    function hideLoading() { if (loading) loading.style.display = "none"; }
    function showError()   { if (errorBox) errorBox.style.display = "block"; }

    function escapeHTML(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

});


/* =====================================================
   ISLAMIC ARTICLES DYNAMIC SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const articles = [
        {
            id: 1,
            icon: "🕌",
            title: {
                en: "A Step Closer to Allah",
                ur: "اللہ کے قریب ایک قدم",
                ar: "خطوة أقرب إلى الله"
            },
            text: {
                en: `
                    <div class="article-hero-badge">✦ Islamic Journey ✦</div>
                    <h1>A Step Closer to Allah</h1>
                    <p class="article-intro">
                        Every soul is on a journey. Some walk slowly, some run,
                        and some stumble — but the destination is the same:
                        <strong>nearness to Allah</strong>. This article is a
                        gentle reminder and a practical guide for anyone who
                        wants to take one sincere step closer to their Creator.
                    </p>
                    <div class="article-arabic">
                        وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ
                    </div>
                    <p class="article-translation">
                        "And seek forgiveness of your Lord and turn to Him in repentance."
                        <span>— Surah Hud 11:3</span>
                    </p>
                    <h2>🌱 Why Do We Feel Far From Allah?</h2>
                    <p>
                        Sometimes we pray, yet feel empty. We make dua, yet feel
                        unheard. This distance is rarely because Allah has moved
                        away — it is usually because <em>we</em> have filled our
                        hearts with distractions.
                    </p>
                    <ul class="article-list">
                        <li><strong>Too much screen time</strong> — the heart becomes forgetful.</li>
                        <li><strong>Neglecting the five prayers</strong> — the connection weakens.</li>
                        <li><strong>Holding grudges</strong> — the soul becomes heavy.</li>
                        <li><strong>Chasing dunya only</strong> — the akhirah fades from sight.</li>
                    </ul>
                    <div class="article-arabic">
                        أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                    </div>
                    <p class="article-translation">
                        "Surely, in the remembrance of Allah do hearts find rest."
                        <span>— Surah Ar-Ra'd 13:28</span>
                    </p>
                    <h2>🌿 7 Practical Steps Closer to Allah</h2>
                    <div class="article-steps">
                        <div class="article-step">
                            <span class="step-number">1</span>
                            <div><h3>Start With Salah — On Time</h3>
                            <p>The five daily prayers are your direct line to Allah.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">2</span>
                            <div><h3>Make Dua With Certainty</h3>
                            <p>Allah hears every whisper. Ask Him for everything.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">3</span>
                            <div><h3>Read the Quran Daily</h3>
                            <p>Even five minutes a day.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">4</span>
                            <div><h3>Seek Forgiveness (Istighfar)</h3>
                            <p>Say Astaghfirullah 100 times a day.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">5</span>
                            <div><h3>Be Kind to Others</h3>
                            <p>A smile, a helping hand — acts of worship.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">6</span>
                            <div><h3>Remember the Hereafter</h3>
                            <p>This world is a bridge.</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">7</span>
                            <div><h3>Keep Good Company</h3>
                            <p>Surround yourself with people who remind you of Allah.</p></div>
                        </div>
                    </div>
                    <h2>🌟 The Hadith That Changes Hearts</h2>
                    <div class="article-hadith">
                        <div class="article-hadith-arabic">
                            مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا
                        </div>
                        <p class="article-hadith-english">
                            "Whoever comes one step closer to Me, I come one arm's length closer to him."
                        </p>
                        <span class="article-hadith-source">— Sahih al-Bukhari</span>
                    </div>
                    <h2>💡 A Beautiful Reminder</h2>
                    <div class="article-quote">
                        <p>"You do not need to be perfect to come close to Allah. You only need to be sincere."</p>
                    </div>
                    <h2>🤲 A Dua to Take With You</h2>
                    <div class="article-dua">
                        <div class="article-dua-arabic">
                            اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ
                        </div>
                        <p class="article-dua-english">
                            "O Allah, make me among those who repent and among those who purify themselves."
                        </p>
                        <span class="article-dua-source">— Sunan at-Tirmidhi</span>
                    </div>
                    <div class="article-source">
                        📖 Main Sources: Quran (Surah Hud 11:3, Ar-Ra'd 13:28), Sahih al-Bukhari, Sunan at-Tirmidhi
                    </div>
                `,
                ur: `
                    <div class="article-hero-badge">✦ اسلامی سفر ✦</div>
                    <h1>اللہ کے قریب ایک قدم</h1>
                    <p class="article-intro">
                        ہر روح ایک سفر پر ہے۔ کوئی آہستہ چلتا ہے، کوئی دوڑتا ہے،
                        اور کوئی ٹھوکریں کھاتا ہے — لیکن منزل ایک ہی ہے:
                        <strong>اللہ کے قریب ہونا</strong>۔
                    </p>
                    <div class="article-arabic">وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ</div>
                    <p class="article-translation">
                        "اور اپنے رب سے معافی مانگو، پھر اسی کی طرف رجوع کرو۔"
                        <span>— سورۃ ہود 11:3</span>
                    </p>
                    <h2>🌱 ہمیں اللہ سے دوری کیوں محسوس ہوتی ہے؟</h2>
                    <p>کبھی ہم نماز پڑھتے ہیں لیکن دل خالی محسوس ہوتا ہے۔</p>
                    <ul class="article-list">
                        <li><strong>موبائل کا زیادہ استعمال</strong> — دل غافل ہو جاتا ہے۔</li>
                        <li><strong>پانچ نمازوں میں سستی</strong> — تعلق کمزور ہو جاتا ہے۔</li>
                        <li><strong>دلوں میں کینہ</strong> — روح بھاری ہو جاتی ہے۔</li>
                    </ul>
                    <div class="article-arabic">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</div>
                    <p class="article-translation">
                        "یاد رکھو، اللہ کے ذکر سے ہی دلوں کو سکون ملتا ہے۔"
                        <span>— سورۃ الرعد 13:28</span>
                    </p>
                    <h2>🌿 اللہ کے قریب ہونے کے 7 عملی قدم</h2>
                    <div class="article-steps">
                        <div class="article-step">
                            <span class="step-number">1</span>
                            <div><h3>نماز وقت پر پڑھیں</h3>
                            <p>پانچ نمازیں اللہ سے براہِ راست رابطہ ہیں۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">2</span>
                            <div><h3>یقین کے ساتھ دعا کریں</h3>
                            <p>اللہ ہر پکار سنتا ہے۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">3</span>
                            <div><h3>روزانہ قرآن پڑھیں</h3>
                            <p>چاہے صرف پانچ منٹ۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">4</span>
                            <div><h3>استغفار کریں</h3>
                            <p>دن میں 100 مرتبہ استغفراللہ کہیں۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">5</span>
                            <div><h3>لوگوں کے ساتھ نرمی کریں</h3>
                            <p>ایک مسکراہٹ بھی عبادت ہے۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">6</span>
                            <div><h3>آخرت کو یاد رکھیں</h3>
                            <p>یہ دنیا ایک پل ہے۔</p></div>
                        </div>
                        <div class="article-step">
                            <span class="step-number">7</span>
                            <div><h3>اچھی صحبت اختیار کریں</h3>
                            <p>ایسے لوگوں کے ساتھ رہیں جو اللہ کی یاد دلاتے ہیں۔</p></div>
                        </div>
                    </div>
                    <div class="article-source">
                        📖 بنیادی ماخذ: قرآن مجید، صحیح بخاری، سنن ترمذی
                    </div>
                `,
                ar: `
                    <div class="article-hero-badge">✦ رحلة إسلامية ✦</div>
                    <h1>خطوة أقرب إلى الله</h1>
                    <p class="article-intro">
                        كل روح في رحلة. بعضهم يسير ببطء، وبعضهم يركض — لكن الوجهة واحدة:
                        <strong>القرب من الله</strong>.
                    </p>
                    <div class="article-source">📖 صحيح البخاري، سنن الترمذي</div>
                `
            }
        },
        {
            id: 2,
            icon: "❤️",
            title: {
                en: "Patience and Trust in Allah",
                ur: "صبر اور اللہ پر بھروسہ",
                ar: "الصبر والتوكل على الله"
            },
            text: {
                en: `
                    <h1>Patience and Trust in Allah</h1>
                    <p>Life contains happiness as well as difficulties. Islam teaches believers to remain patient during difficult times and trust Allah's wisdom.</p>
                    <h2>The Power of Patience</h2>
                    <p>Patience does not mean giving up. It means remaining firm, continuing to do what is right and trusting Allah even when the result is not immediately visible.</p>
                    <div class="article-arabic">إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</div>
                    <div class="article-source">Source: Quran, Surah Al-Baqarah 2:153</div>
                `,
                ur: `
                    <h1>صبر اور اللہ پر بھروسہ</h1>
                    <p>زندگی میں خوشی کے ساتھ مشکلات بھی آتی ہیں۔</p>
                    <div class="article-arabic">إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</div>
                    <div class="article-source">ماخذ: قرآن مجید، سورۃ البقرہ 2:153</div>
                `,
                ar: `
                    <h1>الصبر والتوكل على الله</h1>
                    <div class="article-source">المصدر: سورة البقرة 2:153</div>
                `
            }
        },
        {
            id: 3,
            icon: "🌙",
            title: {
                en: "The Beauty of Good Character",
                ur: "اچھے اخلاق کی خوبصورتی",
                ar: "جمال الأخلاق الحسنة"
            },
            text: {
                en: `
                    <h1>The Beauty of Good Character</h1>
                    <p>Good character is one of the greatest qualities a Muslim can develop.</p>
                    <div class="article-arabic">وَقُولُوا لِلنَّاسِ حُسْنًا</div>
                    <div class="article-source">Source: Quran, Surah Al-Baqarah 2:83</div>
                `,
                ur: `
                    <h1>اچھے اخلاق کی خوبصورتی</h1>
                    <div class="article-arabic">وَقُولُوا لِلنَّاسِ حُسْنًا</div>
                    <div class="article-source">ماخذ: سورۃ البقرہ 2:83</div>
                `,
                ar: `
                    <h1>جمال الأخلاق الحسنة</h1>
                    <div class="article-source">المصدر: سورة البقرة 2:83</div>
                `
            }
        }
    ];

    let currentLanguage = "en";
    let currentArticle = 0;
    let filteredArticles = [...articles];

    const articleList = document.getElementById("articleList");
    const articleReader = document.getElementById("articleReader");
    const articleContent = document.getElementById("articleContent");
    const articleSearch = document.getElementById("articleSearch");

    function renderArticles(list = filteredArticles) {
        if (!articleList) return;
        articleList.innerHTML = "";

        list.forEach(function (article) {
            const card = document.createElement("div");
            card.className = "article-card";

            card.innerHTML = `
                <div class="article-card-icon">${article.icon}</div>
                <h2>${article.title[currentLanguage]}</h2>
                <p>${getShortDescription(article)}</p>
                <span class="article-read-more">${getReadMoreText()}</span>
            `;

            card.addEventListener("click", function () {
                openArticle(article.id);
            });

            articleList.appendChild(card);
        });
    }

    function getShortDescription() {
        if (currentLanguage === "ur") return "اسلامی تعلیمات اور روزمرہ زندگی کے لیے مفید مضمون۔";
        if (currentLanguage === "ar") return "مقال إسلامي مفيد للتعلم وتطبيق تعاليم الإسلام في الحياة.";
        return "A beneficial Islamic article for learning and daily life.";
    }

    function getReadMoreText() {
        if (currentLanguage === "ur") return "مکمل مضمون پڑھیں →";
        if (currentLanguage === "ar") return "اقرأ المقال كاملاً →";
        return "Read Full Article →";
    }

    function openArticle(id) {
        const index = articles.findIndex(a => a.id === id);
        if (index === -1) return;

        currentArticle = index;

        if (articleList) articleList.style.display = "none";
        const searchEl = document.querySelector(".articles-search");
        const langBar = document.querySelector(".article-language-bar");
        if (searchEl) searchEl.style.display = "none";
        if (langBar) langBar.style.display = "none";
        if (articleReader) articleReader.style.display = "block";

        if (articleContent) {
            articleContent.innerHTML = articles[index].text[currentLanguage];
            if (currentLanguage === "ur" || currentLanguage === "ar") {
                articleContent.classList.add("rtl");
            } else {
                articleContent.classList.remove("rtl");
            }
        }

        updateArticleButtons();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const backToArticles = document.getElementById("backToArticles");
    if (backToArticles) {
        backToArticles.addEventListener("click", function () {
            if (articleReader) articleReader.style.display = "none";
            if (articleList) articleList.style.display = "grid";
            const searchEl = document.querySelector(".articles-search");
            const langBar = document.querySelector(".article-language-bar");
            if (searchEl) searchEl.style.display = "flex";
            if (langBar) langBar.style.display = "flex";
            renderArticles();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll(".article-lang-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            currentLanguage = button.dataset.language;
            document.querySelectorAll(".article-lang-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            if (articleReader && articleReader.style.display !== "none") {
                if (articleContent) {
                    articleContent.innerHTML = articles[currentArticle].text[currentLanguage];
                    if (currentLanguage === "ur" || currentLanguage === "ar") {
                        articleContent.classList.add("rtl");
                    } else {
                        articleContent.classList.remove("rtl");
                    }
                }
            } else {
                renderArticles();
            }
        });
    });

    function searchArticles() {
        if (!articleSearch) return;
        const query = articleSearch.value.trim().toLowerCase();

        if (!query) {
            filteredArticles = [...articles];
            renderArticles();
            return;
        }

        filteredArticles = articles.filter(function (article) {
            const title = article.title[currentLanguage].toLowerCase();
            return title.includes(query);
        });

        renderArticles(filteredArticles);
    }

    const articleSearchBtn = document.getElementById("articleSearchBtn");
    if (articleSearchBtn) articleSearchBtn.addEventListener("click", searchArticles);

    if (articleSearch) {
        articleSearch.addEventListener("keyup", function (event) {
            if (event.key === "Enter") searchArticles();
        });
    }

    const prevArticle = document.getElementById("previousArticle");
    if (prevArticle) {
        prevArticle.addEventListener("click", function () {
            if (currentArticle > 0) {
                currentArticle--;
                if (articleContent) {
                    articleContent.innerHTML = articles[currentArticle].text[currentLanguage];
                }
                updateArticleButtons();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    const nextArticleBtn = document.getElementById("nextArticle");
    if (nextArticleBtn) {
        nextArticleBtn.addEventListener("click", function () {
            if (currentArticle < articles.length - 1) {
                currentArticle++;
                if (articleContent) {
                    articleContent.innerHTML = articles[currentArticle].text[currentLanguage];
                }
                updateArticleButtons();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    function updateArticleButtons() {
        const previous = document.getElementById("previousArticle");
        const next = document.getElementById("nextArticle");
        if (previous) previous.disabled = currentArticle === 0;
        if (next) next.disabled = currentArticle === articles.length - 1;
    }

    renderArticles();

    window.openArticle = openArticle;
});


/* =====================================================
   DUAS SYSTEM
===================================================== */

const LOCAL_DUAS = [
    { id: 1, title: "Dua Before Eating", arabic: "بِسْمِ اللَّهِ", urdu: "اللہ کے نام سے (شروع کرتا ہوں)", english: "In the name of Allah.", category: "food", reference: "Sunan Abu Dawud" },
    { id: 2, title: "Dua After Eating", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا", urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا اور پلایا", english: "All praise is for Allah who fed us and gave us drink.", category: "food", reference: "Sunan Abu Dawud" },
    { id: 3, title: "Morning Dua", arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا", urdu: "اے اللہ! تیری مدد سے ہم نے صبح کی", english: "O Allah, by You we enter the morning and by You we enter the evening.", category: "morning", reference: "Sunan Abu Dawud" },
    { id: 4, title: "Evening Dua", arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا", urdu: "اے اللہ! تیری مدد سے ہم نے شام کی", english: "O Allah, by You we enter the evening and by You we enter the morning.", category: "evening", reference: "Sunan Abu Dawud" },
    { id: 5, title: "Dua Before Sleeping", arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", urdu: "اے اللہ! تیرے نام سے میں مرتا اور جیتا ہوں", english: "In Your name, O Allah, I die and I live.", category: "sleep", reference: "Sahih Bukhari" },
    { id: 6, title: "Dua After Waking Up", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا", urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی بخشی", english: "All praise is for Allah who gave us life after death.", category: "sleep", reference: "Sahih Bukhari" },
    { id: 7, title: "Dua for Forgiveness", arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ", urdu: "اے میرے رب! مجھے معاف کر اور میری توبہ قبول کر", english: "My Lord, forgive me and accept my repentance.", category: "forgiveness", reference: "Sunan at-Tirmidhi" },
    { id: 8, title: "Dua for Protection", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں", english: "I seek refuge in the perfect words of Allah.", category: "protection", reference: "Sahih Muslim" },
    { id: 9, title: "Dua for Travel", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا", urdu: "پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کیا", english: "Glory be to Him who has subjected this to us.", category: "travel", reference: "Surah Az-Zukhruf 43:13" },
    { id: 10, title: "Dua for Family", arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", urdu: "اے ہمارے رب! ہمیں اپنی بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما", english: "Our Lord, grant us comfort to our eyes.", category: "family", reference: "Surah Al-Furqan 25:74" },
    { id: 11, title: "Dua for Guidance", arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", urdu: "ہمیں سیدھے راستے کی ہدایت فرما", english: "Guide us to the straight path.", category: "prayer", reference: "Surah Al-Fatihah 1:6" },
    { id: 12, title: "Dua for Patience", arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا", urdu: "اے ہمارے رب! ہم پر صبر انڈیل دے", english: "Our Lord, pour upon us patience.", category: "prayer", reference: "Surah Al-Baqarah 2:250" },
    { id: 13, title: "Dua for Knowledge", arabic: "رَبِّ زِدْنِي عِلْمًا", urdu: "اے میرے رب! میرے علم میں اضافہ فرما", english: "My Lord, increase me in knowledge.", category: "general", reference: "Surah Ta-Ha 20:114" },
    { id: 14, title: "Dua for Mercy", arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ", urdu: "اے میرے رب! معاف کر اور رحم فرما", english: "My Lord, forgive and have mercy.", category: "forgiveness", reference: "Surah Al-Mu'minun 23:118" },
    { id: 15, title: "Dua for Ease", arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي", urdu: "اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے", english: "My Lord, expand for me my chest and ease for me my task.", category: "general", reference: "Surah Ta-Ha 20:25-26" },
    { id: 16, title: "Dua for Anxiety", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ", urdu: "اے اللہ! میں غم اور پریشانی سے تیری پناہ مانگتا ہوں", english: "O Allah, I seek refuge in You from worry and grief.", category: "protection", reference: "Sahih Bukhari" },
    { id: 17, title: "Dua for Parents", arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", urdu: "اے میرے رب! میرے والدین پر رحم فرما", english: "My Lord, have mercy upon them.", category: "family", reference: "Surah Al-Isra 17:24" },
    { id: 18, title: "Dua for Steadfastness", arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", urdu: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت رکھ", english: "O Turner of hearts, keep my heart firm.", category: "prayer", reference: "Sunan at-Tirmidhi" },
    { id: 19, title: "Dua for Protection from Evil Eye", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ", urdu: "میں اللہ کے مکمل کلمات سے ہر شیطان سے پناہ مانگتا ہوں", english: "I seek refuge in the perfect words of Allah.", category: "protection", reference: "Sahih Bukhari" },
    { id: 20, title: "Dua for Acceptance", arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ", urdu: "اے ہمارے رب! ہم سے قبول فرما", english: "Our Lord, accept from us.", category: "prayer", reference: "Surah Al-Baqarah 2:127" },
    { id: 21, title: "Dua for Barakah", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا", urdu: "اے اللہ! جو رزق تو نے دیا ہے اس میں برکت دے", english: "O Allah, bless us in what You have provided us.", category: "general", reference: "Sunan Ibn Majah" },
    { id: 22, title: "Dua for Health", arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي", urdu: "اے اللہ! میرے جسم کو صحت عطا فرما", english: "O Allah, grant health to my body.", category: "general", reference: "Sunan Abu Dawud" },
    { id: 23, title: "Dua for Entering Home", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ", urdu: "اے اللہ! میں تجھ سے گھر میں داخل ہونے کی خیر مانگتا ہوں", english: "O Allah, I ask You for the best of entering.", category: "general", reference: "Sunan Abu Dawud" },
    { id: 24, title: "Dua for Leaving Home", arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ", urdu: "اللہ کے نام سے، میں اللہ پر بھروسہ کرتا ہوں", english: "In the name of Allah, I place my trust in Allah.", category: "general", reference: "Sunan Abu Dawud" },
    { id: 25, title: "Dua for Rain", arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا", urdu: "اے اللہ! نفع بخش بارش برسا", english: "O Allah, send beneficial rain.", category: "general", reference: "Sahih Bukhari" }
];

let allDuas = [...LOCAL_DUAS];
let filteredDuas = [...LOCAL_DUAS];
let currentDuaPage = 1;
const duasPerPage = 10;
let currentReaderIndex = 0;

const duasContainer = document.getElementById("duasContainer");
const duaSearch = document.getElementById("duaSearch");
const duaSearchBtn = document.getElementById("duaSearchBtn");
const duaCategory = document.getElementById("duaCategory");
const duaLanguage = document.getElementById("duaLanguage");
const duaCount = document.getElementById("duaCount");
const duasLoading = document.getElementById("duasLoading");
const duasError = document.getElementById("duasError");
const retryDuas = document.getElementById("retryDuas");
const noDuasFound = document.getElementById("noDuasFound");
const duasPagination = document.getElementById("duasPagination");
const duaPrevious = document.getElementById("duaPrevious");
const duaNext = document.getElementById("duaNext");
const duaPageNumbers = document.getElementById("duaPageNumbers");
const randomDuaBtn = document.getElementById("randomDuaBtn");
const duaReader = document.getElementById("duaReader");
const duaBackBtn = document.getElementById("duaBackBtn");
const readerDuaNumber = document.getElementById("readerDuaNumber");
const readerDuaTitle = document.getElementById("readerDuaTitle");
const readerArabic = document.getElementById("readerArabic");
const readerUrdu = document.getElementById("readerUrdu");
const readerEnglish = document.getElementById("readerEnglish");
const readerReference = document.getElementById("readerReference");
const copyDuaBtn = document.getElementById("copyDuaBtn");
const shareDuaBtn = document.getElementById("shareDuaBtn");
const favoriteDuaBtn = document.getElementById("favoriteDuaBtn");
const readerPrevious = document.getElementById("readerPrevious");
const readerNext = document.getElementById("readerNext");

async function loadDuas() {
    showDuaLoading();
    allDuas = [...LOCAL_DUAS];
    filteredDuas = [...allDuas];
    currentDuaPage = 1;
    renderDuas();
    hideDuaLoading();
}

function normalizeDua(dua, index) {
    return {
        id: dua.id || index + 1,
        title: dua.title || `Dua ${index + 1}`,
        arabic: dua.arabic || "Arabic text unavailable",
        urdu: dua.urdu || "اردو ترجمہ دستیاب نہیں",
        english: dua.english || "English translation unavailable",
        category: dua.category || "general",
        reference: dua.reference || "Quran / Sunnah"
    };
}

function getDua(index) {
    return normalizeDua(allDuas[index], index);
}

function renderDuas() {
    if (!duasContainer) return;
    duasContainer.innerHTML = "";
    if (noDuasFound) noDuasFound.style.display = "none";

    if (!filteredDuas.length) {
        if (noDuasFound) noDuasFound.style.display = "block";
        if (duasPagination) duasPagination.style.display = "none";
        if (duaCount) duaCount.textContent = "0";
        return;
    }

    const totalPages = Math.ceil(filteredDuas.length / duasPerPage);
    if (currentDuaPage > totalPages) currentDuaPage = totalPages;

    const start = (currentDuaPage - 1) * duasPerPage;
    const end = start + duasPerPage;
    const pageDuas = filteredDuas.slice(start, end);

    pageDuas.forEach((duaData) => {
        const originalIndex = allDuas.indexOf(duaData);
        const dua = normalizeDua(duaData, originalIndex);

        const card = document.createElement("article");
        card.className = "dua-card";

        card.innerHTML = `
            <div class="dua-card-top">
                <span class="dua-number">${originalIndex + 1}</span>
                <span class="dua-category">${escapeDuaHTML(dua.category)}</span>
            </div>
            <h3>${escapeDuaHTML(dua.title)}</h3>
            <div class="dua-arabic">
                <span class="dua-label">العربية</span>
                ${escapeDuaHTML(dua.arabic)}
            </div>
            <div class="dua-urdu">
                <span class="dua-label">اردو</span>
                ${escapeDuaHTML(dua.urdu)}
            </div>
            <div class="dua-english">
                <span class="dua-label">English</span>
                ${escapeDuaHTML(dua.english)}
            </div>
            <div class="dua-reference">
                <strong>📖 Reference:</strong> ${escapeDuaHTML(dua.reference)}
            </div>
            <div class="dua-card-actions">
                <button class="open-dua" data-index="${originalIndex}">📖 Read</button>
                <button class="copy-card-dua" data-index="${originalIndex}">📋 Copy</button>
                <button class="favorite-card-dua" data-index="${originalIndex}">❤️</button>
            </div>
        `;

        duasContainer.appendChild(card);
    });

    if (duaCount) duaCount.textContent = filteredDuas.length;
    renderPagination(totalPages);
    attachCardEvents();
}

function attachCardEvents() {
    document.querySelectorAll(".open-dua").forEach(button => {
        button.addEventListener("click", () => {
            openDuaReader(Number(button.dataset.index));
        });
    });

    document.querySelectorAll(".copy-card-dua").forEach(button => {
        button.addEventListener("click", () => {
            copyDua(Number(button.dataset.index));
        });
    });

    document.querySelectorAll(".favorite-card-dua").forEach(button => {
        button.addEventListener("click", () => {
            toggleFavorite(Number(button.dataset.index), button);
        });
    });
}

function renderPagination(totalPages) {
    if (!duasPagination) return;
    duasPagination.style.display = totalPages > 1 ? "flex" : "none";
    if (duaPrevious) duaPrevious.disabled = currentDuaPage === 1;
    if (duaNext) duaNext.disabled = currentDuaPage === totalPages;
    if (duaPageNumbers) duaPageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === currentDuaPage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentDuaPage = i;
            renderDuas();
            scrollToDuas();
        });

        if (duaPageNumbers) duaPageNumbers.appendChild(button);
    }
}

if (duaPrevious) {
    duaPrevious.addEventListener("click", () => {
        if (currentDuaPage > 1) {
            currentDuaPage--;
            renderDuas();
            scrollToDuas();
        }
    });
}

if (duaNext) {
    duaNext.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredDuas.length / duasPerPage);
        if (currentDuaPage < totalPages) {
            currentDuaPage++;
            renderDuas();
            scrollToDuas();
        }
    });
}

function searchDuas() {
    if (!duaSearch || !duaCategory) return;
    const search = duaSearch.value.trim().toLowerCase();
    const category = duaCategory.value.toLowerCase();

    filteredDuas = allDuas.filter((duaData, index) => {
        const dua = normalizeDua(duaData, index);
        const searchableText = `${dua.title} ${dua.arabic} ${dua.urdu} ${dua.english} ${dua.category} ${dua.reference}`.toLowerCase();
        const matchesSearch = !search || searchableText.includes(search);
        const matchesCategory = category === "all" || dua.category.toLowerCase().includes(category);
        return matchesSearch && matchesCategory;
    });

    currentDuaPage = 1;
    renderDuas();
}

if (duaSearch) duaSearch.addEventListener("input", searchDuas);
if (duaSearchBtn) duaSearchBtn.addEventListener("click", searchDuas);
if (duaCategory) duaCategory.addEventListener("change", searchDuas);

if (duaLanguage) {
    duaLanguage.addEventListener("change", () => {
        const language = duaLanguage.value;
        document.querySelectorAll(".dua-arabic, .dua-urdu, .dua-english").forEach(element => {
            element.style.display = "";
        });
        if (language === "arabic") {
            document.querySelectorAll(".dua-urdu, .dua-english").forEach(el => el.style.display = "none");
        }
        if (language === "urdu") {
            document.querySelectorAll(".dua-arabic, .dua-english").forEach(el => el.style.display = "none");
        }
        if (language === "english") {
            document.querySelectorAll(".dua-arabic, .dua-urdu").forEach(el => el.style.display = "none");
        }
    });
}

if (randomDuaBtn) {
    randomDuaBtn.addEventListener("click", () => {
        if (!allDuas.length) return;
        const randomIndex = Math.floor(Math.random() * allDuas.length);
        openDuaReader(randomIndex);
    });
}

function openDuaReader(index) {
    if (!allDuas[index]) return;

    currentReaderIndex = index;
    const dua = getDua(index);

    if (readerDuaNumber) readerDuaNumber.textContent = index + 1;
    if (readerDuaTitle) readerDuaTitle.textContent = dua.title;
    if (readerArabic) readerArabic.textContent = dua.arabic;
    if (readerUrdu) readerUrdu.textContent = dua.urdu;
    if (readerEnglish) readerEnglish.textContent = dua.english;
    if (readerReference) readerReference.textContent = dua.reference;

    if (duasContainer) duasContainer.style.display = "none";
    if (duasPagination) duasPagination.style.display = "none";
    const controls = document.querySelector(".duas-controls");
    const info = document.querySelector(".duas-info");
    const header = document.querySelector(".duas-header");
    if (controls) controls.style.display = "none";
    if (info) info.style.display = "none";
    if (header) header.style.display = "none";

    if (duaReader) duaReader.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateReaderButtons();
}

if (duaBackBtn) {
    duaBackBtn.addEventListener("click", () => {
        if (duaReader) duaReader.style.display = "none";
        if (duasContainer) duasContainer.style.display = "grid";
        const controls = document.querySelector(".duas-controls");
        const info = document.querySelector(".duas-info");
        const header = document.querySelector(".duas-header");
        if (controls) controls.style.display = "";
        if (info) info.style.display = "";
        if (header) header.style.display = "";
        renderDuas();
        scrollToDuas();
    });
}

if (readerPrevious) {
    readerPrevious.addEventListener("click", () => {
        if (currentReaderIndex > 0) openDuaReader(currentReaderIndex - 1);
    });
}

if (readerNext) {
    readerNext.addEventListener("click", () => {
        if (currentReaderIndex < allDuas.length - 1) openDuaReader(currentReaderIndex + 1);
    });
}

function updateReaderButtons() {
    if (readerPrevious) readerPrevious.disabled = currentReaderIndex === 0;
    if (readerNext) readerNext.disabled = currentReaderIndex === allDuas.length - 1;
}

async function copyDua(index) {
    const dua = getDua(index);
    const text = `${dua.title}\n${dua.arabic}\n${dua.urdu}\n${dua.english}\nReference: ${dua.reference}\nIslamicWay`.trim();

    try {
        await navigator.clipboard.writeText(text);
        showDuaMessage("✅ Dua copied successfully!");
    } catch (error) {
        alert("Copy failed. Please copy manually.");
    }
}

if (copyDuaBtn) copyDuaBtn.addEventListener("click", () => copyDua(currentReaderIndex));

if (shareDuaBtn) {
    shareDuaBtn.addEventListener("click", async () => {
        const dua = getDua(currentReaderIndex);
        const shareText = `${dua.title}\n${dua.arabic}\n${dua.urdu}\n${dua.english}\n${dua.reference}`.trim();

        if (navigator.share) {
            try {
                await navigator.share({ title: dua.title, text: shareText });
            } catch (error) { console.log("Share cancelled"); }
        } else {
            await navigator.clipboard.writeText(shareText);
            showDuaMessage("🔗 Dua copied for sharing!");
        }
    });
}

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("islamicway_favorite_duas")) || [];
    } catch { return []; }
}

function saveFavorites(favorites) {
    localStorage.setItem("islamicway_favorite_duas", JSON.stringify(favorites));
}

function toggleFavorite(index, button) {
    let favorites = getFavorites();

    if (favorites.includes(index)) {
        favorites = favorites.filter(item => item !== index);
        button.textContent = "❤️";
        showDuaMessage("Removed from favorites");
    } else {
        favorites.push(index);
        button.textContent = "💖";
        showDuaMessage("❤️ Added to favorites");
    }

    saveFavorites(favorites);
}

if (favoriteDuaBtn) {
    favoriteDuaBtn.addEventListener("click", () => {
        let favorites = getFavorites();
        const index = currentReaderIndex;

        if (favorites.includes(index)) {
            favorites = favorites.filter(item => item !== index);
            favoriteDuaBtn.textContent = "❤️ Favorite";
        } else {
            favorites.push(index);
            favoriteDuaBtn.textContent = "💖 Favorited";
        }

        saveFavorites(favorites);
    });
}

function showDuaLoading() {
    if (duasLoading) duasLoading.style.display = "block";
}

function hideDuaLoading() {
    if (duasLoading) duasLoading.style.display = "none";
}

if (retryDuas) retryDuas.addEventListener("click", loadDuas);

function showDuaMessage(message) {
    const old = document.querySelector(".dua-toast");
    if (old) old.remove();

    const toast = document.createElement("div");
    toast.className = "dua-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

function escapeDuaHTML(value) {
    if (value === null || value === undefined) return "";
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function scrollToDuas() {
    const page = document.getElementById("page-duas");
    if (page) page.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (duasContainer) loadDuas();

window.openDuaReader = openDuaReader;


/* =====================================================
   ISLAMIC GUIDANCE
===================================================== */

const guidanceData = [
    { id: 1, category: "quran", title: "Guidance from the Quran", arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ", urdu: "بے شک یہ قرآن اس راستے کی رہنمائی کرتا ہے جو سب سے سیدھا ہے۔", english: "Indeed, this Quran guides to the way that is most upright.", content: "قرآن مجید مسلمان کی زندگی کے لیے بنیادی رہنمائی فراہم کرتا ہے۔", reference: "Quran 17:9" },
    { id: 2, category: "salah", title: "Importance of Salah", arabic: "وَأَقِيمُوا الصَّلَاةَ", urdu: "اور نماز قائم کرو۔", english: "And establish prayer.", content: "نماز اسلام کی بنیادی عبادات میں سے ہے۔", reference: "Quran 2:43" },
    { id: 3, category: "patience", title: "Be Patient", arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", urdu: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔", english: "Indeed, Allah is with those who are patient.", content: "مشکلات کے وقت صبر اور اللہ پر بھروسہ مسلمان کے لیے بڑی طاقت ہیں۔", reference: "Quran 2:153" },
    { id: 4, category: "family", title: "Kindness to Parents", arabic: "وَبِالْوَالِدَيْنِ إِحْسَانًا", urdu: "اور والدین کے ساتھ حسن سلوک کرو۔", english: "And show kindness to parents.", content: "اسلام والدین کے ساتھ احترام اور حسن سلوک کی تعلیم دیتا ہے۔", reference: "Quran 17:23" },
    { id: 5, category: "character", title: "Good Character", arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا", urdu: "اور لوگوں سے اچھی بات کہو۔", english: "And speak good words to people.", content: "اچھی گفتگو اسلامی اخلاق کا اہم حصہ ہے۔", reference: "Quran 2:83" },
    { id: 6, category: "halal", title: "Eat What Is Halal", arabic: "كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ", urdu: "جو پاکیزہ چیزیں ہم نے تمہیں عطا کی ہیں ان میں سے کھاؤ۔", english: "Eat from the good things We have provided for you.", content: "اسلام حلال اور پاکیزہ رزق اختیار کرنے کی تعلیم دیتا ہے۔", reference: "Quran 2:172" },
    { id: 7, category: "daily", title: "Remember Allah", arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", urdu: "یاد رکھو، اللہ کے ذکر سے دلوں کو اطمینان ملتا ہے۔", english: "Surely, in the remembrance of Allah do hearts find comfort.", content: "اللہ کا ذکر دل کو سکون دیتا ہے۔", reference: "Quran 13:28" },
    { id: 8, category: "quran", title: "Trust in Allah", arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ", urdu: "اور اگر تم مومن ہو تو اللہ ہی پر بھروسہ کرو۔", english: "And upon Allah rely, if you are believers.", content: "مسلمان کو اللہ تعالیٰ پر بھروسہ رکھنا چاہیے۔", reference: "Quran 5:23" },
    { id: 9, category: "ramadan", title: "Purpose of Fasting", arabic: "لَعَلَّكُمْ تَتَّقُونَ", urdu: "تاکہ تم تقویٰ اختیار کرو۔", english: "So that you may attain Taqwa.", content: "روزہ تقویٰ اور نفس کی تربیت کا ذریعہ ہے۔", reference: "Quran 2:183" },
    { id: 10, category: "character", title: "Forgive Others", arabic: "وَلْيَعْفُوا وَلْيَصْفَحُوا", urdu: "انہیں معاف کر دینا چاہیے اور درگزر کرنا چاہیے۔", english: "Let them pardon and overlook.", content: "اسلام معافی اور درگزر کی حوصلہ افزائی کرتا ہے۔", reference: "Quran 24:22" },
    { id: 11, category: "daily", title: "Be Thankful", arabic: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ", urdu: "اگر تم شکر کرو گے تو میں تمہیں ضرور زیادہ دوں گا۔", english: "If you are grateful, I will surely increase you.", content: "اللہ تعالیٰ کی نعمتوں پر شکر ادا کرنا ایمان کا حصہ ہے۔", reference: "Quran 14:7" },
    { id: 12, category: "patience", title: "Hope in Allah", arabic: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ", urdu: "اللہ کی رحمت سے ناامید نہ ہو۔", english: "Do not despair of the mercy of Allah.", content: "اللہ کی رحمت سے مایوس نہیں ہونا چاہیے۔", reference: "Quran 39:53" }
];

let filteredGuidance = [...guidanceData];
let currentGuidancePage = 1;
const guidancePerPage = 6;
let currentGuidanceIndex = 0;

const guidanceContainer = document.getElementById("guidanceContainer");
const guidanceSearch = document.getElementById("guidanceSearch");
const guidanceSearchBtn = document.getElementById("guidanceSearchBtn");
const guidanceCategory = document.getElementById("guidanceCategory");
const guidanceLanguage = document.getElementById("guidanceLanguage");
const guidanceCount = document.getElementById("guidanceCount");
const randomGuidanceBtn = document.getElementById("randomGuidanceBtn");
const guidanceError = document.getElementById("guidanceError");
const retryGuidance = document.getElementById("retryGuidance");
const noGuidanceFound = document.getElementById("noGuidanceFound");
const guidancePagination = document.getElementById("guidancePagination");
const guidancePrevious = document.getElementById("guidancePrevious");
const guidanceNext = document.getElementById("guidanceNext");
const guidancePageNumbers = document.getElementById("guidancePageNumbers");
const guidanceReader = document.getElementById("guidanceReader");
const guidanceBackBtn = document.getElementById("guidanceBackBtn");
const readerGuidanceNumber = document.getElementById("readerGuidanceNumber");
const readerGuidanceTitle = document.getElementById("readerGuidanceTitle");
const readerGuidanceArabic = document.getElementById("readerGuidanceArabic");
const readerGuidanceUrdu = document.getElementById("readerGuidanceUrdu");
const readerGuidanceEnglish = document.getElementById("readerGuidanceEnglish");
const readerGuidanceContent = document.getElementById("readerGuidanceContent");
const readerGuidanceReference = document.getElementById("readerGuidanceReference");
const copyGuidanceBtn = document.getElementById("copyGuidanceBtn");
const shareGuidanceBtn = document.getElementById("shareGuidanceBtn");
const favoriteGuidanceBtn = document.getElementById("favoriteGuidanceBtn");
const readerGuidancePrevious = document.getElementById("readerGuidancePrevious");
const readerGuidanceNext = document.getElementById("readerGuidanceNext");

function renderGuidance() {
    if (!guidanceContainer) return;
    guidanceContainer.innerHTML = "";
    if (noGuidanceFound) noGuidanceFound.style.display = "none";

    if (!filteredGuidance.length) {
        if (noGuidanceFound) noGuidanceFound.style.display = "block";
        if (guidancePagination) guidancePagination.style.display = "none";
        if (guidanceCount) guidanceCount.textContent = "0";
        return;
    }

    const totalPages = Math.ceil(filteredGuidance.length / guidancePerPage);
    if (currentGuidancePage > totalPages) currentGuidancePage = totalPages;

    const start = (currentGuidancePage - 1) * guidancePerPage;
    const end = start + guidancePerPage;
    const pageItems = filteredGuidance.slice(start, end);

    pageItems.forEach((item) => {
        const originalIndex = guidanceData.indexOf(item);

        const card = document.createElement("article");
        card.className = "guidance-card";

        card.innerHTML = `
            <div class="guidance-card-top">
                <span class="guidance-number">${item.id}</span>
                <span class="guidance-category">${formatCategory(item.category)}</span>
            </div>
            <h3>${escapeGuidanceHTML(item.title)}</h3>
            <div class="guidance-card-arabic">
                <span class="guidance-label">العربية</span>
                ${escapeGuidanceHTML(item.arabic)}
            </div>
            <div class="guidance-card-urdu">
                <span class="guidance-label">اردو</span>
                ${escapeGuidanceHTML(item.urdu)}
            </div>
            <div class="guidance-card-english">
                <span class="guidance-label">English</span>
                ${escapeGuidanceHTML(item.english)}
            </div>
            <div class="guidance-card-reference">
                <strong>📖 Reference:</strong> ${escapeGuidanceHTML(item.reference)}
            </div>
            <div class="guidance-card-actions">
                <button class="open-guidance" data-index="${originalIndex}">📖 Read</button>
                <button class="copy-guidance" data-index="${originalIndex}">📋 Copy</button>
                <button class="favorite-guidance" data-index="${originalIndex}">❤️</button>
            </div>
        `;

        guidanceContainer.appendChild(card);
    });

    if (guidanceCount) guidanceCount.textContent = filteredGuidance.length;
    renderGuidancePagination(totalPages);
    attachGuidanceEvents();
}

function formatCategory(category) {
    const names = {
        quran: "Quranic Guidance", salah: "Salah & Worship", family: "Family",
        character: "Good Character", patience: "Patience", halal: "Halal & Haram",
        ramadan: "Ramadan", daily: "Daily Islamic Life"
    };
    return names[category] || "Islamic Guidance";
}

function attachGuidanceEvents() {
    document.querySelectorAll(".open-guidance").forEach(button => {
        button.addEventListener("click", () => openGuidanceReader(Number(button.dataset.index)));
    });
    document.querySelectorAll(".copy-guidance").forEach(button => {
        button.addEventListener("click", () => copyGuidance(Number(button.dataset.index)));
    });
    document.querySelectorAll(".favorite-guidance").forEach(button => {
        button.addEventListener("click", () => toggleGuidanceFavorite(Number(button.dataset.index), button));
    });
}

function filterGuidance() {
    if (!guidanceSearch || !guidanceCategory) return;
    const search = guidanceSearch.value.trim().toLowerCase();
    const category = guidanceCategory.value;

    filteredGuidance = guidanceData.filter(item => {
        const searchableText = `${item.title} ${item.arabic} ${item.urdu} ${item.english} ${item.content} ${item.reference}`.toLowerCase();
        const searchMatch = !search || searchableText.includes(search);
        const categoryMatch = category === "all" || item.category === category;
        return searchMatch && categoryMatch;
    });

    currentGuidancePage = 1;
    renderGuidance();
}

if (guidanceSearch) guidanceSearch.addEventListener("input", filterGuidance);
if (guidanceSearchBtn) guidanceSearchBtn.addEventListener("click", filterGuidance);
if (guidanceCategory) guidanceCategory.addEventListener("change", filterGuidance);

if (guidanceLanguage) {
    guidanceLanguage.addEventListener("change", () => {
        const language = guidanceLanguage.value;
        document.querySelectorAll(".guidance-card-arabic").forEach(el => {
            el.style.display = (language === "urdu" || language === "english") ? "none" : "";
        });
        document.querySelectorAll(".guidance-card-urdu").forEach(el => {
            el.style.display = (language === "arabic" || language === "english") ? "none" : "";
        });
        document.querySelectorAll(".guidance-card-english").forEach(el => {
            el.style.display = (language === "arabic" || language === "urdu") ? "none" : "";
        });
    });
}

function renderGuidancePagination(totalPages) {
    if (!guidancePagination) return;
    guidancePagination.style.display = totalPages > 1 ? "flex" : "none";
    if (guidancePrevious) guidancePrevious.disabled = currentGuidancePage === 1;
    if (guidanceNext) guidanceNext.disabled = currentGuidancePage === totalPages;
    if (guidancePageNumbers) guidancePageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === currentGuidancePage) button.classList.add("active");

        button.addEventListener("click", () => {
            currentGuidancePage = i;
            renderGuidance();
            scrollGuidance();
        });

        if (guidancePageNumbers) guidancePageNumbers.appendChild(button);
    }
}

if (guidancePrevious) {
    guidancePrevious.addEventListener("click", () => {
        if (currentGuidancePage > 1) {
            currentGuidancePage--;
            renderGuidance();
            scrollGuidance();
        }
    });
}

if (guidanceNext) {
    guidanceNext.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredGuidance.length / guidancePerPage);
        if (currentGuidancePage < totalPages) {
            currentGuidancePage++;
            renderGuidance();
            scrollGuidance();
        }
    });
}

if (randomGuidanceBtn) {
    randomGuidanceBtn.addEventListener("click", () => {
        if (!guidanceData.length) return;
        const randomIndex = Math.floor(Math.random() * guidanceData.length);
        openGuidanceReader(randomIndex);
    });
}

function openGuidanceReader(index) {
    if (!guidanceData[index]) return;

    currentGuidanceIndex = index;
    const item = guidanceData[index];

    if (readerGuidanceNumber) readerGuidanceNumber.textContent = item.id;
    if (readerGuidanceTitle) readerGuidanceTitle.textContent = item.title;
    if (readerGuidanceArabic) readerGuidanceArabic.textContent = item.arabic;
    if (readerGuidanceUrdu) readerGuidanceUrdu.textContent = item.urdu;
    if (readerGuidanceEnglish) readerGuidanceEnglish.textContent = item.english;
    if (readerGuidanceContent) readerGuidanceContent.textContent = item.content;
    if (readerGuidanceReference) readerGuidanceReference.textContent = item.reference;

    if (guidanceContainer) guidanceContainer.style.display = "none";
    if (guidancePagination) guidancePagination.style.display = "none";
    const controls = document.querySelector(".guidance-controls");
    const info = document.querySelector(".guidance-info");
    const hero = document.querySelector(".guidance-hero");
    if (controls) controls.style.display = "none";
    if (info) info.style.display = "none";
    if (hero) hero.style.display = "none";

    if (guidanceReader) guidanceReader.style.display = "block";
    updateGuidanceReaderButtons();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

if (guidanceBackBtn) {
    guidanceBackBtn.addEventListener("click", () => {
        if (guidanceReader) guidanceReader.style.display = "none";
        if (guidanceContainer) guidanceContainer.style.display = "grid";
        const controls = document.querySelector(".guidance-controls");
        const info = document.querySelector(".guidance-info");
        const hero = document.querySelector(".guidance-hero");
        if (controls) controls.style.display = "";
        if (info) info.style.display = "";
        if (hero) hero.style.display = "";
        renderGuidance();
        scrollGuidance();
    });
}

if (readerGuidancePrevious) {
    readerGuidancePrevious.addEventListener("click", () => {
        if (currentGuidanceIndex > 0) openGuidanceReader(currentGuidanceIndex - 1);
    });
}

if (readerGuidanceNext) {
    readerGuidanceNext.addEventListener("click", () => {
        if (currentGuidanceIndex < guidanceData.length - 1) openGuidanceReader(currentGuidanceIndex + 1);
    });
}

function updateGuidanceReaderButtons() {
    if (readerGuidancePrevious) readerGuidancePrevious.disabled = currentGuidanceIndex === 0;
    if (readerGuidanceNext) readerGuidanceNext.disabled = currentGuidanceIndex === guidanceData.length - 1;
}

async function copyGuidance(index) {
    const item = guidanceData[index];
    const text = `${item.title}\nArabic: ${item.arabic}\nUrdu: ${item.urdu}\nEnglish: ${item.english}\nGuidance: ${item.content}\nReference: ${item.reference}\nIslamicWay`.trim();

    try {
        await navigator.clipboard.writeText(text);
        showGuidanceToast("✅ Guidance copied!");
    } catch { alert("Copy failed."); }
}

if (copyGuidanceBtn) copyGuidanceBtn.addEventListener("click", () => copyGuidance(currentGuidanceIndex));

if (shareGuidanceBtn) {
    shareGuidanceBtn.addEventListener("click", async () => {
        const item = guidanceData[currentGuidanceIndex];
        const text = `${item.title}\n${item.arabic}\n${item.urdu}\n${item.english}\n${item.reference}`.trim();

        if (navigator.share) {
            try { await navigator.share({ title: item.title, text: text }); }
            catch { console.log("Share cancelled"); }
        } else {
            await navigator.clipboard.writeText(text);
            showGuidanceToast("🔗 Copied for sharing!");
        }
    });
}

function getGuidanceFavorites() {
    try { return JSON.parse(localStorage.getItem("islamicway_guidance_favorites")) || []; }
    catch { return []; }
}

function saveGuidanceFavorites(favorites) {
    localStorage.setItem("islamicway_guidance_favorites", JSON.stringify(favorites));
}

function toggleGuidanceFavorite(index, button) {
    let favorites = getGuidanceFavorites();

    if (favorites.includes(index)) {
        favorites = favorites.filter(item => item !== index);
        button.textContent = "❤️";
        showGuidanceToast("Removed from favorites");
    } else {
        favorites.push(index);
        button.textContent = "💖";
        showGuidanceToast("❤️ Added to favorites");
    }

    saveGuidanceFavorites(favorites);
}

if (favoriteGuidanceBtn) {
    favoriteGuidanceBtn.addEventListener("click", () => {
        let favorites = getGuidanceFavorites();
        const index = currentGuidanceIndex;

        if (favorites.includes(index)) {
            favorites = favorites.filter(item => item !== index);
            favoriteGuidanceBtn.textContent = "❤️ Favorite";
        } else {
            favorites.push(index);
            favoriteGuidanceBtn.textContent = "💖 Favorited";
        }

        saveGuidanceFavorites(favorites);
    });
}

function showGuidanceToast(message) {
    const oldToast = document.querySelector(".guidance-toast");
    if (oldToast) oldToast.remove();

    const toast = document.createElement("div");
    toast.className = "guidance-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

if (retryGuidance) {
    retryGuidance.addEventListener("click", () => {
        if (guidanceError) guidanceError.style.display = "none";
        renderGuidance();
    });
}

function escapeGuidanceHTML(value) {
    if (value === null || value === undefined) return "";
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function scrollGuidance() {
    const page = document.getElementById("page-guidance");
    if (page) page.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (guidanceContainer) renderGuidance();

window.openGuidanceReader = openGuidanceReader;


/* =====================================================
   ABOUT US
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".faq-question").forEach(function (question) {
        question.addEventListener("click", function () {
            const item = question.parentElement;
            document.querySelectorAll(".faq-item").forEach(function (faq) {
                if (faq !== item) faq.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    });

    const contactBtn = document.getElementById("aboutContactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            alert("شکریہ! آپ کی رائے ہمارے لیے اہم ہے۔ ان شاء اللہ جلد رابطہ کریں گے۔");
        });
    }
});


/* =====================================================
   DYNAMIC SEO
===================================================== */

const SEO_DATA = {
    home: { title: "IslamicWay | Quran, Hadith, Duas, Prayer Times & Islamic Knowledge", description: "IslamicWay — Read Quran with Urdu translation, authentic Hadith, daily Duas, Prayer Times and Islamic Guidance." },
    quran: { title: "Read Holy Quran Online | Urdu Translation & Audio | IslamicWay", description: "Read all 114 Surahs of the Holy Quran with Urdu translation and full Surah audio." },
    hadith: { title: "Authentic Hadith Collections | Bukhari, Muslim | IslamicWay", description: "Read authentic Hadith from Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud with Urdu translation." },
    prayer: { title: "Prayer Times & Islamic Hijri Calendar | IslamicWay", description: "Check today's Prayer Times and view the Islamic Hijri Calendar." },
    duas: { title: "Daily Islamic Duas in Arabic, Urdu & English | IslamicWay", description: "Read 100+ daily Duas from Quran and Sunnah with translations." },
    articles: { title: "Islamic Articles & Reminders | IslamicWay", description: "Read Islamic articles on faith, patience, character and daily life." },
    guidance: { title: "Islamic Guidance from Quran & Sunnah | IslamicWay", description: "Explore Islamic guidance on worship, family, character and daily life." },
    about: { title: "About IslamicWay | Islamic Knowledge Platform", description: "Learn about IslamicWay — a modern platform for Islamic knowledge." }
};

function updateSEO(pageName) {
    const data = SEO_DATA[pageName] || SEO_DATA.home;
    document.title = data.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", data.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", data.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", data.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", data.title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", data.description);
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("hashchange", () => {
        const page = window.location.hash.replace("#", "") || "home";
        updateSEO(page);
    });
    const startPage = window.location.hash.replace("#", "") || "home";
    updateSEO(startPage);
});


/* =========================================================
   ADHAN SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const adhanAudio    = document.getElementById("adhanAudio");
    const playAdhanBtn  = document.getElementById("playAdhanBtn");
    const stopAdhanBtn  = document.getElementById("stopAdhanBtn");
    const testAdhanBtn  = document.getElementById("testAdhanBtn");
    const muezzinSelect = document.getElementById("adhanMuezzin");
    const adhanStatus   = document.getElementById("adhanStatus");
    const nextAdhanText = document.getElementById("nextAdhanText");

    if (!adhanAudio) return;

    const ADHAN_CITY    = "Kuala Lumpur";
    const ADHAN_COUNTRY = "Malaysia";
    const ADHAN_METHOD  = 17;

       /* =====================================================
       ADHAN AUDIO SOURCES — LOCAL FILES (FAST & RELIABLE)
       Audio files project ke "audio/" folder mein honi chahiye
    ===================================================== */
    const ADHAN_AUDIO_SOURCES = {
        "ar.alafasy":            "audio/adhan-alafasy.mp3",
        "ar.abdulbasitmurattal": "audio/adhan-basit.mp3",
        "ar.husary":             "audio/adhan-husary.mp3",
        "ar.minshawi":           "audio/adhan-minshawi.mp3"
    };

    let prayerTimesToday = {};
    let nextAdhanTimer   = null;
    function getAdhanURL(muezzin) {
        return ADHAN_AUDIO_SOURCES[muezzin] || ADHAN_AUDIO_SOURCES["ar.alafasy"];
    }

    /* Fallback: Agar local file na mile to online se try karo */
    function getAdhanFallbackURL(muezzin) {
        const fallbacks = {
            "ar.alafasy":            "https://www.islamcan.com/audio/adhan/azan1.mp3",
            "ar.abdulbasitmurattal": "https://www.islamcan.com/audio/adhan/azan3.mp3",
            "ar.husary":             "https://www.islamcan.com/audio/adhan/azan5.mp3",
            "ar.minshawi":           "https://www.islamcan.com/audio/adhan/azan7.mp3"
        };
        return fallbacks[muezzin] || fallbacks["ar.alafasy"];
    }

    async function loadPrayerTimes() {
        const today = new Date();
        const year  = today.getFullYear();
        const month = today.getMonth() + 1;
        const day   = today.getDate();

        const url = `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${encodeURIComponent(ADHAN_CITY)}&country=${encodeURIComponent(ADHAN_COUNTRY)}&method=${ADHAN_METHOD}`;

        try {
            const res  = await fetch(url);
            const data = await res.json();

            if (data && data.code === 200 && data.data && data.data.timings) {
                prayerTimesToday = data.data.timings;
                scheduleNextAdhan();
                console.log("[Adhan] Prayer times loaded");
            }
        } catch (err) {
            console.warn("[Adhan] Failed to load prayer times:", err);
            if (nextAdhanText) nextAdhanText.textContent = "⚠️ Unable to load prayer times";
        }
    }

    function scheduleNextAdhan() {
        if (nextAdhanTimer) clearTimeout(nextAdhanTimer);

        const now = new Date();
        const prayers = [
            { name: "Fajr", time: prayerTimesToday.Fajr },
            { name: "Dhuhr", time: prayerTimesToday.Dhuhr },
            { name: "Asr", time: prayerTimesToday.Asr },
            { name: "Maghrib", time: prayerTimesToday.Maghrib },
            { name: "Isha", time: prayerTimesToday.Isha }
        ];

        let nextPrayer = null;
        let smallestDiff = Infinity;

        prayers.forEach(p => {
            if (!p.time) return;
            const cleanTime = p.time.split(" ")[0];
            const [hh, mm] = cleanTime.split(":").map(Number);
            const prayerDate = new Date();
            prayerDate.setHours(hh, mm, 0, 0);
            const diff = prayerDate - now;
            if (diff > 0 && diff < smallestDiff) {
                smallestDiff = diff;
                nextPrayer = { name: p.name, date: prayerDate };
            }
        });

        if (!nextPrayer && prayerTimesToday.Fajr) {
            const [hh, mm] = prayerTimesToday.Fajr.split(" ")[0].split(":").map(Number);
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(hh, mm, 0, 0);
            nextPrayer = { name: "Fajr", date: tomorrow };
            smallestDiff = tomorrow - now;
        }

        if (nextPrayer) {
            updateNextAdhanText(nextPrayer.name, smallestDiff);
            nextAdhanTimer = setTimeout(() => {
                playAdhan(nextPrayer.name);
                setTimeout(loadPrayerTimes, 5000);
            }, smallestDiff);
        }
    }

    function updateNextAdhanText(prayerName, diffMs) {
        if (!nextAdhanText) return;
        const totalMinutes = Math.floor(diffMs / 60000);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const timeStr = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        nextAdhanText.textContent = `Next Adhan: ${prayerName} in ${timeStr}`;
    }

       function playAdhan(prayerName = "") {
        const muezzin = muezzinSelect ? muezzinSelect.value : "ar.alafasy";
        const url = getAdhanURL(muezzin);

        console.log("[Adhan] Loading audio:", url);

        adhanAudio.src = url;
        adhanAudio.volume = 1.0;

        /* ---------- Error Handler: Fallback to online ---------- */
        adhanAudio.onerror = function () {
            console.warn("[Adhan] Local audio failed, trying online fallback...");
            const fallbackURL = getAdhanFallbackURL(muezzin);
            adhanAudio.src = fallbackURL;

            adhanAudio.play()
                .then(() => {
                    updateAdhanStatus(`🔊 Adhan playing (online fallback)${prayerName ? " — " + prayerName : ""}...`, true);
                })
                .catch(() => {
                    updateAdhanStatus("⚠️ Adhan audio could not be loaded. Please check your connection.", false);
                });
        };

        /* ---------- Play Audio ---------- */
        adhanAudio.play()
            .then(() => {
                updateAdhanStatus(`🔊 Adhan playing${prayerName ? " for " + prayerName : ""}...`, true);
                console.log("[Adhan] ✅ Playing:", muezzin);
            })
            .catch((err) => {
                console.warn("[Adhan] Play failed:", err);
                updateAdhanStatus("⚠️ Tap any button to allow audio", false);
            });
    }

    function stopAdhan() {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
        updateAdhanStatus("Adhan stopped.", false);
    }

    function updateAdhanStatus(text, isPlaying) {
        if (!adhanStatus) return;
        adhanStatus.textContent = text;
        if (isPlaying) adhanStatus.classList.add("playing");
        else adhanStatus.classList.remove("playing");
    }

    if (playAdhanBtn) playAdhanBtn.addEventListener("click", () => playAdhan(""));
    if (stopAdhanBtn) stopAdhanBtn.addEventListener("click", stopAdhan);
    if (testAdhanBtn) testAdhanBtn.addEventListener("click", () => playAdhan("Test"));

    adhanAudio.addEventListener("ended", () => {
        updateAdhanStatus("Adhan finished. 🤲", false);
    });

    loadPrayerTimes();
    setInterval(loadPrayerTimes, 6 * 60 * 60 * 1000);
});


/* =========================================================
   PRAYER TIMES SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const PRAYER_API_BASE = "https://api.aladhan.com/v1";
    const STORAGE_LOCATION = "islamicway_prayer_location";

    const DEFAULT_LOCATION = {
        city: "Kuala Lumpur", country: "Malaysia",
        lat: 3.1390, lng: 101.6869, source: "default"
    };

    let userLocation = null;
    let prayerData   = null;
    let updateTimer  = null;

    const homeLocationName  = document.getElementById("homeLocationName");
    const homePrayerDate    = document.getElementById("homePrayerDate");
    const homePrayerList    = document.getElementById("homePrayerList");
    const prayerLocationText   = document.getElementById("prayerLocationText");
    const prayerDateText       = document.getElementById("prayerDateText");
    const prayerTimesLoading   = document.getElementById("prayerTimesLoading");
    const prayerTimesError     = document.getElementById("prayerTimesError");
    const prayerTimesGrid      = document.getElementById("prayerTimesGrid");
    const prayerMethodText     = document.getElementById("prayerMethodText");
    const retryPrayerLocation  = document.getElementById("retryPrayerLocation");
    const manualPrayerLocation = document.getElementById("manualPrayerLocation");
    const changeLocationBtn    = document.getElementById("changeLocationBtn");
    const manualLocationBox    = document.getElementById("manualLocationBox");
    const manualCityInput      = document.getElementById("manualCityInput");
    const manualCountryInput   = document.getElementById("manualCountryInput");
    const saveManualLocation   = document.getElementById("saveManualLocation");
    const cancelManualLocation = document.getElementById("cancelManualLocation");

    function getSavedLocation() {
        try {
            const saved = localStorage.getItem(STORAGE_LOCATION);
            return saved ? JSON.parse(saved) : null;
        } catch { return null; }
    }

    function saveLocation(loc) {
        try { localStorage.setItem(STORAGE_LOCATION, JSON.stringify(loc)); } catch (e) {}
    }

    async function detectLocation() {
        const saved = getSavedLocation();
        if (saved && saved.city && saved.country) {
            userLocation = saved;
            return userLocation;
        }

        if (navigator.geolocation) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        timeout: 10000, maximumAge: 600000, enableHighAccuracy: false
                    });
                });

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const cityInfo = await reverseGeocode(lat, lng);

                userLocation = {
                    city: cityInfo.city, country: cityInfo.country,
                    lat: lat, lng: lng, source: "gps"
                };

                saveLocation(userLocation);
                return userLocation;
            } catch (err) {
                console.warn("[Prayer] GPS failed:", err.message);
            }
        }

        userLocation = DEFAULT_LOCATION;
        return userLocation;
    }

    async function reverseGeocode(lat, lng) {
        try {
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
            const data = await res.json();
            return {
                city: data.city || data.locality || data.principalSubdivision || "Unknown",
                country: data.countryName || "Unknown"
            };
        } catch {
            return { city: "Unknown", country: "Unknown" };
        }
    }

    async function fetchPrayerTimes() {
        if (!userLocation) await detectLocation();
        showPrayerLoading();

        const today = new Date();
        const day   = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year  = today.getFullYear();
        const method = getMethodForCountry(userLocation.country);

        let url = "";
        if (userLocation.city && userLocation.country && userLocation.city !== "Unknown") {
            url = `${PRAYER_API_BASE}/timingsByCity/${day}-${month}-${year}?city=${encodeURIComponent(userLocation.city)}&country=${encodeURIComponent(userLocation.country)}&method=${method}`;
        } else {
            url = `${PRAYER_API_BASE}/timings/${day}-${month}-${year}?latitude=${userLocation.lat}&longitude=${userLocation.lng}&method=${method}`;
        }

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data && data.code === 200 && data.data) {
                prayerData = data.data;
                renderPrayerTimes();
                hidePrayerLoading();

                try {
                    localStorage.setItem("islamicway_prayer_cache", JSON.stringify({
                        cacheDate: new Date().toDateString(), data: data.data
                    }));
                } catch (e) {}
            } else {
                throw new Error("Invalid API response");
            }
        } catch (err) {
            console.warn("[Prayer] API failed:", err);

            const cached = localStorage.getItem("islamicway_prayer_cache");
            if (cached) {
                try {
                    const parsed = JSON.parse(cached);
                    if (parsed.cacheDate === today.toDateString()) {
                        prayerData = parsed.data;
                        renderPrayerTimes();
                        hidePrayerLoading();
                        return;
                    }
                } catch (e) {}
            }

            if (typeof ISLAMIC_DATABASE !== "undefined") {
                const fallback = ISLAMIC_DATABASE.getFallbackPrayerTimes();
                prayerData = {
                    timings: fallback,
                    date: { readable: today.toDateString(), hijri: { date: "" } }
                };
                renderPrayerTimes();
                hidePrayerLoading();
            } else {
                showPrayerError();
            }
        }
    }

    function getMethodForCountry(country) {
        const c = (country || "").toLowerCase();
        const methods = {
            "pakistan": 1, "india": 1, "bangladesh": 1, "afghanistan": 1,
            "saudi arabia": 4, "uae": 8, "united arab emirates": 8,
            "kuwait": 9, "qatar": 10, "singapore": 11, "france": 12,
            "turkey": 13, "russia": 14, "egypt": 5, "malaysia": 17,
            "indonesia": 20, "jordan": 23, "morocco": 21, "tunisia": 21,
            "algeria": 21, "usa": 2, "united states": 2, "canada": 2,
            "uk": 3, "united kingdom": 3, "germany": 3
        };
        return methods[c] || 2;
    }

    function renderPrayerTimes() {
        if (!prayerData || !prayerData.timings) return;

        const timings = prayerData.timings;
        const dateInfo = prayerData.date;

        if (homeLocationName) homeLocationName.textContent = `${userLocation.city}, ${userLocation.country}`;
        if (homePrayerDate) homePrayerDate.textContent = dateInfo.readable || "Today";

        if (homePrayerList) {
            homePrayerList.innerHTML = `
                <div class="prayer-row"><span>🌅 Fajr</span><strong>${formatTime(timings.Fajr)}</strong></div>
                <div class="prayer-row"><span>☀️ Dhuhr</span><strong>${formatTime(timings.Dhuhr)}</strong></div>
                <div class="prayer-row"><span>🌤️ Asr</span><strong>${formatTime(timings.Asr)}</strong></div>
                <div class="prayer-row"><span>🌇 Maghrib</span><strong>${formatTime(timings.Maghrib)}</strong></div>
                <div class="prayer-row"><span>🌙 Isha</span><strong>${formatTime(timings.Isha)}</strong></div>
            `;
        }

        if (prayerLocationText) prayerLocationText.textContent = `📍 ${userLocation.city}, ${userLocation.country}`;
        if (prayerDateText) prayerDateText.textContent = dateInfo.readable || "Today";

        if (prayerMethodText) {
            const methodName = getMethodName(dateInfo.meta?.method?.id);
            prayerMethodText.textContent = `Method: ${methodName}`;
        }

        if (prayerTimesGrid) {
            const prayers = [
                { name: "Fajr", icon: "🌅", time: timings.Fajr },
                { name: "Sunrise", icon: "🌄", time: timings.Sunrise },
                { name: "Dhuhr", icon: "☀️", time: timings.Dhuhr },
                { name: "Asr", icon: "🌤️", time: timings.Asr },
                { name: "Maghrib", icon: "🌇", time: timings.Maghrib },
                { name: "Isha", icon: "🌙", time: timings.Isha }
            ];

            const nextPrayer = findNextPrayer(prayers);

            prayerTimesGrid.innerHTML = prayers.map(p => `
                <div class="prayer-time-card ${p.name === nextPrayer ? "next-prayer" : ""}">
                    <span class="prayer-time-icon">${p.icon}</span>
                    <span class="prayer-time-name">${p.name}</span>
                    <span class="prayer-time-value">${formatTime(p.time)}</span>
                </div>
            `).join("");
        }
    }

    function findNextPrayer(prayers) {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        for (const p of prayers) {
            if (!p.time) continue;
            const [hh, mm] = p.time.split(":").map(Number);
            const prayerMinutes = hh * 60 + mm;
            if (prayerMinutes > currentMinutes) return p.name;
        }
        return "Fajr";
    }

    function formatTime(time24) {
        if (!time24) return "--:--";
        const [hh, mm] = time24.split(":").map(Number);
        const period = hh >= 12 ? "PM" : "AM";
        const h12 = hh % 12 || 12;
        return `${h12}:${String(mm).padStart(2, "0")} ${period}`;
    }

    function getMethodName(id) {
        const names = {
            1: "University of Islamic Sciences, Karachi", 2: "ISNA (North America)",
            3: "Muslim World League", 4: "Umm Al-Qura, Makkah", 5: "Egyptian General Authority",
            8: "Gulf Region", 9: "Kuwait", 10: "Qatar", 11: "Singapore", 12: "France",
            13: "Turkey", 14: "Russia", 17: "Malaysia (JAKIM)", 20: "KEMENAG Indonesia",
            21: "Morocco", 23: "Jordan"
        };
        return names[id] || "Auto-detected";
    }

    function showPrayerLoading() {
        if (prayerTimesLoading) prayerTimesLoading.style.display = "block";
        if (prayerTimesError) prayerTimesError.style.display = "none";
        if (prayerTimesGrid) prayerTimesGrid.style.display = "none";
    }

    function hidePrayerLoading() {
        if (prayerTimesLoading) prayerTimesLoading.style.display = "none";
        if (prayerTimesError) prayerTimesError.style.display = "none";
        if (prayerTimesGrid) prayerTimesGrid.style.display = "grid";
    }

    function showPrayerError() {
        if (prayerTimesLoading) prayerTimesLoading.style.display = "none";
        if (prayerTimesGrid) prayerTimesGrid.style.display = "none";
        if (prayerTimesError) prayerTimesError.style.display = "block";
    }

    if (retryPrayerLocation) {
        retryPrayerLocation.addEventListener("click", () => {
            localStorage.removeItem(STORAGE_LOCATION);
            userLocation = null;
            fetchPrayerTimes();
        });
    }

    if (manualPrayerLocation) {
        manualPrayerLocation.addEventListener("click", () => {
            if (manualLocationBox) manualLocationBox.style.display = "block";
            if (manualCityInput) manualCityInput.focus();
        });
    }

    if (changeLocationBtn) {
        changeLocationBtn.addEventListener("click", () => {
            if (manualLocationBox) {
                manualLocationBox.style.display = manualLocationBox.style.display === "none" ? "block" : "none";
            }
            if (manualCityInput) manualCityInput.focus();
        });
    }

    if (saveManualLocation) {
        saveManualLocation.addEventListener("click", async () => {
            const city = manualCityInput?.value.trim();
            const country = manualCountryInput?.value.trim();

            if (!city || !country) {
                alert("Please enter both city and country.");
                return;
            }

            userLocation = { city, country, lat: null, lng: null, source: "manual" };
            saveLocation(userLocation);
            if (manualLocationBox) manualLocationBox.style.display = "none";
            await fetchPrayerTimes();
        });
    }

    if (cancelManualLocation) {
        cancelManualLocation.addEventListener("click", () => {
            if (manualLocationBox) manualLocationBox.style.display = "none";
        });
    }

    function startAutoUpdate() {
        if (updateTimer) clearInterval(updateTimer);
        updateTimer = setInterval(() => {
            if (prayerData) renderPrayerTimes();
        }, 5 * 60 * 1000);
    }

    async function initPrayerTimes() {
        await detectLocation();
        await fetchPrayerTimes();
        startAutoUpdate();
    }

    const originalShowPage = window.showPage;
    if (typeof originalShowPage === "function") {
        window.showPage = function (pageName, updateUrl = true) {
            originalShowPage(pageName, updateUrl);
            if (pageName === "prayer" && !prayerData) initPrayerTimes();
        };
    }

    initPrayerTimes();
});/* =========================================================
   TOOLS HUB — CALCULATORS
========================================================= */

/* ============================================
   ZAKAT CALCULATOR
=========================================== */

function calculateZakat() {
    const cash = parseFloat(document.getElementById("zakatCash").value) || 0;
    const gold = parseFloat(document.getElementById("zakatGold").value) || 0;
    const silver = parseFloat(document.getElementById("zakatSilver").value) || 0;
    const investments = parseFloat(document.getElementById("zakatInvestments").value) || 0;
    const business = parseFloat(document.getElementById("zakatBusiness").value) || 0;
    const debts = parseFloat(document.getElementById("zakatDebts").value) || 0;

    const totalAssets = cash + gold + silver + investments + business;
    const netWealth = totalAssets - debts;

    if (netWealth <= 0) {
        alert("⚠️ Please enter some assets to calculate Zakat.");
        return;
    }

    // Nisab threshold (approx. 87.48g gold value). Let's use $5000 as example.
    // You can adjust this value or make it dynamic.
    const NISAB = 5000;

    const zakatAmount = netWealth * 0.025;

    document.getElementById("zakatTotalAssets").textContent = "$" + totalAssets.toFixed(2);
    document.getElementById("zakatNetWealth").textContent = "$" + netWealth.toFixed(2);
    document.getElementById("zakatAmount").textContent = "$" + zakatAmount.toFixed(2);

    const noteEl = document.getElementById("zakatNote");
    if (netWealth < NISAB) {
        noteEl.innerHTML = "📌 Your net wealth is below the Nisab threshold ($" + NISAB + "). Zakat is not obligatory, but you may still give charity (Sadaqah).";
    } else {
        noteEl.innerHTML = "✅ Your net wealth exceeds the Nisab threshold. Zakat is obligatory at 2.5%.";
    }

    document.getElementById("zakatResult").style.display = "block";
    document.getElementById("zakatResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetZakat() {
    ["zakatCash", "zakatGold", "zakatSilver", "zakatInvestments", "zakatBusiness", "zakatDebts"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    document.getElementById("zakatResult").style.display = "none";
}

/* ============================================
   INHERITANCE CALCULATOR (Simplified Faraid)
=========================================== */

function calculateInheritance() {
    const total = parseFloat(document.getElementById("inheritTotal").value) || 0;
    const wives = parseInt(document.getElementById("inheritWife").value) || 0;
    const sons = parseInt(document.getElementById("inheritSons").value) || 0;
    const daughters = parseInt(document.getElementById("inheritDaughters").value) || 0;
    const fatherAlive = document.getElementById("inheritFather").value === "yes";
    const motherAlive = document.getElementById("inheritMother").value === "yes";

    if (total <= 0) {
        alert("⚠️ Please enter the total estate value.");
        return;
    }

    if (wives === 0 && sons === 0 && daughters === 0 && !fatherAlive && !motherAlive) {
        alert("⚠️ Please enter at least one heir.");
        return;
    }

    const shares = [];

    // ---- SPOUSE SHARE ----
    let wifeShare = 0;
    if (wives > 0) {
        // Wife gets 1/8 if children exist, else 1/4
        const hasChildren = sons > 0 || daughters > 0;
        wifeShare = hasChildren ? total / 8 : total / 4;
        shares.push({
            name: `Wives (${wives})`,
            amount: wifeShare,
            detail: hasChildren ? "1/8 (with children)" : "1/4 (no children)"
        });
    }

    // ---- PARENTS SHARE ----
    let fatherShare = 0;
    let motherShare = 0;
    const hasChildren = sons > 0 || daughters > 0;

    if (motherAlive) {
        // Mother gets 1/6 if children exist, else 1/3
        motherShare = hasChildren ? total / 6 : total / 3;
        shares.push({
            name: "Mother",
            amount: motherShare,
            detail: hasChildren ? "1/6 (with children)" : "1/3 (no children)"
        });
    }

    if (fatherAlive) {
        if (sons > 0) {
            // Father gets 1/6 if sons exist
            fatherShare = total / 6;
            shares.push({
                name: "Father",
                amount: fatherShare,
                detail: "1/6 (with sons)"
            });
        } else if (daughters > 0) {
            // Father gets 1/6 + residue
            fatherShare = total / 6;
            shares.push({
                name: "Father",
                amount: fatherShare,
                detail: "1/6 + residue"
            });
        } else {
            // Father is residuary
            fatherShare = total - wifeShare - motherShare;
            shares.push({
                name: "Father",
                amount: fatherShare,
                detail: "Residuary (Asabah)"
            });
        }
    }

    // ---- CHILDREN SHARE (Residue) ----
    let childrenShare = total - wifeShare - motherShare - fatherShare;
    if (childrenShare < 0) childrenShare = 0;

    if (sons > 0 || daughters > 0) {
        // Sons get 2x daughters
        const totalUnits = (sons * 2) + daughters;
        if (totalUnits > 0) {
            const unitValue = childrenShare / totalUnits;

            if (sons > 0) {
                shares.push({
                    name: `Sons (${sons}) each`,
                    amount: unitValue * 2,
                    detail: "2x daughter's share"
                });
            }

            if (daughters > 0) {
                shares.push({
                    name: `Daughters (${daughters}) each`,
                    amount: unitValue,
                    detail: "1x share"
                });
            }
        }
    }

    // ---- Render Shares ----
    const container = document.getElementById("inheritShares");
    container.innerHTML = shares.map(s => `
        <div class="share-row">
            <span>${s.name} <small style="color:#648171; font-weight:500;">(${s.detail})</small></span>
            <span>$${s.amount.toFixed(2)}</span>
        </div>
    `).join("");

    document.getElementById("inheritResult").style.display = "block";
    document.getElementById("inheritResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetInheritance() {
    ["inheritTotal", "inheritWife", "inheritSons", "inheritDaughters"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    document.getElementById("inheritFather").value = "no";
    document.getElementById("inheritMother").value = "no";
    document.getElementById("inheritResult").style.display = "none";
}/* =========================================================
   QIBLA COMPASS SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Kaaba Coordinates (Makkah)
    const KAABA_LAT = 21.4225;
    const KAABA_LNG = 39.8262;

    // Elements
    const compassRing      = document.getElementById("compassRing");
    const kaabaNeedle      = document.getElementById("kaabaNeedle");
    const qiblaDegrees     = document.getElementById("qiblaDegrees");
    const qiblaStatus      = document.getElementById("qiblaStatus");
    const qiblaCity        = document.getElementById("qiblaCity");
    const qiblaDistance    = document.getElementById("qiblaDistance");
    const qiblaError       = document.getElementById("qiblaError");
    const qiblaErrorText   = document.getElementById("qiblaErrorText");
    const qiblaDetectBtn   = document.getElementById("qiblaDetectBtn");
    const qiblaResetBtn    = document.getElementById("qiblaResetBtn");
    const qiblaManualBtn   = document.getElementById("qiblaManualBtn");
    const qiblaManualBox   = document.getElementById("qiblaManualBox");
    const qiblaCityInput   = document.getElementById("qiblaCityInput");
    const qiblaCountryInput= document.getElementById("qiblaCountryInput");
    const qiblaSaveManual  = document.getElementById("qiblaSaveManual");
    const qiblaCancelManual= document.getElementById("qiblaCancelManual");
    const compassTicks     = document.getElementById("compassTicks");

    let qiblaMap = null;
    let mapMarker = null;
    let mapLine = null;
    let currentDeviceHeading = 0;
    let currentQiblaAngle = 0;

    /* =====================================================
       GENERATE COMPASS TICKS
    ===================================================== */
    function generateTicks() {
        if (!compassTicks) return;
        compassTicks.innerHTML = "";
        const isMobile = window.innerWidth <= 600;
        const radius = isMobile ? 130 : 160;

        for (let i = 0; i < 72; i++) {
            const tick = document.createElement("div");
            tick.className = "compass-tick" + (i % 9 === 0 ? " major" : "");
            tick.style.transform = `rotate(${i * 5}deg)`;
            tick.style.transformOrigin = `50% ${radius}px`;
            compassTicks.appendChild(tick);
        }
    }
    generateTicks();
    window.addEventListener("resize", generateTicks);

    /* =====================================================
       CALCULATE QIBLA DIRECTION
    ===================================================== */
    function calculateQibla(lat, lng) {
        const phiK = KAABA_LAT * Math.PI / 180;
        const lambdaK = KAABA_LNG * Math.PI / 180;
        const phi = lat * Math.PI / 180;
        const lambda = lng * Math.PI / 180;

        const deltaLambda = lambdaK - lambda;

        const numerator = Math.sin(deltaLambda);
        const denominator = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(deltaLambda);

        let qibla = Math.atan2(numerator, denominator);
        qibla = qibla * 180 / Math.PI;

        return (qibla + 360) % 360;
    }

    /* =====================================================
       CALCULATE DISTANCE TO KAABA
    ===================================================== */
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c);
    }

    /* =====================================================
       INITIALIZE MAP (Leaflet)
    ===================================================== */
    function initMap(lat, lng, qiblaAngle, distance) {
        const mapContainer = document.getElementById("qiblaMap");
        if (!mapContainer) return;

        // Remove existing map
        if (qiblaMap) {
            qiblaMap.remove();
            qiblaMap = null;
        }

        // Create map
        qiblaMap = L.map("qiblaMap", {
            center: [lat, lng],
            zoom: 5,
            zoomControl: true,
            scrollWheelZoom: true
        });

        // Tile layer (dark theme for dark mode, normal for light)
        const isLight = document.body.classList.contains("light-theme");
        const tileUrl = isLight
            ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

        L.tileLayer(tileUrl, {
            attribution: '&copy; OpenStreetMap &copy; CartoDB',
            maxZoom: 19
        }).addTo(qiblaMap);

        // User marker
        const userIcon = L.divIcon({
            className: "qibla-user-marker",
            html: '<div style="background:#1a8a42;width:20px;height:20px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 15px #1a8a42;"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        L.marker([lat, lng], { icon: userIcon })
            .addTo(qiblaMap)
            .bindPopup("<b>📍 Your Location</b><br>" + (qiblaCity ? qiblaCity.textContent : ""));

        // Kaaba marker
        const kaabaIcon = L.divIcon({
            className: "qibla-kaaba-marker",
            html: '<div style="font-size:28px;filter:drop-shadow(0 0 10px #b42318);">🕋</div>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker([KAABA_LAT, KAABA_LNG], { icon: kaabaIcon })
            .addTo(qiblaMap)
            .bindPopup("<b>🕋 Kaaba</b><br>Makkah, Saudi Arabia");

        // Line from user to Kaaba
        L.polyline([
            [lat, lng],
            [KAABA_LAT, KAABA_LNG]
        ], {
            color: "#b42318",
            weight: 3,
            opacity: 0.7,
            dashArray: "10, 10"
        }).addTo(qiblaMap);

        // Fit bounds
        const bounds = L.latLngBounds([
            [lat, lng],
            [KAABA_LAT, KAABA_LNG]
        ]);
        qiblaMap.fitBounds(bounds, { padding: [50, 50] });
    }

    /* =====================================================
       UPDATE COMPASS UI
    ===================================================== */
    function updateCompass(qiblaAngle, deviceHeading = 0) {
        currentQiblaAngle = qiblaAngle;

        // Rotate compass ring opposite to device heading
        if (compassRing) {
            compassRing.style.transform = `rotate(${-deviceHeading}deg)`;
        }

        // Point needle to Qibla (relative to device heading)
        const needleAngle = qiblaAngle - deviceHeading;
        if (kaabaNeedle) {
            kaabaNeedle.style.transform = `rotate(${needleAngle}deg)`;
        }

        // Update degrees display
        if (qiblaDegrees) {
            qiblaDegrees.textContent = Math.round(qiblaAngle) + "°";
        }
    }

    /* =====================================================
       DEVICE ORIENTATION (Compass Sensor)
    ===================================================== */
    function startDeviceOrientation() {
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientationabsolute", handleOrientation, true);
            window.addEventListener("deviceorientation", handleOrientation, true);
        }
    }

    function handleOrientation(event) {
        let heading = null;

        if (event.webkitCompassHeading !== undefined) {
            // iOS
            heading = event.webkitCompassHeading;
        } else if (event.alpha !== null) {
            // Android
            heading = 360 - event.alpha;
        }

        if (heading !== null) {
            currentDeviceHeading = heading;
            updateCompass(currentQiblaAngle, currentDeviceHeading);
        }
    }

    /* =====================================================
       GET LOCATION & UPDATE ALL
    ===================================================== */
    function updateQiblaForLocation(lat, lng, cityName) {
        const qiblaAngle = calculateQibla(lat, lng);
        const distance = calculateDistance(lat, lng, KAABA_LAT, KAABA_LNG);

        updateCompass(qiblaAngle, currentDeviceHeading);

        if (qiblaCity) qiblaCity.textContent = cityName || `${lat.toFixed(3)}, ${lng.toFixed(3)}`;
        if (qiblaDistance) qiblaDistance.textContent = distance.toLocaleString() + " km";
        if (qiblaStatus) {
            qiblaStatus.innerHTML = `<span>✅</span> Qibla direction found!`;
        }
        if (qiblaError) qiblaError.style.display = "none";

        initMap(lat, lng, qiblaAngle, distance);
    }

    /* =====================================================
       DETECT LOCATION
    ===================================================== */
    async function detectQiblaLocation() {
        if (qiblaStatus) qiblaStatus.innerHTML = `<span>⏳</span> Detecting your location...`;
        if (qiblaError) qiblaError.style.display = "none";

        if (!navigator.geolocation) {
            showQiblaError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                let cityName = "Your Location";
                try {
                    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
                    const data = await res.json();
                    cityName = [data.city, data.countryName].filter(Boolean).join(", ");
                } catch (e) {
                    console.warn("Reverse geocode failed");
                }

                updateQiblaForLocation(lat, lng, cityName);
                startDeviceOrientation();
            },
            function (error) {
                let msg = "Unable to detect location.";
                if (error.code === 1) msg = "Location permission denied. Please allow GPS access.";
                if (error.code === 2) msg = "Location unavailable. Please check your GPS.";
                if (error.code === 3) msg = "Location request timed out. Please try again.";
                showQiblaError(msg);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
    }

    function showQiblaError(msg) {
        if (qiblaStatus) qiblaStatus.innerHTML = `<span>⚠️</span> ${msg}`;
        if (qiblaError) {
            qiblaError.style.display = "block";
            if (qiblaErrorText) qiblaErrorText.textContent = msg;
        }
    }

    /* =====================================================
       MANUAL LOCATION
    ===================================================== */
    async function saveManualQiblaLocation() {
        const city = qiblaCityInput?.value.trim();
        const country = qiblaCountryInput?.value.trim();

        if (!city || !country) {
            alert("Please enter both city and country.");
            return;
        }

        if (qiblaStatus) qiblaStatus.innerHTML = `<span>⏳</span> Loading location...`;

        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ", " + country)}&limit=1`);
            const data = await res.json();

            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lng = parseFloat(data[0].lon);
                updateQiblaForLocation(lat, lng, `${city}, ${country}`);
                if (qiblaManualBox) qiblaManualBox.style.display = "none";
                startDeviceOrientation();
            } else {
                alert("Location not found. Please check the spelling.");
                if (qiblaStatus) qiblaStatus.innerHTML = `<span>⚠️</span> Location not found.`;
            }
        } catch (e) {
            alert("Error fetching location. Please try again.");
        }
    }

    /* =====================================================
       EVENT LISTENERS
    ===================================================== */

    // Detect button
    if (qiblaDetectBtn) {
        qiblaDetectBtn.addEventListener("click", detectQiblaLocation);
    }

    // Reset button
    if (qiblaResetBtn) {
        qiblaResetBtn.addEventListener("click", () => {
            if (qiblaManualBox) qiblaManualBox.style.display = "none";
            if (qiblaError) qiblaError.style.display = "none";
            if (qiblaStatus) qiblaStatus.innerHTML = `<span>📍</span> Detecting your location...`;
            if (qiblaDegrees) qiblaDegrees.textContent = "--°";
            if (qiblaCity) qiblaCity.textContent = "Detecting...";
            if (qiblaDistance) qiblaDistance.textContent = "-- km";
            detectQiblaLocation();
        });
    }

    // Manual button (from error)
    if (qiblaManualBtn) {
        qiblaManualBtn.addEventListener("click", () => {
            if (qiblaManualBox) {
                qiblaManualBox.style.display = "block";
                if (qiblaCityInput) qiblaCityInput.focus();
            }
            if (qiblaError) qiblaError.style.display = "none";
        });
    }

    // Save manual
    if (qiblaSaveManual) {
        qiblaSaveManual.addEventListener("click", saveManualQiblaLocation);
    }

    // Cancel manual
    if (qiblaCancelManual) {
        qiblaCancelManual.addEventListener("click", () => {
            if (qiblaManualBox) qiblaManualBox.style.display = "none";
        });
    }

    // Enter key in manual inputs
    [qiblaCityInput, qiblaCountryInput].forEach(input => {
        if (input) {
            input.addEventListener("keyup", (e) => {
                if (e.key === "Enter") saveManualQiblaLocation();
            });
        }
    });

    /* =====================================================
       PAGE NAVIGATION HOOK
       (Load map when Qibla page opens)
    ===================================================== */
    const originalShowPageForQibla = window.showPage;
    if (typeof originalShowPageForQibla === "function") {
        window.showPage = function (pageName, updateUrl = true) {
            originalShowPageForQibla(pageName, updateUrl);
            if (pageName === "qibla") {
                // Re-initialize map (in case it was removed)
                setTimeout(() => {
                    if (qiblaMap) {
                        qiblaMap.invalidateSize();
                    }
                }, 300);
            }
        };
    }

    // Initialize if Qibla page is already active
    if (window.location.hash === "#qibla") {
        setTimeout(detectQiblaLocation, 500);
    }
});/* =========================================================
   ISLAMIC AI ASSISTANT
   ⚠️ IMPORTANT: Apni Gemini API key yahan paste karein
========================================================= */

const GEMINI_API_KEY = "AQ.Ab8RN6ILxcm71SOmxjnkKNaMdzeVpE-A5ouUb6v-kw0g3FFi-A";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
const ISLAMIC_SYSTEM_PROMPT = `You are "IslamicWay AI", a helpful and respectful Islamic assistant.

RULES:
1. Answer questions about Islam based on the Quran, authentic Hadith, and mainstream Islamic scholarship.
2. Always be respectful, humble, and kind. Start with "Assalamu Alaikum" only if the user greets you first.
3. When quoting Quran, mention the Surah name and verse number.
4. When quoting Hadith, mention the book (e.g., Sahih Bukhari, Sahih Muslim) and Hadith number if possible.
5. If a question is outside Islamic knowledge, politely redirect to Islamic topics.
6. For fiqh matters with differences of opinion, mention that scholars differ and advise consulting a local scholar.
7. Keep answers clear, well-structured, and easy to read.
8. If the user writes in Urdu, reply in Urdu. If in English, reply in English. If in Arabic, reply in Arabic.
9. Use emojis sparingly (🕌, 🌙, 📖, 🤲) to make the answer warm but respectful.
10. NEVER give fatwas on complex personal matters — always advise consulting a qualified scholar.
11. Avoid political opinions. Stay neutral and focus on Islamic teachings.
12. Keep answers concise — max 3-4 paragraphs unless asked for detail.

You are talking to a Muslim user who wants authentic Islamic guidance.`;

document.addEventListener("DOMContentLoaded", function () {

    const aiInput        = document.getElementById("aiInput");
    const aiSendBtn      = document.getElementById("aiSendBtn");
    const aiMessages     = document.getElementById("aiMessages");
    const aiClearBtn     = document.getElementById("aiClearBtn");
    const aiSuggestions  = document.getElementById("aiSuggestions");

    let conversationHistory = [];
    let isProcessing = false;

    /* =====================================================
       ADD MESSAGE TO CHAT
    ===================================================== */
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `ai-message ai-${sender}`;

        const avatar = sender === "bot" ? "🕌" : "👤";
        const formattedText = formatMessage(text);

        messageDiv.innerHTML = `
            <div class="ai-message-avatar">${avatar}</div>
            <div class="ai-message-content">${formattedText}</div>
        `;

        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    /* =====================================================
       FORMAT MESSAGE (Markdown-like)
    ===================================================== */
    function formatMessage(text) {
        if (!text) return "";

        // Escape HTML
        let safe = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Bold **text**
        safe = safe.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

        // Italic *text*
        safe = safe.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");

        // Headers ## Text
        safe = safe.replace(/^### (.+)$/gm, "<strong>$1</strong>");
        safe = safe.replace(/^## (.+)$/gm, "<strong>$1</strong>");
        safe = safe.replace(/^# (.+)$/gm, "<strong>$1</strong>");

        // Bullet points
        safe = safe.replace(/^[\-\*] (.+)$/gm, "<li>$1</li>");
        if (safe.includes("<li>")) {
            safe = safe.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
        }

        // Numbered lists
        safe = safe.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

        // Line breaks
        safe = safe.replace(/\n\n/g, "</p><p>");
        safe = safe.replace(/\n/g, "<br>");

        return `<p>${safe}</p>`;
    }

    /* =====================================================
       SHOW TYPING INDICATOR
    ===================================================== */
    function showTyping() {
        const typing = document.createElement("div");
        typing.className = "ai-message ai-bot ai-typing";
        typing.id = "aiTypingIndicator";
        typing.innerHTML = `
            <div class="ai-message-avatar">🕌</div>
            <div class="ai-message-content">
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
            </div>
        `;
        aiMessages.appendChild(typing);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function hideTyping() {
        const typing = document.getElementById("aiTypingIndicator");
        if (typing) typing.remove();
    }

    /* =====================================================
       CALL GEMINI AI
    ===================================================== */
    async function askGemini(question) {
        if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
            return "⚠️ **API Key Missing**\n\nPlease add your Gemini API key in `script.js` file.\n\nGet a free key from: https://aistudio.google.com/app/apikey";
        }

        // Add to conversation history
        conversationHistory.push({
            role: "user",
            parts: [{ text: question }]
        });

        // Keep only last 10 messages for context
        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        const payload = {
            system_instruction: {
                parts: [{ text: ISLAMIC_SYSTEM_PROMPT }]
            },
            contents: conversationHistory,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024,
                topP: 0.95,
                topK: 40
            },
            safetySettings: [
                { category: "HARM_CATEGORY_HARASSMENT",        threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_HATE_SPEECH",       threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
            ]
        };

        try {
            const res = await fetch(GEMINI_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                console.error("Gemini API Error:", errData);
                throw new Error(errData.error?.message || "API request failed");
            }

            const data = await res.json();
            const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!answer) {
                throw new Error("No answer received from AI");
            }

            // Add AI response to history
            conversationHistory.push({
                role: "model",
                parts: [{ text: answer }]
            });

            return answer;

        } catch (error) {
            console.error("Gemini Error:", error);

            if (error.message.includes("API key")) {
                return "⚠️ **Invalid API Key**\n\nPlease check your Gemini API key in `script.js`.";
            }
            if (error.message.includes("quota") || error.message.includes("429")) {
                return "⚠️ **Daily limit reached**\n\nPlease try again later or use a new API key.";
            }

            return "❌ **Sorry, kuch masla ho gaya.**\n\nPlease check your internet connection and try again.";
        }
    }

    /* =====================================================
       SEND MESSAGE
    ===================================================== */
    async function sendMessage() {
        const question = aiInput.value.trim();

        if (!question || isProcessing) return;

        isProcessing = true;
        aiSendBtn.disabled = true;

        // Hide suggestions after first message
        if (aiSuggestions && conversationHistory.length === 0) {
            aiSuggestions.style.display = "none";
        }

        // Add user message
        addMessage(question, "user");
        aiInput.value = "";
        aiInput.style.height = "auto";

        // Show typing
        showTyping();

        // Get AI answer
        const answer = await askGemini(question);

        // Remove typing, add answer
        hideTyping();
        addMessage(answer, "bot");

        isProcessing = false;
        aiSendBtn.disabled = false;
        aiInput.focus();
    }

    /* =====================================================
       CLEAR CHAT
    ===================================================== */
    function clearChat() {
        if (!confirm("Are you sure you want to clear the chat?")) return;

        conversationHistory = [];
        aiMessages.innerHTML = `
            <div class="ai-message ai-bot">
                <div class="ai-message-avatar">🕌</div>
                <div class="ai-message-content">
                    <p><strong>Chat cleared! 🌙</strong></p>
                    <p>Ask me anything about Islam.</p>
                </div>
            </div>
        `;
        if (aiSuggestions) aiSuggestions.style.display = "flex";
    }

    /* =====================================================
       EVENT LISTENERS
    ===================================================== */
    if (aiSendBtn) {
        aiSendBtn.addEventListener("click", sendMessage);
    }

    if (aiInput) {
        aiInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        // Auto-resize textarea
        aiInput.addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = Math.min(this.scrollHeight, 120) + "px";
        });
    }

    if (aiClearBtn) {
        aiClearBtn.addEventListener("click", clearChat);
    }

    // Suggestion chips
    document.querySelectorAll(".ai-suggestion-chip").forEach(chip => {
        chip.addEventListener("click", function () {
            const question = this.dataset.question;
            if (question) {
                aiInput.value = question;
                sendMessage();
            }
        });
    });

});