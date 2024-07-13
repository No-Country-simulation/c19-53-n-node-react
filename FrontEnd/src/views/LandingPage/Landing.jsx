
// import './Landing.css';
// import NavLanding from '../../components/NavLanding/NavLanding'
// import { Link } from 'react-router-dom'
// import { ROUTES } from '../../Helpers/RoutesPath'
// import { HiOutlineBanknotes } from 'react-icons/hi2';
// import ConfirmationButton from '../../components/InputComponents/ConfirmationButton'



// function LandingPage() {

//     return (
//         <div>
//             <div>
//                 <NavLanding />
//             </div>
//             <div className="cta-area mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-lg  flex flex-col gap-10 items-center ">
//                 <div className=''>
//                     <img src="https://i.postimg.cc/qMbP7zHY/1.png" width="500px" alt="Banner" />
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-center gap-8">
//                     <div className=''>
//                         <h1 className='icon-home-card'>
//                             <HiOutlineBanknotes className=' object-cover h-48 w-96' />
//                         </h1>
//                         <h2 className='text-lg font-medium leading-10 text-gray-900'>Empresas</h2>
//                         <h5>Elegí una solución de pago fácil y confiable para que vos y tus empleados disfruten de mayor tranquilidad</h5>
//                         <Link to={ROUTES.CREATEACCOUNT}><ConfirmationButton name={'Comenzar'}/></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LandingPage;

import './Landing.css';
import NavLanding from '../../components/NavLanding/NavLanding';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Helpers/RoutesPath';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import ConfirmationButton from '../../components/InputComponents/ConfirmationButton';

function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavLanding />
            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="cta-area mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-lg flex flex-col gap-10 items-center">
                    <div className='w-full max-w-md'>
                        <img src="https://i.postimg.cc/qMbP7zHY/1.png"  alt="Banner" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-8">
                        <div>
                            <h1 className="icon-home-card">
                                <HiOutlineBanknotes className="object-cover h-48 w-96 mx-auto" />
                            </h1>
                            <h2 className="text-lg font-medium leading-10 text-gray-900">Empresas</h2>
                            <h5>Elegí una solución de pago fácil y confiable para que vos y tus empleados disfruten de mayor tranquilidad</h5>
                            <div className='flex justify-center items-center'>
                                <Link to={ROUTES.CREATEACCOUNT}>
                                    <ConfirmationButton name={'Comenzar'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;