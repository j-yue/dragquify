import React from "react";
import { AppProvider, Card } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import SettingsPanel from "./SettingsPanel";

import { ListInput, FontPicker, ImagePicker } from "./editor-ui/listInputs";
import Richtext from "./editor-ui/Richtext";
import VideoUrl from "./editor-ui/VideoUrl";
import Url from "./editor-ui/Url";
import Header from "./editor-ui/Header";
import Paragraph from "./editor-ui/Paragraph";

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
              <Header name="Body Styles" info="" />
              <Header name="Body Styles" info="everthing" />
              <Header name="Body Styles" info="everthing" />
              <Header name="Body Styles" info="everthing" />
              <Paragraph text="All of your collections are listed by default. To customize your list, choose 'Selected' and add collections." />
              <Paragraph text="All of your collections are listed by default. To customize your list, choose 'Selected' and add collections." />
              <Paragraph text="All of your collections are listed by default. To customize your list, choose 'Selected' and add collections." />
              <Paragraph text="All of your collections are listed by default. To customize your list, choose 'Selected' and add collections." />

              <Header name="Body Styles" info="everthing" />
              <Header name="Body Styles" info="everthing" />
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
