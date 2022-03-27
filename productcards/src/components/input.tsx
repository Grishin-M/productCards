import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label }) => {
  return (
    // const handleChange
    <div className="input-wrapper">
      <input
        type="text"
        // value={handleChange}
      />
      <input
        type="radio"
      />
      <input
        type="radio"
      />
      <input
        type="radio"
      />
    </div>
  );
};

export default Input;