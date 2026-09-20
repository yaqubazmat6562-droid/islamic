/* =========================================================
   ISLAMICWAY SCIENTIFIC CALCULATOR — MAIN ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       STATE
    ===================================================== */
    const state = {
        expression: "",
        result: "0",
        mode: "basic",          // basic | scientific
        angleUnit: "DEG",        // DEG | RAD
        memory: 0,
        hasMemory: false,
        history: [],
        justEvaluated: false,
        lastAnswer: 0
    };

    /* =====================================================
       DOM REFS
    ===================================================== */
    const calcExpression  = document.getElementById("calcExpression");
    const calcResult      = document.getElementById("calcResult");
    const calcKeypad      = document.getElementById("calcKeypad");
    const calcSciPanel    = document.getElementById("calcSciPanel");
    const calcModeBadge   = document.getElementById("calcModeBadge");
    const calcMemoryBadge = document.getElementById("calcMemoryBadge");
    const historyList     = document.getElementById("historyList");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    const themeBtn        = document.getElementById("calcThemeBtn");

    /* =====================================================
       BUTTON DEFINITIONS
    ===================================================== */
    const BASIC_BUTTONS = [
        { label: "AC",  action: "clearAll",  class: "clear" },
        { label: "⌫",   action: "backspace", class: "function" },
        { label: "%",   action: "percent",   class: "operator" },
        { label: "÷",   action: "input",     value: "/", class: "operator" },

        { label: "7",   action: "input", value: "7", class: "number" },
        { label: "8",   action: "input", value: "8", class: "number" },
        { label: "9",   action: "input", value: "9", class: "number" },
        { label: "×",   action: "input", value: "*", class: "operator" },

        { label: "4",   action: "input", value: "4", class: "number" },
        { label: "5",   action: "input", value: "5", class: "number" },
        { label: "6",   action: "input", value: "6", class: "number" },
        { label: "−",   action: "input", value: "-", class: "operator" },

        { label: "1",   action: "input", value: "1", class: "number" },
        { label: "2",   action: "input", value: "2", class: "number" },
        { label: "3",   action: "input", value: "3", class: "number" },
        { label: "+",   action: "input", value: "+", class: "operator" },

        { label: "±",   action: "negate",   class: "function" },
        { label: "0",   action: "input", value: "0", class: "number" },
        { label: ".",   action: "input", value: ".", class: "number" },
        { label: "=",   action: "evaluate", class: "equal" }
    ];

    const MEMORY_BUTTONS = [
        { label: "MC", action: "memClear" },
        { label: "MR", action: "memRecall" },
        { label: "M+", action: "memAdd" },
        { label: "M−", action: "memSub" },
        { label: "MS", action: "memStore" }
    ];

    const SCI_BUTTONS = [
        { label: "sin",  action: "func", value: "sin" },
        { label: "cos",  action: "func", value: "cos" },
        { label: "tan",  action: "func", value: "tan" },
        { label: "sin⁻¹", action: "func", value: "asin" },
        { label: "cos⁻¹", action: "func", value: "acos" },

        { label: "tan⁻¹", action: "func", value: "atan" },
        { label: "log",  action: "func", value: "log" },
        { label: "ln",   action: "func", value: "ln" },
        { label: "√",    action: "func", value: "sqrt" },
        { label: "∛",    action: "func", value: "cbrt" },

        { label: "x²",   action: "func", value: "sqr" },
        { label: "x³",   action: "func", value: "cube" },
        { label: "xʸ",   action: "input", value: "^", class: "operator" },
        { label: "x!",   action: "func", value: "fact" },
        { label: "1/x",  action: "func", value: "inv" },

        { label: "π",    action: "input", value: "π", class: "operator" },
        { label: "e",    action: "input", value: "e", class: "operator" },
        { label: "(",    action: "input", value: "(", class: "operator" },
        { label: ")",    action: "input", value: ")", class: "operator" },
        { label: "|x|",  action: "func", value: "abs" },

        { label: "DEG",  action: "angleDeg", class: "function" },
        { label: "RAD",  action: "angleRad", class: "function" },
        { label: "Ans",  action: "ans",      class: "function" },
        { label: "mod",  action: "input",    value: "%", class: "operator" },
        { label: "10ˣ",  action: "func",     value: "exp10" }
    ];

    /* =====================================================
       RENDER KEYPAD
    ===================================================== */
    function renderKeypad() {
        if (!calcKeypad) return;

        const allButtons = [...BASIC_BUTTONS, ...MEMORY_BUTTONS];
        calcKeypad.innerHTML = "";

        allButtons.forEach(btn => {
            const el = document.createElement("button");
            el.className = "calc-btn " + (btn.class || "");
            el.textContent = btn.label;
            el.dataset.action = btn.action;
            if (btn.value !== undefined) el.dataset.value = btn.value;

            el.addEventListener("click", () => handleAction(btn));
            calcKeypad.appendChild(el);
        });
    }

    function renderSciPanel() {
        if (!calcSciPanel) return;

        calcSciPanel.innerHTML = "";

        SCI_BUTTONS.forEach(btn => {
            const el = document.createElement("button");
            el.className = "calc-sci-btn";
            el.textContent = btn.label;
            el.dataset.action = btn.action;
            if (btn.value !== undefined) el.dataset.value = btn.value;

            el.addEventListener("click", () => handleAction(btn));
            calcSciPanel.appendChild(el);
        });
    }

    /* =====================================================
       HANDLE ACTION
    ===================================================== */
    function handleAction(btn) {
        const { action, value } = btn;

        switch (action) {
            case "input":      inputValue(value); break;
            case "clearAll":   clearAll(); break;
            case "backspace":  backspace(); break;
            case "evaluate":   evaluate(); break;
            case "negate":     negate(); break;
            case "percent":    applyPercent(); break;

            case "func":       applyFunction(value); break;

            case "angleDeg":   setAngleUnit("DEG"); break;
            case "angleRad":   setAngleUnit("RAD"); break;
            case "ans":        inputValue(String(state.lastAnswer)); break;

            case "memClear":   memClear(); break;
            case "memRecall":  memRecall(); break;
            case "memAdd":     memAdd(); break;
            case "memSub":     memSub(); break;
            case "memStore":   memStore(); break;
        }

        updateDisplay();
    }

    /* =====================================================
       INPUT / BASIC OPERATIONS
    ===================================================== */
    function inputValue(val) {
        if (state.justEvaluated) {
            state.expression = "";
            state.justEvaluated = false;
        }

        // Prevent double operators
        const lastChar = state.expression.slice(-1);
        const operators = ["+", "-", "*", "/", "^", "%"];

        if (operators.includes(val) && operators.includes(lastChar)) {
            state.expression = state.expression.slice(0, -1) + val;
            return;
        }

        // Prevent multiple dots in same number
        if (val === ".") {
            const parts = state.expression.split(/[\+\-\*\/\^%\(\)]/);
            const lastPart = parts[parts.length - 1];
            if (lastPart.includes(".")) return;
        }

        state.expression += val;
    }

    function clearAll() {
        state.expression = "";
        state.result = "0";
        state.justEvaluated = false;
        calcResult.classList.remove("error");
    }

    function backspace() {
        if (state.justEvaluated) {
            clearAll();
            return;
        }
        state.expression = state.expression.slice(0, -1);
    }

    function negate() {
        if (!state.expression) {
            state.expression = "-";
            return;
        }

        // If expression is just a number, toggle its sign
        if (/^-?\d*\.?\d+$/.test(state.expression)) {
            if (state.expression.startsWith("-")) {
                state.expression = state.expression.slice(1);
            } else {
                state.expression = "-" + state.expression;
            }
            return;
        }

        // Otherwise wrap in parentheses with negation
        state.expression = "-(" + state.expression + ")";
    }

    function applyPercent() {
        if (!state.expression) return;

        try {
            const value = evaluateExpression(state.expression);
            state.expression = String(value / 100);
        } catch (e) {
            state.expression += "/100";
        }
    }

    /* =====================================================
       EVALUATE
    ===================================================== */
    function evaluate() {
        if (!state.expression.trim()) return;

        try {
            const result = evaluateExpression(state.expression);

            if (!isFinite(result) || isNaN(result)) {
                throw new Error("Invalid");
            }

            const formatted = formatNumber(result);

            addToHistory(state.expression, formatted);

            state.lastAnswer = result;
            state.result = formatted;
            state.justEvaluated = true;

            // Replace π and e back for cleaner display
            state.expression = state.expression;

        } catch (err) {
            console.error("Calc error:", err);
            calcResult.classList.add("error");
            state.result = "Error";
            state.justEvaluated = true;
        }
    }

    /* =====================================================
       SAFE EXPRESSION EVALUATOR
    ===================================================== */
    function evaluateExpression(expr) {
        // Replace symbols
        let jsExpr = expr
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/π/g, "(" + Math.PI + ")")
            .replace(/\be\b/g, "(" + Math.E + ")")
            .replace(/\^/g, "**")
            .replace(/%/g, "/100");

        // Handle implicit multiplication: 2(3) → 2*(3), )( → )*(
        jsExpr = jsExpr.replace(/(\d)\(/g, "$1*(");
        jsExpr = jsExpr.replace(/\)(\d)/g, ")*$1");
        jsExpr = jsExpr.replace(/\)\(/g, ")*(");
        jsExpr = jsExpr.replace(/(\d)(π|e)/g, "$1*$2");

        // Whitelist allowed characters
        if (!/^[0-9+\-*/().\s*eE]+$/.test(jsExpr.replace(/\*\*/g, "*"))) {
            // Replace ** back for validation
            const sanitized = jsExpr.replace(/\*\*/g, "*");
            if (!/^[0-9+\-*/().\s*]+$/.test(sanitized)) {
                throw new Error("Invalid characters");
            }
        }

        // Use Function constructor (safer than eval for controlled input)
        const func = new Function("return (" + jsExpr + ")");
        const result = func();

        return result;
    }

    /* =====================================================
       SCIENTIFIC FUNCTIONS
    ===================================================== */
    function applyFunction(fn) {
        if (!state.expression && fn !== "fact") {
            // Auto-insert into empty expression
        }

        try {
            if (state.justEvaluated) {
                // Use last result as input
                state.expression = String(state.lastAnswer);
                state.justEvaluated = false;
            }

            // If expression empty, use 0
            const currentExpr = state.expression || "0";
            const currentValue = evaluateExpression(currentExpr);

            let result;

            switch (fn) {
                case "sin":   result = Math.sin(toRad(currentValue)); break;
                case "cos":   result = Math.cos(toRad(currentValue)); break;
                case "tan":   result = Math.tan(toRad(currentValue)); break;
                case "asin":  result = fromRad(Math.asin(currentValue)); break;
                case "acos":  result = fromRad(Math.acos(currentValue)); break;
                case "atan":  result = fromRad(Math.atan(currentValue)); break;

                case "log":   result = Math.log10(currentValue); break;
                case "ln":    result = Math.log(currentValue); break;
                case "exp10": result = Math.pow(10, currentValue); break;

                case "sqrt":  result = Math.sqrt(currentValue); break;
                case "cbrt":  result = Math.cbrt(currentValue); break;

                case "sqr":   result = currentValue * currentValue; break;
                case "cube":  result = currentValue * currentValue * currentValue; break;

                case "inv":   result = 1 / currentValue; break;
                case "abs":   result = Math.abs(currentValue); break;
                case "fact":  result = factorial(currentValue); break;

                default: return;
            }

            if (!isFinite(result) || isNaN(result)) {
                throw new Error("Math error");
            }

            state.result = formatNumber(result);
            state.lastAnswer = result;
            state.expression = state.result === "Error" ? state.expression : "";
            state.justEvaluated = true;

        } catch (err) {
            calcResult.classList.add("error");
            state.result = "Error";
            state.justEvaluated = true;
        }
    }

    function toRad(deg) {
        return state.angleUnit === "DEG" ? deg * (Math.PI / 180) : deg;
    }

    function fromRad(rad) {
        return state.angleUnit === "DEG" ? rad * (180 / Math.PI) : rad;
    }

    function factorial(n) {
        if (n < 0) throw new Error("Negative factorial");
        if (!Number.isInteger(n) && n > 170) throw new Error("Too large");

        if (Number.isInteger(n)) {
            let r = 1;
            for (let i = 2; i <= n; i++) r *= i;
            return r;
        }

        // Gamma approximation for non-integers
        return gamma(n + 1);
    }

    function gamma(n) {
        // Lanczos approximation
        const g = 7;
        const C = [
            0.99999999999980993,
            676.5203681218851,
            -1259.1392167224028,
            771.32342877765313,
            -176.61502916214059,
            12.507343278686905,
            -0.13857109526572012,
            9.9843695780195716e-6,
            1.5056327351493116e-7
        ];

        if (n < 0.5) {
            return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
        }

        n -= 1;
        let x = C[0];
        for (let i = 1; i < g + 2; i++) {
            x += C[i] / (n + i);
        }

        const t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    }

    /* =====================================================
       MEMORY FUNCTIONS
    ===================================================== */
    function memStore() {
        try {
            const val = evaluateExpression(state.expression || state.result);
            state.memory = val;
            state.hasMemory = true;
            showMemoryBadge();
        } catch (e) {
            state.memory = parseFloat(state.result) || 0;
            state.hasMemory = true;
            showMemoryBadge();
        }
    }

    function memRecall() {
        if (!state.hasMemory) return;
        if (state.justEvaluated) {
            state.expression = "";
            state.justEvaluated = false;
        }
        state.expression += String(state.memory);
    }

    function memAdd() {
        try {
            const val = evaluateExpression(state.expression || state.result);
            state.memory += val;
            state.hasMemory = true;
            showMemoryBadge();
        } catch (e) {}
    }

    function memSub() {
        try {
            const val = evaluateExpression(state.expression || state.result);
            state.memory -= val;
            state.hasMemory = true;
            showMemoryBadge();
        } catch (e) {}
    }

    function memClear() {
        state.memory = 0;
        state.hasMemory = false;
        hideMemoryBadge();
    }

    function showMemoryBadge() {
        if (calcMemoryBadge) calcMemoryBadge.style.display = "inline-block";
    }

    function hideMemoryBadge() {
        if (calcMemoryBadge) calcMemoryBadge.style.display = "none";
    }

    /* =====================================================
       ANGLE UNIT
    ===================================================== */
    function setAngleUnit(unit) {
        state.angleUnit = unit;
        if (calcModeBadge) calcModeBadge.textContent = unit;
        updateDisplay();
    }

    /* =====================================================
       DISPLAY UPDATE
    ===================================================== */
    function updateDisplay() {
        if (calcExpression) {
            calcExpression.textContent = state.expression || "";
        }
        if (calcResult) {
            if (calcResult.textContent !== state.result) {
                calcResult.classList.remove("error");
            }
            calcResult.textContent = state.result;
        }
        if (calcModeBadge) {
            calcModeBadge.textContent = state.angleUnit;
        }
    }

    /* =====================================================
       NUMBER FORMATTER
    ===================================================== */
    function formatNumber(num) {
        if (!isFinite(num)) return "Error";
        if (Number.isInteger(num)) {
            if (Math.abs(num) > 1e15) return num.toExponential(6);
            return num.toString();
        }

        if (Math.abs(num) < 0.000001 && num !== 0) {
            return num.toExponential(6);
        }

        if (Math.abs(num) > 1e12) {
            return num.toExponential(6);
        }

        // Round to avoid floating point weirdness
        const rounded = Math.round(num * 1e10) / 1e10;
        return rounded.toString();
    }

    /* =====================================================
       HISTORY
    ===================================================== */
    function addToHistory(expr, result) {
        const item = {
            expr: expr,
            result: result,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        state.history.unshift(item);
        if (state.history.length > 50) state.history.pop();

        saveHistory();
        renderHistory();
    }

    function renderHistory() {
        if (!historyList) return;

        if (state.history.length === 0) {
            historyList.innerHTML = `
                <div class="history-empty">
                    <div>📭</div>
                    <p>No calculations yet</p>
                </div>
            `;
            return;
        }

        historyList.innerHTML = "";

        state.history.forEach((item, index) => {
            const el = document.createElement("div");
            el.className = "history-item";
            el.innerHTML = `
                <div class="hist-expr">${escapeCalc(item.expr)}</div>
                <div class="hist-result">= ${escapeCalc(item.result)}</div>
                <div class="hist-time">${item.time}</div>
            `;

            el.addEventListener("click", () => {
                state.expression = item.result;
                state.justEvaluated = false;
                updateDisplay();
            });

            historyList.appendChild(el);
        });
    }

    function clearHistory() {
        state.history = [];
        localStorage.removeItem("islamicCalcHistory");
        renderHistory();
    }

    function saveHistory() {
        try {
            localStorage.setItem("islamicCalcHistory", JSON.stringify(state.history));
        } catch (e) {}
    }

    function loadHistory() {
        try {
            const saved = localStorage.getItem("islamicCalcHistory");
            if (saved) {
                state.history = JSON.parse(saved);
                renderHistory();
            }
        } catch (e) {}
    }

    function escapeCalc(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    /* =====================================================
       MODE SWITCHING
    ===================================================== */
    document.querySelectorAll(".calc-mode-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const mode = this.dataset.mode;
            state.mode = mode;

            document.querySelectorAll(".calc-mode-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            if (mode === "scientific") {
                if (calcSciPanel) calcSciPanel.style.display = "grid";
            } else {
                if (calcSciPanel) calcSciPanel.style.display = "none";
            }
        });
    });

    /* =====================================================
       KEYBOARD SUPPORT
    ===================================================== */
    document.addEventListener("keydown", function (e) {
        // Only capture if not typing in an input (except the calculator itself)
        const tag = document.activeElement.tagName;

        if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
            // Allow only if active element is converter input
            if (document.activeElement.closest(".converter-inputs")) return;
        }

        const key = e.key;

        if (/^[0-9]$/.test(key)) {
            e.preventDefault();
            inputValue(key);
        }
        else if (key === "." || key === ",") {
            e.preventDefault();
            inputValue(".");
        }
        else if (key === "+" || key === "-" || key === "*" || key === "/") {
            e.preventDefault();
            inputValue(key);
        }
        else if (key === "%") {
            e.preventDefault();
            inputValue("%");
        }
        else if (key === "(" || key === ")") {
            e.preventDefault();
            inputValue(key);
        }
        else if (key === "^") {
            e.preventDefault();
            inputValue("^");
        }
        else if (key === "Enter" || key === "=") {
            e.preventDefault();
            evaluate();
        }
        else if (key === "Backspace") {
            e.preventDefault();
            backspace();
        }
        else if (key === "Escape") {
            e.preventDefault();
            clearAll();
        }
        else {
            return;
        }

        updateDisplay();
    });

    /* =====================================================
       THEME TOGGLE
    ===================================================== */
    function applyTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-theme");
            if (themeBtn) themeBtn.textContent = "🌙";
        } else {
            document.body.classList.remove("light-theme");
            if (themeBtn) themeBtn.textContent = "☀️";
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            const isLight = document.body.classList.contains("light-theme");
            const newTheme = isLight ? "dark" : "light";
            applyTheme(newTheme);
            localStorage.setItem("islamicCalcTheme", newTheme);
        });
    }

    const savedTheme = localStorage.getItem("islamicCalcTheme") || "dark";
    applyTheme(savedTheme);

    /* =====================================================
       UNIT CONVERTER
    ===================================================== */
    const UNIT_DATA = {
        length: {
            units: {
                m: 1, km: 1000, cm: 0.01, mm: 0.001,
                mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254,
                nmi: 1852
            },
            labels: {
                m: "Meters", km: "Kilometers", cm: "Centimeters",
                mm: "Millimeters", mi: "Miles", yd: "Yards",
                ft: "Feet", in: "Inches", nmi: "Nautical Miles"
            }
        },
        weight: {
            units: {
                kg: 1, g: 0.001, mg: 0.000001, t: 1000,
                lb: 0.453592, oz: 0.0283495, st: 6.35029
            },
            labels: {
                kg: "Kilograms", g: "Grams", mg: "Milligrams",
                t: "Metric Tons", lb: "Pounds", oz: "Ounces", st: "Stones"
            }
        },
        temperature: {
            units: { c: "c", f: "f", k: "k" },
            labels: { c: "Celsius", f: "Fahrenheit", k: "Kelvin" },
            special: true
        },
        area: {
            units: {
                sqm: 1, sqkm: 1000000, sqcm: 0.0001,
                sqft: 0.092903, sqyd: 0.836127, acre: 4046.86, ha: 10000
            },
            labels: {
                sqm: "Square Meters", sqkm: "Square Kilometers",
                sqcm: "Square Centimeters", sqft: "Square Feet",
                sqyd: "Square Yards", acre: "Acres", ha: "Hectares"
            }
        },
        time: {
            units: {
                s: 1, ms: 0.001, min: 60, h: 3600,
                d: 86400, wk: 604800, mo: 2629800, yr: 31557600
            },
            labels: {
                s: "Seconds", ms: "Milliseconds", min: "Minutes",
                h: "Hours", d: "Days", wk: "Weeks",
                mo: "Months", yr: "Years"
            }
        }
    };

    const converterCategory  = document.getElementById("converterCategory");
    const converterFromValue = document.getElementById("converterFromValue");
    const converterFromUnit  = document.getElementById("converterFromUnit");
    const converterToValue   = document.getElementById("converterToValue");
    const converterToUnit    = document.getElementById("converterToUnit");

    function loadConverterUnits() {
        const cat = converterCategory.value;
        const data = UNIT_DATA[cat];

        if (!data) return;

        converterFromUnit.innerHTML = "";
        converterToUnit.innerHTML = "";

        Object.keys(data.units).forEach(key => {
            const label = data.labels[key] || key;

            const opt1 = document.createElement("option");
            opt1.value = key;
            opt1.textContent = label;
            converterFromUnit.appendChild(opt1);

            const opt2 = document.createElement("option");
            opt2.value = key;
            opt2.textContent = label;
            converterToUnit.appendChild(opt2);
        });

        // Default second option for "to"
        if (converterToUnit.options.length > 1) {
            converterToUnit.selectedIndex = 1;
        }

        convert();
    }

    function convert() {
        const cat = converterCategory.value;
        const fromUnit = converterFromUnit.value;
        const toUnit = converterToUnit.value;
        const fromVal = parseFloat(converterFromValue.value);

        if (isNaN(fromVal)) {
            converterToValue.value = "";
            return;
        }

        let result;

        if (cat === "temperature") {
            result = convertTemperature(fromVal, fromUnit, toUnit);
        } else {
            const data = UNIT_DATA[cat];
            const baseVal = fromVal * data.units[fromUnit];
            result = baseVal / data.units[toUnit];
        }

        converterToValue.value = formatNumber(result);
    }

    function convertTemperature(val, from, to) {
        let celsius;

        // Convert to Celsius first
        if (from === "c") celsius = val;
        else if (from === "f") celsius = (val - 32) * 5 / 9;
        else if (from === "k") celsius = val - 273.15;

        // Convert from Celsius to target
        if (to === "c") return celsius;
        if (to === "f") return celsius * 9 / 5 + 32;
        if (to === "k") return celsius + 273.15;

        return celsius;
    }

    if (converterCategory) {
        converterCategory.addEventListener("change", loadConverterUnits);
    }
    if (converterFromValue) {
        converterFromValue.addEventListener("input", convert);
    }
    if (converterFromUnit) {
        converterFromUnit.addEventListener("change", convert);
    }
    if (converterToUnit) {
        converterToUnit.addEventListener("change", convert);
    }

    if (converterCategory) {
        loadConverterUnits();
    }

    /* =====================================================
       CLEAR HISTORY
    ===================================================== */
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", clearHistory);
    }

    /* =====================================================
       INIT
    ===================================================== */
    function init() {
        renderKeypad();
        renderSciPanel();
        loadHistory();
        updateDisplay();
        setAngleUnit("DEG");
    }

    init();
});