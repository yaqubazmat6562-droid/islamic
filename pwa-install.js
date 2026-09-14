/* =========================================================
   ISLAMICWAY — PWA INSTALL PROMPT HANDLER
   ========================================================= */

(function () {
    "use strict";

    let deferredPrompt = null;
    const installBtn = document.getElementById("pwaInstallBtn");

    /* ---------------------------------------------
       Detect if already installed (standalone mode)
    --------------------------------------------- */
    function isStandalone() {
        return (
            window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone === true ||
            document.referrer.includes("android-app://")
        );
    }

    /* ---------------------------------------------
       Hide button if already installed
    --------------------------------------------- */
    if (isStandalone()) {
        if (installBtn) installBtn.style.display = "none";
        console.log("[PWA] Already installed (standalone mode)");
        return;
    }

    /* ---------------------------------------------
       Listen for beforeinstallprompt
    --------------------------------------------- */
    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        console.log("[PWA] Install prompt available");

        if (installBtn) {
            installBtn.style.display = "flex";
            installBtn.classList.add("pwa-ready");
        }
    });

    /* ---------------------------------------------
       Handle install button click
    --------------------------------------------- */
    if (installBtn) {
        installBtn.addEventListener("click", async () => {
            if (!deferredPrompt) {
                // Fallback: show manual instructions
                showManualInstructions();
                return;
            }

            // Show native install prompt
            deferredPrompt.prompt();

            const choice = await deferredPrompt.userChoice;
            console.log("[PWA] User choice:", choice.outcome);

            if (choice.outcome === "accepted") {
                installBtn.style.display = "none";
                showToast("🎉 App installed successfully!");
            } else {
                showToast("Installation cancelled");
            }

            deferredPrompt = null;
        });
    }

    /* ---------------------------------------------
       Listen for appinstalled event
    --------------------------------------------- */
    window.addEventListener("appinstalled", () => {
        console.log("[PWA] App installed");
        if (installBtn) installBtn.style.display = "none";
        showToast("🎉 IslamicWay installed!");
    });

    /* ---------------------------------------------
       Manual install instructions (iOS / fallback)
    --------------------------------------------- */
    function showManualInstructions() {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);

        let message = "";

        if (isIOS) {
            message = "📱 To install on iPhone:\n\nTap the Share button ⬆️ then select 'Add to Home Screen'";
        } else if (isAndroid) {
            message = "📱 To install on Android:\n\nTap the menu ⋮ then select 'Install app' or 'Add to Home screen'";
        } else {
            message = "💻 To install on desktop:\n\nLook for the install icon in your browser's address bar, or open the browser menu and select 'Install IslamicWay'";
        }

        alert(message);
    }

    /* ---------------------------------------------
       Small toast notification
    --------------------------------------------- */
    function showToast(msg) {
        const toast = document.createElement("div");
        toast.className = "pwa-toast";
        toast.textContent = msg;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add("show");
        });

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }

    /* ---------------------------------------------
       Register Service Worker
    --------------------------------------------- */
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("./sw.js")
                .then((reg) => {
                    console.log("[PWA] Service Worker registered:", reg.scope);
                })
                .catch((err) => {
                    console.warn("[PWA] Service Worker registration failed:", err);
                });
        });
    } else {
        console.warn("[PWA] Service Workers not supported");
    }

})();