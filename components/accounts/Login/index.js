import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';

const Loginpage = () => {
    return (
      <>
        
        {/* <div>
          <div className="full-width d-flex justify-content-center and align-items-center">
            <form className="form rounded p-4 p-sm-3">
                <div className="mb-3">
                  
                    <label htmlFor="emailAddress" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div> */}


        <Container className="mt-5">

          <div className={style.form}>
            <h2>Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <span><i>Don't have an account yet? </i></span><Link href="/">Register</Link><br/>
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