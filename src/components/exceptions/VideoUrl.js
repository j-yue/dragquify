import React, { useState } from "react";
import { ChoiceList } from "@shopify/polaris";

//when selected input is a video url
//render a checkbox for youtube and vimeo options
export default function VideoUrl({ accept, handleTextChange }) {
  const [videos, setVideos] = useState(accept);
  const handleChange = (e) => {
    setVideos(e);
    //update app state
    handleTextChange("accept", [...e]);
  };

  return (
    <ChoiceList
      allowMultiple
      title="accept"
      choices={[
        { label: "Vimeo", value: "vimeo" },
        { label: "Youtube", value: "youtube" },
      ]}
      selected={videos}
      onChange={handleChange}
    />
  );
}
