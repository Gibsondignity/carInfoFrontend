import {Form, Container, Row, Button, Col} from 'react-bootstrap'
import Link from 'next/link';
import style from './style.module.css'

const Application = () => {
  return (
    <div>

      <Container className={style.main}>
      <h2>Landlord Registration</h2>

        <Form className={style.form}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Surname" />
            </Form.Group>
          </Row>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Second Name</Form.Label>
              <Form.Control type="text" placeholder="Second Name" />
            </Form.Group>
          </Row>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Row>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Contact 1</Form.Label>
              <Form.Control type="text" placeholder="Personal Contact" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contact 2</Form.Label>
              <Form.Control type="text" placeholder="Contact 2" />
            </Form.Group>
          </Row>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Ghana Card</Form.Label>
              <Form.Control type="text" placeholder="Enter Ghana Card Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Insurance Card</Form.Label>
              <Form.Control type="text" placeholder="Health Insurance Card" />
            </Form.Group>
          </Row>



          

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Appartment Location</Form.Label>
              <Form.Control placeholder="Tema, Com. 22 Main St" />
            </Form.Group>

          

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Upload Appartment</Form.Label>
                <Form.Control type="file" placeholder="" multiple />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Appartment Type</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
            </Row>





          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City or Town</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Region</Form.Label>
              <Form.Select defaultValue="Select Region...">
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

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Main Location</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  )

}


export default Application