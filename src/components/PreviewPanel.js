import React from "react";
import { Card } from "@shopify/polaris";

import { Draggable } from "react-beautiful-dnd";

import { INPUT_TO_COMPONENT } from "./utils/inputToComponent";
import Info from "./editor-ui/Info";

import "./PreviewPanel.css";

export default function PreviewPanel({
  inputs,
  selectedInputIndex,
  handleClick,
}) {
  return (
    <React.Fragment>
      {inputs.map((input, index) => {
        const Component = INPUT_TO_COMPONENT[input.type];

        return (
          <Draggable
            draggableId={`draggable-${index}`}
            index={index}
            key={index}
          >
            {(provided) => (
              <div
                className={
                  index === selectedInputIndex ? "preview__active-input" : ""
                }
                key={index}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card.Section>
                  <div onClick={() => handleClick(index)}>
                    {Component && <Component {...input} />}
                    {input.name !== "paragraph" && <Info text={input.info} />}
                  </div>
                </Card.Section>
              </div>
            )}
          </Draggable>
        );
      })}
    </React.Fragment>
  );
}
