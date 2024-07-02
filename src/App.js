import logo from "./logo.svg";
import "./App.css";
import { useEffect, useReducer } from "react";
import { CartReducer } from "./reducers/cartReducer";
import { Products } from "./components/products";
import { Cart } from "./components/cart";

function App() {
  const [state,dispatch]=useReducer(CartReducer,{
    products:[],
    cart:[]
  })
  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then((res) => res.json())
      .then((productList)=>{
        dispatch({type:"PRODUCT_UPDATE",data:productList.products})
        console.log(productList.products)
      });
  }, []);
  return (
    <div style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
