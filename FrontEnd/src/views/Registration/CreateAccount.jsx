import React, {useContext} from "react";
import { registerRequest } from "../../api/auth";
import { getUsers } from "../../api/auth";
import { useState, useEffect } from "react";

import TermsAgree from "../../components/InputComponents/Terms/TermsAgree";
import JoinUs from "../../assets/svg/JoinUs";
import NavExample from "../../components/InputComponents/NavExample";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import {TestContext} from '../../context/testContext'

export default function CreateAccount() {
  const { register, handleSubmit, reset } = useForm();
  const { registerRequest } = useContext(TestContext);

  const fetchUsers = async () => {};
  useEffect(() => {
    fetchUsers();
  }, []);
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

        <form
          onSubmit={handleSubmit(async (data) => {
            try { 
              await registerRequest(data);
              reset()
              alert("Usuario creado con éxito");
            } catch (error) {
              alert("Error al crear el usuario");
            }
            
          })}
          className="mt-10 mb-10 flex flex-col gap-5 items-center bg-slate-50 p-8 rounded-lg drop-shadow w-full sm:max-w-lg"
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nombre de su organización"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("name", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                placeholder={"Ingrese su correo electrónico"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Numero de Identificación
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese su numero de identificacion"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("document", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                placeholder={"Ingrese su contraseña"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Contraseña
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                placeholder={"Confirme su contraseña"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("confirmPassword", { required: true })}
              />
            </div>
          </div>

          <TermsAgree />
          <button
            type="submit"
            className="flex w-60 justify-center rounded-2xl bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Confirmar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
