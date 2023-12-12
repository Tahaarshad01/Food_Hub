import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "../hooks/UseReducer";

const Card = (props) => {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  let options = props.options;
  let priceElements = Object.keys(options);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const sizes = (e) => {
    setSize(e.target.value);
  };

  const quantites = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          quantity: quantity,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          quantity: quantity,
          size: size,
        });
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      quantity: quantity,
      size: size,
    });
    console.log(data);
  };

  let finalPrice = quantity * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card" style={{ width: "18rem", maxHeight: "450px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="paneer"
          style={{ height: "250px" }}
        />
        <div className="card-inline">
          <h5 className="card-title m-2">{props.foodItem.name}</h5>
          <p className="card-text ml-2">Some quick</p>
          <select className="m-2 bg-success rounded" onChange={quantites}>
            {Array.from(Array(5), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 bg-success rounded"
            onChange={sizes}
            ref={priceRef}
          >
            {priceElements.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-5 ml-10"> ₹{finalPrice}</div>
          <hr />
          <button
            className="btn bg-success rounded ms-20 mb-2"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
