import { HTMLAttributes } from "react";

interface ITreeMapNodeProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  value: number;
}

const TreeMapNode = (props: ITreeMapNodeProps) => {
  return (
    <div
      className="absolute border border-white text-xs text-center overflow-hidden bg-blue-500
        flex items-center justify-center"
      {...props}
    >
      <p>
        {props.name} - {props.value}
      </p>
    </div>
  );
};

export { TreeMapNode };
