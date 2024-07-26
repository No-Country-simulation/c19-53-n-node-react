import React from "react";
import HomeIcon from "../assets/HomeIcon";
import EmployeesIcon from "../assets/EmployeesIcon";
import ConfigIcon from "../assets/ConfigIcon";
import StatsIcon from "../assets/StatsIcon";

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
            class="w-full focus:text-white hover:text-violet-800 justify-center inline-block text-center pt-2 pb-2"
          >
            <div className="flex justify-center items-center">
              <HomeIcon width="40" height="40" color={"white"} />
            </div>

            <span class="tab tab-explore text-white block text-xs">Inicio</span>
          </a>
          <a
            href="#"
            class="w-full focus:text-violet-800 hover:text-violet-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <div className="flex justify-center items-center">
              <EmployeesIcon width="40" height="40" color={"white"} />
            </div>
            <span class="tab tab-kategori block text-xs text-white">
              Mis Empleados
            </span>
          </a>

          <a
            href="#"
            class="w-full focus:text-violet-800 hover:text-violet-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <div className="flex justify-center items-center">
              <StatsIcon width="40" height="40" color={"white"} />
            </div>
            <span class="tab tab-whishlist block text-xs text-white">
              Estadisticas
            </span>
          </a>
          <a
            href="#"
            class="w-full focus:text-violet-800 hover:text-violet-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <div className="flex justify-center items-center">
              <ConfigIcon width="40" height="40" color={"white"} />
            </div>
            <span class="tab tab-account block text-xs text-white">
              Ajustes
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BottomBar;
