import React from "react";
import "./ModalFood.css";
import useCalculate from "../../hooks/useCalculate";

const ModalFood = ({ id, name, price, quantity, setFoodList }) => {
  const { addQuantity, subtractQuantity } = useCalculate(setFoodList);

  const subtractClickHandler = () => {
    subtractQuantity(id, 1);
  };

  const addClickHandler = () => {
    addQuantity(id, 1);
  };

  return (
    <div className="cart-food">
      <div className="cart-food-info">
        <div>{name}</div>
        <div className="info-price-quantity">
          <div>{price.toLocaleString()}원 x</div>
          <div className="info-quantity">{quantity}</div>
        </div>
      </div>
      <div className="cart-food__buttons">
        <div className="buttons-subtract" onClick={subtractClickHandler}>
          -
        </div>
        <div className="buttons-add" onClick={addClickHandler}>
          +
        </div>
      </div>
    </div>
  );
};

export default ModalFood;
