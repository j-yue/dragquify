import React from "react";
import { AppProvider, Card } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import SettingsPanel from "./SettingsPanel";
import ColorPicker from "./editor-ui/ColorPicker";

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
              <p>preview</p>
              <ColorPicker color="#066465" label="Background Color" />
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
