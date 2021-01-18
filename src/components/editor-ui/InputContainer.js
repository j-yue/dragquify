import React from "react";
import "./InputContainer.css";

export default function InputContainer({ background, border, children }) {
  return (
    <div
      className={`InputContainer ${
        background ? "InputContainer--background" : ""
      } ${border ? "InputContainer--border" : ""}`}
    >
      {children}
    </div>
  );
}
