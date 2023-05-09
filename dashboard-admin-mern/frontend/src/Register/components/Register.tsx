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
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister(user);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <h4 className="text-dark mt-2 mb-2">Create acount</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="pt-2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            className="mb-3"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
        <Button variant="secondary" type="button" className="mx-2">
          Logear
        </Button>
      </Form>
    </div>
  );
};

export default RegistroForm;

{
  /* <Button variant="primary" type="submit" className="g">
          Registrarse
        </Button> */
}
