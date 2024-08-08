import { INumberValidator } from "../../interfaces/INumberValidator";
import { Roman } from "../../models/Converter/Roman";

export class RomanToArabicValidator implements INumberValidator {
  roman: Roman;

  constructor() {
    this.roman = new Roman();
  }

  #hasValidRepetitions(roman: string) {
    // Verifica se há mais de 3 repetições nos algarismos que podem repetir
    for (const numeral of this.roman.repetitiveNumbers) {
      if (roman.includes(numeral.repeat(4))) {
        return false;
      }
    }

    // Verifica se há repetições nos algarismos que não podem repetir
    for (const numeral of this.roman.cannotBeRepeated) {
      if (roman.includes(numeral.repeat(2))) {
        return false;
      }
    }

    return true;
  }

  // XXXIV
  #hasValidSubtractivePairs(roman: string) {
    for (let i = 0; i < roman.length; i++) {
      const currentRomanNumber = roman[i];
      const nextRomanNumber = roman[i + 1];
      const currentArabicNumber = this.roman.map[currentRomanNumber];
      const nextArabicNumber = this.roman.map[nextRomanNumber];

      // Verifica se o número romano atual é menor que o próximo
      if (nextRomanNumber && currentArabicNumber < nextArabicNumber) {
        const pair = currentRomanNumber + nextRomanNumber;

        // Verifica se o número romano subtrativo está na lista
        if (!this.roman.subtractivePairs.includes(pair)) {
          return false;
        }
      }
    }

    return true;
  }

  validate(roman: string): boolean {
    const hasValidRepetitions = this.#hasValidRepetitions(roman);
    const hasValidSubtractivePairs = this.#hasValidSubtractivePairs(roman);

    if (!hasValidRepetitions || !hasValidSubtractivePairs) {
      return false;
    }

    return true;
  }
}
