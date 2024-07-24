import React from "react";
import ConfirmationButton from "../../../components/InputComponents/ConfirmationButton";

const HelpForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:p-8">
      <div className="w-1/2 md:w-1/3 flex justify-center items-center">
        <img className="w-80" src="/Help.png" alt="" />
      </div>
      <div className="w-2/3 md:w-1/2 flex flex-col gap-5 ">
        <div className="font-thin text-sm text-justify text-balance md:px-16">
          <p>
            En "JustPay", estamos comprometidos con ofrecerte el mejor servicio.
            Por eso, estamos disponibles las 24 horas del día para atender
            cualquier consulta o resolver cualquier duda que puedas tener.
            Nuestro equipo de soporte está siempre listo para ayudarte,
            asegurando que tengas una experiencia sin inconvenientes con nuestra
            aplicación. No importa la hora ni el lugar, estamos aquí para ti.
          </p>
        </div>
        <div>
          <form className="flex flex-col justify-center items-center gap-4">
            <input
              type="email"
              placeholder={"Ingrese su correo electrónico"}
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
            />
            <textarea
              placeholder={"Ingrese su mensaje"}
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              type="text"
            />
            <ConfirmationButton name={"Enviar"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
