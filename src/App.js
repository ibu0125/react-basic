import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Canvas from "./pages/AnimationPoints.js";
import Home from "./pages/Home.js";
import Header from "./components/header.js";
import MainContents from "./pages/MainContents.js";
import "./assets/styles/App.css";
// import backgroundImage1 from "./images/pexels-jplenio-1632788.jpg";
// import backgroundImage2 from "./images/pexels-wangming-photo-115695-354941.jpg";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/imges/pexels-jplenio-1632788.jpg"
  );

  const [isScrollable, setIsScrollable] = useState(false);
  const [showBackground, setShowBackground] = useState(true); // 背景画像の表示管理
  const [showContent, setShowContent] = useState(true); // コンテンツの表示管理
  const [showMainContents, setShowMainContents] = useState(false);
  const headerTitle = "OtterWave";
  // const recalculatePoints = useRef(null);

  const [contents, setContents] = useState({
    headLine: "hello world!",
    links: [
      {
        name: "View Projects",
        // image: "/imges/pexels-jplenio-1632788.jpg",
      },
      {
        name: "Contact Me",
        image: "/imges/pexels-wangming-photo-115695-354941.jpg",
      },
    ],
  });

  // const recalculateWindowSize = () => {
  //   const event = new Event("resize");
  //   window.dispatchEvent(event);
  // };

  useEffect(() => {
    document.documentElement.style.overflowY = isScrollable
      ? "scroll"
      : "hidden";
    return () => {
      document.documentElement.style.overflow = "hidden";
    };
  }, [isScrollable]);

  const handleLinkClickHidden = () => {
    setIsScrollable(false);
  };

  const handleLinkClickAuto = () => {
    setIsScrollable(true);
    // if (recalculatePoints.current) {
    //   recalculatePoints.current(); // キャンバスサイズを再計算
    // }
  };

  // useEffect(() => {
  //   if (showMainContents) {
  //     recalculateWindowSize();
  //   }
  // }, [showMainContents]);
  const handleLinkClick = (newImageUrl, linkName) => {
    setShowBackground(false); // 背景をフェードアウトさせる
    setShowContent(false); // コンテンツをフェードアウト
    // setIsScrollable(true);
    const timeoutDuration = linkName === "Home" ? 0 : 1200;

    setTimeout(() => {
      setBackgroundImage(newImageUrl); // 背景画像のURLを更新

      console.log(linkName);
      if (linkName === "View Projects") {
        setContents((prevContent) => ({
          ...prevContent,
          headLine: "My Works",
          links: [],
          style: { backgroundcolor: "black" },
        }));
        handleLinkClickAuto();
        setShowMainContents(true);
        // recalculateWindowSize();
      } else if (linkName === "Home") {
        setContents((prevContent) => ({
          ...prevContent,
          headLine: "hello world!",
          links: [
            {
              name: "View Projects",
              // image: "/imges/pexels-jplenio-1632788.jpg",
            },
            {
              name: "Contact Me",
              image: "/imges/pexels-wangming-photo-115695-354941.jpg",
            },
          ],
        }));
        setShowMainContents(false);
        handleLinkClickHidden();
      } else {
        setShowMainContents(false);
        handleLinkClickHidden();
      }
      setShowBackground(true); // 新しい背景をフェードインさせる
      setShowContent(true); // コンテンツをフェードインさせる
    }, timeoutDuration); // トランジションの時間に合わせて設定
  };

  return (
    <div className="App">
      <Header
        title={headerTitle}
        menuItems={[
          { name: "Home", image: "/imges/pexels-jplenio-1632788.jpg" },
          { name: "Project", image: "/path/to/project-image.jpg" },
          { name: "About", image: "/path/to/about-image.jpg" },
          { name: "Contact", image: "/path/to/contact-image.jpg" },
        ]}
        onLinkClick={(newImageUrl, linkName) =>
          handleLinkClick(newImageUrl, linkName)
        }
      />

      <Home
        headLine={contents.headLine}
        links={contents.links}
        onLinkClick={(newImageUrl, linkName) =>
          handleLinkClick(newImageUrl, linkName)
        }
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
        <Canvas />{" "}
      </div>
      <CSSTransition
        in={showContent}
        timeout={1200}
        classNames="content"
        unmountOnExit
      >
        <div className="content">
          {" "}
          {showMainContents && <MainContents links={contents.links} />}
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
