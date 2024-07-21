import React from "react";
import HomeIcon from "./assets/HomeIcon";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../context/testContext";
import { Link } from "react-router-dom";

const AdminListUsers = () => {
  const [users, setUsers] = useState([]);
  const { getUsers, deleteUser } = useContext(TestContext);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center h-screen">
      <div className="p-5 flex flex-col justify-center items-center gap-2 ">
        <a href="/admin/home">
          <HomeIcon width="30" height="30" color="#ffffff" />
        </a>
        <h1 className="text-slate-50 text-xl font-bold-white">
          Eliminar usuario
        </h1>
      </div>
      <div className="flex flex-col bg-slate-950 ">
        <div className="py-2 inline-block  ">
          <table>
            <thead className="bg-slate-600 border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                  Id
                </th>

                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="text-sm  font-medium text-white px-6 py-4  text-left"
                ></th>
                <th
                  scope="col"
                  className="text-sm  font-medium text-white px-6 py-4  text-left"
                ></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.document} className="bg-gray-100 ">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.document}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td>
                    <Link to={`/admin/${user._id}`} className="p-5">
                      Editar
                    </Link>
                  </td>
                  <button
                    className="p-5"
                    onClick={async () => {
                      try {
                        const res = await deleteUser(user._id);
                        alert("Usuario eliminado exitosamente");
                        if (res.status === 200) {
                          setUsers(users.filter((u) => u._id !== user._id));
                        }
                      } catch (error) {
                        // const res = await getUsers();
                        // setUsers(res.data);

                        console.error(error);
                        alert("Error al eliminar usuario");
                      }
                    }}
                  >
                    Eliminar
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminListUsers;
