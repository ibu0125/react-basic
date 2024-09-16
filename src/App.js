import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Canvas from "./components/pages/AnimationPoints.js";
import Home from "./components/pages/Home.js";
import Header from "./components/pages/Header.js";
import MainContents from "./components/pages/MainContents.js";
import "./assets/styles/App.css";
import LocationWrapper from "./components/pages/LocationWrapper.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/pages/Form.js";
import Footer from "./components/pages/Footer.js";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/imges/pexels-jplenio-1632788.jpg"
  );

  // const [isScrollable, setIsScrollable] = useState(true);
  // const [showBackground, setShowBackground] = useState(true); // 背景画像の表示管
  const [showContent, setShowContent] = useState(true); // コンテンツの表示管理
  // const [showMainContents, setShowMainContents] = useState(false);
  const headerTitle = "OtterWave";
  // const recalculatePoints = useRef(null);

  const [contents, setContents] = useState({
    headLine: "Hello　World!",
    links: [
      {
        name: "View Projects",
        // image: "/imges/pexels-jplenio-1632788.jpg",
      },
      {
        name: "Contact Me",
        link: "form",
        // image: "/imges/pexels-wangming-photo-115695-354941.jpg",
      },
    ],
  });

  // const recalculateWindowSize = () => {
  //   const event = new Event("resize");
  //   window.dispatchEvent(event);
  // };

  // useEffect(() => {
  //   document.documentElement.style.overflowY = isScrollable ? "auto" : "hidden";
  //   return () => {
  //     document.documentElement.style.overflow = "hidden";
  //   };
  // }, [isScrollable]);

  // const handleLinkClickHidden = () => {
  //   setIsScrollable(false);
  // };

  // const handleLinkClickAuto = () => {
  //   setIsScrollable(true);
  //   // if (recalculatePoints.current) {
  //   //   recalculatePoints.current(); // キャンバスサイズを再計算
  //   // }
  // };

  // useEffect(() => {
  //   if (showMainContents) {
  //     recalculateWindowSize();
  //   }
  // }, [showMainContents]);
  const handleLinkClick = (newImageUrl, linkName) => {
    // setShowBackground(false); // 背景をフェードアウトさせる
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
          style: { backgroundcolor: "rgba(25,25,112,1)" },
        }));
        // handleLinkClickAuto();
        // setShowMainContents(true);
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
              link: "form",
            },
          ],
        }));
        // setShowMainContents(false);
        // handleLinkClickHidden();
      } else {
        // setShowMainContents(false);
        // handleLinkClickHidden();
      }
      // setShowBackground(true); // 新しい背景をフェードインさせる
      setShowContent(true); // コンテンツをフェードインさせる
    }, timeoutDuration); // トランジションの時間に合わせて設定
  };

  return (
    <div className="App">
      <Router>
        <Header
          title={headerTitle}
          menuItems={[
            { name: "Home", link: "/" },
            { name: "Profile", link: "/" },
            { name: "Skill", link: "/" },
            { name: "Works", link: "/" },
            { name: "Career", link: "/" },
            { name: "Contact", link: "/form" },
          ]}
          onLinkClick={(newImageUrl, linkName) =>
            handleLinkClick(newImageUrl, linkName)
          }
        />
        <LocationWrapper>
          <Routes>
            <Route
              path="/form"
              element={
                <>
                  <div className="form">
                    <Form />
                  </div>
                  <div className="background-wrapper">
                    <CSSTransition
                      // in={showBackground}
                      timeout={1200}
                      classNames="background"
                      unmountOnExit
                    >
                      <div
                        className="background"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                      />
                    </CSSTransition>
                    <Canvas style={{ height: "10px" }} />
                  </div>
                  <div className="footer-wrapper">
                    <Footer />
                  </div>
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Home
                    headLine={contents.headLine}
                    links={contents.links}
                    onLinkClick={(newImageUrl, linkName) =>
                      handleLinkClick(newImageUrl, linkName)
                    }
                  />
                  <CSSTransition
                    in={showContent}
                    timeout={1200}
                    classNames="content"
                    unmountOnExit
                  >
                    <MainContents links={contents.links} />
                  </CSSTransition>
                  <div className="background-wrapper">
                    <CSSTransition
                      // in={showBackground}
                      timeout={1200}
                      classNames="background"
                      unmountOnExit
                    >
                      <div
                        className="background"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                      />
                    </CSSTransition>
                    <Canvas />
                  </div>
                  <Footer
                    // title={headerTitle}
                    menuItems={[
                      { name: "Home", link: "/" },
                      { name: "Profile", link: "/" },
                      { name: "Skill", link: "/" },
                      { name: "Works", link: "/" },
                      { name: "Career", link: "/" },
                      { name: "Contact", link: "/form" },
                    ]}
                    onLinkClick={(newImageUrl, linkName) =>
                      handleLinkClick(newImageUrl, linkName)
                    }
                  />
                </>
              }
            />
          </Routes>
        </LocationWrapper>

        {/* <Home /> */}
      </Router>
    </div>
  );
}

export default App;
