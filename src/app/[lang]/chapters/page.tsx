import Chapters from "@/components/chapters";
import { type Locale } from "@/i18n-config";
export default function Page({
  params: { lang },
}: {
  params: { lang: Locale["code"] };
}) {
  return <Chapters lang={lang} />;
}
