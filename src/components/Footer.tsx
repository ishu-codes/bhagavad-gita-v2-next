import { getDictionary } from "@/get-dictionary";
import { type Locale } from "@/i18n-config";

export default async function Footer(props: { lang: Locale["code"] }) {
    let dictionary = await getDictionary(props.lang);
    return (
        <footer className="mt-4 text-center">
            <p className="opacity-50">{dictionary && dictionary["credits"]}</p>
        </footer>
    );
}
