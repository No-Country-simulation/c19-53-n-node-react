import './NavHome.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Helpers/RoutesPath';


function NavHome() {

    return(
        <header>
            <nav>
                <div className='nav_container'>
                    <div>
                        <Link to={ROUTES.LOGIN}><button>Iniciar Sesión</button></Link>
                        <Link to={ROUTES.CREATEACCOUNT}><button>Crear cuenta</button></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavHome;