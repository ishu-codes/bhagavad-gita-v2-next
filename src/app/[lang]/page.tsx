import { LocaleSwitcher } from "@/components";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
// import Counter from "./components/counter";
// import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
    params: { lang },
}: {
    params: { lang: Locale["code"] };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <div>
            {/* <LocaleSwitcher /> */}
            <p>Current locale: {lang}</p>
            {/* <LocaleSwitcher /> */}
            <p>{dictionary["credits"]}</p>
            {/* <Counter dictionary={dictionary.counter} /> */}
        </div>
    );
}
