import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdominLogin() {
  const [userName, setUserName] = useState(""); // ユーザー名の state
  const [password, setPassword] = useState(""); // パスワードの state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォームデータの作成
    const loginData = {
      userName, // サーバー側のモデル名に合わせる
      password, // パスワードのキーもサーバーに合わせる
    };

    console.log("UserName:", userName); // 追加: ユーザー名を表示
    console.log("Password:", password); // 追加: パスワードを表示

    try {
      // APIリクエストの送信
      const response = await axios.post(
        "http://localhost:5165/api/Adomin/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // レスポンスの確認
      console.log("Response:", response);
      console.log("Response data:", response.data);

      if (response.data) {
        console.log("ログインに成功しました", response.data);
        navigate("/dashboard");
      } else {
        console.error("No data received.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password} // パスワードの値を設定
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default AdominLogin;
