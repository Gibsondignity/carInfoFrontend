import style from './style.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <img src="/img/Easy-Rent-logo.png" width={50} height={50}/>
            <h2>Easyrent</h2>
          </div>
          
        </div>
        <div>

          <div>
            <h4><u>Help & Solutions</u></h4>
            <p><Link href='tel://+233242869759'>Talk to support</Link></p>
            <p>Have a question?</p>
            <p>Support docs</p>

          </div>
          <div className={style.contactsinfo}>
            <h4><u>Social Media</u></h4>
            <p><img src="/img/Instagram.svg" /> Instagram</p>
            <p><img src="/img/Twitter.svg" /> Twitter</p>
            {/* <p>Youtube</p> */}
            <p><img src="/img/Facebook.svg" /> Facebook</p>
          </div>
        </div>
      </div>
      <div className={style.contactsinfo}>
        <h4>Contact Info</h4>
      <ul>
        <li><img src='/img/location.png'/> 1st Floor inside Harriman Plaza on the Meridian Street Tema Comm 1</li>
        <li><img src='/img/email.png'/> info@cozypropertiesgh.com</li>
        <li><img src='/img/contact.jpg'/> Phone : +233(0) 242 869 759</li>
      </ul>

      </div>
      <div className={style.footer_terms}>
        <p>Copyright &copy; 2022 Cozytech Solutions</p>
      </div>
    </div>
  )
}
