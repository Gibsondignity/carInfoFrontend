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


const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={style.swiper}
    >


      <SwiperSlide className={ style.img }>
        
        <img src="/img/easyrent1.jpg"  />
        <div>
          <h2>EASY RENT</h2>
          <p>Do you have a house/room to rent out? Are you looking for a Space to rent?</p>
          

        </div>
      </SwiperSlide>

      
      <SwiperSlide className={ style.img }>
        
        <img src="/img/easyrent2.jpg"  />
        <div>
          <h2>Is your rent due?</h2>
          <p>Let EasyRent take the stress out of your rental experience in Ghana.</p>

        </div>
      </SwiperSlide>

      
      <SwiperSlide className={ style.img }>
        <img src="/img/easyrent3.jpg"  />

        <div>
          <h2>SHORT STORY</h2>
          <p>Easy Rent is formed by able and problem-solving young individuals...</p>
        </div>
      </SwiperSlide>
      


      
      <SwiperSlide className={ style.img }>
        
        <img src="/img/easyrent5.jpg"  />
        <div>
          <h2>Easyrent is here to help</h2>
          <p>I was very happy to get a 2 bedroom unit with Easyrent without any difficulty.....
            </p>
        </div>
      </SwiperSlide>

      
      <SwiperSlide className={ style.img }>
        
        <img src="/img/easyrent6.jpg"  />
        <div>
          <h2>Very Smooth</h2>
          <p>My transition to my new home was very smooth. We had an electrical issue on arrival and it was resolved very fast..... 
            </p>
        </div>
      </SwiperSlide>

      


    </Swiper>
  );
};


export default Slider;