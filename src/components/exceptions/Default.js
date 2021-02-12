import React, { useState } from "react";
import { Select } from "@shopify/polaris";

// used for default attribute in radio, select inputs
// allow user to select default attribute from list of options
export default function Default({ options, selected, handleTextChange }) {
  const [_selected, setSelected] = useState(selected);

  const handleChange = (e) => {
    setSelected(e);
    handleTextChange("default", e);
  };

  return (
    <Select
      label="Default value"
      options={options}
      value={_selected}
      onChange={(e) => handleChange(e)}
    />
  );
}
