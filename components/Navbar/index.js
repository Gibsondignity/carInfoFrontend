import style from "./style.module.css";
import Image from "next/image";
import Link from 'next/link'

import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className={style.nav}>

        <div className={style.navlinks}>
          <Link href="/">Home</Link>
          <Link href="/help">Search</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/">Logout</Link>
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
          
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <Link href="/" onClick={() => setOffCanvas(false)}>
                Home
              </Link>
            </p>
            <p style={{ marginTop: 0 }}>
              <Link href="/help" onClick={() => setOffCanvas(false)}>
                Help
              </Link>
            </p>
           
            <p>
              <Link href="/about" onClick={() => setOffCanvas(false)}>
                Details
              </Link>
            </p>
            <p>
              <Link href="/tenant" onClick={() => setOffCanvas(false)}>
                About
              </Link>
            </p>
            
          </div>
        </div>
        <br/>
        {}
      </div>
    </>
  );
}
