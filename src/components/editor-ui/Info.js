import React from "react";
import { Link, TextStyle } from "@shopify/polaris";

//to be used to render info property and paragraph input
export default function Info({ text }) {
  //check if text contains external link
  const linkRegex = /\[.*?\]\(.*?\)/g; // [Learn more](link)

  //used to create link component
  const wordRegex = /\[.*?\]/g; // [Learn more]
  const urlRegex = /\(.*?\)/g; // (link)

  //if length = 0, there are no links to be rendered so output text normally
  const matches = text.match(linkRegex);

  // matches.length > 0
  const renderWithLinks = () => {
    const splitText = text.split(linkRegex);
    let linkIndex = 0;
    return splitText.map((str, index) => {
      if (str === "") {
        const current = matches[linkIndex];
        let [word, url] = [current.match(wordRegex), current.match(urlRegex)];
        [word, url] = [
          word[0].replace("(", "").replace(")", ""),
          url[0].replace("[", "").replace("]", ""),
        ];
        return (
          <Link url={url} external key={index}>
            {word}
          </Link>
        );
      } else
        return (
          <TextStyle variation="subdued" key={index}>
            {str}
          </TextStyle>
        );
    });
  };

  return (
    <div className="preview__info">
      <TextStyle variation="subdued">
        {!matches && text}
        {matches && renderWithLinks()}
      </TextStyle>
    </div>
  );
}
