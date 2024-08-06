import { INumberConverter } from "../interfaces/NumberConverter";
import { INumberValidator } from "../interfaces/NumberValidator";

export class ArabicToRoman {
  #validator: INumberValidator;
  #converter: INumberConverter;

  constructor(validator: INumberValidator, converter: INumberConverter) {
    this.#validator = validator;
    this.#converter = converter;
  }

  execute(arabic = "1"): string {
    const isAValidArabicNumber = this.#validator.validate(arabic);

    if (!isAValidArabicNumber) {
      throw new Error("Número arábico inválido ou menor que zero.");
    }

    const convertedNumber = this.#converter.convert(arabic);

    return convertedNumber;
  }
}
