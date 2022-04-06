import "./App.css";
import Main from "./Pages/Main/Main";
import { useReducer } from "react";
import { initialState } from "./store/state";
import { reducer } from "./store";
import { AppContext } from "./contexts";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <div className="App">
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
