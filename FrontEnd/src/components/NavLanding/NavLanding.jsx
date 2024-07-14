import "./NavLanding.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Helpers/RoutesPath";
import ConfirmationButton from '../../components/InputComponents/ConfirmationButton'
import Logo from "../../assets/svg/Logo";
import Logo2 from '../../assets/svg/Logo2'


function NavLanding() {


  return (
    <header className="bg-violet-300 m-2 rounded-lg">
      <nav className="flex items-center justify-between h-20 px-4">
        <a href="/" className=" hidden md:flex flex flex-col items-center">
          <Logo width={"150"} />
        </a>
        <div className="hidden md:flex space-x-4">
          <Link to={ROUTES.LOGIN}>
            <ConfirmationButton name={'Iniciar Sesión'} />
          </Link>
          <Link to={ROUTES.CREATEACCOUNT}>
            <ConfirmationButton name={'Crear cuenta'} />
          </Link>
        </div>
      </nav>

      <div>

        <a href="/" className="md:hidden flex flex-col justify-end items-center ">
          <Logo2 width={"120"} />
        </a>
        <div className='md:hidden flex flex-col space-y-2 p-4  items-center '>

          <Link to={ROUTES.LOGIN}>
            <ConfirmationButton name={'Iniciar Sesión'} />
          </Link>
          <Link to={ROUTES.CREATEACCOUNT}>
            <ConfirmationButton name={'Crear cuenta'} />
          </Link>
        </div>
      </div>
    </header>


  );
}

export default NavLanding;


