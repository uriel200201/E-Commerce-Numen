import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img1 from '../../img/img1.jpg' 
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'
import img5 from '../../img/img5.jpg'
import img6 from '../../img/img6.jpg'
import img7 from '../../img/img7.jpg'
import img8 from '../../img/img8.jpg'
import img9 from '../../img/img9.jpg'
import img10 from '../../img/img10.jpg' 

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 15,
    items: 3,
    autoplay: true
};
  
  return (
    <OwlCarousel className="owl-theme bg-red-400" {...options}>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img1} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img2} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img3} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img4} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img5} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img6} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img7} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img8} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img9} />
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around py-12'>
        <img className="py-1 rounded px-1 border border-warning" src={img10} />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;

