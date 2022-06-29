import style from './style.module.css';
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';

const Tenant = () => {
  return (

    <div>

      <Container className="mt-5">

      <div className={style.main}>
        <h2>Find a home</h2>
        <Form>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className={style.form} type="text" placeholder="Town" />
          </Form.Group>


          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Select className={style.form} aria-label="Default select example">
              <option>Select Property Type</option>
              <option value="1">Appartment</option>
              <option value="2">Guest House</option>
              <option value="3">Hotel</option>
              <option value="3">House</option>
            </Form.Select>
          </Form.Group>



          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Select className={style.form} aria-label="Default select example">
              <option>Select Region</option>
              <option value="1">Greater Accra</option>
              <option value="2">Ashanti Region</option>
              <option value="3">Bono East Region</option>
              <option value="4">Bono Region</option>
              <option value="5">Central Region</option>
              <option value="6">Eastern Region</option>
              <option value="7">North East Region</option>
              <option value="8">Northern Region</option>
              <option value="9">Oti Region</option>
              <option value="10">Savannah Region</option>
              <option value="11">Upper East Region</option>
              <option value="12">Upper West Region</option>
              <option value="13">Volta Region</option>
              <option value="14">Western North Region</option>
              <option value="15">Western Region</option>
            </Form.Select>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className={style.form} type="password" placeholder="Number of bedrooms" />
          </Form.Group>

          
          <br />
          <Button variant="primary" className={style.button} type="submit">
            <img width={30} height={30} className={style.img} src='/img/Basic_Ui_(726).jpg'></img> Search
          </Button>
        </Form>

      </div>

      <div className={style.links}>
        <div>
          <Link href="/account/signup">Register Now</Link>
        </div>
        <div>
          <Link href="/account/login">Login Now</Link>
        </div>
      </div>

      </Container>
      
    </div>

  )
}


export default Tenant
