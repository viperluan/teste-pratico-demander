import { BackButton } from "../../components/BackButton";
import { TreeMapContainer } from "../../components/TreeMapContainer";

const data = [
  { name: "Brasil", value: 100 },
  { name: "Itália", value: 70 },
  { name: "Alemanha", value: 50 },
  { name: "Espanha", value: 15 },
  { name: "Holanda", value: 30 },
  { name: "Japão", value: 50 },
];

const TreeMap = () => {
  return (
    <>
      <main
        id="treemap-container"
        className="h-full flex flex-col px-8 items-center justify-center text-center"
      >
        <BackButton>Voltar</BackButton>

        <h1 className="text-5xl mb-8">TreeMap</h1>

        <TreeMapContainer data={data} />
      </main>
    </>
  );
};

export { TreeMap };
