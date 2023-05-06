import { Form, Button } from "react-bootstrap";

// interface RegistroFormProps {
//   onSubmit: (data: RegistroFormData) => void;
// }

// interface RegistroFormData {
//   nombre: string;
//   apellido: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

type RegistroFormProps = {
  changeState: () => void;
};

const RegistroForm = ({ changeState }: RegistroFormProps) => {
  return (
    <div className="container">
      <h4 className="text-dark mt-2 mb-2">Create acount</h4>
      <Form>
        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="pt-2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            className="mb-3"
          />
        </Form.Group>

        <Button variant="primary" type="button" className="g">
          Registrarse
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={changeState}
          className="mx-2"
        >
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
