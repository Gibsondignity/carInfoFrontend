import React, { useState } from 'react'
import style from './style.module.css'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import BottomNav from '../BottomNav';

const Home = () => {

  const [tutorialModal, setTutorialModal] = useState(false);
  const handleTutorialClose = () => setTutorialModal(false);
  const handleTutorialShow = () => setTutorialModal(true);

  // results modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [car_number, setCar_number] = useState({});
  const [csrfToken, setscrf] = useState('')
  const [error, setError] = useState('');
  const [carInfo, setCarInfo] = useState({});

  React.useEffect(() => {

    fetch("http://localhost:8000/account/csrf/", {
      credentials: "include",
    })
    .then((res) => {
      let csrfToken = res.headers.get("X-CSRFToken")
      setscrf(csrfToken);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/account/CarDetails/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify({car_number: car_number}),
    })
    
    .then(response => response.json())
        .then((response) => {
          console.log(response)
            if (response.car_number === car_number) {
              setShow(true)
              setError("")
              setCarInfo(response)
            }else{
              setError('Invalid Car Number');
            }
        })

    .catch((err) => {
      console.log(err);
      setError("Enter a valid car number");
    });
    
  }

      
  return (
    <>
      {/* Tutorial Modal */}
      <Modal show={tutorialModal} onHide={handleTutorialClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Help Center</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
        <h1>Show something</h1>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleTutorialClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Results Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Plate: {carInfo.car_number}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`http://localhost:8000${carInfo.picture}`} width="150px" height="150px" />
          <Card.Body>
            <Card.Title>Name: {carInfo.owner_name}</Card.Title>
            <Card.Title>DoB: {carInfo.owner_dob}</Card.Title>
            <Card.Text>
              This car was registered on {carInfo.date_of_reg}
            
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Region: {carInfo.region_of_reg}</ListGroup.Item>
              <ListGroup.Item>Model: {carInfo.car_model}</ListGroup.Item>
              <ListGroup.Item>Type: {carInfo.car_type}</ListGroup.Item>
              <ListGroup.Item>Color: {carInfo.color}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
             
            </Card.Body>
          </Card>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Report
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={style.background}>
        <div className={style.container}>
          <div>
            <h1 className={style.title}>Scan Plate</h1>
          </div>

          <div>
              <Button className={style.tutorial} onClick={handleTutorialShow}>Tutorial</Button>
          </div>
          
        </div>
        
        <div className={style.empty_space}></div>
        
      <div>

      </div>

      <div className={style.buttonDiv}>
        <Form onSubmit={handleSubmit}>
          {error && <p style={{color: "#012148", fontSize: "1.2rem", fontWeight: "bold"}}>{error}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={(e) => setCar_number(e.target.value)} style={{color: "#012148", backgroundColor:"white"}} type="text" placeholder="GR-1016-22" />
          </Form.Group>
          
          <Button className={style.scanButton}   variant="secondary" type="submit">Search Now</Button>

        </Form>
        
      </div>
        
      
      <BottomNav name="home" />
      </div>
    </>
  )
}


export default Home;