import React from "react";
import AnimatedTextSide from "./AnimatedTextSide.js";
import AnimatedDivBottom from "./AnimatedDivBottom.js";
import "./MainContents.css";

// カードデータの配列を定義
const cardData = [
  {
    id: 1,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  {
    id: 2,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  {
    id: 3,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  {
    id: 4,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  {
    id: 5,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  {
    id: 6,
    title: "Image cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    url: "http://www.w3.org/2000/svg",
  },
  // 必要なだけカードデータを追加
];

function MainContents() {
  return (
    <div className="content">
      <div className="head-line">
        <AnimatedTextSide text={"My Works"} />
      </div>
      <div className="main-contents-wrapper">
        {cardData.map((card) => (
          <AnimatedDivBottom key={card.id}>
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="card-img-top"
                alt="..."
              >
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="#dee2e6"
                  dy=".3em"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {card.title}
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </AnimatedDivBottom>
        ))}
      </div>
    </div>
  );
}

export default MainContents;
