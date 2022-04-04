import { FC } from "react";
import "./Input.css";
import { Props } from "./types";

const Input: FC<Props> = ({ filterValue, onChange }) => (
  <div className="Search">
    <input
      placeholder="Search..."
      type="search"
      className="inputSearch"
      value={filterValue}
      onChange={onChange}
    />
  </div>
);

export default Input;
