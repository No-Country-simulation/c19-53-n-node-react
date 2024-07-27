import React from "react";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div>
        <h1 className="text-4xl font-thin text-center px-5 md:px-32">
          Gestiona tus pagos de forma sencilla y eficiente con JustPay
        </h1>
      </div>
      <div className=" w-80 ">
        <img src="/LandingBannerImage.png" alt="lalal" />
      </div>
      <div className="flex flex-col  justify-center items-center w-96 gap-9">
        <p className="text-xl text-center">
          Lleva tu empresa al siguiente nivel con nuestro software de gestión y
          administración de pagos.
        </p>
        <div className="">
          <Link to='/createaccount'>
          <ConfirmationButton name={"Descubre más"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
