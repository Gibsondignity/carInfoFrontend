import style from "./style.module.css";
import style1 from "../Clients/style.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from '../Button'

import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


export default function Step() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "edit.svg",
        image_active: "edit-active.svg",
        text: "Renting Made Easy",
      },
      {
        id: 2,
        image: "stack.svg",
        image_active: "stack-active.svg",
        text: "Pay Your Rent in Months.",
      },
      {
        id: 3,
        image: "home.svg",
        image_active: "home-active.svg",
        text: "Ready to be occupied",
      },
    ],
  });

  function toggleActive(key) {
    changeState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
    <div className={style.step}>
      <div className={style.about}>
       <h1>About Easyrent</h1>
      
       <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style1.mySwiper}
          >
            <SwiperSlide>
              <div className={style.about_easyrent}>
                <h1>Our Mission</h1>
                <p>
                Our mission is to ensure that Ghanaians find affordable and comfortable accommodation with a flexible payment plan.{" "}
                </p>
              </div>
              
            </SwiperSlide>
            
            <SwiperSlide>
              <div className={style.about_easyrent}>
                <h1>Short Story</h1>
                <p>
                Easyrent is formed by able and problem-solving young individuals... {" "}
                </p>
              </div>
              
            </SwiperSlide>
            
            <SwiperSlide>
              <div className={style.about_easyrent}>
                <h1>Confidentiality</h1>
                <p>
                All of our clients can be rest assured of being in safe hands... {" "}<br/><br/>
                EasyRent!! EasyRent!! EasyRent!!
                </p>
              </div>
              
            </SwiperSlide>
            
          </Swiper>
      </div>


      <div>
        <h1 style={{margin: "0"}}>
          Simple <u>Step,</u>
          <br />
          Our <u>Mission</u>
        </h1>
        <p>
        Our mission is to ensure that Ghanaians find affordable and comfortable accommodation with a flexible payment plan.
        </p>
        <div className={style.box_steps}>
          {appState.objects.map((item, key) => (
            <div
              className={` ${style.box} ${
                appState.objects[key] == appState.activeObject
                  ? style.active
                  : ""
              } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""} `}
              onMouseOver={() => {
                toggleActive(key);
                setFirstItemActive(false);
              }}
              key={key}
            >
              <img
                src={`/img/${
                  appState.objects[key] == appState.activeObject
                    ? item.image_active
                    : `${
                        key == 0
                          ? `${
                              firstItemActive
                                ? item.image_active
                                : item.image
                            }`
                          : item.image
                      } `
                }`}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <a href="tel://+233242869759">
        <Button text="Contact US" icon="Phone"/>
        </a>

        {/* <Popup trigger={<Button text="Contact US" icon="Phone"/>} position="center">
          <div className={style.contactsinfo}>
          <h4>Contact Info</h4>
            <ul>
              <li> 1st Floor inside Harriman Plaza on the Meridian Street Tema Comm 1</li>
              <li> info@cozypropertiesgh.com</li>
              <li> Phone : +233(0) 242 869 759</li>
            </ul>
          </div>

        </Popup> */}
      </div>
    </div>
  );
}
