import React from "react";
import DataComponent from "./components/DataComponent";
import ErrorComponent from "./components/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useJsonFetch Demo</h1>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
};

export default App;
