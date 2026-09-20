/* =========================================================
   ISLAMICWAY AGE CALCULATOR — MAIN ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       STATE
    ===================================================== */
    const state = {
        mode: "dob",       // dob | age
        birthDate: null,
        calcDate: null,
        firstDate: null,
        secondDate: null,
        currentResult: null,
        history: [],
        countdownTimer: null
    };

    /* =====================================================
       DOM REFS
    ===================================================== */
    const birthDateInput   = document.getElementById("birthDate");
    const calcDateInput    = document.getElementById("calcDate");
    const firstDateInput   = document.getElementById("firstDate");
    const secondDateInput  = document.getElementById("secondDate");
    const calculateBtn     = document.getElementById("calculateBtn");
    const resetBtn         = document.getElementById("resetBtn");
    const todayBtn         = document.getElementById("todayBtn");
    const ageError         = document.getElementById("ageError");
    const ageResultSection = document.getElementById("ageResultSection");
    const themeBtn         = document.getElementById("ageThemeBtn");

    // Result elements
    const mainAgeText       = document.getElementById("mainAgeText");
    const mainAgeSubText    = document.getElementById("mainAgeSubText");
    const ageYears          = document.getElementById("ageYears");
    const ageMonths         = document.getElementById("ageMonths");
    const ageDays           = document.getElementById("ageDays");
    const ageHours          = document.getElementById("ageHours");
    const ageMinutes        = document.getElementById("ageMinutes");
    const ageSeconds        = document.getElementById("ageSeconds");
    const totalMonths       = document.getElementById("totalMonths");
    const totalWeeks        = document.getElementById("totalWeeks");
    const totalDays         = document.getElementById("totalDays");
    const totalHours        = document.getElementById("totalHours");
    const totalMinutes      = document.getElementById("totalMinutes");
    const totalSeconds      = document.getElementById("totalSeconds");
    const hijriAgeText      = document.getElementById("hijriAgeText");
    const hijriNote         = document.getElementById("hijriNote");
    const zodiacIcon        = document.getElementById("zodiacIcon");
    const zodiacName        = document.getElementById("zodiacName");
    const zodiacNote        = document.getElementById("zodiacNote");
    const birthWeekday      = document.getElementById("birthWeekday");
    const birthdayNote      = document.getElementById("birthdayNote");

    // Countdown elements
    const bdayDays    = document.getElementById("bdayDays");
    const bdayHours   = document.getElementById("bdayHours");
    const bdayMinutes = document.getElementById("bdayMinutes");
    const bdaySeconds = document.getElementById("bdaySeconds");

    // Actions
    const copyResultBtn  = document.getElementById("copyResultBtn");
    const shareResultBtn = document.getElementById("shareResultBtn");
    const saveResultBtn  = document.getElementById("saveResultBtn");

    // History
    const ageHistoryList   = document.getElementById("ageHistoryList");
    const clearAgeHistory  = document.getElementById("clearAgeHistory");

    /* =====================================================
       ZODIAC DATA
    ===================================================== */
    const ZODIAC_SIGNS = [
        { name: "Capricorn",  icon: "♑", note: "The Goat • Earth Sign",       start: [12, 22], end: [1, 19] },
        { name: "Aquarius",   icon: "♒", note: "The Water Bearer • Air Sign", start: [1, 20],  end: [2, 18] },
        { name: "Pisces",     icon: "♓", note: "The Fish • Water Sign",       start: [2, 19],  end: [3, 20] },
        { name: "Aries",      icon: "♈", note: "The Ram • Fire Sign",         start: [3, 21],  end: [4, 19] },
        { name: "Taurus",     icon: "♉", note: "The Bull • Earth Sign",       start: [4, 20],  end: [5, 20] },
        { name: "Gemini",     icon: "♊", note: "The Twins • Air Sign",        start: [5, 21],  end: [6, 20] },
        { name: "Cancer",     icon: "♋", note: "The Crab • Water Sign",       start: [6, 21],  end: [7, 22] },
        { name: "Leo",        icon: "♌", note: "The Lion • Fire Sign",        start: [7, 23],  end: [8, 22] },
        { name: "Virgo",      icon: "♍", note: "The Maiden • Earth Sign",     start: [8, 23],  end: [9, 22] },
        { name: "Libra",      icon: "♎", note: "The Scales • Air Sign",       start: [9, 23],  end: [10, 22] },
        { name: "Scorpio",    icon: "♏", note: "The Scorpion • Water Sign",   start: [10, 23], end: [11, 21] },
        { name: "Sagittarius",icon: "♐", note: "The Archer • Fire Sign",      start: [11, 22], end: [12, 21] }
    ];

    const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const MONTH_NAMES = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    /* =====================================================
       INIT
    ===================================================== */
    function init() {
        setupDateLimits();
        loadHistory();
        attachEvents();
        setupTheme();
    }

    function setupDateLimits() {
        const today = new Date().toISOString().split("T")[0];
        if (birthDateInput) birthDateInput.max = today;
        if (calcDateInput) calcDateInput.max = today;
        if (firstDateInput) firstDateInput.max = today;
        if (secondDateInput) secondDateInput.max = today;

        if (calcDateInput) calcDateInput.value = today;
    }

    function attachEvents() {
        // Tab switching
        document.querySelectorAll(".age-tab-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const tab = this.dataset.tab;
                state.mode = tab;

                document.querySelectorAll(".age-tab-btn").forEach(b => b.classList.remove("active"));
                this.classList.add("active");

                const dobTab = document.getElementById("dobTab");
                const ageTab = document.getElementById("ageTab");

                if (tab === "dob") {
                    dobTab.style.display = "block";
                    ageTab.style.display = "none";
                } else {
                    dobTab.style.display = "none";
                    ageTab.style.display = "block";
                }

                hideError();
                ageResultSection.style.display = "none";
            });
        });

        // Calculate
        if (calculateBtn) calculateBtn.addEventListener("click", calculate);

        // Reset
        if (resetBtn) resetBtn.addEventListener("click", resetAll);

        // Today button
        if (todayBtn) {
            todayBtn.addEventListener("click", function (e) {
                e.preventDefault();
                calcDateInput.value = new Date().toISOString().split("T")[0];
            });
        }

        // Enter key on inputs
        [birthDateInput, calcDateInput, firstDateInput, secondDateInput].forEach(input => {
            if (input) {
                input.addEventListener("keydown", e => {
                    if (e.key === "Enter") calculate();
                });
                input.addEventListener("change", hideError);
            }
        });

        // Result actions
        if (copyResultBtn) copyResultBtn.addEventListener("click", copyResult);
        if (shareResultBtn) shareResultBtn.addEventListener("click", shareResult);
        if (saveResultBtn) saveResultBtn.addEventListener("click", saveResultToHistory);

        // History clear
        if (clearAgeHistory) clearAgeHistory.addEventListener("click", clearHistory);
    }

    /* =====================================================
       CALCULATE
    ===================================================== */
    function calculate() {
        hideError();

        if (state.mode === "dob") {
            calculateFromDOB();
        } else {
            calculateDateDiff();
        }
    }

    function calculateFromDOB() {
        const birthVal = birthDateInput.value;
        const calcVal = calcDateInput.value;

        if (!birthVal) {
            return showError("Please enter your Date of Birth.");
        }

        const birthDate = new Date(birthVal);
        const calcDate = calcVal ? new Date(calcVal) : new Date();

        if (isNaN(birthDate.getTime())) {
            return showError("Invalid Date of Birth.");
        }

        if (birthDate > calcDate) {
            return showError("Date of Birth cannot be in the future.");
        }

        // Age calculation
        const result = computeAge(birthDate, calcDate);

        if (!result) {
            return showError("Unable to calculate age. Please check dates.");
        }

        state.currentResult = {
            type: "dob",
            birthDate: birthDate,
            calcDate: calcDate,
            result: result,
            timestamp: Date.now()
        };

        renderResult(result, birthDate, calcDate);
        ageResultSection.style.display = "block";
        ageResultSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function calculateDateDiff() {
        const firstVal = firstDateInput.value;
        const secondVal = secondDateInput.value;

        if (!firstVal || !secondVal) {
            return showError("Please enter both dates.");
        }

        let firstDate = new Date(firstVal);
        let secondDate = new Date(secondVal);

        if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
            return showError("Invalid dates.");
        }

        // Ensure first < second
        if (firstDate > secondDate) {
            [firstDate, secondDate] = [secondDate, firstDate];
        }

        const result = computeAge(firstDate, secondDate);

        if (!result) {
            return showError("Unable to calculate. Please check dates.");
        }

        state.currentResult = {
            type: "diff",
            birthDate: firstDate,
            calcDate: secondDate,
            result: result,
            timestamp: Date.now()
        };

        renderResult(result, firstDate, secondDate, true);
        ageResultSection.style.display = "block";
        ageResultSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    /* =====================================================
       AGE COMPUTATION ENGINE
    ===================================================== */
    function computeAge(fromDate, toDate) {
        try {
            let years = toDate.getFullYear() - fromDate.getFullYear();
            let months = toDate.getMonth() - fromDate.getMonth();
            let days = toDate.getDate() - fromDate.getDate();

            // Time components
            let hours = toDate.getHours() - fromDate.getHours();
            let minutes = toDate.getMinutes() - fromDate.getMinutes();
            let seconds = toDate.getSeconds() - fromDate.getSeconds();

            // Handle negative seconds
            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }
            if (hours < 0) {
                hours += 24;
                days--;
            }

            // Handle negative days
            if (days < 0) {
                const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
                days += prevMonth.getDate();
                months--;
            }

            // Handle negative months
            if (months < 0) {
                months += 12;
                years--;
            }

            // Totals (approximate)
            const diffMs = toDate - fromDate;
            const totalSecs = Math.floor(diffMs / 1000);
            const totalMins = Math.floor(totalSecs / 60);
            const totalHrs = Math.floor(totalMins / 60);
            const totalDs = Math.floor(totalHrs / 24);
            const totalWks = Math.floor(totalDs / 7);
            const totalMths = years * 12 + months;

            return {
                years, months, days,
                hours, minutes, seconds,
                totalMonths: totalMths,
                totalWeeks: totalWks,
                totalDays: totalDs,
                totalHours: totalHrs,
                totalMinutes: totalMins,
                totalSeconds: totalSecs,
                diffMs: diffMs
            };
        } catch (err) {
            console.error("Age compute error:", err);
            return null;
        }
    }

    /* =====================================================
       RENDER RESULT
    ===================================================== */
    function renderResult(result, fromDate, toDate, isDiff = false) {
        // Main age text
        const yearsPart = result.years === 1 ? "year" : "years";
        const monthsPart = result.months === 1 ? "month" : "months";
        const daysPart = result.days === 1 ? "day" : "days";

        mainAgeText.textContent = `${result.years} ${yearsPart}, ${result.months} ${monthsPart}, ${result.days} ${daysPart}`;

        // Sub text
        const weekday = WEEKDAYS[fromDate.getDay()];
        const day = fromDate.getDate();
        const month = MONTH_NAMES[fromDate.getMonth()];
        const year = fromDate.getFullYear();

        if (isDiff) {
            mainAgeSubText.textContent = `From ${weekday}, ${day} ${month} ${year} to ${toDate.getDate()} ${MONTH_NAMES[toDate.getMonth()]} ${toDate.getFullYear()}`;
        } else {
            mainAgeSubText.textContent = `Born on ${weekday}, ${day} ${month} ${year}`;
        }

        // Age cards
        ageYears.textContent = result.years;
        ageMonths.textContent = result.months;
        ageDays.textContent = result.days;
        ageHours.textContent = result.hours;
        ageMinutes.textContent = result.minutes;
        ageSeconds.textContent = result.seconds;

        // Totals
        totalMonths.textContent = formatLargeNumber(result.totalMonths);
        totalWeeks.textContent = formatLargeNumber(result.totalWeeks);
        totalDays.textContent = formatLargeNumber(result.totalDays);
        totalHours.textContent = formatLargeNumber(result.totalHours);
        totalMinutes.textContent = formatLargeNumber(result.totalMinutes);
        totalSeconds.textContent = formatLargeNumber(result.totalSeconds);

        // Weekday
        birthWeekday.textContent = weekday;

        // Zodiac
        const zodiac = getZodiac(fromDate.getDate(), fromDate.getMonth() + 1);
        zodiacIcon.textContent = zodiac.icon;
        zodiacName.textContent = zodiac.name;
        zodiacNote.textContent = zodiac.note;

        // Hijri age
        updateHijriAge(fromDate, toDate);

        // Birthday countdown
        if (!isDiff) {
            startBirthdayCountdown(fromDate);
        } else {
            stopBirthdayCountdown();
            bdayDays.textContent = "0";
            bdayHours.textContent = "0";
            bdayMinutes.textContent = "0";
            bdaySeconds.textContent = "0";
            birthdayNote.textContent = "Birthday countdown is only for DOB mode.";
        }
    }

    /* =====================================================
       HIJRI AGE
    ===================================================== */
    function updateHijriAge(fromDate, toDate) {
        try {
            // Approximate Hijri calculation
            // Islamic year is ~354.367 days vs Gregorian ~365.2425 days
            // Ratio: 365.2425 / 354.367 ≈ 1.0307
            const gregorianDiffMs = toDate - fromDate;
            const gregorianDays = gregorianDiffMs / (1000 * 60 * 60 * 24);

            // Approximate Hijri days
            const hijriDaysTotal = gregorianDays * (365.2425 / 354.367);

            // Convert to Hijri years/months/days
            const HIJRI_YEAR_DAYS = 354.367;
            const HIJRI_MONTH_DAYS = HIJRI_YEAR_DAYS / 12;

            const hYears = Math.floor(hijriDaysTotal / HIJRI_YEAR_DAYS);
            let remaining = hijriDaysTotal - (hYears * HIJRI_YEAR_DAYS);

            const hMonths = Math.floor(remaining / HIJRI_MONTH_DAYS);
            remaining -= hMonths * HIJRI_MONTH_DAYS;

            const hDays = Math.floor(remaining);

            const yPart = hYears === 1 ? "year" : "years";
            const mPart = hMonths === 1 ? "month" : "months";
            const dPart = hDays === 1 ? "day" : "days";

            hijriAgeText.textContent = `${hYears} ${yPart}, ${hMonths} ${mPart}, ${hDays} ${dPart}`;
            hijriNote.textContent = "Approximate Islamic lunar calendar age";
        } catch (err) {
            console.warn("Hijri error:", err);
            hijriAgeText.textContent = "Unable to calculate";
            hijriNote.textContent = "Please try again";
        }
    }

    /* =====================================================
       ZODIAC
    ===================================================== */
    function getZodiac(day, month) {
        for (const sign of ZODIAC_SIGNS) {
            const [sm, sd] = sign.start;
            const [em, ed] = sign.end;

            if (sm === em) {
                if (month === sm && day >= sd && day <= ed) return sign;
            } else if (sm < em) {
                if ((month === sm && day >= sd) || (month === em && day <= ed)) return sign;
            } else {
                // Wraps year (Capricorn)
                if ((month === sm && day >= sd) || (month === em && day <= ed)) return sign;
            }
        }
        return ZODIAC_SIGNS[0];
    }

    /* =====================================================
       BIRTHDAY COUNTDOWN
    ===================================================== */
    function startBirthdayCountdown(birthDate) {
        stopBirthdayCountdown();

        function updateCountdown() {
            const now = new Date();
            let nextBday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
            nextBday.setHours(0, 0, 0, 0);

            // If birthday passed this year, go to next year
            const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            if (nextBday < todayMidnight) {
                nextBday.setFullYear(now.getFullYear() + 1);
            }

            // If today is birthday
            if (nextBday.getTime() === todayMidnight.getTime()) {
                bdayDays.textContent = "🎉";
                bdayHours.textContent = "🎂";
                bdayMinutes.textContent = "🎈";
                bdaySeconds.textContent = "🎉";
                birthdayNote.textContent = "🎉 Happy Birthday! May Allah bless you!";
                return;
            }

            const diff = nextBday - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            bdayDays.textContent = days;
            bdayHours.textContent = String(hours).padStart(2, "0");
            bdayMinutes.textContent = String(minutes).padStart(2, "0");
            bdaySeconds.textContent = String(seconds).padStart(2, "0");

            const bdayStr = `${WEEKDAYS[nextBday.getDay()]}, ${nextBday.getDate()} ${MONTH_NAMES[nextBday.getMonth()]} ${nextBday.getFullYear()}`;
            birthdayNote.textContent = `🎂 Your next birthday is on ${bdayStr}`;
        }

        updateCountdown();
        state.countdownTimer = setInterval(updateCountdown, 1000);
    }

    function stopBirthdayCountdown() {
        if (state.countdownTimer) {
            clearInterval(state.countdownTimer);
            state.countdownTimer = null;
        }
    }

    /* =====================================================
       COPY / SHARE / SAVE
    ===================================================== */
    function copyResult() {
        if (!state.currentResult) return;

        const r = state.currentResult.result;
        const from = state.currentResult.birthDate;
        const to = state.currentResult.calcDate;

        const text = `
🕌 IslamicWay Age Calculator

📅 Date of Birth: ${formatDate(from)}
📅 Calculated As Of: ${formatDate(to)}

🎂 Exact Age: ${r.years} years, ${r.months} months, ${r.days} days
⏰ Time: ${r.hours}h ${r.minutes}m ${r.seconds}s

📊 Totals:
• Total Months: ${r.totalMonths.toLocaleString()}
• Total Weeks: ${r.totalWeeks.toLocaleString()}
• Total Days: ${r.totalDays.toLocaleString()}
• Total Hours: ${r.totalHours.toLocaleString()}
• Total Minutes: ${r.totalMinutes.toLocaleString()}
• Total Seconds: ${r.totalSeconds.toLocaleString()}

🌙 Hijri Age: ${hijriAgeText.textContent}
♈ Zodiac: ${zodiacName.textContent}
📅 Born on: ${birthWeekday.textContent}

— IslamicWay.com
        `.trim();

        navigator.clipboard.writeText(text)
            .then(() => showToast("✅ Result copied successfully!"))
            .catch(() => showToast("⚠️ Copy failed. Please try again."));
    }

    async function shareResult() {
        if (!state.currentResult) return;

        const r = state.currentResult.result;
        const from = state.currentResult.birthDate;

        const text = `🕌 My Age on IslamicWay\n\n🎂 ${r.years} years, ${r.months} months, ${r.days} days\n📅 Born: ${formatDate(from)}\n♈ Zodiac: ${zodiacName.textContent}\n\n— islamicway.com/age-calculator`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "My Age - IslamicWay",
                    text: text
                });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            try {
                await navigator.clipboard.writeText(text);
                showToast("🔗 Copied for sharing!");
            } catch (err) {
                showToast("⚠️ Share not available.");
            }
        }
    }

    function saveResultToHistory() {
        if (!state.currentResult) return;

        const r = state.currentResult.result;
        const from = state.currentResult.birthDate;

        const item = {
            id: Date.now(),
            years: r.years,
            months: r.months,
            days: r.days,
            birthDate: from.toISOString(),
            birthDateStr: formatDate(from),
            zodiac: zodiacName.textContent,
            zodiacIcon: zodiacIcon.textContent,
            timestamp: Date.now()
        };

        // Prevent duplicate within 5 seconds
        const last = state.history[0];
        if (last && (Date.now() - last.timestamp < 5000) && last.birthDate === item.birthDate) {
            showToast("⚠️ Already saved!");
            return;
        }

        state.history.unshift(item);
        if (state.history.length > 30) state.history.pop();

        persistHistory();
        renderHistory();
        showToast("💾 Saved to history!");
    }

    /* =====================================================
       HISTORY
    ===================================================== */
    function renderHistory() {
        if (!ageHistoryList) return;

        if (state.history.length === 0) {
            ageHistoryList.innerHTML = `
                <div class="age-history-empty">
                    <div>📭</div>
                    <p>No saved calculations yet</p>
                </div>
            `;
            return;
        }

        ageHistoryList.innerHTML = "";

        state.history.forEach(item => {
            const el = document.createElement("div");
            el.className = "age-history-item";

            const yPart = item.years === 1 ? "year" : "years";
            const mPart = item.months === 1 ? "month" : "months";
            const dPart = item.days === 1 ? "day" : "days";

            el.innerHTML = `
                <div class="age-history-item-icon">${item.zodiacIcon || "🎂"}</div>
                <div class="age-history-item-content">
                    <strong>${item.years} ${yPart}, ${item.months} ${mPart}, ${item.days} ${dPart}</strong>
                    <span>📅 Born: ${item.birthDateStr} • ${item.zodiac}</span>
                </div>
                <button class="age-history-item-delete" data-id="${item.id}" title="Delete">✕</button>
            `;

            // Load on click (but not on delete)
            el.addEventListener("click", function (e) {
                if (e.target.closest(".age-history-item-delete")) return;

                // Reload
                const bd = new Date(item.birthDate);
                birthDateInput.value = bd.toISOString().split("T")[0];
                calcDateInput.value = new Date().toISOString().split("T")[0];

                state.mode = "dob";
                document.querySelectorAll(".age-tab-btn").forEach(b => {
                    b.classList.toggle("active", b.dataset.tab === "dob");
                });
                document.getElementById("dobTab").style.display = "block";
                document.getElementById("ageTab").style.display = "none";

                calculate();
            });

            ageHistoryList.appendChild(el);
        });

        // Delete handlers
        ageHistoryList.querySelectorAll(".age-history-item-delete").forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                const id = Number(this.dataset.id);
                deleteHistoryItem(id);
            });
        });
    }

    function deleteHistoryItem(id) {
        state.history = state.history.filter(h => h.id !== id);
        persistHistory();
        renderHistory();
        showToast("🗑️ Deleted from history");
    }

    function clearHistory() {
        if (state.history.length === 0) {
            showToast("History is already empty");
            return;
        }

        if (confirm("Clear all saved calculations?")) {
            state.history = [];
            persistHistory();
            renderHistory();
            showToast("🗑️ History cleared");
        }
    }

    function persistHistory() {
        try {
            localStorage.setItem("islamicway_age_history", JSON.stringify(state.history));
        } catch (e) { console.warn("Storage error:", e); }
    }

    function loadHistory() {
        try {
            const saved = localStorage.getItem("islamicway_age_history");
            if (saved) {
                state.history = JSON.parse(saved);
                renderHistory();
            }
        } catch (e) { console.warn("Load error:", e); }
    }

    /* =====================================================
       RESET
    ===================================================== */
    function resetAll() {
        if (birthDateInput) birthDateInput.value = "";
        if (firstDateInput) firstDateInput.value = "";
        if (secondDateInput) secondDateInput.value = "";
        if (calcDateInput) calcDateInput.value = new Date().toISOString().split("T")[0];

        state.currentResult = null;
        stopBirthdayCountdown();

        ageResultSection.style.display = "none";
        hideError();

        showToast("🔄 Reset complete");
    }

    /* =====================================================
       HELPERS
    ===================================================== */
    function showError(msg) {
        if (!ageError) return;
        ageError.textContent = "⚠️ " + msg;
        ageError.style.display = "block";
    }

    function hideError() {
        if (!ageError) return;
        ageError.style.display = "none";
    }

    function formatDate(date) {
        const d = date.getDate();
        const m = MONTH_NAMES[date.getMonth()];
        const y = date.getFullYear();
        return `${d} ${m} ${y}`;
    }

    function formatLargeNumber(num) {
        if (!isFinite(num)) return "—";
        return num.toLocaleString("en-US");
    }

    function showToast(msg) {
        const old = document.querySelector(".age-toast");
        if (old) old.remove();

        const toast = document.createElement("div");
        toast.className = "age-toast";
        toast.textContent = msg;
        toast.style.cssText = `
            position: fixed;
            left: 50%;
            bottom: 30px;
            transform: translateX(-50%) translateY(20px);
            z-index: 999999;
            padding: 13px 22px;
            border-radius: 30px;
            background: linear-gradient(135deg, #0a5c22, #1a8a42);
            color: #ffffff;
            font-size: 13.5px;
            font-weight: 700;
            box-shadow: 0 15px 40px rgba(0, 40, 10, 0.5);
            border: 1px solid rgba(34, 200, 80, 0.4);
            opacity: 0;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 90%;
            text-align: center;
        `;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = "1";
            toast.style.transform = "translateX(-50%) translateY(0)";
        });

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(-50%) translateY(20px)";
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }

    /* =====================================================
       THEME
    ===================================================== */
    function setupTheme() {
        const savedTheme = localStorage.getItem("islamicway_age_theme") || "dark";
        applyTheme(savedTheme);

        if (themeBtn) {
            themeBtn.addEventListener("click", function () {
                const isLight = document.body.classList.contains("light-theme");
                const newTheme = isLight ? "dark" : "light";
                applyTheme(newTheme);
                localStorage.setItem("islamicway_age_theme", newTheme);
            });
        }
    }

    function applyTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-theme");
            if (themeBtn) themeBtn.textContent = "🌙";
        } else {
            document.body.classList.remove("light-theme");
            if (themeBtn) themeBtn.textContent = "☀️";
        }
    }

    /* =====================================================
       START
    ===================================================== */
    init();
});