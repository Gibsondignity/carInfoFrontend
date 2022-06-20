import style from './style.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";





const About = () => {
  return (
    <>
        

        {/* Section 1 */}
        <div className={style.about}>
            
            <div className={style.intro}>
            <h1 >About Us</h1>
                <div>
                    <p>
                        Easyrent is formed by able and problem-solving young individuals
                        with the intention take the stress out of your rental experience in Ghana.
                    </p>
                </div>

                <div>
                    
                    <p>Our mission is to make sure that Ghanaians find affordable and comfortable accommodation.</p>
                    <p>
                    Let EasyRent take the stress out of your rental experience in Ghana. 
                    Finding a legitimate apartment that offers you flexibility in payment can be daunting. 
                    The most common headache among rent-seekers in Ghana is many fake agents, websites, and 
                    the two years rent advance demanded by landlords. This is where EasyRent comes in. 
                    Our mission is to ensure that Ghanaians find affordable and comfortable accommodation with a flexible payment plan.
                </p>
                
                <p>
                    In addition, several helpful services are offered by EasyRent within the rental period, 
                    such as cleaning, professional maintenance, and moving (logistics), all of which can be 
                    accessed through our messaging service. As a result, we take over much of the hassle of 
                    property management from property owners and tenants. In addition, we are ever ready to 
                    assist when the need arises. As a result, all of our clients can be assured of being in safe hands. 
                    The whole process from touring the apartment to signing the contract and moving in can be managed by EasyRent easily.
                </p>
                <p>
                Easy Rent also takes over much of the hassle of property management from landlords. 
                Landlords have peace of mind because repairs or complaints can be made through the Easy 
                Rent app’s messaging service, to be dealt with by Easy Rent staff, hence landlords have greatly 
                reduced responsibility for basic maintenance.
                </p>
                <center>
                    <small><i>EasyRent: Rent Made Easier</i></small>
                </center>
 
                </div>
            </div>

            <div>
                <img className={style.img} src='/img/about-img.jpg'></img>
            </div>
        </div>

        

        {/* Section Two */}
        
        <div className={style.section_3}>
            <div>
                <h1 className={style.section_3_head}>Our Partners</h1>

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
                    <SwiperSlide>
                        <div className={style.sliderbody}>
                        <Image src="/img/cozyproperties.png" width={200} height={200} />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className={style.sliderbody}>
                        <Image src="/img/cozytech.png" width={200} height={200} />
                        </div> 
                    </SwiperSlide>
   
                </Swiper>
            </div>


            <div>
                
                <h1>Our Team</h1>
            </div>

        </div>
    </>
  )
}


export default About