import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Home from "./pages/Home.js";
import Header from "./components/header.js";
import "./assets/styles/App.css";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/imges/pexels-jplenio-1632788.jpg"
  );
  const [show, setShow] = useState(true);
  const headerTitle = "OtterWave";
  const headLine = "hello world!";
  const menuItems = ["Home", "Project", "About", "Contact"];

  const handleLinkClick = (newImageUrl) => {
    setShow(false); // 背景をフェードアウトさせる
    setTimeout(() => {
      setBackgroundImage(newImageUrl); // 背景画像のURLを更新
      setShow(true); // 新しい背景をフェードインさせる
    }, 400); // トランジションの時間に合わせて設定
  };

  const links = [
    {
      name: "View Projects",
      image: "/imges/pexels-jplenio-1632788.jpg",
    },
    {
      name: "Contact Me",
      image: "/imges/pexels-wangming-photo-115695-354941.jpg",
    },
  ];

  return (
    <div className="App">
      <Header title={headerTitle} menuItems={menuItems} />
      <Home headLine={headLine} links={links} onLinkClick={handleLinkClick} />
      <CSSTransition
        in={show}
        timeout={800}
        classNames="background"
        unmountOnExit
      >
        <div
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})` }} // 'url()' を使って画像のURLを設定
        />
      </CSSTransition>
    </div>
  );
}

export default App;
