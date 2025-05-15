import React from "react";
import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

const PrettyDateTime = DateTimePretty(DateTime);

const Video = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
      <PrettyDateTime date={date} />
    </div>
  );
};

export default Video;
