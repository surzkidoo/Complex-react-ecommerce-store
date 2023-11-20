import React, { createContext, useState } from "react";

export const UIcontext = createContext();
export const Contextuiprovider = (props) => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState(false);
  const [cartsec, setCartsec] = useState(false);
  const [checkoutsec, setCheckoutSec] = useState(false);
  const [headerShow, setHeaderShow] = useState(true);
  const [footerShow, setFooterShow] = useState(true);
  const [categoryMenu, setCategoryMenu] = useState(false);
 let alertcomponents = []
  // const [alertcomponents,setAlertComponents] = useState([])

  let setAlertComponents = (newd)=>{
    return [...alertcomponents,newd]
  }
  return (
    <UIcontext.Provider
      value={{
        register,
        setRegister,
        login,
        setLogin,
        loader,
        setLoader,
        model,
        setModel,
        cartsec,
        setCartsec,
        checkoutsec,
        setCheckoutSec,
        headerShow,
        setHeaderShow,
        footerShow,
        setFooterShow,
        categoryMenu,
        setCategoryMenu,
        alertcomponents,
        setAlertComponents
      }}
    >
      {props.children}
    </UIcontext.Provider>
  );
};
