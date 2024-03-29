import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Display from "./pages/Display";
import AllMovies from "./pages/AllMovies";
import ForgotPassword from "./pages/ForgotPassword";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="mx-0 flex flex-col" id="main">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/display" element={<Display />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/all-movies" element={<AllMovies />} />
        <Route path="/all-movies/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
