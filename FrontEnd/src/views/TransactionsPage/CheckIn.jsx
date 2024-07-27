import React from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";
import CheckedIcon from "../assets/svg/CheckedIcon";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const CheckIn = () => {
  const Employees = [
    {
      id: 1,
      name: "Clara Rodriguez",
      document: "33.657.127",
      position: "Puesto",
      image: "/Employee1.jpg",
      bank: "Banco1",
      CBU: "1111111111111",
    },
    {
      id: 2,
      name: "Julia Alvarez",
      document: "34.587.647",
      position: "Puesto",
      image: "/Employee2.jpg",
      bank: "Banco2",
      CBU: "222222222",
    },
    {
      id: 3,
      name: "Juan Perez",
      document: "32.497.666",
      position: "Puesto",
      image: "/Employee3.jpg",
      bank: "Banco3",
      CBU: "333333333333",
    },
  ];
  const employeeId = useParams();
  const filteredEmployees = Employees.find(
    (employee) => employee.id === parseInt(employeeId.id)
  );
  console.log(filteredEmployees);

  return (
    <>
      <div>
        <div>
          <div className="bg-violet-500 h-60 w-full rounded-b-lg shadow-violet-400 ">
            {/* AVATAR */}
            <div className="flex justify-end p-4">
              <button className="md:pr-20">
                <NotificationsBell width="30" height="30" color="white" />
              </button>
            </div>
            {/* EMPLEADOS */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-black w-80 md:w-7/12 h-full rounded-2xl shadow-black shadow-sm flex flex-col justify-center items-center gap-2">
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
                        src={filteredEmployees.image}
                        alt=""
                      />
                      <p className="text-white">{filteredEmployees.name}</p>
                      <p className="text-white">{filteredEmployees.bank}</p>
                      <p className="text-white">{filteredEmployees.CBU}</p>
                      <p>$10000</p>
                      <p>Fecha: 27/07/2024 - 00:56</p>
                    </div>
                    <div className=" flex justify-center items-center text-white font-thin gap-10">
                      <Link to="/transactionslist">Nueva transferencia</Link>
                      <Link
                        to="/home"
                        className="text-white font-thin px-3 py-1"
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
