import { createContext } from "react";
import { initialState } from "../store/state";

export const AppContext = createContext(initialState);
