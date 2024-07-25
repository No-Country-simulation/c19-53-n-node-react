import React from "react";
import ClientCard from "./components/ClientCard";
import Hero from "./components/Hero";
import Titles from "./components/Titles";
import BlackCard from "./components/BlackCard";
import VioletCard from "./components/VioletCard";
import LandingNavBar from "./components/LandingNavBar";
import HelpForm from "./components/HelpForm";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <>
      <div>
        {/* Nav */}
        <LandingNavBar />

        {/* Hero */}
        <Hero />

        {/* SECTION 1 */}
        <div className="flex flex-col py-10">
          <Titles
            description={"Hecha un vistazo a algunos de nuestros beneficios..."}
          />

          <div className="flex flex-col gap-5 p-10 ">
            <VioletCard
              title={"Transferencias donde quieras y cuando quieras..."}
              img={"/LandingImg1.jpg"}
              description={
                "Con JustPay, realizar pagos nunca ha sido tan fácil y conveniente. Nuestra aplicación te permite efectuar pagos de manera segura y rápida desde cualquier lugar donde te encuentres. Ya sea que estés en la oficina, en casa o de viaje, JustPay te ofrece la flexibilidad de gestionar tus transacciones sin complicaciones. Simplifica tu vida financiera y mantén el control de tus pagos en todo momento con JustPay. ¡Descárgala ahora y experimenta la libertad de pagar desde donde quieras!"
              }
            />

            <BlackCard
              title={"Transparencia y confiabilidad para tus empleados..."}
              img={"/LandingImg2.jpg"}
              description={
                "Mantener a los empleados informados sobre sus salarios es crucial para fomentar la transparencia y la confianza dentro de una empresa. Una comunicación clara y regular sobre las remuneraciones ayuda a reducir la incertidumbre y aumenta la satisfacción laboral. Con JustPay, tu empresa puede gestionar y comunicar fácilmente la información salarial, garantizando que cada empleado esté al tanto de sus compensaciones en tiempo real. Simplifica la administración de sueldos y mejora la transparencia con JustPay. ¡Descárgala hoy y transforma la gestión salarial en tu empresa!."
              }
            />
            <VioletCard
              title={
                "Manten tus finanzas claras y ordenadas en un solo lugar..."
              }
              img={"/LandingImg3.jpg"}
              description={
                "JustPay es tu aliado perfecto para mantener el orden en tus cuentas y finanzas. Con nuestra aplicación, puedes gestionar todas tus transacciones en un solo lugar, facilitando el seguimiento de tus ingresos y gastos. JustPay te ofrece herramientas intuitivas para categorizar tus pagos, establecer recordatorios y generar informes detallados. Mantén tus finanzas organizadas y toma decisiones informadas con facilidad. Simplifica tu vida financiera y alcanza tus metas con JustPay. ¡Descárgala hoy y lleva el control de tus finanzas al siguiente nivel!"
              }
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-black text-white flex flex-col py-10 ">
          <Titles
            description={"Las mejores empresas avalan nuestros servicios..."}
          />

          {/* Cards */}
          <div className="flex flex-col gap-5 p-10 justify-center items-center md:flex-row">
            <ClientCard
              img={"/Face1.jpg"}
              description={
                "Desde que implementamos 'JustPay' en TechSolutions Inc., la gestión de pagos ha sido mucho más eficiente. La transparencia y el control que ofrece nos han permitido mejorar significativamente nuestros procesos financieros."
              }
              name={"John Doe"}
              role={"CEO"}
              coName={"TechSolutions Inc"}
            />
            <ClientCard
              img={"/Face2.jpg"}
              description={
                "Con 'JustPay', puedo realizar pagos y mantener el orden de nuestras cuentas desde cualquier lugar. Esta flexibilidad es esencial para mi rol en Innovatech Ltd., y la facilidad de uso de la app ha superado nuestras expectativas"
              }
              name={"Jane Smith"}
              role={"Directora Financiera"}
              coName={"Innovatech Ltd"}
            />
            <ClientCard
              img={"public/Face3.jpg"}
              description={
                "La claridad y transparencia que 'JustPay' proporciona a nuestros empleados sobre sus salarios ha mejorado notablemente la satisfacción laboral en NextGen Enterprises. La aplicación es una herramienta indispensable para nuestra gestión de sueldos."
              }
              name={"Lucía Gómez"}
              role={"Jefa de Recursos Humanos"}
              coName={"NextGen Enterprises"}
            />
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="flex flex-col py-10">
          <Titles
            description={
              "¿Tienes dudas, consultas o una recomendación? ¡Contáctanos!"
            }
          />
          <div>
            <HelpForm />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
