import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../Input";
import { ArabicToRoman } from "../../entities/services/Converter/ArabicToRoman";
import { ArabicToRomanValidator } from "../../entities/services/Converter/ArabicToRomanValidator";
import { ArabicToRomanConverter } from "../../entities/services/Converter/ArabicToRomanConverter";

const ArabicToRomanContainer = () => {
  const [inputArabicNumber, setInputArabicNumber] = useState("");
  const [romanNumber, setRomanNumber] = useState("");

  const handleRomanNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value
      .replace(/\D/gi, "")
      .toLocaleUpperCase();

    setInputArabicNumber(typedValue);
  };

  const handleArabicNumberConverter = (arabicNumber: string) => {
    try {
      const arabicToRomanValidator = new ArabicToRomanValidator();
      const arabicToRomanConverter = new ArabicToRomanConverter();

      const arabicToRoman = new ArabicToRoman(
        arabicToRomanValidator,
        arabicToRomanConverter,
      );

      const newArabicNumber = arabicToRoman.execute(arabicNumber);

      setRomanNumber(String(newArabicNumber));
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setRomanNumber(error.message);
      }
    }
  };

  useEffect(() => {
    console.log(inputArabicNumber);
    handleArabicNumberConverter(inputArabicNumber);
  }, [inputArabicNumber]);

  return (
    <section>
      <h2 className="text-2xl">Números Arábicos para Romanos</h2>

      <div className="p-8">
        <Input
          className="py-2 px-4"
          placeholder="Digite um número arábico"
          value={inputArabicNumber}
          onInput={handleRomanNumberChange}
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-4">Seu número convertido é:</p>

        <p className="text-4xl">{romanNumber}</p>
      </div>
    </section>
  );
};

export { ArabicToRomanContainer };
