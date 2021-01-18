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

// collection, product, article, blog, page, linklist
function ListInput({ label }) {
  return (
    <Container background border>
      <Button>
        <TextStyle variation="strong">{label}</TextStyle>
      </Button>
    </Container>
  );
}

function FontPicker({ style, font }) {
  return (
    <Container background border>
      <TextContainer spacing="tight">
        <DisplayText size="large">{font}</DisplayText>
        <p>{style}</p>
      </TextContainer>
      <Button>
        <TextStyle variation="strong">Change</TextStyle>
      </Button>
    </Container>
  );
}

function ImagePicker() {
  return (
    <Container border>
      <Button>
        <TextStyle variation="strong">Select Image</TextStyle>
      </Button>
      <Link>Explore free images</Link>
    </Container>
  );
}

export { ListInput, FontPicker, ImagePicker };
