import React from "react";

function Button({ children, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 mt-10 bg-gray-800 rounded-sm
              font-medium text-white uppercase
              focus:outline-none hover:bg-gray-700 hover:shadow-none"
    >
      {children}
    </button>
  );
}

export default Button;
