import React from "react";
import { AppProvider, Card, Button, ButtonGroup } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import SettingsPanel from "./SettingsPanel";
import InputContainer from "./editor-ui/InputContainer";
import {
  FontPicker,
  ImagePicker,
  SelectSingle,
  SelectList,
} from "./editor-ui/ContainerInputs";

export default function App() {
  return (
    <AppProvider>
      <div className="grid">
        <h1 className="grid__header">dragquify</h1>
        <div className="app">
          <div className="app__selected">
            <Card title="Selected">
              <p>selected</p>
            </Card>
          </div>
          <div className="app__preview">
            <Card title="Preview">
              <SelectSingle label="Select Collection" />
              <SelectSingle label="Select Article" />
              <SelectSingle label="Select Product" />
              <SelectList label="Main Menu" />
              <SelectList label="Secondary Menu" />
              <SelectList label="Footer" />
              <ImagePicker />
              <FontPicker font="BIZ UDPGothic" style="bold" />
              {/* <ColorPicker color="#066465" label="Background Color" /> */}
            </Card>
          </div>
          <div className="app__settings">
            <SettingsPanel />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
