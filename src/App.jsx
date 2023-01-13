import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AddUser from './pages/AddUser/AddUser';
import UpdateUser from './pages/UpdateUser/UpdateUser';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
