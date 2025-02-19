import React, { useEffect, useState } from "react";
import BackendDataComponent from "./components/fetch";

function App() {
  return (
    <div>
      <h1> Users List</h1>
      <BackendDataComponent />
    </div>
  );
}

export default App;
