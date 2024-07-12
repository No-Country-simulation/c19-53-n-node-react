

import "./NavLanding.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Helpers/RoutesPath";
import logo from "../../Img/Logox1.png";

function NavHome() {
  return (
    <header>
      <nav>
        <div>
          <div className="nav_container">
            <a
              href="/"
              className=" mb-2 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <img src={logo} width="200px" alt="logo" />
            </a>
            <ul className="nav col-md-4 justify-content-end mb-2">
              <Link
                className="nav-link px-2 text-body-primary"
                to={ROUTES.LOGIN}
              >
                <button className="btn-nav-home">Iniciar Sesión</button>
              </Link>
              <Link
                className="nav-link px-2 text-body-primary"
                to={ROUTES.CREATEACCOUNT}
              >
                <button className="btn-nav-home">Crear cuenta</button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavHome;
