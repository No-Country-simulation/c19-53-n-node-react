import React, { useContext, useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import NotificationsBell from "../assets/svg/NotificationsBell";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import ConfirmationButton from "../components/ConfirmationButton";
import { useParams } from "react-router-dom";
import TransferIcon from "../assets/svg/TransferIcon";
import { TestContext } from "../../context/testContext";
import Swal from "sweetalert2";

const CreateTransaction = () => {
  const {id } = useParams();
  const { getEmployees, company } = useContext(TestContext)
  const [ employee, setEmployee ] = useState(null)
  const [monto, setMonto] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployee = async () => {
      const response = await getEmployees(company._id);
      const employees = response.data
      const foundEmployee = employees.find((emp) => emp._id === id);
      setEmployee(foundEmployee);
    };
    if (company) {
      loadEmployee();
    }
  }, [id, company])

  if (!employee) return <p>Cargando...</p>

  const handleTransaction = async () => {
    try {
      const response = await axios.post(
        `/api/transaction/${company._id}/${employee._id}`, 
        { monto: parseFloat(monto) } // Asegúrate de enviar 'monto' como número
      );
      if (response.status === 201) {
        navigate(`/checkin/${employee._id}`, { state: { employee, monto, fecha: new Date().toISOString() } });
      }
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 400) {
        Swal.fire("Error", error.response.data.message || "Error al realizar la transacción", "error");
      }
    }
  };


  return (
    <>
      <div>
        <div className="bg-violet-500 h-screen w-full flex flex-col justify-center rounded-b-lg md:pt-8">
          {/* AVATAR */}

          {/* EMPLEADOS */}
          <div className="flex justify-center  md:mt-0 text-white ">
            <div className="bg-violet-500 w-full  h-full flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                <div className="text-center flex flex-col justify-center items-center gap-8">
                  <div className="flex flex-col font-thin text-sm justify-center items-center ">
                    <div className="flex flex-col justify-center items-center p-2">
                      <TransferIcon width="50" height="50" color="white" />
                      <h1 className="font-thin text-xl">Vas a transferir a:</h1>
                    </div>

                    <img
                      className="border w-16 h-16 rounded-full"
                      src={employee.image || '/Employee1.jpg'}
                      alt={employee.name}
                    />
                    <p className="text-white">{employee.name}</p>
                    <p className="text-white">{employee.bank}</p>
                    <p className="text-white">{employee.CBU}</p>
                  </div>

                  <input
                    type="number"
                    placeholder={"Ingresa el monto a transferir"}
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    required
                    className="block w-72 rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                  />
                  
                    <ConfirmationButton name="Transferir" action="submit" onClick={ handleTransaction} />
                  
                </div>
              </div>
            </div>
          </div>
          {/* BAR */}
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default CreateTransaction;
