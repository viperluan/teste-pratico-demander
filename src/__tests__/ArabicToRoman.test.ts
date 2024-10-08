import { ArabicToRoman } from "../entities/services/Converter/ArabicToRoman";
import { ArabicToRomanConverter } from "../entities/services/Converter/ArabicToRomanConverter";
import { ArabicToRomanValidator } from "../entities/services/Converter/ArabicToRomanValidator";

describe("It should be able to convert arabic numerals to roman", () => {
  let arabicToRoman: ArabicToRoman;
  let arabicToRomanValidator: ArabicToRomanValidator;
  let arabicToRomanConverter: ArabicToRomanConverter;

  beforeEach(() => {
    arabicToRomanValidator = new ArabicToRomanValidator();
    arabicToRomanConverter = new ArabicToRomanConverter();

    arabicToRoman = new ArabicToRoman(
      arabicToRomanValidator,
      arabicToRomanConverter,
    );
  });

  test("34 seja igual a XXXIV", () => {
    expect(arabicToRoman.execute("34")).toBe("XXXIV");
  });

  test("2024 seja igual a MMXXIV", () => {
    expect(arabicToRoman.execute("2024")).toBe("MMXXIV");
  });

  test("2007 seja igual a MMVII", () => {
    expect(arabicToRoman.execute("2007")).toBe("MMVII");
  });

  test("Número 0 não pode ser convertido", () => {
    expect(() => arabicToRoman.execute("0")).toThrow(Error);
  });

  test("Números maiores que 3999 não serão convertidos", () => {
    expect(() => arabicToRoman.execute("4500")).toThrow(Error);

    expect(() => arabicToRoman.execute("15000")).toThrow(Error);

    expect(() => arabicToRoman.execute("9999")).toThrow(Error);
  });
});
