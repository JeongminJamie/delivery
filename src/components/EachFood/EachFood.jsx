import React, { useState } from "react";
import "./EachFood.css";
import useCalculate from "../../hooks/useCalculate";

const EachFood = ({ id, foodName, price, setFoodList }) => {
  const [count, setCount] = useState(1);
  const { addQuantity } = useCalculate(setFoodList);

  const countChangeHandler = (e) => {
    setCount(e.target.value);
  };
  const addButtonHandler = () => {
    addQuantity(id, count);
    setCount(1);
  };

  return (
    <div className="food-container">
      <div className="name-price">
        <div>{foodName}</div>
        <div>{price.toLocaleString()}원</div>
      </div>
      <div className="quantity-addBtn">
        <div classsName="quantity">
          <p>수량</p>
          <input value={count} onChange={countChangeHandler} type="number" />
        </div>
        <button onClick={addButtonHandler}>추가하기</button>
      </div>
    </div>
  );
};

export default EachFood;
