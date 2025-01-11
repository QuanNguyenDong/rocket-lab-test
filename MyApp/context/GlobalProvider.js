import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const value = {
    isLogged,
    user,
    setIsLogged,
    setUser,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalProvider };
