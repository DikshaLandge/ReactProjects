import { createContext, useContext, useEffect } from "react";
import App from "../App";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
