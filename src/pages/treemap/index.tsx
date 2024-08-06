import { useEffect, useRef, useState } from "react";
import { BackButton } from "../../components/BackButton";

interface IData {
  [key: string]: string;
}

const data: IData[] = [
  {
    country: "Brasil",
    medals: "30",
  },
  {
    country: "EUA",
    medals: "15",
  },
  {
    country: "Itália",
    medals: "5",
  },
  {
    country: "Alemanha",
    medals: "10",
  },
];

const TreeMap = () => {
  const [treeMapContainer, setTreeMapContainer] = useState({});
  const treeMapContainerRef = useRef<HTMLDivElement>(null);

  // Converter a quantidade de medalhas para números e calcular o total
  const totalMedals = data.reduce(
    (sum, acc) => sum + parseInt(acc.medals, 10),
    0,
  );

  const medalsWithPercent = data.map((country) => ({
    ...country,
    percentage:
      ((parseInt(country.medals, 10) / totalMedals) * 100).toFixed(2) + "%",
  }));

  useEffect(() => {
    if (treeMapContainerRef.current) {
      setTreeMapContainer({
        width: treeMapContainerRef.current.offsetWidth,
        height: treeMapContainerRef.current.offsetHeight,
      });
    }
  }, [treeMapContainerRef]);

  return (
    <>
      <main
        id="treemap-container"
        className="h-full flex flex-col px-8 items-center justify-center text-center"
      >
        <BackButton>Voltar</BackButton>

        <h1 className="text-5xl mb-8">TreeMap</h1>

        <section
          className="w-full h-3/4 bg-slate-600 bg-gre"
          ref={treeMapContainerRef}
        >
          {medalsWithPercent.map((medal) => {
            return (
              <div
                style={{
                  width: `100%`,
                  height: `${medal.percentage}`,
                  backgroundColor: `rgba(5, 46, 22, ${medal.percentage})`,
                }}
              >
                <p>
                  {medal.country} - {medal.percentage}
                </p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export { TreeMap };
