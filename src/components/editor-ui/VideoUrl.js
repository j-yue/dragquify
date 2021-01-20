import React from "react";
import { TextField } from "@shopify/polaris";

export default function VideoUrl({ value }) {
  return <TextField placeholder="Paste a link" value={value} />;
}
