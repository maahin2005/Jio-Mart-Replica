import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import Home from '../Pages/Home';

import Products from '../Pages/Products';

import SingleProduct from '../Pages/SingleProduct';
import Cart from '../Pages/Cart';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="products/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default AllRoutes;
