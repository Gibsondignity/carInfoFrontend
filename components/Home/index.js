import React, { useState } from 'react'
import style from './style.module.css'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal'


import BottomNav from '../BottomNav';
import Webcam from 'react-webcam';



const cameraWidth = 300;
const cameraHeight = 400;
const aspectRatio = cameraWidth / cameraHeight;

const videoConstraints = {
  width: {
    min: cameraWidth
  },
  height: {
    min: cameraHeight
  },
  aspectRatio
};


const Home = () => {

  // Tutorial Modal
  const [tutorialModal, setTutorialModal] = useState(false);
  const handleTutorialClose = () => setTutorialModal(false);
  const handleTutorialShow = () => setTutorialModal(true);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );


  const [whoami, setWhoami] = useState('I dont know!');
  const [error, setError] = useState('');

  React.useEffect(() => {
    
    fetch("http://localhost:8000/account/userInfo/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then(response => response.json())
    .then((data) => {
        setWhoami(data)
        console.log(data)
    })
    .catch((err) => {
      console.log(err);
      setError("You are not logged in");
    });
   
   }, [])
      
  return (
    <>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Scan photo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Webcam
            audio={false}
            height={cameraHeight}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={cameraWidth}
            videoConstraints={videoConstraints}
          />
        <button onClick={capture}>Sacn Now</button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Check
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Tutorial Modal */}
      <Modal show={tutorialModal} onHide={handleTutorialClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Help Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <h2>How to use the app</h2>


        <p>
          Hello <h3>{ whoami.username },</h3> Welcome to the help center. Here you can find all the information you need to use the app.
        </p>

        <h3>How to scan a plate</h3>
        <p> Tap on scan now, wait to to get the camera focussed on the plate</p>


        <h3>Check known plate</h3>
        <p> </p>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTutorialClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End of Tutorial Modal */}


      <div className={style.background}>
        <div className={style.container}>
          <div>
            <h1 className={style.title}>Scan Plate</h1>
          </div>

          <div>
            
            <Button className={style.tutorial} 
              onClick={handleTutorialShow}>
              Guide
            </Button>
            
          </div>
          
        </div>
        
        <div className={style.empty_space}></div>
        
      <div>

      </div>

      <div className={style.buttonDiv}>
        <Button className={style.scanButton} onClick={handleShow}  variant="secondary">Scan Now</Button>
        
      </div>
        
      
      <BottomNav name="home" />
      </div>
    </>
  )
}


export default Home;