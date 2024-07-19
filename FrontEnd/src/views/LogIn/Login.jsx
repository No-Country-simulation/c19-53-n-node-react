import { EmailInput } from "../../components/InputComponents/EmailInput";
import { PasswordInput } from "../../components/InputComponents/PasswordInput";
import ConfirmationButton from "../../components/InputComponents/ConfirmationButton";
import SignInBanner from "../../assets/svg/SignInBanner";
import Footer from "../../components/Footer";
import NavExample from "../../components/InputComponents/NavExample";

export default function Login() {
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
            <EmailInput
              name={"Email"}
              description={"Ingrese su correo electrónico"}
            />
            <PasswordInput
              name={"Contraseña"}
              description={"Ingrese su contraseña"}
            />
            <a href="#" className="text-indigo-600">
              ¿Olvidaste tu contraseña?
            </a>
            <ConfirmationButton name={"Iniciar Sesión"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
