import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ModelRegister from "./Register/components/ModelRegister";
import ModelLogin from "./Login/components/ModelLogin";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AppProps {
  onLogin: (user: User) => void;
  handleLogin: (user: User) => void;
}

function App({}: AppProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  // const [changeForm, setChangeForm] = useState(true);

  // const changeState = () => {
  //   setChangeForm(!changeForm);
  // };

  const handleLogin = (user: User) => {
    axios
      .post("/api/login", user)
      .then(() => {
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = (user: User) => {
    axios
      .post("/api/register", user)
      .then(() => {
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<ModelLogin handleLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<ModelRegister handleRegister={handleRegister} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
