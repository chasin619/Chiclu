import React from "react";

interface ButtonProps {
  title: string;
  customStyles: string;
}

const Button: React.FC<ButtonProps> = ({ title, customStyles }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#d89954] to-[#e8994d] text-white py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 ${customStyles}`}
    >
      {title}
    </button>
  );
};

export default Button;
