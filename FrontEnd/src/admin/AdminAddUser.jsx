import React from "react";
import HomeIcon from "./assets/HomeIcon";
import { useForm } from "react-hook-form";

const AdminAddUser = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-slate-950 flex h-screen justify-center items-center p-3">
      <div className="flex flex-col  justify-center items-center bg-slate-600 p-3 rounded-lg ">
        <a href="/admin/home">
          <HomeIcon width="30" height="30" color="#ffffff" />
        </a>
        <div className="flex  justify-center items-center ">
          <h1 className="text-slate-50 text-xl ">Agregar Usuario</h1>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(async (data) => {
              try {
                alert("User added", data);
              } catch (error) {
                alert(error);
              }
            })}
            className="flex flex-col gap-3 items-center justify-center"
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="relative  rounded-md shadow-sm">
                <input
                  type="text"
                  placeholder={"Ingrese el nombre "}
                  className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
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
                  placeholder={"Ingrese el correo electrónico"}
                  className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
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
                  placeholder={"Ingrese el numero de identificacion"}
                  className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                  {...register("id", { required: true })}
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
                  placeholder={"Ingrese la contraseña"}
                  className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
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
                  placeholder={"Confirme la contraseña"}
                  className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-60 justify-center rounded-2xl bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddUser;
