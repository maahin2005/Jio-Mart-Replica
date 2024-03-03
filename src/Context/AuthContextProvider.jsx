import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const [singleProduct, setSingleProduct] = useState({});

  const [productRow, setProductRow] = useState([]);

  let data = JSON.parse(localStorage.getItem('cart')) || [];

  const [length, setLength] = useState(data.length);

  const LoginProvider = () => {
    setIsAuth(true);
  };

  useEffect(() => {
    console.log(isAuth, 'Auth');
  }, [isAuth]);

  const LogOutProvider = () => {
    setIsAuth(false);
  };

  const contextObj = {
    isAuth,
    setIsAuth,
    LoginProvider,
    LogOutProvider,
    singleProduct,
    setSingleProduct,
    productRow,
    setProductRow,
    length,
    setLength,
  };

  return (
    <AuthContext.Provider value={contextObj}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
