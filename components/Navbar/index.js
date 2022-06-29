import style from "./style.module.css";
import Image from "next/image";
import Link from 'next/link'

import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className={style.nav}>

      <div className={style.logapp}>
          <div className={style.login}>
            
            
            <Image

              src="/img/login-icon.ico"
              href="/account/login"
              width={25}
              height={25} 
              style={{ cursor: "pointer" }}
            />
            <Link href="/account/login" Login>Login</Link>

          </div>
            <div className={style.apply}>
            
            <Image
              src="/img/apply.ico"
              
              width={20}
              height={20} 
              style={{ cursor: "pointer" }}
            />
            <Link href="/account/signup">Apply</Link>
          </div>
        </div>

        <div className={style.logo}>
          <Link href="">
            <Image src="/img/Easy-Rent-logo.png" width={80} height={80} style={{ cursor: "pointer" }} />
          </Link>
        </div>
 
        
        <div className={style.navlinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tenant">Tenant</Link>
          <Link href="/account/application">Landloard</Link>
          <Link href="/calculator">Calculator</Link>
          <Link href="/services">Services</Link>
        </div>

        <div className={style.contacts}>
          <Image src="/img/contact.jpg" width={25} height={25}></Image>
          <a href="tel://+233242869759">024-286-9759 |</a>
          <a href="tel://+233242869759">Download App</a>
        </div>




        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/menu.svg"
            width={38}
            height={38} 
            style={{ cursor: "pointer" }}
            onClick={() => setOffCanvas(true)}
            className={style.menuicon}
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

              <p>
                <img src="/img/Facebook.svg" />
                <span>&nbsp; Facebook</span>
              </p>
            </div>
          </div>
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <Link href="/" onClick={() => setOffCanvas(false)}>
                Home
              </Link>
            </p>
            <p style={{ marginTop: 0 }}>
              <Link href="/account/login" onClick={() => setOffCanvas(false)}>
                Login
              </Link>
            </p>
            <p style={{ marginTop: 0 }}>
              <Link href="#" onClick={() => setOffCanvas(false)}>
                Apply
              </Link>
            </p>
            <p>
              <Link href="/about" onClick={() => setOffCanvas(false)}>
                About
              </Link>
            </p>
            <p>
              <Link href="/tenant" onClick={() => setOffCanvas(false)}>
                Tenant
              </Link>
            </p>
            <p>
              <Link href="/landlord" onClick={() => setOffCanvas(false)}>
                Landloard
              </Link>
            </p>
            <p>
              <Link href="/calculator" onClick={() => setOffCanvas(false)}>
                Calculator
              </Link>
            </p>
            <p>
              <Link href="/services" onClick={() => setOffCanvas(false)}>
                Services
              </Link>
            </p>
          </div>
        </div>
        <br/>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u><Link href="mailto: info@cozypropertiesgh.com"> info@cozypropertiesgh.com </Link></u><br/>
            <u><Link href="tel://+233242869759">+233(0) 242 869 759</Link></u>
          </h2>
        </div>
      </div>
    </>
  );
}
