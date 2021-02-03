import React from "react";
import {
  TextField,
  Card,
  Checkbox,
  RangeSlider,
  Select,
  ChoiceList,
} from "@shopify/polaris";

import { ListInput, FontPicker, ImagePicker } from "./editor-ui/listInputs";
import ColorPicker from "./editor-ui/ColorPicker";
import Richtext from "./editor-ui/Richtext";
import Header from "./editor-ui/Header";
import Paragraph from "./editor-ui/Paragraph";
import Url from "./editor-ui/Url";
import VideoUrl from "./editor-ui/VideoUrl";
import Info from "./editor-ui/Info";

import "./PreviewPanel.css";

export default function PreviewPanel({ inputs, handleClick, previewRef }) {
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

    if (name === "radio")
      return (
        <ChoiceList
          title={label}
          choices={rest.options}
          selected={rest.options[0].value}
        />
      );

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
      return <Select label={label} options={rest.options} />;

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

    if (name === "font") return <FontPicker />;

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
          <Card.Section key={index}>
            <div onClick={() => handleClick(index)} ref={previewRef}>
              {input.name === "paragraph" && inputToComponent(input)}
              {input.name !== "paragraph" && appendInfo(input)}
            </div>
          </Card.Section>
        );
      })}
    </React.Fragment>
  );
}
