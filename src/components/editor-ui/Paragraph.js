import React from "react";
import { TextStyle } from "@shopify/polaris";
import "./Paragraph.css";

export default function Paragraph({ text }) {
  return (
    <p className="preview__paragraph">
      <TextStyle variation="subdued">{text}</TextStyle>
    </p>
  );
}
