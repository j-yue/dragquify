import React from "react";
import {
  Button,
  Link,
  TextStyle,
  TextContainer,
  DisplayText,
} from "@shopify/polaris";
import "./listInputs.css";

/*
These components share the layout specified in the Container component but 
have some variations besides background color and border
    - ListInput
        - collection, product, article, blog, page, link_list
        - centered button
    - ImagePicker
        - SelectSingle + link
    - FontPicker
        - unique
 */

function Container({ background, border, children }) {
  return (
    <div
      className={`InputContainer ${
        background ? "InputContainer--background" : ""
      } ${border ? "InputContainer--border" : ""}`}
    >
      {children}
    </div>
  );
}

function LabelWrap({ label, children }) {
  return (
    <div>
      <p className="preview__label">{label}</p>
      {children}
    </div>
  );
}

// collection, product, article, blog, page, linklist
function ListInput({ ...props }) {
  return (
    <LabelWrap label={props.label}>
      <Container background border>
        <Button size="large">
          <TextStyle variation="strong">{`Select ${props.name}`}</TextStyle>
        </Button>
      </Container>
    </LabelWrap>
  );
}

function FontPicker({ ...props }) {
  return (
    <LabelWrap label={props.label}>
      <Container background border>
        <TextContainer spacing="tight">
          <DisplayText size="large">{props.default}</DisplayText>
          <p>bold</p>
        </TextContainer>
        <Button fullWidth size="large">
          <TextStyle variation="strong">Change</TextStyle>
        </Button>
      </Container>
    </LabelWrap>
  );
}

function ImagePicker({ ...props }) {
  return (
    <LabelWrap label={props.label}>
      <Container border>
        <Button size="large">
          <TextStyle variation="strong">Select Image</TextStyle>
        </Button>
        <Link>Explore free images</Link>
      </Container>
    </LabelWrap>
  );
}

export { ListInput, FontPicker, ImagePicker, LabelWrap };
