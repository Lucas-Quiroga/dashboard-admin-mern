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
        <ModelLogin changeState={changeState} />
      ) : (
        <ModelRegister changeState={changeState} />
      )}
    </div>
  );
};

export default MainApp;
