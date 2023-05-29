import { useState } from "react";
import axios from "axios";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const useServices = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userError, setUserError] = useState(false);
  const [userErrorCount, setUserErrorCount] = useState(0);
  const [errorUserOffice, setErrorUserOffice] = useState(false);
  const [spinnerState, setSpinnerState] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const [showRegisterToast, setShowRegisterToast] = useState(false);
  const [showRegisterOtherToast, setShowRegisterOtherToast] = useState(false);
  const [userErrorCountRegister, setUserErrorCountRegister] = useState(0);
  const [registerError, setRegisterError] = useState(false);

  const handleLogin = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/login", user);
      console.log(response.data);

      if (response.data.success) {
        setAuthenticated(true);
        const useremail = response.data.email;
        setUserEmail(useremail);
        setSpinnerState(true);
        setTimeout(() => {
          setSpinnerState(false);
        }, 2000);
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

  const handleRegister = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/register", user);
      if (response.status === 200) {
        setShowRegisterToast(true);
      } else {
        setShowRegisterToast(false);
        setRegisterError(true);
        setUserErrorCountRegister(userErrorCountRegister + 1);
        setShowRegisterOtherToast(true);
      }
    } catch (error) {
      console.log(error);
      setShowRegisterToast(false);
      setRegisterError(true);
      setUserErrorCountRegister(userErrorCountRegister + 1);
      setShowRegisterOtherToast(true);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8080/logout");
      if (response.status === 200) {
        setAuthenticated(false);
        setShowLogoutToast(true);
        setSpinnerState(true);
        setTimeout(() => {
          setSpinnerState(false);
        }, 2000);
      } else {
        setAuthenticated(true);
      }
    } catch (error) {
      console.log("el error es" + error);
    }
  };

  return {
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
  };
};
