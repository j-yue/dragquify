import React from "react";
import {
  Button,
  Link,
  TextStyle,
  TextContainer,
  DisplayText,
} from "@shopify/polaris";
import InputContainer from "./InputContainer";

/*
These components share the InputContainer layout but have some variations besides background color and border
    - ListInput
        - collection, product, article, blog, page, link_list
        - centered button
    - ImagePicker
        - SelectSingle + link
    - FontPicker
        - unique
 */

// collection, product, article, blog, page, linklist
function ListInput({ label }) {
  return (
    <InputContainer background border>
      <Button>
        <TextStyle variation="strong">{label}</TextStyle>
      </Button>
    </InputContainer>
  );
}

function FontPicker({ style, font }) {
  return (
    <InputContainer background border>
      <TextContainer spacing="tight">
        <DisplayText size="large">{font}</DisplayText>
        <p>{style}</p>
      </TextContainer>
      <Button>
        <TextStyle variation="strong">Change</TextStyle>
      </Button>
    </InputContainer>
  );
}

function ImagePicker() {
  return (
    <InputContainer border>
      <Button>
        <TextStyle variation="strong">Select Image</TextStyle>
      </Button>
      <Link>Explore free images</Link>
    </InputContainer>
  );
}

export { ListInput, FontPicker, ImagePicker };
