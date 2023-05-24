import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/components/Home";
import ModelRegister from "./Register/components/ModelRegister";
import ModelLogin from "./Login/components/ModelLogin";
import HomeLogin from "./Home/components/HomeLogin";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userError, setUserError] = useState(false);
  const [userErrorCount, setUserErrorCount] = useState(0);
  const [errorUserOffice, setErrorUserOffice] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);

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
        setUserErrorCount(userErrorCount + 1);
        setErrorUserOffice(true);
      }
    } catch (error) {
      console.log(error);
      setUserError(true);
      setUserErrorCount(userErrorCount + 1);
      setErrorUserOffice(true);
    }
  };

  const handleLogout = async () => {
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

  useEffect(() => {
    if (userError && userErrorCount > 0) {
      setErrorUserOffice(true);
      setTimeout(() => {
        setErrorUserOffice(false);
      }, 2000);
    }
  }, [userError, userErrorCount]);

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
                  errorUserOffice={errorUserOffice}
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
