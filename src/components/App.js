import React from "react";
import { AppProvider, Card } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import SettingsPanel from "./SettingsPanel";

import { ListInput, FontPicker, ImagePicker } from "./editor-ui/listInputs";
import Richtext from "./editor-ui/Richtext";
import VideoUrl from "./editor-ui/VideoUrl";
import Url from "./editor-ui/Url";
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
              <Url value="crochetboss.com" />
              <VideoUrl value="https://www.youtube.com/watch?v=_9VUPq3SxOc" />
              <Richtext value="123 somewhere place, 91210" />
              <ListInput label="Select collection" />
              <ListInput label="Select article" />
              <ListInput label="Select product" />
              <ListInput label="Select blog" />
              <ListInput label="Select page" />
              <ListInput label="Select menu" />
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
