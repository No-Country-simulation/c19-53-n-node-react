import React from "react";
import { useForm } from "react-hook-form";
import BottomBar from "../components/BottomBar";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/testContext";

const AddEmployee = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  const { company, createEmployee } = useContext(TestContext);

  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-black h-full md:h-screen flex md:flex-row flex-col items-center justify-center gap-7 text  pb-20">
      <div className="flex flex-col justify-center items-center gap-3 pt-20 md:pt-0">
        <img className="border w-56 h-56 rounded-full" src="#" alt="" />
        <h1 className="text-white">Nuevo Empleado</h1>
      </div>
      <div className="p-5">
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log(data);
            if (company?._id) {
              try {
                await createEmployee(company._id, data);
                alert("Usuario creado con éxito");
              } catch (error) {
                alert("Error al crear el usuario");
              }
            } else {
              alert("No se ha seleccionado una empresa");
            }
          })}
          className="  flex flex-col gap-3 items-center text-white  rounded-lg drop-shadow w-full sm:max-w-lg"
        >
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Nombre y Apellido
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nombre y apellido"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("name", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Número de Identificación
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nuevo documento"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("document", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Banco
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nuevo documento"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("bankName", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              CBU
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el CBU"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("bankAccountNumber", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Email
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el Email"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              PassWord
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el Email"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Cargo
            </label>
            <div className="relative  rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el Email"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("role", { required: true })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-36 text-xs justify-center border rounded-lg  px-6 py-2 font-semibold leading-6 text-white shadow-md  hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear
          </button>
        </form>
      </div>
      <BottomBar />
    </div>
  );
};

export default AddEmployee;
