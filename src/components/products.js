import React from "react";
import "../App.css";

export const Products = ({ state, dispatch }) => {
  const { products = [], cart = [] } = state;

  const onAddToCart=(data)=>{
    dispatch({type:"ADD_TO_CART",data:{...data,qty:1}})
  }

  const onRemoveItemFromCart=(data)=>{
    dispatch({type:"REMOVE_ITEM_FROM_CART",data:data})
  }

  console.log(state.cart,'cartdetails')
  return (
    <div className="productContainer">
      {products.map((product) => {
        const isItemPresentInCart = cart.some(
          (prodId) => prodId.id === product.id
        );
        return (
          <div className="productItem">
            <img src={product.thumbnail} alt="productThumbnail" />
            <div className="detailsSpace">
              <div>{product.title}</div>
              <div>{product.price}</div>
            </div>
            {isItemPresentInCart ? (
              <button className="remove_from_cart" onClick={()=>onRemoveItemFromCart(product)}>Remove from Cart</button>
            ) : (
              <button className="addtocart" onClick={()=>onAddToCart(product)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
};
