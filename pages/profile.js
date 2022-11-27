import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from "../components/Navbar";
import BottomNav from '../components/BottomNav';



function Profile() {
    const [userProfile, setUserProfile] = useState({});
    React.useEffect(() => {
    
        fetch("http://localhost:8000/account/userInfo/", {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
        .then(response => response.json())
        .then((data) => {
            setUserProfile(data);
        })
        .catch((err) => {
          console.log(err);
          setError("You are not logged in");
        });
       
       }, [])

  return (
    <div>
        <Navbar />
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>User Profile</Card.Title>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item>Username: {userProfile.username}</ListGroup.Item>
                <ListGroup.Item>First Name: {userProfile.first_name}</ListGroup.Item>
                <ListGroup.Item>Second Name: {userProfile.last_name}</ListGroup.Item>
                <ListGroup.Item>Email: {userProfile.email}</ListGroup.Item>
                <ListGroup.Item>NB: Please note that you cannot change your username or email address.
                                    Contact the admin if you wish to change your username or email address.
            </ListGroup.Item>
            </ListGroup>
            
            </Card>

        <BottomNav />
    </div>
  );
}

export default Profile;