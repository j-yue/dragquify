import React, { useState } from "react";
import { Stack, RadioButton } from "@shopify/polaris";

//when selected inputs is a checkbox
//render the attr with two radio buttons
//use this instead of textfield to avoid errors when typing
export default function Checkbox({ choice, handleTextChange }) {
  const [value, setValue] = useState(choice);

  const handleChange = (newValue) => {
    setValue(newValue);
    handleTextChange("default", `${newValue}`);
  };

  return (
    <Stack>
      <RadioButton
        label="True"
        checked={value === "true"}
        id="true"
        onChange={handleChange}
      />

      <RadioButton
        label="False"
        checked={value === "false"}
        id="false"
        onChange={handleChange}
      />
    </Stack>
  );
}
