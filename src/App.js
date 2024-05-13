import { useEffect, useState } from "react";
import "./App.css";

import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";

function App() {
  const [foodList, setFoodList] = useState([
    {
      id: 1,
      name: "피자",
      price: 20000,
      quantity: 0,
    },
    { id: 2, name: "김치찌개", price: 9000, quantity: 0 },
    { id: 3, name: "짜장면", price: 6500, quantity: 0 },
  ]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    let sumOfQuantity = 0;
    foodList.forEach((item) => (sumOfQuantity += item.quantity));
    setTotalQuantity(sumOfQuantity);
  }, [foodList]);

  return (
    <>
      <Modal
        foodList={foodList}
        setFoodList={setFoodList}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Header totalQuantity={totalQuantity} setIsCartOpen={setIsCartOpen} />
      <FoodList foodList={foodList} setFoodList={setFoodList} />
    </>
  );
}

export default App;
