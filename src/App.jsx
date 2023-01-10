import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<Home />} />
        <Route path="/update-user" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
