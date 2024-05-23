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
      price: 900000,
      name: 'Iphone 15 Pro Max',
      quantity: 0,
    },
    {
      price: 1000000,
      name: 'Samsung S24 Ultra',
      quantity: 0,
    }
  ];

  let  [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
