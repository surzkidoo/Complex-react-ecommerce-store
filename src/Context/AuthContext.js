import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
