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
  const productList = [
    {
      Price: 900000,
      name: 'Iphone 15 Pro Max',
      Quantity: 0,
    },
    {
      Price: 1000000,
      name: 'Samsung S24 Ultra',
      Quantity: 0,
    }
  ]

  let [productList, setProductList] = useState(products)
   inrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);

  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={productList} inrementQuantity={this.inrementQuantity}/>
      </main>
      <Footer />
    </>
  )
}

export default App;
