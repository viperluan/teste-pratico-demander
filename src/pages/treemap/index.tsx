import { ChangeEvent, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { TreeMapContainer } from "../../components/TreeMapContainer";
import { JsonReader } from "../../entities/models/JsonReader";

interface ITreemapData {
  name: string;
  value: number;
}

const initialData: ITreemapData[] = [
  { name: "Brasil", value: 100 },
  { name: "Itália", value: 70 },
  { name: "Alemanha", value: 50 },
  { name: "Espanha", value: 15 },
  { name: "Holanda", value: 30 },
  { name: "Japão", value: 50 },
];

const TreeMap = () => {
  const [loadedData, setLoadedData] = useState<ITreemapData[]>(initialData);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const jsonBlob = event.target.files?.[0];

    if (jsonBlob) {
      const reader = new FileReader();
      const jsonReader = new JsonReader(jsonBlob, reader);

      const { jsonReadData, errorMessage } = await jsonReader.execute();

      if (errorMessage) {
        alert(errorMessage);
        setLoadedData(initialData);
        return;
      }

      if (jsonReadData) {
        setLoadedData(jsonReadData);
      }
    }
  };

  return (
    <>
      <main
        id="treemap-container"
        className="h-full flex flex-col px-8 items-center justify-center text-center"
      >
        <BackButton>Voltar</BackButton>

        <h1 className="text-5xl mb-8">TreeMap - Medalhas jogos olímpicos</h1>

        <input
          className="mb-8"
          accept=".json"
          type="file"
          name="json"
          id="json"
          onChange={handleFileChange}
        />

        <TreeMapContainer data={loadedData} />
      </main>
    </>
  );
};

export { TreeMap };
