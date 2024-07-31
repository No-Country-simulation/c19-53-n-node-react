import React from "react";
import HomeIcon from "../assets/svg/HomeIcon";
import EmployeesIcon from "../assets/svg/EmployeesIcon";
import StatsIcon from "../assets/svg/StatsIcon";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="h-16">
      <section
        id="bottom-navigation"
        class="block fixed inset-x-0 bottom-0 z-10 bg-black shadow"
      >
        <div id="tabs" class="flex justify-between">
          <a
            href="#"
            class="w-full focus:text-violet-800 hover:text-violet-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <div className="flex justify-center items-center">
              <Link to={"/employeelist"}>
                <EmployeesIcon width="40" height="40" color={"white"} />
              </Link>
            </div>
            <span class="tab tab-kategori block text-xs text-white">
              Mis Empleados
            </span>
          </a>
          <a
            href="#"
            class="w-full focus:text-white hover:text-violet-800 justify-center inline-block text-center pt-2 pb-2"
          >
            <Link to={"/home"}>
              <div className="flex justify-center items-center">
                <HomeIcon width="40" height="40" color={"white"} />
              </div>
            </Link>
            <span class="tab tab-explore text-white block text-xs">Inicio</span>
          </a>
          <a
            href="#"
            class="w-full focus:text-violet-800 hover:text-violet-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <Link to={"/activity"}>
              <div className="flex justify-center items-center">
                <StatsIcon width="40" height="40" color={"white"} />
              </div>
              <span class="tab tab-whishlist block text-xs text-white">
                Mi Actividad
              </span>
            </Link>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BottomBar;
