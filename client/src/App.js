import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { CartProvider } from "./hooks/UseReducer.js";
import MyOrder from "./components/MyOrder.jsx";
import "./App.css";

const App = () => {
  return (  
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
