// Player.js
import React from 'react';
import { Card } from 'react-bootstrap';


function Player ({
    Name = "NA",
    Team = "NA",
    Nationality = "NA",
    JerseyNumber = 0,
    Age = 0,
    ImageURL = "https://m.media-amazon.com/images/I/81AHMdYqs4L._AC_UF894,1000_QL80_.jpg"
}) {
    return(
        <div className = "col-12 col-lg-4">
            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white', margin: 'auto', marginTop: '20px', border: '2px solid gold' }}>
                <Card.Img variant="top" src={ImageURL} style={{ width: '17.8rem', height: '17.8rem', backgroundColor: 'rgb(223, 202, 100)' }} alt = "players" />
                <Card.Body>
                    <Card.Title className='fw-bold'>{Name} - {Team}</Card.Title>
                    <Card.Text>nationality: {nationality}</Card.Text>
                    <Card.Text>number: {number}</Card.Text>
                    <Card.Text>age: {age}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Player;
