import React from "react";
import { TextInput } from "../../components/InputComponents/TextInput";
import ConfirmationButton from "../../components/InputComponents/ConfirmationButton";
import TermsAgree from "../../components/InputComponents/TermsAgree";
import { JoinUs } from "../../assets/svg/JoinUs";
import NavExample from "../../components/InputComponents/NavExample";
import FooterExample from "../../components/InputComponents/FooterExample";

export default function CreateAccount() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavExample />

      <div className="mt-10 bt-10 lg:mt-2 flex flex-col lg:flex-row justify-center items-center gap-10 p-2">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-8 p-3 items-center">
            <h1 className="text-3xl font-bold leading-6 text-center">
              UNETE A NUESTRA COMUNIDAD
            </h1>
            <p className="text-center w-96">
              Completa este sencillo formulario y comienza a disfrutar de los
              beneficios de operar con nuestra aplicación
            </p>
          </div>
          <div className="flex justify-center w-full">
            <JoinUs height={"250"} />
          </div>
        </div>

        <div className="mt-10 mb-10 flex flex-col gap-6 items-center bg-slate-50 p-8 rounded-lg drop-shadow w-full sm:max-w-lg">
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
      <FooterExample />
    </div>
  );
}
