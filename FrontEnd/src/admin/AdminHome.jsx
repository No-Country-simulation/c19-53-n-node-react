import React from "react";
import { useNavigate } from "react-router-dom"; // Cambiado de Link a useNavigate
import { ROUTES } from "../Helpers/RoutesPath";
import AdduserIcon from "./assets/AdduserIcon";
import LinkCards from "./components/LinkCards";
import ListUsersIcon from "./assets/ListUsersIcon";
import EditUsersIcon from "./assets/EditUsersIcon";
import DeleteUsersIcon from "./assets/DeleteUsersIcon";

const AdminHome = () => {
  return (
    <div className="bg-slate-950 flex flex-col h-screen justify-center items-center ">
      <div>
        <h1 className="text-white text-4xl text-center font-bold mb-10">
          Administrador
        </h1>
        <p className="text-white text-center font-bold mb-10">
          Elige la funcion que deseas realizar
        </p>
      </div>
      <div className="flex gap-5">
        <LinkCards
          route={ROUTES.ADMIN_NEW_USER}
          description={"Agregar Usuario"}
          icon={
            <AdduserIcon color={"#ffffff"} height={"70px"} width={"70px"} />
          }
        />
        <LinkCards
          route={ROUTES.ADMIN_USERS_LIST}
          description={"Lista de Usuarios"}
          icon={
            <ListUsersIcon color={"#ffffff"} height={"70px"} width={"70px"} />
          }
        />
        <LinkCards
          route={ROUTES.ADMIN_EDIT_USER}
          description={"Editar Usuarios"}
          icon={
            <EditUsersIcon color={"#ffffff"} height={"70px"} width={"70px"} />
          }
        />
      </div>
      <div className="flex gap-5 mt-10">
        <LinkCards
          route={ROUTES.ADMIN_DELETE_USER}
          description={"Eliminar Usuarios"}
          icon={
            <DeleteUsersIcon color={"#ffffff"} height={"70px"} width={"70px"} />
          }
        />
      </div>
    </div>
  );
};

export default AdminHome;
