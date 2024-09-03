import React from "react";
import Home from "./pages/Home.js";
import Header from "./components/header.js";
import "./assets/styles/App.css";

function App() {
  const headerTitle = "OtterWave";
  const headLine = "hello world!";
  const links = ["View Projects", "Contact Me"];
  const menuItems = ["Home", "Project", "About", "Contact"];
  return (
    <div className="App">
      <Header title={headerTitle} menuItems={menuItems} />
      <Home headLine={headLine} links={links} />
    </div>
  );
}

export default App;
