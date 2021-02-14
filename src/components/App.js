import React, { useState, useEffect } from "react";
import { AppProvider, Card } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import SettingsPanel from "./SettingsPanel";
import PreviewPanel from "./PreviewPanel";
import SelectedPanel from "./SelectedPanel";

export default function App() {
  // inputs added from SettingsPanel
  const [inputs, setInputs] = useState([]);

  // index of input selected from PreviewPanel
  const [selectedInput, setSelectedInput] = useState(null);

  // input selected from PreviewPanel
  const [selectedInputIndex, setSelectedInputIndex] = useState(0);

  // ref for PreviewPanel
  const previewRef = React.createRef();

  const handleInputChange = (inputs) => setInputs(inputs);

  // onClick handler for SettingsPanel
  const addInput = (input) => handleInputChange([...inputs, input]);

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

  return (
    <AppProvider>
      <div className="grid">
        <h1 className="grid__header">dragquify</h1>
        <div className="app">
          <div className="app__selected">
            <SelectedPanel
              handleTextChange={handleTextChange}
              selectedInput={selectedInput}
              removeCurrentInput={removeCurrentInput}
            />
          </div>

          <div className="app__preview">
            <Card title="Preview">
              <PreviewPanel
                inputs={inputs}
                previewRef={previewRef}
                handleClick={handlePreviewClick}
                handleInputChange={handleInputChange}
              />
            </Card>
          </div>
          <div className="app__settings">
            <SettingsPanel addInput={addInput} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
