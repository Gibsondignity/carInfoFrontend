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
      <SwiperSlide><Image src="/img/img-1.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-3.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-2.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-1.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-2.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-3.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-1.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
      <SwiperSlide><Image src="/img/img-3.png" width={1300} height={600} className={ style.img } /></SwiperSlide>
    </Swiper>
  );
};


export default Slider;