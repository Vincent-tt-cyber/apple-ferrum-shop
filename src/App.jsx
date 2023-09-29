import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<div>Страница не найдена.</div>} />
        </Routes>
      </div>
      <footer className="footer">
        <div className="container">
          Copyright &#9426; 2023 Created for <span>Apple</span> Ferrum. All
          Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default App;
