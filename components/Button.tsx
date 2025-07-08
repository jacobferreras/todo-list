import React from "react";

interface ButtonProps {
  onClick?: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        Add
      </button>
    </div>
  );
};

export default Button;
