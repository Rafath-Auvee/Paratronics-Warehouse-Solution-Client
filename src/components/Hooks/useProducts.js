import React, {useState, useEffect} from 'react';
import axios from 'axios';


const baseURL = "http://localhost:5000/products";

const useProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}`).then((res) => {
      setProducts(res.data);
      // console.log(setProducts)
    });
  }, []);

  return [products, setProducts]
};

export default useProducts;
