


import style from './style.module.css'
import Image from 'next/image'
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
                <img className={style.img} src='/img/house.jpg'></img>
            </div>
        </div>


        <center>
        <h1 className={style.partners}>Our Partners</h1>
        </center>

        <div className={style.section_3}>     

                <div>
                    <Image src='/img/cozyproperties.png' width={150} height={150}></Image>
                </div>
                
                <div>
                    <Image src='/img/cozytech.png' width={150} height={150}></Image>
                </div>

                <div>
                    <Image src='/img/cozylaundrylogo.png' width={150} height={150}></Image>
                </div>
        </div>


        <center>
            <h1 className={style.chooseus}>Why Choose Us</h1>
        </center>


        <div className={style.section_4}>

            <div>
                <center><h3>Affordability</h3></center>
                <hr/>
                <p>Our price is very competitive and we are best on the market.</p>
            </div>

            <div>
                <center><h3>Experience</h3></center>
                <hr/>
                <p>We&apos;ve been doing what we do best—we know what we&apos;re doing because we have the industry experience.</p>
            </div>

            <div>
                <center><h3>Quality</h3></center>
                <hr/>
                <p>From the best skilled professional, process and technology, EasyRent is shaping the rental industry in Ghana. Together, we are changing the status quo.</p>
            </div>

            <div>
                <center><h3>Conveniences</h3></center>
                <hr/>
                <p>At EasyRent, apartment selection, verification of financial resources, contract signing and payment can all be done online with just a click.</p>
            </div>

            <div>
                <center><h3>Trust</h3></center>
                <hr/>
                <p>Our customers rate us high and are very mush satisfy with our services and product.</p>
            </div>

        </div>
    </>
  )
}


export default About