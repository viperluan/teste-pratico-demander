import { INumberConverter } from "../../interfaces/INumberConverter";
import { INumberValidator } from "../../interfaces/INumberValidator";

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
      throw new Error("Número arábico inválido ou menor/igual a zero.");
    }

    const convertedNumber = this.#converter.convert(arabic);

    return convertedNumber;
  }
}
