import Toast from "react-bootstrap/Toast";
import axios from "axios";

type HomeLoginProps = {
  email: string;
};

function HomeLogin({ email }: HomeLoginProps) {
  const handleButton = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8080/logout");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
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
          Hello, thank you for testing my application, it is very important to
          me.
        </Toast.Body>
      </Toast>

      <button className="btn btn-secondary mt-2" onClick={handleButton}>
        Logout
      </button>
    </div>
  );
}

export default HomeLogin;
