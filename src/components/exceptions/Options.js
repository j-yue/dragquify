import React, { useState } from "react";
import { Button, TextField } from "@shopify/polaris";

// used for options attribute in radio, select inputs
// allow users to add and delete options
export default function Options({ options, handleTextChange }) {
  const [_options, setOptions] = useState(options);

  const handleChange = (e, index) => {
    let copy = _options;
    copy[index] = { value: e, label: e };
    setOptions(copy);
    handleTextChange("options", _options);
  };

  const handleDelete = (index) => {
    let copy = _options;
    copy.splice(index, 1);
    setOptions(copy);
    handleTextChange("options", _options);
  };

  const handleAdd = () => {
    let copy = _options;
    copy.push({ value: "", label: "" });
    setOptions(copy);
    handleTextChange("options", _options);
  };

  return (
    <div>
      {_options.map((option, index) => {
        return (
          <div className="selected__option">
            <TextField
              label={`Option ${index + 1}`}
              value={option.value}
              onChange={(e) => handleChange(e, index)}
              labelAction={{
                content: "Delete",
                destructive: "true",
                onAction: () => handleDelete(index),
              }}
              key={index}
            />
          </div>
        );
      })}
      <Button
        monochrome
        outline
        fullWidth
        onClick={() => handleAdd()}
        size="slim"
      >
        Add Option
      </Button>
    </div>
  );
}
