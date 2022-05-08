import React from "react";
import Testimonial from "../Testimonial/Testimonial.js"
import Footer from "../Footer/Footer.js";
import Newsletter from "../Newsletter/Newsletter.js";
import Banner from "../Banner/Banner.js"
import useProducts from "../../Hooks/useProducts.js"
import Detail from "../Detail/Detail.js"
const Home = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <div className="bg-slate-200">
      <Banner className="w-1/2"/>
      <h3 className="mt-12 text-center text-4xl text-sky-800">Products Currently Available</h3>
      <div className="products-container">
        
        {products.slice(0,6).map((product) => (
          <Detail key={product._id} product={product} />
        ))}
      </div>
      <Testimonial/>
      <Newsletter/>
      
    </div>
  );
};

export default Home;
