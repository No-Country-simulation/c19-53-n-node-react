import React from "react";
import Logo from "../../../assets/svg/Logo";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";
import { Link } from "react-router-dom";

const LandingNavBar = () => {
  return (
    <div className="flex justify-between items-center h-20 border">
      {/* logo */}
      <div className="p-4">
        <Logo width={90} />
      </div>
      {/* boton */}
      <div className="p-4">
        <Link to='/login'>
        <ConfirmationButton name={"Iniciar Sesion"}/>
        </Link>
      </div>
    </div>
  );
};

export default LandingNavBar;
