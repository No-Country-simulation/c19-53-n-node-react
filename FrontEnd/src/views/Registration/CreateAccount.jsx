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
      <div className="flex w-auto items-center">
        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-lg  flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <h1 className="text-lg font-medium leading-6 text-gray-900">
              UNETE A NUESTRA COMUNIDAD
            </h1>
            <p>
              Completa este sencillo formulario y comienza a disfrutar de los
              beneficios de operar con nuestra aplicación
            </p>
          </div>
          <JoinUs width={"500"} height={"400"} />
        </div>

        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-lg  flex flex-col gap-6 items-center bg-slate-50 p-8 rounded-lg drop-shadow">
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
