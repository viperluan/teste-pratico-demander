import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../Input";
import { RomanToArabic } from "../../entities/services/Converter/RomanToArabic";
import { RomanToArabicValidator } from "../../entities/services/Converter/RomanToArabicValidator";
import { RomanToArabicConverter } from "../../entities/services/Converter/RomanToArabicConverter";

const RomanToArabicContainer = () => {
  const [inputRomanNumber, setInputRomanNumber] = useState("");
  const [arabicNumber, setArabicNumber] = useState("");

  const handleRomanNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value
      .replace(/[^IVXLCDM]/gi, "")
      .toLocaleUpperCase();

    setInputRomanNumber(typedValue);
  };

  const handleArabicNumberConverter = (romanNumber: string) => {
    try {
      const romanToArabicValidator = new RomanToArabicValidator();
      const romanToArabicConverter = new RomanToArabicConverter();

      const romanToArabic = new RomanToArabic(
        romanToArabicValidator,
        romanToArabicConverter,
      );

      const newArabicNumber = romanToArabic.execute(romanNumber);

      setArabicNumber(String(newArabicNumber));
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setArabicNumber(error.message);
      }
    }
  };

  useEffect(() => {
    handleArabicNumberConverter(inputRomanNumber);
  }, [inputRomanNumber]);

  return (
    <div>
      <h2 className="text-2xl">Números Romanos para Arábicos</h2>

      <div className="p-8">
        <Input
          className="py-2 px-4"
          placeholder="Digite um número romano"
          value={inputRomanNumber}
          onInput={handleRomanNumberChange}
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-4">Seu número convertido é:</p>

        <p className="text-4xl">{arabicNumber}</p>
      </div>
    </div>
  );
};

export { RomanToArabicContainer };
