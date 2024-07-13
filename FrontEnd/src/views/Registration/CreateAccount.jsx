import React from "react";
import { TextInput } from "../../components/InputComponents/TextInput";
import ConfirmationButton from "../../components/InputComponents/ConfirmationButton";
import TermsAgree from "../../components/InputComponents/TermsAgree";
import { JoinUs } from "../../assets/svg/JoinUs";
import NavExample from "../../components/InputComponents/NavExample";
import FooterExample from "../../components/InputComponents/FooterExample";

export default function CreateAccount() {
  return (
    <div>
      <NavExample />
      <div className="flex justify-center ">
        <div className="flex  items-center flex-wrap sm:justify-center ms:">
          <div className=" sm:max-w-lg  flex flex-col gap-6 items-center p-8 ">
            <div className="flex flex-col  justify-center gap-20">
              <div className="flex flex-col gap-8 p-3">
                <h1 className="text-3xl font-bold leading-6 text-gray-900 text-center">
                  UNETE A NUESTRA COMUNIDAD
                </h1>
                <p className=" text-justify ">
                  Completa este sencillo formulario y comienza a disfrutar de
                  los beneficios de operar con nuestra aplicación
                </p>
              </div>
              <div className="flex justify-center">
                <JoinUs height={"250"} />
              </div>
            </div>
          </div>

          <div className="mt-10 mb-10  sm:max-w-lg flex flex-col gap-6  items-center bg-slate-50 p-8 rounded-lg drop-shadow">
            <TextInput
              name={"Nombre"}
              description={"Ingrese el nombre de su organización"}
            />
            <TextInput
              name={"Email"}
              description={"Ingrese su correo electrónico"}
            />
            <TextInput
              name={"Numero de Identificación"}
              description={"Ingrese su numero de identificacion"}
            />
            <TextInput
              name={"Contraseña"}
              description={"Ingrese su contraseña"}
            />
            <TextInput
              name={"Confirmar Contraseña"}
              description={"Confirme su contraseña"}
            />
            <TermsAgree />
            <ConfirmationButton name={"Confirmar"} />
          </div>
        </div>
      </div>
      <FooterExample />
    </div>
  );
}
