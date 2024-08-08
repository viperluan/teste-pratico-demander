import { INumberConverter } from "../../interfaces/INumberConverter";
import { Roman } from "../../models/Converter/Roman";

export class RomanToArabicConverter implements INumberConverter {
  roman: Roman;

  constructor() {
    this.roman = new Roman();
  }

  convert(roman: string): string {
    let arabic = 0;

    for (let i = 0; i < roman.length; i++) {
      const currentNumber = this.roman.map[roman[i]];
      const nextNumber = this.roman.map[roman[i + 1]];

      if (currentNumber < nextNumber) {
        arabic -= currentNumber;
      } else {
        arabic += currentNumber;
      }
    }

    return String(arabic);
  }
}
