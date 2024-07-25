import React from "react";

const ClientCard = ({ img, description, name, role, coName }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3   rounded-2xl p-10 bg-gray-950">
      <div className="w-40 h-40 ">
        <img className="rounded-full" src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col gap-3 text-balance text-justify w-60 text-white">
          <p className="font-thin text-xs ">"{description}"</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="font-thin text-xs">{name}</p>
          </div>
          <div>
            <p className="font-thin text-xs">{role}</p>
          </div>
          <div className="text-center w-60 text-white">
            <h3 className="font-thin text-sm">{coName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
