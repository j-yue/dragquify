/*
each input contains all possible attributes as listed on https://shopify.dev/docs/themes/settings#attributes-for-input-settings
"name" added to use to render buttons in SettingsPanel
*/

export const BASIC_INPUTS = [
  {
    name: "checkbox",
    type: "checkbox",
    id: "id",
    label: "Checkbox",
    default: "false",
    info: "info",
  },
  {
    name: "radio",
    type: "radio",
    id: "id",
    label: "Radio buttons",
    options: [
      { value: "one", label: "Radio one" },
      { value: "two", label: "Radio two" },
    ],
    default: "one",
    info: "text",
  },
  {
    name: "range",
    type: "range",
    id: "id",
    label: "Range",
    min: 0,
    max: 100,
    step: 10,
    unit: "text",
    default: 50,
  },
  {
    name: "select",
    type: "select",
    id: "",
    default: "default",
    info: "info",
    options: [
      { group: "group", value: "value", label: "label" },
      { group: "group", value: "value", label: "label" },
    ],
  },
  {
    name: "text",
    type: "text",
    id: "",
    label: "Text",
    info: "info",
    placeholder: "placeholder text",
  },
  {
    name: "textarea",
    type: "textarea",
    id: "",
    label: "Textarea",
  },
];

export const SPECIALIZED_INPUTS = [
  {
    name: "article",
    type: "article",
    label: "article",
    id: "",
    info: "article info",
  },
  {
    name: "blog",
    type: "blog",
    label: "blog",
    id: "",
    info: "blog info",
  },
  {
    name: "collection",
    type: "collection",
    label: "collection",
    id: "collection info",
  },
  {
    name: "color",
    type: "color",
    label: "color",
    id: "",
    default: "#000000",
    info: "color info",
  },
  {
    name: "font",
    type: "font_picker",
    label: "font",
    id: "",
    info: "font info",
    default: "helvetica_n4",
  },
  {
    name: "html",
    type: "html",
    label: "html",
    id: "",
    default: "<div><p>Some HTML content</p></div>",
  },
  {
    name: "image",
    type: "image_picker",
    label: "image",
    id: "",
  },
  {
    name: "link list",
    type: "link_list",
    label: "link list",
    id: "",
    info: "link list info",
  },
  {
    name: "page",
    type: "page",
    label: "page",
    id: "",
    info: "page info",
  },
  {
    name: "product",
    type: "product",
    label: "product",
    id: "",
    info: "product info",
  },
  {
    name: "richtext",
    type: "richtext",
    label: "richtext",
    id: "",
    info: "richtext info",
    default:
      '<p>Default <em>richtext</em> <a href="https://example.com/">content</a></p',
  },
  {
    name: "url",
    type: "url",
    label: "url",
    id: "",
    info: "url info",
  },

  {
    name: "video url",
    type: "video_url",
    label: "Video URL",
    id: "",
    accept: ["youtube", "vimeo"],
    default: "https://www.youtube.com/watch?v=_9VUPq3SxOc",
    info: "text",
    placeholder: "text",
  },
];

export const SIDEBAR_SETTINGS = [
  {
    name: "header",
    type: "header",
    content: "content",
    info: "info",
  },
  { name: "paragraph", type: "paragraph", content: "content" },
];
