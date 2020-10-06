import React from "react";
import "./App.css";

// Imports composants
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="app-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
