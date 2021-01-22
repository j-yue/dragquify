import React from "react";
import { Card, TextField } from "@shopify/polaris";

//render the input selected from the preview tab and
//give each key besides name and type keys a label and input field that user can change
export default function SelectedPanel({ handleTextChange, selectedInput }) {
  let name, type, otherKeys;
  //will not be rendering name and type key because its value should be constant
  selectedInput
    ? ([name, type, ...otherKeys] = Object.keys(selectedInput))
    : ([name, type, ...otherKeys] = []);

  return (
    <Card
      title="Selected"
      actions={[
        {
          content: "Delete",
          destructive: true,
          onAction: () => console.log("deleting"),
        },
        {
          content: "Output",
          onAction: () => console.log("showing output"),
        },
      ]}
    >
      {selectedInput && (
        <Card.Section>
          {otherKeys.map((key) => {
            return (
              <TextField
                label={key}
                value={selectedInput[key]}
                onChange={(e) => handleTextChange(key, e)}
              />
            );
          })}
        </Card.Section>
      )}
    </Card>
  );
}
