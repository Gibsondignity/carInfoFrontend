import style from "./style.module.css";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Clients() {
  return (
    <div className={style.clients} id="testimoni">
      <div className={style.clients_section}>
        <div>
          <h1>
            Customer Say’s <br />
            About <u>Easyrent</u>
          </h1>
          <p className='testimonia'>
            Testimonials{" "}
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                I have two apartments that Easyrent helps me to rent out and i have been 
                really happy with their service since last year. They are easy and quick 
                to get any information and we are kept up to date. The accountant in 
                particular is always fantastic and fast at sending anything I need through!{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/albert-web.png" />
                </div>
                <p>Albert - Regina Bookshop</p>

              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                I was very happy to get a 2 bedroom unit with Easyrent without any difficulty. 
                i was given a 100% support to get a unit within a week period. Thank you. 
                You just can’t go wrong with them.{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/stephen.jpg" />
                </div>
                <p>Stephen - Tenant</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                My transition to my new home was very smooth. We had an electrical issue on arrival 
                and it was resolved very fast. They checked in a number of times to see if we needed anything. 
                Friendly and easy to chat with.{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/foli.jpeg" />
                </div>
                <p>Stephen - Tenant</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                Easyrent has managed my house for some time now. 
                They always have a smooth process in finding new tenants, 
                we haven’t had any concerns with him keeping on top of the things 
                that inevitably come up. I would recommend Easyrent as a rental 
                agency to anyone who would want a stress free rental services.{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  {/* <img src="/img/.jpeg" /> */}
                </div>
                <p>Stephen - Tenant</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
