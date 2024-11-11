function Toolbar({ filters, selected, onSelectFilter }) {
  console.log(selected);

  return (
    <div className="toolbar">
      <button
        className={selected === "All" ? "btn btn-accent" : "btn btn-ghost"}
        key={-1}
        onClick={() => onSelectFilter("All")}
      >
        All
      </button>
      {filters.map((filter, index) => (
        <button
          className={selected === filter ? "btn btn-accent" : "btn btn-ghost"}
          key={index}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
