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
          <div className="bg-violet-500  h-screen w-full pt-16 text-white">
            <div className="flex justify-center mt-3 md:mt-0  ">
              <div className="bg-violet-500 w-full  flex flex-col justify-center items-center gap-2">
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

            <div className="p-4  bg-violet-500 flex flex-col gap-4 md:flex-row justify-center ">
              {/* EMPLEADOS */}
              <div className="p-2 rounded-md  w-full md:w-3/5">
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
