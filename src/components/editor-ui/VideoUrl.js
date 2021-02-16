import React from "react";
import { TextField } from "@shopify/polaris";

export default function VideoUrl({ ...props }) {
  return <TextField placeholder="Paste a link" {...props} />;
}
