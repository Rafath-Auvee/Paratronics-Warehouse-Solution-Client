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
import EditProduct from "./components/ManageItem/EditProduct/EditProduct.js";
import ManageProduct from "./components/ManageItem/ManageProduct/ManageProduct.js";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "../src/components/Authentication/RequiredAuth/RequiredAuth.js";
import Footer from "../src/components/Page/Footer/Footer.js"
import Invalid from "../src/components/Page/Invalid/Invalid.js"
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Invalid/>} />
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
          path="/editproduct/:id"
          element={
            <RequireAuth>
              <EditProduct />
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
      <Footer />
      <ToastContainer limit={4} newestOnTop />
    </div>
  );
}

export default App;
