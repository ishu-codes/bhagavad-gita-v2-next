export const get_lang_num = (num: number | string) => {
  const nums = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  let result_num = "";
  for (let n of `${num}`) {
    result_num += nums[parseInt(n)];
  }
  return result_num.replace(/^०*/, "");
};
