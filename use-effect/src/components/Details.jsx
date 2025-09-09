import React from "react";

function Details({ data }) {
  console.log(data);
  return (
    <div className="details">
      <img src={data.avatar} alt={data.name} />

      <div>
        <h2>{data.name}</h2>
      </div>
      <div>City: {data.details?.city}</div>
      <div>Company: {data.details?.company}</div>
      <div>Position: {data.details?.position}</div>
    </div>
  );
}

export default Details;
