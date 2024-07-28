import React from "react";
import BottomBar from "../components/BottomBar";
import CancelDeleteIcon from "../assets/svg/CancelDeleteIcon";
import EditIcon from "../assets/svg/EditIcon";
import TransferIcon from "../assets/svg/TransferIcon";
import ProfileIcon from "../assets/svg/ProfileIcon";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const EmployeeProfile = () => {
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
          <div className="bg-black h-60 w-full rounded-b-lg">
            {/* AVATAR */}
            <div className="flex justify-end p-4">
              <button className="md:pr-20"></button>
            </div>
            {/* EMPLEADOS */}
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-black w-full h-96   flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center gap-8">
                    <div className="flex justify-center items-center gap-6">
                      {" "}
                      <ProfileIcon width="50" height="50" color="white" />
                      <div>{filteredEmployees.name}</div>
                    </div>

                    <div className="flex  font-thin text-sm justify-center items-center gap-10">
                      <img
                        className="border w-32 h-25 rounded-full"
                        src={filteredEmployees.image}
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-white">
                          Cargo: {filteredEmployees.position}
                        </p>
                        <p className="text-white">
                          Identificación: {filteredEmployees.document}
                        </p>
                        <p className="text-white">
                          Banco: {filteredEmployees.bank}
                        </p>
                        <p className="text-white">
                          CBU: {filteredEmployees.CBU}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10">
                        <Link
                          to="/edit-employee"
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <EditIcon width="30" height="30" color="white" />
                          <p>Editar</p>
                        </Link>
                        <Link className="font-thin flex flex-col justify-center items-center">
                          <CancelDeleteIcon
                            width="30"
                            height="30"
                            color="white"
                          />
                          <p>Eliminar</p>
                        </Link>
                        <Link
                          to={`/createtransaction/${filteredEmployees.id}`}
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <TransferIcon width="30" height="30" color="white" />
                          <p>Transferir</p>
                        </Link>
                      </div>
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

export default EmployeeProfile;
