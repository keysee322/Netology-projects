import React from "react";
import withHighlight from "./withHighlight";

const Article = ({ title, views }) => (
  <div className="item item-article">
    <h3>
      <a href="#">{title}</a>
    </h3>
    <p className="views">Прочтений: {views}</p>
  </div>
);

export default withHighlight(Article);
