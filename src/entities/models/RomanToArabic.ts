import { INumberConverter } from "../interfaces/NumberConverter";
import { INumberValidator } from "../interfaces/NumberValidator";

export class RomanToArabic {
  #validator: INumberValidator;
  #converter: INumberConverter;

  constructor(validator: INumberValidator, converter: INumberConverter) {
    this.#validator = validator;
    this.#converter = converter;
  }

  execute(roman = "XXX"): string {
    const isAValidRomanNumber = this.#validator.validate(roman);

    if (!isAValidRomanNumber) {
      throw new Error("Número romano inválido.");
    }

    const convertedNumber = this.#converter.convert(roman);

    return convertedNumber;
  }
}
