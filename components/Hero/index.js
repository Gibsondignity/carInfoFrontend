import Button from '../Button'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link';


import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper_1 from '../Clients/style.module.css'

export default function Hero() {
  return (
    <div>
      <div className={style.hero} id="home">
        <div className={style.col_1}>
          <div>

            <h1>
              Is your rent due?<br/>
              <span className={style.question} > <br/>
              What is you plan?</span>
              <Link href='/tenant'>
                <Button text="Start Now" icon="Send"/>
              </Link>
              <br/>
              
              <span className={style.question} >Are you a Landlord?</span>
              <Link href='/landlord'>
                <Button text="Start Now" icon="Send"/>
              </Link>
            </h1> 
            

          </div>
          
        </div>


        <div className={style.rentspace}>

          <h1>Rent your space</h1>

          <p>Do you have a house/room to rent out?</p>
          <p>Are you looking for a space to rent?</p>

        <di className={style.buttons}>
          <div >
            <Link href='/tenant'>
              <Button text="Landlord" className={style.landlordButton}/>
            </Link>
          </div>

          <div>
            <Link href='/tenant'>
              <Button text="Tenant" className={style.tenantButton}/>
            </Link>
          </div>
        </di>

        </div>
      
        {/* <div className={style.col_2}>
          
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className={swiper_1.mySwiper}
  
            >
              <SwiperSlide>


                <div className={style.col_2}>
                  <div>
                    <Image src="/img/img-1.png" width={280} height={170} />
                    <Image src="/img/img-2.png" width={280} height={170} />
                  </div>
                    
                    <Image src="/img/img-3.png" width={588} height={237} />
                </div>
              </SwiperSlide>

          </Swiper>
        </div> */}
      </div>
    </div>
  )
}