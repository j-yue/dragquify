import React, { useState } from "react";
import { Checkbox, Stack } from "@shopify/polaris";

//when selected input is a video url
//render a checkbox for youtube and vimeo options
export default function VideoUrl({ accept, handleTextChange }) {
  const [videos, setVideos] = useState(accept);

  const handleChange = (e, source) => {
    //adding source
    if (e) setVideos([...videos, source]);
    //remove source
    if (!e) setVideos(videos.filter((i) => i !== source));
    //update app state
    handleTextChange("accept", videos);
  };

  return (
    <Stack>
      <Checkbox
        label="Youtube"
        checked={videos.includes("youtube")}
        onChange={(e) => handleChange(e, "youtube")}
      />
      <Checkbox
        label="Vimeo"
        checked={videos.includes("vimeo")}
        onChange={(e) => handleChange(e, "vimeo")}
      />
    </Stack>
  );
}
