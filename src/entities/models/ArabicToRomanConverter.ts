import { INumberConverter } from "../interfaces/NumberConverter";

interface IRomanToArabicConverterMap {
  [key: number]: string;
}

export class ArabicToRomanConverter implements INumberConverter {
  #arabicToRomanMap: IRomanToArabicConverterMap = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  convert(arabic: string): string {
    let arabicNumber = +arabic;
    let result = "";

    console.log(Object.entries(this.#arabicToRomanMap));

    for (const [value, numeral] of Object.entries(
      this.#arabicToRomanMap,
    ).reverse()) {
      while (arabicNumber >= +value) {
        result += numeral;
        arabicNumber -= +value;
      }
    }

    return result;
  }
}
