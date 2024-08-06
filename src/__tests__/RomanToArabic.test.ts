import { RomanToArabic } from "../entities/models/RomanToArabic";
import { RomanToArabicConverter } from "../entities/models/RomanToArabicConverter";
import { RomanToArabicValidator } from "../entities/models/RomanToArabicValidator";

describe("It should be able to convert roman numerals to arabic", () => {
  let romanToArabic: RomanToArabic;
  let romanToArabicValidator: RomanToArabicValidator;
  let romanToArabicConverter: RomanToArabicConverter;

  beforeEach(() => {
    romanToArabicValidator = new RomanToArabicValidator();
    romanToArabicConverter = new RomanToArabicConverter();

    romanToArabic = new RomanToArabic(
      romanToArabicValidator,
      romanToArabicConverter,
    );
  });

  test("XXXIV seja igual a 34", () => {
    expect(romanToArabic.execute("XXXIV")).toBe("34");
  });

  test("MMXXIV seja igual a 2024", () => {
    expect(romanToArabic.execute("MMXXIV")).toBe("2024");
  });

  test("MMVII seja igual a 2027", () => {
    expect(romanToArabic.execute("MMVII")).toBe("2007");
  });

  test("I, X, C e M não podem repetir mais que 3 vezes", () => {
    expect(() => romanToArabic.execute("IIII")).toThrow(
      "Número romano inválido.",
    );

    expect(() => romanToArabic.execute("XXXX")).toThrow(
      "Número romano inválido.",
    );

    expect(() => romanToArabic.execute("CCCC")).toThrow(
      "Número romano inválido.",
    );

    expect(() => romanToArabic.execute("MMMM")).toThrow(
      "Número romano inválido.",
    );
  });

  test("V, L, D não podem repetir", () => {
    expect(() => romanToArabic.execute("VV")).toThrow(
      "Número romano inválido.",
    );

    expect(() => romanToArabic.execute("LL")).toThrow(
      "Número romano inválido.",
    );

    expect(() => romanToArabic.execute("DD")).toThrow(
      "Número romano inválido.",
    );
  });
});
