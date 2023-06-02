import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import ModelRegister from "./components/Register/components/ModelRegister";
import ModelLogin from "./components/Login/components/ModelLogin";
import HomeLogin from "./components/HomeLogin/HomeLogin";
import { Spinner } from "react-bootstrap";
import { useServices } from "./services/useServices";

function App() {
  const {
    authenticated,
    userEmail,
    userError,
    userErrorCount,
    errorUserOffice,
    spinnerState,
    showRegisterToast,
    showRegisterOtherToast,
    registerError,
    userErrorCountRegister,
    showLogoutToast,
    setShowRegisterOtherToast,
    setErrorUserOffice,
    handleLogin,
    handleRegister,
    handleLogout,
  } = useServices();

  useEffect(() => {
    if (userError && userErrorCount > 0) {
      setErrorUserOffice(true);
      setTimeout(() => {
        setErrorUserOffice(false);
      }, 2000);
    }
  }, [userError, userErrorCount]);

  useEffect(() => {
    if (registerError && userErrorCountRegister > 0) {
      setShowRegisterOtherToast(true);
      setTimeout(() => {
        setShowRegisterOtherToast(false);
      }, 2000);
    }
  }, [registerError, userErrorCountRegister]);

  if (spinnerState) {
    return (
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <ModelRegister
                handleRegister={handleRegister}
                showRegisterToast={showRegisterToast}
                showRegisterOtherToast={showRegisterOtherToast}
              />
            }
          />
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
