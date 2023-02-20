import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isModalShow, setShowModal] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  const clickClose = () => {
    setIsClosed(true);
    setShowModal(false);
    setZIndex(0);
  };
  const clickMap = (e) => {
    setIsClosed(false);
    setShowModal(true);
    setZIndex(-2);
  };

  return (
    <AppContext.Provider
      value={{
        isClosed,
        clickClose,
        clickMap,
        isModalShow,
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
