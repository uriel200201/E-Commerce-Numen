import { useEffect, useState } from "react";
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

  const [items, setItems] = useState(1)

  window.addEventListener('resize', () => {
    if (window.innerWidth < 512) {
      setItems(1)
    } else if (window.innerWidth < 768) {
      setItems(2)
    } else {
      setItems(3)
    }
  })

  useEffect(() => {
    if (window.innerWidth < 512) {
      setItems(1)
    } else if (window.innerWidth < 768) {
      setItems(2)
    } else {
      setItems(3)
    }
  }, [])

  const options = {
    loop: true,
    margin: 15,
    items: items,
    autoplay: true
  };
  
  return (
    <OwlCarousel id="offers" className="owl-theme py-12 px-10 bg-red-400" {...options}>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img1} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img2} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img3} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img4} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img5} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img6} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img7} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img8} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img9} alt="" />
      </div>
      <div className='bg-white rounded-[10px] p-1'>
        <img className="rounded-[7px]" src={img10} alt="" />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;

