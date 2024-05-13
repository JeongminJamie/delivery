import React from "react";
import "./Header.css";

const Header = ({ totalQuantity, setIsCartOpen }) => {
  const cartClickHandler = () => {
    setIsCartOpen(true);
  };
  return (
    <div className="header" onClick={cartClickHandler}>
      <div>Delivery App</div>
      <button>
        장바구니<div>{totalQuantity}</div>
      </button>
    </div>
  );
};

export default Header;
