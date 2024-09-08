import React, { useEffect, useRef } from "react";
import "./AnimatedTextSide.css"; // 先ほどのCSSをインポート

const AnimatedText = ({ text }) => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const currentRef = textContainerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={textContainerRef} className="text-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="animated-text"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
