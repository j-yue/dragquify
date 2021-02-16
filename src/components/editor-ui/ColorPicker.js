import React from "react";
import { Stack } from "@shopify/polaris";

export default function ColorPicker({ ...props }) {
  const [color, label] = [props.default, props.label];

  const buttonStyle = {
    border: "none",
    background: color,
    height: "2rem",
    borderRadius: "3px",
    width: "3rem",
  };

  return (
    <Stack>
      <button style={buttonStyle}></button>
      <p>{label}</p>
    </Stack>
  );
}
