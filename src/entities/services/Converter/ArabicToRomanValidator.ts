import { INumberValidator } from "../../interfaces/INumberValidator";

export class ArabicToRomanValidator implements INumberValidator {
  validate(number: string): boolean {
    const convertedNumber = +number;

    return (
      Number.isInteger(convertedNumber) &&
      convertedNumber > 0 &&
      convertedNumber <= 3999
    );
  }
}
