import './Home.css';
import { Link } from 'react-router-dom';
import MenuHome from '../../components/MenuHome/MenuHome';
import Footer from '../../components/Footer';
import NavExample from '../../components/InputComponents/NavExample';
import MoneyButton from '../../components/InputComponents/MoneyButton'
import { IoIosArrowForward } from "react-icons/io";
import { format } from 'date-fns';
import { FiUser } from "react-icons/fi";



function Home() {
    const availableAmount = '1.234.56';
    const transactions = [
        { id: 1, date: '2024-07-13', description: 'Pago de nómina', amount: '650.00' },
        { id: 2, date: '2024-07-13', description: 'Pago Empleado', amount: '210.00' },
        { id: 3, date: '2024-07-13', description: 'Pago Empleado', amount: '240.00' },
        { id: 4, date: '2024-07-14', description: 'Pago Empleado', amount: '220.00' },
        { id: 5, date: '2024-07-14', description: 'Pago Empleados', amount: '230.00' },
        { id: 6, date: '2024-07-15', description: 'Pago Empleados', amount: '250.00' },
        { id: 7, date: '2024-07-16', description: 'Ingreso de dinero', amount: '260.00' },
        { id: 8, date: '2024-07-17', description: 'Pago Empleado', amount: '270.00' },
        { id: 9, date: '2024-07-18', description: 'Pago Empleado', amount: '280.00' },
        { id: 10, date: '2024-07-23', description: 'Pago Empleado', amount: '290.00' },

    ];
    const recentTransactions = transactions.slice(-8).reverse();

    const formatDate = (dateString) => {

        return format(new Date(dateString + 'T00:00:00'), 'dd/MM');
    };

    return (
        <div className="home-container relative ">
            <NavExample />
            <div className="content-wrapper">
                <MenuHome />
                <div >
                    <div className="flex mt-32 ml-80 ">
                        <Link to='/banking' className='mr-32' >
                            <MoneyButton amount={availableAmount} />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8 mt-1 ml-80 bg-white rounded-lg shadow-lg w-96 h-12">
                        <Link to='/withdraw'>
                            <button type='action' className="btn bg-violet-400 text-slate-900 font-semibold ml-6 px-4 py-1 rounded-xl hover:bg-violet-500">Transferir dinero</button>
                        </Link>
                        <Link to='/money-inflows'>
                            <button type='action' className="btn bg-violet-400 text-slate-900 font-semibold  px-4 py-1 rounded-xl hover:bg-violet-500">Ingresar dinero</button>
                        </Link>
                    </div>
                    <Link to='/delete-account'>
                        <button className='flex items-center mt-8 ml-80 bg-white rounded-lg shadow-lg w-96 h-12 hover:bg-red-200'>
                            <FiUser className="ml-8 mr-4 " />
                            <span className='space-x-8 font-medium'>Eliminar cuenta</span>
                            <IoIosArrowForward className="ml-40 " />
                        </button>
                    </Link>
                </div>
                <div className='bg-white w-3/12 h-5/6 mt-32 p-4 rounded-lg shadow-lg flex flex-col'>
                    <h2 className='font-bold text-lg mb-2'>Transacciones recientes</h2>
                    <ul className='flex-grow'>
                        {recentTransactions.map(transaction => (
                            <li key={transaction.id} className='mb-2'>
                                <Link to={`activities/detail/${transaction.id}`} className='block p-2 rounded-lg hover:bg-violet-100'>
                                    <div className=' p-2 rounded-lg'>
                                        <div className='flex justify-between outline-1'>
                                            <span className='flex mt-3'>{transaction.description}</span>
                                            <div className='text-right'>
                                                <span className='block'>${transaction.amount}</span>
                                                <span className='text-xs text-slate-400'>{formatDate(transaction.date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to='/activities' className='flex items-baseline ml-4 rounded-md text-blue-500 hover:bg-violet-100'>
                        Ver toda la actividad
                        <IoIosArrowForward className="ml-64 w-4 h-4" />
                    </Link>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;