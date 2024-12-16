export const i18n = {
    defaultLocale: { code: "hi", name: "Hindi", local: "हिन्दी" },
    locales: [
        { code: "as", name: "Assamese", local: "অসমীয়া" },
        { code: "bho", name: "Bhojpuri", local: "भोजपुरी" },
        { code: "bn", name: "Bengali", local: "বাংলা" },
        { code: "doi", name: "Dogri", local: "डोगरी" },
        { code: "gom", name: "Konkani", local: "कोंकणी" },
        { code: "gu", name: "Gujarati", local: "ગુજરાતી" },
        { code: "hi", name: "Hindi", local: "हिन्दी" },
        { code: "kn", name: "Kannad", local: "ಕನ್ನಡ" },
        { code: "lus", name: "Mizo", local: "Mizo tawng" },
        { code: "mai", name: "Maithili", local: "मैथिली" },
        { code: "ml", name: "Malayalam", local: "മലയാളം" },
        // { code: "mni", name: "Manipuri", local: "" },
        { code: "mr", name: "Marathi", local: "मराठी" },
        { code: "ne", name: "Nepali", local: "नेपाली" },
        { code: "or", name: "Oria", local: "ଓଡିଆ" },
        { code: "pa", name: "Punjabi", local: "ਪੰਜਾਬੀ" },
        { code: "sd", name: "Sindhi", local: "سنڌي" },
        { code: "ta", name: "Tamil", local: "தமிழ்" },
        { code: "te", name: "Telugu", local: "తెలుగు" },
        { code: "ur", name: "Urdu", local: "اردو" },
    ],
} as const;

export type Locale = (typeof i18n)["locales"][number];
