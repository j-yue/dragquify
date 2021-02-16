import React from "react";
import { Subheading } from "@shopify/polaris";
import "./Header.css";

export default function Header({ ...props }) {
  return (
    <div className="preview__header">
      <Subheading>{props.name}</Subheading>
    </div>
  );
}
