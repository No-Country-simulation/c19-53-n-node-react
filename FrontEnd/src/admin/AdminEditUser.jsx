import { React, useEffect, useState } from "react";
import HomeIcon from "./assets/HomeIcon";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TestContext } from "../context/testContext";
import { useParams } from "react-router-dom";

function AdminEditUser() {
  const { register, handleSubmit, setValue } = useForm();
  const { updateUser, getUserById } = useContext(TestContext);
  const param = useParams();

  useEffect(() => {
    async function loadUser() {
      if (param.id) {
        const currentUser = await getUserById(param.id);
        console.log(currentUser.data);
        setValue("name", currentUser.data.name);
        setValue("email", currentUser.data.email);
        setValue("document", currentUser.data.document);
        setValue("password", currentUser.data.password);
        setValue("confirmPassword", currentUser.data.password);
      }
    }

    loadUser();
  }, []);

  return (
    <div className="bg-slate-950 flex h-screen justify-center items-center p-3">
      <div className="flex flex-col  justify-center items-center bg-slate-600 p-3 rounded-lg ">
        <a href="/admin/home">
          <HomeIcon width="30" height="30" color="#ffffff" />
        </a>
        <div className="flex  justify-center items-center ">
          <h1 className="text-slate-50 text-xl ">Editar Usuarios</h1>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(async (data) => {
              try {
                await updateUser(param.id, data);
                alert("Usuario actualizado");
              } catch (error) {
                alert("Error al actualizar el usuario");
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
                  {...register("document", { required: true })}
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
}

export default AdminEditUser;
