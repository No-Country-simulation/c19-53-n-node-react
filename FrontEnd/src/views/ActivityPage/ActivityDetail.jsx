import React from "react";
import BottomBar from "../components/BottomBar";
import EditIcon from "../assets/svg/EditIcon";
import ActivityIcon from "../assets/svg/ActivityIcon";
import ReturnIcon from "../assets/svg/ReturnIcon";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const ActivityDetail = () => {
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
          <div className="bg-slate-200 flex flex-col justify-center h-screen w-full rounded-b-lg font-normal">
            <div className="flex justify-center mt-3 md:mt-0  ">
              <div className="bg-slate-200 w-full h-96   flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                  <div className="text-center flex flex-col justify-center items-center gap-8">
                    <div className="flex justify-center items-center gap-6">
                      {" "}
                      <ActivityIcon width="50" height="50" color="black" />
                      <div>
                        <h1>Datos de la transacción</h1>
                      </div>
                    </div>

                    <div className="flex  text-sm justify-center items-center gap-10">
                      <img
                        className="border w-32 h-25 rounded-full"
                        src={filteredEmployees.image}
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <p>Receptor: {filteredEmployees.name}</p>
                        <p>Monto: $10000</p>
                        <p>Banco: {filteredEmployees.bank}</p>
                        <p>CBU: {filteredEmployees.CBU}</p>
                        <p>Fecha: 12/12/2021</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10">
                        <Link
                          to={`/activity`}
                          className=" flex flex-col justify-center items-center"
                        >
                          <ReturnIcon width="30" height="30" color="black" />
                          <p>Volver</p>
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

export default ActivityDetail;
