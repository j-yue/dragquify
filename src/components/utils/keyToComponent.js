import Checkbox from "../exceptions/Checkbox";
import VideoUrl from "../exceptions/VideoUrl";
import Default from "../exceptions/Default";
import Options from "../exceptions/Options";

//map keys to their components
//used to render selected input in SelectedPanel
export const KEY_TO_COMPONENT = {
  checkbox: {
    default: Checkbox,
  },
  video_url: {
    accept: VideoUrl,
  },
  radio: {
    default: Default,
    options: Options,
  },
  select: {
    default: Default,
    options: Options,
  },
};
