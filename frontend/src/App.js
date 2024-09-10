import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/loginPage/loginPage";
import Home from "./components/homePage/home";
import CartPage from "./components/cartPage/cartPage";
import WishlistPage from "./components/wishlistPage/wishlistPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
