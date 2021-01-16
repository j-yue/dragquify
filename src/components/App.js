import React from "react";
import { AppProvider, Card } from "@shopify/polaris";

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
            </Card>
          </div>
          <div className="app__settings">
            <Card title="Settings">
              <p>Settings</p>
            </Card>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
