import React from "react";
import { Card, Button, ButtonGroup } from "@shopify/polaris";

const BASIC_INPUTS = [
  "checkbox",
  "radio",
  "range",
  "select",
  "text",
  "textarea",
];

const SPECIALIZED_INPUTS = [
  "article",
  "blog",
  "collection",
  "color",
  "font picker",
  "html",
  "image picker",
  "link list",
  "page",
  "product",
  "richtext",
  "url",
  "video url",
];

const SIDEBAR_SETTINGS = ["header", "paragraph"];

export default function SettingsPanel() {
  const settings = [
    { id: "sidebar", content: "Sidebar Settings", settings: SIDEBAR_SETTINGS },
    { id: "basic", content: "Basic Inputs", settings: BASIC_INPUTS },
    {
      id: "specialized",
      content: "Specialized Inputs",
      settings: SPECIALIZED_INPUTS,
    },
  ];

  return (
    <Card>
      <Card.Section title="Actions">
        <ButtonGroup>
          <Button>New</Button>
          <Button primary>Export</Button>
        </ButtonGroup>
      </Card.Section>
      <Card.Section title="Settings">
        {settings.map((type) => (
          <Card.Section title={type.id} key={type.id}>
            <ButtonGroup>
              {type.settings.map((index) => (
                <Button key={index}>{index}</Button>
              ))}
            </ButtonGroup>
          </Card.Section>
        ))}
      </Card.Section>
    </Card>
  );
}
