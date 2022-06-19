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
              Hello, Welcome to EasyRent.
            </h1> 

            <p>EasyRent pays advances for all renters who qualify and are approved and are in the process of renting a room, 
              an apartment, or a whole house. Renters can use our services to make affordable monthly rent payments.
            </p>

            <p>
            To be eligible, the applicant must provide proof of employment (3-month payslips), 
            proof of income (official 3-month bank statements or cash statements) or audited financial 
            statements (of business owners). <br/><br/>
            <span>After that, an applicant must complete the application process outlined below.</span>
            </p>

            

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