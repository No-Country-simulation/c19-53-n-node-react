import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BottomBar from "../components/BottomBar";
import { useContext } from "react";
import { TestContext } from "../../context/testContext";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { updateUser, getUserById } = useContext(TestContext);
  const param = useParams();
  const [user, setUser] = useState({});

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
        setValue("bankName", currentUser.data.bankName);
        setValue("bankAccountNumber", currentUser.data.bankAccountNumber);
        setValue("role", currentUser.data.role);
        setUser(currentUser.data);
      }
    }

    loadUser();
  }, []);

  return (
    <div className="bg-black h-full md:h-screen flex md:flex-row flex-col items-center justify-center gap-7 text  pb-20">
      <div className="flex flex-col justify-center items-center gap-3 pt-20 md:pt-0">
        <img
          className="border w-56 h-56 rounded-full"
          src={user.profileImage}
          alt=""
        />
      </div>
      <div className="p-5">
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              await updateUser(param.id, data);
              alert("Usuario actualizado");
            } catch (error) {
              alert("Error al actualizar el usuario");
            }
          })}
          className="  flex flex-col gap-3 items-center text-white  rounded-lg drop-shadow w-full sm:max-w-lg"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Nombre y Apellido
            </label>
            <div className="relative  rounded-md ">
              <input
                type="text"
                placeholder={"Ingrese el nombre "}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("name", { required: true })}
              />
            </div>
          </div>
          {/* document */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Número de Identificación
            </label>
            <div className="relative mt-2 rounded-md ">
              <input
                type="text"
                placeholder={"Ingrese el numero de identificacion"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("document", { required: true })}
              />
            </div>
          </div>
          {/* bankName */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Banco
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nuevo banco"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("bankName", { required: true })}
              />
            </div>
          </div>
          {/* bankAccountNumber */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              CBU
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el numero de cuenta"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("bankAccountNumber", { required: true })}
              />
            </div>
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                placeholder={"Ingrese el nuevo correo electrónico"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          {/* password */}
          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder={"Ingrese el nuevo password"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-thin leading-6 text-white">
              Cargo
            </label>
            <div className="relative mt-2 rounded-md ">
              <input
                type="text"
                placeholder={"Ingrese el numero de identificacion"}
                className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                {...register("role", { required: true })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-36 text-xs justify-center border rounded-lg  px-6 py-2 font-semibold leading-6 text-white shadow-md  hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Confirmar
          </button>
        </form>
      </div>
      <BottomBar />
    </div>
  );
};

export default EditEmployee;
