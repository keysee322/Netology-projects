import React from "react";

function List({ data, setCurrent, current }) {
  console.log(current);

  return (
    <div className="list">
      {data?.map((item, index) => (
        <button
          onClick={() => {
            setCurrent(item.id);
          }}
          className={`list-button ${current === item.id ? "current" : ""}`}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default List;
