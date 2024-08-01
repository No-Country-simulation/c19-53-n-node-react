import React from "react";
import BottomBar from "../components/BottomBar";
import CancelDeleteIcon from "../assets/svg/CancelDeleteIcon";
import EditIcon from "../assets/svg/EditIcon";
import TransferIcon from "../assets/svg/TransferIcon";
import ProfileIcon from "../assets/svg/ProfileIcon";
import ReturnIcon from "../assets/svg/ReturnIcon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/testContext";
import { useParams } from "react-router-dom";

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [user, setUser] = useState({});
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  const { getUserById, deleteUser } = context;

  useEffect(() => {
    async function loadUser() {
      if (param.id) {
        const currentUser = await getUserById(param.id);
        console.log(currentUser.data);
        setUser(currentUser.data);
      }
    }

    loadUser();
  }, []);

  console.log(user);

  return (
    <>
      <div>
        <div>
          <div className="bg-black flex flex-col justify-center h-screen w-full rounded-b-lg">
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
                      <div>{user.name}</div>
                    </div>

                    <div className="flex  font-thin text-sm justify-center items-center gap-10">
                      <img
                        className="border w-32 h-25 rounded-full"
                        src="/Face1.jpg" //CAMBIAR
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-white">Cargo: {user.role}</p>
                        <p className="text-white">
                          Identificación:{user.document}
                        </p>
                        <p className="text-white">Email: {user.email}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10">
                        <Link
                          to={`/editemployee/${param.id}`}
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <EditIcon width="30" height="30" color="white" />
                          <p>Editar</p>
                        </Link>

                        <button
                          onClick={async () => {
                            try {
                              const res = await deleteUser(param.id);
                              if (res.status === 200) {
                                alert("Usuario eliminado exitosamente");
                                navigate("/employeelist");
                              }
                            } catch (error) {
                              // const res = await getUsers();
                              // setUsers(res.data);

                              console.error(error);
                              alert("Error al eliminar usuario");
                            }
                          }}
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <CancelDeleteIcon
                            width="30"
                            height="30"
                            color="white"
                          />
                          <p>Eliminar</p>
                        </button>

                        <Link
                          to={`/createtransaction/${param.id}`}
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <TransferIcon width="30" height="30" color="white" />
                          <p>Transferir</p>
                        </Link>
                        <Link
                          to={`/employeelist`}
                          className="font-thin flex flex-col justify-center items-center"
                        >
                          <ReturnIcon width="30" height="30" color="white" />
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

export default EmployeeProfile;
