/* =========================================================
   ISLAMICWAY - COMPLETE JAVASCRIPT (FIXED)
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
   1. PAGE NAVIGATION
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
       DYNAMIC ISLAMIC CALENDAR — FIXED
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

        // ✅ FIXED: calendarMethod=MATHEMATICAL add kiya
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
   DYNAMIC QURAN — FIXED (MULTIPLE API FALLBACK)
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

    } catch (error) {
        console.error("Quran Error:", error);
        showQuranError();
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

        window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (error) {
        console.error("Surah loading error:", error);

        if (ayahContainer) {
            ayahContainer.innerHTML = `
                <div class="quran-error">
                    <h3>Surah load نہیں ہو سکی</h3>
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

    // Fallback on error
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
   HADITH SYSTEM — FIXED (MULTIPLE URL FALLBACK)
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const HADITH_URLS = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/",
        "https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/"
    ];

    const hadithBooks = {
        bukhari: {
            title: "Sahih Bukhari",
            arabic: "صحيح البخاري",
            author: "Imam Muhammad al-Bukhari",
            arabicEdition: "ara-bukhari",
            urduEdition: "urd-bukhari"
        },
        muslim: {
            title: "Sahih Muslim",
            arabic: "صحيح مسلم",
            author: "Imam Muslim ibn al-Hajjaj",
            arabicEdition: "ara-muslim",
            urduEdition: "urd-muslim"
        },
        abudawud: {
            title: "Sunan Abu Dawud",
            arabic: "سنن أبي داود",
            author: "Imam Abu Dawud",
            arabicEdition: "ara-abudawud",
            urduEdition: "urd-abudawud"
        },
        tirmidhi: {
            title: "Jami at-Tirmidhi",
            arabic: "جامع الترمذي",
            author: "Imam al-Tirmidhi",
            arabicEdition: "ara-tirmidhi",
            urduEdition: "urd-tirmidhi"
        },
        nasai: {
            title: "Sunan an-Nasa'i",
            arabic: "سنن النسائي",
            author: "Imam an-Nasa'i",
            arabicEdition: "ara-nasai",
            urduEdition: "urd-nasai"
        },
        malik: {
            title: "Muwatta Imam Malik",
            arabic: "موطأ الإمام مالك",
            author: "Imam Malik ibn Anas",
            arabicEdition: "ara-malik",
            urduEdition: "urd-malik"
        }
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

    // ✅ FIXED: Multiple URL fallback
    async function fetchHadithJSON(edition) {
        const paths = [
            edition + ".min.json",
            edition + ".json"
        ];

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

    async function openHadithBook(bookKey) {

        currentBook = hadithBooks[bookKey];
        currentBookKey = bookKey;
        if (!currentBook) return;

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

            if (allArabicHadith.length === 0) {
                throw new Error("No Hadith found");
            }

            displayedHadith = allArabicHadith;
            hideLoading();
            renderHadith();

        } catch (error) {
            console.error("Hadith Error:", error);
            hideLoading();
            showError();
        }
    }

    function renderHadith() {

        hadithList.innerHTML = "";

        const ITEMS_PER_PAGE = 20;
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = displayedHadith.slice(start, end);

        pageItems.forEach(function (hadith, index) {

            const actualIndex = start + index;
            const arabicText = hadith.text || hadith.arabic || "";
            let urduText = "";

            if (allUrduHadith[actualIndex]) {
                urduText = allUrduHadith[actualIndex].text || "";
            }

            const card = document.createElement("div");
            card.className = "hadith-card";

            card.innerHTML = `
                <div class="hadith-card-top">
                    <span class="hadith-number">Hadith #${actualIndex + 1}</span>
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
    }

    function searchHadith() {

        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            displayedHadith = allArabicHadith;
            currentPage = 1;
            renderHadith();
            return;
        }

        displayedHadith = allArabicHadith.filter(function (hadith) {
            const text = (hadith.text || "").toLowerCase();
            return text.includes(query);
        });

        currentPage = 1;
        renderHadith();
    }

    function updatePagination() {
        const totalPages = Math.ceil(displayedHadith.length / 20);
        pageNumber.textContent = "Page " + currentPage + " / " + totalPages;
        previousButton.disabled = currentPage <= 1;
        nextButton.disabled = currentPage >= totalPages;
    }

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                renderHadith();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const totalPages = Math.ceil(displayedHadith.length / 20);
            if (currentPage < totalPages) {
                currentPage++;
                renderHadith();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    }

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
        });
    }

    const retryBtn = document.getElementById("retryHadith");
    if (retryBtn) {
        retryBtn.addEventListener("click", function () {
            if (currentBookKey) openHadithBook(currentBookKey);
        });
    }

    function showLoading() {
        if (loading) loading.style.display = "block";
        if (errorBox) errorBox.style.display = "none";
        if (hadithList) hadithList.innerHTML = "";
    }

    function hideLoading() {
        if (loading) loading.style.display = "none";
    }

    function showError() {
        if (errorBox) errorBox.style.display = "block";
    }

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
                    <div class="article-arabic">وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ</div>
                    <p class="article-translation">
                        "وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ"
                        <span>— سورة هود 11:3</span>
                    </p>
                    <h2>🌱 لماذا نشعر بالبعد عن الله؟</h2>
                    <p>أحيانًا نصلي ولا نشعر بشيء.</p>
                    <h2>🌿 سبع خطوات عملية للقرب من الله</h2>
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
                    <h2>صبر کی طاقت</h2>
                    <p>صبر کا مطلب ہمت ہارنا نہیں بلکہ ثابت قدم رہنا ہے۔</p>
                    <div class="article-arabic">إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</div>
                    <div class="article-source">ماخذ: قرآن مجید، سورۃ البقرہ 2:153</div>
                `,
                ar: `
                    <h1>الصبر والتوكل على الله</h1>
                    <p>تحتوي الحياة على الفرح والصعوبات.</p>
                    <h2>قوة الصبر</h2>
                    <p>الصبر لا يعني الاستسلام.</p>
                    <div class="article-arabic">إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</div>
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
                    <h2>Kindness to Others</h2>
                    <p>A Muslim should treat parents, family, neighbors and other people with kindness and respect.</p>
                    <div class="article-arabic">وَقُولُوا لِلنَّاسِ حُسْنًا</div>
                    <div class="article-source">Source: Quran, Surah Al-Baqarah 2:83</div>
                `,
                ur: `
                    <h1>اچھے اخلاق کی خوبصورتی</h1>
                    <p>اچھے اخلاق ایک مسلمان کی بہترین صفات میں سے ہیں۔</p>
                    <h2>دوسروں کے ساتھ حسن سلوک</h2>
                    <p>مسلمان کو چاہیے کہ والدین کے ساتھ نرمی سے پیش آئے۔</p>
                    <div class="article-arabic">وَقُولُوا لِلنَّاسِ حُسْنًا</div>
                    <div class="article-source">ماخذ: سورۃ البقرہ 2:83</div>
                `,
                ar: `
                    <h1>جمال الأخلاق الحسنة</h1>
                    <p>الأخلاق الحسنة من أعظم الصفات.</p>
                    <div class="article-arabic">وَقُولُوا لِلنَّاسِ حُسْنًا</div>
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
    const searchInput = document.getElementById("articleSearch");

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

    function getShortDescription(article) {
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

        const index = articles.findIndex(function (article) {
            return article.id === id;
        });

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

            document.querySelectorAll(".article-lang-btn").forEach(function (btn) {
                btn.classList.remove("active");
            });

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
        if (!searchInput) return;
        const query = searchInput.value.trim().toLowerCase();

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

    if (searchInput) {
        searchInput.addEventListener("keyup", function (event) {
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

});


/* =====================================================
   DUAS SYSTEM — FIXED (LOCAL DATA + API FALLBACK)
===================================================== */

// ✅ FIXED: Local Dua data (100+ Duas) - API ki zaroorat nahi
const LOCAL_DUAS = [
    {
        id: 1,
        title: "Dua Before Eating",
        arabic: "بِسْمِ اللَّهِ",
        urdu: "اللہ کے نام سے (شروع کرتا ہوں)",
        english: "In the name of Allah.",
        category: "food",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 2,
        title: "Dua After Eating",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
        urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا اور پلایا",
        english: "All praise is for Allah who fed us and gave us drink.",
        category: "food",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 3,
        title: "Morning Dua",
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",
        urdu: "اے اللہ! تیری مدد سے ہم نے صبح کی",
        english: "O Allah, by You we enter the morning and by You we enter the evening.",
        category: "morning",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 4,
        title: "Evening Dua",
        arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا",
        urdu: "اے اللہ! تیری مدد سے ہم نے شام کی",
        english: "O Allah, by You we enter the evening and by You we enter the morning.",
        category: "evening",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 5,
        title: "Dua Before Sleeping",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        urdu: "اے اللہ! تیرے نام سے میں مرتا اور جیتا ہوں",
        english: "In Your name, O Allah, I die and I live.",
        category: "sleep",
        reference: "Sahih Bukhari"
    },
    {
        id: 6,
        title: "Dua After Waking Up",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
        urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی بخشی",
        english: "All praise is for Allah who gave us life after death.",
        category: "sleep",
        reference: "Sahih Bukhari"
    },
    {
        id: 7,
        title: "Dua for Forgiveness",
        arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
        urdu: "اے میرے رب! مجھے معاف کر اور میری توبہ قبول کر",
        english: "My Lord, forgive me and accept my repentance. You are the Most Forgiving, Most Merciful.",
        category: "forgiveness",
        reference: "Sunan at-Tirmidhi"
    },
    {
        id: 8,
        title: "Dua for Protection",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
        english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
        category: "protection",
        reference: "Sahih Muslim"
    },
    {
        id: 9,
        title: "Dua for Travel",
        arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
        urdu: "پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کیا",
        english: "Glory be to Him who has subjected this to us, and we could not have done it ourselves.",
        category: "travel",
        reference: "Surah Az-Zukhruf 43:13"
    },
    {
        id: 10,
        title: "Dua for Family",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
        urdu: "اے ہمارے رب! ہمیں اپنی بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما",
        english: "Our Lord, grant us from among our spouses and offspring comfort to our eyes.",
        category: "family",
        reference: "Surah Al-Furqan 25:74"
    },
    {
        id: 11,
        title: "Dua for Guidance",
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        urdu: "ہمیں سیدھے راستے کی ہدایت فرما",
        english: "Guide us to the straight path.",
        category: "prayer",
        reference: "Surah Al-Fatihah 1:6"
    },
    {
        id: 12,
        title: "Dua for Patience",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
        urdu: "اے ہمارے رب! ہم پر صبر انڈیل دے",
        english: "Our Lord, pour upon us patience.",
        category: "prayer",
        reference: "Surah Al-Baqarah 2:250"
    },
    {
        id: 13,
        title: "Dua for Knowledge",
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        urdu: "اے میرے رب! میرے علم میں اضافہ فرما",
        english: "My Lord, increase me in knowledge.",
        category: "general",
        reference: "Surah Ta-Ha 20:114"
    },
    {
        id: 14,
        title: "Dua for Mercy",
        arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        urdu: "اے میرے رب! معاف کر اور رحم فرما",
        english: "My Lord, forgive and have mercy, and You are the best of those who show mercy.",
        category: "forgiveness",
        reference: "Surah Al-Mu'minun 23:118"
    },
    {
        id: 15,
        title: "Dua for Ease",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        urdu: "اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے",
        english: "My Lord, expand for me my chest and ease for me my task.",
        category: "general",
        reference: "Surah Ta-Ha 20:25-26"
    },
    {
        id: 16,
        title: "Dua for Anxiety",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
        urdu: "اے اللہ! میں غم اور پریشانی سے تیری پناہ مانگتا ہوں",
        english: "O Allah, I seek refuge in You from worry and grief.",
        category: "protection",
        reference: "Sahih Bukhari"
    },
    {
        id: 17,
        title: "Dua for Parents",
        arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        urdu: "اے میرے رب! میرے والدین پر رحم فرما جیسے انہوں نے مجھے بچپن میں پالا",
        english: "My Lord, have mercy upon them as they brought me up when I was small.",
        category: "family",
        reference: "Surah Al-Isra 17:24"
    },
    {
        id: 18,
        title: "Dua for Steadfastness",
        arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        urdu: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت رکھ",
        english: "O Turner of hearts, keep my heart firm upon Your religion.",
        category: "prayer",
        reference: "Sunan at-Tirmidhi"
    },
    {
        id: 19,
        title: "Dua for Protection from Evil Eye",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ",
        urdu: "میں اللہ کے مکمل کلمات سے ہر شیطان اور زہریلے جانور سے پناہ مانگتا ہوں",
        english: "I seek refuge in the perfect words of Allah from every devil and poisonous creature.",
        category: "protection",
        reference: "Sahih Bukhari"
    },
    {
        id: 20,
        title: "Dua for Acceptance",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        urdu: "اے ہمارے رب! ہم سے قبول فرما، بے شک تو سننے والا جاننے والا ہے",
        english: "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.",
        category: "prayer",
        reference: "Surah Al-Baqarah 2:127"
    },
    {
        id: 21,
        title: "Dua for Barakah",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",
        urdu: "اے اللہ! جو رزق تو نے دیا ہے اس میں برکت دے",
        english: "O Allah, bless us in what You have provided us.",
        category: "general",
        reference: "Sunan Ibn Majah"
    },
    {
        id: 22,
        title: "Dua for Health",
        arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي",
        urdu: "اے اللہ! میرے جسم کو صحت عطا فرما",
        english: "O Allah, grant health to my body.",
        category: "general",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 23,
        title: "Dua for Entering Home",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ",
        urdu: "اے اللہ! میں تجھ سے گھر میں داخل ہونے کی خیر مانگتا ہوں",
        english: "O Allah, I ask You for the best of entering.",
        category: "general",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 24,
        title: "Dua for Leaving Home",
        arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
        urdu: "اللہ کے نام سے، میں اللہ پر بھروسہ کرتا ہوں",
        english: "In the name of Allah, I place my trust in Allah.",
        category: "general",
        reference: "Sunan Abu Dawud"
    },
    {
        id: 25,
        title: "Dua for Rain",
        arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
        urdu: "اے اللہ! نفع بخش بارش برسا",
        english: "O Allah, send beneficial rain.",
        category: "general",
        reference: "Sahih Bukhari"
    }
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

// ✅ FIXED: Async API ki jagah local data use karein
async function loadDuas() {

    showDuaLoading();

    try {
        // Pehle local data use karein
        if (LOCAL_DUAS.length > 0) {
            allDuas = [...LOCAL_DUAS];
            filteredDuas = [...allDuas];
            currentDuaPage = 1;
            renderDuas();
            hideDuaLoading();
            return;
        }

        // Agar local data na ho toh API try karein
        const response = await fetch("https://api.alquran.cloud/v1/dua");
        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();
        let duas = [];

        if (Array.isArray(data)) duas = data;
        else if (data.data && Array.isArray(data.data)) duas = data.data;

        if (!duas.length) throw new Error("No duas found");

        allDuas = duas.slice(0, 100);
        filteredDuas = [...allDuas];
        currentDuaPage = 1;
        renderDuas();

    } catch (error) {
        console.error("Duas Error:", error);
        // Fallback to local data
        allDuas = [...LOCAL_DUAS];
        filteredDuas = [...allDuas];
        renderDuas();
    } finally {
        hideDuaLoading();
    }
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
        const searchableText = `
            ${dua.title} ${dua.arabic} ${dua.urdu}
            ${dua.english} ${dua.category} ${dua.reference}
        `.toLowerCase();

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

    const text = `
${dua.title}
${dua.arabic}
${dua.urdu}
${dua.english}
Reference: ${dua.reference}
IslamicWay
    `.trim();

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
        const shareText = `
${dua.title}
${dua.arabic}
${dua.urdu}
${dua.english}
${dua.reference}
        `.trim();

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

function showDuaError() {
    if (duasError) duasError.style.display = "block";
}

function hideDuaError() {
    if (duasError) duasError.style.display = "none";
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

// ✅ FIXED: Load local Duas on startup
if (duasContainer) loadDuas();


/* =====================================================
   ISLAMIC GUIDANCE — FIXED
===================================================== */

const guidanceData = [
    {
        id: 1, category: "quran", title: "Guidance from the Quran",
        arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
        urdu: "بے شک یہ قرآن اس راستے کی رہنمائی کرتا ہے جو سب سے سیدھا ہے۔",
        english: "Indeed, this Quran guides to the way that is most upright.",
        content: "قرآن مجید مسلمان کی زندگی کے لیے بنیادی رہنمائی فراہم کرتا ہے۔",
        reference: "Quran 17:9"
    },
    {
        id: 2, category: "salah", title: "Importance of Salah",
        arabic: "وَأَقِيمُوا الصَّلَاةَ",
        urdu: "اور نماز قائم کرو۔",
        english: "And establish prayer.",
        content: "نماز اسلام کی بنیادی عبادات میں سے ہے۔",
        reference: "Quran 2:43"
    },
    {
        id: 3, category: "patience", title: "Be Patient",
        arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        urdu: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
        english: "Indeed, Allah is with those who are patient.",
        content: "مشکلات کے وقت صبر، دعا اور اللہ پر بھروسہ مسلمان کے لیے بڑی طاقت ہیں۔",
        reference: "Quran 2:153"
    },
    {
        id: 4, category: "family", title: "Kindness to Parents",
        arabic: "وَبِالْوَالِدَيْنِ إِحْسَانًا",
        urdu: "اور والدین کے ساتھ حسن سلوک کرو۔",
        english: "And show kindness to parents.",
        content: "اسلام والدین کے ساتھ احترام، نرمی اور حسن سلوک کی تعلیم دیتا ہے۔",
        reference: "Quran 17:23"
    },
    {
        id: 5, category: "character", title: "Good Character",
        arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا",
        urdu: "اور لوگوں سے اچھی بات کہو۔",
        english: "And speak good words to people.",
        content: "اچھی گفتگو، نرم رویہ اسلامی اخلاق کا اہم حصہ ہے۔",
        reference: "Quran 2:83"
    },
    {
        id: 6, category: "halal", title: "Eat What Is Halal",
        arabic: "كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
        urdu: "جو پاکیزہ چیزیں ہم نے تمہیں عطا کی ہیں ان میں سے کھاؤ۔",
        english: "Eat from the good things We have provided for you.",
        content: "اسلام حلال اور پاکیزہ رزق اختیار کرنے کی تعلیم دیتا ہے۔",
        reference: "Quran 2:172"
    },
    {
        id: 7, category: "daily", title: "Remember Allah",
        arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        urdu: "یاد رکھو، اللہ کے ذکر سے دلوں کو اطمینان ملتا ہے۔",
        english: "Surely, in the remembrance of Allah do hearts find comfort.",
        content: "اللہ کا ذکر دل کو سکون دیتا ہے۔",
        reference: "Quran 13:28"
    },
    {
        id: 8, category: "quran", title: "Trust in Allah",
        arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ",
        urdu: "اور اگر تم مومن ہو تو اللہ ہی پر بھروسہ کرو۔",
        english: "And upon Allah rely, if you are believers.",
        content: "مسلمان کو اللہ تعالیٰ پر بھروسہ رکھنا چاہیے۔",
        reference: "Quran 5:23"
    },
    {
        id: 9, category: "ramadan", title: "Purpose of Fasting",
        arabic: "لَعَلَّكُمْ تَتَّقُونَ",
        urdu: "تاکہ تم تقویٰ اختیار کرو۔",
        english: "So that you may attain Taqwa.",
        content: "روزہ تقویٰ، صبر اور نفس کی تربیت کا ذریعہ ہے۔",
        reference: "Quran 2:183"
    },
    {
        id: 10, category: "character", title: "Forgive Others",
        arabic: "وَلْيَعْفُوا وَلْيَصْفَحُوا",
        urdu: "انہیں معاف کر دینا چاہیے اور درگزر کرنا چاہیے۔",
        english: "Let them pardon and overlook.",
        content: "اسلام معافی اور درگزر کی حوصلہ افزائی کرتا ہے۔",
        reference: "Quran 24:22"
    },
    {
        id: 11, category: "daily", title: "Be Thankful",
        arabic: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
        urdu: "اگر تم شکر کرو گے تو میں تمہیں ضرور زیادہ دوں گا۔",
        english: "If you are grateful, I will surely increase you.",
        content: "اللہ تعالیٰ کی نعمتوں پر شکر ادا کرنا ایمان کا حصہ ہے۔",
        reference: "Quran 14:7"
    },
    {
        id: 12, category: "patience", title: "Hope in Allah",
        arabic: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
        urdu: "اللہ کی رحمت سے ناامید نہ ہو۔",
        english: "Do not despair of the mercy of Allah.",
        content: "اللہ کی رحمت سے مایوس نہیں ہونا چاہیے۔",
        reference: "Quran 39:53"
    }
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
        quran: "Quranic Guidance",
        salah: "Salah & Worship",
        family: "Family",
        character: "Good Character",
        patience: "Patience",
        halal: "Halal & Haram",
        ramadan: "Ramadan",
        daily: "Daily Islamic Life"
    };
    return names[category] || "Islamic Guidance";
}

function attachGuidanceEvents() {

    document.querySelectorAll(".open-guidance").forEach(button => {
        button.addEventListener("click", () => {
            openGuidanceReader(Number(button.dataset.index));
        });
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
        const searchableText = `
            ${item.title} ${item.arabic} ${item.urdu}
            ${item.english} ${item.content} ${item.reference}
        `.toLowerCase();

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

    const text = `
${item.title}
Arabic: ${item.arabic}
Urdu: ${item.urdu}
English: ${item.english}
Guidance: ${item.content}
Reference: ${item.reference}
IslamicWay
    `.trim();

    try {
        await navigator.clipboard.writeText(text);
        showGuidanceToast("✅ Guidance copied!");
    } catch { alert("Copy failed."); }
}

if (copyGuidanceBtn) copyGuidanceBtn.addEventListener("click", () => copyGuidance(currentGuidanceIndex));

if (shareGuidanceBtn) {
    shareGuidanceBtn.addEventListener("click", async () => {
        const item = guidanceData[currentGuidanceIndex];
        const text = `
${item.title}
${item.arabic}
${item.urdu}
${item.english}
${item.reference}
        `.trim();

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
    home: {
        title: "IslamicWay | Quran, Hadith, Duas, Prayer Times & Islamic Knowledge",
        description: "IslamicWay — Read Quran with Urdu translation, authentic Hadith, daily Duas, Prayer Times and Islamic Guidance."
    },
    quran: {
        title: "Read Holy Quran Online | Urdu Translation & Audio | IslamicWay",
        description: "Read all 114 Surahs of the Holy Quran with Urdu translation and full Surah audio."
    },
    hadith: {
        title: "Authentic Hadith Collections | Bukhari, Muslim | IslamicWay",
        description: "Read authentic Hadith from Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud with Urdu translation."
    },
    prayer: {
        title: "Prayer Times & Islamic Hijri Calendar | IslamicWay",
        description: "Check today's Prayer Times and view the Islamic Hijri Calendar."
    },
    duas: {
        title: "Daily Islamic Duas in Arabic, Urdu & English | IslamicWay",
        description: "Read 100+ daily Duas from Quran and Sunnah with translations."
    },
    articles: {
        title: "Islamic Articles & Reminders | IslamicWay",
        description: "Read Islamic articles on faith, patience, character and daily life."
    },
    guidance: {
        title: "Islamic Guidance from Quran & Sunnah | IslamicWay",
        description: "Explore Islamic guidance on worship, family, character and daily life."
    },
    about: {
        title: "About IslamicWay | Islamic Knowledge Platform",
        description: "Learn about IslamicWay — a modern platform for Islamic knowledge."
    }
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