
import { useState } from "react";
import {useLocation, Link } from 'react-router-dom';

import { SlHome } from "react-icons/sl"
import { LuWallet } from "react-icons/lu";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";

function MenuHome() {
    const location = useLocation();
    const [ active, setActive] = useState(location.pathname);

    const handleActive = (path) => {
        setActive(path)
    }

    return(
        <div className="bg-violet-500 h-screen w-52">
         {/* Botón de Usuario */}
         <div className="flex justify-center items-center py-4">
                <button className="flex items-center px-4 py-2 hover:bg-indigo-800 bg-indigo-900 text-white rounded-lg">
                    <FiUser className="mr-2" />
                    Usuario
                    <IoIosArrowForward />
                </button>
            </div>
            {/* Contenido del menú */}
            <div className="flex justify-center mt-0">
                
            <nav className="mt-5">
                <Link to='/home ' className={`flex items-center block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/home' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/home')}>
                <SlHome className="mr-5" /> 
                    <span>Inicio</span>    
                </Link>
                <Link to='/banking' className={`flex items-center mt-5 block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/banking' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/banking')}
                >
                <LuWallet className="mr-5"/>
                    <span>Tu dinero</span>
                    </Link>
                <Link to='/activities' className={`flex items-center mt-5 block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/activities' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/activities')}
                >
                <RxActivityLog className="mr-5"/>
                    <span>Tu actividad</span>
                    </Link>
                <Link to='/pay' className={`flex items-center mt-5 block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/pay' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/pay')}
                >
                <MdOutlineAttachMoney className="mr-5"/>
                    <span>Pagar</span>
                    </Link>
                <Link to='/withdraw' className={`flex items-center mt-5 block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/withdraw' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/withdraw')}
                >
                <FaMoneyBillTransfer className="mr-5"/>
                    <span>Transferir dinero</span>
                    </Link>
                    <Link to='/employees' className={`flex items-center mt-5 block py-2 px-4 text-white hover:bg-indigo-500 ${active === '/employees' && 'bg-indigo-700'}`}
                onClick={() => handleActive('/employees')}
                >
                <FaListCheck className="mr-5"/>
                    <span>Lista de empleados</span>
                    </Link>
            </nav>
            </div>
        </div>
    )
}

export default MenuHome;