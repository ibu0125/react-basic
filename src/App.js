import React from "react";
import Header from "./components/header.js";
import "./assets/styles/App.css";

function App() {
  const headerTitle = "My Dynamic Website Title";
  const menuItems = ["Home", "About", "Contact", "Blog"];
  return (
    <div className="App">
      <Header title={headerTitle} menuItems={menuItems} />
      {}
    </div>
  );
}

export default App;
