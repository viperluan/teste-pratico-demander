import { INumberConverter } from "../interfaces/NumberConverter";

interface IRomanToArabicConverterMap {
  [key: string]: number;
}

export class RomanToArabicConverter implements INumberConverter {
  #romanToArabicMap: IRomanToArabicConverterMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  convert(roman: string): string {
    let arabic = 0;

    for (let i = 0; i < roman.length; i++) {
      const currentNumber = this.#romanToArabicMap[roman[i]];
      const nextNumber = this.#romanToArabicMap[roman[i + 1]];

      if (currentNumber < nextNumber) {
        arabic -= currentNumber;
      } else {
        arabic += currentNumber;
      }
    }

    return String(arabic);
  }
}
