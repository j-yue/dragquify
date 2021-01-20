import React from "react";
import { TextField, Icon, Stack, Button } from "@shopify/polaris";
import { CircleCancelMajor } from "@shopify/polaris-icons";

export default function Url({ value }) {
  return (
    <Stack>
      <Stack.Item fill>
        <TextField placeholder="Paste link or search" value={value} />
      </Stack.Item>
      <Stack.Item>
        <Button disabled>
          <Icon source={CircleCancelMajor} />
        </Button>
      </Stack.Item>
    </Stack>
  );
}
