import React from "react";
import { useForm } from "react-hook-form";
import { getUsers } from "../api/auth";
import { registerRequest } from "../api/auth";
import { useState, useEffect } from "react";

function AdminHome() {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = useState([]);
  const fetchUsers = async () => {
    const res = await getUsers();
    setValues(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center p-4">
        <h1 className="text-xl">Admin Home</h1>
        <h2>Lista de Usuarios</h2>
      </div>

      <div className="flex justify-center">
        <div>
          {values.map((user) => {
            return (
              <div
                key={user.id}
                className="flex flex-col gap-2  text-center p-4"
              >
                <h1 className="bg-neutral-400">{user.name}</h1>
                <p className="bg-red-300">Email: {user.email}</p>
                <p className="bg-red-300">Rol: {user.role}</p>
                <p className="bg-red-300">Password: {user.password}</p>
                <p className="bg-red-300">Dinero: ${user.balance}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center flex flex-col">
          <h2>Agregar Usuario</h2>
          <form
            className="flex flex-col gap-2 p-4 justify-center items-center"
            onSubmit={handleSubmit(async (values) => {
              const postUser = await registerRequest(values);
              console.log(postUser);
            })}
          >
            <input
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <input
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Documento"
              {...register("document", { required: true })}
            />
            <input
              className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            <button
              className="flex w-60 justify-center rounded-2xl bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
