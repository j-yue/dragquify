import React from "react";
import Info from "./Info";
import "./Paragraph.css";

export default function Paragraph({ text }) {
  return (
    <p className="preview__paragraph">
      <Info text={text} />
    </p>
  );
}
