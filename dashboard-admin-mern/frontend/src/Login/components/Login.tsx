import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface LoginProps {
  handleLogin: (user: User) => void;
}

function Login({ handleLogin }: LoginProps) {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(user);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <h4 className="text-dark mt-2 mb-2">Welcome back</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
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
            placeholder="Password"
            value={user.password}
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
          // onClick={changeState}
          className="mx-2"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;
