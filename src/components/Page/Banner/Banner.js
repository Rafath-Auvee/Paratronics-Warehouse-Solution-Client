import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 tales"
            src="https://i.ibb.co/Hq18tPk/photo-1484557052118-f32bd25b45b5-ixlib-rb-1-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl mb-5">Welcome to</h5>
            <p className="text-3xl mb-5">
              Paratronics Warehouse Solution. For electronics inventory.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 tales"
            src="https://i.ibb.co/Z2x24VW/photo-1558494949-ef010cbdcc31-ixlib-rb-1-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl mb-5">Want to manage your items?</h5>
            <p className="text-3xl mb-5">
              Our systematic approach to sourcing, storing, and selling
              inventory materials and goods.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 tales"
            src="https://i.ibb.co/60rLgWG/photo-1587293852726-70cdb56c2866-ixlib-rb-1-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl mb-5 text-sky-500">For growing businesses.</h5>
            <p className="text-3xl mb-5 text-sky-500">
              Increase your sales and keep track of every unit with our powerful
              stock management, order fulfillment, and inventory control
              software.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
