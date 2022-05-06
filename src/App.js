import "./App.css";
import Header from "./components/Header/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import Inventory from "./components/Page/Inventory/Inventory";
import MyItems from "./components/ManageItem/MyItem/MyItems.js";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Product from "./components/Page/Product/Product.js";
import { ToastContainer } from "react-toastify";
import AddProduct from "./components/ManageItem/AddProduct/AddProduct.js";
import ManageProduct from "./components/ManageItem/ManageProduct/ManageProduct.js";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<Product />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/manageproduct" element={<ManageProduct />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
