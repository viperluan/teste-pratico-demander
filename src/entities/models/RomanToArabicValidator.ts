import { INumberValidator } from "../interfaces/NumberValidator";

interface IRomanToArabicValidatorMap {
  [key: string]: number;
}

export class RomanToArabicValidator implements INumberValidator {
  #repetitiveNumbers = ["I", "X", "C", "M"];
  #cannotBeRepeated = ["V", "L", "D"];
  #subtractivePairs = ["IV", "IX", "XL", "XC", "CD", "CM"];
  #romanToArabicMap: IRomanToArabicValidatorMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  #hasValidRepetitions(roman: string) {
    // Verifica se há mais de 3 repetições nos algarismos que podem repetir
    for (const numeral of this.#repetitiveNumbers) {
      if (roman.includes(numeral.repeat(4))) {
        return false;
      }
    }

    // Verifica se há repetições nos algarismos que não podem repetir
    for (const numeral of this.#cannotBeRepeated) {
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
      const currentArabicNumber = this.#romanToArabicMap[currentRomanNumber];
      const nextArabicNumber = this.#romanToArabicMap[nextRomanNumber];

      // Verifica se o número romano atual é menor que o próximo
      if (nextRomanNumber && currentArabicNumber < nextArabicNumber) {
        const pair = currentRomanNumber + nextRomanNumber;

        // Verifica se o número romano subtrativo está na lista
        if (!this.#subtractivePairs.includes(pair)) {
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
