import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PrivacyModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Política de Privacidad"
      className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-8"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">1. Introducción</h2>
          <p className="text-sm">
            En JustPay, nos comprometemos a proteger su privacidad y a gestionar sus datos personales de manera abierta y transparente. Esta política de privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos su información personal.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">2. Información que Recopilamos</h2>
          <p className="text-sm">Podemos recopilar y procesar los siguientes datos sobre usted:</p>
          <p className="text-sm"><strong>Información de registro:</strong> nombre, dirección de correo electrónico, número de identificación, y contraseña.</p>
          <p className="text-sm"><strong>Información de transacciones:</strong> detalles de las transacciones que realice a través de nuestra aplicación.</p>
          <p className="text-sm"><strong>Información técnica:</strong> dirección IP, tipo de navegador, y datos sobre su dispositivo y uso de la aplicación.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">3. Uso de la Información</h2>
          <p className="text-sm">Utilizamos la información que recopilamos para los siguientes propósitos:</p>
          <p className="text-sm"><strong>Proveer y mejorar nuestros servicios:</strong> Para operar, mantener y mejorar nuestra aplicación y sus servicios.</p>
          <p className="text-sm"><strong>Seguridad:</strong> Para proteger su cuenta y nuestras operaciones contra fraudes, accesos no autorizados, y otros riesgos de seguridad.</p>
          <p className="text-sm"><strong>Comunicaciones:</strong> Para enviarle notificaciones y actualizaciones relacionadas con su cuenta y nuestros servicios.</p>
          <p className="text-sm"><strong>Cumplimiento legal:</strong> Para cumplir con nuestras obligaciones legales y regulatorias.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">4. Compartir su Información</h2>
          <p className="text-sm">Podemos compartir su información personal con:</p>
          <p className="text-sm"><strong>Proveedores de servicios:</strong> Terceros que nos proporcionan servicios relacionados con el funcionamiento de nuestra aplicación, como servicios de hospedaje y procesamiento de pagos.</p>
          <p className="text-sm"><strong>Autoridades legales:</strong> Si estamos obligados a divulgar su información para cumplir con cualquier obligación legal o para proteger los derechos, propiedad o seguridad de JustPay, nuestros usuarios, u otros.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">5. Seguridad de la Información</h2>
          <p className="text-sm">Nos comprometemos a proteger su información personal utilizando medidas de seguridad adecuadas para prevenir el acceso no autorizado, la divulgación, la alteración o la destrucción de sus datos personales.</p>
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

export default PrivacyModal;