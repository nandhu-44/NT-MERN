import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Center from "./components/Center";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col" id="main-div">
      <Header />
      <Hero />
      <Center />
      <Footer />
    </div>
  );
}

export default App;
