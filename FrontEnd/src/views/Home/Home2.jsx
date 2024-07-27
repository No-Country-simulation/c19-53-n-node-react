import React from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";
import PaymentCardIcon from "../assets/svg/PaymentCardIcon";
import AddMoneyIcon from "../assets/svg/AddMoneyIcon";
import TransferIcon from "../assets/svg/TransferIcon";
import { Link } from "react-router-dom";
import Logo2 from "../assets/svg/Logo2";

const Home2 = () => {
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
                  <h1>Buenvenido</h1>
                  <h2>TechSolutions Inc</h2>
                </div>
              </div>

              <button className="md:pr-20">
                <NotificationsBell width="30" height="30" color="white" />
              </button>
            </div>
            {/* SALDO */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-black w-80 md:w-7/12 h-80 rounded-2xl shadow-black shadow-sm flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div>
                    <Logo2 width="80" height="80" color="white" />
                  </div>
                  <div className="text-center">
                    <h1 className="font-thin text-lg">Saldo Disponible</h1>
                    <h2 className="font-semibold text-2xl">$1000,00</h2>
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
                  <a href="">Ver Todo</a>
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    <li className="border rounded-md p-2">
                      <div className="flex justify-between">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Face1.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Nombre</p>
                          </div>
                        </button>

                        <div className="flex flex-col justify-center items-center p-2">
                          <div>
                            <p>$100</p>
                          </div>
                          <div>
                            <p>Fecha</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-between">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Face3.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Nombre</p>
                          </div>
                        </button>
                        <div className="flex flex-col justify-center items-center p-2">
                          <div>
                            <p>$100</p>
                          </div>
                          <div>
                            <p>Fecha</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-between">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Face2.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Nombre</p>
                          </div>
                        </button>
                        <div className="flex flex-col justify-center items-center p-2">
                          <div>
                            <p>$100</p>
                          </div>
                          <div>
                            <p>Fecha</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* EMPLEADOS */}
              <div className="p-2 rounded-md  shadow-md shadow-gray-800 w-full md:w-96">
                <div className="flex justify-between p-5">
                  <h1>Mis empleados</h1>
                  <a href="">Ver Todo</a>
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Employee1.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Puesto</p>
                          </div>
                        </button>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Employee2.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Puesto</p>
                          </div>
                        </button>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <button className="flex items-center gap-3">
                          <img
                            src="/Employee3.jpg"
                            alt=""
                            className="border w-16 h-16 rounded-full"
                          />
                          <div className="text-center">
                            <p>Nombre</p>
                            <p>Puesto</p>
                          </div>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-2 rounded-md  shadow-md shadow-gray-800 w-full md:w-96">
                <div className="flex justify-between p-5">
                  <h1>Resumen de gastos</h1>
                  <a href="">Ver Todo</a>
                </div>
                <div className="p-2">
                  <ul className="flex flex-col gap-2">
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <div className="text-center">
                          <p>Gastos</p>
                          <p>Enero</p>
                        </div>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <div className="text-center">
                          <p>Gastos</p>
                          <p>Diciembre</p>
                        </div>
                      </div>
                    </li>
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center">
                        <div className="text-center">
                          <p>Gastos</p>
                          <p>Noviembre</p>
                        </div>
                      </div>
                    </li>
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
