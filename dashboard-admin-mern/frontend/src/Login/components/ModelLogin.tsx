import Login from "./Login";
import imgSvg from "./../../assets/login.svg";
import ToastTool from "../../tools/ToastsTool";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

type modelProps = {
  handleLogin: (user: User, childUser?: User) => void;
  showLogoutToast: boolean;
  errorUserOffice: boolean;
};

const Model = ({
  handleLogin,
  showLogoutToast,
  errorUserOffice,
}: modelProps) => {
  return (
    <>
      {errorUserOffice && (
        <ToastTool
          ToastColor="danger"
          ToastTittle="Usuario no encontrado"
          ToastBody="El email o la contraseña no coinciden o no estan en la base de datos"
        />
      )}
      {showLogoutToast && (
        <ToastTool
          ToastColor="primary"
          ToastTittle="Sesión cerrada"
          ToastBody="Sesión cerrada con éxito"
        />
      )}
      <div className="container d-flex align-items-center justify-content-center flex-column vh-100">
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
                    <Login handleLogin={handleLogin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
