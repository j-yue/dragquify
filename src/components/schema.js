/*
each input contains all possible attributes as listed on https://shopify.dev/docs/themes/settings#attributes-for-input-settings
"name" added to use to render buttons in SettingsPanel
*/

export const BASIC_INPUTS = [
  {
    name: "checkbox",
    type: "checkbox",
    id: "",
    label: "Show dynamic checkout button",
    default: "false",
    info:
      "Each customer will see their preferred payment method from those available on your store, such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/using-themes/change-the-layout/dynamic-checkout)",
  },
  {
    name: "radio",
    type: "radio",
    id: "",
    label: "Logo alignment",
    options: [
      { value: "left", label: "Left" },
      { value: "centered", label: "Centered" },
    ],
    default: "left",
    info: "Logo aligns relative to banner",
  },
  {
    name: "range",
    type: "range",
    id: "",
    label: "Font Size",
    min: 12,
    max: 18,
    step: 1,
    unit: "px",
    default: 14,
    info: "Changes font size for body text",
  },
  {
    name: "select",
    type: "select",
    id: "",
    label: "Text alignment",
    default: "left",
    info: "Text alignment for product descriptions",
    options: [
      { value: "left", label: "left" },
      { value: "right", label: "right" },
      { value: "center", label: "center" },
      { value: "justify", label: "justify" },
    ],
  },
  {
    name: "text",
    type: "text",
    id: "",
    label: "Page title",
    info: "Page title info",
    placeholder: "Page Title",
    default: "About",
  },
  {
    name: "textarea",
    type: "textarea",
    id: "",
    label: "Welcome message",
    placeholder: "Welcome to my shop!",
    default: "",
    info: "Give a message to visitors",
  },
];

export const SPECIALIZED_INPUTS = [
  {
    name: "article",
    type: "article",
    label: "Article to feature on home page",
    id: "",
    info: "",
  },
  {
    name: "blog",
    type: "blog",
    label: "Blog for sidebar",
    id: "",
    info: "",
  },
  {
    name: "collection",
    type: "collection",
    label: "Featured collection",
    id: "",
    info: "",
  },
  {
    name: "color",
    type: "color",
    label: "Background color",
    id: "",
    default: "#000000",
    info: "",
  },
  {
    name: "font",
    type: "font_picker",
    label: "Header font",
    id: "",
    info: "",
    default: "helvetica_n4",
  },
  {
    name: "html",
    type: "html",
    label: "Custom HTML",
    id: "",
    default: "<div><p>Some HTML content</p></div>",
    info: "Custom HTML will be displayed below announcement",
  },
  {
    name: "image",
    type: "image_picker",
    label: "Banner",
    id: "",
    info: "",
  },
  {
    name: "link list",
    type: "link_list",
    label: "Main navigation",
    id: "",
    info: "Links will appear in header",
  },
  {
    name: "page",
    type: "page",
    label: "Home page",
    id: "",
    info: "",
  },
  {
    name: "product",
    type: "product",
    label: "Featured product",
    id: "",
    info: "Product will appear in the carousel",
  },
  {
    name: "richtext",
    type: "richtext",
    label: "Welcome message",
    id: "",
    info: "",
    default:
      '<p>Default <em>richtext</em> <a href="https://example.com/">content</a></p',
  },
  {
    name: "url",
    type: "url",
    label: "FAQs",
    id: "",
    info: "",
  },

  {
    name: "video url",
    type: "video_url",
    label: "Product video",
    id: "",
    accept: ["youtube", "vimeo"],
    default: "https://www.youtube.com/watch?v=_9VUPq3SxOc",
    info: "",
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
