import React from "react";

const LeftSideImgCard = ({ description, img, imgName, title }) => {
  return (
    <div className=" flex justify-center items-center p-9">
      <div className=" flex justify-center items-center gap-40 p-9 rounded-lg shadow-lg bg-violet-200">
        <div className=" w-64 h-64 ">
          <img
            className=" bg-no-repeat bg-cover rounded-md"
            src={img}
            alt={imgName}
          />
        </div>
        <div className=" w-96 h-72 rounded-md text-center flex flex-col justify-center items-center gap-3">
          <h1 className="font-thin text-3xl">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideImgCard;
