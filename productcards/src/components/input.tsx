import { useState } from "react";
import './Input.css';
import initialState from "./state";

function Input () {
  
  const [input, setInput] = useState(initialState);

  const handleChange = (event: { target: { value: string; }; }) => setInput({search: event.target.value});

    return (
    <div className='inputWrapper'>  
      <div className="Search">
        <input
          placeholder="Search..."
          type="search"
          className="inputSearch"
          value={input.search}
          onChange={handleChange}
        />
      </div>
    </div>
   )
}

export default Input;