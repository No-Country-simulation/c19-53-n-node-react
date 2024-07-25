import React from "react";
import Logo from "../../../assets/svg/Logo";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";

const LandingNavBar = () => {
  return (
    <div className="flex justify-between items-center h-20 border">
      {/* logo */}
      <div className="p-4">
        <Logo width={90} />
      </div>
      {/* boton */}
      <div className="p-4">
        <ConfirmationButton name={"Iniciar Sesion"} />
      </div>
    </div>
  );
};

export default LandingNavBar;
