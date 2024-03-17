import { createContext, useEffect, useState } from "react";
import supabaseClient from "./database/supabase";

const UserContext = createContext();

const getUser = async () => {
  return await supabaseClient.auth.getUser();
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (user) return;
    getUser().then((user) => {
      if (user.data.user) {
        setUser(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, [user]);

  const login = async (email, password) => {
    // eslint-disable-next-line
    const { _data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
    } else {
      await getUser().then((user) => {
        if (user.data.user) {
          setUser(user);
        } else {
          setIsAuth(false);
        }
      });
      setIsAuth(true);
    }
  };

  const logout = async () => {
    await supabaseClient.auth.signOut();
    setUser(null);
    setIsAuth(false);
  }

  return (
    <UserContext.Provider value={{ user, isAuth, login, logout, setUser, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, AuthProvider };