import React from "react";
import { Icon, TextField } from "@shopify/polaris";
import { LinkMinor } from "@shopify/polaris-icons";
import "./Richtext.css";

const BoldIcon = `
  <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
    <path d="M11.054 16C13.49 16 15 14.678 15 12.566c0-1.589-1.139-2.778-2.689-2.903v-.066c1.21-.192 2.143-1.289 2.143-2.603C14.454 5.156 13.11 4 10.967 4H7a1 1 0 00-1 1v10a1 1 0 001 1h4.054zM8.388 5.871h1.962c1.115 0 1.755.549 1.755 1.514 0 1.014-.727 1.605-2 1.605H8.388V5.871zm0 8.258v-3.484h2.001c1.408 0 2.175.598 2.175 1.721 0 1.148-.743 1.763-2.119 1.763H8.388z"/>
  </svg>
`;

const ItalicIcon = `
  <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
  <path d="M8 5a1 1 0 011-1h4a1 1 0 110 2h-1.333l-1.334 8H11a1 1 0 110 2H7a1 1 0 110-2h1.333l1.334-8H9a1 1 0 01-1-1z"/>
  </svg>
`;

export default function Richtext({ value }) {
  return (
    <div className="richtext">
      <section className="richtext__menubar">
        <button className="richtext__bold-btn">
          <Icon source={BoldIcon} />
        </button>
        <button className="richtext__italic-btn">
          <Icon source={ItalicIcon} />
        </button>
        <button className="richtext__link-btn">
          <Icon source={LinkMinor} />
        </button>
      </section>
      <TextField value={value} multiline={3} />
    </div>
  );
}
