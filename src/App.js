import React from "react";
import "./App.css";

// Imports composants principaux
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="app-container">
        <Form />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
