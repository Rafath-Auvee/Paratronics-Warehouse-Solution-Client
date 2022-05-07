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
import RequireAuth from "../src/components/Authentication/RequiredAuth/RequiredAuth.js";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Product />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/manageproduct"
          element={
            <RequireAuth>
              <ManageProduct />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer limit={4} newestOnTop />
    </div>
  );
}

export default App;
