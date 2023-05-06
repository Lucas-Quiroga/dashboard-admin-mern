import { useState } from "react";
import ModelLogin from "../../Login/components/ModelLogin";
import ModelRegister from "../../Register/components/ModelRegister";

const MainApp = () => {
  const [changeForm, setChangeForm] = useState(true);

  const changeState = () => {
    setChangeForm(!changeForm);
  };
  return (
    <div className="container">
      {changeForm ? (
        <ModelRegister changeState={changeState} />
      ) : (
        <ModelLogin changeState={changeState} />
      )}
    </div>
  );
};

export default MainApp;
