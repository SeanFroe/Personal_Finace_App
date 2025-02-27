import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import BackendDataComponent from "./components/BackendDataComponent";

function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto"> Budgets</h1>
        <BackendDataComponent />
      </Stack>
    </Container>
  );
}

export default App;
