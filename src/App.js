
import './App.css';
import Header from "./components/Header/Header.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Page/Home/Home"
import Inventory from "./components/Page/Inventory/Inventory"
import Order from "./components/Page/Order/Order"
import Login from "./components/Authentication/Login/Login"
import Register from "./components/Authentication/Register/Register"
import Product from "./components/Page/Product/Product.js"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/inventory/:id" element={<Product/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
