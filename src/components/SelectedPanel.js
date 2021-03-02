import React from "react";
import { Card, TextField } from "@shopify/polaris";

import { KEY_TO_COMPONENT } from "./utils/keyToComponent";
import "./SelectedPanel.css";

//render the input selected from the preview tab and
//give each key besides name and type keys a label and input field that user can change
export default function SelectedPanel({
  inputs,
  handleTextChange,
  selectedInput,
  removeCurrentInput,
}) {
  let name, type, otherKeys;

  //will not be rendering name and type key because its value should be constant
  selectedInput
    ? ([name, type, ...otherKeys] = Object.keys(selectedInput))
    : ([name, type, ...otherKeys] = []);

  //render a key as textfield unless it is an exception specified in KEY_TO_COMPONENT
  const mapToComponent = (key) => {
    const isException = KEY_TO_COMPONENT.hasOwnProperty(selectedInput.type);

    //check if selected input is input with exception(s)
    if (isException) {
      const Component = KEY_TO_COMPONENT[selectedInput.type][key];
      //if key needs to render differently, return its mapped component
      if (Component)
        return (
          <Component {...selectedInput} handleTextChange={handleTextChange} />
        );
    }

    return (
      <div className="selected__attribute">
        <TextField
          label={key}
          value={selectedInput[key]}
          onChange={(e) => handleTextChange(key, e)}
          multiline
        />
      </div>
    );
  };

  return (
    <Card
      title="Selected"
      actions={
        inputs.length
          ? [
              {
                content: "Delete",
                destructive: "true",
                onAction: removeCurrentInput,
              },
            ]
          : []
      }
    >
      <Card.Section>
        {selectedInput &&
          otherKeys.map((key, index) => (
            <div key={index}>{mapToComponent(key)}</div>
          ))}
      </Card.Section>
    </Card>
  );
}
