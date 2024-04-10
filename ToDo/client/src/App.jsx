import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./UserContext";
import RestrictedRoutes from "./components/RestrictedRoutes";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";



function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<RestrictedRoutes><Home /></RestrictedRoutes>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
