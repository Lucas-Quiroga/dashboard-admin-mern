import { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

type RegistroFormProps = {
  handleRegister: (user: User) => void;
};

const RegistroForm = ({ handleRegister }: RegistroFormProps) => {
  const initialUserState: User = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState<User>(initialUserState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister(user);
    setUser(initialUserState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    // console.log(user);
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h4
        className="text-dark mt-2 mb-2"
        style={{ fontFamily: "-moz-initial", fontSize: "2rem" }}
      >
        CREATE ACOUNT
      </h4>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
            autoFocus
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="pt-2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={user.confirmPassword}
            className="mb-3"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-center mb-3">
          <Button variant="primary" type="submit" className="mx-2">
            Register
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="mx-2"
            href="/login"
          >
            Log in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistroForm;
