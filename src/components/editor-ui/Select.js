import React from "react";
import { Select as PolarisSelect } from "@shopify/polaris";

export default function Select({ ...props }) {
  return <PolarisSelect {...props} value={props.default} />;
}
