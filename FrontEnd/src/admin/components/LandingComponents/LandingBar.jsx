import React from "react";
import Logo from "../../../assets/svg/Logo";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";
function LandingBar() {
  return (
    <div>
      <div className="bg-violet-400 h-20 flex justify-between items-center p-4">
        <div>
          <Logo width={"100"} color={"#F9F7FF"} />
        </div>
        <div>
          <ConfirmationButton name={"Ingresar"} />
        </div>
      </div>
    </div>
  );
}

export default LandingBar;
