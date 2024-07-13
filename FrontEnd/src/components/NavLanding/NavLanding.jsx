import "./NavLanding.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Helpers/RoutesPath";
import ConfirmationButton from '../../components/InputComponents/ConfirmationButton'
// import logo from "../../Img/Logox1.png";

function NavHome() {
  return (
    <header>
      <nav>
        <div>
          <div className="nav_container bg-violet-300">
            <a
              href="/"
              className=" mb-2 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              {/* <img src={logo} width="200px" alt="logo" /> */}
            </a>
            <div className="flex space-x-20 container flex justify-end items-center w-full">
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

export default NavHome;
