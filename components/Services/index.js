
import style from './style.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";





const Services = () => {
  return (
    <>
        <div className={style.about}>
            
            <div className={style.intro}>
                <h1>Cleaning Service</h1>
                <p>
                  EasyRent professional cleaning services is at your door step because we know that life can be busy. 
                  We assured you of exclusive cleaning service that is of the highest standard with strict selection of personnel, 
                  assured tools, and standardized procedures. The health and safety of our customers and employees is our highest priority. 
                  We provide our users with daily or regular cleaning, occasional cleaning, move-out cleaning and move-in cleaning.
                </p>
            </div>

            <div>
                <img className={style.img} src='/img/cleaning.jpg'></img>
            </div>
        </div>


        <div className={style.about}>
            
            <div className={style.intro}>
                <h1>Move-in/Move-out</h1>
                <p>
                
                We are your local moving company because when it comes to moving, we can do it all. 
                So, whether you’re moving across the road, to a new location or from one end of the city to another, 
                be sure to let us take your home. Our team of professionals are available to make sure your precious belongs 
                are secured and without damage. Move across town with ease.
                </p>
            </div>

            <div>
                <img className={style.img} src='/img/move_in.jpg'></img>
            </div>
        </div>


        <div className={style.about}>
            
            <div className={style.intro}>
                <h1>Home Repair</h1>
                <p>
                
                Whether you’re looking at a little electrical work, plumbing, drilling, painting, carpeting  EasyRent got you covered. 
                We have a team of dedicated fully background checked, professionally and highly trained with a solid track record, 
                which means you never have to worry about the quality of service.
                </p>
            </div>

            <div>
                <img className={style.img} src='/img/electrical-service.jpg'></img>
            </div>
        </div>





        
    </>
  )
}


export default Services