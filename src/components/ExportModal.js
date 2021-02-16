import React from "react";

import { formatOutput, generateOutput } from "./utils/format";
import { Modal, TextContainer } from "@shopify/polaris";

export default function ExportModal({
  inputs,
  showOutput,
  toggleModal,
  setToastActive,
  setToastContent,
}) {
  const output = formatOutput(generateOutput(inputs));

  const handleCopyClick = () => {
    if (!navigator.clipboard)
      setToastContent("Failed. Allow site to access clipboard.");
    else {
      navigator.clipboard
        .writeText(output)
        .then(() => {
          setToastActive(true);
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  };

  return (
    <Modal
      title="Export Code"
      open={showOutput}
      onClose={toggleModal}
      primaryAction={{
        content: "Copy",
        onAction: handleCopyClick,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: toggleModal,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p style={{ whiteSpace: "pre-wrap" }}>{output}</p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  );
}
