import React from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";

import TransferIcon from "../assets/svg/TransferIcon";
import { Link } from "react-router-dom";

const TransactionsList = () => {
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
              <div className="bg-black w-80 md:w-7/12 h-52 rounded-2xl shadow-black shadow-md flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center">
                    <TransferIcon width="50" height="50" color="white" />
                    <h1 className="font-thin text-xl">Transferencias</h1>
                    <p className="font-thin text-xs">
                      Elige tu empleado y realiza una transferencia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4  flex flex-col gap-4 md:flex-row justify-center  ">
              {/* EMPLEADOS */}
              <div className="p-2 rounded-md  shadow-md shadow-gray-800 w-full md:w-3/5">
                <div className="flex justify-center p-5">
                  <input
                    type="email"
                    placeholder={"Busca tu empleado"}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    {Employees.map((employee) => (
                      <li key={employee.id} className="border rounded-md p-2">
                        <div className="flex justify-center w-full">
                          <Link
                            to={`/createtransaction/${employee.id}`}
                            className="flex items-center justify-between gap-3 w-full"
                          >
                            <img
                              src={employee.image}
                              alt=""
                              className="border w-16 h-16 rounded-full"
                            />
                            <div className="text-center">
                              <p>{employee.name}</p>
                            </div>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
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

export default TransactionsList;
