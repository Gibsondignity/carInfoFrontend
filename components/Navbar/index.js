import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <a className={style.easyrent} href="/">Easyrent</a>
        <Image src="/img/Easy-Rent-logo.png" width={80} height={80} />
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/menu.svg"
            width={32}
            height={32}
            style={{ cursor: "pointer" }}
            onClick={() => setOffCanvas(true)}
          />
        </OutsideClickHandler>
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""} `}>
        <div className={style.close_icon}>
          <Image
            src="/img/close.svg"
            width={32}
            height={32}
            onClick={() => setOffCanvas(false)}
          />
        </div>
        <div className={style.canvas_content}>
          <div className={style.social}>
            <h4>Social</h4>
            <div>
              <p>
                <img src="/img/Instagram.svg" />
                <span>&nbsp; Instagram</span>
              </p>
              <p>
                <img src="/img/Twitter.svg" />
                <span>&nbsp; Twitter</span>
              </p>
              {/* <p>
                <img src="/img/Youtube.svg" />
                <span>&nbsp; Youtube</span>
              </p> */}
              <p>
                <img src="/img/Facebook.svg" />
                <span>&nbsp; Facebook</span>
              </p>
            </div>
          </div>
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="/" onClick={() => setOffCanvas(false)}>
                Home
              </a>
            </p>
            <p style={{ marginTop: 0 }}>
              <a href="/" onClick={() => setOffCanvas(false)}>
                Login
              </a>
            </p>
            <p style={{ marginTop: 0 }}>
              <a href="#home" onClick={() => setOffCanvas(false)}>
                Register
              </a>
            </p>
            <p>
              <a href="#featured" onClick={() => setOffCanvas(false)}>
                About
              </a>
            </p>
            <p>
              <a href="#projects" onClick={() => setOffCanvas(false)}>
                Tenant
              </a>
            </p>
            <p>
              <a href="#testimoni" onClick={() => setOffCanvas(false)}>
                Landloard
              </a>
            </p>
          </div>
        </div>
        <br/>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u><a href="mailto: info@cozypropertiesgh.com"> info@cozypropertiesgh.com </a></u><br/>
            <u><a href="tel://+233242869759">+233(0) 242 869 759</a></u>
          </h2>
        </div>
      </div>
    </>
  );
}
