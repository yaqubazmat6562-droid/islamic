```javascript
/* =========================================
   POWER OF DUA - DYNAMIC JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadDuas();

});


/* =========================================
   DUA DATABASE
   ========================================= */

const duas = [

    {
        id: 1,
        title: "Morning Dua",
        category: "morning",

        arabic:
            "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",

        translation:
            "O Allah, by You we enter the morning and by You we enter the evening."
    },

    {
        id: 2,
        title: "Evening Dua",
        category: "evening",

        arabic:
            "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا",

        translation:
            "O Allah, by You we enter the evening and by You we enter the morning."
    },

    {
        id: 3,
        title: "Dua for Protection",
        category: "protection",

        arabic:
            "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",

        translation:
            "I seek refuge in the perfect words of Allah from the evil of what He has created."
    },

    {
        id: 4,
        title: "Dua for Forgiveness",
        category: "forgiveness",

        arabic:
            "رَبِّ اغْفِرْ لِي وَارْحَمْنِي",

        translation:
            "My Lord, forgive me and have mercy upon me."
    },

    {
        id: 5,
        title: "Dua for Guidance",
        category: "all",

        arabic:
            "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",

        translation:
            "Guide us to the straight path."
    },

    {
        id: 6,
        title: "Dua for Ease",
        category: "all",

        arabic:
            "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي",

        translation:
            "My Lord, expand my chest for me and make my task easy for me."
    },

    {
        id: 7,
        title: "Dua for Peace",
        category: "all",

        arabic:
            "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا",

        translation:
            "My Lord, let me land at a blessed place, and You are the best of those who accommodate."
    },

    {
        id: 8,
        title: "Dua for Mercy",
        category: "all",

        arabic:
            "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",

        translation:
            "My Lord, forgive and have mercy, and You are the best of those who show mercy."
    }

];


/* =========================================
   LOAD DUAS
   ========================================= */

function loadDuas(list = duas) {

    const container =
        document.getElementById("duaContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="no-dua">
                <div style="font-size:45px;">🔎</div>

                <h3>No Dua Found</h3>

                <p>
                    Try another search or category.
                </p>
            </div>
        `;

        return;
    }


    list.forEach((dua, index) => {

        const card =
            document.createElement("div");

        card.className = "dynamic-dua-card";

        card.style.animationDelay =
            `${index * 0.08}s`;


        card.innerHTML = `

            <h3>
                🤲 ${dua.title}
            </h3>

            <div class="arabic-dua">
                ${dua.arabic}
            </div>

            <p class="dua-translation">
                ${dua.translation}
            </p>

            <div class="dua-actions">

                <button
                    onclick="copyDua(${dua.id})">
                    📋 Copy
                </button>

                <button
                    onclick="favoriteDua(${dua.id})">
                    ❤️ Favorite
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =========================================
   CATEGORY FILTER
   ========================================= */

function filterDuas(category) {

    const searchInput =
        document.getElementById("duaSearch");

    if (searchInput) {

        searchInput.value = "";

    }


    if (category === "all") {

        loadDuas(duas);

        return;
    }


    const filtered =
        duas.filter(dua =>
            dua.category === category ||
            dua.category === "all"
        );


    loadDuas(filtered);

}


/* =========================================
   SEARCH DUA
   ========================================= */

function searchDua() {

    const input =
        document.getElementById("duaSearch");

    if (!input) return;


    const search =
        input.value
            .toLowerCase()
            .trim();


    if (search === "") {

        loadDuas();

        return;
    }


    const results =
        duas.filter(dua =>

            dua.title
                .toLowerCase()
                .includes(search)

            ||

            dua.translation
                .toLowerCase()
                .includes(search)

            ||

            dua.category
                .toLowerCase()
                .includes(search)

            ||

            dua.arabic
                .includes(search)

        );


    loadDuas(results);

}


/* =========================================
   COPY DUA
   ========================================= */

function copyDua(id) {

    const dua =
        duas.find(item => item.id === id);

    if (!dua) return;


    const text =
        `${dua.title}\n\n` +
        `${dua.arabic}\n\n` +
        `${dua.translation}`;


    if (navigator.clipboard) {

        navigator.clipboard
            .writeText(text)
            .then(() => {

                showNotification(
                    "Dua copied successfully! 📋"
                );

            })
            .catch(() => {

                fallbackCopy(text);

            });

    } else {

        fallbackCopy(text);

    }

}


/* =========================================
   FALLBACK COPY
   ========================================= */

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    try {

        document.execCommand("copy");

        showNotification(
            "Dua copied successfully! 📋"
        );

    } catch (error) {

        showNotification(
            "Unable to copy Dua."
        );

    }

    textarea.remove();

}


/* =========================================
   FAVORITE DUA
   ========================================= */

function favoriteDua(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favoriteDuas")
        ) || [];


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        localStorage.setItem(
            "favoriteDuas",
            JSON.stringify(favorites)
        );

        showNotification(
            "Removed from Favorites 💔"
        );

        return;
    }


    favorites.push(id);


    localStorage.setItem(
        "favoriteDuas",
        JSON.stringify(favorites)
    );


    showNotification(
        "Added to Favorites ❤️"
    );

}


/* =========================================
   SHOW MESSAGE
   ========================================= */

function showDuaMessage() {

    const message =
        document.getElementById("duaMessage");

    if (!message) return;


    const messages = [

        "Keep making Dua. Allah hears every sincere prayer. 🤲",

        "Never lose hope in Allah's mercy. ❤️",

        "Trust Allah's timing and keep asking Him. 🌙",

        "Your Dua is an act of worship. ✨",

        "Be patient, keep praying and trust Allah. 🕊️"

    ];


    const randomMessage =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];


    message.style.opacity = "0";


    setTimeout(() => {

        message.textContent =
            randomMessage;

        message.style.transition =
            "opacity 0.5s ease";

        message.style.opacity = "1";

    }, 150);

}


/* =========================================
   NOTIFICATION
   ========================================= */

function showNotification(text) {

    const old =
        document.querySelector(
            ".dua-notification"
        );

    if (old) old.remove();


    const notification =
        document.createElement("div");

    notification.className =
        "dua-notification";


    notification.textContent =
        text;


    Object.assign(
        notification.style,
        {

            position: "fixed",

            bottom: "25px",

            left: "50%",

            transform:
                "translateX(-50%)",

            zIndex: "9999",

            padding:
                "13px 22px",

            borderRadius:
                "30px",

            background:
                "#42c988",

            color:
                "#06251b",

            fontWeight:
                "700",

            boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)",

            animation:
                "notificationIn 0.4s ease"

        }
    );


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.style.opacity = "0";

        notification.style.transition =
            "opacity 0.4s ease";


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

        window.location.href =
            "index.html";

    }

}


/* =========================================
   SCROLL TO DUAS
   ========================================= */

function scrollToDuas() {

    const section =
        document.getElementById("duaSection");

    if (!section) return;


    section.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================
   KEYBOARD SEARCH
   ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            const search =
                document.getElementById("duaSearch");

            if (search) {

                search.focus();

            }

        }

    }
);


/* =========================================
   NOTIFICATION ANIMATION
   ========================================= */

const notificationStyle =
    document.createElement("style");

notificationStyle.textContent = `

@keyframes notificationIn {

    from {
        opacity: 0;
        transform:
            translate(-50%, 20px);
    }

    to {
        opacity: 1;
        transform:
            translate(-50%, 0);
    }

}

`;

document.head.appendChild(
    notificationStyle
);
```
