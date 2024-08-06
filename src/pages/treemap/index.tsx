import { ChangeEvent, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { TreeMapContainer } from "../../components/TreeMapContainer";

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          setLoadedData(data);
        } catch (error) {
          setLoadedData(initialData);
        }
      };

      reader.readAsText(file);
    } else {
      setLoadedData(initialData);
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
