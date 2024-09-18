import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Canvas from "./components/pages/AnimationPoints.js";
import Home from "./components/pages/Home.js";
import Header from "./components/pages/Header.js";
import MainContents from "./components/pages/MainContents.js";
import "./assets/styles/App.css";
import Form from "./components/pages/Form.js";
import Footer from "./components/pages/Footer.js";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/imges/pexels-jplenio-1632788.jpg"
  );

  const [isActive, setIsActive] = useState(false);

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

    setShowContent(false);

    setTimeout(() => {
      if (linkName === "Contact") {
        setIsActive(true); // 背景を暗くする
      } else {
        setIsActive(false); // 他のリンクでは背景を元に戻す
      }
      setShowContent(true);
    }, 0);
  };

  return (
    <div className="App">
      <div className={isActive ? "active-all-container" : "all-container"}>
        <Form setActive={setIsActive} />
      </div>

      <Header
        setActive={setIsActive}
        className={isActive ? "active-header" : null}
        title={headerTitle}
        menuItems={[
          { name: "Home", link: "/", title: "hello-world" },
          { name: "Profile", link: "/", title: "my-profile" },
          { name: "Skill", link: "/", title: "my-skill-set" },
          { name: "Works", link: "/", title: "my-works" },
          { name: "Career", link: "/", title: "my-career" },
          { name: "Contact", link: "/form", title: "form" },
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
          { name: "Home", title: "hello-world", link: "/" },
          { name: "Profile", title: "my-profile", link: "/" },
          { name: "Skill", title: "my-skill-set", link: "/" },
          { name: "Works", title: "my-works", link: "/" },
          { name: "Career", title: "my-career", link: "/" },
          { name: "Contact", title: "form", link: "/form" },
        ]}
        onLinkClick={(newImageUrl, linkName) =>
          handleLinkClick(newImageUrl, linkName)
        }
      />
    </div>
  );
}

export default App;
