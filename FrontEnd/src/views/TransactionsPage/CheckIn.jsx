import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";
import CheckedIcon from "../assets/svg/CheckedIcon";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

const CheckIn = () => {
  const location = useLocation();
  const { employee, monto, fecha} = location.state || {};
  
  if (!employee) {
    return <p>Error al cargar los detalles del empleado</p>
  };

  const formattedDate = fecha ? new Date(fecha).toLocaleString() : "Fecha no disponible";
 

  return (
    <>
      <div>
        <div>
          <div className="bg-violet-500 h-screen w-full flex flex-col justify-center rounded-b-lg md:pt-8">
            {/* EMPLEADOS */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-violet-500 w-full h-96   flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center gap-3">
                    <CheckedIcon width="50" height="50" color="white" />
                    <h1 className="font-thin text-xl">Transferencia Exitosa</h1>
                    <p className="font-thin text-xs">
                      Datos de la transferencia:
                    </p>
                    <div className="flex flex-col font-thin text-sm justify-center items-center ">
                      <img
                        className="border w-16 h-16 rounded-full"
                        src={employee.image || '/Employee1.jpg'}
                        alt={employee.name}
                      />
                      <p className="text-white">{employee.name}</p>
                      <p className="text-white">{employee.bank}</p>
                      <p className="text-white">{employee.CBU}</p>
                      <p>{monto}</p>
                      <p>Fecha:  {formattedDate} </p>
                    </div>
                    <div className=" flex justify-center items-center text-white font-thin gap-10">
                      <Link
                        className="flex w-36 text-xs justify-center border rounded-lg bg-violet-500 px-6 py-2  font-semibold leading-6 text-white shadow-md  hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        to="/transactionslist"
                      >
                        Transferir a otros
                      </Link>
                      <Link
                        to="/home"
                        className="flex w-36 text-xs justify-center border rounded-lg bg-violet-500 px-6 py-2 font-semibold leading-6 text-white shadow-md  hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Volver al inicio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BAR */}
            <BottomBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckIn;
