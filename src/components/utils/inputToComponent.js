// import { RangeSlider } from "@shopify/polaris";
import { FontPicker, ImagePicker, ListInput } from "../editor-ui/listInputs";
import TextField from "../editor-ui/TextField";
import ColorPicker from "../editor-ui/ColorPicker";
import Select from "../editor-ui/Select";
import Paragraph from "../editor-ui/Paragraph";
import Header from "../editor-ui/Header";
import Url from "../editor-ui/Url";
import VideoUrl from "../editor-ui/VideoUrl";
import Checkbox from "../editor-ui/Checkbox";
import Radio from "../editor-ui/Radio";
import Richtext from "../editor-ui/Richtext";

// map inputs to their components
export const INPUT_TO_COMPONENT = {
  header: Header,
  paragraph: Paragraph,
  checkbox: Checkbox,
  radio: Radio,
  // range: RangeSlider,
  select: Select,
  text: TextField,
  textarea: TextField,
  html: TextField,
  richtext: Richtext,
  color: ColorPicker,
  font_picker: FontPicker,
  image_picker: ImagePicker,
  collection: ListInput,
  blog: ListInput,
  article: ListInput,
  product: ListInput,
  page: ListInput,
  link_list: ListInput,
  url: Url,
  video_url: VideoUrl,
};
