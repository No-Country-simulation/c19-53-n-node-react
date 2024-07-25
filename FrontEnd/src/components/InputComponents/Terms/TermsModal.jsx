import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const TermsModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Términos y Condiciones"
      className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-8"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">1. Aceptación de los Términos</h2>
          <p className="text-sm">Al acceder y utilizar nuestra aplicación JusPay, usted acepta y está de acuerdo con los siguientes términos y condiciones. Si no está de acuerdo con estos términos, por favor, no utilice nuestra aplicación.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">2. Uso de la Aplicación</h2>
          <p className="text-sm">Nuestra aplicación permite a los usuarios gestionar sus finanzas y realizar transacciones financieras. Usted acepta utilizar la aplicación de manera responsable y conforme a la ley.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">3. Registro y Seguridad</h2>
          <p className="text-sm">Para utilizar ciertos servicios de nuestra aplicación, es posible que deba registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de cuenta y contraseña, y de todas las actividades que ocurran bajo su cuenta.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">4. Privacidad</h2>
          <p className="text-sm">Nos comprometemos a proteger su privacidad. Por favor, revise nuestra Política de Privacidad para obtener más información sobre cómo recopilamos, usamos y protegemos su información personal.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">5. Transacciones Financieras</h2>
          <p className="text-sm">Usted es responsable de todas las transacciones que realice a través de nuestra aplicación. Nos reservamos el derecho de rechazar o cancelar cualquier transacción que consideremos fraudulenta, ilegal o que viole nuestros términos y condiciones.</p>
        </div>
      </div>
      <button
        onClick={onRequestClose}
        className="mt-6 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default TermsModal;