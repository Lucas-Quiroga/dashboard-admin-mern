import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

// type RegistroFormProps = {
//   handleRegister: (user: User) => void;
// };

const RegistroForm = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (user: User) => {
    try {
      const response = await axios.post("http://localhost:8080/register", user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister(user);
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
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
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
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistroForm;
