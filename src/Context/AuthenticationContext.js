import React, { createContext, useState, useEffect } from "react";
import auth from "../utils/Auth";

export const AuthenticationContext = createContext();
const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [fetched, setFetched] = useState(false);

  const login = (username, password) => {
    return auth.login(username, password).then((data) => {
      setUser(data.data.data);
      return Promise.resolve(data);
    });
  };

  const logout = async () => {
    setUser(null);
    await auth.logout();
  };

  useEffect(() => {
    let cancelled = false;
    const getUser = async () => {
      const user = await auth.getUser();
      //console.log("Auth Context", user);
      setUser(user ? user : null);
    };
    getUser().then(() => {
      if (!cancelled) {
        setFetched(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!fetched) {
    return <div>LOADING.......</div>;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        login,
        logout,
        setUser,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
export { AuthenticationContextProvider };
