import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function MySlider() {
  const navigate = useNavigate();

  const navigatetorings = () => {
    navigate("/rings");
  };
  const navigatetobracelets = () => {
    navigate("/brace");
  };
  const navigatetonecklace = () => {
    navigate("/necklace");
  };
  const navigatetoearings = () => {
    navigate("/earings");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div   className="mx-auto container px-10 overflow-hidden">
      <h3 className=" mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold  text-4xl">
      
        Categories
      </h3>
      <Slider {...settings}>
        <div data-aos="zoom-in-up" data-aos-duration="1000"
          onClick={navigatetorings}
          className="overflow-hidden p-3 cursor-pointer border-orange-500 rounded"
        >
          <img
            className="rounded border transition-all shadow-md ease-in-out hover:rounded hover:border-zinc-900"
            src="https://media.istockphoto.com/id/1338646661/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.jpg?b=1&s=612x612&w=0&k=20&c=4awexxTFq9bTMvU8RXnP9BNnKMbGNlTcc9qjMJezAMc="
            alt="Slide 1"
          />
          <h2 className="mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">
            Rings
          </h2>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1000"
          onClick={navigatetobracelets}
          className="overflow-hidden p-3 cursor-pointer border-orange-500 rounded"
        >
          <img
            className="rounded border border-orange-500 shadow-md hover:rounded hover:border-orange-500"
            src="https://media.istockphoto.com/id/1331089160/photo/different-elegant-bijouterie-and-plate-on-white-marble-table-flat-lay.jpg?b=1&s=612x612&w=0&k=20&c=Z-eNtw44IMqmDjPhHSHLCUo1mxbR_QivDWIQNMDtuac="
            alt="Slide 2"
          />
          <h2 className="mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">
            Bracelets
          </h2>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000"
          onClick={navigatetonecklace}
          className="overflow-hidden p-3 cursor-pointer border-orange-500 rounded"
        >
          <img
            className="rounded border border-orange-500 hover:rounded shadow-md hover:border-zinc-900"
            src="https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?b=1&s=612x612&w=0&k=20&c=njzyXyKDL-xHcjocLvCKJt_WNkBQKv31euTc2jVIHW8="
            alt="Slide 3"
          />
          <h2 className="mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">
            Necklace
          </h2>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000"
          onClick={navigatetoearings}
          className="overflow-hidden p-3 cursor-pointer border-orange-500 rounded"
        >
          <img
            className="rounded border border-orange-500 shadow-md hover:rounded hover:border-zinc-900"
            src="https://media.istockphoto.com/id/1372149793/photo/close-up-shot-of-a-happy-beautiful-woman-putting-on-the-silver-necklace.jpg?b=1&s=612x612&w=0&k=20&c=3zr08vMbIyynqPFokQ1aM9kdfH8CzPT4Ov3DEVnZl7M="
            alt="Slide 4"
          />
          <h2 className="mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">
            Earings
          </h2>
        </div>
      </Slider>
    </div>
  );
}
