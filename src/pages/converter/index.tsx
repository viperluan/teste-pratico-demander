import { BackButton } from "../../components/BackButton";
import { ArabicToRomanContainer } from "../../components/ArabicToRomanContainer";
import { RomanToArabicContainer } from "../../components/RomanToArabicContainer";

const Converter = () => {
  return (
    <>
      <main className="h-full flex flex-col px-8 items-center justify-center text-center">
        <BackButton>Voltar</BackButton>

        <h1 className="text-5xl mb-8">Conversor</h1>

        <div className="flex flex-col gap-40">
          <RomanToArabicContainer />

          <ArabicToRomanContainer />
        </div>
      </main>
    </>
  );
};

export { Converter };
