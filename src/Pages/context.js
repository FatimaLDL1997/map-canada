import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isModalShow, setShowModal] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [display, setDisplay] = useState("none");

  const clickClose = () => {
    setIsClosed(true);
    setShowModal(false);
    setZIndex(0);
    // setDisplay("block");
  };
  const clickMap = (e) => {
    setIsClosed(false);
    setShowModal(true);
    setZIndex(-2);
    setDisplay("block");
  };

  return (
    <AppContext.Provider
      value={{
        isClosed,
        clickClose,
        clickMap,
        isModalShow,
        display,
        setDisplay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
