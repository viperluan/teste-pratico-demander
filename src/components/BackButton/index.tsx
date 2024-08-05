import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface IBackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | undefined;
}

const BackButton = (props: PropsWithChildren<IBackButtonProps>) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} {...props}>
      {props.children}
    </button>
  );
};

export { BackButton };
