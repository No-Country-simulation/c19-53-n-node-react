import { IoIosArrowForward } from "react-icons/io";


function MoneyButton({ amount }) {
    const [integerPart, decimalPart] = amount.split(',');

    return (
       <button className="bg-white hover:bg-violet-200 text-zinc-700 font-bold w-96 h-24 rounded-lg flex flex-col shadow-lg">
            <h1 className="ml-5 mt-3 mb-2 text-gray-500">Dinero Disponible </h1>
            <div className="flex  ml-5">
                <span className="text-3xl mr-1">$ </span>
                <span className="text-3xl">{ integerPart }</span>
                <span className="text-xl flex align-top">{decimalPart}</span>
                <IoIosArrowForward className="ml-48 mt-1 w-6 h-6"/>
            </div>
        </button>

    );
}

export default MoneyButton;