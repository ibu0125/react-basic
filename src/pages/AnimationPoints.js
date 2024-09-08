import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const intervalRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 初期化とアニメーションループの設定
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = document.documentElement.scrollHeight;
    const interval = 1000 / 60; // 60 FPS

    // キャンバスの幅と高さを設定
    canvas.width = width;
    canvas.height = height;

    // 点の初期化
    const initPoints = () => {
      points.current = [];
      for (let i = 0; i < 220; i++) {
        points.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 2, // スピードを調整
          dy: (Math.random() - 0.5) * 2, // スピードを調整
          originalDx: 0,
          originalDy: 0,
        });
      }
    };

    // アニメーションの描画
    const update = () => {
      ctx.clearRect(0, 0, width, height);

      // 線の描画
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 0.3;
      ctx.beginPath();
      for (let i = 0; i < points.current.length; i++) {
        const point1 = points.current[i];
        for (let j = i + 1; j < points.current.length; j++) {
          const point2 = points.current[j];
          const distance = Math.sqrt(
            (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2
          );
          if (distance < 150) {
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
          }
        }
      }
      ctx.stroke();

      // 点の描画
      points.current.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        // 境界での反射
        if (point.x < 0 || point.x > width) point.dx *= -1;
        if (point.y < 0 || point.y > height) point.dy *= -1;

        // 点の描画
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155,255,255,1)";
        ctx.fill();
      });
    };

    initPoints();
    intervalRef.current = setInterval(update, interval);

    // クリーンアップ
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;

      canvas.width = width;
      canvas.height = height;

      // キャンバスサイズが変わったら点の位置を再設定
      points.current.forEach((point) => {
        point.x = Math.random() * width;
        point.y = Math.random() * height;
      });
    };

    window.addEventListener("resize", handleResize);

    // 初期サイズ設定
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // マウス位置に基づいて点の動きを調整
  useEffect(() => {
    const adjustPointsBasedOnMouse = () => {
      if (!points.current) return;

      points.current.forEach((point) => {
        const distanceX = mousePosition.x - point.x;
        const distanceY = mousePosition.y - point.y;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        if (!point.originalDx && !point.originalDy) {
          point.originalDx = point.dx;
          point.originalDy = point.dy;
        }

        // 点がマウスに近い場合、速度を変更
        if (distance < 120) {
          const angle = Math.atan2(distanceY, distanceX);

          // 速度を調整
          point.dx -= Math.cos(angle) * 0.3;
          point.dy -= Math.sin(angle) * 0.3;
        } else if (distance > 120) {
          // 点がマウスから離れた場合、速度を元に戻す
          point.dx = point.originalDx;
          point.dy = point.originalDy;

          // 元の速度がランダムで再設定されることを防ぐ
          point.originalDx = 0;
          point.originalDy = 0;
        }
      });
    };

    adjustPointsBasedOnMouse();
  }, [mousePosition]);

  // マウスの動きを監視
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default Canvas;
