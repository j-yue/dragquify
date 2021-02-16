import React, { useState } from "react";
import { Select } from "@shopify/polaris";

// used for default attribute in radio, select inputs
// allow user to select default attribute from list of options
export default function Default({ handleTextChange, ...input }) {
  const [_selected, setSelected] = useState(input.default);

  const handleChange = (e) => {
    setSelected(e);
    handleTextChange("default", e);
  };

  return (
    <Select
      label="Default value"
      options={input.options}
      value={_selected}
      onChange={handleChange}
    />
  );
}
