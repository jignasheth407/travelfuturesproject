import React from "react";

const Card = ({ shadow, color, children, rounded, classes, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`shadow-${shadow} ${
        color === undefined && "bg-white"
      } bg-${color}-50  rounded-${rounded} ${classes}`}
    >
      {children}
    </div>
  );
};
export default Card;
