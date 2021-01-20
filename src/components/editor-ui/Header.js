import React from "react";
import { TextStyle, Subheading } from "@shopify/polaris";
import "./Header.css";

export default function Header({ name, info }) {
  return (
    <div className="preview__header">
      <Subheading>{name}</Subheading>
      <p>
        <TextStyle variation="subdued">{info}</TextStyle>
      </p>
    </div>
  );
}
