import React from "react";

const LinkCards = ({ route, description, icon }) => {
  return (
    <div>
      <a href={route}>
        <div className="text-white bg-slate-800 p-5 rounded-lg hover:bg-slate-600 flex flex-col justify-center items-center gap-4">
          <div>
            <h1>{description}</h1>
          </div>
          <div>{icon}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkCards;
