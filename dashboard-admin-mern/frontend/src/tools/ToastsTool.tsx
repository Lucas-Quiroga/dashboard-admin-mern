import { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

type ToastToolProps = {
  ToastColor: string;
  ToastTittle: string;
  ToastBody: string;
};

function ToastTool({ ToastTittle, ToastBody, ToastColor }: ToastToolProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <ToastContainer
      position={"middle-center"}
      className="p-6"
      style={{ position: "absolute", bottom: "5rem" }}
    >
      <Toast show={show} autohide bg={ToastColor} onClose={handleClose}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{ToastTittle}</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>{ToastBody}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastTool;
