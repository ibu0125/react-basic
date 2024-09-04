import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Home from "./pages/Home.js";
import Header from "./components/header.js";
import "./assets/styles/App.css";
// import backgroundImage1 from "./images/pexels-jplenio-1632788.jpg";
// import backgroundImage2 from "./images/pexels-wangming-photo-115695-354941.jpg";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/imges/pexels-jplenio-1632788.jpg"
  );
  const [showBackground, setShowBackground] = useState(true); // 背景画像の表示管理
  const [showContent, setShowContent] = useState(true); // コンテンツの表示管理
  const headerTitle = "OtterWave";

  const [contents, setContents] = useState({
    headLine: "hello world!",
    links: [
      {
        name: "View Projects",
        image: "/imges/pexels-jplenio-1632788.jpg",
      },
      {
        name: "Contact Me",
        image: "/imges/pexels-wangming-photo-115695-354941.jpg",
      },
    ],
  });

  const handleLinkClick = (newImageUrl) => {
    setShowBackground(false); // 背景をフェードアウトさせる
    setShowContent(false); // コンテンツをフェードアウト
    setTimeout(() => {
      setBackgroundImage(newImageUrl); // 背景画像のURLを更新
      setContents((prevContent) => ({
        ...prevContent,
        headLine:
          newImageUrl === "/imges/pexels-jplenio-1632788.jpg"
            ? "Welcome Back!"
            : "New Image!",
        links:
          newImageUrl === "/imges/pexels-jplenio-1632788.jpg"
            ? [
                {
                  name: "View Projects",
                  image: "/imges/pexels-jplenio-1632788.jpg",
                },
                {
                  name: "Contact Me",
                  image: "/imges/pexels-wangming-photo-115695-354941.jpg",
                },
              ]
            : [
                {
                  name: "New Projects",
                  image: "/imges/pexels-jplenio-1632788.jpg",
                },
                {
                  name: "New Contact",
                  image: "/images/pexels-new-contact.jpg",
                },
              ],
      }));
      setShowBackground(true); // 新しい背景をフェードインさせる
      setShowContent(true); // コンテンツをフェードインさせる
    }, 1200); // トランジションの時間に合わせて設定
  };

  return (
    <div className="App">
      <Header
        title={headerTitle}
        menuItems={["Home", "Project", "About", "Contact"]}
      />
      <Home
        headLine={contents.headLine}
        links={contents.links}
        onLinkClick={handleLinkClick}
      />
      <div className="background-wrapper">
        <CSSTransition
          in={showBackground}
          timeout={1200}
          classNames="background"
          unmountOnExit
        >
          <div
            className="background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </CSSTransition>
      </div>
      <CSSTransition
        in={showContent}
        timeout={1200}
        classNames="content"
        unmountOnExit
      >
        <div className="content">{/* コンテンツの内容をここに追加 */}</div>
      </CSSTransition>
    </div>
  );
}

export default App;
