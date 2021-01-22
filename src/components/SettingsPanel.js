import React from "react";
import { Card, Button, ButtonGroup } from "@shopify/polaris";
import { BASIC_INPUTS, SIDEBAR_SETTINGS, SPECIALIZED_INPUTS } from "./schema";

export default function SettingsPanel({ addInput: handleClick }) {
  const settings = [
    { name: "Sidebar Settings", settings: SIDEBAR_SETTINGS },
    { name: "Basic Inputs", settings: BASIC_INPUTS },
    {
      name: "Specialized Inputs",
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
        {settings.map(({ name, settings }) => {
          return (
            <Card.Section title={name}>
              <ButtonGroup>
                {settings.map((setting) => (
                  <Button
                    key={setting.name}
                    onClick={() => handleClick(setting)}
                  >
                    {setting.name}
                  </Button>
                ))}
              </ButtonGroup>
            </Card.Section>
          );
        })}
      </Card.Section>
    </Card>
  );
}
