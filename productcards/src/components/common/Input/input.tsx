import { FC } from "react";
import TemporaryDrawer from "../../business/SideDraw/Drawer";
import "./Input.css";
import { Props } from "./types";

const Input: FC<Props> = ({ filterValue, onChange, addToCardItem }) => (
  <div className="inputWrapper">
    <div className="Search">
      <input
        placeholder="Search..."
        type="search"
        className="inputSearch"
        value={filterValue}
        onChange={onChange}
      />
    </div>
    <TemporaryDrawer addToCardItem={addToCardItem} />
  </div>
);

export default Input;
