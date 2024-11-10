import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectsList from "./ProjectsList";

function Portfolio({ items }) {
  const filters = [...new Set(items.map((item) => item.category))];
  const [curFilter, setCurFilter] = useState("All");
  function onSelectFilter(curFilter) {
    setCurFilter(curFilter);
  }
  const currentProd =
    curFilter === "All"
      ? items
      : items.filter((item) => item.category === curFilter);
  return (
    <>
      <Toolbar
        filters={filters}
        selected={curFilter}
        onSelectFilter={onSelectFilter}
      />
      <ProjectsList items={currentProd} />
    </>
  );
}

export default Portfolio;
