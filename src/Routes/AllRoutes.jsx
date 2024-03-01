import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import SignIn from '../Pages/SignIn';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<SignIn />} />
    </Routes>
  );
}

export default AllRoutes;
