
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import style from './style.module.css';


const Static = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      className={style.swiper}
    >


      <SwiperSlide className={ style.img }>
        
        <img src="/img/about.jpg"  />
        <div>
          <h2>EASY RENT</h2>
          <p>
            <span>Our mission is to make sure that Ghanaians find affordable and comfortable accommodation.</span><br/>
            <span className={style.italic}><i>Rent Made Easier</i></span>
            
          </p>
          

        </div>
      </SwiperSlide>

      
      

      


    </Swiper>
  );
};


export default Static;