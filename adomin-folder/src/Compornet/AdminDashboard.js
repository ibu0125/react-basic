import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "./ContactList";
import AdominLogin from "./AdominLogin"; // 修正した名前

function AdminDashboard() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <h2>ログイン</h2> {/* 日本語に変更 */}
              <AdominLogin />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <h1>管理ダッシュボード</h1>
              <ContactList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
