import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/components/Home";
import ModelRegister from "./Register/components/ModelRegister";
import ModelLogin from "./Login/components/ModelLogin";
import HomeLogin from "./Home/components/HomeLogin";

// interface User {
//   email: string;
//   password: string;
//   confirmPassword?: string;
// }

// interface AppProps {
//   onLogin: (user: User) => void;
//   handleLogin: (user: User) => void;
// }

function App() {
  // const [authenticated, setAuthenticated] = useState<boolean>(false);
  // const [changeForm, setChangeForm] = useState(true);

  // const changeState = () => {
  //   setChangeForm(!changeForm);
  // };

  // const handleLogin = (user: User) => {
  //   axios
  //     .post("http://localhost:8080/login", user)
  //     .then(() => {
  //       // setAuthenticated(true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/inicio" element={<HomeLogin />} />
          <Route path="/login" element={<ModelLogin />} />
          <Route path="/register" element={<ModelRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
