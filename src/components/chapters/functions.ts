const numData = (num: string) => {
    switch (num) {
        case "0":
            return "०";
        case "1":
            return "१";
        case "2":
            return "२";
        case "3":
            return "३";
        case "4":
            return "४";
        case "5":
            return "५";
        case "6":
            return "६";
        case "7":
            return "७";
        case "8":
            return "८";
        case "9":
            return "९";
        default:
            return num;
    }
};

export const transformNum = (num: number): string => {
    let engNums: string = num.toString();
    let regNums: string = "";
    for (let i = 0; i < engNums.length; i++) {
        regNums += numData(engNums[i]);
    }
    return regNums;
};
