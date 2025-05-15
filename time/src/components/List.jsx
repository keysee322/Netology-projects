import React from "react";
import Video from "./Video";
import Article from "./Article";

const List = ({ list }) => {
  return list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <Video key={index} {...item} />;
      case "article":
        return <Article key={index} {...item} />;
      default:
        return null;
    }
  });
};

export default List;
