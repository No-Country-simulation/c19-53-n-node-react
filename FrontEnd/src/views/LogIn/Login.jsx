import { EmailInput } from "../../components/InputComponents/EmailInput";
import { PasswordInput } from "../../components/InputComponents/PasswordInput";
import ConfirmationButton from "../../components/InputComponents/ConfirmationButton";
import SignInBanner from "../../assets/svg/SignInBanner";
import Footer from "../../components/Footer";
import NavExample from "../../components/InputComponents/NavExample";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {  userLoginAct } from '../../redux/actions/userActions'
import { clearUsers } from "../../redux/reducers/userSlice";


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, auth } = useSelector((state) => state.userState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() =>{
    if (auth || isAuthenticated){
      const timeoutId = setTimeout(()=>{
        navigate('/home');
        dispatch(clearUsers());
      }, 2000)
      return () => clearTimeout(timeoutId);
    }
  },[auth, isAuthenticated, navigate, dispatch])



  const handleLogin = async () => {
    const result = await dispatch(userLoginAct({email, password}))
    if (result?.payload?.auth) {
      setIsAuthenticated(true)
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                />
          </div>
          <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="password"
                    placeholder={"Ingrese su contraseña"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                    required
                />
                </div>
            <a href="#" className="text-indigo-600">
              ¿Olvidaste tu contraseña?
            </a>
            <ConfirmationButton name={"Iniciar Sesión"} onClick={ handleLogin } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
