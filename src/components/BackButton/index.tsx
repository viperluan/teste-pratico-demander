import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | undefined;
}

const BackButton = (props: PropsWithChildren<IBackButtonProps>) => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-slate-700 py-2 px-4 rounded"
      onClick={() => navigate(-1)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export { BackButton };
