import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';

const Loginpage = () => {
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <span><i>Don&apos;t have an account yet? </i></span><Link href="/">Register</Link><br/>
              <Link href="/">Forgot Password?</Link><br/>
              
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
  
  export default Loginpage;