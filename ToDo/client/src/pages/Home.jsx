import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Header from "../components/Header";
import CreateTodo from "../components/CreateTodo";
import ToDos from "../components/ToDos";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <CreateTodo />
      <ToDos />
    </>
  );
};

export default Home;
