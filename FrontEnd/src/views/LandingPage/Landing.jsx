
import './Landing.css';
import NavLanding from '../../components/NavLanding/NavLanding';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Helpers/RoutesPath';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import ConfirmationButton from '../../components/InputComponents/ConfirmationButton';
import BannerLanding from '../../components/InputComponents/BannerLanding';
import Footer from '../../components/Footer'

function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavLanding />
            <BannerLanding/>
            <div className="flex-grow flex flex-col justify-center items-center ">
                <div className="cta-area mt-2 mb-20 sm:mx-auto sm:w-full sm:max-w-lg flex flex-col gap-10 items-center">
                    <div className="flex flex-col items-center justify-center text-center gap-8 bg-white p-8 shadow-lg rounded-lg ">
                        <div>
                            <h1 className="icon-home-card">
                                <HiOutlineBanknotes className="object-cover h-32 w-32 md:h-48 md:w-48 mx-auto" />
                            </h1>
                            <h2 className="text-lg font-medium leading-10 text-gray-900">Empresas</h2>
                            <h5 className="text-sm md:text-base" >Elegí una solución de pago fácil y confiable para que vos y tus empleados disfruten de mayor tranquilidad</h5>
                            <div className='flex justify-center items-center'>
                                <Link to={ROUTES.CREATEACCOUNT}>
                                    <ConfirmationButton name={'Comenzar'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;