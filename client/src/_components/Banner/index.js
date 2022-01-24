import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import './index.scss';

import bgImage1 from '../../_assets/images/13.jpg';
import bgImage2 from '../../_assets/images/12.jpg';
import bgImage3 from '../../_assets/images/3.jpg';

const bgImages = [
   {id: 1, img: bgImage1},
   {id: 2, img: bgImage2},
   {id: 3, img: bgImage3},
];

const Banner = () => {
   const [offset, setOffset] = useState(0);
   const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
   };
   useEffect(() => {
      function handleScroll() {
         setOffset(window.pageYOffset);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [offset]);

   // useEffect(() => {
   //    Aos.init({duration: 2000});
   // }, []);

   return (
      <div className="container-fluid hero p-0 position-relative section">
         <Slider {...settings}>
            {bgImages.map((itm) => (
               <div key={itm.id} className="imgs img-fluid">
                  <img
                     src={itm.img}
                     style={{
                        // filter: `blur(4px)`,
                        transform: `translateY(${offset * 0.5}px)`,
                     }}
                     alt="Carousel__img"
                     className=" h-100 w-100"
                  />
               </div>
            ))}
         </Slider>
         <div className="container-fluid __container h-100 position-absolute d-flex align-items-center justify-content-center">
            <div className="container d-flex align-items-center justify-content-center">
               <div className="row m-0 content">
                  <article className="inner text d-flex flex-column align-items-center justify-content-center">content here...</article>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
