import React, { createContext, useState } from "react";
import auth from "../utils/Auth";

export const AuthenticationContext = createContext();
const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [fetched, setFetched] = useState(false);

  const login = (username, password) => {
    return auth.login(username, password).then((data) => {
      setUser(data.data);
    });
  };

  const logout = async () => {
    setUser(null);
    await auth.logout();
  };

  const getUser = async () => {
    const user = await auth.getUser();
    setUser(user ? user : null);
  };

  if (!fetched) {
    getUser().then(() => {
      setFetched(true);
    });
  }

  if (!fetched) {
    return <div>LOADING.......</div>;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        login,
        logout,
        getUser,
        setUser,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
export { AuthenticationContextProvider };
