import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | undefined;
}

const BackButton = (props: PropsWithChildren<IBackButtonProps>) => {
  const navigate = useNavigate();

  return (
    <button
      className="hover:bg-gray-600 py-2 px-4 border border-slate-50 rounded absolute top-4 left-4"
      onClick={() => navigate(-1)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export { BackButton };
