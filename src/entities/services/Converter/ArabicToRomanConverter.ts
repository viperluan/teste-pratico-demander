import { INumberConverter } from "../../interfaces/INumberConverter";
import { Arabic } from "../../models/Converter/Arabic";

export class ArabicToRomanConverter implements INumberConverter {
  arabic: Arabic;

  constructor() {
    this.arabic = new Arabic();
  }

  convert(arabic: string): string {
    let arabicNumber = +arabic;
    let result = "";

    for (const [value, numeral] of Object.entries(this.arabic.map).reverse()) {
      while (arabicNumber >= +value) {
        result += numeral;
        arabicNumber -= +value;
      }
    }

    return result;
  }
}
