import React from "react";
import { TextField as PolarisTextField } from "@shopify/polaris";

export default function TextField({ ...props }) {
  const name = props.name;

  return (
    <PolarisTextField
      {...props}
      value={props.default}
      multiline={name === "textarea" || name === "html" ? 3 : ""}
    />
  );
}
