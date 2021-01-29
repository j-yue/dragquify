import React from "react";
import { Subheading } from "@shopify/polaris";
import "./Header.css";

export default function Header({ name }) {
  return (
    <div className="preview__header">
      <Subheading>{name}</Subheading>
    </div>
  );
}
