import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
  return (
    <div>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Hq18tPk/photo-1484557052118-f32bd25b45b5-ixlib-rb-1-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl ">First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Z2x24VW/photo-1558494949-ef010cbdcc31-ixlib-rb-1-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl">Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/60rLgWG/photo-1587293852726-70cdb56c2866-ixlib-rb-1-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="text-6xl">Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
