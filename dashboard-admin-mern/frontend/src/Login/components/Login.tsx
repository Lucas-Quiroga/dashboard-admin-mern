import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface LoginProps {
  handleLogin: (user: User) => void;
}

function Login() {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleLogin = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/login", user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    handleLogin(user);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <div className="container">
      <h4 className="text-dark mt-2 mb-2">Welcome back</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Logear
        </Button>
        <Button
          variant="secondary"
          type="button"
          className="mx-2"
          href="/register"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;
