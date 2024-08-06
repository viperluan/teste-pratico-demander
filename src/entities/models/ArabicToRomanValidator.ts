import { INumberValidator } from "../interfaces/NumberValidator";

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
