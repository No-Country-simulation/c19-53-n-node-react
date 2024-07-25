import React from "react";

const BlackCard = ({ title, img, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 rounded-2xl p-10 bg-black">
      <div className="flex flex-col gap-5 md:w-1/2">
        <div className="text-center text-white">
          <h3 className="font-thin text-2xl">{title}</h3>
        </div>
        <div className="w-70 h-70 ">
          <img className="rounded-2xl" src={img} alt="" />
        </div>
      </div>
      <div className="text-justify text-balance md:w-1/2 text-white">
        <p className="font-thin text-xs">{description}</p>
      </div>
    </div>
  );
};

export default BlackCard;
