import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      setIsAuth(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const login = async (email, password) => {
    const response = await axios.post(`${backendURL}/api/users/login`, {
      email,
      password,
    });

    const data = response.data;
    if (data.status === 200) {
      setIsAuth(true);
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  const register = async (name, email, password) => {
    const response = await axios.post(`${backendURL}/api/users/register`, {
      name,
      email,
      password,
    });
    const data = response.data;
    if (data.status === 201) {
      setIsAuth(true);
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    sessionStorage.removeItem("user");
  };

  // Todo Handling

  const addTodo = async (userId, title, description) => {
    const response = await axios.post(`${backendURL}/api/todos/addTodo`, {
      userId,
      title,
      description,
    });
    const data = response.data;
    if (data.status === 201) {
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  const editTodo = async (userId, todoId, title, description, isCompleted) => {
    const response = await axios.put(`${backendURL}/api/todos/editTodo`, {
      userId,
      todoId,
      title,
      description,
      isCompleted,
    });
    const data = response.data;
    if (data.status === 200) {
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  const deleteTodo = async (userId, todoId) => {
    console.log("Deleting todo", userId, todoId);
    const response = await axios.delete(`${backendURL}/api/todos/deleteTodo`, {
      data: {
        userId,
        todoId,
      },
    });
    const data = response.data;
    if (data.status === 200) {
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  const clearCompletedTodos = async (userId) => {
    const response = await axios.delete(`${backendURL}/api/todos/clearCompletedTodos`, {
      data: {
        userId,
      },
    });
    const data = response.data;
    if (data.status === 200) {
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  };

  return (
    <UserContext.Provider
      value={{ login, register, logout, isAuth, user, setIsAuth, setUser, addTodo, editTodo, deleteTodo, clearCompletedTodos }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
