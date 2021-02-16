import React from "react";
import {
  TextField,
  Card,
  Checkbox,
  RangeSlider,
  Select,
  ChoiceList,
} from "@shopify/polaris";

import { Draggable } from "react-beautiful-dnd";

import { ListInput, FontPicker, ImagePicker } from "./editor-ui/listInputs";
import ColorPicker from "./editor-ui/ColorPicker";
import Richtext from "./editor-ui/Richtext";
import Header from "./editor-ui/Header";
import Paragraph from "./editor-ui/Paragraph";
import Url from "./editor-ui/Url";
import VideoUrl from "./editor-ui/VideoUrl";
import Info from "./editor-ui/Info";

import "./PreviewPanel.css";

export default function PreviewPanel({
  inputs,
  selectedInputIndex,
  handleClick,
  previewRef,
}) {
  const LabelWrap = ({ label, children }) => (
    <React.Fragment>
      <p className="preview__label">{label}</p>
      {children}
    </React.Fragment>
  );

  const inputToComponent = ({ name, label, ...rest }) => {
    if (name === "header") return <Header name={rest.content} />;

    if (name === "paragraph") return <Paragraph text={rest.content} />;

    if (name === "checkbox")
      return (
        <Checkbox
          label={label}
          checked={rest.default === "false" ? false : true}
        />
      );

    if (name === "radio") {
      const len = rest.options.length;
      return (
        <ChoiceList
          title={label}
          choices={
            len
              ? rest.options
              : [{ value: "value", label: "Options are empty" }]
          }
          selected={len ? rest.options[0].value : "value"}
        />
      );
    }
    if (name === "range")
      return (
        <RangeSlider
          label={label}
          value={rest.default}
          min={rest.min}
          max={rest.max}
          suffix={
            <p>
              {rest.default} {rest.unit}
            </p>
          }
        />
      );

    if (name === "select")
      return (
        <Select label={label} options={rest.options} value={rest.default} />
      );

    if (name === "text")
      return (
        <TextField
          label={label}
          value={rest.default}
          placeholder={rest.placeholder}
        />
      );

    if (name === "textarea" || name === "html")
      return (
        <TextField
          label={label}
          value={rest.default}
          placeholder={rest.placeholder}
          multiline={3}
        />
      );

    if (
      (name === "collection") |
      (name === "product") |
      (name === "article") |
      (name === "blog") |
      (name === "page")
    ) {
      return (
        <LabelWrap label={label}>
          <ListInput label={`Select ${name}`} />
        </LabelWrap>
      );
    }

    if (name === "color")
      return <ColorPicker label={label} color={rest.default} />;

    if (name === "font") return <FontPicker style="bold" font="helvetica" />;

    if (name === "image") return <ImagePicker />;

    if (name === "link list") return <ListInput label="Select menu" />;

    if (name === "richtext") return <Richtext />;

    if (name === "url") return <Url />;

    if (name === "video url") return <VideoUrl />;
    else return <p>the input did not render correctly</p>;
  };

  // all inputs except paragraph have the info attribute
  const appendInfo = (input) => (
    <React.Fragment>
      {inputToComponent(input)}
      {input.info && <Info text={input.info} />}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {inputs.map((input, index) => {
        return (
          <Draggable draggableId={`draggable-${index}`} index={index}>
            {(provided) => (
              <div
                className={
                  index === selectedInputIndex ? "preview__active-input" : ""
                }
                key={index}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card.Section>
                  <div onClick={() => handleClick(index)} ref={previewRef}>
                    {input.name === "paragraph" && inputToComponent(input)}
                    {input.name !== "paragraph" && appendInfo(input)}
                  </div>
                </Card.Section>
              </div>
            )}
          </Draggable>
        );
      })}
    </React.Fragment>
  );
}
