import { useEffect, useRef, useState } from "react";
import { TreeMapNode } from "../TreeMapNode";

type DataType = {
  name: string;
  value: number;
};

interface ITreemapProps {
  data: DataType[];
}

type TreemapItemNodeType = {
  name: string;
  value: number;
  height: number;
  width: number;
  x: number;
  y: number;
  bgColor: string;
};

const TreeMapContainer = ({ data }: ITreemapProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const interpolateColor = (percentage: number) => {
    const startColor = [144, 238, 144]; // Verde claro (RGB)
    const endColor = [0, 100, 0]; // Verde escuro (RGB)

    // Interpolação de cores
    const r = Math.round(
      startColor[0] + (1 + percentage) * (endColor[0] - startColor[0]),
    );
    const g = Math.round(
      startColor[1] + (1 + percentage) * (endColor[1] - startColor[1]),
    );
    const b = Math.round(
      startColor[2] + (1 + percentage) * (endColor[2] - startColor[2]),
    );

    // Retorna cor no formato rgba com opacidade 1 (opcionalmente, pode ajustar a opacidade se desejar)
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const createTreemapNode = (data: DataType[], x = 0, y = 0) => {
    if (data.length === 0) {
      return [];
    }

    // Ordena do maior para o menor
    const ordenedData = data.sort((a, b) => b.value - a.value);

    const total = ordenedData.reduce((sum, { value }) => sum + value, 0);
    const isVerticalSplit = width > height;
    const areaFactor = (isVerticalSplit ? width : height) / total;

    let offset = 0;

    const createdNodes = ordenedData.map(({ name, value }) => {
      const itemSize = value * areaFactor;
      const percentage = value / total;

      let nodeHeight = 0,
        nodeWidth = 0,
        nodeX = 0,
        nodeY = 0;

      if (isVerticalSplit) {
        nodeHeight = height;
        nodeWidth = itemSize;
        nodeX = x + offset;
        nodeY = y;
      } else {
        nodeHeight = itemSize;
        nodeWidth = width;
        nodeX = x;
        nodeY = y + offset;
      }

      const itemInfo: TreemapItemNodeType = {
        name,
        value,
        width: nodeWidth,
        height: nodeHeight,
        x: nodeX,
        y: nodeY,
        bgColor: interpolateColor(percentage),
      };

      offset += itemSize;

      return itemInfo;
    });

    return createdNodes;
  };

  const renderTreemapNode = () => {
    const treemapNodes = createTreemapNode(data);

    return treemapNodes.map(({ name, value, height, width, x, y, bgColor }) => {
      return (
        <TreeMapNode
          style={{
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: bgColor,
          }}
          name={name}
          value={value}
          key={name}
        />
      );
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      setWidth(container.offsetWidth);
      setHeight(container.offsetHeight);
    }
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;

    const handleResize = () => {
      if (container) {
        setWidth(container.offsetWidth);
        setHeight(container.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpeza do listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-4/6 bg-slate-600">
      {renderTreemapNode()}
    </div>
  );
};

export { TreeMapContainer };
