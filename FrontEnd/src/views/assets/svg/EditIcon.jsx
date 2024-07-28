import React from "react";

const EditIcon = ({ width, height, color }) => {
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
        d="M7.5 2.75H16.5C18.0188 2.75 19.25 3.98122 19.25 5.5V18.5C19.25 20.0188 18.0188 21.25 16.5 21.25H7.5C5.98122 21.25 4.75 20.0188 4.75 18.5V5.5C4.75 3.98122 5.98122 2.75 7.5 2.75ZM4 5.5C4 3.567 5.567 2 7.5 2H16.5C18.433 2 20 3.567 20 5.5V18.5C20 20.433 18.433 22 16.5 22H7.5C5.567 22 4 20.433 4 18.5V5.5ZM8 7.5625C7.79289 7.5625 7.625 7.73039 7.625 7.9375C7.625 8.14461 7.79289 8.3125 8 8.3125H16.0625C16.2696 8.3125 16.4375 8.14461 16.4375 7.9375C16.4375 7.73039 16.2696 7.5625 16.0625 7.5625H8ZM8 11.6875C7.79289 11.6875 7.625 11.8554 7.625 12.0625C7.625 12.2696 7.79289 12.4375 8 12.4375H12.125C12.3321 12.4375 12.5 12.2696 12.5 12.0625C12.5 11.8554 12.3321 11.6875 12.125 11.6875H8ZM8 15.6875C7.79289 15.6875 7.625 15.8554 7.625 16.0625C7.625 16.2696 7.79289 16.4375 8 16.4375H15C15.2071 16.4375 15.375 16.2696 15.375 16.0625C15.375 15.8554 15.2071 15.6875 15 15.6875H8Z"
        fill={color}
      />
    </svg>
  );
};

export default EditIcon;
