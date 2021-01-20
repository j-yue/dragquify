import React from "react";
import { TextStyle } from "@shopify/polaris";

export default function Paragraph({ text }) {
  return (
    <p style={{ paddingBottom: "1rem" }}>
      <TextStyle variation="subdued">{text}</TextStyle>
    </p>
  );
}
