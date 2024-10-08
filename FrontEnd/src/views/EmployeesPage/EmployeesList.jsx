import React from "react";
import BottomBar from "../components/BottomBar";
import TransferIcon from "../assets/svg/TransferIcon";
import EditIcon from "../assets/svg/EditIcon";
import EmployeesIcon from "../assets/svg/EmployeesIcon";
import { Link } from "react-router-dom";
import AddIcon from "../TransactionsPage/AddIcon";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/testContext";

const EmployeesList = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  const { company, getEmployees } = useContext(TestContext);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (company?._id) {
      getEmployees(company._id).then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      });
    } else {
      console.log("No company");
    }
  }, [company]);

  console.log(employees);

  const Employees = employees;

  return (
    <>
      <div>
        <div>
          <div className="bg-black h-screen w-full pt-16">
            <div className="flex justify-center mt-3 md:mt-0 text-white ">
              <div className="bg-black w-full   flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center">
                    <EmployeesIcon width="50" height="50" color="white" />
                    <h1 className="font-thin text-xl">Mis Empleados</h1>
                    <p className="font-thin text-xs">
                      Consulta los datos de tus empleados
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="  flex flex-col gap-4 md:flex-row justify-center  bg-black">
              <div className="p-2 rounded-md   w-full md:w-3/5">
                {/* AGREGAR EMPLEADOS */}
                <div className="p-2 bg-black text-white pt-5">
                  <ul className="flex flex-col gap-2">
                    <li className="border rounded-md p-2">
                      <div className="flex justify-center w-full">
                        <Link
                          to={"/addemployee"}
                          className="flex items-center justify-between gap-3 w-full"
                        >
                          <EmployeesIcon width="50" height="50" color="white" />
                          <div className="flex justify-center items-center gap-5 p-2">
                            <div className="text-center">
                              <p> Agregar nuevo empleado</p>
                            </div>
                            <div>
                              <AddIcon width="40" height="40" color="white" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    {/* LISTA DE EMPLEADOS */}
                    {Employees &&
                      Employees.map((employee) => (
                        <li
                          key={employee._id}
                          className="border rounded-md p-2"
                        >
                          <div className="flex justify-center w-full">
                            <Link
                              to={`/employeeprofile/${employee._id}`}
                              className="flex items-center justify-between gap-3 w-full"
                            >
                              <img
                                src={employee.profileImage}
                                alt=""
                                className="border w-16 h-16 rounded-full"
                              />
                              <div className="flex justify-center items-center gap-5 p-2">
                                <div className="text-center">
                                  <p>{employee.name}</p>
                                </div>
                                <Link to={`/editemployee/${employee._id}`}>
                                  <EditIcon
                                    width="40"
                                    height="40"
                                    color="white"
                                  />
                                </Link>

                                <Link to={`/createtransaction/${employee._id}`}>
                                  <TransferIcon
                                    width="40"
                                    height="40"
                                    color="white"
                                  />
                                </Link>
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

export default EmployeesList;
