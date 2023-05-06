import RegistroForm from "./Register";
import imgSvg from "./../../assets/register.svg";

type modelProps = {
  changeState: () => void;
};

const ModelRegister = ({ changeState }: modelProps) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div
                    className="flex-grow-1 bg-login-imag"
                    style={{ backgroundImage: `url(${imgSvg})` }}
                  >
                    <img
                      className="img-thumbnail img-fluid w-100 h-100"
                      src={imgSvg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <RegistroForm changeState={changeState} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelRegister;
