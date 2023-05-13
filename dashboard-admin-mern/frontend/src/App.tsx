import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/components/Home";
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
      .post("http://localhost:8080/login", user)
      .then(() => {
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/register", user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<ModelLogin handleLogin={handleLogin} />}
          />
          <Route path="/register" element={<ModelRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
