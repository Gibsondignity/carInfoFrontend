import Loign from '../components/Login'
import style from '../components/Login/style.module.css'
import Navbar from "../components/Navbar";

const login = () => {
  return (
    <>
        
        <div>
          <img className={style.img} src='/img/Easy-Rent-logo.png'/>
        </div>
        

        <div>
            <Loign />
        </div>
    </>
  )
}


export default login

