import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/components/Home";
import ModelRegister from "./Register/components/ModelRegister";
import ModelLogin from "./Login/components/ModelLogin";
import HomeLogin from "./Home/components/HomeLogin";
import ToastTool from "./tools/ToastsTool";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

// interface AppProps {
//   onLogin: (user: User) => void;
//   handleLogin: (user: User) => void;
// }

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userError, setUserError] = useState(false);

  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/login", user);
      console.log(response.data);

      if (response.data.success) {
        setAuthenticated(true);
        const useremail = response.data.email;
        setUserEmail(useremail);
      } else {
        setAuthenticated(false);
        setUserError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    // e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/logout");
      if (response.status === 200) {
        setAuthenticated(false);
        setShowLogoutToast(true);
      } else {
        setAuthenticated(true);
      }
    } catch (error) {
      console.log("el error es" + error);
    }
  };

  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<ModelRegister />} />
          {authenticated ? (
            <Route
              path="/login"
              element={
                <HomeLogin email={userEmail} handleLogout={handleLogout} />
              }
            />
          ) : (
            <Route
              path="/login"
              element={
                <ModelLogin
                  handleLogin={handleLogin}
                  showLogoutToast={showLogoutToast}
                />
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
