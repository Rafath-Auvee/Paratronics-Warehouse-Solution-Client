import React, {useState, useEffect} from 'react';
import axios from 'axios';


const baseURL = "https://intense-plains-05397.herokuapp.com/inventory";

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
