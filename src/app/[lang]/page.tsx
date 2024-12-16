import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { Footer, Home } from "@/components";

export default async function IndexPage({
    params: { lang },
}: {
    params: { lang: Locale["code"] };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Home lang={lang} />
            {/* <p>{dictionary["credits"]}</p> */}
            <Footer lang={lang} />
        </>
    );
}
