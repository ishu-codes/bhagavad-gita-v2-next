"use server";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
// import { Locale } from "@/i18n-config";
// export const get_lang_num = async (
//   num: number | string,
//   lang: Locale["code"]
// ) => {
//   let dictionary = await getDictionary(lang);

//   // const nums = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
//   const nums = dictionary["numerals"];
//   let result_num = "";
//   for (let n of `${num}`) {
//     result_num += nums[parseInt(n)];
//   }
//   return result_num.replace(/^०*/, "");
// };
export const getNumerals = async (lang: Locale["code"]) => {
  return (await getDictionary(lang)).numerals;
};
