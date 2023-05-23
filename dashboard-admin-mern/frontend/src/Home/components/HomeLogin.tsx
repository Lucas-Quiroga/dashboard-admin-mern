import Toast from "react-bootstrap/Toast";
import ToastTool from "../../tools/ToastsTool";

type HomeLoginProps = {
  email: string;
  handleLogout: () => void;
};

function HomeLogin({ email, handleLogout }: HomeLoginProps) {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <ToastTool
        ToastBody="Successful login."
        ToastTittle="Hello"
        ToastColor="success"
      />
      <Toast
        className="middle-center mx-auto"
        style={{ width: 400, fontSize: 15 }}
      >
        <Toast.Header closeButton={false}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2 "
            alt=""
          />
          <strong className="me-auto">Welcome - {email}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          Thank you for testing my application, it is very important to me.
        </Toast.Body>
      </Toast>

      <button className="btn btn-secondary mt-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HomeLogin;
