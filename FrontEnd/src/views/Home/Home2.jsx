import React, { useContext } from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";
import PaymentCardIcon from "../assets/svg/PaymentCardIcon";
import AddMoneyIcon from "../assets/svg/AddMoneyIcon";
import TransferIcon from "../assets/svg/TransferIcon";
import { Link, useNavigate } from "react-router-dom";
import Logo2 from "../assets/svg/Logo2";
import {TestContext, TestProvider} from '../../context/testContext'

const Home2 = () => {
  const {company, logout} = useContext(TestContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

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

  const Tranfers = [
    {
      id: 1,
      name: "Clara Rodriguez",
      document: "33.657.127",
      position: "Puesto",
      image: "/Employee1.jpg",
      bank: "Banco1",
      CBU: "1111111111111",
      total: "$100",
      date: "12/12/2021",
    },
    {
      id: 2,
      name: "Julia Alvarez",
      document: "34.587.647",
      position: "Puesto",
      image: "/Employee2.jpg",
      bank: "Banco2",
      CBU: "222222222",
      total: "$200",
      date: "28/07/2024",
    },
    {
      id: 3,
      name: "Juan Perez",
      document: "32.497.666",
      position: "Puesto",
      image: "/Employee3.jpg",
      bank: "Banco3",
      CBU: "333333333333",
      total: "$300",
      date: "15/03/2022",
    },
  ];

  return (
    <>
      <div>
        <div>
          <div className="bg-violet-500 h-60 w-full rounded-b-lg shadow-violet-400 ">
            {/* AVATAR */}

            <div className="flex justify-between  bg-violet-500 px-5">
              <div
                className="flex flex-col items-center  md:pl-10 pt-6
              "
              >
                <div>
                  <img className="w-10 rounded-full " src="/Face1.jpg" alt="" />
                </div>
                <div className="font-thin text-xs text-white text-center">
                  <h1>Bienvenido</h1>
                  <h2>{company ? company.name : "Cargando..."}</h2>
                </div>
              </div>

              <button className="md:pr-20" onClick={handleLogout}>
                <NotificationsBell width="30" height="30" color="white" />
              </button>
            </div>
            {/* SALDO BANNER */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-black w-80 md:w-7/12 h-80 rounded-2xl shadow-black shadow-sm flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div>
                    <Logo2 width="80" height="80" color="white" />
                  </div>
                  <div className="text-center">
                    <h1 className="font-thin text-lg">Saldo Disponible</h1>
                    <h2 className="font-semibold text-2xl">$1.000,00</h2>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <div className="flex justify-center gap-10 md:gap-24">
                    <div>
                      <button className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
                        <PaymentCardIcon width="40" height="40" color="black" />
                      </button>

                      <h1 className="text-center">CVU</h1>
                    </div>
                    <div>
                      <button className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
                        <AddMoneyIcon width="40" height="40" color="black" />
                      </button>
                      <h1 className="text-center">Ingresa</h1>
                    </div>
                    <div>
                      <Link
                        className="bg-white w-16 h-16 rounded-full flex justify-center items-center"
                        to="/transactionslist"
                      >
                        <TransferIcon width="40" height="40" color="black" />
                      </Link>
                      <h1 className="text-center">Transferir</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4  flex flex-col gap-4 md:flex-row justify-center  ">
              {/* Actividad */}
              <div className="p-2 rounded-md  shadow-md shadow-gray-800 w-full md:w-96">
                <div className="flex justify-between p-5">
                  <h1>Mi actividad</h1>
                  <a href="/activity">Ver Todo</a>
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    {Tranfers.map((transfer) => (
                      <Link to={`/activitydetail/${transfer.id}`}>
                        <li key={transfer.id} className="border rounded-md p-2">
                          <div className="flex justify-between">
                            <div className="flex justify-center items-center gap-2">
                              <img
                                src={transfer.image}
                                alt=""
                                className="border w-16 h-16 rounded-full"
                              />
                              <div className="text-center">
                                <p>{transfer.name}</p>
                                <p>{transfer.document}</p>
                              </div>
                            </div>

                            <div className="flex flex-col justify-center items-center p-2">
                              <div>
                                <p>{transfer.total}</p>
                              </div>
                              <div>
                                <p>{transfer.date}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>

              {/* EMPLEADOS */}
              <div className="p-2 rounded-md  shadow-md shadow-gray-800 w-full md:w-96">
                <div className="flex justify-between p-5">
                  <h1>Mis empleados</h1>
                  <a href="/employeelist">Ver Todo</a>
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    {Employees.map((employee) => (
                      <li key={employee.id} className="border rounded-md p-2">
                        <div className="flex justify-center w-full">
                          <Link
                            to={`/employeeprofile/${employee.id}`}
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

export default Home2;
