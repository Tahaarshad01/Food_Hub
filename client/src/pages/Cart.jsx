import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart, useDispatchCart } from "../hooks/UseReducer";

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-95 text-center fs-3">The Cart is Empty</div>
      </div>
    );
  }
  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:4000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("Order response:", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div className="Container mt-5">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="text-success fs-10">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Qty</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "DELETE", index: index });
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center fs-2">Total Price: {totalPrice}</div>
        <div className="text-center mt-3">
          <button className="btn btn-success" onClick={handleCheckout}>
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
