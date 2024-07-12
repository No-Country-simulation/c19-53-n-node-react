export default function TermsAgree() {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center w-72 text-justify gap-3">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-violet-500 focus:ring-violet-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-gray-900">
            Acepto los{" "}
            <a href="#" className="text-indigo-600">
              Términos y Condiciones
            </a>
            {""} y autorizo el uso de mis datos de acuerdo a las{" "}
            <a href="#" className="text-indigo-600">
              Política de Privacidad
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
