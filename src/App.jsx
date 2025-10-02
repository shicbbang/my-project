import React from "react";
import Header from "./components/layout/Header.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">홈 대시보드</main>
    </div>
  );
}