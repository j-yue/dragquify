import React, { useState } from "react";
import { ChoiceList } from "@shopify/polaris";

//when selected inputs is a checkbox
//render the attr with two radio buttons
//use this instead of textfield to avoid errors when typing
export default function Checkbox({ handleTextChange, ...input }) {
  const [value, setValue] = useState(input.default);

  const handleChange = (newValue) => {
    setValue(newValue);
    handleTextChange("default", `${newValue}`);
  };

  return (
    <ChoiceList
      title="Default"
      choices={[
        { label: "True", value: "true" },
        { label: "False", value: "false" },
      ]}
      selected={value}
      onChange={handleChange}
    />
  );
}
