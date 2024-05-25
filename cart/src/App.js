import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from 'react';

function App() {
  const products = [
    {
      price: 100000,
      name: 'Iphone 15 Pro Max',
      quantity: 0,
    },
    {
      price: 300000,
      name: 'Samsung S24 Ultra',
      quantity: 0,
    }
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = [totalAmount];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
    }
    //  : newProductList[index].quantity = 0
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
};

const resetQuantity = () =>{
  let newProductList = [...productList];
  newProductList.map((products)=>{
    products.quantity = 0
  })
  setProductList(newProductList);
  setTotalAmount(0)
}

const removeItem = (index) =>{
  let newProductList = [...productList];
  newTotalAmount = totalAmount;
  newTotalAmount -=
  newProductList[index].quantity * newProductList[index].price
  newProductList.splice(index, 1);
  setProductList(newProductList);
  setTotalAmount(newTotalAmount);
}

return (
  <>
    <Navbar />
    <main className="container mt-5">
      <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
  </>
);
}

export default App;
