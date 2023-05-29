import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

type loginProps = {
  handleLogin: (user: User) => void;
};

function Login({ handleLogin }: loginProps) {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(user);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h4
        className="text-dark mt-2 mb-4"
        style={{ fontFamily: "-moz-initial", fontSize: "2rem" }}
      >
        WELCOME BACK
      </h4>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            autoFocus
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
            className="mb-3"
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </Form.Group>
        <div className="d-flex justify-content-center mb-3">
          <Button variant="primary" type="submit" className="mx-2">
            Log in
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="mx-2"
            href="/register"
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
