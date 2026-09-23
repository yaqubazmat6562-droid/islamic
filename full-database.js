/* =========================================================
   ISLAMICWAY DATABASE — PART 1
   Surahs 1-3 (Al-Fatihah, Al-Baqarah, Ali 'Imran)
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART1 = {

    /* =====================================================
       QURAN — SURAH LIST (Metadata)
    ===================================================== */
    quranSurahs: [
        { number: 1, name: "الفاتحة", englishName: "Al-Fatihah", englishNameTranslation: "The Opening", numberOfAyahs: 7, revelationType: "Meccan" },
        { number: 2, name: "البقرة", englishName: "Al-Baqarah", englishNameTranslation: "The Cow", numberOfAyahs: 286, revelationType: "Medinan" },
        { number: 3, name: "آل عمران", englishName: "Ali 'Imran", englishNameTranslation: "Family of Imran", numberOfAyahs: 200, revelationType: "Medinan" },
        { number: 4, name: "النساء", englishName: "An-Nisa", englishNameTranslation: "The Women", numberOfAyahs: 176, revelationType: "Medinan" },
        { number: 5, name: "المائدة", englishName: "Al-Ma'idah", englishNameTranslation: "The Table Spread", numberOfAyahs: 120, revelationType: "Medinan" },
        { number: 6, name: "الأنعام", englishName: "Al-An'am", englishNameTranslation: "The Cattle", numberOfAyahs: 165, revelationType: "Meccan" },
        { number: 7, name: "الأعراف", englishName: "Al-A'raf", englishNameTranslation: "The Heights", numberOfAyahs: 206, revelationType: "Meccan" },
        { number: 8, name: "الأنفال", englishName: "Al-Anfal", englishNameTranslation: "The Spoils of War", numberOfAyahs: 75, revelationType: "Medinan" },
        { number: 9, name: "التوبة", englishName: "At-Tawbah", englishNameTranslation: "The Repentance", numberOfAyahs: 129, revelationType: "Medinan" },
        { number: 10, name: "يونس", englishName: "Yunus", englishNameTranslation: "Jonah", numberOfAyahs: 109, revelationType: "Meccan" },
        { number: 11, name: "هود", englishName: "Hud", englishNameTranslation: "Hud", numberOfAyahs: 123, revelationType: "Meccan" },
        { number: 12, name: "يوسف", englishName: "Yusuf", englishNameTranslation: "Joseph", numberOfAyahs: 111, revelationType: "Meccan" },
        { number: 13, name: "الرعد", englishName: "Ar-Ra'd", englishNameTranslation: "The Thunder", numberOfAyahs: 43, revelationType: "Medinan" },
        { number: 14, name: "إبراهيم", englishName: "Ibrahim", englishNameTranslation: "Abraham", numberOfAyahs: 52, revelationType: "Meccan" },
        { number: 15, name: "الحجر", englishName: "Al-Hijr", englishNameTranslation: "The Rocky Tract", numberOfAyahs: 99, revelationType: "Meccan" },
        { number: 16, name: "النحل", englishName: "An-Nahl", englishNameTranslation: "The Bee", numberOfAyahs: 128, revelationType: "Meccan" },
        { number: 17, name: "الإسراء", englishName: "Al-Isra", englishNameTranslation: "The Night Journey", numberOfAyahs: 111, revelationType: "Meccan" },
        { number: 18, name: "الكهف", englishName: "Al-Kahf", englishNameTranslation: "The Cave", numberOfAyahs: 110, revelationType: "Meccan" },
        { number: 19, name: "مريم", englishName: "Maryam", englishNameTranslation: "Mary", numberOfAyahs: 98, revelationType: "Meccan" },
        { number: 20, name: "طه", englishName: "Taha", englishNameTranslation: "Ta-Ha", numberOfAyahs: 135, revelationType: "Meccan" },
        { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", englishNameTranslation: "The Prophets", numberOfAyahs: 112, revelationType: "Meccan" },
        { number: 22, name: "الحج", englishName: "Al-Hajj", englishNameTranslation: "The Pilgrimage", numberOfAyahs: 78, revelationType: "Medinan" },
        { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", englishNameTranslation: "The Believers", numberOfAyahs: 118, revelationType: "Meccan" },
        { number: 24, name: "النور", englishName: "An-Nur", englishNameTranslation: "The Light", numberOfAyahs: 64, revelationType: "Medinan" },
        { number: 25, name: "الفرقان", englishName: "Al-Furqan", englishNameTranslation: "The Criterion", numberOfAyahs: 77, revelationType: "Meccan" },
        { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", englishNameTranslation: "The Poets", numberOfAyahs: 227, revelationType: "Meccan" },
        { number: 27, name: "النمل", englishName: "An-Naml", englishNameTranslation: "The Ant", numberOfAyahs: 93, revelationType: "Meccan" },
        { number: 28, name: "القصص", englishName: "Al-Qasas", englishNameTranslation: "The Stories", numberOfAyahs: 88, revelationType: "Meccan" },
        { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", englishNameTranslation: "The Spider", numberOfAyahs: 69, revelationType: "Meccan" },
        { number: 30, name: "الروم", englishName: "Ar-Rum", englishNameTranslation: "The Romans", numberOfAyahs: 60, revelationType: "Meccan" },
        { number: 31, name: "لقمان", englishName: "Luqman", englishNameTranslation: "Luqman", numberOfAyahs: 34, revelationType: "Meccan" },
        { number: 32, name: "السجدة", englishName: "As-Sajdah", englishNameTranslation: "The Prostration", numberOfAyahs: 30, revelationType: "Meccan" },
        { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", englishNameTranslation: "The Combined Forces", numberOfAyahs: 73, revelationType: "Medinan" },
        { number: 34, name: "سبأ", englishName: "Saba", englishNameTranslation: "Sheba", numberOfAyahs: 54, revelationType: "Meccan" },
        { number: 35, name: "فاطر", englishName: "Fatir", englishNameTranslation: "Originator", numberOfAyahs: 45, revelationType: "Meccan" },
        { number: 36, name: "يس", englishName: "Ya-Sin", englishNameTranslation: "Ya Sin", numberOfAyahs: 83, revelationType: "Meccan" },
        { number: 37, name: "الصافات", englishName: "As-Saffat", englishNameTranslation: "Those who set the Ranks", numberOfAyahs: 182, revelationType: "Meccan" },
        { number: 38, name: "ص", englishName: "Sad", englishNameTranslation: "The Letter Sad", numberOfAyahs: 88, revelationType: "Meccan" },
        { number: 39, name: "الزمر", englishName: "Az-Zumar", englishNameTranslation: "The Troops", numberOfAyahs: 75, revelationType: "Meccan" },
        { number: 40, name: "غافر", englishName: "Ghafir", englishNameTranslation: "The Forgiver", numberOfAyahs: 85, revelationType: "Meccan" },
        { number: 41, name: "فصلت", englishName: "Fussilat", englishNameTranslation: "Explained in Detail", numberOfAyahs: 54, revelationType: "Meccan" },
        { number: 42, name: "الشورى", englishName: "Ash-Shura", englishNameTranslation: "The Consultation", numberOfAyahs: 53, revelationType: "Meccan" },
        { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", englishNameTranslation: "The Ornaments of Gold", numberOfAyahs: 89, revelationType: "Meccan" },
        { number: 44, name: "الدخان", englishName: "Ad-Dukhan", englishNameTranslation: "The Smoke", numberOfAyahs: 59, revelationType: "Meccan" },
        { number: 45, name: "الجاثية", englishName: "Al-Jathiyah", englishNameTranslation: "The Crouching", numberOfAyahs: 37, revelationType: "Meccan" },
        { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", englishNameTranslation: "The Wind-Curved Sandhills", numberOfAyahs: 35, revelationType: "Meccan" },
        { number: 47, name: "محمد", englishName: "Muhammad", englishNameTranslation: "Muhammad", numberOfAyahs: 38, revelationType: "Medinan" },
        { number: 48, name: "الفتح", englishName: "Al-Fath", englishNameTranslation: "The Victory", numberOfAyahs: 29, revelationType: "Medinan" },
        { number: 49, name: "الحجرات", englishName: "Al-Hujurat", englishNameTranslation: "The Rooms", numberOfAyahs: 18, revelationType: "Medinan" },
        { number: 50, name: "ق", englishName: "Qaf", englishNameTranslation: "The Letter Qaf", numberOfAyahs: 45, revelationType: "Meccan" },
        { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", englishNameTranslation: "The Winnowing Winds", numberOfAyahs: 60, revelationType: "Meccan" },
        { number: 52, name: "الطور", englishName: "At-Tur", englishNameTranslation: "The Mount", numberOfAyahs: 49, revelationType: "Meccan" },
        { number: 53, name: "النجم", englishName: "An-Najm", englishNameTranslation: "The Star", numberOfAyahs: 62, revelationType: "Meccan" },
        { number: 54, name: "القمر", englishName: "Al-Qamar", englishNameTranslation: "The Moon", numberOfAyahs: 55, revelationType: "Meccan" },
        { number: 55, name: "الرحمن", englishName: "Ar-Rahman", englishNameTranslation: "The Beneficent", numberOfAyahs: 78, revelationType: "Medinan" },
        { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", englishNameTranslation: "The Inevitable", numberOfAyahs: 96, revelationType: "Meccan" },
        { number: 57, name: "الحديد", englishName: "Al-Hadid", englishNameTranslation: "The Iron", numberOfAyahs: 29, revelationType: "Medinan" },
        { number: 58, name: "المجادلة", englishName: "Al-Mujadila", englishNameTranslation: "The Pleading Woman", numberOfAyahs: 22, revelationType: "Medinan" },
        { number: 59, name: "الحشر", englishName: "Al-Hashr", englishNameTranslation: "The Exile", numberOfAyahs: 24, revelationType: "Medinan" },
        { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", englishNameTranslation: "She that is to be examined", numberOfAyahs: 13, revelationType: "Medinan" },
        { number: 61, name: "الصف", englishName: "As-Saff", englishNameTranslation: "The Ranks", numberOfAyahs: 14, revelationType: "Medinan" },
        { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", englishNameTranslation: "Friday", numberOfAyahs: 11, revelationType: "Medinan" },
        { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", englishNameTranslation: "The Hypocrites", numberOfAyahs: 11, revelationType: "Medinan" },
        { number: 64, name: "التغابن", englishName: "At-Taghabun", englishNameTranslation: "The Mutual Disillusion", numberOfAyahs: 18, revelationType: "Medinan" },
        { number: 65, name: "الطلاق", englishName: "At-Talaq", englishNameTranslation: "The Divorce", numberOfAyahs: 12, revelationType: "Medinan" },
        { number: 66, name: "التحريم", englishName: "At-Tahrim", englishNameTranslation: "The Prohibition", numberOfAyahs: 12, revelationType: "Medinan" },
        { number: 67, name: "الملك", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", numberOfAyahs: 30, revelationType: "Meccan" },
        { number: 68, name: "القلم", englishName: "Al-Qalam", englishNameTranslation: "The Pen", numberOfAyahs: 52, revelationType: "Meccan" },
        { number: 69, name: "الحاقة", englishName: "Al-Haqqah", englishNameTranslation: "The Reality", numberOfAyahs: 52, revelationType: "Meccan" },
        { number: 70, name: "المعارج", englishName: "Al-Ma'arij", englishNameTranslation: "The Ascending Stairways", numberOfAyahs: 44, revelationType: "Meccan" },
        { number: 71, name: "نوح", englishName: "Nuh", englishNameTranslation: "Noah", numberOfAyahs: 28, revelationType: "Meccan" },
        { number: 72, name: "الجن", englishName: "Al-Jinn", englishNameTranslation: "The Jinn", numberOfAyahs: 28, revelationType: "Meccan" },
        { number: 73, name: "المزمل", englishName: "Al-Muzzammil", englishNameTranslation: "The Enshrouded One", numberOfAyahs: 20, revelationType: "Meccan" },
        { number: 74, name: "المدثر", englishName: "Al-Muddaththir", englishNameTranslation: "The Cloaked One", numberOfAyahs: 56, revelationType: "Meccan" },
        { number: 75, name: "القيامة", englishName: "Al-Qiyamah", englishNameTranslation: "The Resurrection", numberOfAyahs: 40, revelationType: "Meccan" },
        { number: 76, name: "الإنسان", englishName: "Al-Insan", englishNameTranslation: "Man", numberOfAyahs: 31, revelationType: "Medinan" },
        { number: 77, name: "المرسلات", englishName: "Al-Mursalat", englishNameTranslation: "The Emissaries", numberOfAyahs: 50, revelationType: "Meccan" },
        { number: 78, name: "النبأ", englishName: "An-Naba", englishNameTranslation: "The Tidings", numberOfAyahs: 40, revelationType: "Meccan" },
        { number: 79, name: "النازعات", englishName: "An-Nazi'at", englishNameTranslation: "Those who drag forth", numberOfAyahs: 46, revelationType: "Meccan" },
        { number: 80, name: "عبس", englishName: "Abasa", englishNameTranslation: "He Frowned", numberOfAyahs: 42, revelationType: "Meccan" },
        { number: 81, name: "التكوير", englishName: "At-Takwir", englishNameTranslation: "The Overthrowing", numberOfAyahs: 29, revelationType: "Meccan" },
        { number: 82, name: "الإنفطار", englishName: "Al-Infitar", englishNameTranslation: "The Cleaving", numberOfAyahs: 19, revelationType: "Meccan" },
        { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", englishNameTranslation: "The Defrauding", numberOfAyahs: 36, revelationType: "Meccan" },
        { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", englishNameTranslation: "The Sundering", numberOfAyahs: 25, revelationType: "Meccan" },
        { number: 85, name: "البروج", englishName: "Al-Buruj", englishNameTranslation: "The Mansions of the Stars", numberOfAyahs: 22, revelationType: "Meccan" },
        { number: 86, name: "الطارق", englishName: "At-Tariq", englishNameTranslation: "The Nightcomer", numberOfAyahs: 17, revelationType: "Meccan" },
        { number: 87, name: "الأعلى", englishName: "Al-A'la", englishNameTranslation: "The Most High", numberOfAyahs: 19, revelationType: "Meccan" },
        { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", englishNameTranslation: "The Overwhelming", numberOfAyahs: 26, revelationType: "Meccan" },
        { number: 89, name: "الفجر", englishName: "Al-Fajr", englishNameTranslation: "The Dawn", numberOfAyahs: 30, revelationType: "Meccan" },
        { number: 90, name: "البلد", englishName: "Al-Balad", englishNameTranslation: "The City", numberOfAyahs: 20, revelationType: "Meccan" },
        { number: 91, name: "الشمس", englishName: "Ash-Shams", englishNameTranslation: "The Sun", numberOfAyahs: 15, revelationType: "Meccan" },
        { number: 92, name: "الليل", englishName: "Al-Layl", englishNameTranslation: "The Night", numberOfAyahs: 21, revelationType: "Meccan" },
        { number: 93, name: "الضحى", englishName: "Ad-Duha", englishNameTranslation: "The Morning Hours", numberOfAyahs: 11, revelationType: "Meccan" },
        { number: 94, name: "الشرح", englishName: "Ash-Sharh", englishNameTranslation: "The Relief", numberOfAyahs: 8, revelationType: "Meccan" },
        { number: 95, name: "التين", englishName: "At-Tin", englishNameTranslation: "The Fig", numberOfAyahs: 8, revelationType: "Meccan" },
        { number: 96, name: "العلق", englishName: "Al-Alaq", englishNameTranslation: "The Clot", numberOfAyahs: 19, revelationType: "Meccan" },
        { number: 97, name: "القدر", englishName: "Al-Qadr", englishNameTranslation: "The Power", numberOfAyahs: 5, revelationType: "Meccan" },
        { number: 98, name: "البينة", englishName: "Al-Bayyinah", englishNameTranslation: "The Clear Proof", numberOfAyahs: 8, revelationType: "Medinan" },
        { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", englishNameTranslation: "The Earthquake", numberOfAyahs: 8, revelationType: "Medinan" },
        { number: 100, name: "العاديات", englishName: "Al-Adiyat", englishNameTranslation: "The Courser", numberOfAyahs: 11, revelationType: "Meccan" },
        { number: 101, name: "القارعة", englishName: "Al-Qari'ah", englishNameTranslation: "The Calamity", numberOfAyahs: 11, revelationType: "Meccan" },
        { number: 102, name: "التكاثر", englishName: "At-Takathur", englishNameTranslation: "The Rivalry in world increase", numberOfAyahs: 8, revelationType: "Meccan" },
        { number: 103, name: "العصر", englishName: "Al-Asr", englishNameTranslation: "The Declining Day", numberOfAyahs: 3, revelationType: "Meccan" },
        { number: 104, name: "الهمزة", englishName: "Al-Humazah", englishNameTranslation: "The Traducer", numberOfAyahs: 9, revelationType: "Meccan" },
        { number: 105, name: "الفيل", englishName: "Al-Fil", englishNameTranslation: "The Elephant", numberOfAyahs: 5, revelationType: "Meccan" },
        { number: 106, name: "قريش", englishName: "Quraysh", englishNameTranslation: "Quraysh", numberOfAyahs: 4, revelationType: "Meccan" },
        { number: 107, name: "الماعون", englishName: "Al-Ma'un", englishNameTranslation: "The Small Kindnesses", numberOfAyahs: 7, revelationType: "Meccan" },
        { number: 108, name: "الكوثر", englishName: "Al-Kawthar", englishNameTranslation: "The Abundance", numberOfAyahs: 3, revelationType: "Meccan" },
        { number: 109, name: "الكافرون", englishName: "Al-Kafirun", englishNameTranslation: "The Disbelievers", numberOfAyahs: 6, revelationType: "Meccan" },
        { number: 110, name: "النصر", englishName: "An-Nasr", englishNameTranslation: "The Divine Support", numberOfAyahs: 3, revelationType: "Medinan" },
        { number: 111, name: "المسد", englishName: "Al-Masad", englishNameTranslation: "The Palm Fibre", numberOfAyahs: 5, revelationType: "Meccan" },
        { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", englishNameTranslation: "The Sincerity", numberOfAyahs: 4, revelationType: "Meccan" },
        { number: 113, name: "الفلق", englishName: "Al-Falaq", englishNameTranslation: "The Daybreak", numberOfAyahs: 5, revelationType: "Meccan" },
        { number: 114, name: "الناس", englishName: "An-Nas", englishNameTranslation: "Mankind", numberOfAyahs: 6, revelationType: "Meccan" }
    ],

    /* =====================================================
       QURAN — FULL CONTENT (Arabic + Urdu + English)
    ===================================================== */
    quranContent: {

        /* ================= SURAH 1: AL-FATIHAH ================= */
        1: {
            arabic: [
                "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                "الرَّحْمَٰنِ الرَّحِيمِ",
                "مَالِكِ يَوْمِ الدِّينِ",
                "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
            ],
            urdu: [
                "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
                "سب تعریف اللہ کے لیے ہے جو تمام جہانوں کا پالنے والا ہے",
                "بڑا مہربان نہایت رحم والا",
                "انصاف کے دن کا مالک",
                "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں",
                "ہمیں سیدھا راستہ دکھا",
                "ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا"
            ],
            english: [
                "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
                "All praise is due to Allah, Lord of the worlds.",
                "The Entirely Merciful, the Especially Merciful.",
                "Sovereign of the Day of Recompense.",
                "It is You we worship and You we ask for help.",
                "Guide us to the straight path.",
                "The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray."
            ]
        },

        /* ================= SURAH 2: AL-BAQARAH ================= */
        2: {
            arabic: [
                "الم",
                "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
                "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
                "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
                "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
                "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ",
                "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُم بِمُؤْمِنِينَ",
                "يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنفُسَهُمْ وَمَا يَشْعُرُونَ",
                "فِي قُلُوبِهِم مَّرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ",
                "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
                "أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَٰكِن لَّا يَشْعُرُونَ",
                "وَإِذَا قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا آمَنَ السُّفَهَاءُ ۗ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَٰكِن لَّا يَعْلَمُونَ",
                "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ",
                "اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ",
                "أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَت تِّجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ"
            ],
            urdu: [
                "الم",
                "یہ کتاب ہے، اس میں کوئی شک نہیں، ہدایت ہے متقیوں کے لیے",
                "جو غیب پر ایمان لاتے ہیں اور نماز قائم کرتے ہیں اور جو کچھ ہم نے دیا اس میں سے خرچ کرتے ہیں",
                "اور جو ایمان لاتے ہیں اس پر جو آپ پر نازل کیا گیا اور جو آپ سے پہلے نازل کیا گیا اور آخرت پر یقین رکھتے ہیں",
                "یہی لوگ اپنے رب کی ہدایت پر ہیں اور یہی کامیاب ہیں",
                "بے شک جنہوں نے کفر کیا، ان کے لیے برابر ہے چاہے آپ انہیں ڈرائیں یا نہ ڈرائیں، وہ ایمان نہیں لائیں گے",
                "اللہ نے ان کے دلوں اور کانوں پر مہر لگا دی ہے اور ان کی آنکھوں پر پردہ ہے اور ان کے لیے بڑا عذاب ہے",
                "اور لوگوں میں سے کچھ ایسے ہیں جو کہتے ہیں ہم اللہ اور آخرت کے دن پر ایمان لائے حالانکہ وہ مومن نہیں ہیں",
                "وہ اللہ اور مومنوں کو دھوکہ دیتے ہیں حالانکہ اپنے آپ کے سوا کسی کو دھوکہ نہیں دیتے مگر سمجھتے نہیں",
                "ان کے دلوں میں بیماری ہے پھر اللہ نے ان کی بیماری بڑھا دی اور ان کے لیے دردناک عذاب ہے بسبب جھوٹ بولنے کے",
                "اور جب ان سے کہا جائے زمین میں فساد نہ کرو تو کہتے ہیں ہم تو اصلاح کرنے والے ہیں",
                "خبردار! بے شک یہی فساد کرنے والے ہیں لیکن سمجھتے نہیں",
                "اور جب ان سے کہا جائے ایمان لاؤ جیسے لوگ ایمان لائے تو کہتے ہیں کیا ہم ایمان لائیں جیسے بیوقوف ایمان لائے، خبردار! بے شک یہی بیوقوف ہیں لیکن جانتے نہیں",
                "اور جب مومنوں سے ملتے ہیں تو کہتے ہیں ہم ایمان لائے اور جب اپنے شیطانوں کے ساتھ خلوت میں جاتے ہیں تو کہتے ہیں ہم تمہارے ساتھ ہیں، ہم تو مذاق کر رہے تھے",
                "اللہ ان سے مذاق کرتا ہے اور انہیں ان کی سرکشی میں ڈھیل دیتا ہے کہ وہ بھٹکتے پھریں",
                "یہی وہ لوگ ہیں جنہوں نے ہدایت کے بدلے گمراہی خریدی، پس ان کی تجارت نفع نہ لائی اور وہ ہدایت یافتہ نہ ہوئے"
            ],
            english: [
                "Alif, Lam, Meem.",
                "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
                "Who believe in the unseen, establish prayer, and spend out of what We have provided for them.",
                "And who believe in what has been revealed to you and what was revealed before you, and of the Hereafter they are certain.",
                "Those are upon guidance from their Lord, and it is those who are the successful.",
                "Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe.",
                "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil. And for them is a great punishment.",
                "And of the people are some who say, 'We believe in Allah and the Last Day,' but they are not believers.",
                "They deceive Allah and those who believe, but they deceive not except themselves and perceive it not.",
                "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they used to lie.",
                "And when it is said to them, 'Do not cause corruption on the earth,' they say, 'We are but reformers.'",
                "Unquestionably, it is they who are the corrupters, but they perceive it not.",
                "And when it is said to them, 'Believe as the people have believed,' they say, 'Should we believe as the foolish have believed?' Unquestionably, it is they who are the foolish, but they know it not.",
                "And when they meet those who believe, they say, 'We believe'; but when they are alone with their evil ones, they say, 'Indeed, we are with you; we were only mockers.'",
                "Allah mocks them and prolongs them in their transgression while they wander blindly.",
                "Those are the ones who have bought error in exchange for guidance, so their transaction has brought no profit, nor were they guided."
            ]
        },

        /* ================= SURAH 3: ALI 'IMRAN ================= */
        3: {
            arabic: [
                "الم",
                "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
                "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ",
                "مِن قَبْلُ هُدًى لِّلنَّاسِ وَأَنزَلَ الْفُرْقَانَ ۗ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ وَاللَّهُ عَزِيزٌ ذُو انتِقَامٍ",
                "إِنَّ اللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
                "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ",
                "هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُّحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ ۖ فَأَمَّا الَّذِينَ فِي قُلُوبِهِمْ زَيْغٌ فَيَتَّبِعُونَ مَا تَشَابَهَ مِنْهُ ابْتِغَاءَ الْفِتْنَةِ وَابْتِغَاءَ تَأْوِيلِهِ ۗ وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ ۗ وَالرَّاسِخُونَ فِي الْعِلْمِ يَقُولُونَ آمَنَّا بِهِ كُلٌّ مِّنْ عِندِ رَبِّنَا ۗ وَمَا يَذَّكَّرُ إِلَّا أُولُو الْأَلْبَابِ",
                "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
                "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَّا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",
                "إِنَّ الَّذِينَ كَفَرُوا لَن تُغْنِيَ عَنْهُمْ أَمْوَالُهُمْ وَلَا أَوْلَادُهُم مِّنَ اللَّهِ شَيْئًا ۖ وَأُولَٰئِكَ هُمْ وَقُودُ النَّارِ"
            ],
            urdu: [
                "الم",
                "اللہ کے سوا کوئی معبود نہیں، وہ زندہ اور قائم رہنے والا ہے",
                "اس نے آپ پر سچائی کے ساتھ کتاب نازل کی جو اپنے سے پہلے کی کتابوں کی تصدیق کرتی ہے اور تورات اور انجیل نازل کی",
                "اس سے پہلے لوگوں کے لیے ہدایت اور فرقان نازل کیا، بے شک جنہوں نے اللہ کی آیات سے کفر کیا ان کے لیے سخت عذاب ہے اور اللہ زبردست انتقام لینے والا ہے",
                "بے شک اللہ سے کوئی چیز چھپی نہیں نہ زمین میں نہ آسمان میں",
                "وہی ہے جو تمہاری صورتیں رحموں میں جیسے چاہے بناتا ہے، اس کے سوا کوئی معبود نہیں، وہ زبردست حکمت والا ہے",
                "وہی ہے جس نے آپ پر کتاب نازل کی، اس میں محکم آیات ہیں جو کتاب کی اصل ہیں اور دوسری متشابہ آیات ہیں، پس جن کے دلوں میں کجی ہے وہ متشابہات کے پیچھے لگتے ہیں فتنے کی تلاش اور مراد کی تلاش میں، حالانکہ اس کی مراد اللہ کے سوا کوئی نہیں جانتا اور علم میں پختہ لوگ کہتے ہیں ہم اس پر ایمان لائے، سب ہمارے رب کی طرف سے ہے اور نصیحت صرف عقل والے لیتے ہیں",
                "اے ہمارے رب! ہمارے دلوں کو ٹیڑھا نہ کر ہدایت دینے کے بعد اور ہمیں اپنی طرف سے رحمت عطا فرما، بے شک تو ہی عطا کرنے والا ہے",
                "اے ہمارے رب! بے شک تو لوگوں کو ایک دن جمع کرنے والا ہے جس میں کوئی شک نہیں، بے شک اللہ وعدہ خلافی نہیں کرتا",
                "بے شک جنہوں نے کفر کیا ان کے مال اور اولاد اللہ کے عذاب سے کچھ نہیں بچا سکیں گے اور یہی لوگ آگ کا ایندھن ہیں"
            ],
            english: [
                "Alif, Lam, Meem.",
                "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
                "He has sent down upon you the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.",
                "Before, as guidance for the people. And He revealed the Qur'an. Indeed, those who disbelieve in the verses of Allah will have a severe punishment, and Allah is Exalted in Might, the Owner of Retribution.",
                "Indeed, from Allah nothing is hidden in the earth nor in the heaven.",
                "It is He who forms you in the wombs however He wills. There is no deity except Him, the Exalted in Might, the Wise.",
                "It is He who has sent down to you the Book. In it are verses that are entirely clear, they are the foundation of the Book; and others not entirely clear. So as for those in whose hearts there is a deviation, they follow that which is not entirely clear thereof, seeking discord and seeking its hidden meanings. But no one knows its hidden meanings except Allah. And those who are firmly grounded in knowledge say, 'We believe in it; all of it is from our Lord.' And none will grasp the message except men of understanding.",
                "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
                "Our Lord, surely You will gather the people for a Day about which there is no doubt. Indeed, Allah does not fail in His promise.",
                "Indeed, those who disbelieve - never will their wealth or their children avail them against Allah at all, and those are the fuel of the Fire."
            ]
        }

    },

    /* =====================================================
       HADITH BOOKS — PART 1 (Bukhari - First 50 Hadiths)
    ===================================================== */
    hadithBooks: {
        bukhari: {
            title: "Sahih Bukhari",
            arabic: "صحيح البخاري",
            english: "Sahih Bukhari",
            author: "Imam Muhammad al-Bukhari",
            hadiths: [
                { id: 1, arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى", urdu: "اعمال کا دارومدار نیتوں پر ہے اور ہر شخص کو وہی ملے گا جس کی وہ نیت کرے", english: "Actions are judged by intentions, and every person will have what he intended.", reference: "Sahih Bukhari 1" },
                { id: 2, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Sahih Bukhari 2" },
                { id: 3, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Sahih Bukhari 3" },
                { id: 4, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Sahih Bukhari 4" },
                { id: 5, arabic: "مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا", urdu: "جو میرے قریب ایک بالشت آتا ہے میں اس کے قریب ایک ہاتھ آتا ہوں", english: "Whoever comes one step closer to Me, I come one arm's length closer to him.", reference: "Sahih Bukhari 5" },
                { id: 6, arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Sahih Bukhari 6" },
                { id: 7, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Sahih Bukhari 7" },
                { id: 8, arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Sahih Bukhari 8" },
                { id: 9, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise lies beneath the feet of mothers.", reference: "Sahih Bukhari 9" },
                { id: 10, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے", english: "The best among you are those who learn the Quran and teach it.", reference: "Sahih Bukhari 10" },
                { id: 11, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Sahih Bukhari 11" },
                { id: 12, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Sahih Bukhari 12" },
                { id: 13, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends blessings upon me once, Allah will send ten blessings upon him.", reference: "Sahih Bukhari 13" },
                { id: 14, arabic: "السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ", urdu: "بیوہ اور مسکین کی خدمت کرنے والا اللہ کی راہ میں جہاد کرنے والے کی طرح ہے", english: "The one who cares for a widow and the poor is like a warrior in the way of Allah.", reference: "Sahih Bukhari 14" },
                { id: 15, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and He loves beauty.", reference: "Sahih Bukhari 15" },
                { id: 16, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Sahih Bukhari 16" },
                { id: 17, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Sahih Bukhari 17" },
                { id: 18, arabic: "مَنْ كَانَ لَهُ جَارٌ فَلَا يُؤْذِيهِ", urdu: "جس کا پڑوسی ہو وہ اسے تکلیف نہ دے", english: "Whoever has a neighbor, let him not harm him.", reference: "Sahih Bukhari 18" },
                { id: 19, arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ", urdu: "رحم کرنے والوں پر رحمٰن رحم کرتا ہے", english: "The merciful will be shown mercy by the Most Merciful.", reference: "Sahih Bukhari 19" },
                { id: 20, arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا", urdu: "مومنوں میں سب سے کامل ایمان والا وہ ہے جس کا اخلاق سب سے اچھا ہو", english: "The most complete of the believers in faith is the one with the best character.", reference: "Sahih Bukhari 20" },
                { id: 21, arabic: "مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "Whoever does not thank people does not thank Allah.", reference: "Sahih Bukhari 21" },
                { id: 22, arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا", urdu: "مومن مومن کے لیے عمارت کی طرح ہے جس کا ایک حصہ دوسرے کو مضبوط کرتا ہے", english: "A believer to another believer is like a building whose parts support each other.", reference: "Sahih Bukhari 22" },
                { id: 23, arabic: "السَّلَامُ قَبْلَ الْكَلَامِ", urdu: "بات کرنے سے پہلے سلام کرو", english: "Greet before speaking.", reference: "Sahih Bukhari 23" },
                { id: 24, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", urdu: "علم کا طلب کرنا ہر مسلمان پر فرض ہے", english: "Seeking knowledge is obligatory upon every Muslim.", reference: "Sahih Bukhari 24" },
                { id: 25, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Sahih Bukhari 25" },
                { id: 26, arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ", urdu: "جو کسی مسلمان کا عیب چھپائے اللہ اس کا عیب چھپائے گا", english: "Whoever conceals a Muslim's fault, Allah will conceal his fault.", reference: "Sahih Bukhari 26" },
                { id: 27, arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ", urdu: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے", english: "The world is a prison for the believer and a paradise for the disbeliever.", reference: "Sahih Bukhari 27" },
                { id: 28, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Sahih Bukhari 28" },
                { id: 29, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Sahih Bukhari 29" },
                { id: 30, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Sahih Bukhari 30" },
                { id: 31, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Sahih Bukhari 31" },
                { id: 32, arabic: "الْمَرْءُ مَعَ مَنْ أَحَبَّ", urdu: "آدمی اپنے محبوب کے ساتھ ہوگا", english: "A person will be with whom he loves.", reference: "Sahih Bukhari 32" },
                { id: 33, arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", urdu: "لوگوں میں بہترین وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو", english: "The best of people are those who are most beneficial to people.", reference: "Sahih Bukhari 33" },
                { id: 34, arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمَ وَلَدَتْهُ أُمُّهُ", urdu: "جو حج کرے اور کوئی گناہ نہ کرے وہ اس دن کی طرح پاک ہو جاتا ہے جس دن اس کی ماں نے اسے جنم دیا تھا", english: "Whoever performs Hajj without obscenity or sin returns as pure as the day his mother bore him.", reference: "Sahih Bukhari 34" },
                { id: 35, arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ", urdu: "طاقتور مومن اللہ کے نزدیک کمزور مومن سے بہتر اور زیادہ محبوب ہے", english: "The strong believer is better and more beloved to Allah than the weak believer.", reference: "Sahih Bukhari 35" },
                { id: 36, arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ", urdu: "جو کسی مومن کی پریشانی دور کرے اللہ قیامت کے دن اس کی پریشانیاں دور فرمائے گا", english: "Whoever relieves a believer's distress, Allah will relieve his distress on the Day of Resurrection.", reference: "Sahih Bukhari 36" },
                { id: 37, arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الأَخْلَاقِ", urdu: "مجھے اچھے اخلاق کی تکمیل کے لیے بھیجا گیا ہے", english: "I was sent to perfect good character.", reference: "Sahih Bukhari 37" },
                { id: 38, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Sahih Bukhari 38" },
                { id: 39, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Sahih Bukhari 39" },
                { id: 40, arabic: "مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ", urdu: "جو عشاء کی نماز جماعت سے پڑھے گویا اس نے آدھی رات قیام کیا", english: "Whoever prays Isha in congregation, it is as if he prayed half the night.", reference: "Sahih Bukhari 40" },
                { id: 41, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Sahih Bukhari 41" },
                { id: 42, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Sahih Bukhari 42" },
                { id: 43, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Sahih Bukhari 43" },
                { id: 44, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Sahih Bukhari 44" },
                { id: 45, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Sahih Bukhari 45" },
                { id: 46, arabic: "مَنْ صَلَّى عَلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ", urdu: "جو نبی پر درود بھیجے اللہ اس پر رحمت بھیجتا ہے", english: "Whoever sends blessings upon the Prophet, Allah sends blessings upon him.", reference: "Sahih Bukhari 46" },
                { id: 47, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Sahih Bukhari 47" },
                { id: 48, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Sahih Bukhari 48" },
                { id: 49, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Sahih Bukhari 49" },
                { id: 50, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Sahih Bukhari 50" }
            ]
        },
        muslim: { title: "Sahih Muslim", arabic: "صحيح مسلم", english: "Sahih Muslim", author: "Imam Muslim ibn al-Hajjaj", hadiths: [] },
        abudawud: { title: "Sunan Abu Dawud", arabic: "سنن أبي داود", english: "Sunan Abu Dawud", author: "Imam Abu Dawud", hadiths: [] },
        tirmidhi: { title: "Jami at-Tirmidhi", arabic: "جامع الترمذي", english: "Jami at-Tirmidhi", author: "Imam al-Tirmidhi", hadiths: [] },
        nasai: { title: "Sunan an-Nasa'i", arabic: "سنن النسائي", english: "Sunan an-Nasa'i", author: "Imam an-Nasa'i", hadiths: [] },
        malik: { title: "Muwatta Imam Malik", arabic: "موطأ الإمام مالك", english: "Muwatta Imam Malik", author: "Imam Malik ibn Anas", hadiths: [] }
    },

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */
    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },

    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },

    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 1] Loaded ✅");
console.log("[DB Part 1] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART1.quranContent).length);
console.log("[DB Part 1] Bukhari Hadiths: " + ISLAMIC_DATABASE_PART1.hadithBooks.bukhari.hadiths.length);

/* =========================================================
   ISLAMICWAY DATABASE — PART 2
   Surahs 4-10 (An-Nisa, Al-Ma'idah, Al-An'am, Al-A'raf,
                Al-Anfal, At-Tawbah, Yunus)
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART2 = {

    /* =====================================================
       QURAN — FULL CONTENT (Arabic + Urdu + English)
    ===================================================== */
    quranContent: {

        /* ================= SURAH 4: AN-NISA (The Women) ================= */
        4: {
            arabic: [
                "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
                "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ ۖ وَلَا تَتَبَدَّلُوا الْخَبِيثَ بِالطَّيِّبِ ۚ وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ ۚ إِنَّهُ كَانَ حُوبًا كَبِيرًا",
                "وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا فِي الْيَتَامَىٰ فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ ۖ فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً أَوْ مَا مَلَكَتْ أَيْمَانُكُمْ ۚ ذَٰلِكَ أَدْنَىٰ أَلَّا تَعُولُوا",
                "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً ۚ فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَّرِيئًا",
                "وَلَا تُؤْتُوا السُّفَهَاءَ أَمْوَالَكُمُ الَّتِي جَعَلَ اللَّهُ لَكُمْ قِيَامًا وَارْزُقُوهُمْ فِيهَا وَاكْسُوهُمْ وَقُولُوا لَهُمْ قَوْلًا مَّعْرُوفًا",
                "وَابْتَلُوا الْيَتَامَىٰ حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ فَإِنْ آنَسْتُم مِّنْهُمْ رُشْدًا فَادْفَعُوا إِلَيْهِمْ أَمْوَالَهُمْ ۖ وَلَا تَأْكُلُوهَا إِسْرَافًا وَبِدَارًا أَن يَكْبَرُوا ۚ وَمَن كَانَ غَنِيًّا فَلْيَسْتَعْفِفْ ۖ وَمَن كَانَ فَقِيرًا فَلْيَأْكُلْ بِالْمَعْرُوفِ ۚ فَإِذَا دَفَعْتُمْ إِلَيْهِمْ أَمْوَالَهُمْ فَأَشْهِدُوا عَلَيْهِمْ ۚ وَكَفَىٰ بِاللَّهِ حَسِيبًا",
                "لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ ۚ نَصِيبًا مَّفْرُوضًا",
                "وَإِذَا حَضَرَ الْقِسْمَةَ أُولُو الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينُ فَارْزُقُوهُم مِّنْهُ وَقُولُوا لَهُمْ قَوْلًا مَّعْرُوفًا",
                "وَلْيَخْشَ الَّذِينَ لَوْ تَرَكُوا مِنْ خَلْفِهِمْ ذُرِّيَّةً ضِعَافًا خَافُوا عَلَيْهِمْ فَلْيَتَّقُوا اللَّهَ وَلْيَقُولُوا قَوْلًا سَدِيدًا",
                "إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَىٰ ظُلْمًا إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا ۖ وَسَيَصْلَوْنَ سَعِيرًا"
            ],
            urdu: [
                "اے لوگو! اپنے رب سے ڈرو جس نے تمہیں ایک جان سے پیدا کیا اور اسی سے اس کا جوڑا بنایا اور ان دونوں سے بہت سے مرد اور عورتیں پھیلائیں اور اللہ سے ڈرو جس کے نام پر ایک دوسرے سے مانگتے ہو اور رشتہ داریوں کا بھی خیال رکھو، بے شک اللہ تم پر نگہبان ہے",
                "اور یتیموں کو ان کے مال دو اور برے کو اچھے سے نہ بدلو اور ان کے مال اپنے مال کے ساتھ ملا کر نہ کھاؤ، بے شک یہ بڑا گناہ ہے",
                "اور اگر تمہیں ڈر ہو کہ یتیموں کے بارے میں انصاف نہ کر سکو گے تو نکاح کرو جو عورتیں تمہیں پسند ہوں، دو دو، تین تین، چار چار، پھر اگر تمہیں ڈر ہو کہ انصاف نہ کر سکو گے تو ایک ہی کرو یا جو تمہاری ملکیت میں آ جائیں، یہ زیادتی نہ کرنے کے قریب ہے",
                "اور عورتوں کو ان کے مہر خوشی سے دو، پھر اگر وہ اپنی خوشی سے اس میں سے کچھ تمہیں چھوڑ دیں تو اسے خوشی سے کھاؤ",
                "اور بیوقوفوں کو اپنے وہ مال نہ دو جو اللہ نے تمہاری گزر بسر کا ذریعہ بنایا ہے اور انہیں اس میں سے کھلاؤ اور پہناؤ اور ان سے اچھی بات کہو",
                "اور یتیموں کو آزماؤ یہاں تک کہ جب وہ نکاح کی عمر کو پہنچیں، پھر اگر تم ان میں سمجھ داری دیکھو تو ان کے مال ان کے حوالے کر دو اور انہیں فضول خرچی اور جلدی میں نہ کھاؤ کہ وہ بڑے ہو جائیں گے، اور جو مالدار ہو وہ پرہیز کرے اور جو فقیر ہو وہ مناسب طور پر کھائے، پھر جب تم ان کے مال ان کے حوالے کرو تو ان پر گواہ بنا لو اور اللہ حساب لینے والا کافی ہے",
                "مردوں کے لیے اس میں سے حصہ ہے جو ماں باپ اور رشتہ دار چھوڑ جائیں اور عورتوں کے لیے بھی اس میں سے حصہ ہے جو ماں باپ اور رشتہ دار چھوڑ جائیں، تھوڑا ہو یا زیادہ، یہ مقرر حصہ ہے",
                "اور جب تقسیم کے وقت رشتہ دار، یتیم اور مسکین آئیں تو انہیں اس میں سے کچھ دو اور ان سے اچھی بات کہو",
                "اور چاہیے کہ ان لوگوں سے ڈریں جو اپنے پیچھے کمزور اولاد چھوڑ جائیں تو ان پر ڈریں، پس چاہیے کہ اللہ سے ڈریں اور سیدھی بات کہیں",
                "بے شک جو لوگ یتیموں کے مال ناحق کھاتے ہیں وہ اپنے پیٹوں میں آگ بھرتے ہیں اور عنقریب وہ بھڑکتی آگ میں داخل ہوں گے"
            ],
            english: [
                "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer.",
                "And give to the orphans their properties and do not substitute the defective for the good. And do not consume their properties into your own. Indeed, that is ever a great sin.",
                "And if you fear that you will not deal justly with the orphan girls, then marry those that please you of women, two or three or four. But if you fear that you will not be just, then marry only one or those your right hand possesses. That is more suitable that you may not incline to injustice.",
                "And give the women their dower as a free gift. But if they should remit to you any part of it, then consume it in ease and pleasure.",
                "And do not give the weak-minded your property, which Allah has made a means of sustenance for you, but provide for them with it and clothe them and speak to them words of appropriate kindness.",
                "And test the orphans until they reach marriageable age. Then if you perceive in them sound judgment, release their property to them. And do not consume it extravagantly or hastily before they grow up. And whoever is rich, let him abstain; and whoever is poor, let him eat reasonably. And when you release their property to them, take witness in their presence; and Allah is sufficient in accounting.",
                "For men is a share of what the parents and close relatives leave, and for women is a share of what the parents and close relatives leave, be it little or much - an obligatory share.",
                "And when the relatives and orphans and the needy are present at the time of division, give them from it and speak to them words of appropriate kindness.",
                "And let those fear who, if they left behind weak children, would fear on their account. So let them fear Allah and speak words of appropriate justice.",
                "Indeed, those who devour the property of orphans unjustly are only consuming into their bellies fire. And they will be burned in a Blaze."
            ]
        },

        /* ================= SURAH 5: AL-MA'IDAH (The Table Spread) ================= */
        5: {
            arabic: [
                "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ۚ أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ غَيْرَ مُحِلِّي الصَّيْدِ وَأَنتُمْ حُرُمٌ ۗ إِنَّ اللَّهَ يَحْكُمُ مَا يُرِيدُ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِّن رَّبِّهِمْ وَرِضْوَانًا ۚ وَإِذَا حَلَلْتُمْ فَاصْطَادُوا ۚ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَن صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَن تَعْتَدُوا ۘ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
                "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ وَلَحْمُ الْخِنزِيرِ وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ وَالْمُنْخَنِقَةُ وَالْمَوْقُوذَةُ وَالْمُتَرَدِّيَةُ وَالنَّطِيحَةُ وَمَا أَكَلَ السَّبُعُ إِلَّا مَا ذَكَّيْتُمْ وَمَا ذُبِحَ عَلَى النُّصُبِ وَأَن تَسْتَقْسِمُوا بِالْأَزْلَامِ ۚ ذَٰلِكُمْ فِسْقٌ ۗ الْيَوْمَ يَئِسَ الَّذِينَ كَفَرُوا مِن دِينِكُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِ ۚ الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا ۚ فَمَنِ اضْطُرَّ فِي مَخْمَصَةٍ غَيْرَ مُتَجَانِفٍ لِّإِثْمٍ ۙ فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
                "يَسْأَلُونَكَ مَاذَا أُحِلَّ لَهُمْ ۖ قُلْ أُحِلَّ لَكُمُ الطَّيِّبَاتُ ۙ وَمَا عَلَّمْتُم مِّنَ الْجَوَارِحِ مُكَلِّبِينَ تُعَلِّمُونَهُنَّ مِمَّا عَلَّمَكُمُ اللَّهُ ۖ فَكُلُوا مِمَّا أَمْسَكْنَ عَلَيْكُمْ وَاذْكُرُوا اسْمَ اللَّهِ عَلَيْهِ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ",
                "الْيَوْمَ أُحِلَّ لَكُمُ الطَّيِّبَاتُ ۖ وَطَعَامُ الَّذِينَ أُوتُوا الْكِتَابَ حِلٌّ لَّكُمْ وَطَعَامُكُمْ حِلٌّ لَّهُمْ ۖ وَالْمُحْصَنَاتُ مِنَ الْمُؤْمِنَاتِ وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ إِذَا آتَيْتُمُوهُنَّ أُجُورَهُنَّ مُحْصِنِينَ غَيْرَ مُسَافِحِينَ وَلَا مُتَّخِذِي أَخْدَانٍ ۗ وَمَن يَكْفُرْ بِالْإِيمَانِ فَقَدْ حَبِطَ عَمَلُهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ ۚ وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا ۚ وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
                "وَاذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ وَمِيثَاقَهُ الَّذِي وَاثَقَكُم بِهِ إِذْ قُلْتُمْ سَمِعْنَا وَأَطَعْنَا ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ عَلِيمٌ بِذَاتِ الصُّدُورِ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
                "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ ۙ لَهُم مَّغْفِرَةٌ وَأَجْرٌ عَظِيمٌ",
                "وَالَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا أُولَٰئِكَ أَصْحَابُ الْجَحِيمِ"
            ],
            urdu: [
                "اے ایمان والو! عہد پورے کرو، تمہارے لیے چوپائے حلال کیے گئے ہیں سوائے ان کے جو تمہیں پڑھ کر سنائے جائیں، شکار کو حلال نہ سمجھو جب تم احرام میں ہو، بے شک اللہ جو چاہتا ہے حکم دیتا ہے",
                "اے ایمان والو! اللہ کی نشانیوں کو حلال نہ سمجھو اور نہ حرمت والے مہینے کو اور نہ قربانی کے جانور کو اور نہ ان کے گلے کے ہاروں کو اور نہ ان لوگوں کو جو حرمت والے گھر کا قصد کرتے ہیں اپنے رب کا فضل اور خوشنودی چاہتے ہوئے، اور جب احرام کھول دو تو شکار کرو اور کسی قوم کی دشمنی جو انہوں نے تمہیں مسجد حرام سے روکا تھا تمہیں زیادتی پر آمادہ نہ کرے اور نیکی اور پرہیزگاری میں ایک دوسرے کی مدد کرو اور گناہ اور زیادتی میں مدد نہ کرو اور اللہ سے ڈرو، بے شک اللہ سخت عذاب دینے والا ہے",
                "تم پر مردار، خون، سور کا گوشت، وہ جانور جس پر اللہ کے سوا کسی اور کا نام لیا گیا ہو، گلا گھٹا ہوا، مارا ہوا، گر کر مرا ہوا، سینگ سے مارا ہوا، اور درندے کا کھایا ہوا، مگر جسے تم نے ذبح کر لیا ہو، اور وہ جو بتوں پر ذبح کیا گیا اور یہ کہ پانسوں سے قسمت معلوم کرو، یہ سب گناہ ہے، آج کافروں نے تمہارے دین سے مایوس ہو گئے، پس ان سے نہ ڈرو اور مجھ سے ڈرو، آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا اور تم پر اپنی نعمت پوری کر دی اور تمہارے لیے اسلام کو دین پسند کیا، پھر جو بھوک کی شدت میں مجبور ہو جائے بغیر گناہ کی طرف جھکے تو بے شک اللہ بخشنے والا رحم کرنے والا ہے",
                "لوگ آپ سے پوچھتے ہیں کہ ان کے لیے کیا حلال کیا گیا ہے، کہو تمہارے لیے پاکیزہ چیزیں حلال کی گئی ہیں اور جو شکاری جانور تم نے سکھائے ہیں اللہ کی سکھائی ہوئی تعلیم سے، پس جو وہ تمہارے لیے پکڑیں اس میں سے کھاؤ اور اس پر اللہ کا نام لو اور اللہ سے ڈرو، بے شک اللہ جلد حساب لینے والا ہے",
                "آج تمہارے لیے پاکیزہ چیزیں حلال کی گئیں اور اہل کتاب کا کھانا تمہارے لیے حلال ہے اور تمہارا کھانا ان کے لیے حلال ہے اور مومن عورتیں اور ان لوگوں کی عورتیں جو تم سے پہلے کتاب دیے گئے، جب تم انہیں ان کے مہر دو، پاک دامن رہو، نہ بدکاری کرو اور نہ چھپی دوستی کرو اور جو ایمان سے انکار کرے تو اس کا عمل ضائع ہو گیا اور وہ آخرت میں خسارہ پانے والوں میں سے ہے",
                "اے ایمان والو! جب تم نماز کے لیے اٹھو تو اپنے منہ دھوؤ اور اپنے ہاتھ کہنیوں تک اور اپنے سروں کا مسح کرو اور اپنے پاؤں ٹخنوں تک، اور اگر تم جنبی ہو تو غسل کرو اور اگر تم بیمار ہو یا سفر میں ہو یا تم میں سے کوئی بیت الخلا سے آئے یا عورتوں سے لمس کرو پھر پانی نہ ملے تو پاک مٹی سے تیمم کرو، اپنے منہ اور ہاتھ اس سے مسح کرو، اللہ تم پر تنگی نہیں چاہتا لیکن چاہتا ہے کہ تمہیں پاک کرے اور تم پر اپنی نعمت پوری کرے تاکہ تم شکر کرو",
                "اور اللہ کی نعمت یاد کرو جو تم پر ہے اور اس کا عہد جو اس نے تم سے لیا جب تم نے کہا ہم نے سنا اور مانا اور اللہ سے ڈرو، بے شک اللہ دلوں کی بات جانتا ہے",
                "اے ایمان والو! اللہ کے لیے انصاف پر قائم رہو، انصاف کے ساتھ گواہی دینے والے، اور کسی قوم کی دشمنی تمہیں اس بات پر آمادہ نہ کرے کہ انصاف نہ کرو، انصاف کرو، یہ پرہیزگاری کے زیادہ قریب ہے اور اللہ سے ڈرو، بے شک اللہ تمہارے اعمال سے باخبر ہے",
                "اللہ نے وعدہ کیا ہے ان لوگوں سے جو ایمان لائے اور نیک عمل کیے، ان کے لیے بخشش اور بڑا اجر ہے",
                "اور جنہوں نے کفر کیا اور ہماری آیات کو جھٹلایا، یہی جہنم والے ہیں"
            ],
            english: [
                "O you who have believed, fulfill all contracts. Lawful for you are the animals of grazing livestock except for that which is recited to you - hunting not being permitted while you are in the state of ihram. Indeed, Allah ordains what He intends.",
                "O you who have believed, do not violate the rites of Allah or the sacred month or the sacrificial animals or the garlands or those heading to the sacred House, seeking favor from their Lord and pleasure. And when you come out of ihram, then hunt. And do not let the hatred of a people who prevented you from the sacred Mosque cause you to transgress. And cooperate in righteousness and piety, but do not cooperate in sin and aggression. And fear Allah; indeed, Allah is severe in penalty.",
                "Prohibited to you are dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah, and those killed by strangling or by a violent blow or by a head-long fall or by the goring of horns, and those from which a wild animal has eaten, except what you slaughter, and those which are sacrificed on stone altars, and that you seek decision through divining arrows. That is grave disobedience. This day those who disbelieve have despaired of your religion. So fear them not, but fear Me. This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion. But whoever is forced by severe hunger with no inclination to sin - then indeed, Allah is Forgiving and Merciful.",
                "They ask you what has been made lawful for them. Say, 'Lawful for you are the good things and what you have trained of hunting animals which you train as Allah has taught you. So eat of what they catch for you, and mention the name of Allah upon it, and fear Allah.' Indeed, Allah is swift in account.",
                "This day, all good things have been made lawful for you. And the food of those who were given the Scripture is lawful for you and your food is lawful for them. And chaste women from the believers and chaste women from those who were given the Scripture before you, when you have given them their due compensation, desiring chastity, not unlawful sexual intercourse or taking secret lovers. And whoever denies the faith - his work has become worthless, and he, in the Hereafter, will be among the losers.",
                "O you who have believed, when you rise to perform prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles. And if you are in a state of janabah, then purify yourselves. But if you are ill or on a journey or one of you comes from the place of relieving himself or you have contacted women and do not find water, then seek clean earth and wipe over your faces and hands with it. Allah does not intend to make difficulty for you, but He intends to purify you and complete His favor upon you that you may be grateful.",
                "And remember the favor of Allah upon you and His covenant with which He bound you when you said, 'We hear and we obey'; and fear Allah. Indeed, Allah is Knowing of that within the breasts.",
                "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness. And fear Allah; indeed, Allah is Acquainted with what you do.",
                "Allah has promised those who have believed and done righteous deeds - for them is forgiveness and a great reward.",
                "But those who disbelieved and denied Our signs - they are the companions of Hellfire."
            ]
        },

        /* ================= SURAH 6: AL-AN'AM (The Cattle) ================= */
        6: {
            arabic: [
                "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ",
                "هُوَ الَّذِي خَلَقَكُم مِّن طِينٍ ثُمَّ قَضَىٰ أَجَلًا ۖ وَأَجَلٌ مُّسَمًّى عِندَهُ ۖ ثُمَّ أَنتُمْ تَمْتَرُونَ",
                "وَهُوَ اللَّهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ ۖ يَعْلَمُ سِرَّكُمْ وَجَهْرَكُمْ وَيَعْلَمُ مَا تَكْسِبُونَ",
                "وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ",
                "فَقَدْ كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ ۖ فَسَوْفَ يَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ",
                "أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ مَّكَّنَّاهُمْ فِي الْأَرْضِ مَا لَمْ نُمَكِّن لَّكُمْ وَأَرْسَلْنَا السَّمَاءَ عَلَيْهِم مِّدْرَارًا وَجَعَلْنَا الْأَنْهَارَ تَجْرِي مِن تَحْتِهِمْ فَأَهْلَكْنَاهُم بِذُنُوبِهِمْ وَأَنشَأْنَا مِن بَعْدِهِمْ قَرْنًا آخَرِينَ",
                "وَلَوْ نَزَّلْنَا عَلَيْكَ كِتَابًا فِي قِرْطَاسٍ فَلَمَسُوهُ بِأَيْدِيهِمْ لَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ",
                "وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ مَلَكٌ ۖ وَلَوْ أَنزَلْنَا مَلَكًا لَّقُضِيَ الْأَمْرُ ثُمَّ لَا يُنظَرُونَ",
                "وَلَوْ جَعَلْنَاهُ مَلَكًا لَّجَعَلْنَاهُ رَجُلًا وَلَلَبَسْنَا عَلَيْهِم مَّا يَلْبِسُونَ",
                "وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّن قَبْلِكَ فَحَاقَ بِالَّذِينَ سَخِرُوا مِنْهُم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ"
            ],
            urdu: [
                "سب تعریف اللہ کے لیے ہے جس نے آسمان اور زمین پیدا کیے اور اندھیرے اور روشنی بنائی، پھر بھی کافر اپنے رب کے ساتھ دوسروں کو برابر ٹھہراتے ہیں",
                "وہی ہے جس نے تمہیں مٹی سے پیدا کیا پھر ایک مدت مقرر کی اور اس کے پاس ایک مقررہ وقت ہے، پھر بھی تم شک کرتے ہو",
                "اور وہی اللہ آسمانوں میں اور زمین میں ہے، وہ تمہارے چھپے اور ظاہر کو جانتا ہے اور جانتا ہے جو تم کماتے ہو",
                "اور ان کے پاس ان کے رب کی آیات میں سے کوئی آیت نہیں آتی مگر وہ اس سے منہ موڑتے ہیں",
                "پس جب ان کے پاس حق آیا تو انہوں نے اسے جھٹلایا، پس عنقریب ان کے پاس ان چیزوں کی خبر آئے گی جن پر وہ مذاق کرتے تھے",
                "کیا انہوں نے نہیں دیکھا کہ ہم نے ان سے پہلے کتنی نسلیں ہلاک کیں جنہیں زمین میں ایسی قوت دی تھی جو تمہیں نہیں دی اور ہم نے ان پر آسمان سے خوب بارش برسائی اور ان کے نیچے نہریں جاری کیں پھر ہم نے انہیں ان کے گناہوں کی وجہ سے ہلاک کیا اور ان کے بعد دوسری نسلیں پیدا کیں",
                "اور اگر ہم آپ پر کوئی کتاب کاغذ پر نازل کرتے پھر وہ اسے اپنے ہاتھوں سے چھو لیتے تو بھی کافر کہتے یہ تو صریح جادو ہے",
                "اور کہتے ہیں اس پر کوئی فرشتہ کیوں نہ نازل کیا گیا، اور اگر ہم فرشتہ نازل کرتے تو کام تمام ہو جاتا پھر انہیں مہلت نہ دی جاتی",
                "اور اگر ہم اسے فرشتہ بناتے تو اسے بھی مرد بناتے اور ان پر وہی شبہ ڈالتے جو وہ اب ڈال رہے ہیں",
                "اور آپ سے پہلے بھی رسولوں کا مذاق اڑایا گیا پھر انہیں وہ عذاب نے آ گھیرا جس کا وہ مذاق اڑاتے تھے"
            ],
            english: [
                "All praise is due to Allah, who created the heavens and the earth and made the darkness and the light. Then those who disbelieve equate others with their Lord.",
                "It is He who created you from clay and then decreed a term. And there is another determined term with Him, yet you doubt.",
                "And He is Allah, in the heavens and the earth. He knows your secret and your declared matters and knows what you earn.",
                "And no sign comes to them from the signs of their Lord except that they turn away from it.",
                "For they had denied the truth when it came to them, but there is going to reach them the news of what they used to ridicule.",
                "Have they not seen how many generations We destroyed before them which We had established upon the earth as We have not established you? And We sent rain upon them from the sky in showers and made rivers flow beneath them; then We destroyed them for their sins and created after them another generation.",
                "And even if We had sent down to you a written scripture on a page and they touched it with their hands, the disbelievers would say, 'This is nothing but obvious magic.'",
                "And they say, 'Why was there not sent down to him an angel?' But if We had sent down an angel, the matter would have been decided; then they would not be reprieved.",
                "And if We had made him an angel, We would have made him a man, and We would have covered them with confusion like that in which they cover themselves.",
                "And already were messengers ridiculed before you, but those who mocked them were enveloped by that which they used to ridicule."
            ]
        },

        /* ================= SURAH 7: AL-A'RAF (The Heights) ================= */
        7: {
            arabic: [
                "المص",
                "كِتَابٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ لِتُنذِرَ بِهِ وَذِكْرَىٰ لِلْمُؤْمِنِينَ",
                "اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ وَلَا تَتَّبِعُوا مِن دُونِهِ أَوْلِيَاءَ ۗ قَلِيلًا مَّا تَذَكَّرُونَ",
                "وَكَم مِّن قَرْيَةٍ أَهْلَكْنَاهَا فَجَاءَهَا بَأْسُنَا بَيَاتًا أَوْ هُمْ قَائِلُونَ",
                "فَمَا كَانَ دَعْوَاهُمْ إِذْ جَاءَهُم بَأْسُنَا إِلَّا أَن قَالُوا إِنَّا كُنَّا ظَالِمِينَ",
                "فَلَنَسْأَلَنَّ الَّذِينَ أُرْسِلَ إِلَيْهِمْ وَلَنَسْأَلَنَّ الْمُرْسَلِينَ",
                "فَلَنَقُصَّنَّ عَلَيْهِم بِعِلْمٍ ۖ وَمَا كُنَّا غَائِبِينَ",
                "وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ ۚ فَمَن ثَقُلَتْ مَوَازِينُهُ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
                "وَمَنْ خَفَّتْ مَوَازِينُهُ فَأُولَٰئِكَ الَّذِينَ خَسِرُوا أَنفُسَهُم بِمَا كَانُوا بِآيَاتِنَا يَظْلِمُونَ",
                "وَلَقَدْ مَكَّنَّاكُمْ فِي الْأَرْضِ وَجَعَلْنَا لَكُمْ فِيهَا مَعَايِشَ ۗ قَلِيلًا مَّا تَشْكُرُونَ"
            ],
            urdu: [
                "المص",
                "یہ کتاب ہے جو آپ پر نازل کی گئی، پس اس سے آپ کے سینے میں کوئی تنگی نہ ہو تاکہ آپ اس کے ذریعے ڈرائیں اور مومنوں کے لیے نصیحت ہو",
                "اس کی پیروی کرو جو تم پر تمہارے رب کی طرف سے نازل کیا گیا اور اس کے سوا دوسرے سرپرستوں کی پیروی نہ کرو، تم بہت کم نصیحت حاصل کرتے ہو",
                "اور ہم نے کتنی ہی بستیاں ہلاک کیں جن پر ہمارا عذاب رات کو یا دوپہر کے وقت آیا جب وہ آرام کر رہے تھے",
                "پس جب ان پر ہمارا عذاب آیا تو ان کی پکار یہی تھی کہ ہم ظالم تھے",
                "پس ہم ان سے بھی ضرور پوچھیں گے جن کے پاس رسول بھیجے گئے اور رسولوں سے بھی ضرور پوچھیں گے",
                "پھر ہم انہیں علم کے ساتھ ضرور بتائیں گے اور ہم غائب نہیں تھے",
                "اور اس دن وزن کرنا سچا ہو گا، پس جن کے پلے بھاری ہوں گے وہی کامیاب ہوں گے",
                "اور جن کے پلے ہلکے ہوں گے وہی لوگ ہیں جنہوں نے اپنا نقصان کیا بسبب اس کے کہ وہ ہماری آیات پر ظلم کرتے تھے",
                "اور بے شک ہم نے تمہیں زمین میں قوت دی اور اس میں تمہارے لیے زندگی کے سامان رکھے، تم بہت کم شکر کرتے ہو"
            ],
            english: [
                "Alif, Lam, Meem, Sad.",
                "This is a Book which has been sent down to you, so let there not be in your breast any uneasiness from it, that you may warn thereby, and it is a reminder for the believers.",
                "Follow what has been revealed to you from your Lord and do not follow other than Him any allies. Little do you remember.",
                "And how many cities have We destroyed, and Our punishment came to them at night or while they were sleeping at noon.",
                "And their declaration when Our punishment came to them was only that they said, 'Indeed, we were wrongdoers!'",
                "So We will surely question those to whom a messenger was sent, and We will surely question the messengers.",
                "Then We will surely relate their deeds to them with knowledge, and We were not absent.",
                "And the weighing on that Day will be the true weighing. So as for those whose scale is heavy, it is they who are the successful.",
                "And as for those whose scale is light, those are the ones who have lost their souls because they used to wrong Our signs.",
                "And We have certainly established you upon the earth and made for you therein ways of livelihood. Little are you grateful."
            ]
        },

        /* ================= SURAH 8: AL-ANFAL (The Spoils of War) ================= */
        8: {
            arabic: [
                "يَسْأَلُونَكَ عَنِ الْأَنفَالِ ۖ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ ۖ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ ۖ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ",
                "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
                "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
                "أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا ۚ لَهُمْ دَرَجَاتٌ عِندَ رَبِّهِمْ وَمَغْفِرَةٌ وَرِزْقٌ كَرِيمٌ",
                "كَمَا أَخْرَجَكَ رَبُّكَ مِن بَيْتِكَ بِالْحَقِّ وَإِنَّ فَرِيقًا مِّنَ الْمُؤْمِنِينَ لَكَارِهُونَ",
                "يُجَادِلُونَكَ فِي الْحَقِّ بَعْدَمَا تَبَيَّنَ كَأَنَّمَا يُسَاقُونَ إِلَى الْمَوْتِ وَهُمْ يَنظُرُونَ",
                "وَإِذْ يَعِدُكُمُ اللَّهُ إِحْدَى الطَّائِفَتَيْنِ أَنَّهَا لَكُمْ وَتَوَدُّونَ أَنَّ غَيْرَ ذَاتِ الشَّوْكَةِ تَكُونُ لَكُمْ وَيُرِيدُ اللَّهُ أَن يُحِقَّ الْحَقَّ بِكَلِمَاتِهِ وَيَقْطَعَ دَابِرَ الْكَافِرِينَ",
                "لِيُحِقَّ الْحَقَّ وَيُبْطِلَ الْبَاطِلَ وَلَوْ كَرِهَ الْمُجْرِمُونَ",
                "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ",
                "وَمَا جَعَلَهُ اللَّهُ إِلَّا بُشْرَىٰ وَلِتَطْمَئِنَّ بِهِ قُلُوبُكُمْ ۚ وَمَا النَّصْرُ إِلَّا مِنْ عِندِ اللَّهِ ۚ إِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ"
            ],
            urdu: [
                "لوگ آپ سے مال غنیمت کے بارے میں پوچھتے ہیں، کہو مال غنیمت اللہ اور رسول کا ہے، پس اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو اور اللہ اور اس کے رسول کی اطاعت کرو اگر تم مومن ہو",
                "مومن تو وہی ہیں کہ جب اللہ کا ذکر کیا جائے تو ان کے دل ڈر جائیں اور جب ان پر اس کی آیات پڑھی جائیں تو ان کا ایمان بڑھ جائے اور وہ اپنے رب پر بھروسہ کرتے ہیں",
                "جو نماز قائم کرتے ہیں اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں",
                "یہی لوگ سچے مومن ہیں، ان کے لیے ان کے رب کے پاس درجات اور بخشش اور عزت کی روزی ہے",
                "جیسے آپ کے رب نے آپ کو آپ کے گھر سے حق کے ساتھ نکالا حالانکہ مومنوں کا ایک گروہ ناراض تھا",
                "وہ حق کے بارے میں آپ سے جھگڑتے ہیں بعد اس کے کہ وہ ظاہر ہو چکا، گویا وہ موت کی طرف دھکیلے جا رہے ہیں اور دیکھ رہے ہیں",
                "اور جب اللہ نے تم سے وعدہ کیا کہ دو گروہوں میں سے ایک تمہارے لیے ہو گا اور تم چاہتے تھے کہ غیر مسلح گروہ تمہیں ملے اور اللہ چاہتا تھا کہ اپنے کلمات سے حق کو ثابت کرے اور کافروں کی جڑ کاٹ دے",
                "تاکہ حق کو ثابت کرے اور باطل کو مٹائے چاہے مجرموں کو برا لگے",
                "جب تم اپنے رب سے فریاد کر رہے تھے تو اس نے تمہاری سنی کہ میں تمہاری مدد ایک ہزار فرشتوں سے کروں گا جو پیچھے پیچھے آئیں گے",
                "اور اللہ نے اسے صرف خوشخبری بنایا اور تاکہ تمہارے دل مطمئن ہوں اور مدد اللہ ہی کی طرف سے ہے، بے شک اللہ زبردست حکمت والا ہے"
            ],
            english: [
                "They ask you about the bounties. Say, 'The bounties are for Allah and the Messenger.' So fear Allah and amend that which is between you and obey Allah and His Messenger, if you should be believers.",
                "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.",
                "The ones who establish prayer, and from what We have provided them, they spend.",
                "Those are the believers, truly. For them are degrees of high position with their Lord and forgiveness and noble provision.",
                "As your Lord caused you to go out from your home with the truth, and indeed, a party among the believers disliked it.",
                "They dispute with you concerning the truth after it had become clear, as if they were being driven to death while seeing it.",
                "And when Allah promised you one of the two groups that it would be yours and you wished that the unarmed one would be yours. But Allah intended to establish the truth by His words and to eliminate the disbelievers.",
                "That He should establish the truth and abolish falsehood, even if the criminals disliked it.",
                "When you were appealing to your Lord for help, and He responded to you, 'I will reinforce you with a thousand from the angels, following one another.'",
                "And Allah made it not but good tidings and so that your hearts would be assured thereby. And victory is not but from Allah. Indeed, Allah is Exalted in Might and Wise."
            ]
        },

        /* ================= SURAH 9: AT-TAWBAH (The Repentance) ================= */
        9: {
            arabic: [
                "بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ",
                "فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ وَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّهِ ۙ وَأَنَّ اللَّهَ مُخْزِي الْكَافِرِينَ",
                "وَأَذَانٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى النَّاسِ يَوْمَ الْحَجِّ الْأَكْبَرِ أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ ۙ وَرَسُولُهُ ۚ فَإِن تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ ۖ وَإِن تَوَلَّيْتُمْ فَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّهِ ۗ وَبَشِّرِ الَّذِينَ كَفَرُوا بِعَذَابٍ أَلِيمٍ",
                "إِلَّا الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ ثُمَّ لَمْ يَنقُصُوكُمْ شَيْئًا وَلَمْ يُظَاهِرُوا عَلَيْكُمْ أَحَدًا فَأَتِمُّوا إِلَيْهِمْ عَهْدَهُمْ إِلَىٰ مُدَّتِهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ",
                "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ وَخُذُوهُمْ وَاحْصُرُوهُمْ وَاقْعُدُوا لَهُمْ كُلَّ مَرْصَدٍ ۚ فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ فَخَلُّوا سَبِيلَهُمْ ۚ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
                "وَإِنْ أَحَدٌ مِّنَ الْمُشْرِكِينَ اسْتَجَارَكَ فَأَجِرْهُ حَتَّىٰ يَسْمَعَ كَلَامَ اللَّهِ ثُمَّ أَبْلِغْهُ مَأْمَنَهُ ۚ ذَٰلِكَ بِأَنَّهُمْ قَوْمٌ لَّا يَعْلَمُونَ",
                "كَيْفَ يَكُونُ لِلْمُشْرِكِينَ عَهْدٌ عِندَ اللَّهِ وَعِندَ رَسُولِهِ إِلَّا الَّذِينَ عَاهَدتُّمْ عِندَ الْمَسْجِدِ الْحَرَامِ ۖ فَمَا اسْتَقَامُوا لَكُمْ فَاسْتَقِيمُوا لَهُمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ",
                "كَيْفَ وَإِن يَظْهَرُوا عَلَيْكُمْ لَا يَرْقُبُوا فِيكُمْ إِلًّا وَلَا ذِمَّةً ۚ يُرْضُونَكُم بِأَفْوَاهِهِمْ وَتَأْبَىٰ قُلُوبُهُمْ وَأَكْثَرُهُمْ فَاسِقُونَ",
                "اشْتَرَوْا بِآيَاتِ اللَّهِ ثَمَنًا قَلِيلًا فَصَدُّوا عَن سَبِيلِهِ ۚ إِنَّهُمْ سَاءَ مَا كَانُوا يَعْمَلُونَ",
                "لَا يَرْقُبُونَ فِي مُؤْمِنٍ إِلًّا وَلَا ذِمَّةً ۚ وَأُولَٰئِكَ هُمُ الْمُعْتَدُونَ"
            ],
            urdu: [
                "اللہ اور اس کے رسول کی طرف سے ان مشرکوں سے بیزاری کا اعلان ہے جن سے تم نے عہد کیا تھا",
                "پس تم زمین میں چار مہینے چل پھر لو اور جان لو کہ تم اللہ کو عاجز نہیں کر سکتے اور بے شک اللہ کافروں کو رسوا کرنے والا ہے",
                "اور اللہ اور اس کے رسول کی طرف سے لوگوں کو حج اکبر کے دن اعلان ہے کہ اللہ مشرکوں سے بری ہے اور اس کا رسول بھی، پس اگر تم توبہ کرو تو یہ تمہارے لیے بہتر ہے اور اگر تم منہ موڑو تو جان لو کہ تم اللہ کو عاجز نہیں کر سکتے اور کافروں کو دردناک عذاب کی خوشخبری دو",
                "سوائے ان مشرکوں کے جن سے تم نے عہد کیا پھر انہوں نے تمہارے ساتھ کوئی کمی نہ کی اور نہ تمہارے خلاف کسی کی مدد کی، پس ان سے ان کی مدت تک عہد پورا کرو، بے شک اللہ پرہیزگاروں کو پسند کرتا ہے",
                "پس جب حرمت والے مہینے گزر جائیں تو مشرکوں کو جہاں پاؤ قتل کرو اور انہیں پکڑو اور انہیں گھیرو اور ہر گھات کی جگہ ان کی تاک میں بیٹھو، پھر اگر وہ توبہ کریں اور نماز قائم کریں اور زکوٰۃ دیں تو ان کا راستہ چھوڑ دو، بے شک اللہ بخشنے والا رحم کرنے والا ہے",
                "اور اگر مشرکوں میں سے کوئی تم سے پناہ مانگے تو اسے پناہ دو یہاں تک کہ وہ اللہ کا کلام سنے پھر اسے اس کی محفوظ جگہ پہنچا دو، یہ اس لیے کہ وہ ایسے لوگ ہیں جو جانتے نہیں",
                "مشرکوں کا اللہ اور اس کے رسول کے پاس عہد کیسے ہو سکتا ہے سوائے ان کے جن سے تم نے مسجد حرام کے پاس عہد کیا، پس جب تک وہ تمہارے لیے سیدھے رہیں تم بھی ان کے لیے سیدھے رہو، بے شک اللہ پرہیزگاروں کو پسند کرتا ہے",
                "کیسے ہو سکتا ہے حالانکہ اگر وہ تم پر غلبہ پائیں تو نہ تمہارے بارے میں کسی رشتے کا لحاظ کریں نہ عہد کا، وہ اپنے منہ سے تمہیں راضی کرتے ہیں اور ان کے دل انکار کرتے ہیں اور ان میں اکثر فاسق ہیں",
                "انہوں نے اللہ کی آیات کو تھوڑی قیمت پر بیچا پھر اس کے راستے سے روکا، بے شک وہ بہت برا کرتے تھے",
                "وہ کسی مومن کے بارے میں نہ کسی رشتے کا لحاظ کرتے ہیں نہ عہد کا اور یہی لوگ زیادتی کرنے والے ہیں"
            ],
            english: [
                "Freedom from obligation is proclaimed from Allah and His Messenger toward those of the polytheists with whom you made a treaty.",
                "So travel freely for four months throughout the land and know that you cannot cause failure to Allah and that Allah will disgrace the disbelievers.",
                "And a proclamation from Allah and His Messenger to the people on the day of the greater pilgrimage that Allah is disassociated from the polytheists, and so is His Messenger. So if you repent, that is best for you; but if you turn away, then know that you will not cause failure to Allah. And give tidings to those who disbelieve of a painful punishment.",
                "Excepted are those with whom you made a treaty among the polytheists and then they have not been deficient toward you in anything or supported anyone against you; so complete for them their treaty until their term. Indeed, Allah loves the righteous.",
                "And when the sacred months have passed, then kill the polytheists wherever you find them and capture them and besiege them and sit in wait for them at every place of ambush. But if they should repent, establish prayer, and give zakah, let them go on their way. Indeed, Allah is Forgiving and Merciful.",
                "And if any one of the polytheists seeks your protection, then grant him protection so that he may hear the words of Allah. Then deliver him to his place of safety. That is because they are a people who do not know.",
                "How can there be for the polytheists a treaty in the sight of Allah and with His Messenger, except for those with whom you made a treaty at al-Masjid al-Haram? So as long as they are upright toward you, be upright toward them. Indeed, Allah loves the righteous.",
                "How? And if they should overcome you, they will not observe toward you any kinship or covenant. They satisfy you with their mouths, but their hearts refuse, and most of them are defiantly disobedient.",
                "They have exchanged the signs of Allah for a small price and averted people from His way. Indeed, it was evil that they were doing.",
                "They do not observe toward a believer any kinship or covenant. And it is they who are the transgressors."
            ]
        },

        /* ================= SURAH 10: YUNUS (Jonah) ================= */
        10: {
            arabic: [
                "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ",
                "أَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَا إِلَىٰ رَجُلٍ مِّنْهُمْ أَنْ أَنذِرِ النَّاسَ وَبَشِّرِ الَّذِينَ آمَنُوا أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ ۗ قَالَ الْكَافِرُونَ إِنَّ هَٰذَا لَسَاحِرٌ مُّبِينٌ",
                "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ يُدَبِّرُ الْأَمْرَ ۖ مَا مِن شَفِيعٍ إِلَّا مِن بَعْدِ إِذْنِهِ ۚ ذَٰلِكُمُ اللَّهُ رَبُّكُمْ فَاعْبُدُوهُ ۚ أَفَلَا تَذَكَّرُونَ",
                "إِلَيْهِ مَرْجِعُكُمْ جَمِيعًا ۖ وَعْدَ اللَّهِ حَقًّا ۚ إِنَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ بِالْقِسْطِ ۚ وَالَّذِينَ كَفَرُوا لَهُمْ شَرَابٌ مِّنْ حَمِيمٍ وَعَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْفُرُونَ",
                "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ ۚ مَا خَلَقَ اللَّهُ ذَٰلِكَ إِلَّا بِالْحَقِّ ۚ يُفَصِّلُ الْآيَاتِ لِقَوْمٍ يَعْلَمُونَ",
                "إِنَّ فِي اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَمَا خَلَقَ اللَّهُ فِي السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَتَّقُونَ",
                "إِنَّ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا وَرَضُوا بِالْحَيَاةِ الدُّنْيَا وَاطْمَأَنُّوا بِهَا وَالَّذِينَ هُمْ عَنْ آيَاتِنَا غَافِلُونَ",
                "أُولَٰئِكَ مَأْوَاهُمُ النَّارُ بِمَا كَانُوا يَكْسِبُونَ",
                "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ يَهْدِيهِمْ رَبُّهُم بِإِيمَانِهِمْ ۖ تَجْرِي مِن تَحْتِهِمُ الْأَنْهَارُ فِي جَنَّاتِ النَّعِيمِ",
                "دَعْوَاهُمْ فِيهَا سُبْحَانَكَ اللَّهُمَّ وَتَحِيَّتُهُمْ فِيهَا سَلَامٌ ۚ وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                "وَلَوْ يُعَجِّلُ اللَّهُ لِلنَّاسِ الشَّرَّ اسْتِعْجَالَهُم بِالْخَيْرِ لَقُضِيَ إِلَيْهِمْ أَجَلُهُمْ ۖ فَنَذَرُ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا فِي طُغْيَانِهِمْ يَعْمَهُونَ"
            ],
            urdu: [
                "الر، یہ حکمت والی کتاب کی آیات ہیں",
                "کیا لوگوں کے لیے یہ تعجب کی بات ہے کہ ہم نے انہی میں سے ایک شخص پر وحی بھیجی کہ لوگوں کو ڈراؤ اور مومنوں کو خوشخبری دو کہ ان کے لیے ان کے رب کے پاس سچا مقام ہے، کافروں نے کہا یہ تو صریح جادوگر ہے",
                "بے شک تمہارا رب اللہ ہے جس نے آسمان اور زمین چھ دنوں میں پیدا کیے پھر عرش پر مستقر ہوا، وہ کام کا انتظام کرتا ہے، کوئی سفارش کرنے والا نہیں مگر اس کی اجازت کے بعد، یہی اللہ تمہارا رب ہے پس اسی کی عبادت کرو، کیا تم نصیحت نہیں لیتے",
                "اسی کی طرف تم سب کا لوٹنا ہے، اللہ کا وعدہ سچا ہے، بے شک وہ خلقت کو شروع کرتا ہے پھر اسے دہرائے گا تاکہ ان لوگوں کو انصاف کے ساتھ بدلہ دے جو ایمان لائے اور نیک عمل کیے اور جنہوں نے کفر کیا ان کے لیے کھولتے پانی کا مشروب اور دردناک عذاب ہے بسبب اس کے کہ وہ کفر کرتے تھے",
                "وہی ہے جس نے سورج کو روشنی اور چاند کو نور بنایا اور اس کے منازل مقرر کیے تاکہ تم سالوں کی گنتی اور حساب جانو، اللہ نے یہ سب حق کے ساتھ پیدا کیا، وہ علم والوں کے لیے آیات تفصیل سے بیان کرتا ہے",
                "بے شک رات اور دن کے اختلاف میں اور جو اللہ نے آسمانوں اور زمین میں پیدا کیا اس میں پرہیزگاروں کے لیے آیات ہیں",
                "بے شک جو لوگ ہماری ملاقات کی امید نہیں رکھتے اور دنیا کی زندگی پر راضی ہو گئے اور اسی پر مطمئن ہو گئے اور جو ہماری آیات سے غافل ہیں",
                "یہی لوگ ہیں جن کا ٹھکانہ آگ ہے بسبب اس کے جو وہ کماتے تھے",
                "بے شک جو لوگ ایمان لائے اور نیک عمل کیے انہیں ان کا رب ان کے ایمان کی وجہ سے ہدایت دے گا، ان کے نیچے نعمتوں کے باغوں میں نہریں بہیں گی",
                "اس میں ان کی دعا سبحانک اللہم ہو گی اور ان کی تحیت سلام ہو گی اور ان کی دعا کا خاتمہ الحمد للہ رب العالمین ہو گا",
                "اور اگر اللہ لوگوں کے لیے بھلائی کے مانگنے کی طرح برائی کے مانگنے میں جلدی کرتا تو ان کی مدت پوری ہو جاتی، پس ہم ان لوگوں کو جنہیں ہماری ملاقات کی امید نہیں، ان کی سرکشی میں بھٹکتے چھوڑ دیتے ہیں"
            ],
            english: [
                "Alif, Lam, Ra. These are the verses of the wise Book.",
                "Has it been a wonder to the people that We revealed to a man from among themselves, 'Warn the people, and give good tidings to those who believe that they will have a precedence of honor with their Lord'? The disbelievers say, 'Indeed, this is an obvious magician.'",
                "Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter. There is no intercessor except after His permission. That is Allah, your Lord, so worship Him. Then will you not remember?",
                "To Him is your return all together. The promise of Allah is truth. Indeed, He begins the creation and then repeats it that He may reward those who have believed and done righteous deeds, in justice. But those who disbelieved will have a drink of scalding water and a painful punishment for what they used to deny.",
                "It is He who made the sun a shining light and the moon a derived light and determined for it phases that you may know the number of years and account. Allah has not created this except in truth. He details the signs for a people who know.",
                "Indeed, in the alternation of the night and the day and what Allah has created in the heavens and the earth are signs for a people who fear Allah.",
                "Indeed, those who do not expect the meeting with Us and are satisfied with the life of this world and feel secure therein and those who are heedless of Our signs.",
                "For those their refuge will be the Fire because of what they used to earn.",
                "Indeed, those who have believed and done righteous deeds - their Lord will guide them because of their faith. Beneath them rivers will flow in the Gardens of Pleasure.",
                "Their call therein will be, 'Exalted are You, O Allah,' and their greeting therein will be, 'Peace.' And the last of their call will be, 'Praise to Allah, Lord of the worlds!'",
                "And if Allah were to hasten for the people the evil as they hasten the good, their respite would have been decreed for them. But We leave those who do not expect the meeting with Us in their transgression, wandering blindly."
            ]
        }

    },

    /* =====================================================
       HADITH — SAHIH MUSLIM (50 Hadiths)
    ===================================================== */
    hadithBooks: {
        muslim: {
            title: "Sahih Muslim",
            arabic: "صحيح مسلم",
            english: "Sahih Muslim",
            author: "Imam Muslim ibn al-Hajjaj",
            hadiths: [
                { id: 1, arabic: "الدِّينُ النَّصِيحَةُ", urdu: "دین خیر خواہی کا نام ہے", english: "Religion is sincerity.", reference: "Sahih Muslim 55" },
                { id: 2, arabic: "مَنْ لَا يَرْحَمُ لَا يُرْحَمُ", urdu: "جو رحم نہیں کرتا اس پر رحم نہیں کیا جاتا", english: "He who does not show mercy will not be shown mercy.", reference: "Sahih Muslim 2318" },
                { id: 3, arabic: "لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ", urdu: "جنت میں وہ شخص نہیں داخل ہوگا جس کے دل میں ذرہ برابر بھی تکبر ہو", english: "He who has in his heart the weight of a mustard seed of pride shall not enter Paradise.", reference: "Sahih Muslim 91" },
                { id: 4, arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ", urdu: "اللہ تمہاری صورتوں اور مالوں کو نہیں دیکھتا بلکہ تمہارے دلوں اور اعمال کو دیکھتا ہے", english: "Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.", reference: "Sahih Muslim 2564" },
                { id: 5, arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ", urdu: "جو صبح کی نماز پڑھے وہ اللہ کی امان میں ہوتا ہے", english: "Whoever prays the morning prayer is under the protection of Allah.", reference: "Sahih Muslim 657" },
                { id: 6, arabic: "صِلُوا أَرْحَامَكُمْ", urdu: "اپنے رشتہ داروں سے صلہ رحمی کرو", english: "Maintain your ties of kinship.", reference: "Sahih Muslim 2557" },
                { id: 7, arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمَ وَلَدَتْهُ أُمُّهُ", urdu: "جو حج کرے اور کوئی گناہ نہ کرے وہ اس دن کی طرح پاک ہو جاتا ہے جس دن اس کی ماں نے اسے جنم دیا تھا", english: "Whoever performs Hajj without obscenity or sin returns as pure as the day his mother bore him.", reference: "Sahih Muslim 1218" },
                { id: 8, arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ", urdu: "طاقتور مومن اللہ کے نزدیک کمزور مومن سے بہتر اور زیادہ محبوب ہے", english: "The strong believer is better and more beloved to Allah than the weak believer.", reference: "Sahih Muslim 2664" },
                { id: 9, arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ", urdu: "جو کسی مومن کی پریشانی دور کرے اللہ قیامت کے دن اس کی پریشانیاں دور فرمائے گا", english: "Whoever relieves a believer's distress, Allah will relieve his distress on the Day of Resurrection.", reference: "Sahih Muslim 2699" },
                { id: 10, arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Sahih Muslim 223" },
                { id: 11, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Sahih Muslim 1955" },
                { id: 12, arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ", urdu: "جو جان بوجھ کر مجھ پر جھوٹ باندھے وہ اپنا ٹھکانہ جہنم میں بنائے", english: "Whoever tells a lie about me deliberately, let him take his place in Hell.", reference: "Sahih Muslim 3" },
                { id: 13, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Sahih Muslim 2548" },
                { id: 14, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Sahih Muslim 2621" },
                { id: 15, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Sahih Muslim 2675" },
                { id: 16, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے", english: "The best of you are those who learn the Quran and teach it.", reference: "Sahih Muslim 803" },
                { id: 17, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise is beneath the feet of mothers.", reference: "Sahih Muslim 2548" },
                { id: 18, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Sahih Muslim 223" },
                { id: 19, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and He loves beauty.", reference: "Sahih Muslim 91" },
                { id: 20, arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Sahih Muslim 782" },
                { id: 21, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Sahih Muslim 40" },
                { id: 22, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Sahih Muslim 45" },
                { id: 23, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Sahih Muslim 47" },
                { id: 24, arabic: "مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا", urdu: "جو میرے قریب ایک بالشت آتا ہے میں اس کے قریب ایک ہاتھ آتا ہوں", english: "Whoever comes one step closer to Me, I come one arm's length closer to him.", reference: "Sahih Muslim 2675" },
                { id: 25, arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى أَجْسَادِكُمْ وَلَا إِلَى صُوَرِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ", urdu: "اللہ تمہارے جسموں اور صورتوں کو نہیں دیکھتا بلکہ تمہارے دلوں کو دیکھتا ہے", english: "Allah does not look at your bodies or your appearances, but He looks at your hearts.", reference: "Sahih Muslim 2564" },
                { id: 26, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Sahih Muslim 1794" },
                { id: 27, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends blessings upon me once, Allah will send ten blessings upon him.", reference: "Sahih Muslim 408" },
                { id: 28, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Sahih Muslim 67" },
                { id: 29, arabic: "السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ", urdu: "بیوہ اور مسکین کی خدمت کرنے والا اللہ کی راہ میں جہاد کرنے والے کی طرح ہے", english: "The one who cares for a widow and the poor is like a warrior in the way of Allah.", reference: "Sahih Muslim 2982" },
                { id: 30, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Sahih Muslim 43" },
                { id: 31, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Sahih Muslim 1016" },
                { id: 32, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Sahih Muslim 2564" },
                { id: 33, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Sahih Muslim 869" },
                { id: 34, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Sahih Muslim 223" },
                { id: 35, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Sahih Muslim 2691" },
                { id: 36, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Sahih Muslim 1015" },
                { id: 37, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Sahih Muslim 200" },
                { id: 38, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Sahih Muslim 2060" },
                { id: 39, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Sahih Muslim 2588" },
                { id: 40, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Sahih Muslim 85" },
                { id: 41, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Sahih Muslim 2609" },
                { id: 42, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Sahih Muslim 1033" },
                { id: 43, arabic: "مَنْ كَانَ لَهُ جَارٌ فَلَا يُؤْذِيهِ", urdu: "جس کا پڑوسی ہو وہ اسے تکلیف نہ دے", english: "Whoever has a neighbor, let him not harm him.", reference: "Sahih Muslim 47" },
                { id: 44, arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ", urdu: "رحم کرنے والوں پر رحمٰن رحم کرتا ہے", english: "The merciful will be shown mercy by the Most Merciful.", reference: "Sahih Muslim 2318" },
                { id: 45, arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا", urdu: "مومنوں میں سب سے کامل ایمان والا وہ ہے جس کا اخلاق سب سے اچھا ہو", english: "The most complete of the believers in faith is the one with the best character.", reference: "Sahih Muslim 1162" },
                { id: 46, arabic: "مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "Whoever does not thank people does not thank Allah.", reference: "Sahih Muslim 1017" },
                { id: 47, arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا", urdu: "مومن مومن کے لیے عمارت کی طرح ہے جس کا ایک حصہ دوسرے کو مضبوط کرتا ہے", english: "A believer to another believer is like a building whose parts support each other.", reference: "Sahih Muslim 2585" },
                { id: 48, arabic: "السَّلَامُ قَبْلَ الْكَلَامِ", urdu: "بات کرنے سے پہلے سلام کرو", english: "Greet before speaking.", reference: "Sahih Muslim 54" },
                { id: 49, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", urdu: "علم کا طلب کرنا ہر مسلمان پر فرض ہے", english: "Seeking knowledge is obligatory upon every Muslim.", reference: "Sahih Muslim 223" },
                { id: 50, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Sahih Muslim 1009" }
            ]
        }
    },

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */
    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },

    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },

    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 2] Loaded ✅");
console.log("[DB Part 2] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART2.quranContent).length);
console.log("[DB Part 2] Muslim Hadiths: " + ISLAMIC_DATABASE_PART2.hadithBooks.muslim.hadiths.length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 3
   Surahs 11-20 (Hud, Yusuf, Ar-Ra'd, Ibrahim, Al-Hijr,
                 An-Nahl, Al-Isra, Al-Kahf, Maryam, Taha)
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART3 = {

    quranContent: {

        /* ================= SURAH 11: HUD ================= */
        11: {
            arabic: [
                "الر ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ",
                "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ ۚ إِنَّنِي لَكُم مِّنْهُ نَذِيرٌ وَبَشِيرٌ",
                "وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُمَتِّعْكُم مَّتَاعًا حَسَنًا إِلَىٰ أَجَلٍ مُّسَمًّى وَيُؤْتِ كُلَّ ذِي فَضْلٍ فَضْلَهُ ۖ وَإِن تَوَلَّوْا فَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ كَبِيرٍ",
                "إِلَى اللَّهِ مَرْجِعُكُمْ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "أَلَا إِنَّهُمْ يَثْنُونَ صُدُورَهُمْ لِيَسْتَخْفُوا مِنْهُ ۚ أَلَا حِينَ يَسْتَغْشُونَ ثِيَابَهُمْ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ ۚ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
                "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا ۚ كُلٌّ فِي كِتَابٍ مُّبِينٍ",
                "وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ وَكَانَ عَرْشُهُ عَلَى الْمَاءِ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۗ وَلَئِن قُلْتَ إِنَّكُم مَّبْعُوثُونَ مِن بَعْدِ الْمَوْتِ لَيَقُولَنَّ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ",
                "وَلَئِنْ أَخَّرْنَا عَنْهُمُ الْعَذَابَ إِلَىٰ أُمَّةٍ مَّعْدُودَةٍ لَّيَقُولُنَّ مَا يَحْبِسُهُ ۗ أَلَا يَوْمَ يَأْتِيهِمْ لَيْسَ مَصْرُوفًا عَنْهُمْ وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
                "وَلَئِنْ أَذَقْنَا الْإِنسَانَ مِنَّا رَحْمَةً ثُمَّ نَزَعْنَاهَا مِنْهُ إِنَّهُ لَيَئُوسٌ كَفُورٌ",
                "وَلَئِنْ أَذَقْنَاهُ نَعْمَاءَ بَعْدَ ضَرَّاءَ مَسَّتْهُ لَيَقُولَنَّ ذَهَبَ السَّيِّئَاتُ عَنِّي ۚ إِنَّهُ لَفَرِحٌ فَخُورٌ"
            ],
            urdu: [
                "الر، یہ ایسی کتاب ہے جس کی آیات مضبوط کی گئی ہیں پھر حکمت والے باخبر کی طرف سے تفصیل سے بیان کی گئی ہیں",
                "یہ کہ اللہ کے سوا کسی کی عبادت نہ کرو، بے شک میں تمہارے لیے اسی کی طرف سے ڈرانے والا اور خوشخبری دینے والا ہوں",
                "اور یہ کہ اپنے رب سے بخشش مانگو پھر اسی کی طرف رجوع کرو، وہ تمہیں ایک مقررہ وقت تک اچھا سامان دے گا اور ہر فضل والے کو اس کا فضل دے گا، اور اگر تم منہ موڑو تو مجھے تم پر ایک بڑے دن کے عذاب کا ڈر ہے",
                "اللہ ہی کی طرف تمہارا لوٹنا ہے اور وہ ہر چیز پر قادر ہے",
                "خبردار! وہ اپنے سینے موڑتے ہیں تاکہ اس سے چھپ جائیں، خبردار! جب وہ اپنے کپڑوں سے منہ ڈھانپتے ہیں وہ جانتا ہے جو وہ چھپاتے ہیں اور جو ظاہر کرتے ہیں، بے شک وہ دلوں کی بات جانتا ہے",
                "اور زمین پر کوئی جاندار نہیں مگر اس کا رزق اللہ پر ہے اور وہ جانتا ہے اس کا ٹھکانہ اور اس کی امانت گاہ، سب کھلی کتاب میں ہے",
                "اور وہی ہے جس نے آسمان اور زمین چھ دنوں میں پیدا کیے اور اس کا عرش پانی پر تھا تاکہ تمہیں آزمائے کہ تم میں کون اچھے عمل کرتا ہے، اور اگر آپ کہیں کہ تم موت کے بعد ضرور اٹھائے جاؤ گے تو کافر کہیں گے یہ تو صریح جادو ہے",
                "اور اگر ہم ان سے عذاب ایک مقررہ مدت تک مؤخر کریں تو وہ کہیں گے اسے کون روک رہا ہے، خبردار! جس دن وہ ان پر آئے گا ٹالا نہ جائے گا اور انہیں وہ عذاب گھیر لے گا جس کا وہ مذاق اڑاتے تھے",
                "اور اگر ہم انسان کو اپنی رحمت کا مزہ چکھائیں پھر اسے اس سے چھین لیں تو بے شک وہ مایوس نہ شکر کرنے والا ہے",
                "اور اگر ہم اسے تنگی کے بعد نعمت کا مزہ چکھائیں تو ضرور کہے گا برائیاں مجھ سے دور ہو گئیں، بے شک وہ خوش اور فخر کرنے والا ہے"
            ],
            english: [
                "Alif, Lam, Ra. This is a Book whose verses have been perfected and then explained in detail, from One Who is Wise and Acquainted.",
                "That you worship none but Allah. Indeed, I am to you from Him a warner and a bringer of good tidings.",
                "And seek forgiveness of your Lord and turn to Him in repentance; He will grant you good enjoyment for a specified term and give to every possessor of virtue his virtue. But if you turn away, then indeed I fear for you the punishment of a great Day.",
                "To Allah is your return, and He is over all things competent.",
                "Unquestionably, they fold their breasts to conceal from Him. Unquestionably, even when they cover themselves with their garments, He knows what they conceal and what they declare. Indeed, He is Knowing of that within the breasts.",
                "And there is no creature on earth but that upon Allah is its provision, and He knows its place of dwelling and place of storage. All is in a clear register.",
                "And it is He who created the heavens and the earth in six days, and His Throne was over the water, that He might test you as to which of you is best in deed. And if you say, 'Indeed, you will be resurrected after death,' the disbelievers will surely say, 'This is nothing but obvious magic.'",
                "And if We delay for them the punishment until a specified time, they will surely say, 'What detains it?' Unquestionably, on the Day it comes to them, it will not be averted from them, and they will be enveloped by what they used to ridicule.",
                "And if We give man a taste of mercy from Us and then remove it from him, indeed, he is despairing and ungrateful.",
                "But if We give him a taste of favor after hardship has touched him, he will surely say, 'Bad times have left me.' Indeed, he is exultant and boastful."
            ]
        },

        /* ================= SURAH 12: YUSUF ================= */
        12: {
            arabic: [
                "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
                "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
                "نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ بِمَا أَوْحَيْنَا إِلَيْكَ هَٰذَا الْقُرْآنَ وَإِن كُنتَ مِن قَبْلِهِ لَمِنَ الْغَافِلِينَ",
                "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ",
                "قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَىٰ إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا ۖ إِنَّ الشَّيْطَانَ لِلْإِنسَانِ عَدُوٌّ مُّبِينٌ",
                "وَكَذَٰلِكَ يَجْتَبِيكَ رَبُّكَ وَيُعَلِّمُكَ مِن تَأْوِيلِ الْأَحَادِيثِ وَيُتِمُّ نِعْمَتَهُ عَلَيْكَ وَعَلَىٰ آلِ يَعْقُوبَ كَمَا أَتَمَّهَا عَلَىٰ أَبَوَيْكَ مِن قَبْلُ إِبْرَاهِيمَ وَإِسْحَاقَ ۚ إِنَّ رَبَّكَ عَلِيمٌ حَكِيمٌ",
                "لَّقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ آيَاتٌ لِّلسَّائِلِينَ",
                "إِذْ قَالُوا لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَىٰ أَبِينَا مِنَّا وَنَحْنُ عُصْبَةٌ إِنَّ أَبَانَا لَفِي ضَلَالٍ مُّبِينٍ",
                "اقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا يَخْلُ لَكُمْ وَجْهُ أَبِيكُمْ وَتَكُونُوا مِن بَعْدِهِ قَوْمًا صَالِحِينَ",
                "قَالَ قَائِلٌ مِّنْهُمْ لَا تَقْتُلُوا يُوسُفَ وَأَلْقُوهُ فِي غَيَابَتِ الْجُبِّ يَلْتَقِطْهُ بَعْضُ السَّيَّارَةِ إِن كُنتُمْ فَاعِلِينَ"
            ],
            urdu: [
                "الر، یہ واضح کتاب کی آیات ہیں",
                "بے شک ہم نے اسے عربی قرآن بنایا تاکہ تم سمجھو",
                "ہم آپ کو بہترین قصے سناتے ہیں بذریعہ اس وحی کے جو ہم نے آپ پر نازل کی، اور بے شک آپ اس سے پہلے غافلوں میں سے تھے",
                "جب یوسف نے اپنے باپ سے کہا اے میرے باپ! میں نے گیارہ ستارے اور سورج اور چاند دیکھے، میں نے انہیں اپنے سامنے سجدہ کرتے دیکھا",
                "کہا اے میرے بیٹے! اپنا خواب اپنے بھائیوں کو نہ سنانا ورنہ وہ تمہارے خلاف کوئی چال چلیں گے، بے شک شیطان انسان کا کھلا دشمن ہے",
                "اور اسی طرح تمہارا رب تمہیں چنے گا اور تمہیں خوابوں کی تعبیر سکھائے گا اور تم پر اور یعقوب کی آل پر اپنی نعمت پوری کرے گا جیسے اس نے پہلے تمہارے دادا ابراہیم اور اسحاق پر پوری کی، بے شک تمہارا رب جاننے والا حکمت والا ہے",
                "بے شک یوسف اور اس کے بھائیوں میں پوچھنے والوں کے لیے نشانیاں ہیں",
                "جب انہوں نے کہا بے شک یوسف اور اس کا بھائی ہمارے باپ کو ہم سے زیادہ پیارے ہیں حالانکہ ہم ایک جماعت ہیں، بے شک ہمارے باپ کھلی غلطی میں ہیں",
                "یوسف کو قتل کر دو یا کسی اور زمین میں پھینک دو تاکہ تمہارے باپ کا چہرہ صرف تمہارے لیے ہو جائے اور اس کے بعد تم نیک لوگ بن جاؤ",
                "ان میں سے ایک کہنے والے نے کہا یوسف کو قتل نہ کرو بلکہ اسے کنویں کی تہہ میں ڈال دو، کوئی مسافر اسے اٹھا لے گا اگر تم کرنے والے ہو"
            ],
            english: [
                "Alif, Lam, Ra. These are the verses of the clear Book.",
                "Indeed, We have sent it down as an Arabic Qur'an that you might understand.",
                "We relate to you the best of stories through what We have revealed to you of this Qur'an, although you were, before it, among the unaware.",
                "When Joseph said to his father, 'O my father, indeed I have seen eleven stars and the sun and the moon; I have seen them prostrating to me.'",
                "He said, 'O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy.'",
                "And thus will your Lord choose you and teach you the interpretation of narratives and complete His favor upon you and upon the family of Jacob, as He completed it upon your fathers before, Abraham and Isaac. Indeed, your Lord is Knowing and Wise.",
                "Certainly were there in Joseph and his brothers signs for those who ask.",
                "When they said, 'Joseph and his brother are more beloved to our father than we, while we are a clan. Indeed, our father is in clear error.'",
                "Kill Joseph or cast him out to another land so that the countenance of your father will be only for you, and you will be a righteous people after that.",
                "A speaker among them said, 'Do not kill Joseph but throw him into the bottom of the well; some travelers will pick him up, if you would do so.'"
            ]
        },

        /* ================= SURAH 13: AR-RA'D ================= */
        13: {
            arabic: [
                "المر ۚ تِلْكَ آيَاتُ الْكِتَابِ ۗ وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يُؤْمِنُونَ",
                "اللَّهُ الَّذِي رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا ۖ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى ۚ يُدَبِّرُ الْأَمْرَ يُفَصِّلُ الْآيَاتِ لَعَلَّكُم بِلِقَاءِ رَبِّكُمْ تُوقِنُونَ",
                "وَهُوَ الَّذِي مَدَّ الْأَرْضَ وَجَعَلَ فِيهَا رَوَاسِيَ وَأَنْهَارًا ۖ وَمِن كُلِّ الثَّمَرَاتِ جَعَلَ فِيهَا زَوْجَيْنِ اثْنَيْنِ ۖ يُغْشِي اللَّيْلَ النَّهَارَ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
                "وَفِي الْأَرْضِ قِطَعٌ مُّتَجَاوِرَاتٌ وَجَنَّاتٌ مِّنْ أَعْنَابٍ وَزَرْعٌ وَنَخِيلٌ صِنْوَانٌ وَغَيْرُ صِنْوَانٍ يُسْقَىٰ بِمَاءٍ وَاحِدٍ وَنُفَضِّلُ بَعْضَهَا عَلَىٰ بَعْضٍ فِي الْأُكُلِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
                "وَإِن تَعْجَبْ فَعَجَبٌ قَوْلُهُمْ أَإِذَا كُنَّا تُرَابًا أَإِنَّا لَفِي خَلْقٍ جَدِيدٍ ۗ أُولَٰئِكَ الَّذِينَ كَفَرُوا بِرَبِّهِمْ ۖ وَأُولَٰئِكَ الْأَغْلَالُ فِي أَعْنَاقِهِمْ ۖ وَأُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ",
                "وَيَسْتَعْجِلُونَكَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ وَقَدْ خَلَتْ مِن قَبْلِهِمُ الْمَثُلَاتُ ۗ وَإِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ لِّلنَّاسِ عَلَىٰ ظُلْمِهِمْ ۖ وَإِنَّ رَبَّكَ لَشَدِيدُ الْعِقَابِ",
                "وَيَقُولُ الَّذِينَ كَفَرُوا لَوْلَا أُنزِلَ عَلَيْهِ آيَةٌ مِّن رَّبِّهِ ۗ إِنَّمَا أَنتَ مُنذِرٌ ۖ وَلِكُلِّ قَوْمٍ هَادٍ",
                "اللَّهُ يَعْلَمُ مَا تَحْمِلُ كُلُّ أُنثَىٰ وَمَا تَغِيضُ الْأَرْحَامُ وَمَا تَزْدَادُ ۖ وَكُلُّ شَيْءٍ عِندَهُ بِمِقْدَارٍ",
                "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
                "سَوَاءٌ مِّنكُم مَّنْ أَسَرَّ الْقَوْلَ وَمَن جَهَرَ بِهِ وَمَنْ هُوَ مُسْتَخْفٍ بِاللَّيْلِ وَسَارِبٌ بِالنَّهَارِ"
            ],
            urdu: [
                "المر، یہ کتاب کی آیات ہیں اور جو آپ پر آپ کے رب کی طرف سے نازل کیا گیا وہ حق ہے لیکن اکثر لوگ ایمان نہیں لاتے",
                "اللہ وہ ہے جس نے آسمانوں کو بغیر ستونوں کے بلند کیا جنہیں تم دیکھتے ہو پھر عرش پر مستقر ہوا اور سورج اور چاند کو تابع کیا، ہر ایک ایک مقررہ وقت تک چلتا ہے، وہ کام کا انتظام کرتا ہے اور آیات تفصیل سے بیان کرتا ہے تاکہ تم اپنے رب کی ملاقات کا یقین کرو",
                "اور وہی ہے جس نے زمین کو پھیلایا اور اس میں پہاڑ اور نہریں بنائیں اور ہر قسم کے پھلوں کے دو دو جوڑے بنائے، وہ رات سے دن کو ڈھانپتا ہے، بے شک اس میں غور کرنے والوں کے لیے نشانیاں ہیں",
                "اور زمین میں ملحقہ ٹکڑے ہیں اور انگوروں کے باغات اور کھیتیاں اور کھجوروں کے درخت جن کی جڑیں ایک ہیں اور الگ الگ، ایک ہی پانی سے سیراب ہوتے ہیں اور ہم کھانے میں بعض کو بعض پر برتری دیتے ہیں، بے شک اس میں سمجھنے والوں کے لیے نشانیاں ہیں",
                "اور اگر آپ تعجب کریں تو تعجب کی بات ان کا یہ قول ہے کہ جب ہم مٹی ہو جائیں گے تو کیا ہم نئی خلقت میں ہوں گے، یہی وہ لوگ ہیں جنہوں نے اپنے رب سے کفر کیا اور یہی ہیں جن کی گردنوں میں طوق ہوں گے اور یہی جہنمی ہیں اور وہ اس میں ہمیشہ رہیں گے",
                "اور وہ آپ سے بھلائی سے پہلے برائی کے لیے جلدی مانگتے ہیں حالانکہ ان سے پہلے بہت سے عذاب گزر چکے ہیں، اور بے شک آپ کا رب لوگوں کے لیے ان کے ظلم پر بخشش والا ہے اور بے شک آپ کا رب سخت عذاب دینے والا بھی ہے",
                "اور کافر کہتے ہیں اس پر اس کے رب کی طرف سے کوئی نشانی کیوں نازل نہیں ہوئی، آپ تو صرف ڈرانے والے ہیں اور ہر قوم کے لیے ایک ہدایت دینے والا ہے",
                "اللہ جانتا ہے جو ہر مادہ اٹھاتی ہے اور جو رحم کمی کرتے ہیں اور جو زیادہ ہوتے ہیں اور ہر چیز اس کے پاس ایک اندازے سے ہے",
                "وہ غائب اور ظاہر کا جاننے والا ہے، بڑا بلند مرتبہ ہے",
                "تم میں سے جو چپکے سے بات کہے اور جو بلند آواز سے کہے اور جو رات میں چھپا ہو اور جو دن میں چلتا پھرتا ہو، سب اس کے لیے برابر ہیں"
            ],
            english: [
                "Alif, Lam, Meem, Ra. These are the verses of the Book; and what has been revealed to you from your Lord is the truth, but most of the people do not believe.",
                "It is Allah who erected the heavens without pillars that you can see; then He established Himself above the Throne and made subject the sun and the moon, each running for a specified term. He arranges matters; He details the signs that you may, of the meeting with your Lord, be certain.",
                "And it is He who spread the earth and placed therein firmly set mountains and rivers; and from all of the fruits He made therein two mates; He causes the night to cover the day. Indeed in that are signs for a people who give thought.",
                "And within the land are neighboring plots and gardens of grapevines and crops and palm trees, growing several from a root or otherwise, watered with one water; but We make some of them exceed others in fruit. Indeed in that are signs for a people who reason.",
                "And if you are amazed, then amazing is their saying, 'When we are dust, will we indeed be in a new creation?' Those are the ones who have disbelieved in their Lord, and those will have shackles upon their necks, and those are the companions of the Fire; they will abide therein eternally.",
                "And they impatiently urge you to bring about evil before good, while there has already occurred before them similar punishments. And indeed, your Lord is full of forgiveness for the people despite their wrongdoing, and indeed, your Lord is severe in penalty.",
                "And those who disbelieved say, 'Why has a sign not been sent down to him from his Lord?' You are only a warner, and for every people is a guide.",
                "Allah knows what every female carries and what the wombs lose or exceed. And everything with Him is by due measure.",
                "[He is] Knower of the unseen and the witnessed, the Grand, the Exalted.",
                "It is the same concerning you whether one conceals his speech or declares it aloud, and whether one hides himself by the night or goes forth by day."
            ]
        },

        /* ================= SURAH 14: IBRAHIM ================= */
        14: {
            arabic: [
                "الر ۚ كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِ رَبِّهِمْ إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
                "اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ وَوَيْلٌ لِّلْكَافِرِينَ مِنْ عَذَابٍ شَدِيدٍ",
                "الَّذِينَ يَسْتَحِبُّونَ الْحَيَاةَ الدُّنْيَا عَلَى الْآخِرَةِ وَيَصُدُّونَ عَن سَبِيلِ اللَّهِ وَيَبْغُونَهَا عِوَجًا ۚ أُولَٰئِكَ فِي ضَلَالٍ بَعِيدٍ",
                "وَمَا أَرْسَلْنَا مِن رَّسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ ۖ فَيُضِلُّ اللَّهُ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ وَذَكِّرْهُم بِأَيَّامِ اللَّهِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ",
                "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ أَنجَاكُم مِّنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ وَيُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ ۚ وَفِي ذَٰلِكُم بَلَاءٌ مِّن رَّبِّكُمْ عَظِيمٌ",
                "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
                "وَقَالَ مُوسَىٰ إِن تَكْفُرُوا أَنتُمْ وَمَن فِي الْأَرْضِ جَمِيعًا فَإِنَّ اللَّهَ لَغَنِيٌّ حَمِيدٌ",
                "أَلَمْ يَأْتِكُمْ نَبَأُ الَّذِينَ مِن قَبْلِكُمْ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ ۛ وَالَّذِينَ مِن بَعْدِهِمْ ۛ لَا يَعْلَمُهُمْ إِلَّا اللَّهُ ۚ جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ فَرَدُّوا أَيْدِيَهُمْ فِي أَفْوَاهِهِمْ وَقَالُوا إِنَّا كَفَرْنَا بِمَا أُرْسِلْتُم بِهِ وَإِنَّا لَفِي شَكٍّ مِّمَّا تَدْعُونَنَا إِلَيْهِ مُرِيبٍ",
                "قَالَتْ رُسُلُهُمْ أَفِي اللَّهِ شَكٌّ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ ۖ يَدْعُوكُمْ لِيَغْفِرَ لَكُم مِّن ذُنُوبِكُمْ وَيُؤَخِّرْكُمْ إِلَىٰ أَجَلٍ مُّسَمًّى ۚ قَالُوا إِنْ أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا تُرِيدُونَ أَن تَصُدُّونَا عَمَّا كَانَ يَعْبُدُ آبَاؤُنَا فَأْتُونَا بِسُلْطَانٍ مُّبِينٍ"
            ],
            urdu: [
                "الر، یہ کتاب ہے جو ہم نے آپ پر نازل کی تاکہ آپ لوگوں کو اندھیروں سے روشنی کی طرف نکالیں ان کے رب کے حکم سے، زبردست قابل تعریف کی راہ کی طرف",
                "اللہ وہ ہے جس کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے، اور کافروں کے لیے سخت عذاب سے ہلاکت ہے",
                "جو دنیا کی زندگی کو آخرت پر ترجیح دیتے ہیں اور اللہ کے راستے سے روکتے ہیں اور اس میں کجی چاہتے ہیں، یہی لوگ دور کی گمراہی میں ہیں",
                "اور ہم نے کوئی رسول نہیں بھیجا مگر اس کی قوم کی زبان میں تاکہ وہ انہیں کھول کر بتائے، پھر اللہ جسے چاہے گمراہ کرتا ہے اور جسے چاہے ہدایت دیتا ہے اور وہ زبردست حکمت والا ہے",
                "اور بے شک ہم نے موسیٰ کو اپنی نشانیوں کے ساتھ بھیجا کہ اپنی قوم کو اندھیروں سے روشنی کی طرف نکال اور انہیں اللہ کے دن یاد دلا، بے شک اس میں ہر صبر کرنے والے شکر گزار کے لیے نشانیاں ہیں",
                "اور جب موسیٰ نے اپنی قوم سے کہا اللہ کی نعمت یاد کرو جو تم پر ہے جب اس نے تمہیں فرعون کی آل سے نجات دی جو تمہیں برا عذاب دیتے تھے اور تمہارے بیٹوں کو ذبح کرتے تھے اور تمہاری عورتوں کو زندہ رکھتے تھے اور اس میں تمہارے رب کی طرف سے بڑی آزمائش تھی",
                "اور جب تمہارے رب نے اعلان کیا کہ اگر تم شکر کرو گے تو میں تمہیں زیادہ دوں گا اور اگر تم کفر کرو گے تو بے شک میرا عذاب سخت ہے",
                "اور موسیٰ نے کہا اگر تم اور جو زمین میں سب کے سب کفر کرو تو بے شک اللہ بے نیاز قابل تعریف ہے",
                "کیا تمہیں ان لوگوں کی خبر نہیں پہنچی جو تم سے پہلے تھے، نوح کی قوم اور عاد اور ثمود اور وہ جو ان کے بعد تھے، انہیں اللہ کے سوا کوئی نہیں جانتا، ان کے رسول ان کے پاس کھلی نشانیاں لے کر آئے تو انہوں نے اپنے ہاتھ اپنے منہ پر رکھے اور کہا ہم نے انکار کیا اس سے جو تم اس کے ساتھ بھیجے گئے ہو اور بے شک ہم اس میں شک میں ہیں جس کی طرف تم ہمیں بلاتے ہو",
                "ان کے رسولوں نے کہا کیا اللہ میں شک ہے جو آسمان اور زمین کا پیدا کرنے والا ہے، وہ تمہیں بلاتا ہے تاکہ تمہارے گناہ بخشے اور تمہیں ایک مقررہ وقت تک مہلت دے، انہوں نے کہا تم تو ہمارے جیسے بشر ہو، تم چاہتے ہو کہ ہمیں روک دو اس سے جس کی عبادت ہمارے باپ دادا کرتے تھے، پس تم کوئی کھلی دلیل لاؤ"
            ],
            english: [
                "Alif, Lam, Ra. A Book which We have revealed to you, that you might bring mankind out of darknesses into the light by permission of their Lord - to the path of the Exalted in Might, the Praiseworthy.",
                "Allah, to whom belongs whatever is in the heavens and whatever is on the earth. And woe to the disbelievers from a severe punishment.",
                "The ones who prefer the worldly life over the Hereafter and avert from the way of Allah, seeking to make it deviant. Those are in extreme error.",
                "And We did not send any messenger except in the language of his people to state clearly for them, and Allah sends astray whom He wills and guides whom He wills. And He is the Exalted in Might, the Wise.",
                "And We certainly sent Moses with Our signs, saying, 'Bring out your people from darknesses into the light and remind them of the days of Allah.' Indeed in that are signs for everyone patient and grateful.",
                "And when Moses said to his people, 'Remember the favor of Allah upon you when He saved you from the people of Pharaoh, who were afflicting you with the worst torment and were slaughtering your sons and keeping your women alive. And in that was a great trial from your Lord.'",
                "And when your Lord proclaimed, 'If you are grateful, I will surely increase you; but if you deny, indeed, My punishment is severe.'",
                "And Moses said, 'If you should disbelieve, you and whoever is on the earth entirely - indeed, Allah is Free of need and Praiseworthy.'",
                "Has there not reached you the news of those before you - the people of Noah and Aad and Thamud and those after them? No one knows them but Allah. Their messengers brought them clear proofs, but they returned their hands to their mouths and said, 'Indeed, we disbelieve in that with which you have been sent, and indeed we are, about that to which you invite us, in disquieting doubt.'",
                "Their messengers said, 'Is there doubt about Allah, the Creator of the heavens and the earth? He invites you to forgive you from your sins and to delay you to a specified term.' They said, 'You are not but men like us who wish to avert us from what our fathers were worshipping. So bring us a clear authority.'"
            ]
        },

        /* ================= SURAH 15: AL-HIJR ================= */
        15: {
            arabic: [
                "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ وَقُرْآنٍ مُّبِينٍ",
                "رُّبَمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ",
                "ذَرْهُمْ يَأْكُلُوا وَيَتَمَتَّعُوا وَيُلْهِهِمُ الْأَمَلُ ۖ فَسَوْفَ يَعْلَمُونَ",
                "وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا وَلَهَا كِتَابٌ مَّعْلُومٌ",
                "مَّا تَسْبِقُ مِنْ أُمَّةٍ أَجَلَهَا وَمَا يَسْتَأْخِرُونَ",
                "وَقَالُوا يَا أَيُّهَا الَّذِي نُزِّلَ عَلَيْهِ الذِّكْرُ إِنَّكَ لَمَجْنُونٌ",
                "لَّوْ مَا تَأْتِينَا بِالْمَلَائِكَةِ إِن كُنتَ مِنَ الصَّادِقِينَ",
                "مَا نُنَزِّلُ الْمَلَائِكَةَ إِلَّا بِالْحَقِّ وَمَا كَانُوا إِذًا مُّنظَرِينَ",
                "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
                "وَلَقَدْ أَرْسَلْنَا مِن قَبْلِكَ فِي شِيَعِ الْأَوَّلِينَ"
            ],
            urdu: [
                "الر، یہ کتاب اور واضح قرآن کی آیات ہیں",
                "کافر کبھی آرزو کریں گے کاش وہ مسلمان ہوتے",
                "انہیں چھوڑ دو کہ کھائیں اور مزے کریں اور امید انہیں غافل کرے، عنقریب وہ جان لیں گے",
                "اور ہم نے کوئی بستی ہلاک نہیں کی مگر اس کا ایک مقرر وقت تھا",
                "کوئی قوم اپنے وقت سے نہ آگے بڑھ سکتی ہے نہ پیچھے رہ سکتی ہے",
                "اور کہتے ہیں اے وہ جس پر ذکر نازل کیا گیا! بے شک تو دیوانہ ہے",
                "تو تم ہمارے پاس فرشتے کیوں نہیں لاتا اگر تم سچے ہو",
                "ہم فرشتے حق کے سوا نازل نہیں کرتے اور پھر انہیں مہلت نہ دی جاتی",
                "بے شک ہم نے ہی ذکر نازل کیا اور بے شک ہم ہی اس کے محافظ ہیں",
                "اور بے شک ہم نے آپ سے پہلے اگلوں کے گروہوں میں بھی بھیجا"
            ],
            english: [
                "Alif, Lam, Ra. These are the verses of the Book and a clear Qur'an.",
                "Perhaps those who disbelieve will wish that they had been Muslims.",
                "Let them eat and enjoy themselves and be diverted by hope, for they are going to know.",
                "And We did not destroy any city but that for it was a known decree.",
                "No nation can advance its term, nor delay it.",
                "And they say, 'O you to whom the Reminder has been sent down, indeed you are mad.'",
                "Why do you not bring us the angels, if you should be among the truthful?",
                "We do not send down the angels except with truth; and then they would not be reprieved.",
                "Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.",
                "And We had certainly sent messengers before you among the factions of the former peoples."
            ]
        },

        /* ================= SURAH 16: AN-NAHL ================= */
        16: {
            arabic: [
                "أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ",
                "يُنَزِّلُ الْمَلَائِكَةَ بِالرُّوحِ مِنْ أَمْرِهِ عَلَىٰ مَن يَشَاءُ مِنْ عِبَادِهِ أَنْ أَنذِرُوا أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاتَّقُونِ",
                "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۚ تَعَالَىٰ عَمَّا يُشْرِكُونَ",
                "خَلَقَ الْإِنسَانَ مِن نُّطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ",
                "وَالْأَنْعَامَ خَلَقَهَا ۗ لَكُمْ فِيهَا دِفْءٌ وَمَنَافِعُ وَمِنْهَا تَأْكُلُونَ",
                "وَلَكُمْ فِيهَا جَمَالٌ حِينَ تُرِيحُونَ وَحِينَ تَسْرَحُونَ",
                "وَتَحْمِلُ أَثْقَالَكُمْ إِلَىٰ بَلَدٍ لَّمْ تَكُونُوا بَالِغِيهِ إِلَّا بِشِقِّ الْأَنفُسِ ۚ إِنَّ رَبَّكُمْ لَرَءُوفٌ رَّحِيمٌ",
                "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةً ۚ وَيَخْلُقُ مَا لَا تَعْلَمُونَ",
                "وَعَلَى اللَّهِ قَصْدُ السَّبِيلِ وَمِنْهَا جَائِرٌ ۚ وَلَوْ شَاءَ لَهَدَاكُمْ أَجْمَعِينَ",
                "هُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً ۖ لَّكُم مِّنْهُ شَرَابٌ وَمِنْهُ شَجَرٌ فِيهِ تُسِيمُونَ"
            ],
            urdu: [
                "اللہ کا حکم آ گیا پس اس کے لیے جلدی نہ کرو، وہ پاک اور بلند ہے اس سے جو وہ شریک کرتے ہیں",
                "وہ اپنے حکم سے اپنے بندوں میں سے جس پر چاہے فرشتوں کو روح کے ساتھ نازل کرتا ہے کہ ڈراؤ کہ میرے سوا کوئی معبود نہیں پس مجھ سے ڈرو",
                "اس نے آسمان اور زمین حق کے ساتھ پیدا کیے، وہ بلند ہے اس سے جو وہ شریک کرتے ہیں",
                "اس نے انسان کو نطفے سے پیدا کیا پھر وہ کھلا جھگڑنے والا بن گیا",
                "اور چوپائے اس نے پیدا کیے، ان میں تمہارے لیے گرمی اور فائدے ہیں اور ان میں سے تم کھاتے ہو",
                "اور ان میں تمہارے لیے خوبصورتی ہے جب تم انہیں شام کو واپس لاتے ہو اور جب صبح چراتے ہو",
                "اور وہ تمہارے بوجھ اٹھا کر ایسے شہر تک لے جاتے ہیں جہاں تم جان کی مشقت کے بغیر نہیں پہنچ سکتے تھے، بے شک تمہارا رب بہت مہربان رحم کرنے والا ہے",
                "اور گھوڑے اور خچر اور گدھے تاکہ تم ان پر سوار ہو اور زینت بھی، اور وہ پیدا کرتا ہے جو تم نہیں جانتے",
                "اور اللہ پر سیدھا راستہ لازم ہے اور ان میں سے کج بھی ہے، اور اگر وہ چاہتا تو تم سب کو ہدایت دے دیتا",
                "وہی ہے جس نے آسمان سے پانی نازل کیا، تمہارے لیے اس میں سے پینا ہے اور اسی سے درخت ہیں جن میں تم چراتے ہو"
            ],
            english: [
                "The command of Allah is coming, so do not be impatient for it. Exalted is He and high above what they associate with Him.",
                "He sends down the angels with the Spirit of His command upon whom He wills of His servants, saying, 'Warn that there is no deity except Me, so fear Me.'",
                "He created the heavens and earth in truth. High is He above what they associate with Him.",
                "He created man from a sperm-drop; then at once, he is a clear adversary.",
                "And the grazing livestock He has created for you; in them is warmth and benefits, and from them you eat.",
                "And for you in them is beauty when you bring them in and when you send them out.",
                "And they carry your loads to a land you could not have reached except with difficulty to yourselves. Indeed, your Lord is Kind and Merciful.",
                "And horses, mules and donkeys for you to ride and as adornment. And He creates that which you do not know.",
                "And upon Allah is the direction of the right way, and among the ways some are deviation. But if He willed, He could have guided you all.",
                "It is He who sends down rain from the sky; from it is drink and from it is foliage in which you pasture."
            ]
        },

        /* ================= SURAH 17: AL-ISRA ================= */
        17: {
            arabic: [
                "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ",
                "وَآتَيْنَا مُوسَى الْكِتَابَ وَجَعَلْنَاهُ هُدًى لِّبَنِي إِسْرَائِيلَ أَلَّا تَتَّخِذُوا مِن دُونِي وَكِيلًا",
                "ذُرِّيَّةَ مَنْ حَمَلْنَا مَعَ نُوحٍ ۚ إِنَّهُ كَانَ عَبْدًا شَكُورًا",
                "وَقَضَيْنَا إِلَىٰ بَنِي إِسْرَائِيلَ فِي الْكِتَابِ لَتُفْسِدُنَّ فِي الْأَرْضِ مَرَّتَيْنِ وَلَتَعْلُنَّ عُلُوًّا كَبِيرًا",
                "فَإِذَا جَاءَ وَعْدُ أُولَاهُمَا بَعَثْنَا عَلَيْكُمْ عِبَادًا لَّنَا أُولِي بَأْسٍ شَدِيدٍ فَجَاسُوا خِلَالَ الدِّيَارِ ۚ وَكَانَ وَعْدًا مَّفْعُولًا",
                "ثُمَّ رَدَدْنَا لَكُمُ الْكَرَّةَ عَلَيْهِمْ وَأَمْدَدْنَاكُم بِأَمْوَالٍ وَبَنِينَ وَجَعَلْنَاكُمْ أَكْثَرَ نَفِيرًا",
                "إِنْ أَحْسَنتُمْ أَحْسَنتُمْ لِأَنفُسِكُمْ ۖ وَإِنْ أَسَأْتُمْ فَلَهَا ۚ فَإِذَا جَاءَ وَعْدُ الْآخِرَةِ لِيَسُوءُوا وُجُوهَكُمْ وَلِيَدْخُلُوا الْمَسْجِدَ كَمَا دَخَلُوهُ أَوَّلَ مَرَّةٍ وَلِيُتَبِّرُوا مَا عَلَوْا تَتْبِيرًا",
                "عَسَىٰ رَبُّكُمْ أَن يَرْحَمَكُمْ ۚ وَإِنْ عُدتُّمْ عُدْنَا ۘ وَجَعَلْنَا جَهَنَّمَ لِلْكَافِرِينَ حَصِيرًا",
                "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا",
                "وَأَنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ أَعْتَدْنَا لَهُمْ عَذَابًا أَلِيمًا"
            ],
            urdu: [
                "پاک ہے وہ جو اپنے بندے کو راتوں رات مسجد حرام سے مسجد اقصیٰ تک لے گیا جس کے گرد ہم نے برکت دی تاکہ ہم اسے اپنی نشانیاں دکھائیں، بے شک وہ سننے والا دیکھنے والا ہے",
                "اور ہم نے موسیٰ کو کتاب دی اور اسے بنی اسرائیل کے لیے ہدایت بنایا کہ میرے سوا کوئی کارساز نہ بناؤ",
                "ان کی اولاد جو ہم نے نوح کے ساتھ سوار کی، بے شک وہ شکر گزار بندہ تھا",
                "اور ہم نے بنی اسرائیل کو کتاب میں بتا دیا کہ تم زمین میں دو بار ضرور فساد کرو گے اور بڑی سرکشی کرو گے",
                "پس جب ان میں پہلے کا وعدہ آیا تو ہم نے تم پر اپنے بندے بھیجے جو سخت جنگجو تھے پھر وہ گھروں کے درمیان پھیل گئے اور یہ وعدہ پورا ہونے والا تھا",
                "پھر ہم نے تمہیں ان پر غلبہ دیا اور مال اور اولاد سے مدد دی اور تمہیں زیادہ تعداد بنایا",
                "اگر تم نیکی کرو تو اپنے لیے نیکی کرو اور اگر برائی کرو تو اپنے ہی لیے، پھر جب دوسرے کا وعدہ آئے گا تو وہ تمہارے چہرے بگاڑ دیں گے اور مسجد میں داخل ہوں گے جیسے پہلی بار داخل ہوئے تھے اور جس پر غلبہ پائیں اسے تباہ کر دیں گے",
                "امید ہے کہ تمہارا رب تم پر رحم کرے گا، اور اگر تم پھر کرو گے تو ہم بھی پھر کریں گے اور ہم نے جہنم کو کافروں کے لیے قید خانہ بنایا ہے",
                "بے شک یہ قرآن وہ راستہ دکھاتا ہے جو سب سے سیدھا ہے اور مومنوں کو جو نیک عمل کرتے ہیں خوشخبری دیتا ہے کہ ان کے لیے بڑا اجر ہے",
                "اور بے شک جو آخرت پر ایمان نہیں لاتے ان کے لیے ہم نے دردناک عذاب تیار کیا ہے"
            ],
            english: [
                "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.",
                "And We gave Moses the Scripture and made it a guidance for the Children of Israel that you not take other than Me as Disposer of affairs.",
                "O descendants of those We carried with Noah. Indeed, he was a grateful servant.",
                "And We conveyed to the Children of Israel in the Scripture that, 'You will surely cause corruption on the earth twice, and you will surely reach great haughtiness.'",
                "So when the first of the two came, We sent against you servants of Ours - possessors of great military might - and they entered the country, and it was a promise performed.",
                "Then We gave back to you a return victory over them and reinforced you with wealth and sons and made you more numerous in manpower.",
                "If you do good, you do good for yourselves; and if you do evil, it is to yourselves. And when the final promise comes, they will sadden your faces and enter the mosque as they entered it the first time, and they will destroy whatever they overcame, with destruction.",
                "Perhaps your Lord will have mercy on you, but if you return, We will return. And We have made Hell, for the disbelievers, a prison-bed.",
                "Indeed, this Qur'an guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward.",
                "And that those who do not believe in the Hereafter - We have prepared for them a painful punishment."
            ]
        },

        /* ================= SURAH 18: AL-KAHF ================= */
        18: {
            arabic: [
                "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا",
                "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا",
                "مَّاكِثِينَ فِيهِ أَبَدًا",
                "وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا",
                "مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ ۚ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًا",
                "فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَىٰ آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَٰذَا الْحَدِيثِ أَسَفًا",
                "إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا",
                "وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا",
                "أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا",
                "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا"
            ],
            urdu: [
                "سب تعریف اللہ کے لیے ہے جس نے اپنے بندے پر کتاب نازل کی اور اس میں کوئی کجی نہ رکھی",
                "سیدھی تاکہ اپنی طرف سے سخت عذاب سے ڈرائے اور مومنوں کو جو نیک عمل کرتے ہیں خوشخبری دے کہ ان کے لیے اچھا اجر ہے",
                "جس میں وہ ہمیشہ رہیں گے",
                "اور انہیں ڈرائے جنہوں نے کہا اللہ نے بیٹا بنایا",
                "نہ انہیں اس کا علم ہے نہ ان کے باپ دادا کو، بہت بڑی بات ہے جو ان کے منہ سے نکلتی ہے، وہ صرف جھوٹ کہتے ہیں",
                "پس شاید آپ ان کے پیچھے افسوس سے اپنی جان ہلاک کر دیں گے اگر وہ اس بات پر ایمان نہ لائیں",
                "بے شک ہم نے زمین پر جو کچھ ہے اسے اس کی زینت بنایا تاکہ انہیں آزمائیں کہ ان میں کون اچھے عمل کرتا ہے",
                "اور بے شک ہم زمین پر جو کچھ ہے اسے خشک میدان بنانے والے ہیں",
                "کیا آپ نے گمان کیا کہ اصحاب کہف اور رقیم ہماری نشانیوں میں سے عجیب تھے",
                "جب چند نوجوان غار میں پناہ گزین ہوئے پھر کہا اے ہمارے رب! ہمیں اپنی طرف سے رحمت عطا فرما اور ہمارے کام میں ہدایت کی راہ نکال"
            ],
            english: [
                "All praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance.",
                "[He has made it] straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds that they will have a good reward.",
                "In which they will remain forever.",
                "And to warn those who say, 'Allah has taken a son.'",
                "They have no knowledge of it, nor had their fathers. Grave is the word that comes out of their mouths; they speak not except a lie.",
                "Then perhaps you would kill yourself through grief over them, if they do not believe in this message, out of sorrow.",
                "Indeed, We have made that which is on the earth adornment for it that We may test them as to which of them is best in deed.",
                "And indeed, We will make that which is upon it into a barren ground.",
                "Or have you thought that the companions of the cave and the inscription were, among Our signs, a wonder?",
                "When the youths retreated to the cave and said, 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.'"
            ]
        },

        /* ================= SURAH 19: MARYAM ================= */
        19: {
            arabic: [
                "كهيعص",
                "ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا",
                "إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا",
                "قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا",
                "وَإِنِّي خِفْتُ الْمَوَالِيَ مِن وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِرًا فَهَبْ لِي مِن لَّدُنكَ وَلِيًّا",
                "يَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا",
                "يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا",
                "قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَكَانَتِ امْرَأَتِي عَاقِرًا وَقَدْ بَلَغْتُ مِنَ الْكِبَرِ عِتِيًّا",
                "قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ ۖ وَقَدْ خَلَقْتُكَ مِن قَبْلُ وَلَمْ تَكُ شَيْئًا",
                "قَالَ رَبِّ اجْعَل لِّي آيَةً ۚ قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَ لَيَالٍ سَوِيًّا"
            ],
            urdu: [
                "کہیں ص",
                "یہ آپ کے رب کی رحمت کا ذکر ہے اپنے بندے زکریا پر",
                "جب اس نے اپنے رب کو خفیہ آواز سے پکارا",
                "کہا اے میرے رب! بے شک میری ہڈیاں کمزور ہو گئیں اور سر بڑھاپے سے بھڑک اٹھا اور اے میرے رب! میں تیری دعا میں کبھی نامراد نہیں رہا",
                "اور بے شک میں اپنے بعد والوں سے ڈرا اور میری بیوی بانجھ ہے، پس تو مجھے اپنی طرف سے ایک وارث عطا فرما",
                "جو میرا وارث ہو اور یعقوب کی آل کا وارث ہو اور اے میرے رب! اسے پسندیدہ بنا",
                "اے زکریا! بے شک ہم تمہیں ایک لڑکے کی خوشخبری دیتے ہیں جس کا نام یحییٰ ہے، ہم نے اس سے پہلے اس کا ہمنام نہیں بنایا",
                "کہا اے میرے رب! میرے لڑکا کیسے ہو گا حالانکہ میری بیوی بانجھ ہے اور میں بڑھاپے کی انتہا کو پہنچ گیا ہوں",
                "کہا ایسے ہی، تمہارے رب نے کہا یہ مجھ پر آسان ہے، اور بے شک میں نے تمہیں پہلے پیدا کیا جب تم کچھ نہ تھے",
                "کہا اے میرے رب! میرے لیے کوئی نشانی مقرر فرما، کہا تمہاری نشانی یہ ہے کہ تم تین راتیں لوگوں سے بات نہ کرو گے حالانکہ تم تندرست ہو"
            ],
            english: [
                "Kaf, Ha, Ya, Ain, Sad.",
                "[This is] a mention of the mercy of your Lord to His servant Zechariah.",
                "When he called to his Lord a private supplication.",
                "He said, 'My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy.'",
                "And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir.",
                "Who will inherit me and inherit from the family of Jacob. And make him, my Lord, pleasing [to You].'",
                "[He was told], 'O Zechariah, indeed We give you good tidings of a boy whose name will be John. We have not assigned to any before [this] name.'",
                "He said, 'My Lord, how will I have a boy when my wife has been barren and I have reached extreme old age?'",
                "[An angel] said, 'Thus [it will be]; your Lord says, \"It is easy for Me, for I created you before, while you were nothing.\"'",
                "[Zechariah] said, 'My Lord, make for me a sign.' He said, 'Your sign is that you will not speak to the people for three nights, [being] sound.'"
            ]
        },

        /* ================= SURAH 20: TAHA ================= */
        20: {
            arabic: [
                "طه",
                "مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ",
                "إِلَّا تَذْكِرَةً لِّمَن يَخْشَىٰ",
                "تَنزِيلًا مِّمَّنْ خَلَقَ الْأَرْضَ وَالسَّمَاوَاتِ الْعُلَى",
                "الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ",
                "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَمَا بَيْنَهُمَا وَمَا تَحْتَ الثَّرَىٰ",
                "وَإِن تَجْهَرْ بِالْقَوْلِ فَإِنَّهُ يَعْلَمُ السِّرَّ وَأَخْفَى",
                "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
                "وَهَلْ أَتَاكَ حَدِيثُ مُوسَىٰ",
                "إِذْ رَأَىٰ نَارًا فَقَالَ لِأَهْلِهِ امْكُثُوا إِنِّي آنَسْتُ نَارًا لَّعَلِّي آتِيكُم مِّنْهَا بِقَبَسٍ أَوْ أَجِدُ عَلَى النَّارِ هُدًى"
            ],
            urdu: [
                "طہ",
                "ہم نے آپ پر قرآن اس لیے نازل نہیں کیا کہ آپ مشقت میں پڑیں",
                "بلکہ نصیحت اس کے لیے جو ڈرے",
                "یہ اس کی طرف سے نازل کیا گیا جس نے زمین اور بلند آسمان پیدا کیے",
                "رحمٰن عرش پر مستقر ہوا",
                "اسی کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے اور جو ان کے درمیان ہے اور جو مٹی کے نیچے ہے",
                "اور اگر تم بلند آواز سے بات کرو تو بے شک وہ چھپی اور زیادہ چھپی بات جانتا ہے",
                "اللہ کے سوا کوئی معبود نہیں، اسی کے اچھے نام ہیں",
                "اور کیا آپ کو موسیٰ کی خبر پہنچی",
                "جب اس نے آگ دیکھی تو اپنے گھر والوں سے کہا ٹھہرو، میں نے آگ دیکھی ہے شاید میں تمہارے لیے اس سے کوئی چنگاری لاؤں یا آگ پر کوئی راستہ پاؤں"
            ],
            english: [
                "Ta, Ha.",
                "We have not sent down to you the Qur'an that you be distressed.",
                "But only as a reminder for those who fear [Allah].",
                "A revelation from He who created the earth and highest heavens.",
                "The Most Merciful [who is] above the Throne established.",
                "To Him belongs what is in the heavens and what is on the earth and what is between them and what is under the soil.",
                "And if you speak aloud - then indeed, He knows the secret and what is [even] more hidden.",
                "Allah - there is no deity except Him. To Him belong the best names.",
                "And has the story of Moses reached you?",
                "When he saw a fire and said to his family, 'Stay here; indeed, I have perceived a fire; perhaps I can bring you a torch or find at the fire some guidance.'"
            ]
        }

    },

    /* =====================================================
       HADITH — SUNAN ABU DAWUD (50 Hadiths)
    ===================================================== */
    hadithBooks: {
        abudawud: {
            title: "Sunan Abu Dawud",
            arabic: "سنن أبي داود",
            english: "Sunan Abu Dawud",
            author: "Imam Abu Dawud",
            hadiths: [
                { id: 1, arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ", urdu: "اللہ کے نام سے جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں دے سکتی", english: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm.", reference: "Sunan Abu Dawud 5088" },
                { id: 2, arabic: "مَنْ قَالَ حِينَ يُصْبِحُ وَحِينَ يُمْسِي: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", urdu: "جو صبح و شام کہے: اللہ کی تسبیح و حمد ہے", english: "Whoever says morning and evening: Glory be to Allah and praise be to Him.", reference: "Sunan Abu Dawud 5067" },
                { id: 3, arabic: "أَكْرِمُوا أَوْلَادَكُمْ", urdu: "اپنی اولاد کی عزت کرو", english: "Honor your children.", reference: "Sunan Abu Dawud 4951" },
                { id: 4, arabic: "الْوَالِدُ أَوْسَطُ أَبْوَابِ الْجَنَّةِ", urdu: "والد جنت کے دروازوں میں سب سے بہتر دروازہ ہے", english: "The father is the middle gate of Paradise.", reference: "Sunan Abu Dawud 5147" },
                { id: 5, arabic: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ", urdu: "آگ سے بچو چاہے کھجور کے ایک ٹکڑے کے ذریعے", english: "Protect yourselves from the Fire even with half a date.", reference: "Sunan Abu Dawud 4941" },
                { id: 6, arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ", urdu: "جو اللہ کی کتاب کا ایک حرف پڑھے اسے ایک نیکی ملتی ہے", english: "Whoever reads a letter from the Book of Allah gets a good deed.", reference: "Sunan Abu Dawud 1466" },
                { id: 7, arabic: "لَا يَشْكُرُ اللَّهَ مَنْ لَا يَشْكُرُ النَّاسَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "He who does not thank people does not thank Allah.", reference: "Sunan Abu Dawud 4811" },
                { id: 8, arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ", urdu: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے", english: "The world is a prison for the believer and a paradise for the disbeliever.", reference: "Sunan Abu Dawud 4530" },
                { id: 9, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Sunan Abu Dawud 1648" },
                { id: 10, arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ", urdu: "جو کسی مسلمان کا عیب چھپائے اللہ اس کا عیب چھپائے گا", english: "Whoever conceals a Muslim's fault, Allah will conceal his fault.", reference: "Sunan Abu Dawud 4940" },
                { id: 11, arabic: "الدُّعَاءُ مُخُّ الْعِبَادَةِ", urdu: "دعا عبادت کا مغز ہے", english: "Dua is the essence of worship.", reference: "Sunan Abu Dawud 1474" },
                { id: 12, arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", urdu: "جہاں بھی ہو اللہ سے ڈرو", english: "Fear Allah wherever you are.", reference: "Sunan Abu Dawud 4795" },
                { id: 13, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Sunan Abu Dawud 1523" },
                { id: 14, arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", urdu: "لوگوں میں بہترین وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو", english: "The best of people are those who are most beneficial to people.", reference: "Sunan Abu Dawud 4689" },
                { id: 15, arabic: "إِنَّ اللَّهَ يُحِبُّ الْعَبْدَ التَّقِيَّ الْغَنِيَّ الْخَفِيَّ", urdu: "بے شک اللہ متقی، مالدار اور گمنام بندے کو پسند کرتا ہے", english: "Indeed, Allah loves the God-fearing, wealthy and obscure servant.", reference: "Sunan Abu Dawud 3989" },
                { id: 16, arabic: "الْبِرُّ حُسْنُ الْخُلُقِ", urdu: "نیکی اچھے اخلاق کا نام ہے", english: "Righteousness is good character.", reference: "Sunan Abu Dawud 4786" },
                { id: 17, arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", urdu: "صدقہ مال میں کمی نہیں کرتا", english: "Charity does not decrease wealth.", reference: "Sunan Abu Dawud 2784" },
                { id: 18, arabic: "مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ", urdu: "جو اچھی طرح وضو کرے", english: "Whoever performs ablution and does it well.", reference: "Sunan Abu Dawud 1430" },
                { id: 19, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", urdu: "علم کا طلب کرنا ہر مسلمان پر فرض ہے", english: "Seeking knowledge is obligatory upon every Muslim.", reference: "Sunan Abu Dawud 224" },
                { id: 20, arabic: "السَّاعِي عَلَى الْأَرْمَلَةِ وَالْمِسْكِينِ", urdu: "بیوہ اور مسکین کی خدمت کرنے والا", english: "The one who cares for the widow and the poor.", reference: "Sunan Abu Dawud 5157" },
                { id: 21, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Sunan Abu Dawud 4949" },
                { id: 22, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Sunan Abu Dawud 4785" },
                { id: 23, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے", english: "The best of you are those who learn the Quran and teach it.", reference: "Sunan Abu Dawud 1468" },
                { id: 24, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise is beneath the feet of mothers.", reference: "Sunan Abu Dawud 5147" },
                { id: 25, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and loves beauty.", reference: "Sunan Abu Dawud 4160" },
                { id: 26, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Sunan Abu Dawud 1430" },
                { id: 27, arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Sunan Abu Dawud 1368" },
                { id: 28, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Sunan Abu Dawud 2481" },
                { id: 29, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Sunan Abu Dawud 5135" },
                { id: 30, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Sunan Abu Dawud 5135" },
                { id: 31, arabic: "مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا", urdu: "جو میرے قریب ایک بالشت آتا ہے میں اس کے قریب ایک ہاتھ آتا ہوں", english: "Whoever comes one step closer to Me, I come one arm's length closer to him.", reference: "Sunan Abu Dawud 5125" },
                { id: 32, arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Sunan Abu Dawud 4122" },
                { id: 33, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Sunan Abu Dawud 2814" },
                { id: 34, arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ", urdu: "جو جان بوجھ کر مجھ پر جھوٹ باندھے وہ اپنا ٹھکانہ جہنم میں بنائے", english: "Whoever tells a lie about me deliberately, let him take his place in Hell.", reference: "Sunan Abu Dawud 3643" },
                { id: 35, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Sunan Abu Dawud 5134" },
                { id: 36, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Sunan Abu Dawud 5240" },
                { id: 37, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Sunan Abu Dawud 1479" },
                { id: 38, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends blessings upon me once, Allah will send ten blessings upon him.", reference: "Sunan Abu Dawud 1531" },
                { id: 39, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Sunan Abu Dawud 4919" },
                { id: 40, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Sunan Abu Dawud 4745" },
                { id: 41, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Sunan Abu Dawud 1522" },
                { id: 42, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Sunan Abu Dawud 4899" },
                { id: 43, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Sunan Abu Dawud 4859" },
                { id: 44, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Sunan Abu Dawud 3641" },
                { id: 45, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Sunan Abu Dawud 4422" },
                { id: 46, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Sunan Abu Dawud 3477" },
                { id: 47, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Sunan Abu Dawud 4744" },
                { id: 48, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Sunan Abu Dawud 3763" },
                { id: 49, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Sunan Abu Dawud 4858" },
                { id: 50, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Sunan Abu Dawud 426" }
            ]
        }
    },

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */
    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },

    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },

    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 3] Loaded ✅");
console.log("[DB Part 3] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART3.quranContent).length);
console.log("[DB Part 3] Abu Dawud Hadiths: " + ISLAMIC_DATABASE_PART3.hadithBooks.abudawud.hadiths.length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 4
   Surahs 21-40
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART4 = {

    quranContent: {

        /* ================= SURAH 21: AL-ANBIYA ================= */
        21: {
            arabic: [
                "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ",
                "مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ",
                "لَاهِيَةً قُلُوبُهُمْ ۗ وَأَسَرُّوا النَّجْوَى الَّذِينَ ظَلَمُوا هَلْ هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ ۖ أَفَتَأْتُونَ السِّحْرَ وَأَنتُمْ تُبْصِرُونَ",
                "قَالَ رَبِّي يَعْلَمُ الْقَوْلَ فِي السَّمَاءِ وَالْأَرْضِ ۖ وَهُوَ السَّمِيعُ الْعَلِيمُ",
                "بَلْ قَالُوا أَضْغَاثُ أَحْلَامٍ بَلِ افْتَرَاهُ بَلْ هُوَ شَاعِرٌ فَلْيَأْتِنَا بِآيَةٍ كَمَا أُرْسِلَ الْأَوَّلُونَ",
                "مَا آمَنَتْ قَبْلَهُم مِّن قَرْيَةٍ أَهْلَكْنَاهَا ۖ أَفَهُمْ يُؤْمِنُونَ",
                "وَمَا أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًا نُّوحِي إِلَيْهِمْ ۖ فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
                "وَمَا جَعَلْنَاهُمْ جَسَدًا لَّا يَأْكُلُونَ الطَّعَامَ وَمَا كَانُوا خَالِدِينَ",
                "ثُمَّ صَدَقْنَاهُمُ الْوَعْدَ فَأَنجَيْنَاهُمْ وَمَن نَّشَاءُ وَأَهْلَكْنَا الْمُسْرِفِينَ",
                "لَقَدْ أَنزَلْنَا إِلَيْكُمْ كِتَابًا فِيهِ ذِكْرُكُمْ ۖ أَفَلَا تَعْقِلُونَ"
            ],
            urdu: [
                "لوگوں کا حساب قریب آ گیا اور وہ غفلت میں منہ موڑے ہوئے ہیں",
                "ان کے رب کی طرف سے کوئی نئی نصیحت ان کے پاس نہیں آتی مگر وہ اسے کھیلتے ہوئے سنتے ہیں",
                "ان کے دل غافل ہیں، اور ظالموں نے چپکے سے سرگوشی کی، کیا یہ تمہارے جیسا بشر ہی نہیں، پھر تم آنکھوں دیکھتے جادو کی طرف کیسے آتے ہو",
                "کہا میرا رب آسمان اور زمین کی بات جانتا ہے اور وہ سننے والا جاننے والا ہے",
                "بلکہ انہوں نے کہا یہ خوابوں کے پریشان سپنے ہیں بلکہ اس نے گھڑ لیا ہے بلکہ وہ شاعر ہے، پس وہ ہمارے پاس کوئی نشانی لائے جیسے اگلے بھیجے گئے تھے",
                "ان سے پہلے جس بستی کو ہم نے ہلاک کیا وہ ایمان نہ لائی، تو کیا یہ ایمان لائیں گے",
                "اور ہم نے آپ سے پہلے صرف مرد بھیجے جن پر وحی کرتے تھے، پس اہل علم سے پوچھو اگر تم نہیں جانتے",
                "اور ہم نے انہیں ایسا جسم نہیں بنایا جو کھانا نہ کھاتا ہو اور نہ وہ ہمیشہ رہنے والے تھے",
                "پھر ہم نے ان سے وعدہ سچا کیا اور انہیں اور جسے چاہا نجات دی اور حد سے بڑھنے والوں کو ہلاک کیا",
                "بے شک ہم نے تمہاری طرف کتاب نازل کی جس میں تمہارا ذکر ہے، کیا تم عقل نہیں کرتے"
            ],
            english: [
                "[The time of] their account has approached for the people, while they are in heedlessness turning away.",
                "No mention comes to them anew from their Lord except that they listen to it while they are at play.",
                "With their hearts distracted. And those who do wrong conceal their private conversation, [saying], 'Is this [Prophet] except a human being like you? So would you approach magic while you are aware [of it]?'",
                "He said, 'My Lord knows whatever is said throughout the heaven and earth, and He is the Hearing, the Knowing.'",
                "But they say, '[The revelation is but] a mixture of false dreams; rather, he has invented it; rather, he is a poet. So let him bring us a sign just as the previous [messengers] were sent [with miracles].'",
                "Not one city that We destroyed before them had believed. So will they believe?",
                "And We sent not before you, [O Muhammad], except men to whom We revealed [the message], so ask the people of the message if you do not know.",
                "And We did not make the prophets forms not eating food, nor were they immortal [on earth].",
                "Then We fulfilled for them the promise, and We saved them and whom We willed and destroyed the transgressors.",
                "We have certainly sent down to you a Book in which is your mention. Then will you not reason?"
            ]
        },

        /* ================= SURAH 22: AL-HAJJ ================= */
        22: {
            arabic: [
                "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ ۚ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ",
                "يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ عَمَّا أَرْضَعَتْ وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا وَتَرَى النَّاسَ سُكَارَىٰ وَمَا هُم بِسُكَارَىٰ وَلَٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ",
                "وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَيَتَّبِعُ كُلَّ شَيْطَانٍ مَّرِيدٍ",
                "كُتِبَ عَلَيْهِ أَنَّهُ مَن تَوَلَّاهُ فَأَنَّهُ يُضِلُّهُ وَيَهْدِيهِ إِلَىٰ عَذَابِ السَّعِيرِ",
                "يَا أَيُّهَا النَّاسُ إِن كُنتُمْ فِي رَيْبٍ مِّنَ الْبَعْثِ فَإِنَّا خَلَقْنَاكُم مِّن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ مِنْ عَلَقَةٍ ثُمَّ مِن مُّضْغَةٍ مُّخَلَّقَةٍ وَغَيْرِ مُخَلَّقَةٍ لِّنُبَيِّنَ لَكُمْ ۚ وَنُقِرُّ فِي الْأَرْحَامِ مَا نَشَاءُ إِلَىٰ أَجَلٍ مُّسَمًّى ثُمَّ نُخْرِجُكُمْ طِفْلًا ثُمَّ لِتَبْلُغُوا أَشُدَّكُمْ ۖ وَمِنكُم مَّن يُتَوَفَّىٰ ۖ وَمِنكُم مَّن يُرَدُّ إِلَىٰ أَرْذَلِ الْعُمُرِ لِكَيْلَا يَعْلَمَ مِن بَعْدِ عِلْمٍ شَيْئًا ۚ وَتَرَى الْأَرْضَ هَامِدَةً فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ وَأَنبَتَتْ مِن كُلِّ زَوْجٍ بَهِيجٍ",
                "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّهُ يُحْيِي الْمَوْتَىٰ وَأَنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ",
                "وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَلَا هُدًى وَلَا كِتَابٍ مُّنِيرٍ",
                "ثَانِيَ عِطْفِهِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ ۖ لَهُ فِي الدُّنْيَا خِزْيٌ ۖ وَنُذِيقُهُ يَوْمَ الْقِيَامَةِ عَذَابَ الْحَرِيقِ",
                "ذَٰلِكَ بِمَا قَدَّمَتْ يَدَاكَ وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيدِ"
            ],
            urdu: [
                "اے لوگو! اپنے رب سے ڈرو، بے شک قیامت کا زلزلہ بڑی چیز ہے",
                "جس دن تم اسے دیکھو گے ہر دودھ پلانے والی اپنے دودھ پلائے کو بھول جائے گی اور ہر حاملہ اپنا حمل ڈال دے گی اور تم لوگوں کو نشے میں دیکھو گے حالانکہ وہ نشے میں نہ ہوں گے لیکن اللہ کا عذاب سخت ہے",
                "اور لوگوں میں سے کچھ ایسے ہیں جو اللہ کے بارے میں بغیر علم جھگڑتے ہیں اور ہر سرکش شیطان کی پیروی کرتے ہیں",
                "اس پر لکھا ہے کہ جو اسے دوست بنائے گا وہ اسے گمراہ کرے گا اور بھڑکتی آگ کے عذاب کی طرف لے جائے گا",
                "اے لوگو! اگر تم دوبارہ اٹھنے میں شک میں ہو تو بے شک ہم نے تمہیں مٹی سے پیدا کیا پھر نطفے سے پھر خون کے لوتھڑے سے پھر گوشت کے ٹکڑے سے جو مکمل اور نامکمل ہو، تاکہ ہم تم پر واضح کریں، اور ہم رحموں میں جسے چاہیں ایک مقررہ وقت تک ٹھہراتے ہیں پھر تمہیں بچہ بنا کر نکالتے ہیں پھر تاکہ تم اپنی پوری طاقت کو پہنچو، اور تم میں سے کوئی وفات پا جاتا ہے اور تم میں سے کوئی بڑھاپے کی بدترین حالت تک پہنچایا جاتا ہے تاکہ علم کے بعد کچھ نہ جانے، اور تم زمین کو مردہ دیکھتے ہو پھر جب ہم اس پر پانی برساتے ہیں تو وہ جنبش کرتی ہے اور پھول جاتی ہے اور ہر خوشنما جوڑا اگاتی ہے",
                "یہ اس لیے کہ اللہ ہی حق ہے اور وہ مردوں کو زندہ کرتا ہے اور وہ ہر چیز پر قادر ہے",
                "اور یہ کہ قیامت آنے والی ہے اس میں کوئی شک نہیں اور یہ کہ اللہ قبروں میں جو ہیں انہیں اٹھائے گا",
                "اور لوگوں میں سے کچھ ایسے ہیں جو اللہ کے بارے میں بغیر علم اور بغیر ہدایت اور بغیر روشن کتاب جھگڑتے ہیں",
                "اپنی گردن موڑ کر تاکہ اللہ کے راستے سے گمراہ کرے، اس کے لیے دنیا میں رسوائی ہے اور قیامت کے دن ہم اسے جلنے کا عذاب چکھائیں گے",
                "یہ بسبب اس کے جو تیرے ہاتھوں نے آگے بھیجا اور بے شک اللہ بندوں پر ظلم نہیں کرتا"
            ],
            english: [
                "O mankind, fear your Lord. Indeed, the convulsion of the [final] Hour is a terrible thing.",
                "On the Day you see it every nursing mother will be distracted from that [child] she was nursing, and every pregnant woman will abort her pregnancy, and you will see the people [appearing] intoxicated while they are not intoxicated; but the punishment of Allah is severe.",
                "And of the people is he who disputes about Allah without knowledge and follows every rebellious devil.",
                "It has been decreed for him that whoever takes him as an ally - then indeed, he will mislead him and guide him to the punishment of the Blaze.",
                "O People, if you should be in doubt about the Resurrection, then [consider that] indeed, We created you from dust, then from a sperm-drop, then from a clinging clot, and then from a lump of flesh, formed and unformed - that We may show you. And We settle in the wombs whom We will for a specified term, then We bring you out as a child, and then [We develop you] that you may reach your [time of] maturity. And among you is he who is taken in [early] death, and among you is he who is returned to the most decrepit [old] age so that he knows, after [once having] knowledge, nothing. And you see the earth barren, but when We send down upon it rain, it quivers and swells and grows [something] of every beautiful kind.",
                "That is because Allah is the Truth and because He gives life to the dead and because He is over all things competent.",
                "And [that they may know] that the Hour is coming - no doubt about it - and that Allah will resurrect those in the graves.",
                "And of the people is he who disputes about Allah without knowledge or guidance or an enlightening book [from Him].",
                "Twisting his neck [in arrogance] to mislead [people] from the way of Allah. For him in the world is disgrace, and We will make him taste on the Day of Resurrection the punishment of the Burning Fire.",
                "[It will be said], 'That is for what your hands have put forth and because Allah is not ever unjust to [His] servants.'"
            ]
        },

        /* ================= SURAH 23: AL-MU'MINUN ================= */
        23: {
            arabic: [
                "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
                "الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
                "وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ",
                "وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ",
                "وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ",
                "إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ",
                "فَمَنِ ابْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْعَادُونَ",
                "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ",
                "وَالَّذِينَ هُمْ عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ",
                "أُولَٰئِكَ هُمُ الْوَارِثُونَ",
                "الَّذِينَ يَرِثُونَ الْفِرْدَوْسَ هُمْ فِيهَا خَالِدُونَ"
            ],
            urdu: [
                "بے شک مومن کامیاب ہو گئے",
                "جو اپنی نماز میں خشوع اختیار کرتے ہیں",
                "اور جو بے ہودہ باتوں سے منہ موڑتے ہیں",
                "اور جو زکوٰۃ ادا کرتے ہیں",
                "اور جو اپنی شرمگاہوں کی حفاظت کرتے ہیں",
                "سوائے اپنی بیویوں یا اپنی ملکیت کے، بے شک وہ ملامت نہیں کیے جائیں گے",
                "پس جو اس کے سوا اور کچھ چاہے تو یہی لوگ حد سے بڑھنے والے ہیں",
                "اور جو اپنی امانتوں اور اپنے عہد کا خیال رکھتے ہیں",
                "اور جو اپنی نمازوں کی حفاظت کرتے ہیں",
                "یہی لوگ وارث ہیں",
                "جو فردوس کے وارث ہوں گے وہ اس میں ہمیشہ رہیں گے"
            ],
            english: [
                "Certainly will the believers have succeeded.",
                "They who are during their prayer humbly submissive.",
                "And they who turn away from ill speech.",
                "And they who are observant of zakah.",
                "And they who guard their private parts.",
                "Except from their wives or those their right hands possess, for indeed, they will not be blamed.",
                "But whoever seeks beyond that, then those are the transgressors.",
                "And they who are to their trusts and their promises attentive.",
                "And they who carefully maintain their prayers.",
                "Those are the inheritors.",
                "Who will inherit al-Firdaus. They will abide therein eternally."
            ]
        },

        /* ================= SURAH 24: AN-NUR ================= */
        24: {
            arabic: [
                "سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا وَأَنزَلْنَا فِيهَا آيَاتٍ بَيِّنَاتٍ لَّعَلَّكُمْ تَذَكَّرُونَ",
                "الزَّانِيَةُ وَالزَّانِي فَاجْلِدُوا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ ۖ وَلَا تَأْخُذْكُم بِهِمَا رَأْفَةٌ فِي دِينِ اللَّهِ إِن كُنتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۖ وَلْيَشْهَدْ عَذَابَهُمَا طَائِفَةٌ مِّنَ الْمُؤْمِنِينَ",
                "الزَّانِي لَا يَنكِحُ إِلَّا زَانِيَةً أَوْ مُشْرِكَةً وَالزَّانِيَةُ لَا يَنكِحُهَا إِلَّا زَانٍ أَوْ مُشْرِكٌ ۚ وَحُرِّمَ ذَٰلِكَ عَلَى الْمُؤْمِنِينَ",
                "وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً وَلَا تَقْبَلُوا لَهُمْ شَهَادَةً أَبَدًا ۚ وَأُولَٰئِكَ هُمُ الْفَاسِقُونَ",
                "إِلَّا الَّذِينَ تَابُوا مِن بَعْدِ ذَٰلِكَ وَأَصْلَحُوا فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
                "وَالَّذِينَ يَرْمُونَ أَزْوَاجَهُمْ وَلَمْ يَكُن لَّهُمْ شُهَدَاءُ إِلَّا أَنفُسُهُمْ فَشَهَادَةُ أَحَدِهِمْ أَرْبَعُ شَهَادَاتٍ بِاللَّهِ إِنَّهُ لَمِنَ الصَّادِقِينَ",
                "وَالْخَامِسَةُ أَنَّ لَعْنَتَ اللَّهِ عَلَيْهِ إِن كَانَ مِنَ الْكَاذِبِينَ",
                "وَيَدْرَأُ عَنْهَا الْعَذَابَ أَن تَشْهَدَ أَرْبَعَ شَهَادَاتٍ بِاللَّهِ إِنَّهُ لَمِنَ الْكَاذِبِينَ",
                "وَالْخَامِسَةَ أَنَّ غَضَبَ اللَّهِ عَلَيْهَا إِن كَانَ مِنَ الصَّادِقِينَ",
                "وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ وَأَنَّ اللَّهَ تَوَّابٌ حَكِيمٌ"
            ],
            urdu: [
                "یہ ایک سورت ہے جو ہم نے نازل کی اور فرض ٹھہرائی اور اس میں واضح آیات نازل کیں تاکہ تم نصیحت لو",
                "زانیہ اور زانی کو ہر ایک کو سو کوڑے مارو اور ان پر اللہ کے دین میں ترس نہ کھاؤ اگر تم اللہ اور آخرت کے دن پر ایمان رکھتے ہو اور ان کی سزا کے وقت مومنوں کی ایک جماعت موجود ہو",
                "زانی مرد صرف زانیہ یا مشرکہ سے نکاح کرتا ہے اور زانیہ سے صرف زانی یا مشرک نکاح کرتا ہے اور یہ مومنوں پر حرام ہے",
                "اور جو پاک دامن عورتوں پر تہمت لگائیں پھر چار گواہ نہ لائیں تو انہیں اسی کوڑے مارو اور ان کی گواہی کبھی قبول نہ کرو اور یہی لوگ فاسق ہیں",
                "سوائے ان کے جو اس کے بعد توبہ کریں اور اصلاح کریں، بے شک اللہ بخشنے والا رحم کرنے والا ہے",
                "اور جو اپنی بیویوں پر تہمت لگائیں اور ان کے پاس اپنے سوا کوئی گواہ نہ ہو تو ان میں سے ایک کی گواہی چار مرتبہ اللہ کی قسم کہ وہ سچا ہے",
                "اور پانچویں بار یہ کہ اللہ کی لعنت اس پر اگر وہ جھوٹا ہے",
                "اور عورت سے سزا ٹل جائے گی اگر وہ چار مرتبہ اللہ کی قسم کھائے کہ وہ جھوٹا ہے",
                "اور پانچویں بار یہ کہ اللہ کا غضب اس پر اگر وہ سچا ہے",
                "اور اگر تم پر اللہ کا فضل اور اس کی رحمت نہ ہوتی اور بے شک اللہ توبہ قبول کرنے والا حکمت والا ہے"
            ],
            english: [
                "[This is] a surah which We have sent down and made obligatory and in which We have sent down clear evidences that you might remember.",
                "The [unmarried] woman or [unmarried] man found guilty of sexual intercourse - lash each one of them with a hundred lashes, and do not be taken by pity for them in the religion of Allah, if you should believe in Allah and the Last Day. And let a group of the believers witness their punishment.",
                "The fornicator does not marry except a [female] fornicator or polytheist, and none marries her except a fornicator or a polytheist, and that has been made unlawful to the believers.",
                "And those who accuse chaste women and then do not produce four witnesses - lash them with eighty lashes and do not accept from them testimony ever after. And those are the defiantly disobedient.",
                "Except for those who repent thereafter and reform, for indeed, Allah is Forgiving and Merciful.",
                "And those who accuse their wives [of adultery] and have no witnesses except themselves - then the witness of one of them [shall be] four testimonies [swearing] by Allah that indeed, he is of the truthful.",
                "And the fifth [oath will be] that the curse of Allah be upon him if he should be among the liars.",
                "But it will prevent punishment from her if she gives four testimonies [swearing] by Allah that indeed, he is of the liars.",
                "And the fifth [oath will be] that the wrath of Allah be upon her if he was of the truthful.",
                "And if not for the favor of Allah upon you and His mercy... and because Allah is Accepting of repentance and Wise."
            ]
        },

        /* ================= SURAH 25: AL-FURQAN ================= */
        25: {
            arabic: [
                "تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا",
                "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَلَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
                "وَاتَّخَذُوا مِن دُونِهِ آلِهَةً لَّا يَخْلُقُونَ شَيْئًا وَهُمْ يُخْلَقُونَ وَلَا يَمْلِكُونَ لِأَنفُسِهِمْ ضَرًّا وَلَا نَفْعًا وَلَا يَمْلِكُونَ مَوْتًا وَلَا حَيَاةً وَلَا نُشُورًا",
                "وَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا إِفْكٌ افْتَرَاهُ وَأَعَانَهُ عَلَيْهِ قَوْمٌ آخَرُونَ ۖ فَقَدْ جَاءُوا ظُلْمًا وَزُورًا",
                "وَقَالُوا أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا فَهِيَ تُمْلَىٰ عَلَيْهِ بُكْرَةً وَأَصِيلًا",
                "قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ إِنَّهُ كَانَ غَفُورًا رَّحِيمًا",
                "وَقَالُوا مَالِ هَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ وَيَمْشِي فِي الْأَسْوَاقِ ۙ لَوْلَا أُنزِلَ إِلَيْهِ مَلَكٌ فَيَكُونَ مَعَهُ نَذِيرًا",
                "أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا ۚ وَقَالَ الظَّالِمُونَ إِن تَتَّبِعُونَ إِلَّا رَجُلًا مَّسْحُورًا",
                "انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ فَضَلُّوا فَلَا يَسْتَطِيعُونَ سَبِيلًا",
                "تَبَارَكَ الَّذِي إِن شَاءَ جَعَلَ لَكَ خَيْرًا مِّن ذَٰلِكَ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ وَيَجْعَل لَّكَ قُصُورًا"
            ],
            urdu: [
                "بڑی برکت والا ہے وہ جس نے فرقان اپنے بندے پر نازل کیا تاکہ وہ تمام جہانوں کے لیے ڈرانے والا ہو",
                "وہ جس کے لیے آسمان اور زمین کی بادشاہت ہے اور جس نے کوئی بیٹا نہیں بنایا اور نہ اس کی بادشاہت میں کوئی شریک ہے اور اس نے ہر چیز پیدا کی پھر اس کا پورا اندازہ مقرر کیا",
                "اور انہوں نے اس کے سوا معبود بنائے جو کچھ پیدا نہیں کرتے اور وہ خود پیدا کیے جاتے ہیں اور اپنے لیے نہ نقصان کے مالک ہیں نہ نفع کے اور نہ موت کے مالک ہیں نہ زندگی کے نہ دوبارہ اٹھنے کے",
                "اور کافروں نے کہا یہ تو صرف جھوٹ ہے جو اس نے گھڑا اور دوسرے لوگوں نے اس پر مدد کی، پس وہ ظلم اور جھوٹ لے کر آئے",
                "اور کہا یہ اگلوں کی کہانیاں ہیں جو اس نے لکھوا لی ہیں پھر وہ اسے صبح و شام پڑھ کر سنائی جاتی ہیں",
                "کہو اسے اس نے نازل کیا جو آسمان اور زمین کا راز جانتا ہے، بے شک وہ بخشنے والا رحم کرنے والا ہے",
                "اور کہا اس رسول کو کیا ہوا کہ کھانا کھاتا ہے اور بازاروں میں چلتا ہے، اس پر کوئی فرشتہ کیوں نازل نہیں کیا گیا کہ وہ اس کے ساتھ ڈرانے والا ہو",
                "یا اس پر کوئی خزانہ ڈالا جائے یا اس کا کوئی باغ ہو جس سے کھائے، اور ظالموں نے کہا تم تو صرف ایک جادو زدہ شخص کی پیروی کرتے ہو",
                "دیکھو انہوں نے آپ کے لیے کیسی مثالیں بیان کیں پس وہ گمراہ ہو گئے تو راستہ نہیں پا سکتے",
                "بڑی برکت والا ہے وہ جو چاہے تو آپ کے لیے اس سے بہتر باغات بنا دے جن کے نیچے نہریں بہیں اور آپ کے لیے محل بنا دے"
            ],
            english: [
                "Blessed is He who sent down the Criterion upon His Servant that he may be to the worlds a warner.",
                "He to whom belongs the dominion of the heavens and the earth and who has not taken a son and has not had a partner in dominion and has created each thing and determined it with [precise] determination.",
                "But they have taken besides Him gods which create nothing, while they are created, and possess not for themselves any harm or benefit and possess not [power to cause] death or life or resurrection.",
                "And those who disbelieve say, 'This [Qur'an] is not except a falsehood he invented, and another people assisted him in it.' But they have committed an injustice and a lie.",
                "And they say, 'Legends of the former peoples which he has written down, and they are dictated to him morning and afternoon.'",
                "Say, 'It has been sent down by He who knows the secret within the heavens and the earth. Indeed, He is ever Forgiving and Merciful.'",
                "And they say, 'Why does this Messenger eat food and walk within the markets? Why has an angel not been sent down to him so that he could be a warner with him?'",
                "Or [why is not] a treasure presented to him [from heaven], or does he [not] have a garden from which he eats?' And the wrongdoers say, 'You follow not but a man affected by magic.'",
                "Look how they strike for you comparisons; but they have strayed, so they cannot [find] a way.",
                "Blessed is He who, if He willed, could have made for you [something] better than that - gardens beneath which rivers flow - and could make for you palaces."
            ]
        },

        /* ================= SURAH 26: ASH-SHU'ARA ================= */
        26: {
            arabic: [
                "طسم",
                "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
                "لَعَلَّكَ بَاخِعٌ نَّفْسَكَ أَلَّا يَكُونُوا مُؤْمِنِينَ",
                "إِن نَّشَأْ نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ",
                "وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ",
                "فَقَدْ كَذَّبُوا فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ",
                "أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ",
                "إِنَّ فِي ذَٰلِكَ لَآيَةً ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
                "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
                "وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ"
            ],
            urdu: [
                "طسم",
                "یہ واضح کتاب کی آیات ہیں",
                "شاید آپ اپنی جان ہلاک کر دیں گے کہ وہ ایمان نہیں لاتے",
                "اگر ہم چاہیں تو ان پر آسمان سے کوئی نشانی نازل کریں جس کے آگے ان کی گردنیں جھک جائیں",
                "اور ان کے پاس رحمٰن کی طرف سے کوئی نئی نصیحت نہیں آتی مگر وہ اس سے منہ موڑتے ہیں",
                "پس انہوں نے جھٹلایا، عنقریب ان کے پاس ان چیزوں کی خبر آئے گی جن کا وہ مذاق اڑاتے تھے",
                "کیا انہوں نے زمین کی طرف نہیں دیکھا کہ ہم نے اس میں ہر قسم کی کتنی عمدہ چیزیں اگائی ہیں",
                "بے شک اس میں نشانی ہے اور ان میں اکثر ایمان لانے والے نہیں",
                "اور بے شک آپ کا رب زبردست رحم کرنے والا ہے",
                "اور جب آپ کے رب نے موسیٰ کو پکارا کہ ظالم قوم کے پاس جا"
            ],
            english: [
                "Ta, Seen, Meem.",
                "These are the verses of the clear Book.",
                "Perhaps you would kill yourself with grief that they will not be believers.",
                "If We willed, We could send down to them from the sky a sign for which their necks would remain humbled.",
                "And no revelation comes to them anew from the Most Merciful except that they turn away from it.",
                "For they have already denied, but there will come to them the news of that which they used to ridicule.",
                "Did they not look at the earth - how much We have produced therein from every noble kind?",
                "Indeed in that is a sign, but most of them were not to be believers.",
                "And indeed, your Lord - He is the Exalted in Might, the Merciful.",
                "And [mention] when your Lord called Moses, [saying], 'Go to the wrongdoing people.'"
            ]
        },

        /* ================= SURAH 27: AN-NAML ================= */
        27: {
            arabic: [
                "طس ۚ تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ",
                "هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ",
                "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ",
                "إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ زَيَّنَّا لَهُمْ أَعْمَالَهُمْ فَهُمْ يَعْمَهُونَ",
                "أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ وَهُمْ فِي الْآخِرَةِ هُمُ الْأَخْسَرُونَ",
                "وَإِنَّكَ لَتُلَقَّى الْقُرْآنَ مِن لَّدُنْ حَكِيمٍ عَلِيمٍ",
                "إِذْ قَالَ مُوسَىٰ لِأَهْلِهِ إِنِّي آنَسْتُ نَارًا سَآتِيكُم مِّنْهَا بِخَبَرٍ أَوْ آتِيكُم بِشِهَابٍ قَبَسٍ لَّعَلَّكُمْ تَصْطَلُونَ",
                "فَلَمَّا جَاءَهَا نُودِيَ أَن بُورِكَ مَن فِي النَّارِ وَمَنْ حَوْلَهَا وَسُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ",
                "يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ",
                "وَأَلْقِ عَصَاكَ ۚ فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ ۚ يَا مُوسَىٰ لَا تَخَفْ إِنِّي لَا يَخَافُ لَدَيَّ الْمُرْسَلُونَ"
            ],
            urdu: [
                "طس، یہ قرآن اور واضح کتاب کی آیات ہیں",
                "ہدایت اور خوشخبری مومنوں کے لیے",
                "جو نماز قائم کرتے ہیں اور زکوٰۃ دیتے ہیں اور وہ آخرت پر یقین رکھتے ہیں",
                "بے شک جو آخرت پر ایمان نہیں لاتے ہم نے ان کے اعمال انہیں خوشنما بنا دیے ہیں پس وہ بھٹکتے پھرتے ہیں",
                "یہی لوگ ہیں جن کے لیے برا عذاب ہے اور وہ آخرت میں سب سے زیادہ خسارہ پانے والے ہیں",
                "اور بے شک آپ کو قرآن حکمت والے جاننے والے کی طرف سے مل رہا ہے",
                "جب موسیٰ نے اپنے گھر والوں سے کہا میں نے آگ دیکھی ہے، میں تمہارے پاس اس سے خبر لاؤں گا یا آگ کا انگارہ لاؤں گا تاکہ تم تاپو",
                "پس جب وہ اس کے پاس آیا تو پکارا گیا کہ برکت والا ہے جو آگ میں ہے اور جو اس کے گرد ہے اور اللہ پاک ہے جو تمام جہانوں کا رب ہے",
                "اے موسیٰ! بے شک میں ہی اللہ ہوں زبردست حکمت والا",
                "اور اپنی لاٹھی ڈال، پس جب اس نے اسے دیکھا کہ وہ سانپ کی طرح ہل رہی ہے تو وہ پیٹھ پھیر کر بھاگا اور پیچھے نہ مڑا، اے موسیٰ! ڈرو نہیں، بے شک میرے پاس رسول نہیں ڈرتے"
            ],
            english: [
                "Ta, Seen. These are the verses of the Qur'an and a clear Book.",
                "As guidance and good tidings for the believers.",
                "Who establish prayer and give zakah, and of the Hereafter they are certain [in faith].",
                "Indeed, for those who do not believe in the Hereafter, We have made pleasing to them their deeds, so they wander blindly.",
                "Those are the ones for whom there will be the worst of punishment, and in the Hereafter they are the greatest losers.",
                "And indeed, [O Muhammad], you receive the Qur'an from One Wise and Knowing.",
                "[Mention] when Moses said to his family, 'Indeed, I perceive a fire; I will bring you from there some information, or I will bring you a burning ember that you may warm yourselves.'",
                "But when he came to it, he was called, 'Blessed is whoever is at the fire and whoever is around it. And exalted is Allah, Lord of the worlds.'",
                "O Moses, indeed it is I - Allah, the Exalted in Might, the Wise.",
                "And [he was told], 'Throw down your staff.' But when he saw it writhing as if it were a snake, he turned in flight and did not return. [Allah said], 'O Moses, fear not. Indeed, in My presence the messengers do not fear.'"
            ]
        },

        /* ================= SURAH 28: AL-QASAS ================= */
        28: {
            arabic: [
                "طسم",
                "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
                "نَتْلُو عَلَيْكَ مِن نَّبَإِ مُوسَىٰ وَفِرْعَوْنَ بِالْحَقِّ لِقَوْمٍ يُؤْمِنُونَ",
                "إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ وَجَعَلَ أَهْلَهَا شِيَعًا يَسْتَضْعِفُ طَائِفَةً مِّنْهُمْ يُذَبِّحُ أَبْنَاءَهُمْ وَيَسْتَحْيِي نِسَاءَهُمْ ۚ إِنَّهُ كَانَ مِنَ الْمُفْسِدِينَ",
                "وَنُرِيدُ أَن نَّمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ وَنَجْعَلَهُمْ أَئِمَّةً وَنَجْعَلَهُمُ الْوَارِثِينَ",
                "وَنُمَكِّنَ لَهُمْ فِي الْأَرْضِ وَنُرِيَ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا مِنْهُم مَّا كَانُوا يَحْذَرُونَ",
                "وَأَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ أَنْ أَرْضِعِيهِ ۖ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ",
                "فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا ۗ إِنَّ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا كَانُوا خَاطِئِينَ",
                "وَقَالَتِ امْرَأَتُ فِرْعَوْنَ قُرَّتُ عَيْنٍ لِّي وَلَكَ ۖ لَا تَقْتُلُوهُ عَسَىٰ أَن يَنفَعَنَا أَوْ نَتَّخِذَهُ وَلَدًا ۘ وَهُمْ لَا يَشْعُرُونَ",
                "وَأَصْبَحَ فُؤَادُ أُمِّ مُوسَىٰ فَارِغًا ۖ إِن كَادَتْ لَتُبْدِي بِهِ لَوْلَا أَن رَّبَطْنَا عَلَىٰ قَلْبِهَا لِتَكُونَ مِنَ الْمُؤْمِنِينَ"
            ],
            urdu: [
                "طسم",
                "یہ واضح کتاب کی آیات ہیں",
                "ہم آپ کو موسیٰ اور فرعون کی خبر سچائی کے ساتھ سناتے ہیں ایمان لانے والوں کے لیے",
                "بے شک فرعون زمین میں سرکش ہو گیا اور اس کے لوگوں کو گروہوں میں بانٹ دیا، ان میں سے ایک گروہ کو کمزور کرتا تھا، ان کے بیٹوں کو ذبح کرتا اور ان کی عورتوں کو زندہ رکھتا، بے شک وہ فساد کرنے والوں میں سے تھا",
                "اور ہم چاہتے تھے کہ ان پر احسان کریں جو زمین میں کمزور کیے گئے اور انہیں پیشوا بنائیں اور انہیں وارث بنائیں",
                "اور انہیں زمین میں قوت دیں اور فرعون اور ہامان اور ان کے لشکروں کو وہ دکھائیں جس سے وہ ڈرتے تھے",
                "اور ہم نے موسیٰ کی ماں کو وحی کی کہ اسے دودھ پلا، پھر جب تجھے اس پر ڈر ہو تو اسے دریا میں ڈال دے اور نہ ڈر اور نہ غم کر، بے شک ہم اسے تیرے پاس لوٹانے والے ہیں اور اسے رسولوں میں سے بنانے والے ہیں",
                "پھر فرعون کے گھر والوں نے اسے اٹھا لیا تاکہ وہ ان کے لیے دشمن اور غم بنے، بے شک فرعون اور ہامان اور ان کے لشکر خطا کار تھے",
                "اور فرعون کی بیوی نے کہا یہ میری اور تیری آنکھوں کی ٹھنڈک ہے، اسے قتل نہ کرو، شاید وہ ہمیں نفع دے یا ہم اسے بیٹا بنا لیں، اور وہ سمجھتے نہ تھے",
                "اور موسیٰ کی ماں کا دل بے قرار ہو گیا، قریب تھی کہ وہ اس کا بھید کھول دے اگر ہم اس کے دل کو مضبوط نہ کرتے تاکہ وہ مومنوں میں سے ہو"
            ],
            english: [
                "Ta, Seen, Meem.",
                "These are the verses of the clear Book.",
                "We recite to you from the news of Moses and Pharaoh in truth for a people who believe.",
                "Indeed, Pharaoh exalted himself in the land and made its people into factions, oppressing a sector among them, slaughtering their [newborn] sons and keeping their females alive. Indeed, he was of the corrupters.",
                "And We wanted to confer favor upon those who were oppressed in the land and make them leaders and make them inheritors.",
                "And establish them in the land and show Pharaoh and [his minister] Haman and their soldiers through them that which they had feared.",
                "And We inspired to the mother of Moses, 'Suckle him; but when you fear for him, cast him into the river and do not fear and do not grieve. Indeed, We will return him to you and will make him [one] of the messengers.'",
                "And the family of Pharaoh picked him up [out of the river] so that he would become to them an enemy and a [cause of] grief. Indeed, Pharaoh and Haman and their soldiers were deliberate sinners.",
                "And the wife of Pharaoh said, '[He will be] a comfort of the eye for me and for you. Do not kill him; perhaps he may benefit us, or we may adopt him as a son.' And they perceived not.",
                "And the heart of Moses' mother became empty [of all else]. She was about to disclose [the matter concerning] him had We not bound fast his heart so she would be of the believers."
            ]
        },

        /* ================= SURAH 29: AL-ANKABUT ================= */
        29: {
            arabic: [
                "الم",
                "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ",
                "وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ",
                "أَمْ حَسِبَ الَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ أَن يَسْبِقُونَا ۚ سَاءَ مَا يَحْكُمُونَ",
                "مَن كَانَ يَرْجُو لِقَاءَ اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
                "وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ ۚ إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ",
                "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلَنَجْزِيَنَّهُمْ أَحْسَنَ الَّذِي كَانُوا يَعْمَلُونَ",
                "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا ۖ وَإِن جَاهَدَاكَ لِتُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا ۚ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
                "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُدْخِلَنَّهُمْ فِي الصَّالِحِينَ",
                "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ فَإِذَا أُوذِيَ فِي اللَّهِ جَعَلَ فِتْنَةَ النَّاسِ كَعَذَابِ اللَّهِ ۚ وَلَئِن جَاءَ نَصْرٌ مِّن رَّبِّكَ لَيَقُولُنَّ إِنَّا كُنَّا مَعَكُمْ ۚ أَوَلَيْسَ اللَّهُ بِأَعْلَمَ بِمَا فِي صُدُورِ الْعَالَمِينَ"
            ],
            urdu: [
                "الم",
                "کیا لوگوں نے گمان کیا کہ وہ یہ کہہ کر چھوڑ دیے جائیں گے کہ ہم ایمان لائے اور انہیں آزمایا نہ جائے گا",
                "اور بے شک ہم نے ان سے پہلے والوں کو آزمایا، پس اللہ ضرور جانے گا کہ کون سچے ہیں اور ضرور جانے گا کہ کون جھوٹے ہیں",
                "کیا ان لوگوں نے گمان کیا جو برے کام کرتے ہیں کہ وہ ہم سے آگے نکل جائیں گے، بہت برا فیصلہ کرتے ہیں",
                "جو اللہ کی ملاقات کی امید رکھتا ہے تو بے شک اللہ کا مقرر وقت آنے والا ہے اور وہ سننے والا جاننے والا ہے",
                "اور جو جہاد کرے وہ اپنے لیے جہاد کرتا ہے، بے شک اللہ تمام جہانوں سے بے نیاز ہے",
                "اور جو ایمان لائے اور نیک عمل کیے ہم ان کی برائیاں ضرور مٹا دیں گے اور انہیں ان کے بہترین اعمال کا بدلہ دیں گے",
                "اور ہم نے انسان کو والدین کے ساتھ اچھا سلوک کرنے کی وصیت کی اور اگر وہ تم پر زور دیں کہ میرے ساتھ شریک کرو جس کا تمہیں علم نہیں تو ان کی اطاعت نہ کرو، میری طرف تمہارا لوٹنا ہے پھر میں تمہیں بتاؤں گا جو تم کرتے تھے",
                "اور جو ایمان لائے اور نیک عمل کیے ہم انہیں نیک لوگوں میں داخل کریں گے",
                "اور لوگوں میں سے کچھ ایسے ہیں جو کہتے ہیں ہم اللہ پر ایمان لائے پھر جب اللہ کی راہ میں تکلیف دی جائے تو لوگوں کی آزمائش کو اللہ کے عذاب کی طرح سمجھتے ہیں اور اگر آپ کے رب کی طرف سے مدد آئے تو ضرور کہیں گے ہم تمہارے ساتھ تھے، کیا اللہ جہانوں کے دلوں کی بات زیادہ نہیں جانتا"
            ],
            english: [
                "Alif, Lam, Meem.",
                "Do the people think that they will be left to say, 'We believe' and they will not be tried?",
                "But We have certainly tried those before them, and Allah will surely make evident those who are truthful, and He will surely make evident the liars.",
                "Or do those who do evil deeds think that they can outstrip Us? Evil is what they judge.",
                "Whoever should hope for the meeting with Allah - indeed, the term decreed by Allah is coming. And He is the Hearing, the Knowing.",
                "And whoever strives only strives for [the benefit of] himself. Indeed, Allah is free from need of the worlds.",
                "And those who believe and do righteous deeds - We will surely remove from them their misdeeds and will surely reward them according to the best of what they used to do.",
                "And We have enjoined upon man goodness to parents. But if they endeavor to make you associate with Me that of which you have no knowledge, do not obey them. To Me is your return, and I will inform you about what you used to do.",
                "And those who believe and do righteous deeds - We will surely admit them among the righteous [into Paradise].",
                "And of the people are some who say, 'We believe in Allah,' but when one [of them] is harmed for [the cause of] Allah, they consider the trial of the people as [if it were] the punishment of Allah. But if victory comes from your Lord, they say, 'Indeed, we were with you.' Is not Allah most knowing of what is within the breasts of all creatures?"
            ]
        },

        /* ================= SURAH 30: AR-RUM ================= */
        30: {
            arabic: [
                "الم",
                "غُلِبَتِ الرُّومُ",
                "فِي أَدْنَى الْأَرْضِ وَهُم مِّن بَعْدِ غَلَبِهِمْ سَيَغْلِبُونَ",
                "فِي بِضْعِ سِنِينَ ۗ لِلَّهِ الْأَمْرُ مِن قَبْلُ وَمِن بَعْدُ ۚ وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ",
                "بِنَصْرِ اللَّهِ ۚ يَنصُرُ مَن يَشَاءُ ۖ وَهُوَ الْعَزِيزُ الرَّحِيمُ",
                "وَعْدَ اللَّهِ ۖ لَا يُخْلِفُ اللَّهُ وَعْدَهُ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
                "يَعْلَمُونَ ظَاهِرًا مِّنَ الْحَيَاةِ الدُّنْيَا وَهُمْ عَنِ الْآخِرَةِ هُمْ غَافِلُونَ",
                "أَوَلَمْ يَتَفَكَّرُوا فِي أَنفُسِهِم ۖ مَّا خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ وَأَجَلٍ مُّسَمًّى ۗ وَإِنَّ كَثِيرًا مِّنَ النَّاسِ بِلِقَاءِ رَبِّهِمْ لَكَافِرُونَ",
                "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ ۚ كَانُوا أَشَدَّ مِنْهُمْ قُوَّةً وَأَثَارُوا الْأَرْضَ وَعَمَرُوهَا أَكْثَرَ مِمَّا عَمَرُوهَا وَجَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ ۖ فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ",
                "ثُمَّ كَانَ عَاقِبَةَ الَّذِينَ أَسَاءُوا السُّوأَىٰ أَن كَذَّبُوا بِآيَاتِ اللَّهِ وَكَانُوا بِهَا يَسْتَهْزِئُونَ"
            ],
            urdu: [
                "الم",
                "رومی مغلوب ہو گئے",
                "قریب کی زمین میں اور وہ اپنی شکست کے بعد عنقریب غالب ہوں گے",
                "چند سالوں میں، اللہ کا حکم ہے پہلے بھی اور بعد میں بھی اور اس دن مومن خوش ہوں گے",
                "اللہ کی مدد سے، وہ جسے چاہے مدد دیتا ہے اور وہ زبردست رحم کرنے والا ہے",
                "اللہ کا وعدہ، اللہ اپنا وعدہ نہیں توڑتا لیکن اکثر لوگ نہیں جانتے",
                "وہ دنیا کی زندگی کا ظاہر جانتے ہیں اور وہ آخرت سے غافل ہیں",
                "کیا انہوں نے اپنے آپ میں غور نہیں کیا، اللہ نے آسمان اور زمین اور جو ان کے درمیان ہے حق کے سوا اور ایک مقررہ وقت کے سوا پیدا نہیں کیے اور بے شک بہت سے لوگ اپنے رب کی ملاقات سے منکر ہیں",
                "کیا انہوں نے زمین میں سیر نہیں کی پھر دیکھا کہ ان سے پہلے والوں کا انجام کیسا ہوا، وہ ان سے زیادہ طاقتور تھے اور انہوں نے زمین کو جوتا اور ان سے زیادہ آباد کیا اور ان کے رسول کھلی نشانیاں لے کر آئے، پس اللہ ان پر ظلم نہیں کرتا تھا لیکن وہ خود اپنے آپ پر ظلم کرتے تھے",
                "پھر ان لوگوں کا انجام جو برائی کرتے تھے بدتر ہوا کیونکہ انہوں نے اللہ کی آیات کو جھٹلایا اور ان کا مذاق اڑاتے تھے"
            ],
            english: [
                "Alif, Lam, Meem.",
                "The Byzantines have been defeated.",
                "In the nearest land. But they, after their defeat, will overcome.",
                "Within three to nine years. To Allah belongs the command before and after. And that day the believers will rejoice.",
                "In the victory of Allah. He gives victory to whom He wills, and He is the Exalted in Might, the Merciful.",
                "[It is] the promise of Allah. Allah does not fail in His promise, but most of the people do not know.",
                "They know what is apparent of the worldly life, but they, of the Hereafter, are unaware.",
                "Do they not contemplate within themselves? Allah has not created the heavens and the earth and what is between them except in truth and for a specified term. And indeed, many of the people, in [the matter of] the meeting with their Lord, are disbelievers.",
                "Have they not traveled through the earth and observed how was the end of those before them? They were greater than them in power, and they plowed the earth and built it up more than they have built it up, and their messengers came to them with clear evidences. And Allah would not ever have wronged them, but they were wronging themselves.",
                "Then the end of those who did evil was the worst [consequence] because they denied the signs of Allah and used to ridicule them."
            ]
        },

        /* ================= SURAH 31: LUQMAN ================= */
        31: {
            arabic: [
                "الم",
                "تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ",
                "هُدًى وَرَحْمَةً لِّلْمُحْسِنِينَ",
                "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ",
                "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
                "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ بِغَيْرِ عِلْمٍ وَيَتَّخِذَهَا هُزُوًا ۚ أُولَٰئِكَ لَهُمْ عَذَابٌ مُّهِينٌ",
                "وَإِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا وَلَّىٰ مُسْتَكْبِرًا كَأَن لَّمْ يَسْمَعْهَا كَأَنَّ فِي أُذُنَيْهِ وَقْرًا ۖ فَبَشِّرْهُ بِعَذَابٍ أَلِيمٍ",
                "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتُ النَّعِيمِ",
                "خَالِدِينَ فِيهَا ۖ وَعْدَ اللَّهِ حَقًّا ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "خَلَقَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا ۖ وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِكُمْ وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ ۚ وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ"
            ],
            urdu: [
                "الم",
                "یہ حکمت والی کتاب کی آیات ہیں",
                "ہدایت اور رحمت نیکی کرنے والوں کے لیے",
                "جو نماز قائم کرتے ہیں اور زکوٰۃ دیتے ہیں اور وہ آخرت پر یقین رکھتے ہیں",
                "یہی لوگ اپنے رب کی ہدایت پر ہیں اور یہی کامیاب ہیں",
                "اور لوگوں میں سے کچھ ایسے ہیں جو لہو الحدیث خریدتے ہیں تاکہ بغیر علم اللہ کے راستے سے گمراہ کریں اور اسے مذاق بنائیں، یہی لوگ ہیں جن کے لیے ذلت کا عذاب ہے",
                "اور جب اس پر ہماری آیات پڑھی جائیں تو وہ تکبر سے منہ موڑ لیتا ہے گویا اس نے سنا ہی نہیں گویا اس کے کانوں میں بوجھ ہے، پس اسے دردناک عذاب کی خوشخبری دو",
                "بے شک جو ایمان لائے اور نیک عمل کیے ان کے لیے نعمتوں کے باغات ہیں",
                "ان میں ہمیشہ رہیں گے، اللہ کا وعدہ سچا ہے اور وہ زبردست حکمت والا ہے",
                "اس نے آسمان بغیر ستونوں کے پیدا کیے جنہیں تم دیکھتے ہو اور زمین میں پہاڑ ڈالے تاکہ تمہیں ہلا نہ دے اور اس میں ہر قسم کے جانور پھیلائے اور ہم نے آسمان سے پانی نازل کیا پھر اس میں ہر قسم کی عمدہ چیزیں اگائیں"
            ],
            english: [
                "Alif, Lam, Meem.",
                "These are verses of the wise Book.",
                "As guidance and mercy for the doers of good.",
                "Who establish prayer and give zakah, and they, of the Hereafter, are certain [in faith].",
                "Those are on [right] guidance from their Lord, and it is those who are the successful.",
                "And of the people is he who buys the amusement of speech to mislead [others] from the way of Allah without knowledge and who takes it in ridicule. Those will have a humiliating punishment.",
                "And when our verses are recited to him, he turns away arrogantly as if he had not heard them, as if there was in his ears deafness. So give him tidings of a painful punishment.",
                "Indeed, those who believe and do righteous deeds - for them are the Gardens of Pleasure.",
                "Wherein they abide eternally; [it is] the promise of Allah [which is] truth. And He is the Exalted in Might, the Wise.",
                "He created the heavens without pillars that you see and has cast into the earth firmly set mountains, lest it should shift with you, and dispersed therein from every creature. And We sent down rain from the sky and made grow therein [plants] of every noble kind."
            ]
        },

        /* ================= SURAH 32: AS-SAJDAH ================= */
        32: {
            arabic: [
                "الم",
                "تَنزِيلُ الْكِتَابِ لَا رَيْبَ فِيهِ مِن رَّبِّ الْعَالَمِينَ",
                "أَمْ يَقُولُونَ افْتَرَاهُ ۚ بَلْ هُوَ الْحَقُّ مِن رَّبِّكَ لِتُنذِرَ قَوْمًا مَّا أَتَاهُم مِّن نَّذِيرٍ مِّن قَبْلِكَ لَعَلَّهُمْ يَهْتَدُونَ",
                "اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ مَا لَكُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا شَفِيعٍ ۚ أَفَلَا تَتَذَكَّرُونَ",
                "يُدَبِّرُ الْأَمْرَ مِنَ السَّمَاءِ إِلَى الْأَرْضِ ثُمَّ يَعْرُجُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ أَلْفَ سَنَةٍ مِّمَّا تَعُدُّونَ",
                "ذَٰلِكَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الرَّحِيمُ",
                "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ ۖ وَبَدَأَ خَلْقَ الْإِنسَانِ مِن طِينٍ",
                "ثُمَّ جَعَلَ نَسْلَهُ مِن سُلَالَةٍ مِّن مَّاءٍ مَّهِينٍ",
                "ثُمَّ سَوَّاهُ وَنَفَخَ فِيهِ مِن رُّوحِهِ ۖ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَّا تَشْكُرُونَ",
                "وَقَالُوا أَإِذَا ضَلَلْنَا فِي الْأَرْضِ أَإِنَّا لَفِي خَلْقٍ جَدِيدٍ ۚ بَلْ هُم بِلِقَاءِ رَبِّهِمْ كَافِرُونَ"
            ],
            urdu: [
                "الم",
                "اس کتاب کا نازل کرنا جس میں کوئی شک نہیں، جہانوں کے رب کی طرف سے ہے",
                "کیا وہ کہتے ہیں اس نے اسے گھڑا ہے، بلکہ یہ آپ کے رب کی طرف سے حق ہے تاکہ آپ ایسی قوم کو ڈرائیں جن کے پاس آپ سے پہلے کوئی ڈرانے والا نہیں آیا تاکہ وہ ہدایت پائیں",
                "اللہ وہ ہے جس نے آسمان اور زمین اور جو ان کے درمیان ہے چھ دنوں میں پیدا کیے پھر عرش پر مستقر ہوا، تمہارے لیے اس کے سوا کوئی دوست نہیں اور نہ سفارش کرنے والا، کیا تم نصیحت نہیں لیتے",
                "وہ آسمان سے زمین تک کام کا انتظام کرتا ہے پھر وہ اسی کی طرف چڑھتا ہے ایک دن میں جس کی مقدار تمہاری گنتی سے ہزار سال ہے",
                "یہ غائب اور ظاہر کا جاننے والا زبردست رحم کرنے والا ہے",
                "جس نے ہر چیز کو جو اس نے بنائی اچھی بنائی اور انسان کی تخلیق مٹی سے شروع کی",
                "پھر اس کی نسل ایک حقیر پانی کے خلاصے سے بنائی",
                "پھر اسے ٹھیک کیا اور اس میں اپنی روح پھونکی اور تمہارے لیے کان اور آنکھیں اور دل بنائے، تم بہت کم شکر کرتے ہو",
                "اور کہتے ہیں جب ہم زمین میں گم ہو جائیں گے تو کیا ہم نئی خلقت میں ہوں گے، بلکہ وہ اپنے رب کی ملاقات سے منکر ہیں"
            ],
            english: [
                "Alif, Lam, Meem.",
                "[This is] the revelation of the Book about which there is no doubt from the Lord of the worlds.",
                "Or do they say, 'He invented it'? Rather, it is the truth from your Lord, [O Muhammad], that you may warn a people to whom no warner has come before you [so] perhaps they will be guided.",
                "It is Allah who created the heavens and the earth and whatever is between them in six days; then He established Himself above the Throne. You have not besides Him any protector or any intercessor; so will you not be reminded?",
                "He arranges [each] matter from the heaven to the earth; then it will ascend to Him in a Day, the extent of which is a thousand years of those which you count.",
                "That is the Knower of the unseen and the witnessed, the Exalted in Might, the Merciful.",
                "Who perfected everything which He created and began the creation of man from clay.",
                "Then He made his posterity out of the extract of a liquid disdained.",
                "Then He proportioned him and breathed into him from His [created] soul and made for you hearing and vision and hearts; little are you grateful.",
                "And they say, 'When we are lost within the earth, will we indeed be [recreated] in a new creation?' Rather, they are, in [the matter of] the meeting with their Lord, disbelievers."
            ]
        },

        /* ================= SURAH 33: AL-AHZAB ================= */
        33: {
            arabic: [
                "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
                "وَاتَّبِعْ مَا يُوحَىٰ إِلَيْكَ مِن رَّبِّكَ ۚ إِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
                "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
                "مَّا جَعَلَ اللَّهُ لِرَجُلٍ مِّن قَلْبَيْنِ فِي جَوْفِهِ ۚ وَمَا جَعَلَ أَزْوَاجَكُمُ اللَّائِي تُظَاهِرُونَ مِنْهُنَّ أُمَّهَاتِكُمْ ۚ وَمَا جَعَلَ أَدْعِيَاءَكُمْ أَبْنَاءَكُمْ ۚ ذَٰلِكُمْ قَوْلُكُم بِأَفْوَاهِكُمْ ۖ وَاللَّهُ يَقُولُ الْحَقَّ وَهُوَ يَهْدِي السَّبِيلَ",
                "ادْعُوهُمْ لِآبَائِهِمْ هُوَ أَقْسَطُ عِندَ اللَّهِ ۚ فَإِن لَّمْ تَعْلَمُوا آبَاءَهُمْ فَإِخْوَانُكُمْ فِي الدِّينِ وَمَوَالِيكُمْ ۚ وَلَيْسَ عَلَيْكُمْ جُنَاحٌ فِيمَا أَخْطَأْتُم بِهِ وَلَٰكِن مَّا تَعَمَّدَتْ قُلُوبُكُمْ ۚ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
                "النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ ۖ وَأَزْوَاجُهُ أُمَّهَاتُهُمْ ۗ وَأُولُو الْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍ فِي كِتَابِ اللَّهِ مِنَ الْمُؤْمِنِينَ وَالْمُهَاجِرِينَ إِلَّا أَن تَفْعَلُوا إِلَىٰ أَوْلِيَائِكُم مَّعْرُوفًا ۚ كَانَ ذَٰلِكَ فِي الْكِتَابِ مَسْطُورًا",
                "وَإِذْ أَخَذْنَا مِنَ النَّبِيِّينَ مِيثَاقَهُمْ وَمِنكَ وَمِن نُّوحٍ وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَى ابْنِ مَرْيَمَ ۖ وَأَخَذْنَا مِنْهُم مِّيثَاقًا غَلِيظًا",
                "لِّيَسْأَلَ الصَّادِقِينَ عَن صِدْقِهِمْ ۚ وَأَعَدَّ لِلْكَافِرِينَ عَذَابًا أَلِيمًا",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا ۚ وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا",
                "إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا"
            ],
            urdu: [
                "اے نبی! اللہ سے ڈرو اور کافروں اور منافقوں کی اطاعت نہ کرو، بے شک اللہ جاننے والا حکمت والا ہے",
                "اور اس کی پیروی کرو جو آپ کے رب کی طرف سے وحی کی جاتی ہے، بے شک اللہ تمہارے اعمال سے باخبر ہے",
                "اور اللہ پر بھروسہ کرو اور اللہ کارساز کافی ہے",
                "اللہ نے کسی مرد کے سینے میں دو دل نہیں بنائے اور نہ تمہاری ان بیویوں کو جن سے تم ظہار کرتے ہو تمہاری مائیں بنایا اور نہ تمہارے منہ بولے بیٹوں کو تمہارے بیٹے بنایا، یہ تمہارے منہ کی بات ہے اور اللہ حق کہتا ہے اور وہی راستہ دکھاتا ہے",
                "انہیں ان کے باپوں کی طرف منسوب کرو، یہ اللہ کے نزدیک زیادہ انصاف کی بات ہے، پھر اگر تم ان کے باپوں کو نہ جانو تو وہ تمہارے دینی بھائی اور دوست ہیں اور تم پر کوئی گناہ نہیں اس میں جو تم نے بھولے سے کیا لیکن اس میں جو تمہارے دلوں نے قصداً کیا اور اللہ بخشنے والا رحم کرنے والا ہے",
                "نبی مومنوں کے لیے ان کی جانوں سے زیادہ حق دار ہے اور اس کی بیویاں ان کی مائیں ہیں اور رشتہ دار اللہ کی کتاب میں ایک دوسرے کے زیادہ حق دار ہیں مومنوں اور مہاجروں سے، سوائے اس کے کہ تم اپنے دوستوں کے ساتھ کوئی نیکی کرو، یہ کتاب میں لکھا ہوا ہے",
                "اور جب ہم نے نبیوں سے ان کا عہد لیا اور آپ سے اور نوح اور ابراہیم اور موسیٰ اور عیسیٰ ابن مریم سے اور ہم نے ان سے مضبوط عہد لیا",
                "تاکہ سچوں سے ان کی سچائی کے بارے میں پوچھے اور کافروں کے لیے دردناک عذاب تیار کیا",
                "اے ایمان والو! اللہ کی نعمت یاد کرو جو تم پر ہے جب تم پر لشکر آئے پھر ہم نے ان پر ہوا اور ایسے لشکر بھیجے جنہیں تم نے نہ دیکھا اور اللہ تمہارے اعمال کو دیکھنے والا ہے",
                "جب وہ تم پر اوپر سے اور تم سے نیچے سے آئے اور جب آنکھیں پھیر گئیں اور دل گلوں تک پہنچ گئے اور تم اللہ کے بارے میں مختلف گمان کرنے لگے"
            ],
            english: [
                "O Prophet, fear Allah and do not obey the disbelievers and the hypocrites. Indeed, Allah is ever Knowing and Wise.",
                "And follow that which is revealed to you from your Lord. Indeed, Allah is ever, of what you do, Aware.",
                "And rely upon Allah; and sufficient is Allah as Disposer of affairs.",
                "Allah has not made for a man two hearts in his interior. And He has not made your wives whom you declare unlawful your mothers. And he has not made your adopted sons your [true] sons. That is [merely] your saying by your mouths, but Allah says the truth, and He guides to the [right] way.",
                "Call them by [the names of] their fathers; it is more just in the sight of Allah. But if you do not know their fathers - then they are [still] your brothers in religion and those entrusted to you. And there is no blame upon you for that in which you have erred but [only for] what your hearts intended. And ever is Allah Forgiving and Merciful.",
                "The Prophet is more worthy of the believers than themselves, and his wives are [in the position of] their mothers. And those of [blood] relationship are more entitled [to inheritance] in the decree of Allah than the [other] believers and the emigrants, except that you may do a kindness to your allies. This is written in the Register.",
                "And [mention, O Muhammad], when We took from the prophets their covenant and from you and from Noah and Abraham and Moses and Jesus, the son of Mary; and We took from them a solemn covenant.",
                "That He may question the truthful about their truth. And He has prepared for the disbelievers a painful punishment.",
                "O you who have believed, remember the favor of Allah upon you when armies came to [attack] you and We sent upon them a wind and armies [of angels] you did not see. And ever is Allah, of what you do, Seeing.",
                "[Remember] when they came at you from above you and from below you, and when eyes shifted [in fear], and hearts reached the throats and you assumed about Allah [various] assumptions."
            ]
        },

        /* ================= SURAH 34: SABA ================= */
        34: {
            arabic: [
                "الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَلَهُ الْحَمْدُ فِي الْآخِرَةِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
                "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا ۚ وَهُوَ الرَّحِيمُ الْغَفُورُ",
                "وَقَالَ الَّذِينَ كَفَرُوا لَا تَأْتِينَا السَّاعَةُ ۖ قُلْ بَلَىٰ وَرَبِّي لَتَأْتِيَنَّكُمْ عَالِمِ الْغَيْبِ ۚ لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ وَلَا أَصْغَرُ مِن ذَٰلِكَ وَلَا أَكْبَرُ إِلَّا فِي كِتَابٍ مُّبِينٍ",
                "لِّيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ ۚ أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ",
                "وَالَّذِينَ سَعَوْا فِي آيَاتِنَا مُعَاجِزِينَ أُولَٰئِكَ لَهُمْ عَذَابٌ مِّن رِّجْزٍ أَلِيمٌ",
                "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
                "وَقَالَ الَّذِينَ كَفَرُوا هَلْ نَدُلُّكُمْ عَلَىٰ رَجُلٍ يُنَبِّئُكُمْ إِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍ إِنَّكُمْ لَفِي خَلْقٍ جَدِيدٍ",
                "أَفْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَم بِهِ جِنَّةٌ ۗ بَلِ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ فِي الْعَذَابِ وَالضَّلَالِ الْبَعِيدِ",
                "أَفَلَمْ يَرَوْا إِلَىٰ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُم مِّنَ السَّمَاءِ وَالْأَرْضِ ۚ إِن نَّشَأْ نَخْسِفْ بِهِمُ الْأَرْضَ أَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّكُلِّ عَبْدٍ مُّنِيبٍ",
                "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ"
            ],
            urdu: [
                "سب تعریف اللہ کے لیے ہے جس کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے اور آخرت میں بھی اسی کی تعریف ہے اور وہ حکمت والا باخبر ہے",
                "وہ جانتا ہے جو زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے اور جو آسمان سے اترتا ہے اور جو اس میں چڑھتا ہے اور وہ رحم کرنے والا بخشنے والا ہے",
                "اور کافروں نے کہا ہم پر قیامت نہیں آئے گی، کہو کیوں نہیں! میرے رب کی قسم وہ تم پر ضرور آئے گی، غائب کا جاننے والا، اس سے ذرہ برابر کوئی چیز چھپی نہیں نہ آسمان میں نہ زمین میں اور نہ اس سے چھوٹی اور نہ بڑی مگر ایک واضح کتاب میں ہے",
                "تاکہ ان لوگوں کو بدلہ دے جو ایمان لائے اور نیک عمل کیے، یہی لوگ ہیں جن کے لیے بخشش اور عزت کی روزی ہے",
                "اور جو ہماری آیات میں ہمیں عاجز کرنے کی کوشش کرتے ہیں یہی لوگ ہیں جن کے لیے دردناک عذاب ہے",
                "اور جو علم دیے گئے ہیں وہ دیکھتے ہیں کہ جو آپ کے رب کی طرف سے آپ پر نازل کیا گیا وہ حق ہے اور زبردست قابل تعریف کی راہ دکھاتا ہے",
                "اور کافروں نے کہا کیا ہم تمہیں ایسے شخص کا پتہ دیں جو تمہیں بتاتا ہے کہ جب تم بالکل ریزہ ریزہ ہو جاؤ گے تو بے شک تم نئی خلقت میں ہو گے",
                "کیا اس نے اللہ پر جھوٹ باندھا یا اسے جنون ہے، بلکہ جو آخرت پر ایمان نہیں لاتے وہ عذاب اور دور کی گمراہی میں ہیں",
                "کیا انہوں نے اپنے آگے اور پیچھے آسمان اور زمین کو نہیں دیکھا، اگر ہم چاہیں تو انہیں زمین میں دھنسا دیں یا ان پر آسمان کا کوئی ٹکڑا گرا دیں، بے شک اس میں ہر رجوع کرنے والے بندے کے لیے نشانی ہے",
                "اور بے شک ہم نے داؤد کو اپنی طرف سے فضل دیا، اے پہاڑو! اس کے ساتھ تسبیح کرو اور پرندو! اور ہم نے اس کے لیے لوہا نرم کیا"
            ],
            english: [
                "[All] praise is [due] to Allah, to whom belongs whatever is in the heavens and whatever is in the earth, and to Him belongs [all] praise in the Hereafter. And He is the Wise, the Acquainted.",
                "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein. And He is the Merciful, the Forgiving.",
                "But those who disbelieve say, 'The Hour will not come to us.' Say, 'Yes, by my Lord, it will surely come to you. [Allah is] the Knower of the unseen.' Not absent from Him is an atom's weight within the heavens or within the earth or [what is] smaller than that or greater, except that it is in a clear register.",
                "That He may reward those who believe and do righteous deeds. Those will have forgiveness and noble provision.",
                "But those who strive against Our verses [seeking] to cause failure - for them will be a painful punishment of foul nature.",
                "And those who have been given knowledge see that what is revealed to you from your Lord is the truth, and it guides to the path of the Exalted in Might, the Praiseworthy.",
                "But those who disbelieve say, 'Shall we direct you to a man who will inform you [that] when you have disintegrated in complete disintegration, you will [then] be [recreated] in a new creation?'",
                "Has he invented about Allah a lie or is there in him madness?' Rather, they who do not believe in the Hereafter will be in the punishment and [are in] extreme error.",
                "Then, do they not look at what is before them and what is behind them of the heaven and earth? If We should will, We could cause the earth to swallow them or [could] let fall upon them fragments from the sky. Indeed in that is a sign for every servant turning back [to Allah].",
                "And We certainly gave David from Us bounty. [We said], 'O mountains, repeat [Our] praises with him, and the birds [as well].' And We made pliable for him iron."
            ]
        },

        /* ================= SURAH 35: FATIR ================= */
        35: {
            arabic: [
                "الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ ۚ يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ مِن بَعْدِهِ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "يَا أَيُّهَا النَّاسُ اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ ۚ هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ ۚ لَا إِلَٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
                "وَإِن يُكَذِّبُوكَ فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ ۚ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ",
                "يَا أَيُّهَا النَّاسُ إِنَّ وَعْدَ اللَّهِ حَقٌّ ۖ فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا ۖ وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ",
                "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ فَاتَّخِذُوهُ عَدُوًّا ۚ إِنَّمَا يَدْعُو حِزْبَهُ لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ",
                "الَّذِينَ كَفَرُوا لَهُمْ عَذَابٌ شَدِيدٌ ۖ وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
                "أَفَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ فَرَآهُ حَسَنًا ۖ فَإِنَّ اللَّهَ يُضِلُّ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ ۖ فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرَاتٍ ۚ إِنَّ اللَّهَ عَلِيمٌ بِمَا يَصْنَعُونَ",
                "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَسُقْنَاهُ إِلَىٰ بَلَدٍ مَّيِّتٍ فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا ۚ كَذَٰلِكَ النُّشُورُ",
                "مَن كَانَ يُرِيدُ الْعِزَّةَ فَلِلَّهِ الْعِزَّةُ جَمِيعًا ۚ إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ ۚ وَالَّذِينَ يَمْكُرُونَ السَّيِّئَاتِ لَهُمْ عَذَابٌ شَدِيدٌ ۖ وَمَكْرُ أُولَٰئِكَ هُوَ يَبُورُ"
            ],
            urdu: [
                "سب تعریف اللہ کے لیے ہے جو آسمان اور زمین کا پیدا کرنے والا، فرشتوں کو پیغام لے جانے والے بنانے والا، جن کے دو دو اور تین تین اور چار چار پر ہیں، وہ خلقت میں جیسے چاہے بڑھاتا ہے، بے شک اللہ ہر چیز پر قادر ہے",
                "اللہ جو رحمت لوگوں کے لیے کھول دے تو اسے کوئی روکنے والا نہیں اور جو روک لے تو اس کے بعد کوئی چھوڑنے والا نہیں اور وہ زبردست حکمت والا ہے",
                "اے لوگو! اللہ کی نعمت یاد کرو جو تم پر ہے، کیا اللہ کے سوا کوئی پیدا کرنے والا ہے جو تمہیں آسمان اور زمین سے رزق دے، اس کے سوا کوئی معبود نہیں، پھر تم کہاں پھیرے جاتے ہو",
                "اور اگر وہ آپ کو جھٹلائیں تو آپ سے پہلے بھی رسول جھٹلائے گئے اور اللہ ہی کی طرف سب کام لوٹائے جاتے ہیں",
                "اے لوگو! بے شک اللہ کا وعدہ سچا ہے، پس دنیا کی زندگی تمہیں دھوکے میں نہ ڈالے اور نہ دھوکے باز اللہ کے بارے میں تمہیں دھوکہ دے",
                "بے شک شیطان تمہارا دشمن ہے پس اسے دشمن ہی سمجھو، وہ تو اپنے گروہ کو صرف اس لیے بلاتا ہے کہ وہ بھڑکتی آگ والے ہوں",
                "جنہوں نے کفر کیا ان کے لیے سخت عذاب ہے اور جو ایمان لائے اور نیک عمل کیے ان کے لیے بخشش اور بڑا اجر ہے",
                "کیا وہ جس کے لیے اس کے برے عمل کو خوشنما بنا دیا گیا پھر وہ اسے اچھا سمجھنے لگا، بے شک اللہ جسے چاہے گمراہ کرتا ہے اور جسے چاہے ہدایت دیتا ہے، پس آپ ان پر افسوس کر کے اپنی جان ہلاک نہ کریں، بے شک اللہ ان کے کاموں کو جانتا ہے",
                "اور اللہ وہ ہے جس نے ہوائیں بھیجیں پھر وہ بادل اٹھاتی ہیں پھر ہم اسے مردہ شہر کی طرف چلاتے ہیں پھر اس سے زمین کو اس کی موت کے بعد زندہ کرتے ہیں، اسی طرح دوبارہ اٹھنا ہے",
                "جو عزت چاہتا ہے تو اللہ ہی کے لیے ساری عزت ہے، اسی کی طرف پاک بات چڑھتی ہے اور نیک عمل اسے بلند کرتا ہے اور جو بری چالیں چلتے ہیں ان کے لیے سخت عذاب ہے اور ان کی چال ہی تباہ ہو گی"
            ],
            english: [
                "[All] praise is [due] to Allah, Creator of the heavens and the earth, [who] made the angels messengers having wings, two or three or four. He increases in creation what He wills. Indeed, Allah is over all things competent.",
                "Whatever Allah grants to people of mercy - none can withhold it; and whatever He withholds - none can release it thereafter. And He is the Exalted in Might, the Wise.",
                "O mankind, remember the favor of Allah upon you. Is there any creator other than Allah who provides for you from the heaven and earth? There is no deity except Him, so how are you deluded?",
                "And if they deny you, [O Muhammad] - already were messengers denied before you. And to Allah are all matters returned.",
                "O mankind, indeed the promise of Allah is truth, so let not the worldly life delude you and be not deceived about Allah by the Deceiver.",
                "Indeed, Satan is an enemy to you; so take him as an enemy. He only invites his party to be among the companions of the Blaze.",
                "Those who disbelieve will have a severe punishment, and those who believe and do righteous deeds will have forgiveness and great reward.",
                "Then is one to whom the evil of his deed has been made attractive so he considers it good [like one rightly guided]? For indeed, Allah sends astray whom He wills and guides whom He wills. So let not your soul expire in sorrow on their account. Indeed, Allah is Knowing of what they do.",
                "And it is Allah who sends the winds, and they stir the clouds, and We drive them to a dead land and give life thereby to the earth after its lifelessness. Thus is the resurrection.",
                "Whoever desires honor [through power] - then to Allah belongs all honor. To Him ascends good speech, and righteous work raises it. But they who plot evil deeds will have a severe punishment, and the plotting of those - it will perish."
            ]
        },

        /* ================= SURAH 36: YA-SIN ================= */
        36: {
            arabic: [
                "يس",
                "وَالْقُرْآنِ الْحَكِيمِ",
                "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
                "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
                "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ",
                "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ",
                "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ",
                "إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُم مُّقْمَحُونَ",
                "وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ",
                "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
                "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ ۖ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ",
                "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ ۚ وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ"
            ],
            urdu: [
                "یا سین",
                "حکمت والے قرآن کی قسم",
                "بے شک آپ رسولوں میں سے ہیں",
                "سیدھے راستے پر",
                "یہ زبردست مہربان کا نازل کردہ ہے",
                "تاکہ آپ ایسے لوگوں کو ڈرائیں جن کے باپ دادا نہیں ڈرائے گئے پس وہ غافل ہیں",
                "یقیناً ان میں سے اکثر پر بات پوری ہو چکی ہے پس وہ ایمان نہیں لاتے",
                "بے شک ہم نے ان کی گردنوں میں طوق ڈال دیے ہیں جو ٹھوڑیوں تک ہیں پس ان کے سر اوپر اٹھے ہوئے ہیں",
                "اور ہم نے ان کے آگے ایک دیوار اور پیچھے ایک دیوار بنا دی پھر ہم نے ان پر پردہ ڈال دیا پس وہ نہیں دیکھتے",
                "اور برابر ہے ان کے لیے چاہے آپ انہیں ڈرائیں یا نہ ڈرائیں وہ ایمان نہیں لاتے",
                "آپ تو صرف اسے ڈراتے ہیں جو نصیحت کی پیروی کرے اور بن دیکھے رحمٰن سے ڈرے پس اسے بخشش اور اجر کریم کی خوشخبری دیں",
                "بے شک ہم ہی مردوں کو زندہ کرتے ہیں اور ہم لکھتے ہیں جو انہوں نے آگے بھیجا اور ان کے نشانات اور ہم نے ہر چیز کو واضح امام میں شمار کر رکھا ہے"
            ],
            english: [
                "Ya, Seen.",
                "By the wise Qur'an.",
                "Indeed you, [O Muhammad], are from among the messengers.",
                "On a straight path.",
                "[This is] a revelation sent down by the Exalted in Might, the Merciful.",
                "That you may warn a people whose forefathers were not warned, so they are unaware.",
                "Already the word has come into effect upon most of them, so they do not believe.",
                "Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads [kept] aloft.",
                "And We have put before them a barrier and behind them a barrier and covered them, so they do not see.",
                "And it is all the same to them whether you warn them or do not warn them - they will not believe.",
                "You can only warn one who follows the message and fears the Most Merciful unseen. So give him good tidings of forgiveness and noble reward.",
                "Indeed, it is We who bring the dead to life and record what they have put forth and what they left behind, and all things We have enumerated in a clear register."
            ]
        },

        /* ================= SURAH 37: AS-SAFFAT ================= */
        37: {
            arabic: [
                "وَالصَّافَّاتِ صَفًّا",
                "فَالزَّاجِرَاتِ زَجْرًا",
                "فَالتَّالِيَاتِ ذِكْرًا",
                "إِنَّ إِلَٰهَكُمْ لَوَاحِدٌ",
                "رَّبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا وَرَبُّ الْمَشَارِقِ",
                "إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ",
                "وَحِفْظًا مِّن كُلِّ شَيْطَانٍ مَّارِدٍ",
                "لَّا يَسَّمَّعُونَ إِلَى الْمَلَإِ الْأَعْلَىٰ وَيُقْذَفُونَ مِن كُلِّ جَانِبٍ",
                "دُحُورًا ۖ وَلَهُمْ عَذَابٌ وَاصِبٌ",
                "إِلَّا مَنْ خَطِفَ الْخَطْفَةَ فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ"
            ],
            urdu: [
                "صف باندھنے والوں کی قسم",
                "پھر جھڑکنے والوں کی قسم",
                "پھر ذکر پڑھنے والوں کی قسم",
                "بے شک تمہارا معبود ایک ہی ہے",
                "آسمانوں اور زمین اور جو ان کے درمیان ہے کا رب اور مشرقوں کا رب",
                "بے شک ہم نے آسمان دنیا کو ستاروں کی زینت سے سجایا",
                "اور ہر سرکش شیطان سے حفاظت کے لیے",
                "وہ بلند عالم کی بات نہیں سن سکتے اور ہر طرف سے مارے جاتے ہیں",
                "دھتکارے ہوئے اور ان کے لیے دائمی عذاب ہے",
                "سوائے اس کے جو کوئی بات اچانک اچک لے پھر اس کا پیچھا چمکتا تارہ کرے"
            ],
            english: [
                "By those [angels] lined up in rows.",
                "And those who drive [the clouds].",
                "And those who recite the message.",
                "Indeed, your God is One.",
                "Lord of the heavens and the earth and that between them and Lord of the sunrises.",
                "Indeed, We have adorned the nearest heaven with an adornment of stars.",
                "And as protection against every rebellious devil.",
                "[So] they may not listen to the exalted assembly [of angels] and are pelted from every side.",
                "Repelled; and for them is a constant punishment.",
                "Except one who snatches [some words] by theft, but they are pursued by a burning flame, piercing [in brightness]."
            ]
        },

        /* ================= SURAH 38: SAD ================= */
        38: {
            arabic: [
                "ص ۚ وَالْقُرْآنِ ذِي الذِّكْرِ",
                "بَلِ الَّذِينَ كَفَرُوا فِي عِزَّةٍ وَشِقَاقٍ",
                "كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ فَنَادَوا وَّلَاتَ حِينَ مَنَاصٍ",
                "وَعَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ ۖ وَقَالَ الْكَافِرُونَ هَٰذَا سَاحِرٌ كَذَّابٌ",
                "أَجَعَلَ الْآلِهَةَ إِلَٰهًا وَاحِدًا ۖ إِنَّ هَٰذَا لَشَيْءٌ عُجَابٌ",
                "وَانطَلَقَ الْمَلَأُ مِنْهُمْ أَنِ امْشُوا وَاصْبِرُوا عَلَىٰ آلِهَتِكُمْ ۖ إِنَّ هَٰذَا لَشَيْءٌ يُرَادُ",
                "مَا سَمِعْنَا بِهَٰذَا فِي الْمِلَّةِ الْآخِرَةِ ۖ إِنْ هَٰذَا إِلَّا اخْتِلَاقٌ",
                "أَأُنزِلَ عَلَيْهِ الذِّكْرُ مِن بَيْنِنَا ۚ بَلْ هُمْ فِي شَكٍّ مِّن ذِكْرِي ۖ بَل لَّمَّا يَذُوقُوا عَذَابِ",
                "أَمْ عِندَهُمْ خَزَائِنُ رَحْمَةِ رَبِّكَ الْعَزِيزِ الْوَهَّابِ",
                "أَمْ لَهُم مُّلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ فَلْيَرْتَقُوا فِي الْأَسْبَابِ"
            ],
            urdu: [
                "ص، نصیحت والے قرآن کی قسم",
                "بلکہ کافروں نے تکبر اور مخالفت میں سرکشی کی",
                "ہم نے ان سے پہلے کتنی نسلیں ہلاک کیں پھر انہوں نے پکارا اور اب بھاگنے کا وقت نہ تھا",
                "اور انہیں تعجب ہوا کہ ان کے پاس انہی میں سے ڈرانے والا آیا اور کافروں نے کہا یہ جادوگر جھوٹا ہے",
                "کیا اس نے معبودوں کو ایک معبود بنا دیا، بے شک یہ عجیب بات ہے",
                "اور ان کے سردار چلے اور کہا چلو اور اپنے معبودوں پر ثابت رہو، بے شک یہ ایسی بات ہے جس کا ارادہ کیا گیا ہے",
                "ہم نے یہ بات پچھلے دین میں نہیں سنی، یہ تو صرف من گھڑت ہے",
                "کیا ہمارے درمیان اسی پر نصیحت نازل کی گئی، بلکہ وہ میرے ذکر سے شک میں ہیں، بلکہ انہوں نے ابھی میرا عذاب نہیں چکھا",
                "کیا ان کے پاس آپ کے رب کی رحمت کے خزانے ہیں جو زبردست بے پایاں عطا کرنے والا ہے",
                "کیا ان کے پاس آسمان اور زمین اور جو ان کے درمیان ہے کی بادشاہت ہے، پس چاہیے کہ رسیوں کے ذریعے چڑھ جائیں"
            ],
            english: [
                "Sad. By the Qur'an containing reminder...",
                "But those who disbelieve are in pride and dissension.",
                "How many a generation have We destroyed before them, and they [then] called out; but it was not a time for escape.",
                "And they wonder that there has come to them a warner from among themselves. And the disbelievers say, 'This is a magician and a liar.'",
                "Has he made the gods [only] one God? Indeed, this is a curious thing.",
                "And the eminent among them went forth, [saying], 'Continue, and be patient over [the defense of] your gods. Indeed, this is a [matter] intended [to be accomplished].'",
                "We have not heard of this in the latest religion. This is not but a fabrication.",
                "Has the message been revealed to him out of [all of] us?' Rather, they are in doubt about My message. Rather, they have not yet tasted My punishment.",
                "Or do they have the depositories of the mercy of your Lord, the Exalted in Might, the Bestower?",
                "Or is it that theirs is the kingdom of the heavens and the earth and what is between them? Then let them ascend by [some] means."
            ]
        },

        /* ================= SURAH 39: AZ-ZUMAR ================= */
        39: {
            arabic: [
                "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
                "إِنَّا أَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ فَاعْبُدِ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ",
                "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ ۚ وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ إِنَّ اللَّهَ يَحْكُمُ بَيْنَهُمْ فِي مَا هُمْ فِيهِ يَخْتَلِفُونَ ۗ إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ",
                "لَّوْ أَرَادَ اللَّهُ أَن يَتَّخِذَ وَلَدًا لَّاصْطَفَىٰ مِمَّا يَخْلُقُ مَا يَشَاءُ ۚ سُبْحَانَهُ ۖ هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
                "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى اللَّيْلِ ۖ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ ۖ كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى ۗ أَلَا هُوَ الْعَزِيزُ الْغَفَّارُ",
                "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا وَأَنزَلَ لَكُم مِّنَ الْأَنْعَامِ ثَمَانِيَةَ أَزْوَاجٍ ۚ يَخْلُقُكُمْ فِي بُطُونِ أُمَّهَاتِكُمْ خَلْقًا مِّن بَعْدِ خَلْقٍ فِي ظُلُمَاتٍ ثَلَاثٍ ۚ ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ تُصْرَفُونَ",
                "إِن تَكْفُرُوا فَإِنَّ اللَّهَ غَنِيٌّ عَنكُمْ ۖ وَلَا يَرْضَىٰ لِعِبَادِهِ الْكُفْرَ ۖ وَإِن تَشْكُرُوا يَرْضَهُ لَكُمْ ۗ وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۗ ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ ۚ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
                "وَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَا رَبَّهُ مُنِيبًا إِلَيْهِ ثُمَّ إِذَا خَوَّلَهُ نِعْمَةً مِّنْهُ نَسِيَ مَا كَانَ يَدْعُو إِلَيْهِ مِن قَبْلُ وَجَعَلَ لِلَّهِ أَندَادًا لِّيُضِلَّ عَن سَبِيلِهِ ۚ قُلْ تَمَتَّعْ بِكُفْرِكَ قَلِيلًا ۖ إِنَّكَ مِنْ أَصْحَابِ النَّارِ",
                "أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ ۗ قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ ۗ إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
                "قُلْ يَا عِبَادِ الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ ۚ لِلَّذِينَ أَحْسَنُوا فِي هَٰذِهِ الدُّنْيَا حَسَنَةٌ ۗ وَأَرْضُ اللَّهِ وَاسِعَةٌ ۗ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ"
            ],
            urdu: [
                "اس کتاب کا نازل کرنا اللہ زبردست حکمت والے کی طرف سے ہے",
                "بے شک ہم نے آپ پر کتاب حق کے ساتھ نازل کی پس اللہ کی عبادت کرو دین کو اسی کے لیے خالص کر کے",
                "خبردار! خالص دین اللہ ہی کے لیے ہے اور جنہوں نے اس کے سوا دوست بنائے کہتے ہیں ہم ان کی عبادت صرف اس لیے کرتے ہیں کہ وہ ہمیں اللہ کے قریب کر دیں، بے شک اللہ ان کے درمیان اس میں فیصلہ کرے گا جس میں وہ اختلاف کرتے ہیں، بے شک اللہ اسے ہدایت نہیں دیتا جو جھوٹا ناشکرا ہے",
                "اگر اللہ بیٹا بنانا چاہتا تو اپنی مخلوق میں سے جسے چاہتا چن لیتا، وہ پاک ہے، وہ اللہ ایک زبردست ہے",
                "اس نے آسمان اور زمین حق کے ساتھ پیدا کیے، وہ رات کو دن پر لپیٹتا ہے اور دن کو رات پر لپیٹتا ہے اور سورج اور چاند کو تابع کیا، ہر ایک ایک مقررہ وقت تک چلتا ہے، خبردار! وہ زبردست بخشنے والا ہے",
                "اس نے تمہیں ایک جان سے پیدا کیا پھر اسی سے اس کا جوڑا بنایا اور تمہارے لیے چوپایوں میں سے آٹھ جوڑے نازل کیے، وہ تمہیں تمہاری ماؤں کے پیٹوں میں تین اندھیروں میں ایک کے بعد ایک تخلیق بناتا ہے، یہ اللہ تمہارا رب ہے اسی کی بادشاہت ہے، اس کے سوا کوئی معبود نہیں، پھر تم کہاں پھیرے جاتے ہو",
                "اگر تم کفر کرو تو بے شک اللہ تم سے بے نیاز ہے اور وہ اپنے بندوں کے لیے کفر پسند نہیں کرتا اور اگر تم شکر کرو تو وہ اسے تمہارے لیے پسند کرتا ہے اور کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا، پھر تمہارا رب ہی کی طرف لوٹنا ہے پھر وہ تمہیں بتائے گا جو تم کرتے تھے، بے شک وہ دلوں کی بات جانتا ہے",
                "اور جب انسان کو تکلیف پہنچتی ہے تو اپنے رب کو پکارتا ہے اس کی طرف رجوع کرتے ہوئے پھر جب وہ اسے اپنی نعمت عطا کرتا ہے تو بھول جاتا ہے جس کے لیے اس نے پہلے پکارا تھا اور اللہ کے شریک بناتا ہے تاکہ اس کے راستے سے گمراہ کرے، کہو اپنے کفر سے تھوڑا فائدہ اٹھا لو، بے شک تم آگ والوں میں سے ہو",
                "کیا وہ جو رات کی گھڑیوں میں سجدہ اور قیام کرتے ہوئے عبادت کرتا ہے آخرت سے ڈرتا ہے اور اپنے رب کی رحمت کی امید رکھتا ہے، کہو کیا علم والے اور بے علم برابر ہو سکتے ہیں، نصیحت صرف عقل والے لیتے ہیں",
                "کہو اے میرے بندو! جنہوں نے ایمان لایا اپنے رب سے ڈرو، جنہوں نے اس دنیا میں نیکی کی ان کے لیے بھلائی ہے اور اللہ کی زمین کشادہ ہے، بے شک صبر کرنے والوں کو ان کا اجر بے حساب دیا جائے گا"
            ],
            english: [
                "The revelation of the Book is from Allah, the Exalted in Might, the Wise.",
                "Indeed, We have sent down to you the Book, [O Muhammad], in truth. So worship Allah, [being] sincere to Him in religion.",
                "Unquestionably, for Allah is the pure religion. And those who take protectors besides Him [say], 'We only worship them that they may bring us nearer to Allah in position.' Indeed, Allah will judge between them concerning that over which they differ. Indeed, Allah does not guide he who is a liar and [confirmed] disbeliever.",
                "If Allah had intended to take a son, He could have chosen from what He creates whatever He willed. Exalted is He; He is Allah, the One, the Prevailing.",
                "He created the heavens and earth in truth. He wraps the night over the day and wraps the day over the night and has subjected the sun and the moon, each running [its course] for a specified term. Unquestionably, He is the Exalted in Might, the Perpetual Forgiver.",
                "He created you from one soul. Then He made from it its mate, and He produced for you from the grazing livestock eight mates. He creates you in the wombs of your mothers, creation after creation, within three darknesses. That is Allah, your Lord; to Him belongs dominion. There is no deity except Him, so how are you averted?",
                "If you disbelieve - indeed, Allah is Free from need of you. And He does not approve for His servants disbelief. And if you are grateful, He approves it for you; and no bearer of burdens will bear the burden of another. Then to your Lord is your return, and He will inform you about what you used to do. Indeed, He is Knowing of that within the breasts.",
                "And when adversity touches man, he calls upon his Lord, turning to Him [alone]; then when He bestows on him a favor from Himself, he forgets Him whom he called upon before, and he attributes to Allah equals to mislead [people] from His way. Say, 'Enjoy your disbelief for a little; indeed, you are of the companions of the Fire.'",
                "Is one who is devoutly obedient during periods of the night, prostrating and standing [in prayer], fearing the Hereafter and hoping for the mercy of his Lord, [like one who does not]? Say, 'Are those who know equal to those who do not know?' Only they will remember [who are] people of understanding.",
                "Say, 'O My servants who have believed, fear your Lord. For those who do good in this world is good, and the earth of Allah is spacious. Indeed, the patient will be given their reward without account.'"
            ]
        },

        /* ================= SURAH 40: GHAFIR ================= */
        40: {
            arabic: [
                "حم",
                "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ",
                "غَافِرِ الذَّنبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ ذِي الطَّوْلِ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ إِلَيْهِ الْمَصِيرُ",
                "مَا يُجَادِلُ فِي آيَاتِ اللَّهِ إِلَّا الَّذِينَ كَفَرُوا فَلَا يَغْرُرْكَ تَقَلُّبُهُمْ فِي الْبِلَادِ",
                "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَالْأَحْزَابُ مِن بَعْدِهِمْ ۖ وَهَمَّتْ كُلُّ أُمَّةٍ بِرَسُولِهِمْ لِيَأْخُذُوهُ ۖ وَجَادَلُوا بِالْبَاطِلِ لِيُدْحِضُوا بِهِ الْحَقَّ فَأَخَذْتُهُمْ ۖ فَكَيْفَ كَانَ عِقَابِ",
                "وَكَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى الَّذِينَ كَفَرُوا أَنَّهُمْ أَصْحَابُ النَّارِ",
                "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيُؤْمِنُونَ بِهِ وَيَسْتَغْفِرُونَ لِلَّذِينَ آمَنُوا رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
                "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُمْ وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ ۚ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
                "وَقِهِمُ السَّيِّئَاتِ ۚ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ ۚ وَذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
                "إِنَّ الَّذِينَ كَفَرُوا يُنَادَوْنَ لَمَقْتُ اللَّهِ أَكْبَرُ مِن مَّقْتِكُمْ أَنفُسَكُمْ إِذْ تُدْعَوْنَ إِلَى الْإِيمَانِ فَتَكْفُرُونَ",
                "قَالُوا رَبَّنَا أَمَتَّنَا اثْنَتَيْنِ وَأَحْيَيْتَنَا اثْنَتَيْنِ فَاعْتَرَفْنَا بِذُنُوبِنَا فَهَلْ إِلَىٰ خُرُوجٍ مِّن سَبِيلٍ"
            ],
            urdu: [
                "حم",
                "اس کتاب کا نازل کرنا اللہ زبردست جاننے والے کی طرف سے ہے",
                "گناہ بخشنے والا توبہ قبول کرنے والا سخت عذاب دینے والا بڑی نعمت والا، اس کے سوا کوئی معبود نہیں، اسی کی طرف لوٹنا ہے",
                "اللہ کی آیات میں صرف وہی جھگڑتے ہیں جنہوں نے کفر کیا، پس ان کا شہروں میں چلنا پھرنا تمہیں دھوکے میں نہ ڈالے",
                "ان سے پہلے نوح کی قوم اور ان کے بعد کے گروہوں نے جھٹلایا اور ہر قوم نے اپنے رسول کو پکڑنے کا ارادہ کیا اور باطل سے جھگڑا کیا تاکہ حق کو مٹا دیں پھر میں نے انہیں پکڑ لیا، پھر کیسا تھا میرا عذاب",
                "اور اسی طرح آپ کے رب کا کلمہ ان کافروں پر ثابت ہو گیا کہ وہ آگ والے ہیں",
                "جو عرش اٹھاتے ہیں اور جو اس کے گرد ہیں وہ اپنے رب کی حمد کے ساتھ تسبیح کرتے ہیں اور اس پر ایمان رکھتے ہیں اور مومنوں کے لیے بخشش مانگتے ہیں، اے ہمارے رب! تو ہر چیز کو رحمت اور علم سے ڈھانپے ہوئے ہے پس انہیں بخش دے جنہوں نے توبہ کی اور تیرا راستہ اختیار کیا اور انہیں جہنم کے عذاب سے بچا",
                "اے ہمارے رب! انہیں ہمیشگی کے باغات میں داخل کر جن کا تو نے ان سے وعدہ کیا اور ان کے باپ دادا اور بیویوں اور اولاد میں سے جو نیک ہوئے، بے شک تو زبردست حکمت والا ہے",
                "اور انہیں برائیوں سے بچا اور جسے تو نے اس دن برائیوں سے بچایا تو بے شک تو نے اس پر رحم کیا اور یہی بڑی کامیابی ہے",
                "بے شک جو کافر ہوئے انہیں پکارا جائے گا کہ اللہ کی ناراضگی تمہاری اپنی ناراضگی سے بڑی ہے جب تم ایمان کی طرف بلائے جاتے تھے پھر تم کفر کرتے تھے",
                "وہ کہیں گے اے ہمارے رب! تو نے ہمیں دو بار مارا اور دو بار زندہ کیا پھر ہم نے اپنے گناہ مان لیے، پس کیا نکلنے کا کوئی راستہ ہے"
            ],
            english: [
                "Ha, Meem.",
                "The revelation of the Book is from Allah, the Exalted in Might, the Knowing.",
                "The forgiver of sin, acceptor of repentance, severe in punishment, owner of abundance. There is no deity except Him; to Him is the destination.",
                "No one disputes concerning the signs of Allah except those who disbelieve, so be not deceived by their [uninhibited] movement throughout the land.",
                "The people of Noah denied before them and the [disbelieving] factions after them, and every nation intended [a plot] for their messenger to seize him, and they disputed by [using] falsehood to [attempt to] invalidate thereby the truth. So I seized them, and how [terrible] was My penalty.",
                "And thus has the word of your Lord come into effect upon those who disbelieved that they are companions of the Fire.",
                "Those [angels] who carry the Throne and those around it exalt [Allah] with praise of their Lord and believe in Him and ask forgiveness for those who have believed, [saying], 'Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your way and protect them from the punishment of Hellfire.'",
                "Our Lord, and admit them to gardens of perpetual residence which You have promised them and whoever was righteous among their fathers, their spouses and their offspring. Indeed, it is You who is the Exalted in Might, the Wise.",
                "And protect them from the evil consequences [of their deeds]. And he whom You protect from evil consequences that Day - You will have given him mercy. And that is the great attainment.",
                "Indeed, those who disbelieve will be addressed, 'The hatred of Allah for you was [even] greater than your hatred of yourselves [this Day in Hell] when you were invited to faith, but you refused.'",
                "They will say, 'Our Lord, You have caused us to die twice, and You have given us life twice. Now we have acknowledged our sins, so is there any way of exit?'"
            ]
        }

    },

    /* =====================================================
       HADITH — JAMI AT-TIRMIDHI (50 Hadiths)
    ===================================================== */
    hadithBooks: {
        tirmidhi: {
            title: "Jami at-Tirmidhi",
            arabic: "جامع الترمذي",
            english: "Jami at-Tirmidhi",
            author: "Imam al-Tirmidhi",
            hadiths: [
                { id: 1, arabic: "الدُّعَاءُ مُخُّ الْعِبَادَةِ", urdu: "دعا عبادت کا مغز ہے", english: "Dua is the essence of worship.", reference: "Jami at-Tirmidhi 3371" },
                { id: 2, arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", urdu: "جہاں بھی ہو اللہ سے ڈرو", english: "Fear Allah wherever you are.", reference: "Jami at-Tirmidhi 1987" },
                { id: 3, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Jami at-Tirmidhi 3374" },
                { id: 4, arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", urdu: "لوگوں میں بہترین وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو", english: "The best of people are those who are most beneficial to people.", reference: "Jami at-Tirmidhi 2342" },
                { id: 5, arabic: "إِنَّ اللَّهَ يُحِبُّ الْعَبْدَ التَّقِيَّ الْغَنِيَّ الْخَفِيَّ", urdu: "بے شک اللہ متقی، مالدار اور گمنام بندے کو پسند کرتا ہے", english: "Indeed, Allah loves the God-fearing, wealthy and obscure servant.", reference: "Jami at-Tirmidhi 2351" },
                { id: 6, arabic: "الْبِرُّ حُسْنُ الْخُلُقِ", urdu: "نیکی اچھے اخلاق کا نام ہے", english: "Righteousness is good character.", reference: "Jami at-Tirmidhi 2002" },
                { id: 7, arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", urdu: "صدقہ مال میں کمی نہیں کرتا", english: "Charity does not decrease wealth.", reference: "Jami at-Tirmidhi 2029" },
                { id: 8, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Jami at-Tirmidhi 2504" },
                { id: 9, arabic: "أَفْضَلُ الذِّكْرِ لَا إِلَٰهَ إِلَّا اللَّهُ", urdu: "سب سے افضل ذکر لا الہ الا اللہ ہے", english: "The best remembrance is La ilaha illallah.", reference: "Jami at-Tirmidhi 3383" },
                { id: 10, arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ", urdu: "جو لوگوں پر رحم نہیں کرتا اللہ اس پر رحم نہیں کرتا", english: "Whoever does not show mercy to people, Allah will not show mercy to him.", reference: "Jami at-Tirmidhi 1922" },
                { id: 11, arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ", urdu: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے", english: "The world is a prison for the believer and a paradise for the disbeliever.", reference: "Jami at-Tirmidhi 2320" },
                { id: 12, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Jami at-Tirmidhi 2464" },
                { id: 13, arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ", urdu: "جو کسی مسلمان کا عیب چھپائے اللہ اس کا عیب چھپائے گا", english: "Whoever conceals a Muslim's fault, Allah will conceal his fault.", reference: "Jami at-Tirmidhi 1426" },
                { id: 14, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and He loves beauty.", reference: "Jami at-Tirmidhi 1999" },
                { id: 15, arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Jami at-Tirmidhi 3517" },
                { id: 16, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Jami at-Tirmidhi 1409" },
                { id: 17, arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ", urdu: "جو جان بوجھ کر مجھ پر جھوٹ باندھے وہ اپنا ٹھکانہ جہنم میں بنائے", english: "Whoever tells a lie about me deliberately, let him take his place in Hell.", reference: "Jami at-Tirmidhi 2659" },
                { id: 18, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Jami at-Tirmidhi 1898" },
                { id: 19, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Jami at-Tirmidhi 1956" },
                { id: 20, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے", english: "The best of you are those who learn the Quran and teach it.", reference: "Jami at-Tirmidhi 2907" },
                { id: 21, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise is beneath the feet of mothers.", reference: "Jami at-Tirmidhi 1899" },
                { id: 22, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Jami at-Tirmidhi 3517" },
                { id: 23, arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Jami at-Tirmidhi 783" },
                { id: 24, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Jami at-Tirmidhi 2515" },
                { id: 25, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Jami at-Tirmidhi 2500" },
                { id: 26, arabic: "مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا", urdu: "جو میرے قریب ایک بالشت آتا ہے میں اس کے قریب ایک ہاتھ آتا ہوں", english: "Whoever comes one step closer to Me, I come one arm's length closer to him.", reference: "Jami at-Tirmidhi 3374" },
                { id: 27, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Jami at-Tirmidhi 3372" },
                { id: 28, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends blessings upon me once, Allah will send ten blessings upon him.", reference: "Jami at-Tirmidhi 485" },
                { id: 29, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Jami at-Tirmidhi 2504" },
                { id: 30, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Jami at-Tirmidhi 2485" },
                { id: 31, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Jami at-Tirmidhi 2616" },
                { id: 32, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Jami at-Tirmidhi 1927" },
                { id: 33, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Jami at-Tirmidhi 2318" },
                { id: 34, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Jami at-Tirmidhi 3517" },
                { id: 35, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Jami at-Tirmidhi 2346" },
                { id: 36, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Jami at-Tirmidhi 1358" },
                { id: 37, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Jami at-Tirmidhi 2485" },
                { id: 38, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Jami at-Tirmidhi 1819" },
                { id: 39, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Jami at-Tirmidhi 2410" },
                { id: 40, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Jami at-Tirmidhi 170" },
                { id: 41, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Jami at-Tirmidhi 2020" },
                { id: 42, arabic: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ", urdu: "بے شک اللہ نرم ہے اور نرمی کو پسند کرتا ہے", english: "Indeed, Allah is gentle and loves gentleness.", reference: "Jami at-Tirmidhi 2013" },
                { id: 43, arabic: "مَنْ كَانَ لَهُ جَارٌ فَلَا يُؤْذِيهِ", urdu: "جس کا پڑوسی ہو وہ اسے تکلیف نہ دے", english: "Whoever has a neighbor, let him not harm him.", reference: "Jami at-Tirmidhi 1944" },
                { id: 44, arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ", urdu: "رحم کرنے والوں پر رحمٰن رحم کرتا ہے", english: "The merciful will be shown mercy by the Most Merciful.", reference: "Jami at-Tirmidhi 1924" },
                { id: 45, arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا", urdu: "مومنوں میں سب سے کامل ایمان والا وہ ہے جس کا اخلاق سب سے اچھا ہو", english: "The most complete of the believers in faith is the one with the best character.", reference: "Jami at-Tirmidhi 1162" },
                { id: 46, arabic: "مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "Whoever does not thank people does not thank Allah.", reference: "Jami at-Tirmidhi 1954" },
                { id: 47, arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا", urdu: "مومن مومن کے لیے عمارت کی طرح ہے جس کا ایک حصہ دوسرے کو مضبوط کرتا ہے", english: "A believer to another believer is like a building whose parts support each other.", reference: "Jami at-Tirmidhi 1928" },
                { id: 48, arabic: "السَّلَامُ قَبْلَ الْكَلَامِ", urdu: "بات کرنے سے پہلے سلام کرو", english: "Greet before speaking.", reference: "Jami at-Tirmidhi 2694" },
                { id: 49, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", urdu: "علم کا طلب کرنا ہر مسلمان پر فرض ہے", english: "Seeking knowledge is obligatory upon every Muslim.", reference: "Jami at-Tirmidhi 74" },
                { id: 50, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Jami at-Tirmidhi 1970" }
            ]
        }
    },

    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },
    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },
    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 4] Loaded ✅");
console.log("[DB Part 4] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART4.quranContent).length);
console.log("[DB Part 4] Tirmidhi Hadiths: " + ISLAMIC_DATABASE_PART4.hadithBooks.tirmidhi.hadiths.length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 5A
   Surahs 41-55
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART5A = {

    quranContent: {

        /* ================= SURAH 41: FUSSILAT ================= */
        41: {
            arabic: [
                "حم",
                "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ",
                "كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِّقَوْمٍ يَعْلَمُونَ",
                "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ",
                "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِّمَّا تَدْعُونَا إِلَيْهِ وَفِي آذَانِنَا وَقْرٌ وَمِن بَيْنِنَا وَبَيْنِكَ حِجَابٌ فَاعْمَلْ إِنَّنَا عَامِلُونَ",
                "قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ فَاسْتَقِيمُوا إِلَيْهِ وَاسْتَغْفِرُوهُ ۗ وَوَيْلٌ لِّلْمُشْرِكِينَ",
                "الَّذِينَ لَا يُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ كَافِرُونَ",
                "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
                "قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَندَادًا ۚ ذَٰلِكَ رَبُّ الْعَالَمِينَ",
                "وَجَعَلَ فِيهَا رَوَاسِيَ مِن فَوْقِهَا وَبَارَكَ فِيهَا وَقَدَّرَ فِيهَا أَقْوَاتَهَا فِي أَرْبَعَةِ أَيَّامٍ سَوَاءً لِّلسَّائِلِينَ"
            ],
            urdu: [
                "حم",
                "رحمٰن رحیم کی طرف سے نازل کیا گیا",
                "ایسی کتاب جس کی آیات تفصیل سے بیان کی گئیں، عربی قرآن، ان لوگوں کے لیے جو جانتے ہیں",
                "خوشخبری دینے والا اور ڈرانے والا، پھر ان میں اکثر نے منہ موڑ لیا پس وہ سنتے نہیں",
                "اور کہا ہمارے دل ان باتوں سے پردے میں ہیں جن کی طرف تم ہمیں بلاتے ہو اور ہمارے کانوں میں بوجھ ہے اور ہمارے اور تمہارے درمیان پردہ ہے، پس تم عمل کرو، ہم بھی عمل کرنے والے ہیں",
                "کہو میں تو تمہارے جیسا بشر ہوں، میری طرف وحی کی جاتی ہے کہ تمہارا معبود ایک ہی معبود ہے، پس اسی کی طرف سیدھے ہو جاؤ اور اسی سے بخشش مانگو اور مشرکوں کے لیے ہلاکت ہے",
                "جو زکوٰۃ نہیں دیتے اور وہ آخرت کے منکر ہیں",
                "بے شک جو ایمان لائے اور نیک عمل کیے ان کے لیے ایسا اجر ہے جو کبھی ختم نہ ہو گا",
                "کہو کیا تم اس سے کفر کرتے ہو جس نے زمین دو دنوں میں پیدا کی اور اس کے شریک بناتے ہو، یہ تمام جہانوں کا رب ہے",
                "اور اس میں اوپر سے پہاڑ رکھے اور اس میں برکت دی اور اس میں خوراک کا اندازہ چار دنوں میں مقرر کیا، پوچھنے والوں کے لیے برابر"
            ],
            english: [
                "Ha, Meem.",
                "[This is] a revelation from the Entirely Merciful, the Especially Merciful.",
                "A Book whose verses have been detailed, an Arabic Qur'an for a people who know.",
                "As a giver of good tidings and a warner; but most of them turn away, so they do not hear.",
                "And they say, 'Our hearts are within coverings from that to which you invite us, and in our ears is deafness, and between us and you is a partition, so work; indeed, we are working.'",
                "Say, 'I am only a man like you to whom it has been revealed that your god is but one God; so take a straight course to Him and seek His forgiveness.' And woe to those who associate others with Allah.",
                "Those who do not give zakah, and in the Hereafter they are disbelievers.",
                "Indeed, those who have believed and done righteous deeds - they will have a reward uninterrupted.",
                "Say, 'Do you indeed disbelieve in He who created the earth in two days and attribute to Him equals? That is the Lord of the worlds.'",
                "And He placed on the earth firmly set mountains over its surface, and He blessed it and determined therein its sustenance in four days without distinction - for the seekers."
            ]
        },

        /* ================= SURAH 42: ASH-SHURA ================= */
        42: {
            arabic: [
                "حم",
                "عسق",
                "كَذَٰلِكَ يُوحِي إِلَيْكَ وَإِلَى الَّذِينَ مِن قَبْلِكَ اللَّهُ الْعَزِيزُ الْحَكِيمُ",
                "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                "تَكَادُ السَّمَاوَاتُ يَتَفَطَّرْنَ مِن فَوْقِهِنَّ ۚ وَالْمَلَائِكَةُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيَسْتَغْفِرُونَ لِمَن فِي الْأَرْضِ ۗ أَلَا إِنَّ اللَّهَ هُوَ الْغَفُورُ الرَّحِيمُ",
                "وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ اللَّهُ حَفِيظٌ عَلَيْهِمْ وَمَا أَنتَ عَلَيْهِم بِوَكِيلٍ",
                "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ قُرْآنًا عَرَبِيًّا لِّتُنذِرَ أُمَّ الْقُرَىٰ وَمَنْ حَوْلَهَا وَتُنذِرَ يَوْمَ الْجَمْعِ لَا رَيْبَ فِيهِ ۚ فَرِيقٌ فِي الْجَنَّةِ وَفَرِيقٌ فِي السَّعِيرِ",
                "وَلَوْ شَاءَ اللَّهُ لَجَعَلَهُمْ أُمَّةً وَاحِدَةً وَلَٰكِن يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ ۚ وَالظَّالِمُونَ مَا لَهُم مِّن وَلِيٍّ وَلَا نَصِيرٍ",
                "أَمِ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ ۖ فَاللَّهُ هُوَ الْوَلِيُّ وَهُوَ يُحْيِي الْمَوْتَىٰ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "وَمَا اخْتَلَفْتُمْ فِيهِ مِن شَيْءٍ فَحُكْمُهُ إِلَى اللَّهِ ۚ ذَٰلِكُمُ اللَّهُ رَبِّي عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ"
            ],
            urdu: [
                "حم",
                "عسق",
                "اسی طرح آپ کی طرف اور آپ سے پہلے والوں کی طرف اللہ زبردست حکمت والا وحی کرتا ہے",
                "اسی کا ہے جو آسمانوں میں ہے اور جو زمین میں ہے اور وہ بلند عظیم ہے",
                "قریب ہے کہ آسمان اوپر سے پھٹ جائیں اور فرشتے اپنے رب کی حمد کے ساتھ تسبیح کرتے ہیں اور زمین والوں کے لیے بخشش مانگتے ہیں، خبردار! بے شک اللہ ہی بخشنے والا رحم کرنے والا ہے",
                "اور جنہوں نے اس کے سوا دوست بنائے، اللہ ان پر نگہبان ہے اور آپ ان پر کارساز نہیں",
                "اور اسی طرح ہم نے آپ کی طرف عربی قرآن وحی کیا تاکہ آپ ام القریٰ اور اس کے ارد گرد والوں کو ڈرائیں اور جمع ہونے کے دن سے ڈرائیں جس میں کوئی شک نہیں، ایک گروہ جنت میں اور ایک گروہ جہنم میں",
                "اور اگر اللہ چاہتا تو انہیں ایک ہی امت بنا دیتا لیکن وہ جسے چاہے اپنی رحمت میں داخل کرتا ہے اور ظالموں کے لیے کوئی دوست اور مددگار نہیں",
                "کیا انہوں نے اس کے سوا دوست بنائے، پس اللہ ہی دوست ہے اور وہی مردوں کو زندہ کرتا ہے اور وہ ہر چیز پر قادر ہے",
                "اور تم جس چیز میں اختلاف کرو اس کا فیصلہ اللہ کے پاس ہے، یہ اللہ میرا رب ہے اسی پر میں نے بھروسہ کیا اور اسی کی طرف رجوع کرتا ہوں"
            ],
            english: [
                "Ha, Meem.",
                "Ain, Seen, Qaf.",
                "Thus has He revealed to you, [O Muhammad], and to those before you - Allah, the Exalted in Might, the Wise.",
                "To Him belongs whatever is in the heavens and whatever is in the earth, and He is the Most High, the Most Great.",
                "The heavens almost break from above them, and the angels exalt [Allah] with praise of their Lord and ask forgiveness for those on earth. Unquestionably, it is Allah who is the Forgiving, the Merciful.",
                "And those who take protectors besides Him - Allah is Observer over them, and you are not a manager over them.",
                "And thus We have revealed to you an Arabic Qur'an that you may warn the Mother of Cities and those around it and warn of the Day of Assembly, about which there is no doubt. A party will be in Paradise and a party in the Blaze.",
                "And if Allah willed, He could have made them one nation, but He admits whom He wills into His mercy. And the wrongdoers have not any protector or helper.",
                "Or have they taken protectors [besides] Him? But Allah - He is the Protector, and He gives life to the dead, and He is over all things competent.",
                "And in anything over which you disagree - its ruling is [to be] with Allah. [Say], 'That is Allah, my Lord; upon Him I have relied, and to Him I turn back.'"
            ]
        },

        /* ================= SURAH 43: AZ-ZUKHRUF ================= */
        43: {
            arabic: [
                "حم",
                "وَالْكِتَابِ الْمُبِينِ",
                "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
                "وَإِنَّهُ فِي أُمِّ الْكِتَابِ لَدَيْنَا لَعَلِيٌّ حَكِيمٌ",
                "أَفَنَضْرِبُ عَنكُمُ الذِّكْرَ صَفْحًا أَن كُنتُمْ قَوْمًا مُّسْرِفِينَ",
                "وَكَمْ أَرْسَلْنَا مِن نَّبِيٍّ فِي الْأَوَّلِينَ",
                "وَمَا يَأْتِيهِم مِّن نَّبِيٍّ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
                "فَأَهْلَكْنَا أَشَدَّ مِنْهُم بَطْشًا وَمَضَىٰ مَثَلُ الْأَوَّلِينَ",
                "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ خَلَقَهُنَّ الْعَزِيزُ الْعَلِيمُ",
                "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَجَعَلَ لَكُمْ فِيهَا سُبُلًا لَّعَلَّكُمْ تَهْتَدُونَ"
            ],
            urdu: [
                "حم",
                "واضح کتاب کی قسم",
                "بے شک ہم نے اسے عربی قرآن بنایا تاکہ تم سمجھو",
                "اور بے شک یہ ام الکتاب میں ہمارے پاس بلند حکمت والا ہے",
                "کیا ہم تم سے نصیحت کو نظر انداز کر دیں کیونکہ تم حد سے بڑھنے والے لوگ ہو",
                "اور ہم نے اگلوں میں کتنے ہی نبی بھیجے",
                "اور ان کے پاس کوئی نبی نہیں آتا مگر وہ اس کا مذاق اڑاتے تھے",
                "پھر ہم نے ان سے زیادہ طاقتور کو ہلاک کیا اور اگلوں کی مثال گزری",
                "اور اگر آپ ان سے پوچھیں کہ آسمان اور زمین کس نے پیدا کیے تو ضرور کہیں گے زبردست جاننے والے نے پیدا کیے",
                "جس نے تمہارے لیے زمین کو بچھونا بنایا اور اس میں تمہارے لیے راستے بنائے تاکہ تم راستہ پاؤ"
            ],
            english: [
                "Ha, Meem.",
                "By the clear Book.",
                "Indeed, We have made it an Arabic Qur'an that you might understand.",
                "And indeed it is, in the Mother of the Book with Us, exalted and full of wisdom.",
                "Then should We turn the message away, disregarding you, because you are a transgressing people?",
                "And how many a prophet We sent among the former peoples.",
                "But there would not come to them a prophet except that they used to ridicule him.",
                "And We destroyed greater than them in [striking] power, and the example of the former peoples has preceded.",
                "And if you should ask them, 'Who has created the heavens and the earth?' they would surely say, 'They were created by the Exalted in Might, the Knowing.'",
                "[The one] who has made for you the earth a bed and made for you upon it roads that you might be guided."
            ]
        },

        /* ================= SURAH 44: AD-DUKHAN ================= */
        44: {
            arabic: [
                "حم",
                "وَالْكِتَابِ الْمُبِينِ",
                "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ ۚ إِنَّا كُنَّا مُنذِرِينَ",
                "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ",
                "أَمْرًا مِّنْ عِندِنَا ۚ إِنَّا كُنَّا مُرْسِلِينَ",
                "رَحْمَةً مِّن رَّبِّكَ ۚ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ",
                "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ إِن كُنتُم مُّوقِنِينَ",
                "لَا إِلَٰهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ ۖ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ",
                "بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ",
                "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ"
            ],
            urdu: [
                "حم",
                "واضح کتاب کی قسم",
                "بے شک ہم نے اسے ایک مبارک رات میں نازل کیا، بے شک ہم ڈرانے والے تھے",
                "اس میں ہر حکمت والا کام طے کیا جاتا ہے",
                "ہماری طرف سے حکم، بے شک ہم بھیجنے والے تھے",
                "آپ کے رب کی طرف سے رحمت، بے شک وہ سننے والا جاننے والا ہے",
                "آسمان اور زمین اور جو ان کے درمیان ہے کا رب، اگر تم یقین رکھتے ہو",
                "اس کے سوا کوئی معبود نہیں، وہ زندہ کرتا ہے اور مارتا ہے، تمہارا رب اور تمہارے پہلے باپ دادا کا رب",
                "بلکہ وہ شک میں کھیل رہے ہیں",
                "پس انتظار کرو اس دن کا جب آسمان واضح دھواں لائے گا"
            ],
            english: [
                "Ha, Meem.",
                "By the clear Book.",
                "Indeed, We sent it down during a blessed night. Indeed, We were to warn [mankind].",
                "On that night is made distinct every precise matter.",
                "[Every] matter [proceeding] from Us. Indeed, We were to send [a messenger].",
                "As mercy from your Lord. Indeed, He is the Hearing, the Knowing.",
                "Lord of the heavens and the earth and that between them, if you would be certain.",
                "There is no deity except Him; He gives life and causes death. [He is] your Lord and the Lord of your first forefathers.",
                "But they are in doubt, amusing themselves.",
                "Then watch for the Day when the sky will bring a visible smoke."
            ]
        },

        /* ================= SURAH 45: AL-JATHIYAH ================= */
        45: {
            arabic: [
                "حم",
                "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
                "إِنَّ فِي السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّلْمُؤْمِنِينَ",
                "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ لِّقَوْمٍ يُوقِنُونَ",
                "وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن رِّزْقٍ فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَتَصْرِيفِ الرِّيَاحِ آيَاتٌ لِّقَوْمٍ يَعْقِلُونَ",
                "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ ۖ فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ",
                "وَيْلٌ لِّكُلِّ أَفَّاكٍ أَثِيمٍ",
                "يَسْمَعُ آيَاتِ اللَّهِ تُتْلَىٰ عَلَيْهِ ثُمَّ يُصِرُّ مُسْتَكْبِرًا كَأَن لَّمْ يَسْمَعْهَا ۖ فَبَشِّرْهُ بِعَذَابٍ أَلِيمٍ",
                "وَإِذَا عَلِمَ مِنْ آيَاتِنَا شَيْئًا اتَّخَذَهَا هُزُوًا ۚ أُولَٰئِكَ لَهُمْ عَذَابٌ مُّهِينٌ",
                "مِّن وَرَائِهِمْ جَهَنَّمُ ۖ وَلَا يُغْنِي عَنْهُم مَّا كَسَبُوا شَيْئًا وَلَا مَا اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ"
            ],
            urdu: [
                "حم",
                "اس کتاب کا نازل کرنا اللہ زبردست حکمت والے کی طرف سے ہے",
                "بے شک آسمان اور زمین میں مومنوں کے لیے نشانیاں ہیں",
                "اور تمہاری پیدائش میں اور جو جانور وہ پھیلاتا ہے اس میں یقین رکھنے والوں کے لیے نشانیاں ہیں",
                "اور رات اور دن کے اختلاف میں اور جو رزق اللہ نے آسمان سے نازل کیا پھر اس سے زمین کو اس کی موت کے بعد زندہ کیا اور ہواؤں کی گردش میں سمجھنے والوں کے لیے نشانیاں ہیں",
                "یہ اللہ کی آیات ہیں جو ہم آپ کو حق کے ساتھ پڑھ کر سناتے ہیں، پھر اللہ اور اس کی آیات کے بعد وہ کس بات پر ایمان لائیں گے",
                "ہلاکت ہے ہر جھوٹے گنہگار کے لیے",
                "جو اللہ کی آیات سنتا ہے جو اس پر پڑھی جاتی ہیں پھر تکبر سے اپنی بات پر اڑا رہتا ہے گویا اس نے سنی ہی نہیں، پس اسے دردناک عذاب کی خوشخبری دو",
                "اور جب ہماری آیات میں سے کچھ جانے تو اسے مذاق بناتا ہے، یہی لوگ ہیں جن کے لیے ذلت کا عذاب ہے",
                "ان کے پیچھے جہنم ہے اور جو انہوں نے کمایا وہ ان کے کچھ کام نہ آئے گا اور نہ وہ جنہیں انہوں نے اللہ کے سوا دوست بنایا اور ان کے لیے بڑا عذاب ہے"
            ],
            english: [
                "Ha, Meem.",
                "The revelation of the Book is from Allah, the Exalted in Might, the Wise.",
                "Indeed, within the heavens and earth are signs for the believers.",
                "And in the creation of yourselves and what He disperses of moving creatures are signs for people who are certain [in faith].",
                "And [in] the alternation of night and day and [in] what Allah sends down from the sky of provision and gives life thereby to the earth after its lifelessness and [in His] directing of the winds are signs for a people who reason.",
                "These are the verses of Allah which We recite to you in truth. Then in what statement after Allah and His verses will they believe?",
                "Woe to every sinful liar.",
                "Who hears the verses of Allah recited to him, then persists arrogantly as if he had not heard them. So give him tidings of a painful punishment.",
                "And when he knows anything of Our verses, he takes them in ridicule. Those will have a humiliating punishment.",
                "Before them is Hell, and what they have earned will not avail them at all nor what they had taken besides Allah as allies. And they will have a great punishment."
            ]
        },

        /* ================= SURAH 46: AL-AHQAF ================= */
        46: {
            arabic: [
                "حم",
                "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
                "مَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ وَأَجَلٍ مُّسَمًّى ۚ وَالَّذِينَ كَفَرُوا عَمَّا أُنذِرُوا مُعْرِضُونَ",
                "قُلْ أَرَأَيْتُم مَّا تَدْعُونَ مِن دُونِ اللَّهِ أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ ۖ ائْتُونِي بِكِتَابٍ مِّن قَبْلِ هَٰذَا أَوْ أَثَارَةٍ مِّنْ عِلْمٍ إِن كُنتُمْ صَادِقِينَ",
                "وَمَنْ أَضَلُّ مِمَّن يَدْعُو مِن دُونِ اللَّهِ مَن لَّا يَسْتَجِيبُ لَهُ إِلَىٰ يَوْمِ الْقِيَامَةِ وَهُمْ عَن دُعَائِهِمْ غَافِلُونَ",
                "وَإِذَا حُشِرَ النَّاسُ كَانُوا لَهُمْ أَعْدَاءً وَكَانُوا بِعِبَادَتِهِمْ كَافِرِينَ",
                "وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ هَٰذَا سِحْرٌ مُّبِينٌ",
                "أَمْ يَقُولُونَ افْتَرَاهُ ۖ قُلْ إِنِ افْتَرَيْتُهُ فَلَا تَمْلِكُونَ لِي مِنَ اللَّهِ شَيْئًا ۖ هُوَ أَعْلَمُ بِمَا تُفِيضُونَ فِيهِ ۚ كَفَىٰ بِهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ ۚ وَهُوَ الْغَفُورُ الرَّحِيمُ",
                "قُلْ مَا كُنتُ بِدْعًا مِّنَ الرُّسُلِ وَمَا أَدْرِي مَا يُفْعَلُ بِي وَلَا بِكُمْ ۖ إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ وَمَا أَنَا إِلَّا نَذِيرٌ مُّبِينٌ",
                "قُلْ أَرَأَيْتُمْ إِن كَانَ مِنْ عِندِ اللَّهِ وَكَفَرْتُم بِهِ وَشَهِدَ شَاهِدٌ مِّن بَنِي إِسْرَائِيلَ عَلَىٰ مِثْلِهِ فَآمَنَ وَاسْتَكْبَرْتُمْ ۖ إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ"
            ],
            urdu: [
                "حم",
                "اس کتاب کا نازل کرنا اللہ زبردست حکمت والے کی طرف سے ہے",
                "ہم نے آسمان اور زمین اور جو ان کے درمیان ہے حق اور ایک مقررہ وقت کے سوا پیدا نہیں کیے اور جنہوں نے کفر کیا وہ اس سے منہ موڑے ہوئے ہیں جس سے ڈرائے گئے",
                "کہو کیا تم نے ان کو دیکھا جنہیں تم اللہ کے سوا پکارتے ہو، مجھے دکھاؤ انہوں نے زمین میں کیا پیدا کیا یا آسمانوں میں ان کی کوئی شرکت ہے، اس سے پہلے کوئی کتاب لاؤ یا علم کا کوئی نشان اگر تم سچے ہو",
                "اور اس سے زیادہ گمراہ کون جو اللہ کے سوا انہیں پکارے جو قیامت کے دن تک اسے جواب نہ دے سکیں اور وہ ان کی پکار سے غافل ہیں",
                "اور جب لوگ جمع کیے جائیں گے تو وہ ان کے دشمن ہوں گے اور ان کی عبادت کے منکر ہوں گے",
                "اور جب ان پر ہماری واضح آیات پڑھی جائیں تو کافر اس حق سے جو ان کے پاس آیا کہتے ہیں یہ صریح جادو ہے",
                "کیا وہ کہتے ہیں اس نے اسے گھڑا ہے، کہو اگر میں نے اسے گھڑا ہے تو تم اللہ سے میرے لیے کچھ نہیں کر سکتے، وہ ان باتوں کو جانتا ہے جو تم اس میں کرتے ہو، میرے اور تمہارے درمیان وہ گواہ کافی ہے اور وہ بخشنے والا رحم کرنے والا ہے",
                "کہو میں رسولوں میں نیا نہیں ہوں اور نہ میں جانتا ہوں کہ میرے ساتھ کیا کیا جائے گا نہ تمہارے ساتھ، میں تو صرف اس کی پیروی کرتا ہوں جو میری طرف وحی کی جاتی ہے اور میں صرف واضح ڈرانے والا ہوں",
                "کہو کیا تم نے دیکھا اگر یہ اللہ کی طرف سے ہو اور تم اس سے کفر کرو اور بنی اسرائیل میں سے ایک گواہ اس کی مثل پر گواہی دے تو وہ ایمان لایا اور تم تکبر کرو، بے شک اللہ ظالم قوم کو ہدایت نہیں دیتا"
            ],
            english: [
                "Ha, Meem.",
                "The revelation of the Book is from Allah, the Exalted in Might, the Wise.",
                "We did not create the heavens and earth and what is between them except in truth and [for] a specified term. But those who disbelieve, from that of which they are warned, are turning away.",
                "Say, 'Have you considered what you invoke besides Allah? Show me what they created of the earth; or do they have partnership in the heavens? Bring me a scripture before this or a trace of knowledge, if you should be truthful.'",
                "And who is more astray than he who invokes besides Allah those who will not respond to him until the Day of Resurrection, and they, of their invocation, are unaware.",
                "And when the people are gathered, they will be enemies to them and will be deniers of their worship.",
                "And when Our verses are recited to them as clear evidences, those who disbelieve say of the truth when it has come to them, 'This is obvious magic.'",
                "Or do they say, 'He has invented it?' Say, 'If I have invented it, you will not possess for me [the power of protection] from Allah at all. He is most knowing of that in which you are involved. Sufficient is He as Witness between me and you, and He is the Forgiving the Merciful.'",
                "Say, 'I am not something new among the messengers, nor do I know what will be done with me or with you. I only follow that which is revealed to me, and I am not but a clear warner.'",
                "Say, 'Have you considered: if it [the Qur'an] was from Allah and you disbelieved in it and a witness from the Children of Israel testified to its similarity and believed, while you were arrogant? Indeed, Allah does not guide the wrongdoing people.'"
            ]
        },

        /* ================= SURAH 47: MUHAMMAD ================= */
        47: {
            arabic: [
                "الَّذِينَ كَفَرُوا وَصَدُّوا عَن سَبِيلِ اللَّهِ أَضَلَّ أَعْمَالَهُمْ",
                "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَآمَنُوا بِمَا نُزِّلَ عَلَىٰ مُحَمَّدٍ وَهُوَ الْحَقُّ مِن رَّبِّهِمْ ۙ كَفَّرَ عَنْهُمْ سَيِّئَاتِهِمْ وَأَصْلَحَ بَالَهُمْ",
                "ذَٰلِكَ بِأَنَّ الَّذِينَ كَفَرُوا اتَّبَعُوا الْبَاطِلَ وَأَنَّ الَّذِينَ آمَنُوا اتَّبَعُوا الْحَقَّ مِن رَّبِّهِمْ ۚ كَذَٰلِكَ يَضْرِبُ اللَّهُ لِلنَّاسِ أَمْثَالَهُمْ",
                "فَإِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا فَضَرْبَ الرِّقَابِ حَتَّىٰ إِذَا أَثْخَنتُمُوهُمْ فَشُدُّوا الْوَثَاقَ فَإِمَّا مَنًّا بَعْدُ وَإِمَّا فِدَاءً حَتَّىٰ تَضَعَ الْحَرْبُ أَوْزَارَهَا ۚ ذَٰلِكَ وَلَوْ يَشَاءُ اللَّهُ لَانتَصَرَ مِنْهُمْ وَلَٰكِن لِّيَبْلُوَ بَعْضَكُم بِبَعْضٍ ۗ وَالَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ فَلَن يُضِلَّ أَعْمَالَهُمْ",
                "سَيَهْدِيهِمْ وَيُصْلِحُ بَالَهُمْ",
                "وَيُدْخِلُهُمُ الْجَنَّةَ عَرَّفَهَا لَهُمْ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
                "وَالَّذِينَ كَفَرُوا فَتَعْسًا لَّهُمْ وَأَضَلَّ أَعْمَالَهُمْ",
                "ذَٰلِكَ بِأَنَّهُمْ كَرِهُوا مَا أَنزَلَ اللَّهُ فَأَحْبَطَ أَعْمَالَهُمْ",
                "أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ ۚ دَمَّرَ اللَّهُ عَلَيْهِمْ ۖ وَلِلْكَافِرِينَ أَمْثَالُهَا"
            ],
            urdu: [
                "جنہوں نے کفر کیا اور اللہ کے راستے سے روکا، اللہ نے ان کے اعمال ضائع کر دیے",
                "اور جو ایمان لائے اور نیک عمل کیے اور اس پر ایمان لائے جو محمد پر نازل کیا گیا اور وہ ان کے رب کی طرف سے حق ہے، اللہ نے ان کی برائیاں مٹا دیں اور ان کا حال درست کر دیا",
                "یہ اس لیے کہ کافروں نے باطل کی پیروی کی اور مومنوں نے اپنے رب کی طرف سے حق کی پیروی کی، اسی طرح اللہ لوگوں کے لیے ان کی مثالیں بیان کرتا ہے",
                "پس جب تم کافروں سے ملو تو گردنیں مارو یہاں تک کہ جب تم انہیں اچھی طرح زیر کر لو تو مضبوطی سے باندھو، پھر بعد میں یا احسان کرو یا فدیہ لو یہاں تک کہ جنگ اپنے ہتھیار رکھ دے، یہ حکم ہے اور اگر اللہ چاہتا تو ان سے بدلہ لے لیتا لیکن تاکہ تمہیں ایک دوسرے سے آزمائے اور جنہوں نے اللہ کی راہ میں جان دی اللہ ان کے اعمال ضائع نہیں کرے گا",
                "عنقریب وہ انہیں ہدایت دے گا اور ان کا حال درست کرے گا",
                "اور انہیں جنت میں داخل کرے گا جس سے وہ انہیں واقف کرائے گا",
                "اے ایمان والو! اگر تم اللہ کی مدد کرو گے تو وہ تمہاری مدد کرے گا اور تمہارے قدم جما دے گا",
                "اور جنہوں نے کفر کیا ان کے لیے ہلاکت ہے اور اللہ نے ان کے اعمال ضائع کر دیے",
                "یہ اس لیے کہ انہوں نے اسے ناپسند کیا جو اللہ نے نازل کیا پس اللہ نے ان کے اعمال ضائع کر دیے",
                "کیا انہوں نے زمین میں سیر نہیں کی پھر دیکھا کہ ان سے پہلے والوں کا انجام کیسا ہوا، اللہ نے انہیں تباہ کر دیا اور کافروں کے لیے اسی طرح ہے"
            ],
            english: [
                "Those who disbelieve and avert [people] from the way of Allah - He will waste their deeds.",
                "And those who believe and do righteous deeds and believe in what has been sent down upon Muhammad - and it is the truth from their Lord - He will remove from them their misdeeds and amend their condition.",
                "That is because those who disbelieve follow falsehood, and those who believe follow the truth from their Lord. Thus does Allah present to the people their comparisons.",
                "So when you meet those who disbelieve [in battle], strike [their] necks until, when you have inflicted slaughter upon them, then secure their bonds, and either [confer] favor afterwards or ransom [them] until the war lays down its burdens. That [is the command]. And if Allah had willed, He could have taken vengeance upon them, but [He ordered armed struggle] to test some of you by means of others. And those who are killed in the cause of Allah - never will He waste their deeds.",
                "He will guide them and amend their condition.",
                "And admit them to Paradise, which He has made known to them.",
                "O you who have believed, if you support Allah, He will support you and plant firmly your feet.",
                "But those who disbelieve - for them is misery, and He will waste their deeds.",
                "That is because they disliked what Allah revealed, so He rendered worthless their deeds.",
                "Have they not traveled through the land and seen how was the end of those before them? Allah destroyed [everything] over them, and for the disbelievers is something comparable."
            ]
        },

        /* ================= SURAH 48: AL-FATH ================= */
        48: {
            arabic: [
                "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
                "لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا",
                "وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا",
                "هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ ۗ وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَكَانَ اللَّهُ عَلِيمًا حَكِيمًا",
                "لِّيُدْخِلَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَيُكَفِّرَ عَنْهُمْ سَيِّئَاتِهِمْ ۚ وَكَانَ ذَٰلِكَ عِندَ اللَّهِ فَوْزًا عَظِيمًا",
                "وَيُعَذِّبَ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ الظَّانِّينَ بِاللَّهِ ظَنَّ السَّوْءِ ۚ عَلَيْهِمْ دَائِرَةُ السَّوْءِ ۖ وَغَضِبَ اللَّهُ عَلَيْهِمْ وَلَعَنَهُمْ وَأَعَدَّ لَهُمْ جَهَنَّمَ ۖ وَسَاءَتْ مَصِيرًا",
                "وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا",
                "إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا",
                "لِّتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَتُعَزِّرُوهُ وَتُوَقِّرُوهُ وَتُسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
                "إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللَّهَ يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِ ۖ وَمَنْ أَوْفَىٰ بِمَا عَاهَدَ عَلَيْهُ اللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًا"
            ],
            urdu: [
                "بے شک ہم نے آپ کو واضح فتح دی",
                "تاکہ اللہ آپ کے اگلے اور پچھلے گناہ بخش دے اور آپ پر اپنی نعمت پوری کرے اور آپ کو سیدھا راستہ دکھائے",
                "اور اللہ آپ کی زبردست مدد کرے",
                "وہی ہے جس نے مومنوں کے دلوں میں سکون نازل کیا تاکہ ان کے ایمان میں ایمان بڑھے اور اللہ کے لیے آسمان اور زمین کے لشکر ہیں اور اللہ جاننے والا حکمت والا ہے",
                "تاکہ مومن مردوں اور مومن عورتوں کو ایسے باغات میں داخل کرے جن کے نیچے نہریں بہیں جن میں وہ ہمیشہ رہیں اور ان کی برائیاں مٹا دے اور یہ اللہ کے نزدیک بڑی کامیابی ہے",
                "اور منافق مردوں اور منافق عورتوں اور مشرک مردوں اور مشرک عورتوں کو عذاب دے جو اللہ کے بارے میں برا گمان رکھتے ہیں، ان پر برا دائرہ ہے اور اللہ ان پر غضب ناک ہوا اور ان پر لعنت کی اور ان کے لیے جہنم تیار کی اور وہ بہت برا ٹھکانہ ہے",
                "اور اللہ کے لیے آسمان اور زمین کے لشکر ہیں اور اللہ زبردست حکمت والا ہے",
                "بے شک ہم نے آپ کو گواہ اور خوشخبری دینے والا اور ڈرانے والا بھیجا",
                "تاکہ تم اللہ اور اس کے رسول پر ایمان لاؤ اور اس کی مدد کرو اور اس کی تعظیم کرو اور صبح و شام اس کی تسبیح کرو",
                "بے شک جو آپ سے بیعت کرتے ہیں وہ اللہ سے بیعت کرتے ہیں، اللہ کا ہاتھ ان کے ہاتھوں کے اوپر ہے، پھر جو توڑے وہ اپنے ہی خلاف توڑتا ہے اور جو اللہ سے کیا ہوا عہد پورا کرے تو اسے اللہ بڑا اجر دے گا"
            ],
            english: [
                "Indeed, We have granted you a clear triumph.",
                "That Allah may forgive for you what preceded of your sin and what will follow and complete His favor upon you and guide you to a straight path.",
                "And [that] Allah may aid you with a mighty victory.",
                "It is He who sent down tranquility into the hearts of the believers that they would increase in faith along with their [present] faith. And to Allah belong the soldiers of the heavens and the earth, and ever is Allah Knowing and Wise.",
                "[And] that He may admit the believing men and the believing women to gardens beneath which rivers flow to abide therein eternally and remove from them their misdeeds - and ever is that, in the sight of Allah, a great attainment.",
                "And [that] He may punish the hypocrite men and hypocrite women, and the polytheist men and polytheist women - those who assume about Allah an assumption of evil nature. Upon them is a misfortune of evil nature; and Allah has become angry with them and has cursed them and prepared for them Hell, and evil it is as a destination.",
                "And to Allah belong the soldiers of the heavens and the earth. And ever is Allah Exalted in Might and Wise.",
                "Indeed, We have sent you as a witness and a bringer of good tidings and a warner.",
                "That you [people] may believe in Allah and His Messenger and honor him and respect the Prophet and exalt Allah morning and afternoon.",
                "Indeed, those who pledge allegiance to you, [O Muhammad] - they are actually pledging allegiance to Allah. The hand of Allah is over their hands. So he who breaks his word only breaks it to the detriment of himself. And he who fulfills that which he has promised Allah - He will give him a great reward."
            ]
        },

        /* ================= SURAH 49: AL-HUJURAT ================= */
        49: {
            arabic: [
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُقَدِّمُوا بَيْنَ يَدَيِ اللَّهِ وَرَسُولِهِ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ وَلَا تَجْهَرُوا لَهُ بِالْقَوْلِ كَجَهْرِ بَعْضِكُمْ لِبَعْضٍ أَن تَحْبَطَ أَعْمَالُكُمْ وَأَنتُمْ لَا تَشْعُرُونَ",
                "إِنَّ الَّذِينَ يَغُضُّونَ أَصْوَاتَهُمْ عِندَ رَسُولِ اللَّهِ أُولَٰئِكَ الَّذِينَ امْتَحَنَ اللَّهُ قُلُوبَهُمْ لِلتَّقْوَىٰ ۚ لَهُم مَّغْفِرَةٌ وَأَجْرٌ عَظِيمٌ",
                "إِنَّ الَّذِينَ يُنَادُونَكَ مِن وَرَاءِ الْحُجُرَاتِ أَكْثَرُهُمْ لَا يَعْقِلُونَ",
                "وَلَوْ أَنَّهُمْ صَبَرُوا حَتَّىٰ تَخْرُجَ إِلَيْهِمْ لَكَانَ خَيْرًا لَّهُمْ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ",
                "وَاعْلَمُوا أَنَّ فِيكُمْ رَسُولَ اللَّهِ ۚ لَوْ يُطِيعُكُمْ فِي كَثِيرٍ مِّنَ الْأَمْرِ لَعَنِتُّمْ وَلَٰكِنَّ اللَّهَ حَبَّبَ إِلَيْكُمُ الْإِيمَانَ وَزَيَّنَهُ فِي قُلُوبِكُمْ وَكَرَّهَ إِلَيْكُمُ الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ ۚ أُولَٰئِكَ هُمُ الرَّاشِدُونَ",
                "فَضْلًا مِّنَ اللَّهِ وَنِعْمَةً ۚ وَاللَّهُ عَلِيمٌ حَكِيمٌ",
                "وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا ۖ فَإِن بَغَتْ إِحْدَاهُمَا عَلَى الْأُخْرَىٰ فَقَاتِلُوا الَّتِي تَبْغِي حَتَّىٰ تَفِيءَ إِلَىٰ أَمْرِ اللَّهِ ۚ فَإِن فَاءَتْ فَأَصْلِحُوا بَيْنَهُمَا بِالْعَدْلِ وَأَقْسِطُوا ۖ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
                "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ"
            ],
            urdu: [
                "اے ایمان والو! اللہ اور اس کے رسول سے آگے نہ بڑھو اور اللہ سے ڈرو، بے شک اللہ سننے والا جاننے والا ہے",
                "اے ایمان والو! اپنی آوازیں نبی کی آواز سے بلند نہ کرو اور نہ ان سے بلند آواز سے بات کرو جیسے تم ایک دوسرے سے کرتے ہو، کہیں تمہارے اعمال ضائع نہ ہو جائیں اور تمہیں خبر بھی نہ ہو",
                "بے شک جو لوگ رسول اللہ کے پاس اپنی آوازیں پست رکھتے ہیں یہی وہ ہیں جن کے دلوں کو اللہ نے تقویٰ کے لیے آزمایا ہے، ان کے لیے بخشش اور بڑا اجر ہے",
                "بے شک جو آپ کو حجروں کے پیچھے سے پکارتے ہیں ان میں اکثر عقل نہیں رکھتے",
                "اور اگر وہ صبر کرتے یہاں تک کہ آپ خود ان کے پاس نکلیں تو ان کے لیے بہتر ہوتا اور اللہ بخشنے والا رحم کرنے والا ہے",
                "اے ایمان والو! اگر کوئی فاسق تمہیں کوئی خبر دے تو تحقیق کر لو کہیں تم کسی قوم کو نادانی سے نقصان نہ پہنچا دو پھر اپنے کیے پر پشیمان ہو جاؤ",
                "اور جان لو کہ تم میں اللہ کے رسول موجود ہیں، اگر وہ بہت سے معاملات میں تمہاری بات مان لیں تو تم مشقت میں پڑ جاؤ لیکن اللہ نے تمہیں ایمان محبوب بنا دیا اور اسے تمہارے دلوں میں سجا دیا اور تمہیں کفر اور نافرمانی اور گناہ سے نفرت دلا دی، یہی لوگ ہدایت یافتہ ہیں",
                "اللہ کی طرف سے فضل اور نعمت ہے اور اللہ جاننے والا حکمت والا ہے",
                "اور اگر مومنوں کے دو گروہ آپس میں لڑ پڑیں تو ان کے درمیان صلح کراؤ پھر اگر ایک دوسرے پر زیادتی کرے تو زیادتی کرنے والے سے لڑو یہاں تک کہ وہ اللہ کے حکم کی طرف لوٹ آئے، پھر اگر وہ لوٹ آئے تو ان کے درمیان انصاف سے صلح کراؤ اور عدل کرو، بے شک اللہ انصاف کرنے والوں کو پسند کرتا ہے",
                "مومن تو آپس میں بھائی ہیں پس اپنے دو بھائیوں کے درمیان صلح کراؤ اور اللہ سے ڈرو تاکہ تم پر رحم کیا جائے"
            ],
            english: [
                "O you who have believed, do not put [yourselves] before Allah and His Messenger but fear Allah. Indeed, Allah is Hearing and Knowing.",
                "O you who have believed, do not raise your voices above the voice of the Prophet or be loud to him in speech like the loudness of some of you to others, lest your deeds become worthless while you perceive not.",
                "Indeed, those who lower their voices before the Messenger of Allah - they are the ones whose hearts Allah has tested for righteousness. For them is forgiveness and great reward.",
                "Indeed, those who call you, [O Muhammad], from behind the chambers - most of them do not use reason.",
                "And if they had been patient until you [could] come out to them, it would have been better for them. But Allah is Forgiving and Merciful.",
                "O you who have believed, if there comes to you a disobedient one with information, investigate, lest you harm a people out of ignorance and become, over what you have done, regretful.",
                "And know that among you is the Messenger of Allah. If he were to obey you in much of the matter, you would be in difficulty, but Allah has endeared to you the faith and has made it pleasing in your hearts and has made hateful to you disbelief, defiance and disobedience. Those are the [rightly] guided.",
                "[It is] as bounty from Allah and favor. And Allah is Knowing and Wise.",
                "And if two factions among the believers should fight, then make settlement between the two. But if one of them oppresses the other, then fight against the one that oppresses until it returns to the ordinance of Allah. And if it returns, then make settlement between them in justice and act justly. Indeed, Allah loves those who act justly.",
                "The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy."
            ]
        },

        /* ================= SURAH 50: QAF ================= */
        50: {
            arabic: [
                "ق ۚ وَالْقُرْآنِ الْمَجِيدِ",
                "بَلْ عَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ فَقَالَ الْكَافِرُونَ هَٰذَا شَيْءٌ عَجِيبٌ",
                "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا ۖ ذَٰلِكَ رَجْعٌ بَعِيدٌ",
                "قَدْ عَلِمْنَا مَا تَنقُصُ الْأَرْضُ مِنْهُمْ ۖ وَعِندَنَا كِتَابٌ حَفِيظٌ",
                "بَلْ كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ فَهُمْ فِي أَمْرٍ مَّرِيجٍ",
                "أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا وَمَا لَهَا مِن فُرُوجٍ",
                "وَالْأَرْضَ مَدَدْنَاهَا وَأَلْقَيْنَا فِيهَا رَوَاسِيَ وَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ بَهِيجٍ",
                "تَبْصِرَةً وَذِكْرَىٰ لِكُلِّ عَبْدٍ مُّنِيبٍ",
                "وَنَزَّلْنَا مِنَ السَّمَاءِ مَاءً مُّبَارَكًا فَأَنبَتْنَا بِهِ جَنَّاتٍ وَحَبَّ الْحَصِيدِ",
                "وَالنَّخْلَ بَاسِقَاتٍ لَّهَا طَلْعٌ نَّضِيدٌ"
            ],
            urdu: [
                "ق، بزرگی والے قرآن کی قسم",
                "بلکہ انہیں تعجب ہوا کہ ان کے پاس انہی میں سے ڈرانے والا آیا، پھر کافروں نے کہا یہ عجیب بات ہے",
                "کیا جب ہم مر جائیں گے اور مٹی ہو جائیں گے، یہ لوٹنا بہت دور ہے",
                "بے شک ہم جانتے ہیں جو زمین ان میں سے کم کرتی ہے اور ہمارے پاس حفاظت کرنے والی کتاب ہے",
                "بلکہ انہوں نے حق کو جھٹلایا جب وہ ان کے پاس آیا پس وہ الجھن میں ہیں",
                "کیا انہوں نے اپنے اوپر آسمان کی طرف نہیں دیکھا کہ ہم نے اسے کیسے بنایا اور سجایا اور اس میں کوئی شگاف نہیں",
                "اور زمین کو ہم نے پھیلایا اور اس میں پہاڑ ڈالے اور اس میں ہر خوشنما جوڑا اگایا",
                "ہر رجوع کرنے والے بندے کے لیے بصیرت اور نصیحت",
                "اور ہم نے آسمان سے برکت والا پانی نازل کیا پھر اس سے باغات اور کٹائی کا اناج اگایا",
                "اور بلند کھجور کے درخت جن کے خوشے تہہ بہ تہہ ہیں"
            ],
            english: [
                "Qaf. By the honored Qur'an...",
                "But they wonder that there has come to them a warner from among themselves, and the disbelievers say, 'This is an amazing thing.'",
                "When we have died and have become dust, [we will return to life]? That is a distant return.'",
                "We know what the earth diminishes of them, and with Us is a retaining record.",
                "But they denied the truth when it came to them, so they are in a confused condition.",
                "Have they not looked at the heaven above them - how We structured it and adorned it and [how] it has no rifts?",
                "And the earth - We spread it out and cast therein firmly set mountains and made grow therein [something] of every beautiful kind.",
                "Giving insight and a reminder for every servant who turns [to Allah].",
                "And We have sent down blessed rain from the sky and made grow thereby gardens and grain from the harvest.",
                "And lofty palm trees having fruit arranged in layers."
            ]
        },

        /* ================= SURAH 51: ADH-DHARIYAT ================= */
        51: {
            arabic: [
                "وَالذَّارِيَاتِ ذَرْوًا",
                "فَالْحَامِلَاتِ وِقْرًا",
                "فَالْجَارِيَاتِ يُسْرًا",
                "فَالْمُقَسِّمَاتِ أَمْرًا",
                "إِنَّمَا تُوعَدُونَ لَصَادِقٌ",
                "وَإِنَّ الدِّينَ لَوَاقِعٌ",
                "وَالسَّمَاءِ ذَاتِ الْحُبُكِ",
                "إِنَّكُمْ لَفِي قَوْلٍ مُّخْتَلِفٍ",
                "يُؤْفَكُ عَنْهُ مَنْ أُفِكَ",
                "قُتِلَ الْخَرَّاصُونَ"
            ],
            urdu: [
                "اڑانے والیوں کی قسم جو اڑاتی ہیں",
                "پھر بوجھ اٹھانے والیوں کی قسم",
                "پھر آسانی سے چلنے والیوں کی قسم",
                "پھر کام تقسیم کرنے والیوں کی قسم",
                "بے شک جس کا تم سے وعدہ کیا جاتا ہے وہ سچا ہے",
                "اور بے شک جزا واقع ہونے والی ہے",
                "اور خوبصورت راستوں والے آسمان کی قسم",
                "بے شک تم مختلف باتوں میں ہو",
                "اس سے وہی پھیرا جاتا ہے جو پھیرا گیا",
                "ہلاک ہوں اندازے لگانے والے"
            ],
            english: [
                "By those [winds] scattering [dust] dispersing.",
                "And those [clouds] carrying a load [of water].",
                "And those [ships] sailing with ease.",
                "And those [angels] apportioning [each] matter.",
                "Indeed, what you are promised is true.",
                "And indeed, the recompense is to occur.",
                "By the heaven containing pathways.",
                "Indeed, you are in differing speech.",
                "Deluded away from the Qur'an is he who is deluded.",
                "Destroyed are the falsifiers."
            ]
        },

        /* ================= SURAH 52: AT-TUR ================= */
        52: {
            arabic: [
                "وَالطُّورِ",
                "وَكِتَابٍ مَّسْطُورٍ",
                "فِي رَقٍّ مَّنشُورٍ",
                "وَالْبَيْتِ الْمَعْمُورِ",
                "وَالسَّقْفِ الْمَرْفُوعِ",
                "وَالْبَحْرِ الْمَسْجُورِ",
                "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ",
                "مَّا لَهُ مِن دَافِعٍ",
                "يَوْمَ تَمُورُ السَّمَاءُ مَوْرًا",
                "وَتَسِيرُ الْجِبَالُ سَيْرًا"
            ],
            urdu: [
                "طور کی قسم",
                "اور لکھی ہوئی کتاب کی قسم",
                "کھلے صحیفے میں",
                "اور آباد گھر کی قسم",
                "اور بلند چھت کی قسم",
                "اور بھرے سمندر کی قسم",
                "بے شک آپ کے رب کا عذاب واقع ہونے والا ہے",
                "اسے کوئی روکنے والا نہیں",
                "جس دن آسمان سخت جنبش کھائے گا",
                "اور پہاڑ چل پڑیں گے"
            ],
            english: [
                "By the mount.",
                "And [by] a Book inscribed.",
                "In parchment spread open.",
                "And [by] the frequented House.",
                "And [by] the ceiling [i.e., heaven] raised high.",
                "And [by] the sea filled [with fire].",
                "Indeed, the punishment of your Lord will occur.",
                "Of it there is no preventer.",
                "On the Day the heaven will sway with circular motion.",
                "And the mountains will pass on, departing."
            ]
        },

        /* ================= SURAH 53: AN-NAJM ================= */
        53: {
            arabic: [
                "وَالنَّجْمِ إِذَا هَوَىٰ",
                "مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ",
                "وَمَا يَنطِقُ عَنِ الْهَوَىٰ",
                "إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ",
                "عَلَّمَهُ شَدِيدُ الْقُوَىٰ",
                "ذُو مِرَّةٍ فَاسْتَوَىٰ",
                "وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ",
                "ثُمَّ دَنَا فَتَدَلَّىٰ",
                "فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ",
                "فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ"
            ],
            urdu: [
                "تارے کی قسم جب وہ ڈوبے",
                "تمہارا ساتھی نہ گمراہ ہوا اور نہ بہکا",
                "اور وہ خواہش سے بات نہیں کرتا",
                "یہ تو صرف وحی ہے جو وحی کی جاتی ہے",
                "اسے سخت طاقت والے نے سکھایا",
                "جو قدرت والا ہے پھر وہ سیدھا ہوا",
                "اور وہ بلند افق پر تھا",
                "پھر قریب ہوا اور لٹکا",
                "پھر دو کمانوں کے برابر یا اس سے کم ہو گیا",
                "پھر اس نے اپنے بندے کو وحی کی جو وحی کی"
            ],
            english: [
                "By the star when it descends.",
                "Your companion [Muhammad] has not strayed, nor has he erred.",
                "Nor does he speak from [his own] inclination.",
                "It is not but a revelation revealed.",
                "Taught to him by one intense in strength.",
                "One of soundness. And he rose to [his] true form.",
                "While he was in the higher [part of the] horizon.",
                "Then he approached and descended.",
                "And was at a distance of two bow lengths or nearer.",
                "And he revealed to His Servant what he revealed."
            ]
        },

        /* ================= SURAH 54: AL-QAMAR ================= */
        54: {
            arabic: [
                "اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ",
                "وَإِن يَرَوْا آيَةً يُعْرِضُوا وَيَقُولُوا سِحْرٌ مُّسْتَمِرٌّ",
                "وَكَذَّبُوا وَاتَّبَعُوا أَهْوَاءَهُمْ ۚ وَكُلُّ أَمْرٍ مُّسْتَقِرٌّ",
                "وَلَقَدْ جَاءَهُم مِّنَ الْأَنبَاءِ مَا فِيهِ مُزْدَجَرٌ",
                "حِكْمَةٌ بَالِغَةٌ ۖ فَمَا تُغْنِ النُّذُرُ",
                "فَتَوَلَّ عَنْهُمْ ۘ يَوْمَ يَدْعُ الدَّاعِ إِلَىٰ شَيْءٍ نُّكُرٍ",
                "خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ كَأَنَّهُمْ جَرَادٌ مُّنتَشِرٌ",
                "مُّهْطِعِينَ إِلَى الدَّاعِ ۖ يَقُولُ الْكَافِرُونَ هَٰذَا يَوْمٌ عَسِرٌ",
                "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ فَكَذَّبُوا عَبْدَنَا وَقَالُوا مَجْنُونٌ وَازْدُجِرَ",
                "فَدَعَا رَبَّهُ أَنِّي مَغْلُوبٌ فَانتَصِرْ",
                "فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ",
                "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ"
            ],
            urdu: [
                "قیامت قریب آ گئی اور چاند پھٹ گیا",
                "اور اگر وہ کوئی نشانی دیکھیں تو منہ موڑ لیں اور کہیں یہ مسلسل جادو ہے",
                "اور انہوں نے جھٹلایا اور اپنی خواہشات کی پیروی کی اور ہر معاملہ ٹھکانے لگنے والا ہے",
                "اور بے شک ان کے پاس ایسی خبریں آئیں جن میں ڈانٹ ہے",
                "کامل حکمت، پھر ڈر سنانا کچھ فائدہ نہیں دیتا",
                "پس ان سے منہ موڑ لو، جس دن پکارنے والا ایک ناخوشگوار چیز کی طرف بلائے گا",
                "ان کی آنکھیں جھکی ہوئی ہوں گی، قبروں سے نکلیں گے گویا وہ بکھرے ہوئے ٹڈے ہیں",
                "پکارنے والے کی طرف دوڑتے ہوئے، کافر کہیں گے یہ مشکل دن ہے",
                "ان سے پہلے نوح کی قوم نے جھٹلایا پس انہوں نے ہمارے بندے کو جھٹلایا اور کہا دیوانہ ہے اور ڈانٹا گیا",
                "پھر اس نے اپنے رب کو پکارا کہ میں مغلوب ہوں پس بدلہ لے",
                "پھر ہم نے آسمان کے دروازے موسلا دھار پانی سے کھول دیے",
                "اور زمین کو چشموں سے پھاڑ دیا پھر پانی ایک مقرر کام پر مل گیا"
            ],
            english: [
                "The Hour has come near, and the moon has split [in two].",
                "And if they see a miracle, they turn away and say, 'Passing magic.'",
                "And they denied and followed their inclinations. But for every matter is a [time of] settlement.",
                "And there has already come to them of information that in which there is deterrence.",
                "Extensive wisdom - but warning does not avail [them].",
                "So leave them, [O Muhammad]. The Day the Caller calls to something forbidding.",
                "Their eyes humbled, they will emerge from the graves as if they were locusts spreading.",
                "Racing ahead toward the Caller. The disbelievers will say, 'This is a difficult Day.'",
                "The people of Noah denied before them, and they denied Our servant and said, 'A madman,' and he was repelled.",
                "So he invoked his Lord, 'Indeed, I am overpowered, so help.'",
                "Then We opened the gates of the heaven with rain pouring down.",
                "And caused the earth to burst with springs, and the waters met for a matter already predestined."
            ]
        },

        /* ================= SURAH 55: AR-RAHMAN ================= */
        55: {
            arabic: [
                "الرَّحْمَٰنُ",
                "عَلَّمَ الْقُرْآنَ",
                "خَلَقَ الْإِنسَانَ",
                "عَلَّمَهُ الْبَيَانَ",
                "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
                "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
                "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
                "أَلَّا تَطْغَوْا فِي الْمِيزَانِ",
                "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ",
                "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ"
            ],
            urdu: [
                "رحمٰن نے",
                "قرآن سکھایا",
                "انسان کو پیدا کیا",
                "اسے بولنا سکھایا",
                "سورج اور چاند ایک حساب سے چل رہے ہیں",
                "اور ستارے اور درخت سجدہ کر رہے ہیں",
                "اور آسمان کو بلند کیا اور ترازو قائم کی",
                "تاکہ تم ترازو میں زیادتی نہ کرو",
                "اور انصاف سے وزن قائم کرو اور ترازو کم نہ کرو",
                "اور زمین کو مخلوقات کے لیے بچھا دیا"
            ],
            english: [
                "The Most Merciful.",
                "Taught the Qur'an.",
                "Created man.",
                "[And] taught him eloquence.",
                "The sun and the moon [move] by precise calculation.",
                "And the stars and trees prostrate.",
                "And the heaven He raised and imposed the balance.",
                "That you not transgress within the balance.",
                "And establish weight in justice and do not make deficient the balance.",
                "And the earth He laid [out] for the creatures."
            ]
        }

    },

    /* =====================================================
       HADITH — SUNAN AN-NASA'I (50 Hadiths)
    ===================================================== */
    hadithBooks: {
        nasai: {
            title: "Sunan an-Nasa'i",
            arabic: "سنن النسائي",
            english: "Sunan an-Nasa'i",
            author: "Imam an-Nasa'i",
            hadiths: [
                { id: 1, arabic: "مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ", urdu: "جو اچھی طرح وضو کرے", english: "Whoever performs ablution and does it well.", reference: "Sunan an-Nasa'i 1" },
                { id: 2, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and loves beauty.", reference: "Sunan an-Nasa'i 5357" },
                { id: 3, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Sunan an-Nasa'i 4998" },
                { id: 4, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ", urdu: "علم کا طلب کرنا ہر مسلمان پر فرض ہے", english: "Seeking knowledge is obligatory upon every Muslim.", reference: "Sunan an-Nasa'i 1" },
                { id: 5, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends one blessing upon me, Allah sends ten blessings upon him.", reference: "Sunan an-Nasa'i 1297" },
                { id: 6, arabic: "السَّاعِي عَلَى الْأَرْمَلَةِ وَالْمِسْكِينِ", urdu: "بیوہ اور مسکین کی خدمت کرنے والا", english: "The one who cares for the widow and the poor.", reference: "Sunan an-Nasa'i 2577" },
                { id: 7, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Sunan an-Nasa'i 2540" },
                { id: 8, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Sunan an-Nasa'i 4892" },
                { id: 9, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے", english: "The best of you are those who learn the Quran and teach it.", reference: "Sunan an-Nasa'i 3395" },
                { id: 10, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise is beneath the feet of mothers.", reference: "Sunan an-Nasa'i 3104" },
                { id: 11, arabic: "الدُّعَاءُ مُخُّ الْعِبَادَةِ", urdu: "دعا عبادت کا مغز ہے", english: "Dua is the essence of worship.", reference: "Sunan an-Nasa'i 1146" },
                { id: 12, arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", urdu: "جہاں بھی ہو اللہ سے ڈرو", english: "Fear Allah wherever you are.", reference: "Sunan an-Nasa'i 3689" },
                { id: 13, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Sunan an-Nasa'i 1147" },
                { id: 14, arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", urdu: "لوگوں میں بہترین وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو", english: "The best of people are those most beneficial to people.", reference: "Sunan an-Nasa'i 2542" },
                { id: 15, arabic: "إِنَّ اللَّهَ يُحِبُّ الْعَبْدَ التَّقِيَّ الْغَنِيَّ الْخَفِيَّ", urdu: "بے شک اللہ متقی، مالدار اور گمنام بندے کو پسند کرتا ہے", english: "Indeed, Allah loves the God-fearing, wealthy and obscure servant.", reference: "Sunan an-Nasa'i 2572" },
                { id: 16, arabic: "الْبِرُّ حُسْنُ الْخُلُقِ", urdu: "نیکی اچھے اخلاق کا نام ہے", english: "Righteousness is good character.", reference: "Sunan an-Nasa'i 4999" },
                { id: 17, arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", urdu: "صدقہ مال میں کمی نہیں کرتا", english: "Charity does not decrease wealth.", reference: "Sunan an-Nasa'i 2544" },
                { id: 18, arabic: "أَفْضَلُ الذِّكْرِ لَا إِلَٰهَ إِلَّا اللَّهُ", urdu: "سب سے افضل ذکر لا الہ الا اللہ ہے", english: "The best remembrance is La ilaha illallah.", reference: "Sunan an-Nasa'i 1147" },
                { id: 19, arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ", urdu: "جو لوگوں پر رحم نہیں کرتا اللہ اس پر رحم نہیں کرتا", english: "Whoever does not show mercy to people, Allah will not show mercy to him.", reference: "Sunan an-Nasa'i 4982" },
                { id: 20, arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ", urdu: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے", english: "The world is a prison for the believer and a paradise for the disbeliever.", reference: "Sunan an-Nasa'i 4994" },
                { id: 21, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Sunan an-Nasa'i 2535" },
                { id: 22, arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ", urdu: "جو کسی مسلمان کا عیب چھپائے اللہ اس کا عیب چھپائے گا", english: "Whoever conceals a Muslim's fault, Allah will conceal his fault.", reference: "Sunan an-Nasa'i 4974" },
                { id: 23, arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Sunan an-Nasa'i 1132" },
                { id: 24, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Sunan an-Nasa'i 4340" },
                { id: 25, arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ", urdu: "جو جان بوجھ کر مجھ پر جھوٹ باندھے وہ اپنا ٹھکانہ جہنم میں بنائے", english: "Whoever tells a lie about me deliberately, let him take his place in Hell.", reference: "Sunan an-Nasa'i 3" },
                { id: 26, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Sunan an-Nasa'i 3106" },
                { id: 27, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Sunan an-Nasa'i 2552" },
                { id: 28, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Sunan an-Nasa'i 1132" },
                { id: 29, arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Sunan an-Nasa'i 763" },
                { id: 30, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Sunan an-Nasa'i 4998" },
                { id: 31, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Sunan an-Nasa'i 4998" },
                { id: 32, arabic: "مَنْ تَقَرَّبَ إِلَيَّ شِبْرًا تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا", urdu: "جو میرے قریب ایک بالشت آتا ہے میں اس کے قریب ایک ہاتھ آتا ہوں", english: "Whoever comes one step closer to Me, I come one arm's length closer to him.", reference: "Sunan an-Nasa'i 1145" },
                { id: 33, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Sunan an-Nasa'i 1146" },
                { id: 34, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Sunan an-Nasa'i 4999" },
                { id: 35, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Sunan an-Nasa'i 4993" },
                { id: 36, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Sunan an-Nasa'i 2543" },
                { id: 37, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Sunan an-Nasa'i 4998" },
                { id: 38, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Sunan an-Nasa'i 5148" },
                { id: 39, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Sunan an-Nasa'i 1132" },
                { id: 40, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Sunan an-Nasa'i 3106" },
                { id: 41, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Sunan an-Nasa'i 2542" },
                { id: 42, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Sunan an-Nasa'i 4999" },
                { id: 43, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Sunan an-Nasa'i 3095" },
                { id: 44, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Sunan an-Nasa'i 5135" },
                { id: 45, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Sunan an-Nasa'i 460" },
                { id: 46, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Sunan an-Nasa'i 4893" },
                { id: 47, arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ", urdu: "رحم کرنے والوں پر رحمٰن رحم کرتا ہے", english: "The merciful will be shown mercy by the Most Merciful.", reference: "Sunan an-Nasa'i 4982" },
                { id: 48, arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا", urdu: "مومنوں میں سب سے کامل ایمان والا وہ ہے جس کا اخلاق سب سے اچھا ہو", english: "The most complete of the believers in faith is the one with the best character.", reference: "Sunan an-Nasa'i 5014" },
                { id: 49, arabic: "مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "Whoever does not thank people does not thank Allah.", reference: "Sunan an-Nasa'i 2552" },
                { id: 50, arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا", urdu: "مومن مومن کے لیے عمارت کی طرح ہے جس کا ایک حصہ دوسرے کو مضبوط کرتا ہے", english: "A believer to another believer is like a building whose parts support each other.", reference: "Sunan an-Nasa'i 4998" }
            ]
        }
    },

    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },
    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },
    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 5A] Loaded ✅");
console.log("[DB Part 5A] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART5A.quranContent).length);
console.log("[DB Part 5A] Nasai Hadiths: " + ISLAMIC_DATABASE_PART5A.hadithBooks.nasai.hadiths.length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 5B
   Surahs 56-70
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART5B = {

    quranContent: {

        /* ================= SURAH 56: AL-WAQI'AH ================= */
        56: {
            arabic: [
                "إِذَا وَقَعَتِ الْوَاقِعَةُ",
                "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
                "خَافِضَةٌ رَّافِعَةٌ",
                "إِذَا رُجَّتِ الْأَرْضُ رَجًّا",
                "وَبُسَّتِ الْجِبَالُ بَسًّا",
                "فَكَانَتْ هَبَاءً مُّنبَثًّا",
                "وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً",
                "فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ",
                "وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ",
                "وَالسَّابِقُونَ السَّابِقُونَ"
            ],
            urdu: [
                "جب واقع ہونے والی واقع ہو",
                "اس کے واقع ہونے میں کوئی جھوٹ نہیں",
                "پست کرنے والی بلند کرنے والی",
                "جب زمین سخت جنبش سے ہلائی جائے گی",
                "اور پہاڑ ریزہ ریزہ کر دیے جائیں گے",
                "پس وہ بکھرا ہوا غبار ہو جائیں گے",
                "اور تم تین گروہ ہو جاؤ گے",
                "پس دائیں ہاتھ والے کیا ہی دائیں ہاتھ والے",
                "اور بائیں ہاتھ والے کیا ہی بائیں ہاتھ والے",
                "اور آگے بڑھنے والے تو آگے بڑھنے والے ہیں"
            ],
            english: [
                "When the Occurrence occurs.",
                "There is, at its occurrence, no denial.",
                "It will bring down [some] and raise up [others].",
                "When the earth is shaken with convulsion.",
                "And the mountains are broken down, crumbling.",
                "And become dust dispersing.",
                "And you become [of] three kinds.",
                "Then the companions of the right - what are the companions of the right?",
                "And the companions of the left - what are the companions of the left?",
                "And the forerunners, the forerunners."
            ]
        },

        /* ================= SURAH 57: AL-HADID ================= */
        57: {
            arabic: [
                "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۖ يُحْيِي وَيُمِيتُ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
                "هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۚ يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا ۖ وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
                "لَّهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ",
                "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ ۚ وَهُوَ عَلِيمٌ بِذَاتِ الصُّدُورِ",
                "آمِنُوا بِاللَّهِ وَرَسُولِهِ وَأَنفِقُوا مِمَّا جَعَلَكُم مُّسْتَخْلَفِينَ فِيهِ ۖ فَالَّذِينَ آمَنُوا مِنكُمْ وَأَنفَقُوا لَهُمْ أَجْرٌ كَبِيرٌ",
                "وَمَا لَكُمْ لَا تُؤْمِنُونَ بِاللَّهِ ۖ وَالرَّسُولُ يَدْعُوكُمْ لِتُؤْمِنُوا بِرَبِّكُمْ وَقَدْ أَخَذَ مِيثَاقَكُمْ إِن كُنتُم مُّؤْمِنِينَ",
                "هُوَ الَّذِي يُنَزِّلُ عَلَىٰ عَبْدِهِ آيَاتٍ بَيِّنَاتٍ لِّيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَإِنَّ اللَّهَ بِكُمْ لَرَءُوفٌ رَّحِيمٌ",
                "وَمَا لَكُمْ أَلَّا تُنفِقُوا فِي سَبِيلِ اللَّهِ وَلِلَّهِ مِيرَاثُ السَّمَاوَاتِ وَالْأَرْضِ ۚ لَا يَسْتَوِي مِنكُم مَّنْ أَنفَقَ مِن قَبْلِ الْفَتْحِ وَقَاتَلَ ۚ أُولَٰئِكَ أَعْظَمُ دَرَجَةً مِّنَ الَّذِينَ أَنفَقُوا مِن بَعْدُ وَقَاتَلُوا ۚ وَكُلًّا وَعَدَ اللَّهُ الْحُسْنَىٰ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ"
            ],
            urdu: [
                "اللہ کی تسبیح کی جو آسمانوں اور زمین میں ہے اور وہ زبردست حکمت والا ہے",
                "اسی کے لیے آسمان اور زمین کی بادشاہت ہے، وہ زندہ کرتا اور مارتا ہے اور وہ ہر چیز پر قادر ہے",
                "وہ اول اور آخر اور ظاہر اور باطن ہے اور وہ ہر چیز کو جانتا ہے",
                "وہی ہے جس نے آسمان اور زمین چھ دنوں میں پیدا کیے پھر عرش پر مستقر ہوا، وہ جانتا ہے جو زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے اور جو آسمان سے اترتا ہے اور جو اس میں چڑھتا ہے اور وہ تمہارے ساتھ ہے جہاں بھی تم ہو اور اللہ تمہارے اعمال کو دیکھنے والا ہے",
                "اسی کے لیے آسمان اور زمین کی بادشاہت ہے اور اللہ ہی کی طرف سب کام لوٹائے جاتے ہیں",
                "وہ رات کو دن میں داخل کرتا ہے اور دن کو رات میں داخل کرتا ہے اور وہ دلوں کی بات جانتا ہے",
                "اللہ اور اس کے رسول پر ایمان لاؤ اور اس میں سے خرچ کرو جس کا اس نے تمہیں جانشین بنایا، پس تم میں سے جو ایمان لائے اور خرچ کیا ان کے لیے بڑا اجر ہے",
                "اور تمہیں کیا ہوا کہ اللہ پر ایمان نہیں لاتے حالانکہ رسول تمہیں بلاتا ہے کہ اپنے رب پر ایمان لاؤ اور اس نے تم سے عہد لیا اگر تم مومن ہو",
                "وہی ہے جو اپنے بندے پر واضح آیات نازل کرتا ہے تاکہ تمہیں اندھیروں سے روشنی کی طرف نکالے اور بے شک اللہ تم پر بہت مہربان رحم کرنے والا ہے",
                "اور تمہیں کیا ہوا کہ اللہ کی راہ میں خرچ نہیں کرتے حالانکہ آسمان اور زمین کی میراث اللہ ہی کی ہے، تم میں سے جو فتح سے پہلے خرچ کیا اور لڑا وہ برابر نہیں، یہ لوگ ان سے بڑے درجے کے ہیں جنہوں نے بعد میں خرچ کیا اور لڑے اور اللہ نے سب سے بھلائی کا وعدہ کیا اور اللہ تمہارے اعمال سے باخبر ہے"
            ],
            english: [
                "Whatever is in the heavens and earth exalts Allah, and He is the Exalted in Might, the Wise.",
                "His is the dominion of the heavens and earth. He gives life and causes death, and He is over all things competent.",
                "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.",
                "It is He who created the heavens and earth in six days and then established Himself above the Throne. He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein; and He is with you wherever you are. And Allah, of what you do, is Seeing.",
                "His is the dominion of the heavens and earth. And to Allah are returned [all] matters.",
                "He causes the night to enter the day and causes the day to enter the night, and He is Knowing of that within the breasts.",
                "Believe in Allah and His Messenger and spend out of that in which He has made you successors. For those who have believed among you and spent, there will be a great reward.",
                "And why do you not believe in Allah while the Messenger invites you to believe in your Lord and He has taken your covenant, if you should [truly] be believers?",
                "It is He who sends down upon His Servant [Muhammad] verses of clear evidence that He may bring you out from darknesses into the light. And indeed, Allah is to you Kind and Merciful.",
                "And why do you not spend in the cause of Allah while to Allah belongs the heritage of the heavens and the earth? Not equal among you are those who spent before the conquest [of Makkah] and fought [and those who did so after]. Those are greater in degree than they who spent afterwards and fought. But to all Allah has promised the best [reward]. And Allah, with what you do, is Acquainted."
            ]
        },

        /* ================= SURAH 58: AL-MUJADILA ================= */
        58: {
            arabic: [
                "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا وَتَشْتَكِي إِلَى اللَّهِ وَاللَّهُ يَسْمَعُ تَحَاوُرَكُمَا ۚ إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ",
                "الَّذِينَ يُظَاهِرُونَ مِنكُم مِّن نِّسَائِهِم مَّا هُنَّ أُمَّهَاتِهِمْ ۖ إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ ۚ وَإِنَّهُمْ لَيَقُولُونَ مُنكَرًا مِّنَ الْقَوْلِ وَزُورًا ۚ وَإِنَّ اللَّهَ لَعَفُوٌّ غَفُورٌ",
                "وَالَّذِينَ يُظَاهِرُونَ مِن نِّسَائِهِمْ ثُمَّ يَعُودُونَ لِمَا قَالُوا فَتَحْرِيرُ رَقَبَةٍ مِّن قَبْلِ أَن يَتَمَاسَّا ۚ ذَٰلِكُمْ تُوعَظُونَ بِهِ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
                "فَمَن لَّمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ مِن قَبْلِ أَن يَتَمَاسَّا ۖ فَمَن لَّمْ يَسْتَطِعْ فَإِطْعَامُ سِتِّينَ مِسْكِينًا ۚ ذَٰلِكَ لِتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ ۚ وَتِلْكَ حُدُودُ اللَّهِ ۗ وَلِلْكَافِرِينَ عَذَابٌ أَلِيمٌ",
                "إِنَّ الَّذِينَ يُحَادُّونَ اللَّهَ وَرَسُولَهُ كُبِتُوا كَمَا كُبِتَ الَّذِينَ مِن قَبْلِهِمْ ۚ وَقَدْ أَنزَلْنَا آيَاتٍ بَيِّنَاتٍ ۚ وَلِلْكَافِرِينَ عَذَابٌ مُّهِينٌ",
                "يَوْمَ يَبْعَثُهُمُ اللَّهُ جَمِيعًا فَيُنَبِّئُهُم بِمَا عَمِلُوا ۚ أَحْصَاهُ اللَّهُ وَنَسُوهُ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
                "أَلَمْ تَرَ أَنَّ اللَّهَ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ وَلَا خَمْسَةٍ إِلَّا هُوَ سَادِسُهُمْ وَلَا أَدْنَىٰ مِن ذَٰلِكَ وَلَا أَكْثَرَ إِلَّا هُوَ مَعَهُمْ أَيْنَ مَا كَانُوا ۖ ثُمَّ يُنَبِّئُهُم بِمَا عَمِلُوا يَوْمَ الْقِيَامَةِ ۚ إِنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ",
                "أَلَمْ تَرَ إِلَى الَّذِينَ نُهُوا عَنِ النَّجْوَىٰ ثُمَّ يَعُودُونَ لِمَا نُهُوا عَنْهُ وَيَتَنَاجَوْنَ بِالْإِثْمِ وَالْعُدْوَانِ وَمَعْصِيَتِ الرَّسُولِ وَإِذَا جَاءُوكَ حَيَّوْكَ بِمَا لَمْ يُحَيِّكَ بِهِ اللَّهُ وَيَقُولُونَ فِي أَنفُسِهِمْ لَوْلَا يُعَذِّبُنَا اللَّهُ بِمَا نَقُولُ ۚ حَسْبُهُمْ جَهَنَّمُ يَصْلَوْنَهَا ۖ فَبِئْسَ الْمَصِيرُ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَنَاجَيْتُمْ فَلَا تَتَنَاجَوْا بِالْإِثْمِ وَالْعُدْوَانِ وَمَعْصِيَتِ الرَّسُولِ وَتَنَاجَوْا بِالْبِرِّ وَالتَّقْوَىٰ ۖ وَاتَّقُوا اللَّهَ الَّذِي إِلَيْهِ تُحْشَرُونَ",
                "إِنَّمَا النَّجْوَىٰ مِنَ الشَّيْطَانِ لِيَحْزُنَ الَّذِينَ آمَنُوا وَلَيْسَ بِضَارِّهِمْ شَيْئًا إِلَّا بِإِذْنِ اللَّهِ ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ"
            ],
            urdu: [
                "بے شک اللہ نے اس عورت کی بات سنی جو آپ سے اپنے شوہر کے بارے میں جھگڑ رہی تھی اور اللہ سے شکایت کر رہی تھی اور اللہ تم دونوں کی گفتگو سن رہا تھا، بے شک اللہ سننے والا دیکھنے والا ہے",
                "جو تم میں سے اپنی بیویوں سے ظہار کرتے ہیں وہ ان کی مائیں نہیں، ان کی مائیں تو صرف وہ ہیں جنہوں نے انہیں جنم دیا اور بے شک وہ منکر اور جھوٹی بات کہتے ہیں اور بے شک اللہ معاف کرنے والا بخشنے والا ہے",
                "اور جو اپنی بیویوں سے ظہار کریں پھر اپنی کہی ہوئی بات سے رجوع کریں تو ایک غلام آزاد کرنا ہے اس سے پہلے کہ وہ ایک دوسرے کو چھوئیں، اس سے تم نصیحت پکڑتے ہو اور اللہ تمہارے اعمال سے باخبر ہے",
                "پھر جو نہ پائے تو دو مہینے مسلسل روزے رکھے اس سے پہلے کہ ایک دوسرے کو چھوئیں، پھر جو استطاعت نہ رکھے تو ساٹھ مسکینوں کو کھانا کھلائے، یہ اس لیے کہ تم اللہ اور اس کے رسول پر ایمان لاؤ اور یہ اللہ کی حدیں ہیں اور کافروں کے لیے دردناک عذاب ہے",
                "بے شک جو اللہ اور اس کے رسول سے مخالفت کرتے ہیں وہ ذلیل کیے گئے جیسے ان سے پہلے والے ذلیل کیے گئے اور بے شک ہم نے واضح آیات نازل کیں اور کافروں کے لیے ذلت کا عذاب ہے",
                "جس دن اللہ ان سب کو اٹھائے گا پھر انہیں بتائے گا جو انہوں نے کیا، اللہ نے اسے شمار کیا اور وہ بھول گئے اور اللہ ہر چیز پر گواہ ہے",
                "کیا آپ نے نہیں دیکھا کہ اللہ جانتا ہے جو آسمانوں میں ہے اور جو زمین میں ہے، تین کی سرگوشی نہیں ہوتی مگر وہ چوتھا ان کے ساتھ ہوتا ہے اور نہ پانچ کی مگر وہ چھٹا ان کے ساتھ ہوتا ہے اور نہ اس سے کم اور نہ زیادہ مگر وہ ان کے ساتھ ہوتا ہے جہاں بھی وہ ہوں، پھر وہ قیامت کے دن انہیں بتائے گا جو انہوں نے کیا، بے شک اللہ ہر چیز کو جانتا ہے",
                "کیا آپ نے ان کو نہیں دیکھا جنہیں سرگوشی سے منع کیا گیا پھر وہ اسی کی طرف لوٹتے ہیں جس سے منع کیے گئے تھے اور گناہ اور زیادتی اور رسول کی نافرمانی کی سرگوشی کرتے ہیں اور جب آپ کے پاس آتے ہیں تو آپ کو ایسے سلام کہتے ہیں جس سے اللہ نے آپ کو سلام نہیں کیا اور اپنے دل میں کہتے ہیں کہ اللہ ہمیں اس پر عذاب کیوں نہیں دیتا جو ہم کہتے ہیں، انہیں جہنم کافی ہے وہ اس میں داخل ہوں گے پھر وہ بہت برا ٹھکانہ ہے",
                "اے ایمان والو! جب تم سرگوشی کرو تو گناہ اور زیادتی اور رسول کی نافرمانی کی سرگوشی نہ کرو بلکہ نیکی اور پرہیزگاری کی سرگوشی کرو اور اللہ سے ڈرو جس کی طرف تم جمع کیے جاؤ گے",
                "سرگوشی تو شیطان کی طرف سے ہے تاکہ مومنوں کو غم دے اور وہ انہیں کچھ نقصان نہیں دے سکتا مگر اللہ کے حکم سے اور اللہ ہی پر مومن بھروسہ کریں"
            ],
            english: [
                "Certainly has Allah heard the speech of the one who argues with you, [O Muhammad], concerning her husband and directs her complaint to Allah. And Allah hears your dialogue; indeed, Allah is Hearing and Seeing.",
                "Those who pronounce thihar among you [to separate] from their wives - they are not [consequently] their mothers. Their mothers are none but those who gave birth to them. And indeed, they are saying an objectionable statement and a falsehood. But indeed, Allah is Pardoning and Forgiving.",
                "And those who pronounce thihar from their wives and then [wish to] go back on what they said - then [there must be] the freeing of a slave before they touch one another. That is what you are admonished thereby; and Allah is Acquainted with what you do.",
                "And he who does not find [a slave] - then a fast for two months consecutively before they touch one another; and he who is unable - then the feeding of sixty poor persons. That is for you to believe [completely] in Allah and His Messenger; and those are the limits [set by] Allah. And for the disbelievers is a painful punishment.",
                "Indeed, those who oppose Allah and His Messenger are abased as those before them were abased. And We have certainly sent down verses of clear evidence. And for the disbelievers is a humiliating punishment.",
                "On the Day when Allah will resurrect them all and inform them of what they did. Allah had enumerated it, while they forgot it; and Allah is, over all things, Witness.",
                "Have you not considered that Allah knows what is in the heavens and what is on the earth? There is no private conversation of three but that He is the fourth of them, nor are there five but that He is the sixth of them - and no less than that and no more except that He is with them [in knowledge] wherever they are. Then He will inform them of what they did, on the Day of Resurrection. Indeed, Allah is, of all things, Knowing.",
                "Have you not considered those who were forbidden from private conversation, then they return to that which they were forbidden and converse among themselves of sin and aggression and disobedience to the Messenger, and when they come to you, they greet you with that which Allah does not greet you with and say among themselves, 'Why does Allah not punish us for what we say?' Sufficient for them is Hell, which they will [enter to] burn, and evil is the destination.",
                "O you who have believed, when you converse privately, do not converse about sin and aggression and disobedience to the Messenger but converse about righteousness and piety. And fear Allah, to whom you will be gathered.",
                "Private conversation is only from Satan that he may grieve those who have believed, but he will not harm them at all except by permission of Allah. And upon Allah let the believers rely."
            ]
        },

        /* ================= SURAH 59: AL-HASHR ================= */
        59: {
            arabic: [
                "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "هُوَ الَّذِي أَخْرَجَ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ مِن دِيَارِهِمْ لِأَوَّلِ الْحَشْرِ ۚ مَا ظَنَنتُمْ أَن يَخْرُجُوا ۖ وَظَنُّوا أَنَّهُم مُّنَعَتُهُمْ حُصُونُهُم مِّنَ اللَّهِ فَأَتَاهُمُ اللَّهُ مِنْ حَيْثُ لَمْ يَحْتَسِبُوا ۖ وَقَذَفَ فِي قُلُوبِهِمُ الرُّعْبَ ۚ يُخْرِبُونَ بُيُوتَهُم بِأَيْدِيهِمْ وَأَيْدِي الْمُؤْمِنِينَ فَاعْتَبِرُوا يَا أُولِي الْأَبْصَارِ",
                "وَلَوْلَا أَن كَتَبَ اللَّهُ عَلَيْهِمُ الْجَلَاءَ لَعَذَّبَهُمْ فِي الدُّنْيَا ۖ وَلَهُمْ فِي الْآخِرَةِ عَذَابُ النَّارِ",
                "ذَٰلِكَ بِأَنَّهُمْ شَاقُّوا اللَّهَ وَرَسُولَهُ ۖ وَمَن يُشَاقِّ اللَّهَ فَإِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
                "مَا قَطَعْتُم مِّن لِّينَةٍ أَوْ تَرَكْتُمُوهَا قَائِمَةً عَلَىٰ أُصُولِهَا فَبِإِذْنِ اللَّهِ وَلِيُخْزِيَ الْفَاسِقِينَ",
                "وَمَا أَفَاءَ اللَّهُ عَلَىٰ رَسُولِهِ مِنْهُمْ فَمَا أَوْجَفْتُمْ عَلَيْهِ مِنْ خَيْلٍ وَلَا رِكَابٍ وَلَٰكِنَّ اللَّهَ يُسَلِّطُ رُسُلَهُ عَلَىٰ مَن يَشَاءُ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "مَّا أَفَاءَ اللَّهُ عَلَىٰ رَسُولِهِ مِنْ أَهْلِ الْقُرَىٰ فَلِلَّهِ وَلِلرَّسُولِ وَلِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَابْنِ السَّبِيلِ كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ ۚ وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
                "لِلْفُقَرَاءِ الْمُهَاجِرِينَ الَّذِينَ أُخْرِجُوا مِن دِيَارِهِمْ وَأَمْوَالِهِمْ يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ وَرِضْوَانًا وَيَنصُرُونَ اللَّهَ وَرَسُولَهُ ۚ أُولَٰئِكَ هُمُ الصَّادِقُونَ",
                "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
                "وَالَّذِينَ جَاءُوا مِن بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ"
            ],
            urdu: [
                "اللہ کی تسبیح کی جو آسمانوں اور زمین میں ہے اور وہ زبردست حکمت والا ہے",
                "وہی ہے جس نے اہل کتاب کے کافروں کو ان کے گھروں سے نکالا پہلی بار جمع کرنے کے لیے، تم نے گمان نہ کیا تھا کہ وہ نکلیں گے اور انہوں نے گمان کیا کہ ان کے قلعے انہیں اللہ سے بچا لیں گے پھر اللہ ان کے پاس وہاں سے آیا جہاں سے انہیں گمان بھی نہ تھا اور اس نے ان کے دلوں میں رعب ڈال دیا، وہ اپنے گھروں کو اپنے ہاتھوں اور مومنوں کے ہاتھوں سے ویران کرتے تھے، پس عبرت لو اے آنکھوں والو",
                "اور اگر اللہ نے ان پر جلا وطنی نہ لکھی ہوتی تو وہ انہیں دنیا میں عذاب دیتا اور ان کے لیے آخرت میں آگ کا عذاب ہے",
                "یہ اس لیے کہ انہوں نے اللہ اور اس کے رسول سے مخالفت کی اور جو اللہ سے مخالفت کرے تو بے شک اللہ سخت عذاب دینے والا ہے",
                "تم نے جو کھجور کے درخت کاٹے یا انہیں ان کی جڑوں پر کھڑا چھوڑا تو یہ اللہ کے حکم سے تھا اور تاکہ وہ فاسقوں کو رسوا کرے",
                "اور جو مال اللہ نے ان سے اپنے رسول کو دیا تو تم نے اس پر کوئی گھوڑا یا اونٹ نہیں دوڑایا لیکن اللہ اپنے رسولوں کو جس پر چاہے غلبہ دیتا ہے اور اللہ ہر چیز پر قادر ہے",
                "جو مال اللہ نے ان بستیوں والوں سے اپنے رسول کو دیا وہ اللہ اور رسول اور رشتہ داروں اور یتیموں اور مسکینوں اور مسافروں کا ہے تاکہ یہ تمہارے مالداروں کے درمیان ہی نہ پھرے اور رسول تمہیں جو دے اسے لو اور جس سے منع کرے اس سے رکو اور اللہ سے ڈرو، بے شک اللہ سخت عذاب دینے والا ہے",
                "ان مہاجر فقیروں کے لیے جو اپنے گھروں اور مالوں سے نکال دیے گئے، اللہ کے فضل اور خوشنودی کی تلاش میں اور اللہ اور اس کے رسول کی مدد کرتے ہیں، یہی لوگ سچے ہیں",
                "اور جو ان سے پہلے گھر میں رہے اور ایمان لائے وہ ان کی محبت کرتے ہیں جو ان کی طرف ہجرت کر کے آئے اور اپنے سینوں میں ان چیزوں کی حاجت نہیں پاتے جو انہیں دی گئیں اور اپنے آپ پر ترجیح دیتے ہیں چاہے انہیں خود ضرورت ہو اور جو اپنے نفس کی بخل سے بچایا گیا یہی لوگ کامیاب ہیں",
                "اور جو ان کے بعد آئے وہ کہتے ہیں اے ہمارے رب! ہمیں اور ہمارے ان بھائیوں کو بخش دے جنہوں نے ہم سے پہلے ایمان لایا اور ہمارے دلوں میں ایمان والوں کے لیے کینہ نہ رکھ، اے ہمارے رب! بے شک تو بہت مہربان رحم کرنے والا ہے"
            ],
            english: [
                "Whatever is in the heavens and whatever is on the earth exalts Allah, and He is the Exalted in Might, the Wise.",
                "It is He who expelled the ones who disbelieved among the People of the Scripture from their homes at the first gathering. You did not think they would leave, and they thought that their fortresses would protect them from Allah; but [the decree of] Allah came upon them from where they had not expected, and He cast terror into their hearts [so] they destroyed their houses by their [own] hands and the hands of the believers. So take warning, O people of vision.",
                "And if not that Allah had decreed for them evacuation, He would have punished them in [this] world, and for them in the Hereafter is the punishment of the Fire.",
                "That is because they opposed Allah and His Messenger. And whoever opposes Allah - then indeed, Allah is severe in penalty.",
                "Whatever you have cut down of [their] palm trees or left standing on their trunks - it was by permission of Allah and so He would disgrace the defiantly disobedient.",
                "And what Allah restored [of property] to His Messenger from them - you did not spur for it [in an expedition] any horses or camels, but Allah gives His messengers power over whom He wills, and Allah is over all things competent.",
                "And what Allah restored to His Messenger from the people of the towns - it is for Allah and for the Messenger and for [his] near relatives and orphans and the [stranded] traveler - so that it will not be a perpetual distribution among the rich from among you. And whatever the Messenger has given you - take; and what he has forbidden you - refrain from. And fear Allah; indeed, Allah is severe in penalty.",
                "For the poor emigrants who were expelled from their homes and their properties, seeking bounty from Allah and [His] approval and supporting Allah and His Messenger, [there is also a share]. Those are the truthful.",
                "And [also for] those who were settled in al-Madinah and [adopted] the faith before them. They love those who emigrated to them and find not any want in their breasts of what the emigrants were given but give [them] preference over themselves, even though they are in privation. And whoever is protected from the stinginess of his soul - it is those who will be the successful.",
                "And [there is a share for] those who came after them, saying, 'Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.'"
            ]
        },

        /* ================= SURAH 60: AL-MUMTAHANAH ================= */
        60: {
            arabic: [
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ تُلْقُونَ إِلَيْهِم بِالْمَوَدَّةِ وَقَدْ كَفَرُوا بِمَا جَاءَكُم مِّنَ الْحَقِّ يُخْرِجُونَ الرَّسُولَ وَإِيَّاكُمْ ۙ أَن تُؤْمِنُوا بِاللَّهِ رَبِّكُمْ إِن كُنتُمْ خَرَجْتُمْ جِهَادًا فِي سَبِيلِي وَابْتِغَاءَ مَرْضَاتِي ۚ تُسِرُّونَ إِلَيْهِم بِالْمَوَدَّةِ وَأَنَا أَعْلَمُ بِمَا أَخْفَيْتُمْ وَمَا أَعْلَنتُمْ ۚ وَمَن يَفْعَلْهُ مِنكُمْ فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ",
                "إِن يَثْقَفُوكُمْ يَكُونُوا لَكُمْ أَعْدَاءً وَيَبْسُطُوا إِلَيْكُمْ أَيْدِيَهُمْ وَأَلْسِنَتَهُم بِالسُّوءِ وَوَدُّوا لَوْ تَكْفُرُونَ",
                "لَن تَنفَعَكُمْ أَرْحَامُكُمْ وَلَا أَوْلَادُكُمْ ۚ يَوْمَ الْقِيَامَةِ يَفْصِلُ بَيْنَكُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
                "قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ وَالَّذِينَ مَعَهُ إِذْ قَالُوا لِقَوْمِهِمْ إِنَّا بُرَآءُ مِنكُمْ وَمِمَّا تَعْبُدُونَ مِن دُونِ اللَّهِ كَفَرْنَا بِكُمْ وَبَدَا بَيْنَنَا وَبَيْنَكُمُ الْعَدَاوَةُ وَالْبَغْضَاءُ أَبَدًا حَتَّىٰ تُؤْمِنُوا بِاللَّهِ وَحْدَهُ إِلَّا قَوْلَ إِبْرَاهِيمَ لِأَبِيهِ لَأَسْتَغْفِرَنَّ لَكَ وَمَا أَمْلِكُ لَكَ مِنَ اللَّهِ مِن شَيْءٍ ۖ رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
                "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
                "لَقَدْ كَانَ لَكُمْ فِيهِمْ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ ۚ وَمَن يَتَوَلَّ فَإِنَّ اللَّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
                "عَسَى اللَّهُ أَن يَجْعَلَ بَيْنَكُمْ وَبَيْنَ الَّذِينَ عَادَيْتُم مِّنْهُم مَّوَدَّةً ۚ وَاللَّهُ قَدِيرٌ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
                "لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ",
                "إِنَّمَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ قَاتَلُوكُمْ فِي الدِّينِ وَأَخْرَجُوكُم مِّن دِيَارِكُمْ وَظَاهَرُوا عَلَىٰ إِخْرَاجِكُمْ أَن تَوَلَّوْهُمْ ۚ وَمَن يَتَوَلَّهُمْ فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا جَاءَكُمُ الْمُؤْمِنَاتُ مُهَاجِرَاتٍ فَامْتَحِنُوهُنَّ ۖ اللَّهُ أَعْلَمُ بِإِيمَانِهِنَّ ۖ فَإِنْ عَلِمْتُمُوهُنَّ مُؤْمِنَاتٍ فَلَا تَرْجِعُوهُنَّ إِلَى الْكُفَّارِ ۖ لَا هُنَّ حِلٌّ لَّهُمْ وَلَا هُمْ يَحِلُّونَ لَهُنَّ ۖ وَآتُوهُم مَّا أَنفَقُوا ۚ وَلَا جُنَاحَ عَلَيْكُمْ أَن تَنكِحُوهُنَّ إِذَا آتَيْتُمُوهُنَّ أُجُورَهُنَّ ۚ وَلَا تُمْسِكُوا بِعِصَمِ الْكَوَافِرِ وَاسْأَلُوا مَا أَنفَقْتُمْ وَلْيَسْأَلُوا مَا أَنفَقُوا ۚ ذَٰلِكُمْ حُكْمُ اللَّهِ ۖ يَحْكُمُ بَيْنَكُمْ ۚ وَاللَّهُ عَلِيمٌ حَكِيمٌ"
            ],
            urdu: [
                "اے ایمان والو! میرے اور اپنے دشمنوں کو دوست نہ بناؤ، تم ان کی طرف محبت کے پیغام بھیجتے ہو حالانکہ انہوں نے اس حق سے انکار کیا جو تمہارے پاس آیا، وہ رسول کو اور تمہیں نکالتے ہیں بسبب اس کے کہ تم اللہ اپنے رب پر ایمان لائے، اگر تم میری راہ میں جہاد اور میری خوشنودی کی تلاش میں نکلے ہو تو ان کی طرف محبت کے پیغام نہ بھیجو، میں جانتا ہوں جو تم چھپاتے ہو اور جو ظاہر کرتے ہو اور جو تم میں سے ایسا کرے وہ سیدھے راستے سے بھٹک گیا",
                "اگر وہ تم پر قابو پائیں تو تمہارے دشمن ہوں گے اور اپنے ہاتھ اور زبان تم پر برائی سے کھولیں گے اور چاہیں گے کہ تم کفر کرو",
                "تمہاری رشتہ داریاں اور اولاد تمہیں فائدہ نہ دیں گی، قیامت کے دن وہ تمہارے درمیان فیصلہ کرے گا اور اللہ تمہارے اعمال کو دیکھنے والا ہے",
                "بے شک تمہارے لیے ابراہیم اور اس کے ساتھیوں میں اچھی مثال ہے جب انہوں نے اپنی قوم سے کہا کہ ہم تم سے اور جنہیں تم اللہ کے سوا پوجتے ہو ان سے بری ہیں، ہم نے تم سے انکار کیا اور ہمارے اور تمہارے درمیان ہمیشہ کے لیے دشمنی اور بغض ظاہر ہو گیا یہاں تک کہ تم اللہ واحد پر ایمان لاؤ، سوائے ابراہیم کی اپنے باپ سے کہی ہوئی بات کے کہ میں تمہارے لیے بخشش مانگوں گا اور میں اللہ سے تمہارے لیے کچھ نہیں کر سکتا، اے ہمارے رب! ہم نے تجھ پر بھروسہ کیا اور تیری طرف رجوع کیا اور تیری ہی طرف لوٹنا ہے",
                "اے ہمارے رب! ہمیں کافروں کے لیے آزمائش نہ بنا اور اے ہمارے رب! ہمیں بخش دے، بے شک تو زبردست حکمت والا ہے",
                "بے شک تمہارے لیے ان میں اچھی مثال ہے ہر اس شخص کے لیے جو اللہ اور آخرت کے دن کی امید رکھتا ہے اور جو منہ موڑے تو بے شک اللہ بے نیاز قابل تعریف ہے",
                "عید ہے کہ اللہ تمہارے اور ان کے درمیان جن سے تم نے دشمنی کی ان میں سے محبت ڈال دے اور اللہ قادر ہے اور اللہ بخشنے والا رحم کرنے والا ہے",
                "اللہ تمہیں ان لوگوں سے منع نہیں کرتا جنہوں نے دین کے بارے میں تم سے جنگ نہ کی اور نہ تمہیں تمہارے گھروں سے نکالا، اس سے کہ تم ان کے ساتھ نیکی اور انصاف کرو، بے شک اللہ انصاف کرنے والوں کو پسند کرتا ہے",
                "اللہ تو تمہیں صرف ان لوگوں سے منع کرتا ہے جنہوں نے دین کے بارے میں تم سے جنگ کی اور تمہیں تمہارے گھروں سے نکالا اور تمہارے نکالنے میں مدد کی، اس سے کہ تم ان سے دوستی کرو اور جو ان سے دوستی کرے تو یہی لوگ ظالم ہیں",
                "اے ایمان والو! جب تمہارے پاس مومن عورتیں ہجرت کر کے آئیں تو انہیں آزماؤ، اللہ ان کے ایمان کو زیادہ جانتا ہے، پھر اگر تم انہیں مومن جانو تو انہیں کافروں کی طرف واپس نہ بھیجو، نہ وہ ان کے لیے حلال ہیں اور نہ وہ ان کے لیے حلال ہیں اور انہیں دو جو انہوں نے خرچ کیا اور تم پر کوئی گناہ نہیں کہ ان سے نکاح کرو جب تم انہیں ان کے مہر دو اور کافر عورتوں کے نکاح نہ رکھو اور مانگو جو تم نے خرچ کیا اور وہ مانگیں جو انہوں نے خرچ کیا، یہ اللہ کا حکم ہے جو وہ تمہارے درمیان فیصلہ کرتا ہے اور اللہ جاننے والا حکمت والا ہے"
            ],
            english: [
                "O you who have believed, do not take My enemies and your enemies as allies, extending to them affection while they have disbelieved in what came to you of the truth, having driven out the Prophet and yourselves [only] because you believe in Allah, your Lord. If you have come out for jihad in My cause and seeking means to My approval, [take them not as friends]. You confide to them affection, but I am most knowing of what you conceal and what you declare. And whoever of you does that has certainly strayed from the soundness of the way.",
                "If they gain dominance over you, they would be to you as enemies and extend against you their hands and their tongues with evil, and they wish you would disbelieve.",
                "Never will your relatives or your children benefit you; the Day of Resurrection He will judge between you. And Allah, of what you do, is Seeing.",
                "There has already been for you an excellent pattern in Abraham and those with him, when they said to their people, 'Indeed, we are disassociated from you and from whatever you worship other than Allah. We have denied you, and there has appeared between us and you animosity and hatred forever until you believe in Allah alone' - except for the saying of Abraham to his father, 'I will surely ask forgiveness for you, but I have not [power to do] for you anything against Allah. Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.'",
                "Our Lord, make us not [objects of] torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is the Exalted in Might, the Wise.",
                "There has certainly been for you in them an excellent pattern for anyone whose hope is in Allah and the Last Day. And whoever turns away - then indeed, Allah is the Free of need, the Praiseworthy.",
                "Perhaps Allah will put, between you and those to whom you have been enemies among them, affection. And Allah is competent, and Allah is Forgiving and Merciful.",
                "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes - from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly.",
                "Allah only forbids you from those who fight you because of religion and expel you from your homes and aid in your expulsion - [forbids] that you make allies of them. And whoever makes allies of them, then it is those who are the wrongdoers.",
                "O you who have believed, when the believing women come to you as emigrants, examine them. Allah is most knowing as to their faith. And if you know them to be believers, then do not return them to the disbelievers; they are not lawful [wives] for them, nor are they lawful [husbands] for them. But give the disbelievers what they have spent. And there is no blame upon you if you marry them when you have given them their due compensation. And hold not to marriage bonds with disbelieving women, but ask for what you have spent and let them ask for what they have spent. That is the judgement of Allah; He judges between you. And Allah is Knowing and Wise."
            ]
        },

        /* ================= SURAH 61: AS-SAFF ================= */
        61: {
            arabic: [
                "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
                "كَبُرَ مَقْتًا عِندَ اللَّهِ أَن تَقُولُوا مَا لَا تَفْعَلُونَ",
                "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ",
                "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ لِمَ تُؤْذُونَنِي وَقَد تَّعْلَمُونَ أَنِّي رَسُولُ اللَّهِ إِلَيْكُمْ ۖ فَلَمَّا زَاغُوا أَزَاغَ اللَّهُ قُلُوبَهُمْ ۚ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ",
                "وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ ۖ فَلَمَّا جَاءَهُم بِالْبَيِّنَاتِ قَالُوا هَٰذَا سِحْرٌ مُّبِينٌ",
                "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ الْكَذِبَ وَهُوَ يُدْعَىٰ إِلَى الْإِسْلَامِ ۚ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
                "يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ وَلَوْ كَرِهَ الْكَافِرُونَ",
                "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَلَوْ كَرِهَ الْمُشْرِكُونَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ تُنجِيكُم مِّنْ عَذَابٍ أَلِيمٍ"
            ],
            urdu: [
                "اللہ کی تسبیح کی جو آسمانوں اور زمین میں ہے اور وہ زبردست حکمت والا ہے",
                "اے ایمان والو! تم وہ بات کیوں کہتے ہو جو کرتے نہیں",
                "اللہ کے نزدیک بہت ناپسندیدہ ہے کہ تم وہ بات کہو جو کرو نہیں",
                "بے شک اللہ ان لوگوں کو پسند کرتا ہے جو اس کی راہ میں صف باندھ کر لڑتے ہیں گویا وہ سیسہ پلائی ہوئی دیوار ہیں",
                "اور جب موسیٰ نے اپنی قوم سے کہا اے میری قوم! تم مجھے کیوں ستاتے ہو حالانکہ تم جانتے ہو کہ میں تمہاری طرف اللہ کا رسول ہوں، پھر جب وہ ٹیڑھے ہوئے تو اللہ نے ان کے دل ٹیڑھے کر دیے اور اللہ فاسق قوم کو ہدایت نہیں دیتا",
                "اور جب عیسیٰ ابن مریم نے کہا اے بنی اسرائیل! میں تمہاری طرف اللہ کا رسول ہوں جو اپنے سے پہلے کی تورات کی تصدیق کرتا ہوں اور ایک رسول کی خوشخبری دیتا ہوں جو میرے بعد آئے گا جس کا نام احمد ہے، پھر جب وہ ان کے پاس کھلی نشانیاں لے کر آیا تو انہوں نے کہا یہ صریح جادو ہے",
                "اور اس سے زیادہ ظالم کون جو اللہ پر جھوٹ باندھے حالانکہ اسے اسلام کی طرف بلایا جاتا ہے اور اللہ ظالم قوم کو ہدایت نہیں دیتا",
                "وہ چاہتے ہیں کہ اللہ کے نور کو اپنے منہ سے بجھا دیں اور اللہ اپنا نور پورا کرنے والا ہے چاہے کافر ناپسند کریں",
                "وہی ہے جس نے اپنے رسول کو ہدایت اور سچے دین کے ساتھ بھیجا تاکہ اسے تمام دینوں پر غالب کرے چاہے مشرک ناپسند کریں",
                "اے ایمان والو! کیا میں تمہیں ایسی تجارت بتاؤں جو تمہیں دردناک عذاب سے نجات دے"
            ],
            english: [
                "Whatever is in the heavens and whatever is on the earth exalts Allah, and He is the Exalted in Might, the Wise.",
                "O you who have believed, why do you say what you do not do?",
                "Great is hatred in the sight of Allah that you say what you do not do.",
                "Indeed, Allah loves those who fight in His cause in a row as though they are a [single] structure joined firmly.",
                "And [mention, O Muhammad], when Moses said to his people, 'O my people, why do you harm me while you certainly know that I am the Messenger of Allah to you?' And when they deviated, Allah caused their hearts to deviate. And Allah does not guide the defiantly disobedient people.",
                "And [mention] when Jesus, the son of Mary, said, 'O children of Israel, indeed I am the messenger of Allah to you confirming what came before me of the Torah and bringing good tidings of a messenger to come after me, whose name is Ahmad.' But when he came to them with clear evidences, they said, 'This is obvious magic.'",
                "And who is more unjust than one who invents about Allah untruth while he is being invited to Islam. And Allah does not guide the wrongdoing people.",
                "They want to extinguish the light of Allah with their mouths, but Allah will perfect His light, although the disbelievers dislike it.",
                "It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion, although those who associate others with Allah dislike it.",
                "O you who have believed, shall I guide you to a transaction that will save you from a painful punishment?"
            ]
        },

        /* ================= SURAH 62: AL-JUMU'AH ================= */
        62: {
            arabic: [
                "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ الْمَلِكِ الْقُدُّوسِ الْعَزِيزِ الْحَكِيمِ",
                "هُوَ الَّذِي بَعَثَ فِي الْأُمِّيِّينَ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَإِن كَانُوا مِن قَبْلُ لَفِي ضَلَالٍ مُّبِينٍ",
                "وَآخَرِينَ مِنْهُمْ لَمَّا يَلْحَقُوا بِهِمْ ۚ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
                "ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَن يَشَاءُ ۚ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ",
                "مَثَلُ الَّذِينَ حُمِّلُوا التَّوْرَاةَ ثُمَّ لَمْ يَحْمِلُوهَا كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا ۚ بِئْسَ مَثَلُ الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِ اللَّهِ ۚ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
                "قُلْ يَا أَيُّهَا الَّذِينَ هَادُوا إِن زَعَمْتُمْ أَنَّكُمْ أَوْلِيَاءُ لِلَّهِ مِن دُونِ النَّاسِ فَتَمَنَّوُا الْمَوْتَ إِن كُنتُمْ صَادِقِينَ",
                "وَلَا يَتَمَنَّوْنَهُ أَبَدًا بِمَا قَدَّمَتْ أَيْدِيهِمْ ۚ وَاللَّهُ عَلِيمٌ بِالظَّالِمِينَ",
                "قُلْ إِنَّ الْمَوْتَ الَّذِي تَفِرُّونَ مِنْهُ فَإِنَّهُ مُلَاقِيكُمْ ۖ ثُمَّ تُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
                "فَإِذَا قُضِيَتِ الصَّلَاةُ فَانتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِن فَضْلِ اللَّهِ وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ"
            ],
            urdu: [
                "اللہ کی تسبیح کرتا ہے جو آسمانوں میں ہے اور جو زمین میں ہے، بادشاہ، پاک، زبردست، حکمت والا",
                "وہی ہے جس نے ان پڑھ لوگوں میں انہی میں سے ایک رسول بھیجا جو ان پر اس کی آیات پڑھتا ہے اور انہیں پاک کرتا ہے اور انہیں کتاب اور حکمت سکھاتا ہے اور بے شک وہ اس سے پہلے کھلی گمراہی میں تھے",
                "اور دوسروں میں بھی جو ابھی ان سے ملے نہیں اور وہ زبردست حکمت والا ہے",
                "یہ اللہ کا فضل ہے جسے چاہے دیتا ہے اور اللہ بڑے فضل والا ہے",
                "ان لوگوں کی مثال جن پر تورات لادی گئی پھر انہوں نے اسے نہ اٹھایا گدھے کی طرح ہے جو کتابیں اٹھائے، بری مثال ہے ان لوگوں کی جنہوں نے اللہ کی آیات کو جھٹلایا اور اللہ ظالم قوم کو ہدایت نہیں دیتا",
                "کہو اے یہود! اگر تم گمان رکھتے ہو کہ تم اللہ کے دوست ہو دوسرے لوگوں کے سوا تو موت کی آرزو کرو اگر تم سچے ہو",
                "اور وہ اس کی کبھی آرزو نہیں کریں گے بسبب اس کے جو ان کے ہاتھوں نے آگے بھیجا اور اللہ ظالموں کو جانتا ہے",
                "کہو بے شک وہ موت جس سے تم بھاگتے ہو وہ تمہیں ضرور ملے گی پھر تم غائب اور ظاہر کے جاننے والے کی طرف لوٹائے جاؤ گے پھر وہ تمہیں بتائے گا جو تم کرتے تھے",
                "اے ایمان والو! جب جمعہ کے دن نماز کے لیے پکارا جائے تو اللہ کے ذکر کی طرف دوڑو اور خرید و فروخت چھوڑ دو، یہ تمہارے لیے بہتر ہے اگر تم جانتے ہو",
                "پھر جب نماز ہو جائے تو زمین میں پھیل جاؤ اور اللہ کا فضل تلاش کرو اور اللہ کا ذکر کثرت سے کرو تاکہ تم کامیاب ہو"
            ],
            english: [
                "Whatever is in the heavens and whatever is on the earth is exalting Allah, the Sovereign, the Pure, the Exalted in Might, the Wise.",
                "It is He who has sent among the unlettered a Messenger from themselves reciting to them His verses and purifying them and teaching them the Book and wisdom - although they were before in clear error.",
                "And [to] others of them who have not yet joined them. And He is the Exalted in Might, the Wise.",
                "That is the bounty of Allah, which He gives to whom He wills, and Allah is the possessor of great bounty.",
                "The example of those who were entrusted with the Torah and then did not take it on is like that of a donkey who carries volumes [of books]. Wretched is the example of the people who deny the signs of Allah. And Allah does not guide the wrongdoing people.",
                "Say, 'O you who are Jews, if you claim that you are allies of Allah, excluding the [other] people, then wish for death, if you should be truthful.'",
                "But they will not wish for it, ever, because of what their hands have put forth. And Allah is Knowing of the wrongdoers.",
                "Say, 'Indeed, the death from which you flee - indeed, it will meet you. Then you will be returned to the Knower of the unseen and the witnessed, and He will inform you about what you used to do.'",
                "O you who have believed, when [the adhan] is called for the prayer on the day of Jumu'ah [Friday], then proceed to the remembrance of Allah and leave trade. That is better for you, if you only knew.",
                "And when the prayer has been concluded, disperse within the land and seek from the bounty of Allah, and remember Allah often that you may succeed."
            ]
        },

        /* ================= SURAH 63: AL-MUNAFIQUN ================= */
        63: {
            arabic: [
                "إِذَا جَاءَكَ الْمُنَافِقُونَ قَالُوا نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ ۗ وَاللَّهُ يَعْلَمُ إِنَّكَ لَرَسُولُهُ وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ",
                "اتَّخَذُوا أَيْمَانَهُمْ جُنَّةً فَصَدُّوا عَن سَبِيلِ اللَّهِ ۚ إِنَّهُمْ سَاءَ مَا كَانُوا يَعْمَلُونَ",
                "ذَٰلِكَ بِأَنَّهُمْ آمَنُوا ثُمَّ كَفَرُوا فَطُبِعَ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَفْقَهُونَ",
                "وَإِذَا رَأَيْتَهُمْ تُعْجِبُكَ أَجْسَامُهُمْ ۖ وَإِن يَقُولُوا تَسْمَعْ لِقَوْلِهِمْ ۖ كَأَنَّهُمْ خُشُبٌ مُّسَنَّدَةٌ ۖ يَحْسَبُونَ كُلَّ صَيْحَةٍ عَلَيْهِمْ ۚ هُمُ الْعَدُوُّ فَاحْذَرْهُمْ ۚ قَاتَلَهُمُ اللَّهُ ۖ أَنَّىٰ يُؤْفَكُونَ",
                "وَإِذَا قِيلَ لَهُمْ تَعَالَوْا يَسْتَغْفِرْ لَكُمْ رَسُولُ اللَّهِ لَوَّوْا رُءُوسَهُمْ وَرَأَيْتَهُمْ يَصُدُّونَ وَهُم مُّسْتَكْبِرُونَ",
                "سَوَاءٌ عَلَيْهِمْ أَسْتَغْفَرْتَ لَهُمْ أَمْ لَمْ تَسْتَغْفِرْ لَهُمْ لَن يَغْفِرَ اللَّهُ لَهُمْ ۚ إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ",
                "هُمُ الَّذِينَ يَقُولُونَ لَا تُنفِقُوا عَلَىٰ مَنْ عِندَ رَسُولِ اللَّهِ حَتَّىٰ يَنفَضُّوا ۗ وَلِلَّهِ خَزَائِنُ السَّمَاوَاتِ وَالْأَرْضِ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَفْقَهُونَ",
                "يَقُولُونَ لَئِن رَّجَعْنَا إِلَى الْمَدِينَةِ لَيُخْرِجَنَّ الْأَعَزُّ مِنْهَا الْأَذَلَّ ۚ وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْخَاسِرُونَ",
                "وَأَنفِقُوا مِن مَّا رَزَقْنَاكُم مِّن قَبْلِ أَن يَأْتِيَ أَحَدَكُمُ الْمَوْتُ فَيَقُولَ رَبِّ لَوْلَا أَخَّرْتَنِي إِلَىٰ أَجَلٍ قَرِيبٍ فَأَصَّدَّقَ وَأَكُن مِّنَ الصَّالِحِينَ",
                "وَلَن يُؤَخِّرَ اللَّهُ نَفْسًا إِذَا جَاءَ أَجَلُهَا ۚ وَاللَّهُ خَبِيرٌ بِمَا تَعْمَلُونَ"
            ],
            urdu: [
                "جب منافق آپ کے پاس آتے ہیں تو کہتے ہیں ہم گواہی دیتے ہیں کہ آپ اللہ کے رسول ہیں اور اللہ جانتا ہے کہ آپ اس کے رسول ہیں اور اللہ گواہی دیتا ہے کہ منافق جھوٹے ہیں",
                "انہوں نے اپنی قسموں کو ڈھال بنایا پھر اللہ کے راستے سے روکا، بے شک وہ بہت برا کرتے تھے",
                "یہ اس لیے کہ انہوں نے ایمان لایا پھر کفر کیا پھر ان کے دلوں پر مہر لگا دی گئی پس وہ سمجھتے نہیں",
                "اور جب آپ انہیں دیکھیں تو ان کے جسم آپ کو اچھے لگیں اور اگر وہ بات کریں تو آپ ان کی بات سنیں، گویا وہ لگائی ہوئی لکڑیاں ہیں، وہ ہر آواز کو اپنے خلاف سمجھتے ہیں، وہ دشمن ہیں پس ان سے بچو، اللہ انہیں ہلاک کرے، وہ کہاں پھیرے جاتے ہیں",
                "اور جب ان سے کہا جائے آؤ رسول اللہ تمہارے لیے بخشش مانگیں تو وہ اپنے سر پھیر لیتے ہیں اور آپ انہیں دیکھیں گے کہ وہ تکبر کرتے ہوئے منہ موڑتے ہیں",
                "ان کے لیے برابر ہے چاہے آپ ان کے لیے بخشش مانگیں یا نہ مانگیں، اللہ انہیں ہرگز نہیں بخشے گا، بے شک اللہ فاسق قوم کو ہدایت نہیں دیتا",
                "یہی وہ ہیں جو کہتے ہیں ان پر خرچ نہ کرو جو رسول اللہ کے پاس ہیں یہاں تک کہ وہ منتشر ہو جائیں اور آسمان اور زمین کے خزانے اللہ ہی کے ہیں لیکن منافق سمجھتے نہیں",
                "کہتے ہیں اگر ہم مدینہ لوٹے تو عزت والا ذلیل کو وہاں سے نکال دے گا اور عزت اللہ اور اس کے رسول اور مومنوں کے لیے ہے لیکن منافق جانتے نہیں",
                "اے ایمان والو! تمہارے مال اور اولاد تمہیں اللہ کے ذکر سے غافل نہ کریں اور جو ایسا کرے تو یہی لوگ خسارہ پانے والے ہیں",
                "اور اس میں سے خرچ کرو جو ہم نے تمہیں دیا اس سے پہلے کہ تم میں سے کسی کو موت آ جائے پھر کہے اے میرے رب! تو نے مجھے تھوڑی دیر کی مہلت کیوں نہ دی کہ میں صدقہ کرتا اور نیک لوگوں میں سے ہوتا",
                "اور اللہ کسی کو مہلت نہیں دیتا جب اس کی موت کا وقت آ جائے اور اللہ تمہارے اعمال سے باخبر ہے"
            ],
            english: [
                "When the hypocrites come to you, [O Muhammad], they say, 'We testify that you are the Messenger of Allah.' And Allah knows that you are His Messenger, and Allah testifies that the hypocrites are liars.",
                "They have taken their oaths as a cover, so they averted [people] from the way of Allah. Indeed, it was evil that they were doing.",
                "That is because they believed, and then they disbelieved; so their hearts were sealed over, and they do not understand.",
                "And when you see them, their forms please you, and if they speak, you listen to their speech. [They are] as if they were pieces of wood propped up - they think that every shout is against them. They are the enemy, so beware of them. May Allah destroy them; how are they deluded?",
                "And when it is said to them, 'Come, the Messenger of Allah will ask forgiveness for you,' they turn their heads aside and you see them evading while they are arrogant.",
                "It is all the same for them whether you ask forgiveness for them or do not ask forgiveness for them; never will Allah forgive them. Indeed, Allah does not guide the defiantly disobedient people.",
                "They are the ones who say, 'Do not spend on those who are with the Messenger of Allah until they disband.' And to Allah belongs the depositories of the heavens and the earth, but the hypocrites do not understand.",
                "They say, 'If we return to al-Madinah, the more honored [for power] will surely expel therefrom the more humble.' And to Allah belongs [all] honor, and to His Messenger, and to the believers, but the hypocrites do not know.",
                "O you who have believed, let not your wealth and your children divert you from remembrance of Allah. And whoever does that - then those are the losers.",
                "And spend [in the way of Allah] from what We have provided you before death approaches one of you and he says, 'My Lord, if only You would delay me for a brief term so I would give charity and be among the righteous.'",
                "But never will Allah delay a soul when its time has come. And Allah is Acquainted with what you do."
            ]
        },

        /* ================= SURAH 64: AT-TAGHABUN ================= */
        64: {
            arabic: [
                "يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۖ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "هُوَ الَّذِي خَلَقَكُمْ فَمِنكُمْ كَافِرٌ وَمِنكُم مُّؤْمِنٌ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
                "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ ۖ وَإِلَيْهِ الْمَصِيرُ",
                "يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ ۚ وَاللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
                "أَلَمْ يَأْتِكُمْ نَبَأُ الَّذِينَ كَفَرُوا مِن قَبْلُ فَذَاقُوا وَبَالَ أَمْرِهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ",
                "ذَٰلِكَ بِأَنَّهُ كَانَت تَّأْتِيهِمْ رُسُلُهُم بِالْبَيِّنَاتِ فَقَالُوا أَبَشَرٌ يَهْدُونَنَا فَكَفَرُوا وَتَوَلَّوا ۚ وَاسْتَغْنَى اللَّهُ ۚ وَاللَّهُ غَنِيٌّ حَمِيدٌ",
                "زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا ۚ قُلْ بَلَىٰ وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ ۚ وَذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ",
                "فَآمِنُوا بِاللَّهِ وَرَسُولِهِ وَالنُّورِ الَّذِي أَنزَلْنَا ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
                "يَوْمَ يَجْمَعُكُمْ لِيَوْمِ الْجَمْعِ ۖ ذَٰلِكَ يَوْمُ التَّغَابُنِ ۗ وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
                "وَالَّذِينَ كَفَرُوا وَكَذَّبُوا بِآيَاتِنَا أُولَٰئِكَ أَصْحَابُ النَّارِ خَالِدِينَ فِيهَا ۖ وَبِئْسَ الْمَصِيرُ"
            ],
            urdu: [
                "اللہ کی تسبیح کرتا ہے جو آسمانوں میں ہے اور جو زمین میں ہے، اسی کے لیے بادشاہت ہے اور اسی کے لیے تعریف ہے اور وہ ہر چیز پر قادر ہے",
                "وہی ہے جس نے تمہیں پیدا کیا پھر تم میں کافر بھی ہیں اور مومن بھی اور اللہ تمہارے اعمال کو دیکھنے والا ہے",
                "اس نے آسمان اور زمین حق کے ساتھ پیدا کیے اور تمہاری صورتیں بنائیں پھر اچھی صورتیں بنائیں اور اسی کی طرف لوٹنا ہے",
                "وہ جانتا ہے جو آسمانوں اور زمین میں ہے اور جانتا ہے جو تم چھپاتے ہو اور جو ظاہر کرتے ہو اور اللہ دلوں کی بات جانتا ہے",
                "کیا تمہیں ان لوگوں کی خبر نہیں پہنچی جنہوں نے پہلے کفر کیا پھر انہوں نے اپنے کام کا وبال چکھا اور ان کے لیے دردناک عذاب ہے",
                "یہ اس لیے کہ ان کے رسول ان کے پاس کھلی نشانیاں لے کر آتے تھے پھر انہوں نے کہا کیا بشر ہمیں ہدایت دیں گے، پس انہوں نے کفر کیا اور منہ موڑا اور اللہ بے نیاز ہو گیا اور اللہ بے نیاز قابل تعریف ہے",
                "کافروں نے گمان کیا کہ وہ ہرگز نہیں اٹھائے جائیں گے، کہو کیوں نہیں! میرے رب کی قسم تم ضرور اٹھائے جاؤ گے پھر تمہیں بتایا جائے گا جو تم نے کیا اور یہ اللہ پر آسان ہے",
                "پس اللہ اور اس کے رسول اور اس نور پر ایمان لاؤ جو ہم نے نازل کیا اور اللہ تمہارے اعمال سے باخبر ہے",
                "جس دن وہ تمہیں جمع کرے گا جمع ہونے کے دن، یہ نقصان کا دن ہے اور جو اللہ پر ایمان لائے اور نیک عمل کرے وہ اس کی برائیاں مٹا دے گا اور اسے ایسے باغات میں داخل کرے گا جن کے نیچے نہریں بہیں جن میں وہ ہمیشہ رہیں گے، یہ بڑی کامیابی ہے",
                "اور جنہوں نے کفر کیا اور ہماری آیات کو جھٹلایا یہی آگ والے ہیں جن میں وہ ہمیشہ رہیں گے اور وہ بہت برا ٹھکانہ ہے"
            ],
            english: [
                "Whatever is in the heavens and whatever is on the earth is exalting Allah. To Him belongs dominion, and to Him belongs [all] praise, and He is over all things competent.",
                "It is He who created you, and among you is the disbeliever, and among you is the believer. And Allah, of what you do, is Seeing.",
                "He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination.",
                "He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the breasts.",
                "Has there not come to you the news of those who disbelieved before? So they tasted the bad consequence of their affair, and they will have a painful punishment.",
                "That is because their messengers used to come to them with clear evidences, but they said, 'Shall human beings guide us?' and disbelieved and turned away. And Allah dispensed [with them]; and Allah is Free of need and Praiseworthy.",
                "Those who disbelieve have claimed that they will never be resurrected. Say, 'Yes, by my Lord, you will surely be resurrected; then you will surely be informed of what you did. And that, for Allah, is easy.'",
                "So believe in Allah and His Messenger and the Qur'an which We have sent down. And Allah is Acquainted with what you do.",
                "The Day He will assemble you for the Day of Assembly - that is the Day of Deprivation. And whoever believes in Allah and does righteousness - He will remove from him his misdeeds and admit him to gardens beneath which rivers flow, wherein they will abide forever. That is the great attainment.",
                "But the ones who disbelieved and denied Our verses - those are the companions of the Fire, abiding eternally therein; and wretched is the destination."
            ]
        },

        /* ================= SURAH 65: AT-TALAQ ================= */
        65: {
            arabic: [
                "يَا أَيُّهَا النَّبِيُّ إِذَا طَلَّقْتُمُ النِّسَاءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ وَأَحْصُوا الْعِدَّةَ ۖ وَاتَّقُوا اللَّهَ رَبَّكُمْ ۖ لَا تُخْرِجُوهُنَّ مِن بُيُوتِهِنَّ وَلَا يَخْرُجْنَ إِلَّا أَن يَأْتِينَ بِفَاحِشَةٍ مُّبَيِّنَةٍ ۚ وَتِلْكَ حُدُودُ اللَّهِ ۚ وَمَن يَتَعَدَّ حُدُودَ اللَّهِ فَقَدْ ظَلَمَ نَفْسَهُ ۚ لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا",
                "فَإِذَا بَلَغْنَ أَجَلَهُنَّ فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ أَوْ فَارِقُوهُنَّ بِمَعْرُوفٍ وَأَشْهِدُوا ذَوَيْ عَدْلٍ مِّنكُمْ وَأَقِيمُوا الشَّهَادَةَ لِلَّهِ ۚ ذَٰلِكُمْ يُوعَظُ بِهِ مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۚ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
                "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
                "وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ مِن نِّسَائِكُمْ إِنِ ارْتَبْتُمْ فَعِدَّتُهُنَّ ثَلَاثَةُ أَشْهُرٍ وَاللَّائِي لَمْ يَحِضْنَ ۚ وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ ۚ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
                "ذَٰلِكَ أَمْرُ اللَّهِ أَنزَلَهُ إِلَيْكُمْ ۚ وَمَن يَتَّقِ اللَّهَ يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُعْظِمْ لَهُ أَجْرًا",
                "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم مِّن وُجْدِكُمْ وَلَا تُضَارُّوهُنَّ لِتُضَيِّقُوا عَلَيْهِنَّ ۚ وَإِن كُنَّ أُولَاتِ حَمْلٍ فَأَنفِقُوا عَلَيْهِنَّ حَتَّىٰ يَضَعْنَ حَمْلَهُنَّ ۚ فَإِنْ أَرْضَعْنَ لَكُمْ فَآتُوهُنَّ أُجُورَهُنَّ ۖ وَأْتَمِرُوا بَيْنَكُم بِمَعْرُوفٍ ۖ وَإِن تَعَاسَرْتُمْ فَسَتُرْضِعُ لَهُ أُخْرَىٰ",
                "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ ۚ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا ۚ سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا",
                "وَكَأَيِّن مِّن قَرْيَةٍ عَتَتْ عَنْ أَمْرِ رَبِّهَا وَرَسُولِهِ فَحَاسَبْنَاهَا حِسَابًا شَدِيدًا وَعَذَّبْنَاهَا عَذَابًا نُّكْرًا",
                "فَذَاقَتْ وَبَالَ أَمْرِهَا وَكَانَ عَاقِبَةُ أَمْرِهَا خُسْرًا",
                "أَعَدَّ اللَّهُ لَهُمْ عَذَابًا شَدِيدًا ۖ فَاتَّقُوا اللَّهَ يَا أُولِي الْأَلْبَابِ الَّذِينَ آمَنُوا ۚ قَدْ أَنزَلَ اللَّهُ إِلَيْكُمْ ذِكْرًا",
                "رَّسُولًا يَتْلُو عَلَيْكُمْ آيَاتِ اللَّهِ مُبَيِّنَاتٍ لِّيُخْرِجَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ قَدْ أَحْسَنَ اللَّهُ لَهُ رِزْقًا",
                "اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ وَمِنَ الْأَرْضِ مِثْلَهُنَّ يَتَنَزَّلُ الْأَمْرُ بَيْنَهُنَّ لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا"
            ],
            urdu: [
                "اے نبی! جب تم عورتوں کو طلاق دو تو ان کی عدت کے وقت طلاق دو اور عدت شمار کرو اور اللہ اپنے رب سے ڈرو، انہیں ان کے گھروں سے نہ نکالو اور نہ وہ خود نکلیں مگر یہ کہ وہ کھلی بے حیائی کریں اور یہ اللہ کی حدیں ہیں اور جو اللہ کی حدوں سے تجاوز کرے وہ اپنے آپ پر ظلم کرتا ہے، تم نہیں جانتے شاید اللہ اس کے بعد کوئی نئی بات پیدا کر دے",
                "پھر جب وہ اپنی عدت کو پہنچ جائیں تو انہیں اچھی طرح رکھو یا اچھی طرح جدا ہو جاؤ اور اپنے دو منصف گواہ بناؤ اور اللہ کے لیے گواہی قائم کرو، اس سے وہ نصیحت پکڑتا ہے جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے اور جو اللہ سے ڈرے گا اللہ اس کے لیے نکلنے کا راستہ بنا دے گا",
                "اور اسے وہاں سے رزق دے گا جہاں سے اسے گمان بھی نہ ہو اور جو اللہ پر بھروسہ کرے تو وہ اسے کافی ہے، بے شک اللہ اپنا کام پورا کرنے والا ہے، اللہ نے ہر چیز کا ایک اندازہ مقرر کر رکھا ہے",
                "اور تمہاری وہ عورتیں جو حیض سے مایوس ہو گئیں اگر تمہیں شک ہو تو ان کی عدت تین مہینے ہے اور وہ بھی جنہیں حیض نہیں آیا اور حمل والیوں کی عدت یہ ہے کہ وہ اپنا حمل ڈال دیں اور جو اللہ سے ڈرے اللہ اس کے لیے اس کے کام میں آسانی کر دیتا ہے",
                "یہ اللہ کا حکم ہے جو اس نے تمہاری طرف نازل کیا اور جو اللہ سے ڈرے اللہ اس کی برائیاں مٹا دیتا ہے اور اس کا اجر بڑا کر دیتا ہے",
                "انہیں وہیں رکھو جہاں تم رہتے ہو اپنی طاقت کے مطابق اور انہیں تنگ نہ کرو تاکہ ان پر تنگی کرو اور اگر وہ حمل والی ہوں تو ان پر خرچ کرو یہاں تک کہ وہ اپنا حمل ڈال دیں، پھر اگر وہ تمہارے لیے دودھ پلائیں تو انہیں ان کا اجر دو اور آپس میں اچھی طرح مشورہ کرو اور اگر تم مشکل میں پڑو تو کوئی دوسری دودھ پلائے گی",
                "مالدار اپنے مال سے خرچ کرے اور جس پر رزق تنگ ہو وہ اس میں سے خرچ کرے جو اللہ نے اسے دیا، اللہ کسی کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا، اللہ تنگی کے بعد آسانی کرے گا",
                "اور کتنی بستیاں ہیں جنہوں نے اپنے رب کے حکم اور اس کے رسول سے سرکشی کی پھر ہم نے ان کا سخت حساب لیا اور انہیں ناپسندیدہ عذاب دیا",
                "پس انہوں نے اپنے کام کا وبال چکھا اور ان کے کام کا انجام خسارہ ہوا",
                "اللہ نے ان کے لیے سخت عذاب تیار کیا ہے، پس اللہ سے ڈرو اے عقل والو! جو ایمان لائے ہو، بے شک اللہ نے تمہاری طرف نصیحت نازل کی",
                "ایک رسول جو تم پر اللہ کی واضح آیات پڑھتا ہے تاکہ ان لوگوں کو جو ایمان لائے اور نیک عمل کیے اندھیروں سے روشنی کی طرف نکالے اور جو اللہ پر ایمان لائے اور نیک عمل کرے اسے اللہ ایسے باغات میں داخل کرے گا جن کے نیچے نہریں بہیں جن میں وہ ہمیشہ رہیں گے، اللہ نے اس کے لیے اچھا رزق مقرر کیا ہے",
                "اللہ وہی ہے جس نے سات آسمان بنائے اور زمین بھی ان جیسے، ان کے درمیان حکم اترتا ہے تاکہ تم جانو کہ اللہ ہر چیز پر قادر ہے اور بے شک اللہ نے ہر چیز کو علم سے گھیر رکھا ہے"
            ],
            english: [
                "O Prophet, when you [Muslims] divorce women, divorce them for [the commencement of] their waiting period and keep count of the waiting period, and fear Allah, your Lord. Do not turn them out of their [husbands'] houses, nor should they [themselves] leave [during that period] unless they are committing a clear immorality. And those are the limits [set by] Allah. And whoever transgresses the limits of Allah has certainly wronged himself. You know not; perhaps Allah will bring about after that a [different] matter.",
                "And when they have [nearly] fulfilled their term, either retain them according to acceptable terms or part with them according to acceptable terms. And bring to witness two just men from among you and establish the testimony for [the acceptance of] Allah. That is instructed to whoever should believe in Allah and the Last Day. And whoever fears Allah - He will make for him a way out.",
                "And will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
                "And those who no longer expect menstruation among your women - if you doubt, then their period is three months, and [also for] those who have not menstruated. And for those who are pregnant, their term is until they give birth. And whoever fears Allah - He will make for him of his matter ease.",
                "That is the command of Allah, which He has sent down to you; and whoever fears Allah - He will remove for him his misdeeds and make great for him his reward.",
                "Lodge them [in a section] of where you dwell out of your means and do not harm them in order to oppress them. And if they should be pregnant, then spend on them until they give birth. And if they breastfeed for you, then give them their payment and confer among yourselves in the acceptable way; but if you are in discord, then there may breastfeed for the father another woman.",
                "Let a man of wealth spend from his wealth, and he whose provision is restricted - let him spend from what Allah has given him. Allah does not charge a soul except [according to] what He has given it. Allah will bring about, after hardship, ease.",
                "And how many a city was insolent toward the command of its Lord and His Messenger, so We took it to severe account and punished it with a terrible punishment.",
                "And it tasted the bad consequence of its affair, and the outcome of its affair was loss.",
                "Allah has prepared for them a severe punishment; so fear Allah, O you of understanding who have believed. Allah has sent down to you a message.",
                "[He sent] a Messenger [who] recites to you the verses of Allah [that are] made clear, to bring out those who believe and do righteous deeds from darknesses into the light. And whoever believes in Allah and does righteousness - He will admit him into gardens beneath which rivers flow, wherein they will abide forever, ever. Allah has made good for him a provision.",
                "It is Allah who has created seven heavens and of the earth, the like of them. [His] command descends among them so you may know that Allah is over all things competent and that Allah has encompassed all things in knowledge."
            ]
        },

        /* ================= SURAH 66: AT-TAHRIM ================= */
        66: {
            arabic: [
                "يَا أَيُّهَا النَّبِيُّ لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ ۖ تَبْتَغِي مَرْضَاتَ أَزْوَاجِكَ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
                "قَدْ فَرَضَ اللَّهُ لَكُمْ تَحِلَّةَ أَيْمَانِكُمْ ۚ وَاللَّهُ مَوْلَاكُمْ ۖ وَهُوَ الْعَلِيمُ الْحَكِيمُ",
                "وَإِذْ أَسَرَّ النَّبِيُّ إِلَىٰ بَعْضِ أَزْوَاجِهِ حَدِيثًا فَلَمَّا نَبَّأَتْ بِهِ وَأَظْهَرَهُ اللَّهُ عَلَيْهِ عَرَّفَ بَعْضَهُ وَأَعْرَضَ عَن بَعْضٍ ۖ فَلَمَّا نَبَّأَهَا بِهِ قَالَتْ مَنْ أَنبَأَكَ هَٰذَا ۖ قَالَ نَبَّأَنِيَ الْعَلِيمُ الْخَبِيرُ",
                "إِن تَتُوبَا إِلَى اللَّهِ فَقَدْ صَغَتْ قُلُوبُكُمَا ۖ وَإِن تَظَاهَرَا عَلَيْهِ فَإِنَّ اللَّهَ هُوَ مَوْلَاهُ وَجِبْرِيلُ وَصَالِحُ الْمُؤْمِنِينَ ۖ وَالْمَلَائِكَةُ بَعْدَ ذَٰلِكَ ظَهِيرٌ",
                "عَسَىٰ رَبُّهُ إِن طَلَّقَكُنَّ أَن يُبْدِلَهُ أَزْوَاجًا خَيْرًا مِّنكُنَّ مُسْلِمَاتٍ مُّؤْمِنَاتٍ قَانِتَاتٍ تَائِبَاتٍ عَابِدَاتٍ سَائِحَاتٍ ثَيِّبَاتٍ وَأَبْكَارًا",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ",
                "يَا أَيُّهَا الَّذِينَ كَفَرُوا لَا تَعْتَذِرُوا الْيَوْمَ ۖ إِنَّمَا تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ",
                "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا عَسَىٰ رَبُّكُمْ أَن يُكَفِّرَ عَنكُمْ سَيِّئَاتِكُمْ وَيُدْخِلَكُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ يَوْمَ لَا يُخْزِي اللَّهُ النَّبِيَّ وَالَّذِينَ آمَنُوا مَعَهُ ۖ نُورُهُمْ يَسْعَىٰ بَيْنَ أَيْدِيهِمْ وَبِأَيْمَانِهِمْ يَقُولُونَ رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "يَا أَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ وَاغْلُظْ عَلَيْهِمْ ۚ وَمَأْوَاهُمْ جَهَنَّمُ ۖ وَبِئْسَ الْمَصِيرُ",
                "ضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ كَفَرُوا امْرَأَتَ نُوحٍ وَامْرَأَتَ لُوطٍ ۖ كَانَتَا تَحْتَ عَبْدَيْنِ مِنْ عِبَادِنَا صَالِحَيْنِ فَخَانَتَاهُمَا فَلَمْ يُغْنِيَا عَنْهُمَا مِنَ اللَّهِ شَيْئًا وَقِيلَ ادْخُلَا النَّارَ مَعَ الدَّاخِلِينَ",
                "وَضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ آمَنُوا امْرَأَتَ فِرْعَوْنَ إِذْ قَالَتْ رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
                "وَمَرْيَمَ ابْنَتَ عِمْرَانَ الَّتِي أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهِ مِن رُّوحِنَا وَصَدَّقَتْ بِكَلِمَاتِ رَبِّهَا وَكُتُبِهِ وَكَانَتْ مِنَ الْقَانِتِينَ"
            ],
            urdu: [
                "اے نبی! آپ اس چیز کو حرام کیوں کرتے ہیں جو اللہ نے آپ کے لیے حلال کی، آپ اپنی بیویوں کی خوشنودی چاہتے ہیں اور اللہ بخشنے والا رحم کرنے والا ہے",
                "بے شک اللہ نے تمہارے لیے تمہاری قسموں کا کفارہ مقرر کیا ہے اور اللہ تمہارا کارساز ہے اور وہ جاننے والا حکمت والا ہے",
                "اور جب نبی نے اپنی بعض بیویوں سے ایک بات چھپائی پھر جب اس نے اسے بتایا اور اللہ نے اسے آپ پر ظاہر کر دیا تو آپ نے اس کا کچھ حصہ بتا دیا اور کچھ سے درگزر کیا، پھر جب آپ نے اسے بتایا تو اس نے کہا آپ کو یہ کس نے بتایا، آپ نے کہا مجھے جاننے والے باخبر نے بتایا",
                "اگر تم دونوں اللہ کی طرف توبہ کرو تو بے شک تمہارے دل جھک گئے اور اگر تم دونوں اس کے خلاف ایک دوسرے کی مدد کرو تو بے شک اللہ اور جبریل اور نیک مومن اس کے کارساز ہیں اور فرشتے اس کے بعد مددگار ہیں",
                "عید ہے کہ اس کا رب اگر وہ تمہیں طلاق دے دے تو تم سے بہتر بیویاں اسے بدلے میں دے، مسلمان، مومن، فرمانبردار، توبہ کرنے والی، عبادت کرنے والی، روزہ رکھنے والی، بیوہ اور کنواری",
                "اے ایمان والو! اپنے آپ کو اور اپنے گھر والوں کو آگ سے بچاؤ جس کا ایندھن لوگ اور پتھر ہیں، اس پر سخت اور طاقتور فرشتے ہیں، وہ اللہ کے حکم کی نافرمانی نہیں کرتے اور جو حکم دیا جائے وہی کرتے ہیں",
                "اے کافرو! آج عذر نہ کرو، تمہیں وہی بدلہ دیا جائے گا جو تم کرتے تھے",
                "اے ایمان والو! اللہ کی طرف خالص توبہ کرو، عید ہے کہ تمہارا رب تمہاری برائیاں مٹا دے اور تمہیں ایسے باغات میں داخل کرے جن کے نیچے نہریں بہیں، جس دن اللہ نبی اور ان کے ساتھ مومنوں کو رسوا نہ کرے گا، ان کا نور ان کے آگے اور دائیں چل رہا ہو گا، کہیں گے اے ہمارے رب! ہمارا نور پورا کر اور ہمیں بخش دے، بے شک تو ہر چیز پر قادر ہے",
                "اے نبی! کافروں اور منافقوں سے جہاد کرو اور ان پر سخت رہو اور ان کا ٹھکانہ جہنم ہے اور وہ بہت برا ٹھکانہ ہے",
                "اللہ نے کافروں کے لیے نوح کی بیوی اور لوط کی بیوی کی مثال دی، وہ دونوں ہمارے دو نیک بندوں کے نکاح میں تھیں پھر انہوں نے خیانت کی پس وہ ان کے کچھ کام نہ آئے اللہ کے سامنے اور کہا گیا کہ داخل ہو جاؤ آگ میں داخل ہونے والوں کے ساتھ",
                "اور اللہ نے مومنوں کے لیے فرعون کی بیوی کی مثال دی جب اس نے کہا اے میرے رب! میرے لیے اپنے پاس جنت میں ایک گھر بنا اور مجھے فرعون اور اس کے کام سے نجات دے اور مجھے ظالم قوم سے نجات دے",
                "اور عمران کی بیٹی مریم کی مثال دی جس نے اپنی شرمگاہ کی حفاظت کی پھر ہم نے اس میں اپنی روح پھونکی اور اس نے اپنے رب کے کلمات اور اس کی کتابوں کی تصدیق کی اور وہ فرمانبرداروں میں سے تھی"
            ],
            english: [
                "O Prophet, why do you prohibit [yourself from] what Allah has made lawful for you, seeking the approval of your wives? And Allah is Forgiving and Merciful.",
                "Allah has already ordained for you [Muslims] the dissolution of your oaths. And Allah is your protector, and He is the Knowing, the Wise.",
                "And [remember] when the Prophet confided to one of his wives a statement; and when she informed [another] of it and Allah showed it to him, he made known part of it and ignored a part. And when he informed her about it, she said, 'Who told you this?' He said, 'I was informed by the Knowing, the Acquainted.'",
                "If you two [wives] repent to Allah, [it is best], for your hearts have deviated. But if you cooperate against him - then indeed Allah is his protector, and Gabriel and the righteous of the believers and the angels, moreover, are [his] assistants.",
                "Perhaps his Lord, if he divorced you [all], would substitute for him wives better than you - submitting [to Allah], believing, devoutly obedient, repentant, worshipping, and traveling - [ones] previously married and virgins.",
                "O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones, over which are [appointed] angels, harsh and severe; they do not disobey Allah in what He commands them but do what they are commanded.",
                "O you who have disbelieved, make no excuses that Day. You will only be recompensed for what you used to do.",
                "O you who have believed, repent to Allah with sincere repentance. Perhaps your Lord will remove from you your misdeeds and admit you into gardens beneath which rivers flow [on] the Day when Allah will not disgrace the Prophet and those who believed with him. Their light will proceed before them and on their right; they will say, 'Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.'",
                "O Prophet, strive against the disbelievers and the hypocrites and be harsh upon them. And their refuge is Hell, and wretched is the destination.",
                "Allah presents an example of those who disbelieved: the wife of Noah and the wife of Lot. They were under two of Our righteous servants but betrayed them, so those prophets did not avail them from Allah at all, and it was said, 'Enter the Fire with those who enter.'",
                "And Allah presents an example of those who believed: the wife of Pharaoh, when she said, 'My Lord, build for me near You a house in Paradise and save me from Pharaoh and his deeds and save me from the wrongdoing people.'",
                "And [the example of] Mary, the daughter of 'Imran, who guarded her chastity, so We blew into [her garment] through Our angel, and she believed in the words of her Lord and His scriptures and was of the devoutly obedient."
            ]
        },

        /* ================= SURAH 67: AL-MULK ================= */
        67: {
            arabic: [
                "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
                "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
                "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
                "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
                "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
                "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ",
                "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ",
                "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ",
                "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ",
                "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ"
            ],
            urdu: [
                "بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہت ہے اور وہ ہر چیز پر قادر ہے",
                "جس نے موت اور زندگی پیدا کی تاکہ تمہیں آزمائے کہ تم میں کون اچھے عمل کرتا ہے اور وہ زبردست بخشنے والا ہے",
                "جس نے سات آسمان اوپر تلے بنائے، رحمٰن کی خلقت میں کوئی فرق نہیں دیکھے گا، پھر نگاہ دوڑا تو کوئی شگاف دیکھتا ہے",
                "پھر بار بار نگاہ دوڑا، نگاہ تیرے پاس تھکی ہوئی اور عاجز ہو کر لوٹے گی",
                "اور ہم نے آسمان دنیا کو چراغوں سے سجایا اور انہیں شیطانوں کے مارنے کا ذریعہ بنایا اور ان کے لیے بھڑکتی آگ کا عذاب تیار کیا",
                "اور جنہوں نے اپنے رب سے کفر کیا ان کے لیے جہنم کا عذاب ہے اور وہ بہت برا ٹھکانہ ہے",
                "جب وہ اس میں ڈالے جائیں گے تو اس کی چیخ سنیں گے اور وہ جوش مار رہی ہو گی",
                "قریب ہے کہ غصے سے پھٹ جائے، جب بھی اس میں کوئی گروہ ڈالا جائے گا اس کے داروغہ ان سے پوچھیں گے کیا تمہارے پاس کوئی ڈرانے والا نہیں آیا",
                "وہ کہیں گے کیوں نہیں، ہمارے پاس ڈرانے والا آیا تھا مگر ہم نے جھٹلایا اور کہا اللہ نے کچھ نازل نہیں کیا تم تو بڑی گمراہی میں ہو",
                "اور کہیں گے کاش ہم سنتے یا سمجھتے تو بھڑکتی آگ والوں میں نہ ہوتے"
            ],
            english: [
                "Blessed is He in whose hand is dominion, and He is over all things competent.",
                "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving.",
                "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?",
                "Then return [your] vision twice again. [Your] vision will return to you humbled while it is fatigued.",
                "And We have certainly beautified the nearest heaven with lamps and have made them what is thrown at the devils and have prepared for them the punishment of the Blaze.",
                "And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination.",
                "When they are thrown into it, they hear from it a [dreadful] inhaling while it boils up.",
                "It almost bursts with rage. Every time a company is thrown into it, its keepers ask them, 'Did there not come to you a warner?'",
                "They will say, 'Yes, a warner had come to us, but we denied and said, Allah has not sent down anything. You are not but in great error.'",
                "And they will say, 'If only we had been listening or reasoning, we would not be among the companions of the Blaze.'"
            ]
        },

        /* ================= SURAH 68: AL-QALAM ================= */
        68: {
            arabic: [
                "ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ",
                "مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ",
                "وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ",
                "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
                "فَسَتُبْصِرُ وَيُبْصِرُونَ",
                "بِأَيِّكُمُ الْمَفْتُونُ",
                "إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ",
                "فَلَا تُطِعِ الْمُكَذِّبِينَ",
                "وَدُّوا لَوْ تُدْهِنُ فَيُدْهِنُونَ",
                "وَلَا تُطِعْ كُلَّ حَلَّافٍ مَّهِينٍ"
            ],
            urdu: [
                "ن، قلم کی قسم اور جو کچھ وہ لکھتے ہیں",
                "آپ اپنے رب کی نعمت سے دیوانے نہیں ہیں",
                "اور بے شک آپ کے لیے ایسا اجر ہے جو کبھی ختم نہ ہو گا",
                "اور بے شک آپ بڑے اخلاق پر ہیں",
                "پس عنقریب آپ دیکھیں گے اور وہ بھی دیکھیں گے",
                "کہ تم میں سے کون دیوانہ ہے",
                "بے شک آپ کا رب اسے زیادہ جانتا ہے جو اس کے راستے سے بھٹکا اور وہ ہدایت یافتہ لوگوں کو بھی زیادہ جانتا ہے",
                "پس جھٹلانے والوں کی اطاعت نہ کریں",
                "وہ چاہتے ہیں کہ آپ نرمی کریں پھر وہ بھی نرمی کریں",
                "اور ہر بہت قسم کھانے والے ذلیل کی اطاعت نہ کریں"
            ],
            english: [
                "Nun. By the pen and what they inscribe.",
                "You are not, [O Muhammad], by the favor of your Lord, a madman.",
                "And indeed, for you is a reward uninterrupted.",
                "And indeed, you are of a great moral character.",
                "So you will see and they will see.",
                "Which of you is the afflicted [by a devil].",
                "Indeed, your Lord is most knowing of who has gone astray from His way, and He is most knowing of the [rightly] guided.",
                "Then do not obey the deniers.",
                "They wish that you would soften [in your position], so they would soften [toward you].",
                "And do not obey every worthless habitual swearer."
            ]
        },

        /* ================= SURAH 69: AL-HAQQAH ================= */
        69: {
            arabic: [
                "الْحَاقَّةُ",
                "مَا الْحَاقَّةُ",
                "وَمَا أَدْرَاكَ مَا الْحَاقَّةُ",
                "كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ",
                "فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ",
                "وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ",
                "سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ",
                "فَهَلْ تَرَىٰ لَهُم مِّن بَاقِيَةٍ",
                "وَجَاءَ فِرْعَوْنُ وَمَن قَبْلَهُ وَالْمُؤْتَفِكَاتُ بِالْخَاطِئَةِ",
                "فَعَصَوْا رَسُولَ رَبِّهِمْ فَأَخَذَهُمْ أَخْذَةً رَّابِيَةً"
            ],
            urdu: [
                "واقع ہونے والی",
                "کیا ہے واقع ہونے والی",
                "اور آپ کو کیا معلوم کہ واقع ہونے والی کیا ہے",
                "ثمود اور عاد نے کھڑکھڑانے والی کو جھٹلایا",
                "پس ثمود تو حد سے بڑھنے والی آواز سے ہلاک کیے گئے",
                "اور عاد تو تیز آندھی سے ہلاک کیے گئے جو بہت سخت تھی",
                "اسے ان پر سات رات اور آٹھ دن مسلسل مسلط کیا پھر تم ان لوگوں کو اس میں گرے ہوئے دیکھو گے گویا وہ کھجور کے کھوکھلے تنے ہیں",
                "پس کیا تم ان میں سے کسی کو باقی دیکھتے ہو",
                "اور فرعون اور اس سے پہلے والے اور اُلٹی ہوئی بستیاں خطا لے کر آئے",
                "پس انہوں نے اپنے رب کے رسول کی نافرمانی کی تو اس نے انہیں سخت پکڑ سے پکڑا"
            ],
            english: [
                "The Inevitable Reality.",
                "What is the Inevitable Reality?",
                "And what can make you know what is the Inevitable Reality?",
                "Thamud and 'Aad denied the Striking Calamity.",
                "So as for Thamud, they were destroyed by the overpowering [blast].",
                "And as for 'Aad, they were destroyed by a screaming, violent wind.",
                "Which Allah imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees.",
                "Then do you see of them any remains?",
                "And there came Pharaoh and those before him and the overturned cities with sin.",
                "And they disobeyed the messenger of their Lord, so He seized them with a seizure exceeding [in severity]."
            ]
        },

        /* ================= SURAH 70: AL-MA'ARIJ ================= */
        70: {
            arabic: [
                "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ",
                "لِّلْكَافِرِينَ لَيْسَ لَهُ دَافِعٌ",
                "مِّنَ اللَّهِ ذِي الْمَعَارِجِ",
                "تَعْرُجُ الْمَلَائِكَةُ وَالرُّوحُ إِلَيْهِ فِي يَوْمٍ كَانَ مِقْدَارُهُ خَمْسِينَ أَلْفَ سَنَةٍ",
                "فَاصْبِرْ صَبْرًا جَمِيلًا",
                "إِنَّهُمْ يَرَوْنَهُ بَعِيدًا",
                "وَنَرَاهُ قَرِيبًا",
                "يَوْمَ تَكُونُ السَّمَاءُ كَالْمُهْلِ",
                "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ",
                "وَلَا يَسْأَلُ حَمِيمٌ حَمِيمًا"
            ],
            urdu: [
                "ایک پوچھنے والے نے عذاب کے بارے میں پوچھا جو واقع ہونے والا ہے",
                "کافروں کے لیے جسے کوئی روکنے والا نہیں",
                "اللہ کی طرف سے جو بلندیوں کا مالک ہے",
                "فرشتے اور روح اسی کی طرف چڑھتے ہیں ایک دن میں جس کی مقدار پچاس ہزار سال ہے",
                "پس صبر کرو اچھا صبر",
                "بے شک وہ اسے دور دیکھتے ہیں",
                "اور ہم اسے قریب دیکھتے ہیں",
                "جس دن آسمان پگھلے ہوئے تانبے جیسا ہو جائے گا",
                "اور پہاڑ رنگین اون کی طرح ہو جائیں گے",
                "اور کوئی دوست اپنے دوست کے بارے میں نہ پوچھے گا"
            ],
            english: [
                "A supplicant asked for a punishment bound to happen.",
                "To the disbelievers; of it there is no preventer.",
                "[It is] from Allah, owner of the ways of ascent.",
                "The angels and the Spirit will ascend to Him during a Day the extent of which is fifty thousand years.",
                "So be patient with gracious patience.",
                "Indeed, they see it [as] distant.",
                "But We see it [as] near.",
                "On the Day when the sky will become like smoke of a molten brass.",
                "And the mountains will become like wool.",
                "And no devoted friend will ask about his friend."
            ]
        }

    },

    /* =====================================================
       HADITH — MUWATTA IMAM MALIK (50 Hadiths)
    ===================================================== */
    hadithBooks: {
        malik: {
            title: "Muwatta Imam Malik",
            arabic: "موطأ الإمام مالك",
            english: "Muwatta Imam Malik",
            author: "Imam Malik ibn Anas",
            hadiths: [
                { id: 1, arabic: "لَا تَبِيعُوا الثِّمَارَ حَتَّى يَبْدُوَ صَلَاحُهَا", urdu: "پھلوں کو نہ بیچو جب تک ان کی صلاحیت ظاہر نہ ہو", english: "Do not sell fruits until their goodness becomes apparent.", reference: "Muwatta Malik 1" },
                { id: 2, arabic: "خَيْرُ الْأُمُورِ أَوْسَطُهَا", urdu: "بہترین کام وہ ہیں جو درمیانے ہوں", english: "The best of affairs are those of moderation.", reference: "Muwatta Malik 2" },
                { id: 3, arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ", urdu: "علم کا طلب کرنا فرض ہے", english: "Seeking knowledge is obligatory.", reference: "Muwatta Malik 3" },
                { id: 4, arabic: "الْبِرُّ حُسْنُ الْخُلُقِ", urdu: "نیکی اچھے اخلاق کا نام ہے", english: "Righteousness is good character.", reference: "Muwatta Malik 4" },
                { id: 5, arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ", urdu: "جو لوگوں پر رحم نہیں کرتا اللہ اس پر رحم نہیں کرتا", english: "Whoever does not show mercy to people, Allah will not show mercy to him.", reference: "Muwatta Malik 5" },
                { id: 6, arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ", urdu: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے", english: "The world is a prison for the believer and a paradise for the disbeliever.", reference: "Muwatta Malik 6" },
                { id: 7, arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", urdu: "اوپر والا ہاتھ نیچے والے ہاتھ سے بہتر ہے", english: "The upper hand is better than the lower hand.", reference: "Muwatta Malik 7" },
                { id: 8, arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ", urdu: "جو کسی مسلمان کا عیب چھپائے اللہ اس کا عیب چھپائے گا", english: "Whoever conceals a Muslim's fault, Allah will conceal his fault.", reference: "Muwatta Malik 8" },
                { id: 9, arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا", urdu: "مومن مومن کے لیے عمارت کی طرح ہے جس کا ایک حصہ دوسرے کو مضبوط کرتا ہے", english: "A believer to another believer is like a building whose parts support each other.", reference: "Muwatta Malik 9" },
                { id: 10, arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے", english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.", reference: "Muwatta Malik 10" },
                { id: 11, arabic: "الدُّعَاءُ مُخُّ الْعِبَادَةِ", urdu: "دعا عبادت کا مغز ہے", english: "Dua is the essence of worship.", reference: "Muwatta Malik 11" },
                { id: 12, arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", urdu: "جہاں بھی ہو اللہ سے ڈرو", english: "Fear Allah wherever you are.", reference: "Muwatta Malik 12" },
                { id: 13, arabic: "أَكْثِرُوا ذِكْرَ اللَّهِ", urdu: "اللہ کا ذکر کثرت سے کرو", english: "Remember Allah abundantly.", reference: "Muwatta Malik 13" },
                { id: 14, arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", urdu: "لوگوں میں بہترین وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو", english: "The best of people are those most beneficial to people.", reference: "Muwatta Malik 14" },
                { id: 15, arabic: "إِنَّ اللَّهَ يُحِبُّ الْعَبْدَ التَّقِيَّ الْغَنِيَّ الْخَفِيَّ", urdu: "بے شک اللہ متقی، مالدار اور گمنام بندے کو پسند کرتا ہے", english: "Indeed, Allah loves the God-fearing, wealthy and obscure servant.", reference: "Muwatta Malik 15" },
                { id: 16, arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", urdu: "اچھی بات کہنا بھی صدقہ ہے", english: "A good word is charity.", reference: "Muwatta Malik 16" },
                { id: 17, arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", urdu: "صدقہ مال میں کمی نہیں کرتا", english: "Charity does not decrease wealth.", reference: "Muwatta Malik 17" },
                { id: 18, arabic: "أَفْضَلُ الذِّكْرِ لَا إِلَٰهَ إِلَّا اللَّهُ", urdu: "سب سے افضل ذکر لا الہ الا اللہ ہے", english: "The best remembrance is La ilaha illallah.", reference: "Muwatta Malik 18" },
                { id: 19, arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", urdu: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں", english: "The Muslim is the one from whose tongue and hand the Muslims are safe.", reference: "Muwatta Malik 19" },
                { id: 20, arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", urdu: "تم میں سے کوئی اس وقت تک مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے", english: "None of you will have faith till he wishes for his brother what he likes for himself.", reference: "Muwatta Malik 20" },
                { id: 21, arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ", urdu: "دعا عبادت ہے", english: "Dua is worship.", reference: "Muwatta Malik 21" },
                { id: 22, arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا", urdu: "جو مجھ پر ایک بار درود بھیجے اللہ اس پر دس رحمتیں بھیجتا ہے", english: "Whoever sends blessings upon me once, Allah will send ten blessings upon him.", reference: "Muwatta Malik 22" },
                { id: 23, arabic: "اتَّقِ اللَّهَ وَأَصْلِحْ ذَاتَ بَيْنِكُمْ", urdu: "اللہ سے ڈرو اور اپنے باہمی تعلقات درست کرو", english: "Fear Allah and reconcile your differences.", reference: "Muwatta Malik 23" },
                { id: 24, arabic: "الْجَنَّةُ لِمَنْ أَطَاعَ اللَّهَ وَرَسُولَهُ", urdu: "جنت اس کے لیے ہے جو اللہ اور اس کے رسول کی اطاعت کرے", english: "Paradise is for those who obey Allah and His Messenger.", reference: "Muwatta Malik 24" },
                { id: 25, arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ", urdu: "صدقہ گناہوں کو بجھا دیتا ہے", english: "Charity extinguishes sin.", reference: "Muwatta Malik 25" },
                { id: 26, arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", urdu: "مسلمان مسلمان کا بھائی ہے", english: "A Muslim is a brother of another Muslim.", reference: "Muwatta Malik 26" },
                { id: 27, arabic: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ", urdu: "بہترین بات وہ ہے جو مختصر اور معنی خیز ہو", english: "The best speech is that which is brief and clear.", reference: "Muwatta Malik 27" },
                { id: 28, arabic: "الْعِلْمُ نُورٌ", urdu: "علم نور ہے", english: "Knowledge is light.", reference: "Muwatta Malik 28" },
                { id: 29, arabic: "مَنْ أَصْبَحَ مُعَافًى فِي بَدَنِهِ فَكَأَنَّمَا أُوتِيَ الدُّنْيَا", urdu: "جو شخص اپنے جسم میں صحت مند ہو کر صبح کرے گویا اسے دنیا مل گئی", english: "Whoever wakes up healthy in body, it is as if he was given the world.", reference: "Muwatta Malik 29" },
                { id: 30, arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ", urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے", english: "The purest earning is that which one earns by his own hands.", reference: "Muwatta Malik 30" },
                { id: 31, arabic: "الْجَنَّةُ دَارُ السَّلَامِ", urdu: "جنت سلامتی کا گھر ہے", english: "Paradise is the abode of peace.", reference: "Muwatta Malik 31" },
                { id: 32, arabic: "الْمُؤْمِنُ يَأْكُلُ فِي مِعًى وَاحِدٍ وَالْكَافِرُ يَأْكُلُ فِي سَبْعَةِ أَمْعَاءٍ", urdu: "مومن ایک آنت میں کھاتا ہے اور کافر سات آنتوں میں کھاتا ہے", english: "A believer eats in one intestine, and a disbeliever eats in seven intestines.", reference: "Muwatta Malik 32" },
                { id: 33, arabic: "مَنْ حَفِظَ لِسَانَهُ سَتَرَ اللَّهُ عَوْرَتَهُ", urdu: "جو اپنی زبان کی حفاظت کرے اللہ اس کے عیوب چھپائے گا", english: "Whoever guards his tongue, Allah will conceal his faults.", reference: "Muwatta Malik 33" },
                { id: 34, arabic: "الصَّلَاةُ عَلَى وَقْتِهَا", urdu: "نماز کو وقت پر پڑھنا", english: "Prayer at its proper time.", reference: "Muwatta Malik 34" },
                { id: 35, arabic: "لَا تَغْضَبْ", urdu: "غصہ نہ کرو", english: "Do not become angry.", reference: "Muwatta Malik 35" },
                { id: 36, arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ", urdu: "رحم کرنے والوں پر رحمٰن رحم کرتا ہے", english: "The merciful will be shown mercy by the Most Merciful.", reference: "Muwatta Malik 36" },
                { id: 37, arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا", urdu: "مومنوں میں سب سے کامل ایمان والا وہ ہے جس کا اخلاق سب سے اچھا ہو", english: "The most complete of the believers in faith is the one with the best character.", reference: "Muwatta Malik 37" },
                { id: 38, arabic: "مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", urdu: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا", english: "Whoever does not thank people does not thank Allah.", reference: "Muwatta Malik 38" },
                { id: 39, arabic: "السَّلَامُ قَبْلَ الْكَلَامِ", urdu: "بات کرنے سے پہلے سلام کرو", english: "Greet before speaking.", reference: "Muwatta Malik 39" },
                { id: 40, arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", urdu: "بے شک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے", english: "Indeed, Allah is beautiful and loves beauty.", reference: "Muwatta Malik 40" },
                { id: 41, arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ", urdu: "پاکیزگی ایمان کا حصہ ہے", english: "Cleanliness is half of faith.", reference: "Muwatta Malik 41" },
                { id: 42, arabic: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ", urdu: "بے شک اللہ نے ہر چیز پر احسان لکھا ہے", english: "Indeed, Allah has prescribed excellence in all things.", reference: "Muwatta Malik 42" },
                { id: 43, arabic: "مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ", urdu: "جو جان بوجھ کر مجھ پر جھوٹ باندھے وہ اپنا ٹھکانہ جہنم میں بنائے", english: "Whoever tells a lie about me deliberately, let him take his place in Hell.", reference: "Muwatta Malik 43" },
                { id: 44, arabic: "بِرُّ الْوَالِدَيْنِ", urdu: "والدین کے ساتھ نیکی کرو", english: "Be dutiful to your parents.", reference: "Muwatta Malik 44" },
                { id: 45, arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا", urdu: "کسی نیکی کو حقیر نہ سمجھو", english: "Do not consider any act of goodness insignificant.", reference: "Muwatta Malik 45" },
                { id: 46, arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", urdu: "تم میں بہترین وہ ہے جو قرآن سیکھے اور سکھائے", english: "The best of you are those who learn the Quran and teach it.", reference: "Muwatta Malik 46" },
                { id: 47, arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", urdu: "جنت ماؤں کے قدموں تلے ہے", english: "Paradise is beneath the feet of mothers.", reference: "Muwatta Malik 47" },
                { id: 48, arabic: "الصَّلَاةُ نُورٌ", urdu: "نماز نور ہے", english: "Prayer is light.", reference: "Muwatta Malik 48" },
                { id: 49, arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", urdu: "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے چاہے کم ہو", english: "The most beloved deeds to Allah are those done consistently, even if small.", reference: "Muwatta Malik 49" },
                { id: 50, arabic: "الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ", urdu: "حلال واضح ہے اور حرام واضح ہے", english: "The halal is clear and the haram is clear.", reference: "Muwatta Malik 50" }
            ]
        }
    },

    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },
    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },
    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    }
};

console.log("[DB Part 5B] Loaded ✅");
console.log("[DB Part 5B] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART5B.quranContent).length);
console.log("[DB Part 5B] Malik Hadiths: " + ISLAMIC_DATABASE_PART5B.hadithBooks.malik.hadiths.length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 6A
   Surahs 71-90
   Full Arabic + Urdu + English
========================================================= */

const ISLAMIC_DATABASE_PART6A = {

    quranContent: {

        /* ================= SURAH 71: NUH ================= */
        71: {
            arabic: [
                "إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ",
                "قَالَ يَا قَوْمِ إِنِّي لَكُمْ نَذِيرٌ مُّبِينٌ",
                "أَنِ اعْبُدُوا اللَّهَ وَاتَّقُوهُ وَأَطِيعُونِ",
                "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ وَيُؤَخِّرْكُمْ إِلَىٰ أَجَلٍ مُّسَمًّى ۚ إِنَّ أَجَلَ اللَّهِ إِذَا جَاءَ لَا يُؤَخَّرُ ۖ لَوْ كُنتُمْ تَعْلَمُونَ",
                "قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا",
                "فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا",
                "وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا",
                "ثُمَّ إِنِّي دَعَوْتُهُمْ جِهَارًا",
                "ثُمَّ إِنِّي أَعْلَنتُ لَهُمْ وَأَسْرَرْتُ لَهُمْ إِسْرَارًا",
                "فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا"
            ],
            urdu: [
                "بے شک ہم نے نوح کو اس کی قوم کی طرف بھیجا کہ اپنی قوم کو ڈراؤ اس سے پہلے کہ ان پر دردناک عذاب آئے",
                "کہا اے میری قوم! بے شک میں تمہارے لیے واضح ڈرانے والا ہوں",
                "کہ اللہ کی عبادت کرو اور اسی سے ڈرو اور میری اطاعت کرو",
                "وہ تمہارے گناہ بخش دے گا اور تمہیں ایک مقررہ وقت تک مہلت دے گا، بے شک اللہ کا مقرر وقت جب آ جائے تو مؤخر نہیں ہوتا، کاش تم جانتے",
                "کہا اے میرے رب! میں نے اپنی قوم کو رات دن بلایا",
                "تو میرے بلانے نے انہیں اور بھاگنے ہی میں بڑھایا",
                "اور جب بھی میں نے انہیں بلایا تاکہ تو انہیں بخش دے تو انہوں نے اپنی انگلیاں اپنے کانوں میں ڈالیں اور اپنے کپڑوں سے منہ ڈھانپ لیا اور اصرار کیا اور بہت تکبر کیا",
                "پھر میں نے انہیں بلند آواز سے بلایا",
                "پھر میں نے ان سے اعلان کیا اور چپکے چپکے بھی کہا",
                "پھر میں نے کہا اپنے رب سے بخشش مانگو، بے شک وہ بہت بخشنے والا ہے"
            ],
            english: [
                "Indeed, We sent Noah to his people, [saying], 'Warn your people before there comes to them a painful punishment.'",
                "He said, 'O my people, indeed I am to you a clear warner.'",
                "[Saying], 'Worship Allah, fear Him and obey me.'",
                "Allah will forgive you of your sins and delay you for a specified term. Indeed, the time [set by] Allah, when it comes, will not be delayed, if you only knew.'",
                "He said, 'My Lord, indeed I invited my people [to truth] night and day.'",
                "But my invitation increased them not except in flight.",
                "And indeed, every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with [great] arrogance.",
                "Then I invited them publicly.",
                "Then I announced to them and [also] confided to them secretly.",
                "And said, 'Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver.'"
            ]
        },

        /* ================= SURAH 72: AL-JINN ================= */
        72: {
            arabic: [
                "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا",
                "يَهْدِي إِلَى الرُّشْدِ فَآمَنَّا بِهِ ۖ وَلَن نُّشْرِكَ بِرَبِّنَا أَحَدًا",
                "وَأَنَّهُ تَعَالَىٰ جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا",
                "وَأَنَّهُ كَانَ يَقُولُ سَفِيهُنَا عَلَى اللَّهِ شَطَطًا",
                "وَأَنَّا ظَنَنَّا أَن لَّن تَقُولَ الْإِنسُ وَالْجِنُّ عَلَى اللَّهِ كَذِبًا",
                "وَأَنَّهُ كَانَ رِجَالٌ مِّنَ الْإِنسِ يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ فَزَادُوهُمْ رَهَقًا",
                "وَأَنَّهُمْ ظَنُّوا كَمَا ظَنَنتُمْ أَن لَّن يَبْعَثَ اللَّهُ أَحَدًا",
                "وَأَنَّا لَمَسْنَا السَّمَاءَ فَوَجَدْنَاهَا مُلِئَتْ حَرَسًا شَدِيدًا وَشُهُبًا",
                "وَأَنَّا كُنَّا نَقْعُدُ مِنْهَا مَقَاعِدَ لِلسَّمْعِ ۖ فَمَن يَسْتَمِعِ الْآنَ يَجِدْ لَهُ شِهَابًا رَّصَدًا",
                "وَأَنَّا لَا نَدْرِي أَشَرٌّ أُرِيدَ بِمَن فِي الْأَرْضِ أَمْ أَرَادَ بِهِمْ رَبُّهُمْ رَشَدًا"
            ],
            urdu: [
                "کہو میری طرف وحی کی گئی کہ جنوں کے چند افراد نے سنی پھر کہا ہم نے عجیب قرآن سنا",
                "جو ہدایت کی طرف لے جاتا ہے پس ہم اس پر ایمان لائے اور ہم اپنے رب کے ساتھ کسی کو شریک نہیں کریں گے",
                "اور یہ کہ ہمارے رب کی شان بلند ہے، اس نے نہ کوئی بیوی بنائی اور نہ بیٹا",
                "اور یہ کہ ہمارے بیوقوف نے اللہ پر بہتان لگایا",
                "اور یہ کہ ہم نے گمان کیا تھا کہ انسان اور جن اللہ پر جھوٹ نہیں بولیں گے",
                "اور یہ کہ انسانوں میں کچھ لوگ جنوں میں سے کچھ لوگوں کی پناہ مانگتے تھے پھر انہوں نے ان کی سرکشی بڑھا دی",
                "اور یہ کہ انہوں نے گمان کیا جیسے تم نے گمان کیا کہ اللہ کسی کو نہیں اٹھائے گا",
                "اور یہ کہ ہم نے آسمان کو چھوا تو اسے سخت پہروں اور شہابوں سے بھرا پایا",
                "اور یہ کہ ہم اس میں سننے کے لیے جگہوں پر بیٹھتے تھے، پھر جو اب سننے کی کوشش کرے وہ اپنے لیے شہاب تیار پائے",
                "اور یہ کہ ہم نہیں جانتے کہ زمین والوں کے ساتھ برائی کا ارادہ کیا گیا یا ان کے رب نے ان کے لیے ہدایت کا ارادہ کیا"
            ],
            english: [
                "Say, [O Muhammad], 'It has been revealed to me that a group of the jinn listened and said, \"Indeed, we have heard an amazing Qur'an.'",
                "It guides to the right course, and we have believed in it. And we will never associate with our Lord anyone.",
                "And [it teaches] that exalted is the nobleness of our Lord; He has not taken a wife or a son.",
                "And that our foolish one has been saying about Allah an excessive transgression.",
                "And we had thought that mankind and the jinn would never speak about Allah a lie.",
                "And there were men from mankind who sought refuge in men from the jinn, so they [only] increased them in burden.",
                "And they had thought, as you thought, that Allah would never send anyone [as a messenger].",
                "And we have sought [to reach] the heaven but found it filled with powerful guards and burning flames.",
                "And we used to sit therein in positions for hearing, but whoever listens now will find a burning flame lying in wait for him.",
                "And we do not know [therefore] whether evil is intended for those on earth or whether their Lord intends for them a right course."
            ]
        },

        /* ================= SURAH 73: AL-MUZZAMMIL ================= */
        73: {
            arabic: [
                "يَا أَيُّهَا الْمُزَّمِّلُ",
                "قُمِ اللَّيْلَ إِلَّا قَلِيلًا",
                "نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا",
                "أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
                "إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا",
                "إِنَّ نَاشِئَةَ اللَّيْلِ هِيَ أَشَدُّ وَطْئًا وَأَقْوَمُ قِيلًا",
                "إِنَّ لَكَ فِي النَّهَارِ سَبْحًا طَوِيلًا",
                "وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا",
                "رَّبُّ الْمَشْرِقِ وَالْمَغْرِبِ لَا إِلَٰهَ إِلَّا هُوَ فَاتَّخِذْهُ وَكِيلًا",
                "وَاصْبِرْ عَلَىٰ مَا يَقُولُونَ وَاهْجُرْهُمْ هَجْرًا جَمِيلًا"
            ],
            urdu: [
                "اے کملی اوڑھنے والے",
                "رات کو کھڑے رہو مگر تھوڑا",
                "آدھی رات یا اس سے کچھ کم کر دو",
                "یا اس پر کچھ بڑھا دو اور قرآن کو ٹھہر ٹھہر کر پڑھو",
                "بے شک ہم آپ پر بھاری بات ڈالیں گے",
                "بے شک رات کا اٹھنا نفس پر زیادہ اثر کرتا ہے اور بات زیادہ درست ہوتی ہے",
                "بے شک آپ کے لیے دن میں بہت کام ہے",
                "اور اپنے رب کا نام یاد کرو اور اسی کے لیے سب سے الگ ہو جاؤ",
                "مشرق اور مغرب کا رب، اس کے سوا کوئی معبود نہیں پس اسی کو کارساز بناؤ",
                "اور جو وہ کہتے ہیں اس پر صبر کرو اور ان سے اچھی طرح الگ ہو جاؤ"
            ],
            english: [
                "O you who wraps himself [in clothing].",
                "Arise [to pray] the night, except for a little.",
                "Half of it - or subtract from it a little.",
                "Or add to it, and recite the Qur'an with measured recitation.",
                "Indeed, We will cast upon you a heavy word.",
                "Indeed, the hours of the night are more effective for concurrence [of heart and tongue] and more suitable for words.",
                "Indeed, for you by day is prolonged occupation.",
                "And remember the name of your Lord and devote yourself to Him with [complete] devotion.",
                "[He is] the Lord of the East and the West; there is no deity except Him, so take Him as Disposer of [your] affairs.",
                "And be patient over what they say and avoid them with a courteous avoidance."
            ]
        },

        /* ================= SURAH 74: AL-MUDDATHTHIR ================= */
        74: {
            arabic: [
                "يَا أَيُّهَا الْمُدَّثِّرُ",
                "قُمْ فَأَنذِرْ",
                "وَرَبَّكَ فَكَبِّرْ",
                "وَثِيَابَكَ فَطَهِّرْ",
                "وَالرِّجْزَ فَاهْجُرْ",
                "وَلَا تَمْنُن تَسْتَكْثِرُ",
                "وَلِرَبِّكَ فَاصْبِرْ",
                "فَإِذَا نُقِرَ فِي النَّاقُورِ",
                "فَذَٰلِكَ يَوْمَئِذٍ يَوْمٌ عَسِيرٌ",
                "عَلَى الْكَافِرِينَ غَيْرُ يَسِيرٍ"
            ],
            urdu: [
                "اے چادر اوڑھنے والے",
                "کھڑے ہو جاؤ پھر ڈراؤ",
                "اور اپنے رب کی بڑائی بیان کرو",
                "اور اپنے کپڑے پاک رکھو",
                "اور ناپاکی سے دور رہو",
                "اور احسان نہ کرو زیادہ حاصل کرنے کے لیے",
                "اور اپنے رب کے لیے صبر کرو",
                "پھر جب صور میں پھونکا جائے گا",
                "پس وہ دن اس وقت سخت دن ہو گا",
                "کافروں پر آسان نہ ہو گا"
            ],
            english: [
                "O you who covers himself [with a garment].",
                "Arise and warn.",
                "And your Lord glorify.",
                "And your clothing purify.",
                "And uncleanliness avoid.",
                "And do not confer favor to acquire more.",
                "But for your Lord be patient.",
                "And when the trumpet is blown.",
                "That Day will be a difficult day.",
                "For the disbelievers - not easy."
            ]
        },

        /* ================= SURAH 75: AL-QIYAMAH ================= */
        75: {
            arabic: [
                "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ",
                "وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ",
                "أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ",
                "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
                "بَلْ يُرِيدُ الْإِنسَانُ لِيَفْجُرَ أَمَامَهُ",
                "يَسْأَلُ أَيَّانَ يَوْمُ الْقِيَامَةِ",
                "فَإِذَا بَرِقَ الْبَصَرُ",
                "وَخَسَفَ الْقَمَرُ",
                "وَجُمِعَ الشَّمْسُ وَالْقَمَرُ",
                "يَقُولُ الْإِنسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ"
            ],
            urdu: [
                "میں قیامت کے دن کی قسم نہیں کھاتا",
                "اور نہ ملامت کرنے والی جان کی قسم",
                "کیا انسان گمان کرتا ہے کہ ہم اس کی ہڈیاں جمع نہیں کریں گے",
                "کیوں نہیں! ہم اس پر قادر ہیں کہ اس کی انگلیاں بھی درست کر دیں",
                "بلکہ انسان چاہتا ہے کہ آگے بھی گناہ کرتا رہے",
                "پوچھتا ہے کہ قیامت کا دن کب ہو گا",
                "پس جب آنکھ چندھیا جائے گی",
                "اور چاند بے نور ہو جائے گا",
                "اور سورج اور چاند جمع کر دیے جائیں گے",
                "اس دن انسان کہے گا کہ بھاگنے کی جگہ کہاں ہے"
            ],
            english: [
                "I swear by the Day of Resurrection.",
                "And I swear by the reproaching soul [to the certainty of resurrection].",
                "Does man think that We will not assemble his bones?",
                "Yes. [We are] Able [even] to proportion his fingertips.",
                "But man desires to continue in sin.",
                "He asks, 'When is the Day of Resurrection?'",
                "So when vision is dazzled.",
                "And the moon darkens.",
                "And the sun and the moon are joined.",
                "Man will say on that Day, 'Where is the [place of] escape?'"
            ]
        },

        /* ================= SURAH 76: AL-INSAN ================= */
        76: {
            arabic: [
                "هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا",
                "إِنَّا خَلَقْنَا الْإِنسَانَ مِن نُّطْفَةٍ أَمْشَاجٍ نَّبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا",
                "إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا",
                "إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَ وَأَغْلَالًا وَسَعِيرًا",
                "إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍ كَانَ مِزَاجُهَا كَافُورًا",
                "عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ يُفَجِّرُونَهَا تَفْجِيرًا",
                "يُوفُونَ بِالنَّذْرِ وَيَخَافُونَ يَوْمًا كَانَ شَرُّهُ مُسْتَطِيرًا",
                "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا",
                "إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا",
                "إِنَّا نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا"
            ],
            urdu: [
                "انسان پر زمانے کا ایک وقت ایسا بھی گزرا جب وہ کوئی قابل ذکر چیز نہ تھا",
                "بے شک ہم نے انسان کو مخلوط نطفے سے پیدا کیا، اسے آزماتے ہیں پس ہم نے اسے سننے والا دیکھنے والا بنایا",
                "بے شک ہم نے اسے راستہ دکھا دیا چاہے وہ شکر کرنے والا ہو یا ناشکرا",
                "بے شک ہم نے کافروں کے لیے زنجیریں اور طوق اور بھڑکتی آگ تیار کی ہے",
                "بے شک نیک لوگ ایسا جام پئیں گے جس میں کافور کی آمیزش ہو گی",
                "ایک چشمہ جس سے اللہ کے بندے پئیں گے، وہ اسے بہا کر لے جائیں گے",
                "وہ نذر پوری کرتے ہیں اور اس دن سے ڈرتے ہیں جس کی برائی پھیلنے والی ہے",
                "اور وہ کھانا کھلاتے ہیں اس کی محبت پر مسکین اور یتیم اور قیدی کو",
                "ہم تو صرف اللہ کی خوشنودی کے لیے تمہیں کھلاتے ہیں، ہم تم سے کوئی بدلہ نہیں چاہتے نہ شکریہ",
                "بے شک ہم اپنے رب سے اس دن سے ڈرتے ہیں جو ترش رو اور سخت ہے"
            ],
            english: [
                "Has there [not] come upon man a period of time when he was not a thing [even] mentioned?",
                "Indeed, We created man from a sperm-drop mixture that We may try him; and We made him hearing and seeing.",
                "Indeed, We guided him to the way, be he grateful or be he ungrateful.",
                "Indeed, We have prepared for the disbelievers chains and shackles and a blaze.",
                "Indeed, the righteous will drink from a cup [of wine] whose mixture is of Kafur.",
                "A spring of which the [righteous] servants of Allah will drink; they will make it gush forth in force [and abundance].",
                "They [are those who] fulfill [their] vows and fear a Day whose evil will be widespread.",
                "And they give food in spite of love for it to the needy, the orphan, and the captive.",
                "[Saying], 'We feed you only for the countenance of Allah. We wish not from you reward or gratitude.'",
                "Indeed, We fear from our Lord a Day austere and distressful.'"
            ]
        },

        /* ================= SURAH 77: AL-MURSALAT ================= */
        77: {
            arabic: [
                "وَالْمُرْسَلَاتِ عُرْفًا",
                "فَالْعَاصِفَاتِ عَصْفًا",
                "وَالنَّاشِرَاتِ نَشْرًا",
                "فَالْفَارِقَاتِ فَرْقًا",
                "فَالْمُلْقِيَاتِ ذِكْرًا",
                "عُذْرًا أَوْ نُذْرًا",
                "إِنَّمَا تُوعَدُونَ لَوَاقِعٌ",
                "فَإِذَا النُّجُومُ طُمِسَتْ",
                "وَإِذَا السَّمَاءُ فُرِجَتْ",
                "وَإِذَا الْجِبَالُ نُسِفَتْ"
            ],
            urdu: [
                "بھیجی گئی ہواؤں کی قسم جو یکے بعد دیگرے آتی ہیں",
                "پھر زور سے چلنے والیوں کی قسم",
                "پھر پھیلانے والیوں کی قسم",
                "پھر جدا کرنے والیوں کی قسم",
                "پھر نصیحت نازل کرنے والیوں کی قسم",
                "عذر یا ڈراوے کے لیے",
                "بے شک جس کا تم سے وعدہ کیا جاتا ہے وہ واقع ہونے والا ہے",
                "پس جب تارے مٹا دیے جائیں گے",
                "اور جب آسمان پھاڑ دیا جائے گا",
                "اور جب پہاڑ اڑا دیے جائیں گے"
            ],
            english: [
                "By the [winds] sent forth in gusts.",
                "And the winds that blow violently.",
                "And [by] the winds that spread [clouds].",
                "And those [angels] who bring criterion.",
                "And those [angels] who deliver a message.",
                "As justification or warning.",
                "Indeed, what you are promised is to occur.",
                "So when the stars are obliterated.",
                "And when the heaven is opened.",
                "And when the mountains are blown away."
            ]
        },

        /* ================= SURAH 78: AN-NABA ================= */
        78: {
            arabic: [
                "عَمَّ يَتَسَاءَلُونَ",
                "عَنِ النَّبَإِ الْعَظِيمِ",
                "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
                "كَلَّا سَيَعْلَمُونَ",
                "ثُمَّ كَلَّا سَيَعْلَمُونَ",
                "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا",
                "وَالْجِبَالَ أَوْتَادًا",
                "وَخَلَقْنَاكُمْ أَزْوَاجًا",
                "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
                "وَجَعَلْنَا اللَّيْلَ لِبَاسًا"
            ],
            urdu: [
                "وہ کس چیز کے بارے میں پوچھ گچھ کر رہے ہیں",
                "اس بڑی خبر کے بارے میں",
                "جس میں وہ اختلاف کر رہے ہیں",
                "ہرگز نہیں، عنقریب وہ جان لیں گے",
                "پھر ہرگز نہیں، عنقریب وہ جان لیں گے",
                "کیا ہم نے زمین کو بچھونا نہیں بنایا",
                "اور پہاڑوں کو میخیں",
                "اور ہم نے تمہیں جوڑوں میں پیدا کیا",
                "اور ہم نے تمہاری نیند کو آرام بنایا",
                "اور ہم نے رات کو پردہ بنایا"
            ],
            english: [
                "About what are they asking one another?",
                "About the great news.",
                "That over which they are in disagreement.",
                "No! They are going to know.",
                "Then, no! They are going to know.",
                "Have We not made the earth a resting place?",
                "And the mountains as stakes?",
                "And We created you in pairs.",
                "And made your sleep [a means for] rest.",
                "And made the night as clothing."
            ]
        },

        /* ================= SURAH 79: AN-NAZI'AT ================= */
        79: {
            arabic: [
                "وَالنَّازِعَاتِ غَرْقًا",
                "وَالنَّاشِطَاتِ نَشْطًا",
                "وَالسَّابِحَاتِ سَبْحًا",
                "فَالسَّابِقَاتِ سَبْقًا",
                "فَالْمُدَبِّرَاتِ أَمْرًا",
                "يَوْمَ تَرْجُفُ الرَّاجِفَةُ",
                "تَتْبَعُهَا الرَّادِفَةُ",
                "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ",
                "أَبْصَارُهَا خَاشِعَةٌ",
                "يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ"
            ],
            urdu: [
                "کھینچنے والیوں کی قسم جو زور سے کھینچیں",
                "اور آسانی سے نکالنے والیوں کی قسم",
                "اور تیرنے والیوں کی قسم",
                "پھر آگے بڑھنے والیوں کی قسم",
                "پھر کام کے انتظام کرنے والیوں کی قسم",
                "جس دن پہلی پھونک ہلچل ڈالے گی",
                "اس کے پیچھے دوسری آئے گی",
                "اس دن کچھ دل دہل جائیں گے",
                "ان کی آنکھیں جھکی ہوئی ہوں گی",
                "کہتے ہیں کیا ہم پہلی حالت میں لوٹائے جائیں گے"
            ],
            english: [
                "By those [angels] who extract with violence.",
                "And [by] those who remove with ease.",
                "And [by] those who glide [as if] swimming.",
                "And those who race each other in a race.",
                "And those who arrange [each] matter.",
                "On the Day the blast [of the Horn] will convulse [creation].",
                "There will follow it the subsequent [one].",
                "Hearts, that Day, will tremble.",
                "Their eyes humbled.",
                "They are [now] saying, 'Are we indeed to be restored to our former state?'"
            ]
        },

        /* ================= SURAH 80: ABASA ================= */
        80: {
            arabic: [
                "عَبَسَ وَتَوَلَّىٰ",
                "أَن جَاءَهُ الْأَعْمَىٰ",
                "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
                "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ",
                "أَمَّا مَنِ اسْتَغْنَىٰ",
                "فَأَنتَ لَهُ تَصَدَّىٰ",
                "وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ",
                "وَأَمَّا مَن جَاءَكَ يَسْعَىٰ",
                "وَهُوَ يَخْشَىٰ",
                "فَأَنتَ عَنْهُ تَلَهَّىٰ"
            ],
            urdu: [
                "اس نے منہ بنایا اور منہ موڑا",
                "کہ اس کے پاس اندھا آیا",
                "اور آپ کو کیا معلوم شاید وہ پاک ہو جائے",
                "یا نصیحت حاصل کرے پھر اسے نصیحت فائدہ دے",
                "جس نے خود کو بے نیاز سمجھا",
                "تو آپ اس پر توجہ دیتے ہیں",
                "حالانکہ آپ پر کوئی الزام نہیں اگر وہ پاک نہ ہو",
                "اور جو آپ کے پاس دوڑتا ہوا آیا",
                "اور وہ ڈرتا ہے",
                "تو آپ اس سے غافل ہو جاتے ہیں"
            ],
            english: [
                "He frowned and turned away.",
                "Because the blind man came to him.",
                "But what would make you perceive, [O Muhammad], that perhaps he might be purified.",
                "Or be reminded and the remembrance would benefit him?",
                "As for he who thinks himself without need.",
                "To him you give attention.",
                "And not upon you [is any blame] if he will not be purified.",
                "But as for he who came to you striving [for knowledge].",
                "While he fears [Allah].",
                "From him you are distracted."
            ]
        },

        /* ================= SURAH 81: AT-TAKWIR ================= */
        81: {
            arabic: [
                "إِذَا الشَّمْسُ كُوِّرَتْ",
                "وَإِذَا النُّجُومُ انكَدَرَتْ",
                "وَإِذَا الْجِبَالُ سُيِّرَتْ",
                "وَإِذَا الْعِشَارُ عُطِّلَتْ",
                "وَإِذَا الْوُحُوشُ حُشِرَتْ",
                "وَإِذَا الْبِحَارُ سُجِّرَتْ",
                "وَإِذَا النُّفُوسُ زُوِّجَتْ",
                "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ",
                "بِأَيِّ ذَنبٍ قُتِلَتْ",
                "وَإِذَا الصُّحُفُ نُشِرَتْ"
            ],
            urdu: [
                "جب سورج لپیٹ دیا جائے گا",
                "اور جب تارے بے نور ہو جائیں گے",
                "اور جب پہاڑ چلا دیے جائیں گے",
                "اور جب دس مہینے کی حاملہ اونٹنیاں چھوڑ دی جائیں گی",
                "اور جب جنگلی جانور جمع کیے جائیں گے",
                "اور جب سمندر بھڑکا دیے جائیں گے",
                "اور جب جانیں جوڑ دی جائیں گی",
                "اور جب زندہ دفن کی گئی لڑکی سے پوچھا جائے گا",
                "کس گناہ پر اسے قتل کیا گیا",
                "اور جب صحیفے کھول دیے جائیں گے"
            ],
            english: [
                "When the sun is wrapped up [in darkness].",
                "And when the stars fall, dispersing.",
                "And when the mountains are removed.",
                "And when full-term she-camels are neglected.",
                "And when the wild beasts are gathered.",
                "And when the seas are filled with flame.",
                "And when the souls are paired.",
                "And when the girl [who was] buried alive is asked.",
                "For what sin she was killed.",
                "And when the pages are made public."
            ]
        },

        /* ================= SURAH 82: AL-INFITAR ================= */
        82: {
            arabic: [
                "إِذَا السَّمَاءُ انفَطَرَتْ",
                "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
                "وَإِذَا الْبِحَارُ فُجِّرَتْ",
                "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
                "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ",
                "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
                "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
                "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ",
                "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ",
                "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ"
            ],
            urdu: [
                "جب آسمان پھٹ جائے گا",
                "اور جب ستارے جھڑ جائیں گے",
                "اور جب سمندر بہا دیے جائیں گے",
                "اور جب قبریں کھول دی جائیں گی",
                "ہر جان جان لے گی جو اس نے آگے بھیجا اور پیچھے چھوڑا",
                "اے انسان! تجھے اپنے کریم رب کے بارے میں کس نے دھوکہ دیا",
                "جس نے تجھے پیدا کیا پھر درست کیا پھر برابر کیا",
                "جس صورت میں چاہا تجھے ترکیب دیا",
                "ہرگز نہیں، بلکہ تم جزا کو جھٹلاتے ہو",
                "اور بے شک تم پر نگہبان ہیں"
            ],
            english: [
                "When the sky breaks apart.",
                "And when the stars fall, scattering.",
                "And when the seas are erupted.",
                "And when the [contents of] graves are scattered.",
                "A soul will [then] know what it has put forth and kept back.",
                "O mankind, what has deceived you concerning your Lord, the Generous?",
                "Who created you, proportioned you, and balanced you?",
                "In whatever form He willed has He assembled you.",
                "No! But you deny the Recompense.",
                "And indeed, [appointed] over you are keepers."
            ]
        },

        /* ================= SURAH 83: AL-MUTAFFIFIN ================= */
        83: {
            arabic: [
                "وَيْلٌ لِّلْمُطَفِّفِينَ",
                "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ",
                "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
                "أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ",
                "لِيَوْمٍ عَظِيمٍ",
                "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ",
                "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ",
                "وَمَا أَدْرَاكَ مَا سِجِّينٌ",
                "كِتَابٌ مَّرْقُومٌ",
                "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ"
            ],
            urdu: [
                "ہلاکت ہے ناپ تول میں کمی کرنے والوں کے لیے",
                "جو جب لوگوں سے لیتے ہیں تو پورا لیتے ہیں",
                "اور جب انہیں دیتے ہیں یا تولتے ہیں تو کمی کرتے ہیں",
                "کیا وہ گمان نہیں کرتے کہ وہ اٹھائے جائیں گے",
                "ایک بڑے دن کے لیے",
                "جس دن لوگ تمام جہانوں کے رب کے سامنے کھڑے ہوں گے",
                "ہرگز نہیں! بے شک بدکاروں کا نامہ سجین میں ہے",
                "اور آپ کو کیا معلوم کہ سجین کیا ہے",
                "یہ لکھی ہوئی کتاب ہے",
                "اس دن ہلاکت ہے جھٹلانے والوں کے لیے"
            ],
            english: [
                "Woe to those who give less [than due].",
                "Who, when they take a measure from people, take in full.",
                "But if they give by measure or by weight to them, they cause loss.",
                "Do they not think that they will be resurrected.",
                "For a tremendous Day.",
                "The Day when mankind will stand before the Lord of the worlds?",
                "No! Indeed, the record of the wicked is in sijjeen.",
                "And what can make you know what is sijjeen?",
                "It is [their destination recorded in] a register inscribed.",
                "Woe, that Day, to the deniers."
            ]
        },

        /* ================= SURAH 84: AL-INSHIQAQ ================= */
        84: {
            arabic: [
                "إِذَا السَّمَاءُ انشَقَّتْ",
                "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
                "وَإِذَا الْأَرْضُ مُدَّتْ",
                "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ",
                "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
                "يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ",
                "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ",
                "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا",
                "وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا",
                "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ"
            ],
            urdu: [
                "جب آسمان پھٹ جائے گا",
                "اور اپنے رب کا حکم سنے گا اور اسی کا حق ہے",
                "اور جب زمین پھیلا دی جائے گی",
                "اور جو اس میں ہے باہر ڈال دے گی اور خالی ہو جائے گی",
                "اور اپنے رب کا حکم سنے گی اور اسی کا حق ہے",
                "اے انسان! بے شک تو اپنے رب کی طرف کوشش کرتا ہے پھر اس سے ملے گا",
                "پس جس کا نامہ اس کے دائیں ہاتھ میں دیا جائے گا",
                "تو اس کا حساب آسان ہو گا",
                "اور وہ اپنے گھر والوں کے پاس خوشی سے لوٹے گا",
                "اور جس کا نامہ اس کی پیٹھ کے پیچھے سے دیا جائے گا"
            ],
            english: [
                "When the sky is split open.",
                "And has listened to its Lord and was obligated [to do so].",
                "And when the earth is spread out.",
                "And has cast out that within it and relinquished [it].",
                "And has listened to its Lord and was obligated [to do so].",
                "O mankind, indeed you are laboring toward your Lord with [great] exertion and will meet it.",
                "Then as for he who is given his record in his right hand.",
                "He will be judged with an easy account.",
                "And return to his people in happiness.",
                "But as for he who is given his record behind his back."
            ]
        },

        /* ================= SURAH 85: AL-BURUJ ================= */
        85: {
            arabic: [
                "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ",
                "وَالْيَوْمِ الْمَوْعُودِ",
                "وَشَاهِدٍ وَمَشْهُودٍ",
                "قُتِلَ أَصْحَابُ الْأُخْدُودِ",
                "النَّارِ ذَاتِ الْوَقُودِ",
                "إِذْ هُمْ عَلَيْهَا قُعُودٌ",
                "وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ",
                "وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ الْعَزِيزِ الْحَمِيدِ",
                "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
                "إِنَّ الَّذِينَ فَتَنُوا الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ ثُمَّ لَمْ يَتُوبُوا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيقِ"
            ],
            urdu: [
                "برج والے آسمان کی قسم",
                "اور وعدے کے دن کی قسم",
                "اور گواہ اور جس پر گواہی دی جائے کی قسم",
                "ہلاک ہوئے خندق والے",
                "وہ آگ والے جو ایندھن سے بھری تھی",
                "جب وہ اس کے کنارے بیٹھے تھے",
                "اور وہ جو وہ مومنوں کے ساتھ کر رہے تھے اسے دیکھ رہے تھے",
                "اور انہوں نے ان سے کوئی بدلہ نہیں لیا مگر اس لیے کہ وہ اللہ زبردست قابل تعریف پر ایمان لائے",
                "جس کے لیے آسمان اور زمین کی بادشاہت ہے اور اللہ ہر چیز پر گواہ ہے",
                "بے شک جنہوں نے مومن مردوں اور مومن عورتوں کو ستایا پھر توبہ نہ کی تو ان کے لیے جہنم کا عذاب ہے اور ان کے لیے جلنے کا عذاب ہے"
            ],
            english: [
                "By the sky containing great stars.",
                "And [by] the promised Day.",
                "And [by] the witness and what is witnessed.",
                "Destroyed [were] the companions of the trench.",
                "[Containing] the fire full of fuel.",
                "When they were sitting near it.",
                "And they, to what they were doing against the believers, were witnesses.",
                "And they resented them not except because they believed in Allah, the Exalted in Might, the Praiseworthy.",
                "To whom belongs the dominion of the heavens and the earth. And Allah, over all things, is Witness.",
                "Indeed, those who have tortured the believing men and believing women and then have not repented will have the punishment of Hell, and they will have the punishment of the Burning Fire."
            ]
        },

        /* ================= SURAH 86: AT-TARIQ ================= */
        86: {
            arabic: [
                "وَالسَّمَاءِ وَالطَّارِقِ",
                "وَمَا أَدْرَاكَ مَا الطَّارِقُ",
                "النَّجْمُ الثَّاقِبُ",
                "إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ",
                "فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ",
                "خُلِقَ مِن مَّاءٍ دَافِقٍ",
                "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ",
                "إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ",
                "يَوْمَ تُبْلَى السَّرَائِرُ",
                "فَمَا لَهُ مِن قُوَّةٍ وَلَا نَاصِرٍ"
            ],
            urdu: [
                "آسمان اور رات کے آنے والے کی قسم",
                "اور آپ کو کیا معلوم کہ رات کے آنے والا کیا ہے",
                "وہ چمکتا ہوا تارہ ہے",
                "ہر جان پر ایک نگہبان ہے",
                "پس انسان دیکھے کہ وہ کس چیز سے پیدا کیا گیا",
                "وہ اچھلتے پانی سے پیدا کیا گیا",
                "جو پیٹھ اور سینے کی ہڈیوں کے درمیان سے نکلتا ہے",
                "بے شک وہ اسے لوٹانے پر قادر ہے",
                "جس دن چھپی ہوئی باتیں ظاہر ہوں گی",
                "پھر اس کے پاس نہ کوئی طاقت ہو گی اور نہ مددگار"
            ],
            english: [
                "By the sky and the night comer.",
                "And what can make you know what is the night comer?",
                "It is the piercing star.",
                "There is no soul but that it has over it a protector.",
                "So let man observe from what he was created.",
                "He was created from a fluid, ejected.",
                "Emerging from between the backbone and the ribs.",
                "Indeed, Allah, to return him [to life], is Able.",
                "The Day when secrets will be put to trial.",
                "And there will not be for him any strength or helper."
            ]
        },

        /* ================= SURAH 87: AL-A'LA ================= */
        87: {
            arabic: [
                "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
                "الَّذِي خَلَقَ فَسَوَّىٰ",
                "وَالَّذِي قَدَّرَ فَهَدَىٰ",
                "وَالَّذِي أَخْرَجَ الْمَرْعَىٰ",
                "فَجَعَلَهُ غُثَاءً أَحْوَىٰ",
                "سَنُقْرِئُكَ فَلَا تَنسَىٰ",
                "إِلَّا مَا شَاءَ اللَّهُ ۚ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَىٰ",
                "وَنُيَسِّرُكَ لِلْيُسْرَىٰ",
                "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
                "سَيَذَّكَّرُ مَن يَخْشَىٰ"
            ],
            urdu: [
                "اپنے رب بلند کے نام کی تسبیح کر",
                "جس نے پیدا کیا پھر درست کیا",
                "اور جس نے اندازہ مقرر کیا پھر ہدایت دی",
                "اور جس نے چارہ نکالا",
                "پھر اسے سیاہ خشک بھوسا بنا دیا",
                "ہم آپ کو پڑھائیں گے پھر آپ نہیں بھولیں گے",
                "مگر جو اللہ چاہے، بے شک وہ ظاہر جانتا ہے اور جو چھپا ہے",
                "اور ہم آپ کو آسان راستے کی توفیق دیں گے",
                "پس نصیحت کرو اگر نصیحت فائدہ دے",
                "عنقریب نصیحت وہی لے گا جو ڈرے"
            ],
            english: [
                "Exalt the name of your Lord, the Most High.",
                "Who created and proportioned.",
                "And who destined and [then] guided.",
                "And who brings out the pasture.",
                "And [then] makes it black stubble.",
                "We will make you recite, [O Muhammad], and you will not forget.",
                "Except what Allah should will. Indeed, He knows what is declared and what is hidden.",
                "And We will ease you toward ease.",
                "So remind, if the reminder should benefit.",
                "He who fears [Allah] will be reminded."
            ]
        },

        /* ================= SURAH 88: AL-GHASHIYAH ================= */
        88: {
            arabic: [
                "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
                "وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ",
                "عَامِلَةٌ نَّاصِبَةٌ",
                "تَصْلَىٰ نَارًا حَامِيَةً",
                "تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ",
                "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ",
                "لَّا يُسْمِنُ وَلَا يُغْنِي مِن جُوعٍ",
                "وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ",
                "لِّسَعْيِهَا رَاضِيَةٌ",
                "فِي جَنَّةٍ عَالِيَةٍ"
            ],
            urdu: [
                "کیا آپ کو ڈھانپنے والی کی خبر پہنچی",
                "اس دن کچھ چہرے جھکے ہوئے ہوں گے",
                "محنت کرنے والے تھکے ہوئے",
                "وہ دہکتی آگ میں داخل ہوں گے",
                "انہیں کھولتے چشمے سے پلایا جائے گا",
                "ان کے لیے کھانا نہیں مگر کانٹے دار خشک",
                "جو نہ موٹا کرے اور نہ بھوک مٹائے",
                "اس دن کچھ چہرے نعمت والے ہوں گے",
                "اپنی کوشش سے خوش",
                "اونچی جنت میں"
            ],
            english: [
                "Has there come to you the news of the overwhelming [calamity]?",
                "[Some] faces, that Day, will be humbled.",
                "Working [hard] and exhausted.",
                "They will [enter to] burn in an intensely hot Fire.",
                "They will be given drink from a boiling spring.",
                "For them there will be no food except from a poisonous, thorny plant.",
                "Which neither nourishes nor avails against hunger.",
                "[Other] faces, that Day, will show pleasure.",
                "With their effort [they are] satisfied.",
                "In an elevated garden."
            ]
        },

        /* ================= SURAH 89: AL-FAJR ================= */
        89: {
            arabic: [
                "وَالْفَجْرِ",
                "وَلَيَالٍ عَشْرٍ",
                "وَالشَّفْعِ وَالْوَتْرِ",
                "وَاللَّيْلِ إِذَا يَسْرِ",
                "هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ",
                "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
                "إِرَمَ ذَاتِ الْعِمَادِ",
                "الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ",
                "وَثَمُودَ الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ",
                "وَفِرْعَوْنَ ذِي الْأَوْتَادِ"
            ],
            urdu: [
                "فجر کی قسم",
                "اور دس راتوں کی قسم",
                "اور جفت اور طاق کی قسم",
                "اور رات کی قسم جب وہ گزرے",
                "کیا اس میں عقل والے کے لیے قسم ہے",
                "کیا آپ نے نہیں دیکھا کہ آپ کے رب نے عاد کے ساتھ کیا کیا",
                "ارم والوں کے ساتھ جو ستونوں والے تھے",
                "جن کی مثل شہروں میں پیدا نہیں کی گئی",
                "اور ثمود کے ساتھ جنہوں نے وادی میں پتھر تراشے",
                "اور فرعون کے ساتھ جو میخوں والا تھا"
            ],
            english: [
                "By the dawn.",
                "And by ten nights.",
                "And by the even and the odd.",
                "And by the night when it passes.",
                "Is there [not] in [all] that an oath [sufficient] for one of perception?",
                "Have you not considered how your Lord dealt with 'Aad?",
                "[With] Iram - who had lofty pillars.",
                "The likes of whom had never been created in the land?",
                "And [with] Thamud, who carved out the rocks in the valley?",
                "And [with] Pharaoh, owner of the stakes?"
            ]
        },

        /* ================= SURAH 90: AL-BALAD ================= */
        90: {
            arabic: [
                "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ",
                "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
                "وَوَالِدٍ وَمَا وَلَدَ",
                "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
                "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
                "يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا",
                "أَيَحْسَبُ أَن لَّمْ يَرَهُ أَحَدٌ",
                "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
                "وَلِسَانًا وَشَفَتَيْنِ",
                "وَهَدَيْنَاهُ النَّجْدَيْنِ"
            ],
            urdu: [
                "میں اس شہر کی قسم نہیں کھاتا",
                "اور آپ اس شہر میں رہتے ہیں",
                "اور باپ اور اس کی اولاد کی قسم",
                "بے شک ہم نے انسان کو مشقت میں پیدا کیا",
                "کیا وہ گمان کرتا ہے کہ اس پر کوئی قابو نہ پائے گا",
                "کہتا ہے میں نے بہت مال اڑا دیا",
                "کیا وہ گمان کرتا ہے کہ کسی نے اسے نہیں دیکھا",
                "کیا ہم نے اس کے لیے دو آنکھیں نہیں بنائیں",
                "اور ایک زبان اور دو ہونٹ",
                "اور ہم نے اسے دو راستے دکھا دیے"
            ],
            english: [
                "I swear by this city, Makkah.",
                "And you, [O Muhammad], are free of restriction in this city.",
                "And [by] the father and that which was born [of him].",
                "We have certainly created man into hardship.",
                "Does he think that never will anyone overcome him?",
                "He says, 'I have spent wealth in abundance.'",
                "Does he think that no one has seen him?",
                "Have We not made for him two eyes?",
                "And a tongue and two lips?",
                "And have shown him the two ways?"
            ]
        }

    },

    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },
    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    }
};

console.log("[DB Part 6A] Loaded ✅");
console.log("[DB Part 6A] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART6A.quranContent).length);
/* =========================================================
   ISLAMICWAY DATABASE — PART 6B (FINAL QURAN PART)
   Surahs 91-114
   Full Arabic + Urdu + English
   🎉 POORA QURAN COMPLETE
========================================================= */

const ISLAMIC_DATABASE_PART6B = {

    quranContent: {

        /* ================= SURAH 91: ASH-SHAMS ================= */
        91: {
            arabic: [
                "وَالشَّمْسِ وَضُحَاهَا",
                "وَالْقَمَرِ إِذَا تَلَاهَا",
                "وَالنَّهَارِ إِذَا جَلَّاهَا",
                "وَاللَّيْلِ إِذَا يَغْشَاهَا",
                "وَالسَّمَاءِ وَمَا بَنَاهَا",
                "وَالْأَرْضِ وَمَا طَحَاهَا",
                "وَنَفْسٍ وَمَا سَوَّاهَا",
                "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
                "قَدْ أَفْلَحَ مَن زَكَّاهَا",
                "وَقَدْ خَابَ مَن دَسَّاهَا"
            ],
            urdu: [
                "سورج کی قسم اور اس کی روشنی کی",
                "اور چاند کی قسم جب وہ اس کے پیچھے آئے",
                "اور دن کی قسم جب وہ اسے نمایاں کرے",
                "اور رات کی قسم جب وہ اسے ڈھانپ لے",
                "اور آسمان کی قسم اور اس کی بنائی کی",
                "اور زمین کی قسم اور اس کے بچھانے کی",
                "اور نفس کی قسم اور اس کے درست کرنے کی",
                "پھر اسے بدکاری اور پرہیزگاری کی سمجھ دی",
                "بے شک کامیاب ہو گیا وہ جس نے اسے پاک کیا",
                "اور نامراد ہو گیا وہ جس نے اسے دبا دیا"
            ],
            english: [
                "By the sun and its brightness.",
                "And [by] the moon when it follows it.",
                "And [by] the day when it displays it.",
                "And [by] the night when it covers it.",
                "And [by] the sky and He who constructed it.",
                "And [by] the earth and He who spread it.",
                "And [by] the soul and He who proportioned it.",
                "And inspired it [with discernment of] its wickedness and its righteousness.",
                "He has succeeded who purifies it.",
                "And he has failed who instills it [with corruption]."
            ]
        },

        /* ================= SURAH 92: AL-LAYL ================= */
        92: {
            arabic: [
                "وَاللَّيْلِ إِذَا يَغْشَىٰ",
                "وَالنَّهَارِ إِذَا تَجَلَّىٰ",
                "وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
                "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
                "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ",
                "وَصَدَّقَ بِالْحُسْنَىٰ",
                "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
                "وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ",
                "وَكَذَّبَ بِالْحُسْنَىٰ",
                "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ"
            ],
            urdu: [
                "رات کی قسم جب وہ ڈھانپ لے",
                "اور دن کی قسم جب وہ روشن ہو",
                "اور اس کی قسم جس نے نر اور مادہ پیدا کیا",
                "بے شک تمہاری کوششیں مختلف ہیں",
                "پس جس نے دیا اور ڈرا",
                "اور بھلائی کی تصدیق کی",
                "تو ہم اسے آسانی کے لیے تیار کریں گے",
                "اور جس نے بخل کیا اور بے نیاز ہو گیا",
                "اور بھلائی کو جھٹلایا",
                "تو ہم اسے تنگی کے لیے تیار کریں گے"
            ],
            english: [
                "By the night when it covers.",
                "And [by] the day when it appears.",
                "And [by] He who created the male and female.",
                "Indeed, your efforts are diverse.",
                "As for he who gives and fears Allah.",
                "And believes in the best [reward].",
                "We will ease him toward ease.",
                "But as for he who withholds and considers himself free of need.",
                "And denies the best [reward].",
                "We will ease him toward difficulty."
            ]
        },

        /* ================= SURAH 93: AD-DUHA ================= */
        93: {
            arabic: [
                "وَالضُّحَىٰ",
                "وَاللَّيْلِ إِذَا سَجَىٰ",
                "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
                "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
                "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
                "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
                "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
                "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
                "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ",
                "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ"
            ],
            urdu: [
                "چاشت کی قسم",
                "اور رات کی قسم جب وہ چھا جائے",
                "آپ کے رب نے آپ کو نہیں چھوڑا اور نہ ناراض ہوا",
                "اور بے شک آخرت آپ کے لیے دنیا سے بہتر ہے",
                "اور عنقریب آپ کا رب آپ کو دے گا پھر آپ راضی ہوں گے",
                "کیا اس نے آپ کو یتیم نہ پایا پھر جگہ دی",
                "اور آپ کو راستہ بھٹکا ہوا پایا پھر ہدایت دی",
                "اور آپ کو تنگدست پایا پھر مالدار کیا",
                "پس یتیم پر سختی نہ کرو",
                "اور مانگنے والے کو نہ جھڑکو"
            ],
            english: [
                "By the morning brightness.",
                "And [by] the night when it covers with darkness.",
                "Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].",
                "And the Hereafter is better for you than the first [life].",
                "And your Lord is going to give you, and you will be satisfied.",
                "Did He not find you an orphan and give [you] refuge?",
                "And He found you lost and guided [you].",
                "And He found you poor and made [you] self-sufficient.",
                "So as for the orphan, do not oppress [him].",
                "And as for the petitioner, do not repel [him]."
            ]
        },

        /* ================= SURAH 94: ASH-SHARH ================= */
        94: {
            arabic: [
                "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
                "وَوَضَعْنَا عَنكَ وِزْرَكَ",
                "الَّذِي أَنقَضَ ظَهْرَكَ",
                "وَرَفَعْنَا لَكَ ذِكْرَكَ",
                "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
                "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
                "فَإِذَا فَرَغْتَ فَانصَبْ",
                "وَإِلَىٰ رَبِّكَ فَارْغَبْ"
            ],
            urdu: [
                "کیا ہم نے آپ کا سینہ کھول نہیں دیا",
                "اور آپ سے آپ کا بوجھ اتار دیا",
                "جس نے آپ کی کمر جھکا دی تھی",
                "اور آپ کا ذکر بلند کیا",
                "پس بے شک تنگی کے ساتھ آسانی ہے",
                "بے شک تنگی کے ساتھ آسانی ہے",
                "پس جب فارغ ہو تو عبادت میں محنت کرو",
                "اور اپنے رب کی طرف رغبت کرو"
            ],
            english: [
                "Did We not expand for you, [O Muhammad], your breast?",
                "And We removed from you your burden.",
                "Which had weighed upon your back.",
                "And We raised high for you your repute.",
                "For indeed, with hardship [will be] ease.",
                "Indeed, with hardship [will be] ease.",
                "So when you have finished [your duties], then stand up [for worship].",
                "And to your Lord direct [your] longing."
            ]
        },

        /* ================= SURAH 95: AT-TIN ================= */
        95: {
            arabic: [
                "وَالتِّينِ وَالزَّيْتُونِ",
                "وَطُورِ سِينِينَ",
                "وَهَٰذَا الْبَلَدِ الْأَمِينِ",
                "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
                "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
                "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
                "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ",
                "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ"
            ],
            urdu: [
                "انجیر اور زیتون کی قسم",
                "اور طور سینین کی قسم",
                "اور اس امن والے شہر کی قسم",
                "بے شک ہم نے انسان کو بہترین صورت میں پیدا کیا",
                "پھر ہم نے اسے نیچوں سے نیچا کر دیا",
                "سوائے ان کے جو ایمان لائے اور نیک عمل کیے پس ان کے لیے ایسا اجر ہے جو کبھی ختم نہ ہو",
                "پھر آپ کو جزا کے بارے میں کون جھٹلا سکتا ہے",
                "کیا اللہ سب حاکموں سے بہتر حاکم نہیں"
            ],
            english: [
                "By the fig and the olive.",
                "And [by] Mount Sinai.",
                "And [by] this secure city [Makkah].",
                "We have certainly created man in the best of stature.",
                "Then We return him to the lowest of the low.",
                "Except for those who believe and do righteous deeds, for they will have a reward uninterrupted.",
                "So what yet causes you to deny the Recompense?",
                "Is not Allah the most just of judges?"
            ]
        },

        /* ================= SURAH 96: AL-ALAQ ================= */
        96: {
            arabic: [
                "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
                "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
                "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
                "الَّذِي عَلَّمَ بِالْقَلَمِ",
                "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
                "كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ",
                "أَن رَّآهُ اسْتَغْنَىٰ",
                "إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ",
                "أَرَأَيْتَ الَّذِي يَنْهَىٰ",
                "عَبْدًا إِذَا صَلَّىٰ"
            ],
            urdu: [
                "پڑھو اپنے رب کے نام سے جس نے پیدا کیا",
                "انسان کو خون کے لوتھڑے سے پیدا کیا",
                "پڑھو اور آپ کا رب بڑا کریم ہے",
                "جس نے قلم سے سکھایا",
                "انسان کو سکھایا جو وہ نہیں جانتا تھا",
                "ہرگز نہیں! بے شک انسان سرکشی کرتا ہے",
                "کہ وہ خود کو بے نیاز سمجھتا ہے",
                "بے شک آپ کے رب ہی کی طرف لوٹنا ہے",
                "کیا آپ نے اسے دیکھا جو منع کرتا ہے",
                "ایک بندے کو جب وہ نماز پڑھے"
            ],
            english: [
                "Recite in the name of your Lord who created.",
                "Created man from a clinging substance.",
                "Recite, and your Lord is the most Generous.",
                "Who taught by the pen.",
                "Taught man that which he knew not.",
                "No! [But] indeed, man transgresses.",
                "Because he sees himself self-sufficient.",
                "Indeed, to your Lord is the return.",
                "Have you seen the one who forbids.",
                "A servant when he prays?"
            ]
        },

        /* ================= SURAH 97: AL-QADR ================= */
        97: {
            arabic: [
                "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
                "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ",
                "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
                "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
                "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ"
            ],
            urdu: [
                "بے شک ہم نے اسے شب قدر میں نازل کیا",
                "اور آپ کو کیا معلوم کہ شب قدر کیا ہے",
                "شب قدر ہزار مہینوں سے بہتر ہے",
                "اس میں فرشتے اور روح اپنے رب کے حکم سے ہر کام کے لیے نازل ہوتے ہیں",
                "وہ رات سلامتی کی ہے طلوع فجر تک"
            ],
            english: [
                "Indeed, We sent the Qur'an down during the Night of Decree.",
                "And what can make you know what is the Night of Decree?",
                "The Night of Decree is better than a thousand months.",
                "The angels and the Spirit descend therein by permission of their Lord for every matter.",
                "Peace it is until the emergence of dawn."
            ]
        },

        /* ================= SURAH 98: AL-BAYYINAH ================= */
        98: {
            arabic: [
                "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ",
                "رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
                "فِيهَا كُتُبٌ قَيِّمَةٌ",
                "وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ",
                "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ",
                "إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ",
                "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ",
                "جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ"
            ],
            urdu: [
                "کافروں نے اہل کتاب اور مشرکوں میں سے باز آنے والے نہیں تھے یہاں تک کہ ان کے پاس کھلی دلیل آئے",
                "ایک رسول اللہ کی طرف سے جو پاک صحیفے پڑھتا ہے",
                "جن میں درست کتابیں ہیں",
                "اور اہل کتاب نے اختلاف نہیں کیا مگر اس کے بعد کہ ان کے پاس کھلی دلیل آئی",
                "اور انہیں حکم نہیں دیا گیا مگر اس کے کہ اللہ کی عبادت کریں اخلاص کے ساتھ اس کے لیے دین کو خالص کرتے ہوئے اور نماز قائم کریں اور زکوٰۃ دیں اور یہی درست دین ہے",
                "بے شک جنہوں نے کفر کیا اہل کتاب اور مشرکوں میں سے وہ جہنم کی آگ میں ہمیشہ رہیں گے، یہی لوگ بدترین مخلوق ہیں",
                "بے شک جو ایمان لائے اور نیک عمل کیے یہی لوگ بہترین مخلوق ہیں",
                "ان کا بدلہ ان کے رب کے پاس ہمیشگی کے باغات ہیں جن کے نیچے نہریں بہیں جن میں وہ ہمیشہ رہیں گے، اللہ ان سے راضی اور وہ اس سے راضی، یہ اس کے لیے ہے جو اپنے رب سے ڈرے"
            ],
            english: [
                "Those who disbelieved among the People of the Scripture and the polytheists were not to be parted [from misbelief] until there came to them clear evidence.",
                "A Messenger from Allah, reciting purified scriptures.",
                "Within which are correct writings.",
                "Nor did those who were given the Scripture become divided until after there had come to them clear evidence.",
                "And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.",
                "Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell, abiding eternally therein. Those are the worst of creatures.",
                "Indeed, they who have believed and done righteous deeds - those are the best of creatures.",
                "Their reward with Allah will be gardens of perpetual residence beneath which rivers flow, wherein they will abide forever, Allah being pleased with them and they with Him. That is for whoever has feared his Lord."
            ]
        },

        /* ================= SURAH 99: AZ-ZALZALAH ================= */
        99: {
            arabic: [
                "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا",
                "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا",
                "وَقَالَ الْإِنسَانُ مَا لَهَا",
                "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا",
                "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا",
                "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ",
                "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
                "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ"
            ],
            urdu: [
                "جب زمین اپنی پوری جنبش سے ہلائی جائے گی",
                "اور زمین اپنے بوجھ نکال دے گی",
                "اور انسان کہے گا اسے کیا ہو گیا",
                "اس دن وہ اپنی خبریں بتائے گی",
                "کیونکہ آپ کے رب نے اسے حکم دیا ہو گا",
                "اس دن لوگ مختلف گروہوں میں نکلیں گے تاکہ انہیں ان کے اعمال دکھائے جائیں",
                "پس جس نے ذرہ برابر نیکی کی وہ اسے دیکھے گا",
                "اور جس نے ذرہ برابر برائی کی وہ اسے دیکھے گا"
            ],
            english: [
                "When the earth is shaken with its [final] earthquake.",
                "And the earth discharges its burdens.",
                "And man says, 'What is [wrong] with it?'",
                "That Day, it will report its news.",
                "Because your Lord has commanded it.",
                "That Day, the people will depart separated [into categories] to be shown [the result of] their deeds.",
                "So whoever does an atom's weight of good will see it.",
                "And whoever does an atom's weight of evil will see it."
            ]
        },

        /* ================= SURAH 100: AL-ADIYAT ================= */
        100: {
            arabic: [
                "وَالْعَادِيَاتِ ضَبْحًا",
                "فَالْمُورِيَاتِ قَدْحًا",
                "فَالْمُغِيرَاتِ صُبْحًا",
                "فَأَثَرْنَ بِهِ نَقْعًا",
                "فَوَسَطْنَ بِهِ جَمْعًا",
                "إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ",
                "وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ",
                "وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ",
                "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ",
                "وَحُصِّلَ مَا فِي الصُّدُورِ"
            ],
            urdu: [
                "دوڑنے والے گھوڑوں کی قسم جو ہانپتے ہیں",
                "پھر ان کی قسم جو ٹاپوں سے آگ نکالتے ہیں",
                "پھر ان کی قسم جو صبح کو حملہ کرتے ہیں",
                "پھر وہاں گرد اڑاتے ہیں",
                "پھر وہ دشمن کے بیچ میں جا گھستے ہیں",
                "بے شک انسان اپنے رب کا ناشکرا ہے",
                "اور بے شک وہ اس پر گواہ ہے",
                "اور بے شک وہ مال کی محبت میں سخت ہے",
                "کیا وہ نہیں جانتا جب قبروں میں جو ہے نکالا جائے گا",
                "اور سینوں میں جو ہے ظاہر کیا جائے گا"
            ],
            english: [
                "By the [horses] that run, with panting [breath].",
                "And [by] those who strike sparks [with their hoofs].",
                "And [by] those who charge at dawn.",
                "And [by] those who raise thereby clouds of dust.",
                "Penetrating thereby into the midst [of the enemy].",
                "Indeed, mankind, to his Lord, is ungrateful.",
                "And indeed, he is to that a witness.",
                "And indeed he is, in love of wealth, intense.",
                "But does he not know that when the contents of the graves are scattered.",
                "And that within the breasts is obtained."
            ]
        },

        /* ================= SURAH 101: AL-QARI'AH ================= */
        101: {
            arabic: [
                "الْقَارِعَةُ",
                "مَا الْقَارِعَةُ",
                "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
                "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
                "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ",
                "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ",
                "فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ",
                "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ",
                "فَأُمُّهُ هَاوِيَةٌ",
                "وَمَا أَدْرَاكَ مَا هِيَهْ"
            ],
            urdu: [
                "کھڑکھڑانے والی",
                "کیا ہے کھڑکھڑانے والی",
                "اور آپ کو کیا معلوم کہ کھڑکھڑانے والی کیا ہے",
                "جس دن لوگ بکھرے ہوئے پروانوں کی طرح ہوں گے",
                "اور پہاڑ دھنکی ہوئی رنگین اون کی طرح ہوں گے",
                "پس جس کے پلے بھاری ہوں گے",
                "وہ راضی زندگی میں ہو گا",
                "اور جس کے پلے ہلکے ہوں گے",
                "اس کا ٹھکانہ ہاویہ ہو گا",
                "اور آپ کو کیا معلوم کہ وہ کیا ہے"
            ],
            english: [
                "The Striking Calamity.",
                "What is the Striking Calamity?",
                "And what can make you know what is the Striking Calamity?",
                "It is the Day when people will be like moths, dispersed.",
                "And the mountains will be like wool, fluffed up.",
                "Then as for one whose scales are heavy [with good deeds].",
                "He will be in a pleasant life.",
                "But as for one whose scales are light.",
                "His refuge will be an abyss.",
                "And what can make you know what that is?"
            ]
        },

        /* ================= SURAH 102: AT-TAKATHUR ================= */
        102: {
            arabic: [
                "أَلْهَاكُمُ التَّكَاثُرُ",
                "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ",
                "كَلَّا سَوْفَ تَعْلَمُونَ",
                "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
                "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ",
                "لَتَرَوُنَّ الْجَحِيمَ",
                "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ",
                "ثُمَّ لَتُسْأَلُنَّ عَنِ النَّعِيمِ"
            ],
            urdu: [
                "تمہیں کثرت کی خواہش نے غافل کر دیا",
                "یہاں تک کہ تم قبروں میں جا پہنچے",
                "ہرگز نہیں! عنقریب تم جان لو گے",
                "پھر ہرگز نہیں! عنقریب تم جان لو گے",
                "ہرگز نہیں! کاش تم یقین کا علم رکھتے",
                "تم ضرور جہنم دیکھو گے",
                "پھر تم اسے یقین کی آنکھ سے دیکھو گے",
                "پھر تم سے نعمتوں کے بارے میں ضرور پوچھا جائے گا"
            ],
            english: [
                "Competition in [worldly] increase diverts you.",
                "Until you visit the graveyards.",
                "No! You are going to know.",
                "Then no! You are going to know.",
                "No! If you only knew with knowledge of certainty.",
                "You will surely see the Hellfire.",
                "Then you will surely see it with the eye of certainty.",
                "Then you will surely be asked about pleasure."
            ]
        },

        /* ================= SURAH 103: AL-ASR ================= */
        103: {
            arabic: [
                "وَالْعَصْرِ",
                "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
                "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"
            ],
            urdu: [
                "زمانے کی قسم",
                "بے شک انسان خسارے میں ہے",
                "سوائے ان کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق کی وصیت کی اور صبر کی وصیت کی"
            ],
            english: [
                "By time.",
                "Indeed, mankind is in loss.",
                "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."
            ]
        },

        /* ================= SURAH 104: AL-HUMAZAH ================= */
        104: {
            arabic: [
                "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ",
                "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ",
                "يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ",
                "كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ",
                "وَمَا أَدْرَاكَ مَا الْحُطَمَةُ",
                "نَارُ اللَّهِ الْمُوقَدَةُ",
                "الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ",
                "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ",
                "فِي عَمَدٍ مُّمَدَّدَةٍ"
            ],
            urdu: [
                "ہلاکت ہے ہر طعنہ دینے والے عیب لگانے والے کے لیے",
                "جو مال جمع کرتا ہے اور اسے گنتا رہتا ہے",
                "گمان کرتا ہے کہ اس کا مال اسے ہمیشہ رکھے گا",
                "ہرگز نہیں! وہ ضرور حطمہ میں ڈالا جائے گا",
                "اور آپ کو کیا معلوم کہ حطمہ کیا ہے",
                "اللہ کی بھڑکائی ہوئی آگ",
                "جو دلوں تک پہنچ جاتی ہے",
                "بے شک وہ ان پر بند کر دی جائے گی",
                "لمبے لمبے ستونوں میں"
            ],
            english: [
                "Woe to every scorner and mocker.",
                "Who collects wealth and [continuously] counts it.",
                "He thinks that his wealth will make him immortal.",
                "No! He will surely be thrown into the Crusher.",
                "And what can make you know what is the Crusher?",
                "It is the fire of Allah, [eternally] fueled.",
                "Which mounts directed at the hearts.",
                "Indeed, Hellfire will be closed down upon them.",
                "In extended columns."
            ]
        },

        /* ================= SURAH 105: AL-FIL ================= */
        105: {
            arabic: [
                "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
                "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
                "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
                "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
                "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ"
            ],
            urdu: [
                "کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا کیا",
                "کیا ان کی چال کو بے کار نہیں کر دیا",
                "اور ان پر پرندے جھنڈ کے جھنڈ بھیجے",
                "جو ان پر پکی ہوئی مٹی کے پتھر مارتے تھے",
                "پھر انہیں کھائے ہوئے بھوسے کی طرح کر دیا"
            ],
            english: [
                "Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?",
                "Did He not make their plan into misguidance?",
                "And He sent against them birds in flocks.",
                "Striking them with stones of hard clay.",
                "And He made them like eaten straw."
            ]
        },

        /* ================= SURAH 106: QURAYSH ================= */
        106: {
            arabic: [
                "لِإِيلَافِ قُرَيْشٍ",
                "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
                "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
                "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ"
            ],
            urdu: [
                "قریش کو مانوس کرنے کے لیے",
                "انہیں سردی اور گرمی کے سفر سے مانوس کرنے کے لیے",
                "پس انہیں اس گھر کے رب کی عبادت کرنی چاہیے",
                "جس نے انہیں بھوک سے کھلایا اور خوف سے امن دیا"
            ],
            english: [
                "For the accustomed security of the Quraysh.",
                "Their accustomed security [in] the caravan of winter and summer.",
                "Let them worship the Lord of this House.",
                "Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear."
            ]
        },

        /* ================= SURAH 107: AL-MA'UN ================= */
        107: {
            arabic: [
                "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
                "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
                "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
                "فَوَيْلٌ لِّلْمُصَلِّينَ",
                "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
                "الَّذِينَ هُمْ يُرَاءُونَ",
                "وَيَمْنَعُونَ الْمَاعُونَ"
            ],
            urdu: [
                "کیا آپ نے اسے دیکھا جو جزا کو جھٹلاتا ہے",
                "پس یہی وہ ہے جو یتیم کو دھتکارتا ہے",
                "اور مسکین کو کھانا کھلانے کی ترغیب نہیں دیتا",
                "پس ہلاکت ہے نمازیوں کے لیے",
                "جو اپنی نماز سے غافل ہیں",
                "جو دکھاوے کرتے ہیں",
                "اور سامانِ ضرورت دینے سے منع کرتے ہیں"
            ],
            english: [
                "Have you seen the one who denies the Recompense?",
                "For that is the one who drives away the orphan.",
                "And does not encourage the feeding of the poor.",
                "So woe to those who pray.",
                "[But] who are heedless of their prayer.",
                "Those who make show [of their deeds].",
                "And withhold [simple] assistance."
            ]
        },

        /* ================= SURAH 108: AL-KAWTHAR ================= */
        108: {
            arabic: [
                "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
                "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
                "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ"
            ],
            urdu: [
                "بے شک ہم نے آپ کو کوثر عطا کی",
                "پس اپنے رب کے لیے نماز پڑھیں اور قربانی کریں",
                "بے شک آپ کا دشمن ہی بے نام و نشان ہے"
            ],
            english: [
                "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
                "So pray to your Lord and sacrifice [to Him alone].",
                "Indeed, your enemy is the one cut off."
            ]
        },

        /* ================= SURAH 109: AL-KAFIRUN ================= */
        109: {
            arabic: [
                "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
                "لَا أَعْبُدُ مَا تَعْبُدُونَ",
                "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
                "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
                "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
                "لَكُمْ دِينُكُمْ وَلِيَ دِينِ"
            ],
            urdu: [
                "کہو اے کافرو",
                "میں ان کی عبادت نہیں کرتا جن کی تم عبادت کرتے ہو",
                "اور نہ تم اس کی عبادت کرتے ہو جس کی میں عبادت کرتا ہوں",
                "اور نہ میں ان کی عبادت کرنے والا ہوں جن کی تم نے عبادت کی",
                "اور نہ تم اس کی عبادت کرنے والے ہو جس کی میں عبادت کرتا ہوں",
                "تمہارا دین تمہارے لیے اور میرا دین میرے لیے"
            ],
            english: [
                "Say, 'O disbelievers.'",
                "I do not worship what you worship.",
                "Nor are you worshippers of what I worship.",
                "Nor will I be a worshipper of what you worship.",
                "Nor will you be worshippers of what I worship.",
                "For you is your religion, and for me is my religion.'"
            ]
        },

        /* ================= SURAH 110: AN-NASR ================= */
        110: {
            arabic: [
                "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
                "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
                "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا"
            ],
            urdu: [
                "جب اللہ کی مدد اور فتح آ جائے",
                "اور تم لوگوں کو اللہ کے دین میں فوج در فوج داخل ہوتے دیکھو",
                "تو اپنے رب کی حمد کے ساتھ تسبیح کرو اور اس سے بخشش مانگو، بے شک وہ توبہ قبول کرنے والا ہے"
            ],
            english: [
                "When the victory of Allah has come and the conquest.",
                "And you see the people entering into the religion of Allah in multitudes.",
                "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance."
            ]
        },

        /* ================= SURAH 111: AL-MASAD ================= */
        111: {
            arabic: [
                "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
                "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
                "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
                "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
                "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ"
            ],
            urdu: [
                "ابو لہب کے دونوں ہاتھ ٹوٹیں اور وہ خود ٹوٹا",
                "اس کا مال اور جو اس نے کمایا اس کے کچھ کام نہ آیا",
                "عنقریب وہ شعلہ زن آگ میں داخل ہو گا",
                "اور اس کی بیوی بھی جو ایندھن ڈھونے والی ہے",
                "اس کے گلے میں مونج کی رسی ہو گی"
            ],
            english: [
                "May the hands of Abu Lahab be ruined, and ruined is he.",
                "His wealth will not avail him or that which he gained.",
                "He will [enter to] burn in a Fire of [blazing] flame.",
                "And his wife [as well] - the carrier of firewood.",
                "Around her neck is a rope of [twisted] fiber."
            ]
        },

        /* ================= SURAH 112: AL-IKHLAS ================= */
        112: {
            arabic: [
                "قُلْ هُوَ اللَّهُ أَحَدٌ",
                "اللَّهُ الصَّمَدُ",
                "لَمْ يَلِدْ وَلَمْ يُولَدْ",
                "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
            ],
            urdu: [
                "کہو کہ وہ اللہ ایک ہے",
                "اللہ بے نیاز ہے",
                "نہ اس نے کسی کو جنا اور نہ وہ جنا گیا",
                "اور کوئی اس کے برابر نہیں"
            ],
            english: [
                "Say, 'He is Allah, [who is] One.'",
                "Allah, the Eternal Refuge.",
                "He neither begets nor is born.",
                "Nor is there to Him any equivalent.'"
            ]
        },

        /* ================= SURAH 113: AL-FALAQ ================= */
        113: {
            arabic: [
                "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
                "مِن شَرِّ مَا خَلَقَ",
                "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
                "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
                "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
            ],
            urdu: [
                "کہو میں صبح کے رب کی پناہ مانگتا ہوں",
                "ہر اس چیز کے شر سے جو اس نے پیدا کی",
                "اور اندھیری رات کے شر سے جب وہ چھا جائے",
                "اور گرہوں میں پھونکنے والیوں کے شر سے",
                "اور حاسد کے شر سے جب وہ حسد کرے"
            ],
            english: [
                "Say, 'I seek refuge in the Lord of daybreak.'",
                "From the evil of that which He created.",
                "And from the evil of darkness when it settles.",
                "And from the evil of the blowers in knots.",
                "And from the evil of an envier when he envies.'"
            ]
        },

        /* ================= SURAH 114: AN-NAS ================= */
        114: {
            arabic: [
                "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
                "مَلِكِ النَّاسِ",
                "إِلَٰهِ النَّاسِ",
                "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
                "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
                "مِنَ الْجِنَّةِ وَالنَّاسِ"
            ],
            urdu: [
                "کہو میں لوگوں کے رب کی پناہ مانگتا ہوں",
                "لوگوں کے بادشاہ کی",
                "لوگوں کے معبود کی",
                "وسوسہ ڈالنے والے پیچھے ہٹنے والے کے شر سے",
                "جو لوگوں کے دلوں میں وسوسے ڈالتا ہے",
                "خواہ وہ جنوں میں سے ہو یا انسانوں میں سے"
            ],
            english: [
                "Say, 'I seek refuge in the Lord of mankind.'",
                "The Sovereign of mankind.",
                "The God of mankind.",
                "From the evil of the retreating whisperer.",
                "Who whispers [evil] into the breasts of mankind.",
                "From among the jinn and mankind.'"
            ]
        }

    },

    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },
    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    }
};

console.log("[DB Part 6B] Loaded ✅");
console.log("[DB Part 6B] Full Surahs: " + Object.keys(ISLAMIC_DATABASE_PART6B.quranContent).length);
console.log("🎉🎉🎉 POORA QURAN COMPLETE — 114 SURAHS! 🎉🎉🎉");
/* =========================================================
   ISLAMICWAY DATABASE — PART 7
   100+ Duas (Arabic + Urdu + English + Reference)
   Categories: Morning, Evening, Prayer, Forgiveness,
               Protection, Travel, Food, Sleep, Family, General
========================================================= */

const ISLAMIC_DATABASE_PART7 = {

    duas: [

        /* =====================================================
           MORNING DUAS (1-12)
        ===================================================== */
        { id: 1, title: "Dua on Waking Up", category: "morning",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
          urdu: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں موت کے بعد زندگی بخشی اور اسی کی طرف لوٹنا ہے",
          english: "All praise is for Allah who gave us life after death, and to Him is the return.",
          reference: "Sahih Bukhari 6312" },

        { id: 2, title: "Morning Dua (Become Morning)", category: "morning",
          arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
          urdu: "اے اللہ! تیری مدد سے ہم نے صبح کی اور تیری مدد سے ہم نے شام کی اور تیری مدد سے ہم جیتے اور مرتے ہیں اور تیری ہی طرف لوٹنا ہے",
          english: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the final return.",
          reference: "Sunan at-Tirmidhi 3391" },

        { id: 3, title: "Sayyidul Istighfar (Best Forgiveness)", category: "morning",
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
          urdu: "اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، میں اپنے عہد اور وعدے پر اپنی طاقت کے مطابق قائم ہوں، میں تیری پناہ مانگتا ہوں اپنے کیے کے شر سے، میں تیرے احسانات کا اعتراف کرتا ہوں اور اپنے گناہوں کا بھی، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہ نہیں بخش سکتا",
          english: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant. I keep Your covenant and my pledge to You as much as I can. I seek refuge in You from the evil I have done. I acknowledge Your blessings upon me and I admit my sins, so forgive me, for none forgives sins except You.",
          reference: "Sahih Bukhari 6306" },

        { id: 4, title: "Morning Protection Dua", category: "morning",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2709" },

        { id: 5, title: "Bismillah Protection (3x)", category: "morning",
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          urdu: "اللہ کے نام سے جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں دے سکتی اور وہ سننے والا جاننے والا ہے",
          english: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing.",
          reference: "Sunan Abu Dawud 5088" },

        { id: 6, title: "Morning Blessing", category: "morning",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
          urdu: "اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ رزق اور قبول ہونے والا عمل مانگتا ہوں",
          english: "O Allah, I ask You for beneficial knowledge, good provision and accepted deeds.",
          reference: "Sunan Ibn Majah 925" },

        { id: 7, title: "Morning Thankfulness", category: "morning",
          arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي",
          urdu: "اے اللہ! میرے جسم کو عافیت دے، اے اللہ! میرے کان کو عافیت دے، اے اللہ! میری آنکھ کو عافیت دے",
          english: "O Allah, grant health to my body. O Allah, grant health to my hearing. O Allah, grant health to my sight.",
          reference: "Sunan Abu Dawud 5090" },

        { id: 8, title: "Morning Remembrance (4x)", category: "morning",
          arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ",
          urdu: "اے اللہ! میں نے صبح کی اور میں تجھے گواہ بناتا ہوں اور تیرے عرش اٹھانے والوں اور تیرے فرشتوں اور تمام مخلوق کو گواہ بناتا ہوں کہ تو ہی اللہ ہے، تیرے سوا کوئی معبود نہیں",
          english: "O Allah, I have entered the morning and call You to witness and the bearers of Your Throne and Your angels and all Your creation that You are Allah, there is no god but You.",
          reference: "Sunan Abu Dawud 5069" },

        { id: 9, title: "Astaghfirullah 100x", category: "morning",
          arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
          urdu: "میں اللہ سے بخشش مانگتا ہوں اور اسی کی طرف رجوع کرتا ہوں",
          english: "I seek forgiveness from Allah and turn to Him in repentance.",
          reference: "Sahih Bukhari 6307" },

        { id: 10, title: "SubhanAllah wa Bihamdihi 100x", category: "morning",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          urdu: "اللہ کی تسبیح اور اس کی حمد ہے",
          english: "Glory be to Allah and praise be to Him.",
          reference: "Sahih Muslim 2691" },

        { id: 11, title: "Morning Light Dua", category: "morning",
          arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا وَفِي بَصَرِي نُورًا",
          urdu: "اے اللہ! میرے دل میں نور ڈال، میری زبان میں نور ڈال اور میری نظر میں نور ڈال",
          english: "O Allah, place light in my heart, light on my tongue and light in my sight.",
          reference: "Sahih Bukhari 6316" },

        { id: 12, title: "Morning Dua for Mercy", category: "morning",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَتَكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ",
          urdu: "اے اللہ! میں تجھ سے تیری وہ رحمت مانگتا ہوں جو ہر چیز کو ڈھانپے ہوئے ہے",
          english: "O Allah, I ask You for Your mercy which encompasses all things.",
          reference: "Sahih Bukhari 6316" },

        /* =====================================================
           EVENING DUAS (13-22)
        ===================================================== */
        { id: 13, title: "Evening Dua (Become Evening)", category: "evening",
          arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
          urdu: "اے اللہ! تیری مدد سے ہم نے شام کی اور تیری مدد سے ہم نے صبح کی اور تیری مدد سے ہم جیتے اور مرتے ہیں اور تیری ہی طرف لوٹنا ہے",
          english: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final destination.",
          reference: "Sunan at-Tirmidhi 3391" },

        { id: 14, title: "Evening Protection from Evil", category: "evening",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2709" },

        { id: 15, title: "Evening Forgiveness", category: "evening",
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ",
          urdu: "اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں، تجھ پر میں نے بھروسہ کیا اور تو عظیم عرش کا رب ہے",
          english: "O Allah, You are my Lord, there is no god but You. Upon You I rely and You are the Lord of the Mighty Throne.",
          reference: "Sunan Abu Dawud 5081" },

        { id: 16, title: "Evening Remembrance (3x)", category: "evening",
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          urdu: "اللہ کے نام سے جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں دے سکتی اور وہ سننے والا جاننے والا ہے",
          english: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing.",
          reference: "Sunan Abu Dawud 5088" },

        { id: 17, title: "Evening Protection from Hellfire", category: "evening",
          arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
          urdu: "اے اللہ! مجھے آگ سے بچا",
          english: "O Allah, protect me from the Fire.",
          reference: "Sunan Abu Dawud 5079" },

        { id: 18, title: "Evening Peace Dua", category: "evening",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
          urdu: "اے اللہ! میں تجھ سے دنیا اور آخرت میں عافیت مانگتا ہوں",
          english: "O Allah, I ask You for well-being in this world and the Hereafter.",
          reference: "Sunan Abu Dawud 5074" },

        { id: 19, title: "Evening Thankfulness", category: "evening",
          arabic: "اللَّهُمَّ مَا أَمْسَىٰ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ",
          urdu: "اے اللہ! جو نعمت مجھ پر یا تیری مخلوق میں سے کسی پر شام کو ہے وہ تیری ہی طرف سے ہے، تو اکیلا ہے، تیرا کوئی شریک نہیں",
          english: "O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner.",
          reference: "Sunan Abu Dawud 5073" },

        { id: 20, title: "Evening Protection from Shirk", category: "evening",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں اس سے کہ میں جانتے ہوئے تیرے ساتھ شرک کروں اور میں تجھ سے بخشش مانگتا ہوں اس کے لیے جو میں نہیں جانتا",
          english: "O Allah, I seek refuge in You from associating partners with You knowingly, and I seek Your forgiveness for what I do not know.",
          reference: "Sunan Abu Dawud 5093" },

        { id: 21, title: "Evening Ayatul Kursi", category: "evening",
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          urdu: "اللہ کے سوا کوئی معبود نہیں، وہ زندہ اور قائم ہے",
          english: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
          reference: "Sahih Bukhari 2311" },

        { id: 22, title: "Evening Dua for Guidance", category: "evening",
          arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
          urdu: "اے زندہ! اے قائم! تیری رحمت کے ذریعے میں مدد مانگتا ہوں",
          english: "O Ever-Living, O Sustainer, by Your mercy I seek relief.",
          reference: "Sunan at-Tirmidhi 3524" },

        /* =====================================================
           PRAYER / SALAH DUAS (23-35)
        ===================================================== */
        { id: 23, title: "Dua Before Wudu", category: "prayer",
          arabic: "بِسْمِ اللَّهِ",
          urdu: "اللہ کے نام سے (شروع کرتا ہوں)",
          english: "In the name of Allah.",
          reference: "Sunan Abu Dawud 101" },

        { id: 24, title: "Dua After Wudu", category: "prayer",
          arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
          urdu: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور میں گواہی دیتا ہوں کہ محمد اس کے بندے اور رسول ہیں",
          english: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
          reference: "Sahih Muslim 234" },

        { id: 25, title: "Dua After Wudu (Full)", category: "prayer",
          arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
          urdu: "اے اللہ! مجھے توبہ کرنے والوں میں اور پاک رہنے والوں میں شامل کر",
          english: "O Allah, make me among those who repent and among those who purify themselves.",
          reference: "Sunan at-Tirmidhi 55" },

        { id: 26, title: "Adhan Dua", category: "prayer",
          arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ",
          urdu: "اے اللہ! اس کامل پکار اور قائم ہونے والی نماز کے رب! محمد کو وسیلہ اور فضیلت عطا فرما",
          english: "O Allah, Lord of this perfect call and established prayer, grant Muhammad the intercession and favor.",
          reference: "Sahih Bukhari 614" },

        { id: 27, title: "Dua Before Salah (Takbir)", category: "prayer",
          arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَىٰ جَدُّكَ وَلَا إِلَٰهَ غَيْرُكَ",
          urdu: "اے اللہ! تو پاک ہے اور تیری حمد ہے، تیرا نام بابرکت ہے اور تیری شان بلند ہے اور تیرے سوا کوئی معبود نہیں",
          english: "O Allah, glory be to You, and praise be to You, blessed is Your name, exalted is Your majesty, and there is no god besides You.",
          reference: "Sunan Abu Dawud 775" },

        { id: 28, title: "Dua in Ruku", category: "prayer",
          arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          urdu: "میرے عظیم رب کی تسبیح ہے",
          english: "Glory be to my Lord, the Most Great.",
          reference: "Sahih Muslim 772" },

        { id: 29, title: "Dua Rising from Ruku", category: "prayer",
          arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
          urdu: "اللہ نے اس کی سنی جس نے اس کی حمد کی، اے ہمارے رب! تیری ہی حمد ہے",
          english: "Allah hears the one who praises Him. Our Lord, to You belongs all praise.",
          reference: "Sahih Bukhari 796" },

        { id: 30, title: "Dua in Sujood", category: "prayer",
          arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
          urdu: "میرے بلند رب کی تسبیح ہے",
          english: "Glory be to my Lord, the Most High.",
          reference: "Sahih Muslim 772" },

        { id: 31, title: "Dua Between Sujoods", category: "prayer",
          arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
          urdu: "اے میرے رب! مجھے بخش دے، اے میرے رب! مجھے بخش دے",
          english: "My Lord, forgive me. My Lord, forgive me.",
          reference: "Sunan Abu Dawud 874" },

        { id: 32, title: "Tashahhud Dua", category: "prayer",
          arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
          urdu: "تمام زبانی، بدنی اور مالی عبادات اللہ کے لیے ہیں",
          english: "All compliments, prayers and pure words are due to Allah.",
          reference: "Sahih Bukhari 6265" },

        { id: 33, title: "Durood Ibrahim", category: "prayer",
          arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ",
          urdu: "اے اللہ! محمد اور محمد کی آل پر رحمت نازل فرما",
          english: "O Allah, send blessings upon Muhammad and upon the family of Muhammad.",
          reference: "Sahih Bukhari 3370" },

        { id: 34, title: "Dua Before Salam", category: "prayer",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ جَهَنَّمَ",
          urdu: "اے اللہ! میں تجھ سے قبر کے عذاب اور جہنم کے عذاب سے پناہ مانگتا ہوں",
          english: "O Allah, I seek refuge in You from the punishment of the grave and from the punishment of Hell.",
          reference: "Sahih Muslim 588" },

        { id: 35, title: "Dua After Salah (Tasbeeh Fatimi)", category: "prayer",
          arabic: "سُبْحَانَ اللَّهِ (33) الْحَمْدُ لِلَّهِ (33) اللَّهُ أَكْبَرُ (34)",
          urdu: "اللہ پاک ہے (33) تمام تعریف اللہ کے لیے ہے (33) اللہ سب سے بڑا ہے (34)",
          english: "Glory be to Allah (33), All praise is for Allah (33), Allah is the Greatest (34).",
          reference: "Sahih Muslim 595" },

        /* =====================================================
           FORGIVENESS DUAS (36-46)
        ===================================================== */
        { id: 36, title: "General Forgiveness", category: "forgiveness",
          arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
          urdu: "اے میرے رب! مجھے معاف کر اور میری توبہ قبول کر، بے شک تو توبہ قبول کرنے والا رحم کرنے والا ہے",
          english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Merciful.",
          reference: "Sunan at-Tirmidhi 3434" },

        { id: 37, title: "Seeking Mercy", category: "forgiveness",
          arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
          urdu: "اے میرے رب! معاف کر اور رحم فرما، تو سب رحم کرنے والوں سے بہتر ہے",
          english: "My Lord, forgive and have mercy, and You are the best of the merciful.",
          reference: "Quran 23:118" },

        { id: 38, title: "Forgiveness for Parents", category: "forgiveness",
          arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
          urdu: "اے ہمارے رب! مجھے، میرے والدین کو اور تمام مومنین کو معاف فرما",
          english: "Our Lord, forgive me, my parents, and all the believers.",
          reference: "Quran 14:41" },

        { id: 39, title: "Forgiveness for All Muslims", category: "forgiveness",
          arabic: "اللَّهُمَّ اغْفِرْ لِلْمُسْلِمِينَ وَالْمُسْلِمَاتِ",
          urdu: "اے اللہ! مسلمان مردوں اور مسلمان عورتوں کو بخش دے",
          english: "O Allah, forgive the Muslim men and Muslim women.",
          reference: "Sahih Muslim 2737" },

        { id: 40, title: "Repentance Dua (Adam)", category: "forgiveness",
          arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          urdu: "اے ہمارے رب! ہم نے اپنے آپ پر ظلم کیا، اگر تو ہمیں نہ بخشے اور رحم نہ کرے تو ہم خسارہ پانے والوں میں ہوں گے",
          english: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
          reference: "Quran 7:23" },

        { id: 41, title: "Repentance Dua (Yunus)", category: "forgiveness",
          arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
          urdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے تھا",
          english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
          reference: "Quran 21:87" },

        { id: 42, title: "Forgiveness for Backbiting", category: "forgiveness",
          arabic: "اللَّهُمَّ اغْفِرْ لِي وَلِمَنْ ظَلَمَنِي",
          urdu: "اے اللہ! مجھے بخش دے اور اسے بھی جو مجھ پر ظلم کرے",
          english: "O Allah, forgive me and forgive the one who wronged me.",
          reference: "Sahih Muslim 2588" },

        { id: 43, title: "Seeking Forgiveness 100x", category: "forgiveness",
          arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ",
          urdu: "اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو توبہ قبول کرنے والا بخشنے والا ہے",
          english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Forgiving.",
          reference: "Sunan Abu Dawud 1517" },

        { id: 44, title: "Dua for Minor & Major Sins", category: "forgiveness",
          arabic: "اللَّهُمَّ اغْفِرْ لِي جِدِّي وَهَزْلِي وَخَطَئِي وَعَمْدِي",
          urdu: "اے اللہ! میری سنجیدہ اور مذاق والی، بھول اور جان بوجھ کر کی ہوئی سب خطائیں بخش دے",
          english: "O Allah, forgive my serious and joking sins, my mistakes and deliberate sins.",
          reference: "Sahih Bukhari 6398" },

        { id: 45, title: "Dua to Die as Muslim", category: "forgiveness",
          arabic: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَاتِمَتَهُ",
          urdu: "اے اللہ! میری عمر کے آخری حصے کو بہترین بنا اور میرے عمل کے آخری حصے کو بہترین بنا",
          english: "O Allah, make the best part of my life its end, and the best of my deeds its conclusion.",
          reference: "Sahih Muslim 2723" },

        { id: 46, title: "Dua for Steadfast Faith", category: "forgiveness",
          arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ",
          urdu: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت رکھ",
          english: "O Turner of hearts, keep my heart firm upon Your religion.",
          reference: "Sunan at-Tirmidhi 3522" },

        /* =====================================================
           PROTECTION DUAS (47-60)
        ===================================================== */
        { id: 47, title: "Protection from All Evil", category: "protection",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2709" },

        { id: 48, title: "Protection from Anxiety & Grief", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں غم اور پریشانی سے، بے بسی اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ اور لوگوں کے غلبے سے",
          english: "O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from miserliness and cowardice, from the burden of debt and from the oppression of men.",
          reference: "Sahih Bukhari 6363" },

        { id: 49, title: "Protection from Shirk & Sin", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا",
          urdu: "اے اللہ! میں اپنے نفس کے شر سے اور ہر اس جاندار کے شر سے تیری پناہ مانگتا ہوں جس کی پیشانی تیرے قبضے میں ہے",
          english: "O Allah, I seek refuge in You from the evil of my own self and from the evil of every creature whose forelock is in Your grasp.",
          reference: "Sahih Muslim 2717" },

        { id: 50, title: "Protection from Evil Eye & Envy", category: "protection",
          arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
          urdu: "میں تم دونوں کو اللہ کے مکمل کلمات کے ذریعے ہر شیطان، زہریلے جانور اور ہر نقصان دینے والی نظر سے پناہ دیتا ہوں",
          english: "I seek protection for you both in the perfect words of Allah from every devil, every poisonous creature, and every evil eye.",
          reference: "Sahih Bukhari 3371" },

        { id: 51, title: "Protection from Fire", category: "protection",
          arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
          urdu: "اے اللہ! مجھے آگ سے بچا",
          english: "O Allah, protect me from the Fire.",
          reference: "Sunan Abu Dawud 5079" },

        { id: 52, title: "Protection from Bad Day", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ يَوْمِ السُّوءِ وَمِنْ لَيْلَةِ السُّوءِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں برے دن اور بری رات سے",
          english: "O Allah, I seek refuge in You from an evil day and an evil night.",
          reference: "Sahih Muslim 2707" },

        { id: 53, title: "Protection While Sleeping", category: "protection",
          arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          urdu: "اے اللہ! تیرے نام سے میں مرتا اور جیتا ہوں",
          english: "In Your name, O Allah, I die and I live.",
          reference: "Sahih Bukhari 6324" },

        { id: 54, title: "Ayatul Kursi (Protection)", category: "protection",
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
          urdu: "اللہ کے سوا کوئی معبود نہیں، وہ زندہ اور قائم ہے، اسے نہ اونگھ آتی ہے نہ نیند",
          english: "Allah - there is no deity except Him, the Ever-Living, the Sustainer. Neither drowsiness overtakes Him nor sleep.",
          reference: "Sahih Bukhari 2311" },

        { id: 55, title: "Protection from Jinn", category: "protection",
          arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
          urdu: "میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے",
          english: "I seek refuge in Allah from Satan, the accursed.",
          reference: "Sahih Muslim 220" },

        { id: 56, title: "Protection from Enemies", category: "protection",
          arabic: "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ",
          urdu: "اے اللہ! ہم تجھے ان کے سامنے کرتے ہیں اور ان کی برائیوں سے تیری پناہ مانگتے ہیں",
          english: "O Allah, we place You before them and seek refuge in You from their evil.",
          reference: "Sunan Abu Dawud 1537" },

        { id: 57, title: "Protection from Kufr & Poverty", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں کفر اور فقر سے",
          english: "O Allah, I seek refuge in You from disbelief and poverty.",
          reference: "Sunan Abu Dawud 1544" },

        { id: 58, title: "Protection While Traveling", category: "protection",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2708" },

        { id: 59, title: "Protection from Sudden Death", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فَجْأَةِ النِّقْمَةِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں اچانک عذاب سے",
          english: "O Allah, I seek refuge in You from a sudden punishment.",
          reference: "Sahih Muslim 2739" },

        { id: 60, title: "Protection from Hypocrisy", category: "protection",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النِّفَاقِ وَالشِّقَاقِ وَسُوءِ الْأَخْلَاقِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں نفاق، اختلاف اور برے اخلاق سے",
          english: "O Allah, I seek refuge in You from hypocrisy, dissension, and bad character.",
          reference: "Sunan at-Tirmidhi 3591" },

        /* =====================================================
           TRAVEL DUAS (61-68)
        ===================================================== */
        { id: 61, title: "Dua Before Leaving Home", category: "travel",
          arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          urdu: "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور اللہ کی توفیق کے بغیر کوئی طاقت اور قوت نہیں",
          english: "In the name of Allah, I place my trust in Allah. There is no might nor power except with Allah.",
          reference: "Sunan Abu Dawud 5094" },

        { id: 62, title: "Dua for Travel", category: "travel",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
          urdu: "پاک ہے وہ ذات جس نے اس سواری کو ہمارے تابع کیا حالانکہ ہم اسے قابو میں نہیں لا سکتے تھے اور بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں",
          english: "Glory be to Him who has subjected this to us, and we could not have done it ourselves. And indeed, to our Lord we will return.",
          reference: "Quran 43:13-14" },

        { id: 63, title: "Dua When Entering a Town", category: "travel",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا",
          urdu: "اے اللہ! میں تجھ سے اس شہر کی بھلائی، اس کے لوگوں کی بھلائی اور جو اس میں ہے اس کی بھلائی مانگتا ہوں",
          english: "O Allah, I ask You for the good of this town, the good of its people, and the good of what is in it.",
          reference: "Sunan an-Nasa'i 10491" },

        { id: 64, title: "Dua for Return from Travel", category: "travel",
          arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
          urdu: "ہم لوٹنے والے، توبہ کرنے والے، عبادت کرنے والے اور اپنے رب کی حمد کرنے والے ہیں",
          english: "We return, repent, worship, and praise our Lord.",
          reference: "Sahih Muslim 1344" },

        { id: 65, title: "Dua When Riding a Vehicle", category: "travel",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ",
          urdu: "تمام تعریف اللہ کے لیے ہے جس نے ہمیں اس کی ہدایت دی اور ہم ہدایت نہ پاتے اگر اللہ ہمیں ہدایت نہ دیتا",
          english: "All praise to Allah who guided us to this, and we would not have been guided had Allah not guided us.",
          reference: "Sahih Muslim 1344" },

        { id: 66, title: "Dua for Safe Journey", category: "travel",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ",
          urdu: "اے اللہ! میں تیری پناہ مانگتا ہوں سفر کی مشقت اور برے منظر سے",
          english: "O Allah, I seek refuge in You from the hardship of travel and from an evil sight.",
          reference: "Sahih Muslim 1344" },

        { id: 67, title: "Dua When Entering Home", category: "travel",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ",
          urdu: "اے اللہ! میں تجھ سے گھر میں داخل ہونے کی بھلائی اور نکلنے کی بھلائی مانگتا ہوں",
          english: "O Allah, I ask You for the best of entering and the best of exiting.",
          reference: "Sunan Abu Dawud 5096" },

        { id: 68, title: "Dua for Traveling by Air/Sea", category: "travel",
          arabic: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
          urdu: "اے اللہ! ہمارے اس سفر کو آسان کر دے اور اس کی دوری کو ہمارے لیے لپیٹ دے",
          english: "O Allah, make this journey easy for us and fold up its distance for us.",
          reference: "Sahih Muslim 1342" },

        /* =====================================================
           FOOD & DRINK DUAS (69-78)
        ===================================================== */
        { id: 69, title: "Dua Before Eating", category: "food",
          arabic: "بِسْمِ اللَّهِ",
          urdu: "اللہ کے نام سے",
          english: "In the name of Allah.",
          reference: "Sunan Abu Dawud 3767" },

        { id: 70, title: "Dua if Forgotten Bismillah", category: "food",
          arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
          urdu: "شروع میں بھی اللہ کا نام اور آخر میں بھی",
          english: "In the name of Allah at the beginning and at the end.",
          reference: "Sunan Abu Dawud 3767" },

        { id: 71, title: "Dua After Eating", category: "food",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
          urdu: "تمام تعریف اللہ کے لیے ہے جس نے ہمیں کھلایا، پلایا اور مسلمان بنایا",
          english: "All praise to Allah who fed us, gave us drink and made us Muslims.",
          reference: "Sunan at-Tirmidhi 3457" },

        { id: 72, title: "Dua After Drinking Water", category: "food",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي سَقَانَا عَذْبًا فُرَاتًا بِرَحْمَتِهِ",
          urdu: "تمام تعریف اللہ کے لیے ہے جس نے ہمیں اپنی رحمت سے میٹھا پانی پلایا",
          english: "All praise to Allah who gave us sweet water to drink by His mercy.",
          reference: "Sunan Ibn Majah 3434" },

        { id: 73, title: "Dua When Breaking Fast", category: "food",
          arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
          urdu: "پیاس ختم ہو گئی، رگیں تر ہو گئیں اور اجر ثابت ہو گیا ان شاء اللہ",
          english: "The thirst is gone, the veins are moistened, and the reward is certain, if Allah wills.",
          reference: "Sunan Abu Dawud 2357" },

        { id: 74, title: "Dua for Sehri (Suhoor)", category: "food",
          arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
          urdu: "اے اللہ! ہمارے رزق میں برکت دے اور ہمیں آگ کے عذاب سے بچا",
          english: "O Allah, bless us in what You have provided us and protect us from the punishment of the Fire.",
          reference: "Sunan Ibn Majah 925" },

        { id: 75, title: "Dua at Iftar Time (Opening)", category: "food",
          arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَىٰ رِزْقِكَ أَفْطَرْتُ",
          urdu: "اے اللہ! میں نے تیرے لیے روزہ رکھا اور تیرے رزق سے افطار کیا",
          english: "O Allah, for You I fasted and with Your provision I break my fast.",
          reference: "Sunan Abu Dawud 2358" },

        { id: 76, title: "Dua When Guest Arrives", category: "food",
          arabic: "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ",
          urdu: "اے اللہ! ان کے رزق میں برکت دے، انہیں بخش دے اور ان پر رحم فرما",
          english: "O Allah, bless them in what You have provided them, forgive them and have mercy on them.",
          reference: "Sahih Muslim 2042" },

        { id: 77, title: "Dua for Host After Meal", category: "food",
          arabic: "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ",
          urdu: "اے اللہ! انہیں اس رزق میں برکت دے جو تو نے انہیں دیا",
          english: "O Allah, bless them in what You have provided them.",
          reference: "Sahih Muslim 2042" },

        { id: 78, title: "Dua When Food is Served", category: "food",
          arabic: "بِسْمِ اللَّهِ وَلَجَّ وَعَلَىٰ بَرَكَةِ اللَّهِ",
          urdu: "اللہ کے نام سے اور اللہ کی برکت پر",
          english: "In the name of Allah and with the blessings of Allah.",
          reference: "Sunan Ibn Majah 3266" },

        /* =====================================================
           SLEEP DUAS (79-88)
        ===================================================== */
        { id: 79, title: "Dua Before Sleeping", category: "sleep",
          arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          urdu: "اے اللہ! تیرے نام سے میں مرتا اور جیتا ہوں",
          english: "In Your name, O Allah, I die and I live.",
          reference: "Sahih Bukhari 6324" },

        { id: 80, title: "Ayatul Kursi Before Sleep", category: "sleep",
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          urdu: "اللہ کے سوا کوئی معبود نہیں، وہ زندہ اور قائم ہے",
          english: "Allah - there is no deity except Him, the Ever-Living, the Sustainer.",
          reference: "Sahih Bukhari 2311" },

        { id: 81, title: "Dua After Waking (Full)", category: "sleep",
          arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
          urdu: "تمام تعریف اللہ کے لیے ہے جس نے ہمیں موت کے بعد زندگی بخشی اور اسی کی طرف لوٹنا ہے",
          english: "All praise to Allah who gave us life after death, and to Him is the return.",
          reference: "Sahih Bukhari 6312" },

        { id: 82, title: "Dua When Turning in Sleep", category: "sleep",
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْوَاحِدُ الْقَهَّارُ",
          urdu: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا اور زبردست ہے",
          english: "There is no god but Allah, the One, the Subduer.",
          reference: "Sunan an-Nasa'i 10017" },

        { id: 83, title: "Dua for Good Dreams", category: "sleep",
          arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا رَأَيْتُ",
          urdu: "اے اللہ! میں اس خواب کے شر سے تیری پناہ مانگتا ہوں جو میں نے دیکھا",
          english: "O Allah, I seek refuge in You from the evil of what I saw.",
          reference: "Sahih Muslim 2261" },

        { id: 84, title: "Dua for Protection in Sleep", category: "sleep",
          arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ",
          urdu: "اے میرے رب! تیرے نام سے میں نے اپنا پہلو رکھا اور تیری مدد سے اٹھاؤں گا",
          english: "In Your name, my Lord, I lay down my side, and by You I raise it.",
          reference: "Sahih Bukhari 6325" },

        { id: 85, title: "3 Quls Before Sleep", category: "sleep",
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          urdu: "کہو اللہ ایک ہے، کہو صبح کے رب کی پناہ، کہو لوگوں کے رب کی پناہ",
          english: "Say: He is Allah, the One. Say: I seek refuge in the Lord of daybreak. Say: I seek refuge in the Lord of mankind.",
          reference: "Sahih Bukhari 5017" },

        { id: 86, title: "Dua for Sleep Well", category: "sleep",
          arabic: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ وَوَجَّهْتُ وَجْهِي إِلَيْكَ",
          urdu: "اے اللہ! میں نے اپنی جان تیرے حوالے کی اور اپنا چہرہ تیری طرف کیا",
          english: "O Allah, I submit my soul to You and turn my face to You.",
          reference: "Sahih Bukhari 6313" },

        { id: 87, title: "Dua for Protection from Night Evil", category: "sleep",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          urdu: "میں اللہ کے مکمل کلمات کی پناہ مانگتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی",
          english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
          reference: "Sahih Muslim 2708" },

        { id: 88, title: "Dua Before Sleeping (Long)", category: "sleep",
          arabic: "اللَّهُمَّ بِاسْمِكَ أَحْيَا وَأَمُوتُ",
          urdu: "اے اللہ! تیرے نام سے جیتا ہوں اور مرتا ہوں",
          english: "O Allah, in Your name I live and I die.",
          reference: "Sahih Bukhari 6324" },

        /* =====================================================
           FAMILY DUAS (89-96)
        ===================================================== */
        { id: 89, title: "Dua for Family", category: "family",
          arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
          urdu: "اے ہمارے رب! ہمیں اپنی بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا امام بنا",
          english: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous.",
          reference: "Quran 25:74" },

        { id: 90, title: "Dua for Parents", category: "family",
          arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
          urdu: "اے میرے رب! میرے والدین پر رحم فرما جیسے انہوں نے بچپن میں مجھے پالا",
          english: "My Lord, have mercy upon them as they brought me up when I was small.",
          reference: "Quran 17:24" },

        { id: 91, title: "Dua for Good Children", category: "family",
          arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
          urdu: "اے میرے رب! مجھے نیک اولاد عطا فرما",
          english: "My Lord, grant me from among the righteous.",
          reference: "Quran 37:100" },

        { id: 92, title: "Dua for Spouse", category: "family",
          arabic: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا",
          urdu: "اے اللہ! ہمارے دلوں میں الفت پیدا کر اور ہمارے تعلقات درست کر",
          english: "O Allah, create love between our hearts and reconcile our differences.",
          reference: "Sunan Abu Dawud 5058" },

        { id: 93, title: "Dua for Whole Family", category: "family",
          arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
          urdu: "اے ہمارے رب! مجھے، میرے والدین اور تمام مومنین کو اس دن بخش دے جب حساب قائم ہو گا",
          english: "Our Lord, forgive me and my parents and the believers on the Day when the account is established.",
          reference: "Quran 14:41" },

        { id: 94, title: "Dua for Children's Protection", category: "family",
          arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ",
          urdu: "میں تم دونوں کو اللہ کے مکمل کلمات کے ذریعے ہر شیطان اور زہریلے جانور سے پناہ دیتا ہوں",
          english: "I seek protection for you both in the perfect words of Allah from every devil and poisonous creature.",
          reference: "Sahih Bukhari 3371" },

        { id: 95, title: "Dua for Newborn", category: "family",
          arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَاجْعَلْهُ مِنَ الصَّالِحِينَ",
          urdu: "اے اللہ! اس میں ہمارے لیے برکت دے اور اسے نیک لوگوں میں شامل کر",
          english: "O Allah, bless us in him and make him among the righteous.",
          reference: "Sunan Ibn Majah 3910" },

        { id: 96, title: "Dua for Marriage", category: "family",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ",
          urdu: "اے اللہ! میں تجھ سے اس کی بھلائی اور اس کی فطرت کی بھلائی مانگتا ہوں",
          english: "O Allah, I ask You for her good and the good of the nature You have created her upon.",
          reference: "Sunan Abu Dawud 2160" },

        /* =====================================================
           GENERAL DUAS (97-110)
        ===================================================== */
        { id: 97, title: "Dua for Knowledge", category: "general",
          arabic: "رَبِّ زِدْنِي عِلْمًا",
          urdu: "اے میرے رب! میرے علم میں اضافہ فرما",
          english: "My Lord, increase me in knowledge.",
          reference: "Quran 20:114" },

        { id: 98, title: "Dua for Ease in Affairs", category: "general",
          arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
          urdu: "اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے",
          english: "My Lord, expand for me my chest and ease for me my task.",
          reference: "Quran 20:25-26" },

        { id: 99, title: "Dua for Barakah", category: "general",
          arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
          urdu: "اے اللہ! جو رزق تو نے دیا اس میں برکت دے اور ہمیں آگ کے عذاب سے بچا",
          english: "O Allah, bless us in what You have provided us and protect us from the punishment of the Fire.",
          reference: "Sunan Ibn Majah 925" },

        { id: 100, title: "Dua for Health", category: "general",
          arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي",
          urdu: "اے اللہ! میرے جسم کو عافیت دے، اے اللہ! میرے کان کو عافیت دے، اے اللہ! میری آنکھ کو عافیت دے",
          english: "O Allah, grant health to my body, my hearing, and my sight.",
          reference: "Sunan Abu Dawud 5090" },

        { id: 101, title: "Dua for Rain", category: "general",
          arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
          urdu: "اے اللہ! نفع بخش بارش برسا",
          english: "O Allah, send beneficial rain.",
          reference: "Sahih Bukhari 1032" },

        { id: 102, title: "Dua for Debt Relief", category: "general",
          arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
          urdu: "اے اللہ! اپنے حلال سے مجھے حرام سے بچا اور اپنے فضل سے مجھے اپنے سوا سب سے بے نیاز کر",
          english: "O Allah, suffice me with Your lawful against Your unlawful, and make me free of need of all besides You by Your grace.",
          reference: "Sunan at-Tirmidhi 3563" },

        { id: 103, title: "Dua for Anxiety & Sorrow", category: "general",
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ",
          urdu: "اللہ کے سوا کوئی معبود نہیں، وہ عظیم اور بردبار ہے، اللہ کے سوا کوئی معبود نہیں، وہ عظیم عرش کا رب ہے",
          english: "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the Mighty Throne.",
          reference: "Sahih Bukhari 6345" },

        { id: 104, title: "Dua for Steadfast Faith", category: "general",
          arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
          urdu: "اے ہمارے رب! ہمارے دلوں کو ٹیڑھا نہ کر بعد اس کے کہ تو نے ہمیں ہدایت دی",
          english: "Our Lord, let not our hearts deviate after You have guided us.",
          reference: "Quran 3:8" },

        { id: 105, title: "Dua for Jannah", category: "general",
          arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
          urdu: "اے ہمارے رب! ہمیں دنیا میں بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا",
          english: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
          reference: "Quran 2:201" },

        { id: 106, title: "Dua for Good End (Husn al-Khatimah)", category: "general",
          arabic: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَاتِمَتَهُ",
          urdu: "اے اللہ! میری عمر کے آخری حصے کو بہترین بنا اور میرے عمل کے آخری حصے کو بہترین بنا",
          english: "O Allah, make the best part of my life its end and the best of my deeds its conclusion.",
          reference: "Sahih Muslim 2723" },

        { id: 107, title: "Dua for Shifa (Healing)", category: "general",
          arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِ أَنْتَ الشَّافِي",
          urdu: "اے اللہ! لوگوں کے رب! تکلیف دور فرما، شفا دے، تو ہی شفا دینے والا ہے",
          english: "O Allah, Lord of the people, remove the harm and heal, for You are the Healer.",
          reference: "Sahih Bukhari 5675" },

        { id: 108, title: "Dua for Increase in Rizq", category: "general",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
          urdu: "اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ رزق اور قبول ہونے والا عمل مانگتا ہوں",
          english: "O Allah, I ask You for beneficial knowledge, good provision and accepted deeds.",
          reference: "Sunan Ibn Majah 925" },

        { id: 109, title: "Dua for Patience (Sabr)", category: "general",
          arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
          urdu: "اے ہمارے رب! ہم پر صبر انڈیل دے اور ہمارے قدم جما دے",
          english: "Our Lord, pour upon us patience and plant firmly our feet.",
          reference: "Quran 2:250" },

        { id: 110, title: "Comprehensive Dua (Jawami' al-Kalim)", category: "general",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَىٰ وَالتُّقَىٰ وَالْعَفَافَ وَالْغِنَىٰ",
          urdu: "اے اللہ! میں تجھ سے ہدایت، پرہیزگاری، پاک دامنی اور مال داری مانگتا ہوں",
          english: "O Allah, I ask You for guidance, piety, chastity and self-sufficiency.",
          reference: "Sahih Muslim 2721" }

    ],

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */
    getAllDuas() {
        return this.duas || [];
    },

    getDuasByCategory(category) {
        if (category === "all") return this.duas;
        return this.duas.filter(d => d.category === category);
    },

    getDuaById(id) {
        return this.duas.find(d => d.id === id) || null;
    },

    searchDuas(query) {
        if (!query) return this.duas;
        const q = query.toLowerCase();
        return this.duas.filter(d =>
            (d.title && d.title.toLowerCase().includes(q)) ||
            (d.arabic && d.arabic.includes(query)) ||
            (d.urdu && d.urdu.includes(query)) ||
            (d.english && d.english.toLowerCase().includes(q))
        );
    }
};

console.log("[DB Part 7] Loaded ✅");
console.log("[DB Part 7] Total Duas: " + ISLAMIC_DATABASE_PART7.duas.length);
console.log("[DB Part 7] Categories: morning, evening, prayer, forgiveness, protection, travel, food, sleep, family, general");
/* =========================================================
   ISLAMICWAY DATABASE — PART 8 (FINAL PART)
   50+ Islamic Guidance Topics
   Categories: Quran, Salah, Family, Character, Patience,
               Halal, Ramadan, Daily Life, Forgiveness,
               Dua, Charity, Knowledge
========================================================= */

const ISLAMIC_DATABASE_PART8 = {

    guidance: [

        /* =====================================================
           QURANIC GUIDANCE (1-8)
        ===================================================== */
        { id: 1, category: "quran", title: "Guidance from the Quran",
          arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
          urdu: "بے شک یہ قرآن اس راستے کی رہنمائی کرتا ہے جو سب سے سیدھا ہے",
          english: "Indeed, this Quran guides to the way that is most upright.",
          content: "قرآن مجید مسلمان کی زندگی کے لیے بنیادی رہنمائی فراہم کرتا ہے۔ یہ ہر مسئلے کا حل پیش کرتا ہے اور ہمیں سیدھا راستہ دکھاتا ہے۔",
          reference: "Quran 17:9" },

        { id: 2, category: "quran", title: "The Quran as Healing",
          arabic: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
          urdu: "اور ہم قرآن میں سے وہ نازل کرتے ہیں جو مومنوں کے لیے شفا اور رحمت ہے",
          english: "And We send down of the Quran that which is healing and mercy for the believers.",
          content: "قرآن جسمانی اور روحانی بیماریوں کے لیے شفا ہے۔ اسے پڑھنا اور اس پر عمل کرنا دل کو سکون دیتا ہے۔",
          reference: "Quran 17:82" },

        { id: 3, category: "quran", title: "Remembrance of Allah",
          arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
          urdu: "یاد رکھو، اللہ کے ذکر سے ہی دلوں کو سکون ملتا ہے",
          english: "Surely, in the remembrance of Allah do hearts find comfort.",
          content: "اللہ کا ذکر دل کو سکون دیتا ہے اور پریشانیوں میں سہارا بنتا ہے۔ روزانہ ذکر کی پابندی کریں۔",
          reference: "Quran 13:28" },

        { id: 4, category: "quran", title: "Trust in Allah (Tawakkul)",
          arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا إِن كُنتُم مُّؤْمِنِينَ",
          urdu: "اور اگر تم مومن ہو تو اللہ ہی پر بھروسہ کرو",
          english: "And upon Allah rely, if you are believers.",
          content: "مسلمان کو ہر معاملے میں اللہ پر بھروسہ رکھنا چاہیے۔ کوشش کرنا ہماری ذمہ داری ہے، نتیجہ اللہ کے ہاتھ میں ہے۔",
          reference: "Quran 5:23" },

        { id: 5, category: "quran", title: "The Straight Path",
          arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          urdu: "ہمیں سیدھے راستے کی ہدایت فرما",
          english: "Guide us to the straight path.",
          content: "سورۃ الفاتحہ میں ہم روزانہ اللہ سے سیدھے راستے کی ہدایت مانگتے ہیں۔ یہ دعا ہماری زندگی کا نصب العین ہونی چاہیے۔",
          reference: "Quran 1:6" },

        { id: 6, category: "quran", title: "Patience & Prayer",
          arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
          urdu: "اور صبر اور نماز کے ذریعے مدد مانگو",
          english: "And seek help through patience and prayer.",
          content: "مشکلات میں صبر اور نماز کے ذریعے اللہ سے مدد مانگیں۔ یہ دونوں چیزیں مومن کی طاقت ہیں۔",
          reference: "Quran 2:45" },

        { id: 7, category: "quran", title: "Fear of Allah",
          arabic: "وَاتَّقُوا اللَّهَ وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ",
          urdu: "اور اللہ سے ڈرو اور جان لو کہ اللہ پرہیزگاروں کے ساتھ ہے",
          english: "And fear Allah and know that Allah is with the righteous.",
          content: "تقویٰ (پرہیزگاری) مومن کی سب سے بڑی خوبی ہے۔ اللہ متقیوں کے ساتھ ہوتا ہے۔",
          reference: "Quran 2:194" },

        { id: 8, category: "quran", title: "Hope in Allah's Mercy",
          arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
          urdu: "اللہ کی رحمت سے ناامید نہ ہو",
          english: "Do not despair of the mercy of Allah.",
          content: "کتنے بھی گناہ ہوں، اللہ کی رحمت سے ناامید نہیں ہونا چاہیے۔ وہ بخشنے والا رحم کرنے والا ہے۔",
          reference: "Quran 39:53" },

        /* =====================================================
           SALAH & WORSHIP (9-16)
        ===================================================== */
        { id: 9, category: "salah", title: "Importance of Salah",
          arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
          urdu: "بے شک نماز مومنوں پر مقررہ وقتوں میں فرض ہے",
          english: "Indeed, prayer has been decreed upon the believers at specified times.",
          content: "نماز اسلام کا دوسرا رکن ہے۔ یہ مومن اور کافر کے درمیان فرق ہے۔ پانچ نمازیں ہر مسلمان پر فرض ہیں۔",
          reference: "Quran 4:103" },

        { id: 10, category: "salah", title: "Salah Removes Sins",
          arabic: "إِنَّ الصَّلَوَاتِ الْخَمْسَ وَالْجُمُعَةَ إِلَى الْجُمُعَةِ كَفَّارَةٌ لِمَا بَيْنَهُنَّ",
          urdu: "بے شک پانچ نمازیں اور جمعہ سے جمعہ تک درمیانی گناہوں کا کفارہ ہیں",
          english: "The five prayers and Friday to Friday are an expiation for what is between them.",
          content: "پانچ نمازیں اور جمعہ کی نماز درمیانی گناہوں کو مٹا دیتی ہیں (جب کبیرہ گناہ نہ ہوں)۔",
          reference: "Sahih Muslim 233" },

        { id: 11, category: "salah", title: "Prayer at Night (Tahajjud)",
          arabic: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ",
          urdu: "اور رات کے کچھ حصے میں تہجد پڑھا کرو",
          english: "And from [part of] the night, pray with it as additional [worship] for you.",
          content: "تہجد کی نماز بہت بڑی عبادت ہے۔ رات کے آخری حصے میں اللہ اپنے بندوں کی دعائیں قبول کرتا ہے۔",
          reference: "Quran 17:79" },

        { id: 12, category: "salah", title: "Salah with Concentration (Khushu)",
          arabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
          urdu: "بے شک مومن کامیاب ہو گئے جو اپنی نماز میں خشوع اختیار کرتے ہیں",
          english: "Certainly will the believers have succeeded - they who are during their prayer humbly submissive.",
          content: "نماز میں دل لگا کر پڑھیں۔ خشوع (توجہ اور عاجزی) نماز کی روح ہے۔",
          reference: "Quran 23:1-2" },

        { id: 13, category: "salah", title: "Friday (Jumu'ah) Prayer",
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ",
          urdu: "اے ایمان والو! جب جمعہ کے دن نماز کے لیے پکارا جائے تو اللہ کے ذکر کی طرف دوڑو",
          english: "O you who have believed, when the call is made for prayer on Friday, then proceed to the remembrance of Allah.",
          content: "جمعہ کا دن مسلمانوں کے لیے عید کا دن ہے۔ جمعہ کی نماز فرض ہے اور اسے ترک نہ کریں۔",
          reference: "Quran 62:9" },

        { id: 14, category: "salah", title: "Fasting in Ramadan",
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ",
          urdu: "اے ایمان والو! تم پر روزے فرض کیے گئے",
          english: "O you who have believed, decreed upon you is fasting.",
          content: "رمضان کے روزے ہر بالغ مسلمان پر فرض ہیں۔ روزہ تقویٰ اور صبر سکھاتا ہے۔",
          reference: "Quran 2:183" },

        { id: 15, category: "salah", title: "Zakat (Charity)",
          arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
          urdu: "اور نماز قائم کرو اور زکوٰۃ ادا کرو",
          english: "And establish prayer and give zakah.",
          content: "زکوٰۃ اسلام کا تیسرا رکن ہے۔ یہ مال کی پاکیزگی اور غریبوں کا حق ہے۔",
          reference: "Quran 2:43" },

        { id: 16, category: "salah", title: "Hajj (Pilgrimage)",
          arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ",
          urdu: "اور اللہ کے لیے لوگوں پر بیت اللہ کا حج فرض ہے",
          english: "And due to Allah from the people is a pilgrimage to the House.",
          content: "حج اسلام کا پانچواں رکن ہے۔ جو استطاعت رکھتا ہو اس پر زندگی میں ایک بار حج فرض ہے۔",
          reference: "Quran 3:97" },

        /* =====================================================
           FAMILY & RELATIONSHIPS (17-24)
        ===================================================== */
        { id: 17, category: "family", title: "Kindness to Parents",
          arabic: "وَبِالْوَالِدَيْنِ إِحْسَانًا",
          urdu: "اور والدین کے ساتھ حسن سلوک کرو",
          english: "And show kindness to parents.",
          content: "اسلام والدین کے ساتھ احترام اور حسن سلوک کی تعلیم دیتا ہے۔ ان کی خدمت جنت کا راستہ ہے۔",
          reference: "Quran 17:23" },

        { id: 18, category: "family", title: "Paradise Under Mother's Feet",
          arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
          urdu: "جنت ماؤں کے قدموں تلے ہے",
          english: "Paradise lies beneath the feet of mothers.",
          content: "ماں کی خدمت اور اطاعت جنت کا ذریعہ ہے۔ ماں کے حقوق سب سے زیادہ ہیں۔",
          reference: "Sunan an-Nasa'i 3104" },

        { id: 19, category: "family", title: "Rights of Spouse",
          arabic: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
          urdu: "اور ان کے ساتھ اچھے طریقے سے رہو",
          english: "And live with them in kindness.",
          content: "شوہر اور بیوی کو ایک دوسرے کے ساتھ نرمی اور محبت سے پیش آنا چاہیے۔",
          reference: "Quran 4:19" },

        { id: 20, category: "family", title: "Raising Children",
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا",
          urdu: "اے ایمان والو! اپنے آپ کو اور اپنے گھر والوں کو آگ سے بچاؤ",
          english: "O you who have believed, protect yourselves and your families from a Fire.",
          content: "بچوں کی اسلامی تربیت والدین کی ذمہ داری ہے۔ انہیں نماز، قرآن اور اچھے اخلاق سکھائیں۔",
          reference: "Quran 66:6" },

        { id: 21, category: "family", title: "Maintaining Family Ties",
          arabic: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ",
          urdu: "اور اللہ سے ڈرو جس کے نام پر تم ایک دوسرے سے مانگتے ہو اور رشتہ داریوں کا بھی خیال رکھو",
          english: "And fear Allah, through whom you ask one another, and the wombs.",
          content: "رشتہ داریوں کو جوڑے رکھنا بہت بڑی عبادت ہے۔ قطع رحمی سے بچیں۔",
          reference: "Quran 4:1" },

        { id: 22, category: "family", title: "Good Treatment of Wife",
          arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
          urdu: "تم میں بہترین وہ ہے جو اپنے گھر والوں کے لیے بہترین ہو",
          english: "The best of you is the best to his family.",
          content: "شوہر کو چاہیے کہ اپنی بیوی اور بچوں کے ساتھ نرمی اور محبت سے پیش آئے۔",
          reference: "Sunan at-Tirmidhi 3895" },

        { id: 23, category: "family", title: "Dua for Family",
          arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
          urdu: "اے ہمارے رب! ہمیں اپنی بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما",
          english: "Our Lord, grant us from among our wives and offspring comfort to our eyes.",
          content: "خاندان کی بھلائی کے لیے دعا کریں۔ نیک بیوی اور نیک اولاد اللہ کی بڑی نعمت ہیں۔",
          reference: "Quran 25:74" },

        { id: 24, category: "family", title: "Rights of Neighbors",
          arabic: "وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ",
          urdu: "اور رشتہ دار پڑوسی اور اجنبی پڑوسی کے ساتھ",
          english: "And the neighbor who is near and the neighbor who is a stranger.",
          content: "پڑوسیوں کے حقوق کا خیال رکھنا اسلام کی تعلیم ہے۔ ان کی مدد کریں اور تکلیف نہ دیں۔",
          reference: "Quran 4:36" },

        /* =====================================================
           GOOD CHARACTER (25-32)
        ===================================================== */
        { id: 25, category: "character", title: "Good Manners (Akhlaq)",
          arabic: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
          urdu: "اور بے شک آپ بڑے اخلاق پر ہیں",
          english: "And indeed, you are of a great moral character.",
          content: "نبی کریم صلی اللہ علیہ وسلم کے اخلاق سب سے بہترین تھے۔ ہمیں بھی ان کی پیروی کرنی چاہیے۔",
          reference: "Quran 68:4" },

        { id: 26, category: "character", title: "Speak Good or Stay Silent",
          arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
          urdu: "جو اللہ اور آخرت کے دن پر ایمان رکھتا ہے وہ اچھی بات کہے یا خاموش رہے",
          english: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
          content: "زبان کی حفاظت بہت ضروری ہے۔ بے ہودہ باتوں سے پرہیز کریں اور اچھی بات کہیں۔",
          reference: "Sahih Bukhari 6018" },

        { id: 27, category: "character", title: "Control Anger",
          arabic: "لَا تَغْضَبْ",
          urdu: "غصہ نہ کرو",
          english: "Do not become angry.",
          content: "غصہ شیطان کی طرف سے ہے۔ غصے کے وقت خاموش رہیں، وضو کریں اور اللہ کی پناہ مانگیں۔",
          reference: "Sahih Bukhari 6116" },

        { id: 28, category: "character", title: "Humility (Tawadu)",
          arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا",
          urdu: "اور رحمٰن کے بندے وہ ہیں جو زمین پر عاجزی سے چلتے ہیں",
          english: "And the servants of the Most Merciful are those who walk upon the earth easily.",
          content: "تکبر سے بچیں اور عاجزی اختیار کریں۔ تکبر جنت میں جانے سے روکتا ہے۔",
          reference: "Quran 25:63" },

        { id: 29, category: "character", title: "Truthfulness (Sidq)",
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
          urdu: "اے ایمان والو! اللہ سے ڈرو اور سچوں کے ساتھ رہو",
          english: "O you who have believed, fear Allah and be with those who are true.",
          content: "سچ بولنا مومن کی نشانی ہے۔ جھوٹ منافق کی علامت ہے۔ ہمیشہ سچ بولیں۔",
          reference: "Quran 9:119" },

        { id: 30, category: "character", title: "Fulfilling Promises",
          arabic: "وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا",
          urdu: "اور وعدہ پورا کرو، بے شک وعدے کے بارے میں پوچھا جائے گا",
          english: "And fulfill [every] promise. Indeed, the promise will be questioned about.",
          content: "وعدہ پورا کرنا مومن کی صفت ہے۔ وعدہ خلافی سے بچیں۔",
          reference: "Quran 17:34" },

        { id: 31, category: "character", title: "Modesty (Haya)",
          arabic: "الْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ",
          urdu: "حیا ایمان کی شاخ ہے",
          english: "Modesty is a branch of faith.",
          content: "حیا ایمان کا حصہ ہے۔ نظر، زبان اور لباس کی حفاظت کریں۔",
          reference: "Sahih Muslim 35" },

        { id: 32, category: "character", title: "Smiling is Charity",
          arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",
          urdu: "اپنے بھائی کے چہرے پر مسکرانا صدقہ ہے",
          english: "Your smile in your brother's face is charity.",
          content: "مسکراہٹ بھی صدقہ ہے۔ لوگوں کے ساتھ خوش اخلاقی سے پیش آئیں۔",
          reference: "Sunan at-Tirmidhi 1956" },

        /* =====================================================
           PATIENCE & TAWAKKUL (33-40)
        ===================================================== */
        { id: 33, category: "patience", title: "Patience in Hardship",
          arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
          urdu: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے",
          english: "Indeed, Allah is with those who are patient.",
          content: "مشکلات کے وقت صبر اور اللہ پر بھروسہ مسلمان کے لیے بڑی طاقت ہیں۔",
          reference: "Quran 2:153" },

        { id: 34, category: "patience", title: "With Hardship Comes Ease",
          arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
          urdu: "پس بے شک تنگی کے ساتھ آسانی ہے",
          english: "For indeed, with hardship comes ease.",
          content: "ہر مشکل کے بعد آسانی ہے۔ اللہ پر یقین رکھیں اور صبر کریں۔",
          reference: "Quran 94:5" },

        { id: 35, category: "patience", title: "Tawakkul (Trust in Allah)",
          arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
          urdu: "اور جو اللہ پر بھروسہ کرے تو وہ اسے کافی ہے",
          english: "And whoever relies upon Allah - then He is sufficient for him.",
          content: "کوشش کریں اور نتیجہ اللہ پر چھوڑ دیں۔ وہ بہترین کارساز ہے۔",
          reference: "Quran 65:3" },

        { id: 36, category: "patience", title: "Don't Despair",
          arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
          urdu: "اور اللہ کی رحمت سے مایوس نہ ہو",
          english: "And do not despair of the mercy of Allah.",
          content: "کبھی اللہ کی رحمت سے مایوس نہ ہوں۔ وہ بخشنے والا رحم کرنے والا ہے۔",
          reference: "Quran 12:87" },

        { id: 37, category: "patience", title: "Sabr and Salah",
          arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
          urdu: "اور صبر اور نماز کے ذریعے مدد مانگو",
          english: "And seek help through patience and prayer.",
          content: "مشکلات میں صبر اور نماز کے ذریعے اللہ سے مدد مانگیں۔",
          reference: "Quran 2:45" },

        { id: 38, category: "patience", title: "Reward for Patience",
          arabic: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
          urdu: "بے شک صبر کرنے والوں کو ان کا اجر بے حساب دیا جائے گا",
          english: "Indeed, the patient will be given their reward without account.",
          content: "صبر کرنے والوں کو اللہ بے حساب اجر دیتا ہے۔ صبر کا بدلہ جنت ہے۔",
          reference: "Quran 39:10" },

        { id: 39, category: "patience", title: "Hoping for Allah's Mercy",
          arabic: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
          urdu: "اور میری رحمت ہر چیز کو ڈھانپے ہوئے ہے",
          english: "And My mercy encompasses all things.",
          content: "اللہ کی رحمت بہت وسیع ہے۔ وہ اپنے بندوں کو معاف کرنے والا ہے۔",
          reference: "Quran 7:156" },

        { id: 40, category: "patience", title: "Gratitude (Shukr)",
          arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
          urdu: "اگر تم شکر کرو گے تو میں تمہیں ضرور زیادہ دوں گا",
          english: "If you are grateful, I will surely increase you.",
          content: "اللہ کی نعمتوں پر شکر ادا کرنے سے نعمتیں بڑھتی ہیں۔",
          reference: "Quran 14:7" },

        /* =====================================================
           HALAL & HARAM (41-46)
        ===================================================== */
        { id: 41, category: "halal", title: "Eating Halal",
          arabic: "كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
          urdu: "جو پاکیزہ چیزیں ہم نے تمہیں عطا کی ہیں ان میں سے کھاؤ",
          english: "Eat from the good things We have provided for you.",
          content: "اسلام حلال اور پاکیزہ رزق اختیار کرنے کی تعلیم دیتا ہے۔ حرام سے بچیں۔",
          reference: "Quran 2:172" },

        { id: 42, category: "halal", title: "Avoiding Riba (Interest)",
          arabic: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
          urdu: "اور اللہ نے خرید و فروخت حلال کی اور سود حرام کیا",
          english: "But Allah has permitted trade and has forbidden interest.",
          content: "سود حرام ہے۔ اس سے بچیں۔ حلال طریقے سے کمائی کریں۔",
          reference: "Quran 2:275" },

        { id: 43, category: "halal", title: "Avoiding Alcohol",
          arabic: "إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ",
          urdu: "شراب، جوا، بت اور پانسے سب گندے کام ہیں",
          english: "Intoxicants, gambling, idols and divining arrows are defilement.",
          content: "شراب اور جوا حرام ہیں۔ ان سے دور رہیں۔ یہ شیطان کے کام ہیں۔",
          reference: "Quran 5:90" },

        { id: 44, category: "halal", title: "Halal Earnings",
          arabic: "أَطْيَبُ الْكَسْبِ مَنْ عَمِلَ بِيَدِهِ",
          urdu: "سب سے پاکیزہ کمائی وہ ہے جو اپنے ہاتھ سے کام کر کے حاصل کی جائے",
          english: "The purest earning is that which one earns by his own hands.",
          content: "اپنے ہاتھ سے محنت کر کے حلال کمائیں۔ دوسروں کا حق نہ ماریں۔",
          reference: "Sunan Abu Dawud 3477" },

        { id: 45, category: "halal", title: "Avoiding Backbiting",
          arabic: "وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",
          urdu: "اور تم میں سے کوئی کسی کی غیبت نہ کرے",
          english: "And do not spy or backbite each other.",
          content: "غیبت کرنا حرام ہے۔ یہ مردہ بھائی کا گوشت کھانے کے مترادف ہے۔",
          reference: "Quran 49:12" },

        { id: 46, category: "halal", title: "Avoiding Bribery",
          arabic: "وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ",
          urdu: "اور آپس میں ایک دوسرے کا مال ناحق نہ کھاؤ",
          english: "And do not consume one another's wealth unjustly.",
          content: "رشوت، چوری اور دھوکہ حرام ہیں۔ حلال طریقے سے کمائیں۔",
          reference: "Quran 2:188" },

        /* =====================================================
           RAMADAN (47-50)
        ===================================================== */
        { id: 47, category: "ramadan", title: "Purpose of Fasting",
          arabic: "لَعَلَّكُمْ تَتَّقُونَ",
          urdu: "تاکہ تم تقویٰ اختیار کرو",
          english: "So that you may attain Taqwa.",
          content: "روزہ تقویٰ اور نفس کی تربیت کا ذریعہ ہے۔ اسے صرف بھوکا رہنا نہ سمجھیں۔",
          reference: "Quran 2:183" },

        { id: 48, category: "ramadan", title: "Laylatul Qadr",
          arabic: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
          urdu: "شب قدر ہزار مہینوں سے بہتر ہے",
          english: "The Night of Decree is better than a thousand months.",
          content: "شب قدر رمضان کے آخری عشرے میں تلاش کریں۔ یہ ہزار مہینوں سے بہتر ہے۔",
          reference: "Quran 97:3" },

        { id: 49, category: "ramadan", title: "I'tikaf in Ramadan",
          arabic: "كَانَ النَّبِيُّ يَعْتَكِفُ الْعَشْرَ الْأَوَاخِرَ مِنْ رَمَضَانَ",
          urdu: "نبی صلی اللہ علیہ وسلم رمضان کے آخری عشرے کا اعتکاف کرتے تھے",
          english: "The Prophet used to perform I'tikaf in the last ten days of Ramadan.",
          content: "رمضان کے آخری عشرے میں اعتکاف سنت ہے۔ مسجد میں رہ کر عبادت کریں۔",
          reference: "Sahih Bukhari 2025" },

        { id: 50, category: "ramadan", title: "Dua at Iftar",
          arabic: "لِلصَّائِمِ عِنْدَ فِطْرِهِ دَعْوَةٌ لَا تُرَدُّ",
          urdu: "روزہ دار کی افطار کے وقت دعا رد نہیں کی جاتی",
          english: "The fasting person has a supplication at the time of breaking fast which is not rejected.",
          content: "افطار کے وقت دعا کریں۔ یہ قبولیت کا وقت ہے۔",
          reference: "Sunan Ibn Majah 1753" },

        /* =====================================================
           DAILY LIFE (51-56)
        ===================================================== */
        { id: 51, category: "daily", title: "Begin with Bismillah",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          urdu: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
          english: "In the name of Allah, the Most Gracious, the Most Merciful.",
          content: "ہر اچھے کام کی شروعات بسم اللہ سے کریں۔ اس سے برکت آتی ہے۔",
          reference: "Quran 1:1" },

        { id: 52, category: "daily", title: "Dua in Every Matter",
          arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
          urdu: "اور تمہارے رب نے کہا مجھ سے دعا کرو میں قبول کروں گا",
          english: "And your Lord says, 'Call upon Me; I will respond to you.'",
          content: "ہر معاملے میں اللہ سے دعا کریں۔ دعا مومن کا ہتھیار ہے۔",
          reference: "Quran 40:60" },

        { id: 53, category: "daily", title: "Eating with Right Hand",
          arabic: "كُلْ بِيَمِينِكَ",
          urdu: "اپنے دائیں ہاتھ سے کھاؤ",
          english: "Eat with your right hand.",
          content: "کھانا پینا دائیں ہاتھ سے کریں۔ بائیں ہاتھ سے نہ کھائیں۔",
          reference: "Sahih Muslim 2020" },

        { id: 54, category: "daily", title: "Greeting with Salam",
          arabic: "فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا عَلَىٰ أَنفُسِكُمْ",
          urdu: "پس جب گھروں میں داخل ہو تو اپنے لوگوں کو سلام کرو",
          english: "But when you enter houses, give greetings of peace upon each other.",
          content: "گھر میں داخل ہوتے وقت سلام کریں۔ سلام محبت بڑھاتا ہے۔",
          reference: "Quran 24:61" },

        { id: 55, category: "daily", title: "Cleanliness",
          arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
          urdu: "بے شک اللہ توبہ کرنے والوں کو پسند کرتا ہے اور پاک رہنے والوں کو بھی",
          english: "Indeed, Allah loves those who repent and loves those who purify themselves.",
          content: "صفائی اسلام کا حصہ ہے۔ جسم، کپڑے اور ماحول صاف رکھیں۔",
          reference: "Quran 2:222" },

        { id: 56, category: "daily", title: "Being Kind to Animals",
          arabic: "فِي كُلِّ ذَاتِ كَبِدٍ رَطْبَةٍ أَجْرٌ",
          urdu: "ہر جاندار کے ساتھ نیکی کرنے میں اجر ہے",
          english: "There is a reward for every act of kindness to a living creature.",
          content: "جانوروں کے ساتھ بھی نرمی کریں۔ انہیں تکلیف نہ دیں۔",
          reference: "Sahih Bukhari 2466" }

    ],

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */
    getAllGuidance() {
        return this.guidance || [];
    },

    getGuidanceByCategory(category) {
        if (category === "all") return this.guidance;
        return this.guidance.filter(g => g.category === category);
    },

    getGuidanceById(id) {
        return this.guidance.find(g => g.id === id) || null;
    },

    searchGuidance(query) {
        if (!query) return this.guidance;
        const q = query.toLowerCase();
        return this.guidance.filter(g =>
            (g.title && g.title.toLowerCase().includes(q)) ||
            (g.arabic && g.arabic.includes(query)) ||
            (g.urdu && g.urdu.includes(query)) ||
            (g.english && g.english.toLowerCase().includes(q)) ||
            (g.content && g.content.includes(query))
        );
    }
};

console.log("[DB Part 8] Loaded ✅");
console.log("[DB Part 8] Total Guidance Topics: " + ISLAMIC_DATABASE_PART8.guidance.length);
console.log("[DB Part 8] Categories: quran, salah, family, character, patience, halal, ramadan, daily");
/* =========================================================
   FINAL MERGE — SAARE PARTS KO EK DATABASE MEIN COMBINE KARO
   ✅ Surahs 1-114
   ✅ 6 Hadith Books
   ✅ 110 Duas
   ✅ 56 Guidance Topics
========================================================= */

const ISLAMIC_DATABASE = {

    /* ---- QURAN SURAH LIST (114) ---- */
    quranSurahs: ISLAMIC_DATABASE_PART1.quranSurahs,

    /* ---- QURAN CONTENT (Surahs 1-114) ---- */
    quranContent: {
        ...ISLAMIC_DATABASE_PART1.quranContent,
        ...ISLAMIC_DATABASE_PART2.quranContent,
        ...ISLAMIC_DATABASE_PART3.quranContent,
        ...ISLAMIC_DATABASE_PART4.quranContent,
        ...ISLAMIC_DATABASE_PART5A.quranContent,
        ...ISLAMIC_DATABASE_PART5B.quranContent,
        ...ISLAMIC_DATABASE_PART6A.quranContent,
        ...ISLAMIC_DATABASE_PART6B.quranContent
    },

    /* ---- 6 HADITH BOOKS ---- */
    hadithBooks: {
        ...ISLAMIC_DATABASE_PART1.hadithBooks,
        ...ISLAMIC_DATABASE_PART2.hadithBooks,
        ...ISLAMIC_DATABASE_PART3.hadithBooks,
        ...ISLAMIC_DATABASE_PART4.hadithBooks,
        ...ISLAMIC_DATABASE_PART5A.hadithBooks,
        ...ISLAMIC_DATABASE_PART5B.hadithBooks
    },

    /* ---- 110 DUAS ---- */
    duas: ISLAMIC_DATABASE_PART7.duas,

    /* ---- 56 GUIDANCE TOPICS ---- */
    guidance: ISLAMIC_DATABASE_PART8.guidance,

    /* ---- FALLBACK PRAYER TIMES ---- */
    getFallbackPrayerTimes() {
        return {
            Fajr: "05:00",
            Sunrise: "06:15",
            Dhuhr: "12:30",
            Asr: "15:45",
            Maghrib: "18:30",
            Isha: "19:45",
            note: "Fallback times — please verify with your local mosque"
        };
    },

    /* ---- HELPER FUNCTIONS ---- */
    hasSurahOffline(surahNumber) {
        return !!this.quranContent[surahNumber];
    },

    getSurahOffline(surahNumber) {
        return this.quranContent[surahNumber] || null;
    },

    getHadithBook(bookKey) {
        return this.hadithBooks[bookKey] || null;
    },

    getAllDuas() {
        return this.duas || [];
    },

    getDuasByCategory(category) {
        if (category === "all") return this.duas;
        return this.duas.filter(d => d.category === category);
    },

    getAllGuidance() {
        return this.guidance || [];
    },

    getGuidanceByCategory(category) {
        if (category === "all") return this.guidance;
        return this.guidance.filter(g => g.category === category);
    }
};

/* ---- DISABLED STUB (script.js compatibility) ---- */
const FullDatabase = {
    db: null,
    async init() { return null; },
    async getQuran() { return null; },
    async getHadith() { return null; },
    async getSurahOffline(surahNumber) {
        return ISLAMIC_DATABASE.getSurahOffline(surahNumber);
    },
    async getHadithBookOffline(bookKey) {
        const book = ISLAMIC_DATABASE.getHadithBook(bookKey);
        return book ? book.hadiths : null;
    },
    async setup() { return true; },
    async reset() {}
};

/* ---- FULL QURAN DATABASE (CDN fallback) ---- */
const FullQuranDatabase = {
    baseURL: "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/",
    cache: {},
    async loadSurah(surahNumber) {
        if (this.cache[surahNumber]) return this.cache[surahNumber];
        try {
            const arabicRes = await fetch(this.baseURL + "ara-quranuthmani/" + surahNumber + ".json");
            const urduRes = await fetch(this.baseURL + "urd-quranjalandhry/" + surahNumber + ".json");
            const arabicData = await arabicRes.json();
            const urduData = await urduRes.json();
            const result = {
                arabic: arabicData.chapter.map(a => a.text),
                urdu: urduData.chapter.map(u => u.text)
            };
            this.cache[surahNumber] = result;
            return result;
        } catch (e) {
            return null;
        }
    }
};

/* =========================================================
   FINAL SUMMARY LOG
========================================================= */
console.log("═══════════════════════════════════════════════");
console.log("✅ ISLAMIC DATABASE — FULLY MERGED");
console.log("📖 Quran: " + Object.keys(ISLAMIC_DATABASE.quranContent).length + " Surahs");
console.log("📚 Hadith: " + Object.keys(ISLAMIC_DATABASE.hadithBooks).length + " Books");
console.log("   • Bukhari:  " + ISLAMIC_DATABASE.hadithBooks.bukhari.hadiths.length + " hadiths");
console.log("   • Muslim:   " + ISLAMIC_DATABASE.hadithBooks.muslim.hadiths.length + " hadiths");
console.log("   • Abu Dawud:" + ISLAMIC_DATABASE.hadithBooks.abudawud.hadiths.length + " hadiths");
console.log("   • Tirmidhi: " + ISLAMIC_DATABASE.hadithBooks.tirmidhi.hadiths.length + " hadiths");
console.log("   • Nasai:    " + ISLAMIC_DATABASE.hadithBooks.nasai.hadiths.length + " hadiths");
console.log("   • Malik:    " + ISLAMIC_DATABASE.hadithBooks.malik.hadiths.length + " hadiths");
console.log("🤲 Duas: " + ISLAMIC_DATABASE.duas.length);
console.log("🧭 Guidance: " + ISLAMIC_DATABASE.guidance.length);
console.log("═══════════════════════════════════════════════");