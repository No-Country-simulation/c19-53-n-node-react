import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Cambiado de Link a useNavigate
import { ROUTES } from "../Helpers/RoutesPath";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Inicializa useNavigate

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      navigate(ROUTES.ADMIN_HOME); // Usa navigate para redirigir
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="bg-slate-950 flex h-screen justify-center items-center ">
      <div className="flex flex-col gap-5 justify-center items-center bg-slate-600 p-5 rounded-lg">
        <div>
          <h1 className="text-slate-950 text-xl font-bold">Admin Login</h1>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Username"
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
              {...register("username", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
              {...register("password", { required: true })}
            />
            <button
              type="submit"
              className="flex w-60 justify-center rounded-2xl bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
