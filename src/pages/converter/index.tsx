import { ChangeEvent, useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { RomanToArabic } from "../../entities/models/RomanToArabic";
import { RomanToArabicValidator } from "../../entities/models/RomanToArabicValidator";
import { RomanToArabicConverter } from "../../entities/models/RomanToArabicConverter";

const Converter = () => {
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
    <>
      <main className="h-full flex flex-col px-8 items-center justify-center text-center">
        <BackButton>Voltar</BackButton>

        <h1 className="text-5xl mb-4">Conversor</h1>
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
      </main>
    </>
  );
};

export { Converter };
