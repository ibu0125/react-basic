import React from "react";
import { Route, Routes } from "react-router-dom";
import AdominLogin from "./Compornet/AdominLogin"; // スペルを確認して修正
import AdminDashboard from "./Compornet/AdminDashboard"; // スペルを確認して修正

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AdominLogin />} />
      <Route path="/dashboard/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
