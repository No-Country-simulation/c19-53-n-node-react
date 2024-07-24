import React from "react";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";

const LandingBanner = () => {
  return (
    <div className="h-96 flex justify-center items-center gap-20 p-5 flex-wrap">
      <div className=" w-96 h-80">
        <img src="public/LandingBannerImage.png" alt="lalal" />
      </div>
      <div className=" w-96 h-80 flex flex-col justify-center items-right text-left gap-5">
        <h1 className="text-4xl from-neutral-950 font-thin">
          DESCUBRE UN MUNDO DE POSIBILIDADES
        </h1>
        <h1 className="font-light text-sm">
          Lleva tu empresa al siguiente nivel con nuestro software de gestión y
          administración de pagos
        </h1>
        <ConfirmationButton name={"Descubre más"} />
      </div>
    </div>
  );
};

export default LandingBanner;
