import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Bienvenido a mi página</h1>
          <p>Esta es mi página de inicio</p>
          <Button variant="primary" size="lg" href="/login">
            Ir a Logear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
