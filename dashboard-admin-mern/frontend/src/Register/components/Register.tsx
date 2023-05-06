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
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirma tu contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit" className="g">
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
