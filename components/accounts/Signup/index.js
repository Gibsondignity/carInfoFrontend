import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';

const Signuppage = () => {
    return (
      <>
        <Container className="mt-5">

          <div className={style.form}>
            <h2>Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text>
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <span><i>Already have an account? </i></span><Link href="/account/login">Login</Link><br/>
              {/* <Link href="/">Forgot Password?</Link><br/> */}
              
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </div>
        </Container>


      </>
    )
  }
  
  export default Signuppage;