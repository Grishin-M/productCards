import { FC } from "react";
import { Props } from "./types";

const Button: FC<Props> = ({ children, onClick, isDisabled }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className="paginationBtn">
      {children}
    </button>
  );
};

export default Button;
