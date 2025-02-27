import React from "react";
import { useState, useEffect } from "react";

function BackendDataComponent() {
  const [backendData, setBackendData] = useState(null); // Start as null
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.table(data); // Log fetched data
        setBackendData(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!backendData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {backendData.users ? (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default BackendDataComponent;
