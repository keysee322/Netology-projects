import React from "react";
import Video from "./Video";

const VideoList = ({ list }) => {
  return list.map((item, index) => (
    <Video key={index} url={item.url} date={item.date} />
  ));
};

export default VideoList;
