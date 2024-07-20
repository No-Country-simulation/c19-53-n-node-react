import React from "react";
import HomeIcon from "./assets/HomeIcon";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../context/testContext";

const AdminListUsers = () => {
  const [users, setUsers] = useState([]);
  const { getUsers } = useContext(TestContext);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center ">
      <div className="p-5 flex flex-col justify-center items-center gap-2 ">
        <a href="/admin/home">
          <HomeIcon width="30" height="30" color="#ffffff" />
        </a>
        <h1 className="text-slate-50 text-xl font-bold-white">
          Lista de Usuarios
        </h1>
      </div>
      <div className="flex flex-col bg-slate-950 ">
        {/* <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 "> */}
        <div className="py-2 inline-block  ">
          <table>
            <thead className="bg-slate-600 border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4 text-left"
                >
                  ID
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
