import RegistroForm from "./Register";
import imgSvg from "./../../assets/register.svg";
import ToastTool from "../../tools/ToastsTool";

interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}

type modelProps = {
  handleRegister: (user: User) => void;
  showRegisterToast: boolean;
  handleChangeState: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ModelRegister = ({
  handleRegister,
  showRegisterToast,
  handleChangeState,
}: modelProps) => {
  return (
    <>
      {showRegisterToast && (
        <ToastTool
          ToastColor="success"
          ToastTittle="Usuario registrado correctamente"
          ToastBody="los datos fueron guardados en la base de datos"
        />
      )}
      <div className="container d-flex align-items-center justify-content-center flex-column vh-100">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-12">
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
                    <RegistroForm
                      handleRegister={handleRegister}
                      handleChangeState={handleChangeState}
                    />
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

export default ModelRegister;
