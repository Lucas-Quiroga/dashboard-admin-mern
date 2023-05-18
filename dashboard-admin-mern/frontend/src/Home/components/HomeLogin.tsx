import { useState, useEffect } from "react";
import axios from "axios";

function HomeLogin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get("/login/inicio"); // Ruta de la API en tu backend
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    axiosData();
  }, []);

  return (
    <div>
      <h1>HOLA USUARIO</h1>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomeLogin;
