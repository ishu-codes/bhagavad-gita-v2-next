// interface LocaleInterface {
//     code: string;
//     name: string;
//     local: string;
// }

export const i18n = {
    defaultLocale: { code: "hi", name: "Hindi", local: "हिन्दी" },
    locales: [
        { code: "as", name: "Assamese", local: "" },
        { code: "bho", name: "Bhojpuri", local: "भोजपुरी" },
        { code: "bn", name: "Bengali", local: "" },
        { code: "doi", name: "Dogri", local: "डोगरी" },
        { code: "gu", name: "Gujarati", local: "" },
        { code: "hi", name: "Hindi", local: "हिन्दी" },
        { code: "kn", name: "Kannad", local: "" },
        { code: "mai", name: "Maithili", local: "मैथिली" },
        { code: "ml", name: "Malayalam", local: "" },
        { code: "mni", name: "Manipuri", local: "" },
        { code: "mr", name: "Marathi", local: "मराठी" },
        { code: "ne", name: "Nepali", local: "नेपाली" },
        { code: "or", name: "Oria", local: "" },
        { code: "pa", name: "Punjabi", local: "" },
        { code: "sd", name: "Sindhi", local: "" },
        { code: "ta", name: "Tamil", local: "" },
        { code: "te", name: "Telugu", local: "" },
        { code: "ur", name: "Urdu", local: "" },
    ],
} as const;

export type Locale = (typeof i18n)["locales"][number];
