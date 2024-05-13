import React, { useEffect, useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import ModalFood from "./ModalFood";

const Modal = ({ foodList, setFoodList, isCartOpen, setIsCartOpen }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  //only show the food added in the modal
  const addedFoodList = foodList.filter((item) => item.quantity > 0);

  //calculate the total amount of this cart
  useEffect(() => {
    let sumOfAmount = 0;
    addedFoodList.forEach((item) => {
      sumOfAmount += item.price * item.quantity;
      setTotalAmount(sumOfAmount);
    });
  }, addedFoodList);

  const clickCancelHandler = () => {
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return createPortal(
    <div className="overlays">
      <main className="modal-container">
        <div className="cart-list">
          {addedFoodList.map((item) => (
            <ModalFood
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              setFoodList={setFoodList}
            />
          ))}
        </div>
        <div className="cart-bottom">
          <div className="total-amount">
            <p>전체 금액</p>
            <p>{totalAmount.toLocaleString()}원</p>
          </div>
          <div className="cancel-pay__buttons">
            <button className="buttons-cancel" onClick={clickCancelHandler}>
              취소
            </button>
            <button className="buttons-pay">결제</button>
          </div>
        </div>
      </main>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default Modal;
