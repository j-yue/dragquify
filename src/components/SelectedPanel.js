import React from "react";
import { Card, TextField } from "@shopify/polaris";
import Checkbox from "./exceptions/Checkbox";
import VideoUrl from "./exceptions/VideoUrl";
import Default from "./exceptions/Default";
import Options from "./exceptions/Options";

//render the input selected from the preview tab and
//give each key besides name and type keys a label and input field that user can change
export default function SelectedPanel({ handleTextChange, selectedInput }) {
  let name, type, otherKeys;

  //will not be rendering name and type key because its value should be constant
  selectedInput
    ? ([name, type, ...otherKeys] = Object.keys(selectedInput))
    : ([name, type, ...otherKeys] = []);

  //keep track of input name
  //will be used to check if selected input has fields that need to be rendered differently
  const inputName = selectedInput ? selectedInput.name : "";

  const renderKey = (key, index) => {
    if (inputName === "checkbox" && key === "default")
      return (
        <Checkbox
          choice={selectedInput.default}
          handleTextChange={handleTextChange}
          key={index}
        />
      );
    if (inputName === "video url" && key === "accept")
      return (
        <VideoUrl
          accept={selectedInput.accept}
          handleTextChange={handleTextChange}
          key={index}
        />
      );
    if (inputName === "radio" || inputName === "select") {
      if (key === "default")
        return (
          <Default
            options={selectedInput.options}
            default={selectedInput.default}
            handleTextChange={handleTextChange}
            key={index}
          />
        );
      if (key === "options")
        return (
          <Options
            options={selectedInput.options}
            handleTextChange={handleTextChange}
            key={index}
          />
        );
    }

    return (
      <TextField
        label={key}
        value={selectedInput[key]}
        onChange={(e) => handleTextChange(key, e)}
        key={index}
        // multiline={key === "info" ? 5 : 1}
        multiline
      />
    );
  };

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
          {otherKeys.map((key, index) => renderKey(key, index))}
        </Card.Section>
      )}
    </Card>
  );
}
