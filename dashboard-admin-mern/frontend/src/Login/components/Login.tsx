import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type loginProps = {
  changeState: () => void;
};

function Login({ changeState }: loginProps) {
  return (
    <div className="container">
      <h4 className="text-dark mt-2 mb-2">Welcome back</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary">Logear</Button>
        <Button
          variant="secondary"
          type="button"
          onClick={changeState}
          className="mx-2"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;

{
  /* <Button variant="primary" type="submit">
          Logear
        </Button> */
}
