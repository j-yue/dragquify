import React from "react";

import { ChoiceList } from "@shopify/polaris";

export default function Radio({ ...props }) {
  const options = props.options;
  const len = options.length;
  return (
    <ChoiceList
      title={props.label}
      choices={len ? options : [{ value: "value", label: "Options are empty" }]}
      selected={len ? options[0].value : "value"}
    />
  );
}
