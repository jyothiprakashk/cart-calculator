import React, { useEffect, useState } from "react";
import "../App.css";
import { MdDelete } from "react-icons/md";

export const Cart = ({ state, dispatch }) => {
  const { cart = [] } = state;
  const [total,subTotal]=useState(0);

  const onRemoveItemFromCart = (id, qty) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", data: { id, qty } });
  };

  useEffect(()=>{
    subTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])

  return (
    <div className="cartContainer">
      <h3>Cart</h3>
      SubTotal: ${total}
      {cart.map((prod) => {
        return (
          <div className="cartDetails">
            <img src={prod.thumbnail} alt="productThumbnail" />
            <div className="detailsSpace">
              <div>{prod.title}</div>
              <div> ${prod.price}</div>
            </div>
            <div className="deletecount">
              <div onClick={() => onRemoveItemFromCart(prod.id, prod.qty - 1)}>
                -
              </div>
              <div>{prod.qty}</div>
              <div onClick={() => onRemoveItemFromCart(prod.id, prod.qty + 1)}>
                +
              </div>
            </div>
            {/* <MdDelete className="deleteButton" onClick={()=>onRemoveItemFromCart(prod)}/> */}
          </div>
        );
      })}
    </div>
  );
};
