import React from "react";

import { Checkbox as PolarisCheckbox } from "@shopify/polaris";

import "./Checkbox.css";

export default function Checkbox({ ...props }) {
  return (
    <PolarisCheckbox
      label={props.label}
      checked={props.default === "false" ? false : true}
    />
  );
}
