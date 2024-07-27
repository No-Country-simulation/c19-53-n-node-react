import React from "react";

const EmployeesIcon = ({ width, height, color }) => {
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
        d="M16.25 7C16.25 9.34721 14.3472 11.25 12 11.25C9.65279 11.25 7.75 9.34721 7.75 7C7.75 4.65279 9.65279 2.75 12 2.75C14.3472 2.75 16.25 4.65279 16.25 7ZM17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM2.75 17.5C2.75 15.9812 3.98122 14.75 5.5 14.75H18.5C20.0188 14.75 21.25 15.9812 21.25 17.5V20C21.25 20.6904 20.6904 21.25 20 21.25H4C3.30964 21.25 2.75 20.6904 2.75 20V17.5ZM2 17.5C2 15.567 3.567 14 5.5 14H18.5C20.433 14 22 15.567 22 17.5V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V17.5Z"
        fill={color}
      />
    </svg>
  );
};

export default EmployeesIcon;
