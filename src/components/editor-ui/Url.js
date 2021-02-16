import React from "react";
import { TextField, Icon, Stack, Button } from "@shopify/polaris";
import { CircleCancelMajor } from "@shopify/polaris-icons";

export default function Url({ ...props }) {
  return (
    <Stack>
      <Stack.Item fill>
        <TextField placeholder="Paste link or search" {...props} />
      </Stack.Item>
      <Stack.Item>
        <Button disabled>
          <Icon source={CircleCancelMajor} />
        </Button>
      </Stack.Item>
    </Stack>
  );
}
