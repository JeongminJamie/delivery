import React from "react";
import EachFood from "../EachFood/EachFood";
import "./FoodList.css";

const FoodList = ({ foodList, setFoodList }) => {
  return (
    <div className="main-content">
      <div className="FoodList-container">
        {foodList.map((food) => (
          <EachFood
            key={food.id}
            id={food.id}
            foodName={food.name}
            price={food.price}
            setFoodList={setFoodList}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
