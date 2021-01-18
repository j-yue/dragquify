import React from "react";
import {
  Button,
  ButtonGroup,
  Link,
  TextStyle,
  TextContainer,
  DisplayText,
} from "@shopify/polaris";
import InputContainer from "./InputContainer";

/*
These components share the InputContainer layout but have some variations besides background color and border
    - SelectSingle
        - collection, product, article
        - everything is the same except the button label
    - SelectList
        - blog, page, menu
        - listname and change + remove buttons
    - ImagePicker
        - SelectSingle + link
    - FontPicker
        - unique
 */

// collection, product, article
function SelectSingle({ label }) {
  return (
    <InputContainer background border>
      <Button>
        <TextStyle variation="strong">{label}</TextStyle>
      </Button>
    </InputContainer>
  );
}
// blog, page, menu
function SelectList({ label }) {
  return (
    <InputContainer background border>
      <p>{label}</p>
      <ButtonGroup segmented>
        <Button>
          <TextStyle variation="strong">Change</TextStyle>
        </Button>
        <Button>
          <TextStyle variation="strong">Remove</TextStyle>
        </Button>
      </ButtonGroup>
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

export { SelectSingle, SelectList, FontPicker, ImagePicker };
