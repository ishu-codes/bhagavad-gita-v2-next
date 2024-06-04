import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support....
// We also get the default import for cleaner types
const dictionaries = {
    as: () => import("./dictionaries/as.json").then((module) => module.default),
    bho: () =>
        import("./dictionaries/bho.json").then((module) => module.default),
    bn: () => import("./dictionaries/bn.json").then((module) => module.default),
    doi: () =>
        import("./dictionaries/doi.json").then((module) => module.default),
    gu: () => import("./dictionaries/gu.json").then((module) => module.default),
    hi: () => import("./dictionaries/hi.json").then((module) => module.default),
    kn: () => import("./dictionaries/kn.json").then((module) => module.default),
    mai: () =>
        import("./dictionaries/mai.json").then((module) => module.default),
    ml: () => import("./dictionaries/ml.json").then((module) => module.default),
    mni: () =>
        import("./dictionaries/mni.json").then((module) => module.default),
    mr: () => import("./dictionaries/mr.json").then((module) => module.default),
    ne: () => import("./dictionaries/ne.json").then((module) => module.default),
    or: () => import("./dictionaries/or.json").then((module) => module.default),
    pa: () => import("./dictionaries/pa.json").then((module) => module.default),
    sd: () => import("./dictionaries/sd.json").then((module) => module.default),
    ta: () => import("./dictionaries/ta.json").then((module) => module.default),
    te: () => import("./dictionaries/te.json").then((module) => module.default),
    ur: () => import("./dictionaries/ur.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale["code"]) =>
    dictionaries[locale]?.() ?? dictionaries.hi();
