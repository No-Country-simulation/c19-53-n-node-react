import './NavHome.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Helpers/RoutesPath';
import logo from '../../img/Logo x1.png';


function NavHome() {

    return(
        <header>
            <nav>
                <div className='nav_container'>
                    <div>
                        <img src={logo} alt="logo" />
                        <Link to={ROUTES.LOGIN}><button>Iniciar Sesión</button></Link>
                        <Link to={ROUTES.CREATEACCOUNT}><button>Crear cuenta</button></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavHome;