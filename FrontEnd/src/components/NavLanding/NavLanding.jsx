import "./NavLanding.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Helpers/RoutesPath";
import ConfirmationButton from '../../components/InputComponents/ConfirmationButton'
// import logo from "../../Img/Logox1.png";


function NavLanding() {
  return (
    <header>
      <nav>
        <div >
          <div className="h-20 bg-violet-300 m-2 rounded-lg flex items-center justify-end ">
            <a
              href="/"
              className=" mb-2 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              {/* <img src={logo} width="200px" alt="logo" /> */}
            </a>
            <div className="flex space-x-20 justify-end items-center w-full p-60">
              <Link
                to={ROUTES.LOGIN}
              >
                <ConfirmationButton name={'Iniciar Sesión'} />
              </Link>
              <Link
                to={ROUTES.CREATEACCOUNT}
              >
                <ConfirmationButton name={'Crear cuenta'} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavLanding;


