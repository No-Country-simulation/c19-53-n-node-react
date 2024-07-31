
import ConfirmationButton from "../../components/InputComponents/ConfirmationButton";
import SignInBanner from "../../assets/svg/SignInBanner";
import Footer from "../../components/Footer";
import NavExample from "../../components/InputComponents/NavExample";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import {ROUTES} from '../../Helpers/RoutesPath'

import { TestContext } from "../../context/testContext";


export default function Login() {
  const { login } = useContext(TestContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await login(credentials);
    if (success){
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 3000);
    }
    
  }

  return (
    <div>
      <NavExample />
      <div className="flex flex-col gap-5 p-5 lg:flex-row justify-center  lg:gap-20 mt-10">
        {/* Banner */}

        <div className="flex flex-col gap-2 items-center">
          <div>
            <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>
          </div>
          <div>
            <SignInBanner width={250} height={300} />
          </div>
          <div className="w-72 text-center">
            <p>
              {" "}
              Inicia sesion en con tu Email, para empezar a operar con nuestra
              app.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-10 mb-10 flex flex-col gap-6 items-center bg-slate-50 p-8 rounded-lg drop-shadow w-full sm:max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-center text-gray-500">
                ¿No tienes una cuenta?{" "}
                <a href="/createaccount" className="text-indigo-600">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center">
          <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="email"
                    placeholder={"Ingrese su correo electrónico"}
                    value={credentials.email}
                    onChange={(e) => setCredentials( {...credentials, email: e.target.value})}
                    required
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                />
          </div>
          <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="password"
                    placeholder={"Ingrese su contraseña"}
                    value={credentials.password}
                    onChange={(e) => setCredentials( {...credentials, password: e.target.value})}
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                    required
                />
                </div>
            <a href="#" className="text-indigo-600">
              ¿Olvidaste tu contraseña?
            </a>
            <ConfirmationButton name={"Iniciar Sesión"} type='submit' />
          </div>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
