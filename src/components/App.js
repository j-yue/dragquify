import React, { useState, useEffect } from "react";
import { AppProvider, Card, Frame, Toast } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SettingsPanel from "./SettingsPanel";
import PreviewPanel from "./PreviewPanel";
import SelectedPanel from "./SelectedPanel";
import ExportModal from "./ExportModal";

export default function App() {
  // inputs added from SettingsPanel
  const [inputs, setInputs] = useState([]);

  // index of input selected from PreviewPanel
  const [selectedInput, setSelectedInput] = useState(null);

  // input selected from PreviewPanel
  const [selectedInputIndex, setSelectedInputIndex] = useState(0);

  // output to be generated inputs to be shown in modal
  const [showOutput, setShowOutput] = useState(false);
  const toggleModal = () => setShowOutput(!showOutput);

  // ref for PreviewPanel
  const previewRef = React.createRef();

  const handleInputChange = (inputs) => setInputs(inputs);

  // onClick handler for adding inputs from SettingsPanel
  const addInput = (input) => handleInputChange([...inputs, input]);
  // onClick handler for starting a new project
  const clearInputs = () => setInputs([]);

  // onClick handler for delete button in SelectedPanel
  const removeCurrentInput = () => {
    let updatedInputs = [...inputs];
    updatedInputs.splice(selectedInputIndex, 1);
    setSelectedInputIndex(0);
    setInputs(updatedInputs);
  };

  // onClick handler for PreviewPanel
  const handlePreviewClick = (index) => {
    setSelectedInputIndex(index);
  };

  // onChange handler for SelectedPanel
  const handleTextChange = (key, value) => {
    let updatedInput = Object.assign({}, selectedInput);
    updatedInput[key] = value;
    let updatedInputs = [...inputs];
    updatedInputs[selectedInputIndex] = updatedInput;
    setInputs(updatedInputs);
  };

  // message that displays when export code is copied to clipboard
  const [toastActive, setToastActive] = useState(false);
  // will display another message in case of error
  const [toastContent, setToastContent] = useState("Copied!");
  const toggleToastActive = (active) => setToastActive(active);
  const toastMarkup = toastActive ? (
    <Toast
      onDismiss={toggleToastActive}
      content={toastContent}
      duration={2500}
    />
  ) : null;

  // preview panel
  // whenever input added, preview panel should scroll to it
  useEffect(() => {
    if (inputs.length)
      previewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  }, [inputs]);

  // selected panel
  // rerender whenever a new rendered input is clicked
  useEffect(() => {
    console.log(`index is ${selectedInputIndex}`);
    setSelectedInput(inputs[selectedInputIndex]);
  }, [selectedInputIndex, inputs]);

  //used after dnd
  const reorderInputs = (start, end) => {
    const result = [...inputs];
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);
    setInputs(result);
  };

  // handler for dnd
  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    reorderInputs(result.source.index, result.destination.index);
  };

  return (
    <AppProvider>
      <Frame>
        {toastMarkup}
        <ExportModal
          inputs={inputs}
          showOutput={showOutput}
          toggleModal={toggleModal}
          setToastActive={setToastActive}
          setToastContent={setToastContent}
        />
        <div className="grid">
          <h1 className="grid__header">dragquify</h1>
          <div className="app">
            <div className="app__selected">
              <SelectedPanel
                inputs={inputs}
                handleTextChange={handleTextChange}
                selectedInput={selectedInput}
                removeCurrentInput={removeCurrentInput}
              />
            </div>

            <div className="app__preview">
              <Card title="Preview">
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="preview-panel">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <PreviewPanel
                          inputs={inputs}
                          selectedInputIndex={selectedInputIndex}
                          previewRef={previewRef}
                          handleClick={handlePreviewClick}
                          handleInputChange={handleInputChange}
                        />
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </Card>
            </div>
            <div className="app__settings">
              <SettingsPanel
                addInput={addInput}
                toggleModal={toggleModal}
                clearInputs={clearInputs}
              />
            </div>
          </div>
        </div>
      </Frame>
    </AppProvider>
  );
}
