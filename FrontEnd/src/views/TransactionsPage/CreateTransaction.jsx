import React from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";

import { Link } from "react-router-dom";
import ConfirmationButton from "../components/ConfirmationButton";
import { useParams } from "react-router-dom";
import TransferIcon from "../assets/svg/TransferIcon";

const CreateTransaction = () => {
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
          <div className="bg-violet-500 h-60 w-full rounded-b-lg">
            {/* AVATAR */}
            <div className="flex justify-end p-4">
              <button className="md:pr-20">
                <NotificationsBell width="30" height="30" color="white" />
              </button>
            </div>
            {/* EMPLEADOS */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-violet-500 w-full h-96   flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col font-thin text-sm justify-center items-center ">
                      <div className="flex flex-col justify-center items-center p-2">
                        <TransferIcon width="50" height="50" color="white" />
                        <h1 className="font-thin text-xl">
                          Vas a transferir a:
                        </h1>
                      </div>

                      <img
                        className="border w-16 h-16 rounded-full"
                        src={filteredEmployees.image}
                        alt=""
                      />
                      <p className="text-white">{filteredEmployees.name}</p>
                      <p className="text-white">{filteredEmployees.bank}</p>
                      <p className="text-white">{filteredEmployees.CBU}</p>
                    </div>

                    <input
                      type="number"
                      placeholder={"Ingresa el monto a transferir"}
                      onChange={(e) => console.log(e.target.value)}
                      required
                      className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                    />
                    <Link to={`/checkin/${filteredEmployees.id}`}>
                      <ConfirmationButton name="Transferir" action="submit" />
                    </Link>
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

export default CreateTransaction;
