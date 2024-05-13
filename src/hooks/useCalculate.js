const useCalculate = (setValueList) => {
  const addQuantity = (id, count) => {
    setValueList((prevValueList) => {
      return prevValueList.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + Number(count) };
        }
        return item;
      });
    });
  };

  const subtractQuantity = (id, count) => {
    setValueList((prevValueList) => {
      return prevValueList.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - Number(count) };
        }
        return item;
      });
    });
  };

  return {
    addQuantity,
    subtractQuantity,
  };
};

export default useCalculate;
