import { useState } from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";

function Portfolio({ items }) {
  const [view, setView] = useState("view_module");
  function onSwitch(view) {
    console.log(view);
    view === "view_module" ? setView("view_list") : setView("view_module");
    console.log(view);
  }
  // const currentProd =
  //   curFilter === "All"
  //     ? items
  //     : items.filter((item) => item.category === curFilter);
  return (
    <>
      <IconSwitch icon={view} onSwitch={onSwitch} />
      {view === "view_module" ? (
        <ListView items={items} />
      ) : (
        <CardsView cards={items} />
      )}
    </>
  );
}

export default Portfolio;
