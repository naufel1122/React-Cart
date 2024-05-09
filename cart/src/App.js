import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar/>
    <ProductList/>     
    <Footer/>
    </>
  )
}

export default App;
