
import './Landing.css';
import NavLanding from '../../components/NavLanding/NavLanding'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../Helpers/RoutesPath'
import { HiOutlineBanknotes } from 'react-icons/hi2';

function LandingPage() {

    return (
        <div>
            <div>
                <NavLanding />
            </div>
            <div className="cta-area ">
                <div className="div-container">
                        <h1 className='icon-home-card'>
                            <HiOutlineBanknotes />
                        </h1>
                        <h2>Empresas</h2>
                        <h5>Elegí una solución de pago fácil y confiable para que vos y tus empleados disfruten de mayor tranquilidad</h5>
                        <Link to={ROUTES.CREATEACCOUNT}><button className='btn-start'>Comenzar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;