import React from "react";
import Info from "./Info";
import "./Paragraph.css";

export default function Paragraph({ ...props }) {
  return (
    <div className="preview__paragraph">
      <Info text={props.content} />
    </div>
  );
}
