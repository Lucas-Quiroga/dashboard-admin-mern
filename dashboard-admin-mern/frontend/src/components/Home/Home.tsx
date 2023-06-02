import { Button } from "react-bootstrap";
import imgSvg from "./../../assets/welcome.svg";

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-4">
          <div className="row d-flex flex-column justify-content-center">
            <div className="col-md-6 text-center d-flex flex-column justify-content-center mx-auto">
              <h1
                className="text-dark mt-2 mb-4"
                style={{ fontFamily: "-moz-initial", fontSize: "3rem" }}
              >
                WELCOME
              </h1>
            </div>
            <div className="col-md-6 text-center d-flex flex-column justify-content-center mx-auto">
              <img src={imgSvg} className="img-fluid" alt="Responsive" />
              <Button
                variant="primary"
                size="lg"
                href="/register"
                className="mt-4"
              >
                Go to register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
