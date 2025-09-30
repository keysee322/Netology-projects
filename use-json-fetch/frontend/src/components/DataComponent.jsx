import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

const DataComponent = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>Data Component (Success)</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <p>Data received:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DataComponent;
