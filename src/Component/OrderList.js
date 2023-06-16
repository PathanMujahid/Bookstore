import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderList = () => {
  const state = useSelector((state) => state.addItemsReducer);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  var total = 0;

  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your Order</span>
              {/* <span className="badge bg-primary rounded-pill">{state.length}</span> */}
            </h4>
            {state.length === 0 ? (
              <div className="alert alert-warning text-center">
                No items in the cart
              </div>
            ) : (
              <ul className="list-group mb-3">
                {state.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${total}</strong>
                </li>
              </ul>
            )}
            {!isOrderPlaced && state.length > 0 && (
              <div className="text-center">
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            )}
            {isOrderPlaced && (
              <div className="alert alert-success mt-3 text-center">
                <div className="text-center">
                  Your order is successfully placed.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
