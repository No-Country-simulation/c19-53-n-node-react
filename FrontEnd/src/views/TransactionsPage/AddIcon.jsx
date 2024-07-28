import React from "react";

const AddIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.1875C12.2071 3.1875 12.375 3.35539 12.375 3.5625V11.625H20.4375C20.6446 11.625 20.8125 11.7929 20.8125 12C20.8125 12.2071 20.6446 12.375 20.4375 12.375H12.375V20.4375C12.375 20.6446 12.2071 20.8125 12 20.8125C11.7929 20.8125 11.625 20.6446 11.625 20.4375V12.375H3.5625C3.35539 12.375 3.1875 12.2071 3.1875 12C3.1875 11.7929 3.35539 11.625 3.5625 11.625H11.625V3.5625C11.625 3.35539 11.7929 3.1875 12 3.1875Z"
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;
