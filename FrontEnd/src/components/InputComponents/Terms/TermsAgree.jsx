import React from "react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

export default function TermsAgree({ register, errors }) {
  const [isTermsModalOpen, setTermsModalOpen] = React.useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = React.useState(false);

  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center w-72 text-justify gap-3">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-violet-500 focus:ring-violet-500 border-gray-300 rounded"
            {...register("terms", { required: true })}
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-gray-900">
            Acepto los{" "}
            <a href="##" className="text-indigo-600" onClick={() => setTermsModalOpen(true)}>
              Términos y Condiciones
            </a>
            {""} y autorizo el uso de mis datos de acuerdo a las{" "}
            <a href="#" className="text-indigo-600" onClick={() => setPrivacyModalOpen(true)}>
              Política de Privacidad
            </a>
          </label>
        </div>
      </div>
      {errors.terms && <span className="text-red-500 text-sm">Debe aceptar los términos y condiciones</span>}
      <TermsModal isOpen={isTermsModalOpen} onRequestClose={() => setTermsModalOpen(false)} />
      <PrivacyModal isOpen={isPrivacyModalOpen} onRequestClose={() => setPrivacyModalOpen(false)} />
    </div>
  );
}