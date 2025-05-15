import React from "react";
import withHighlight from "./withHighlight";

const Video = ({ url, views }) => (
  <div className="item item-video">
    <iframe
      src={url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    ></iframe>
    <p className="views">Просмотров: {views}</p>
  </div>
);

export default withHighlight(Video);
