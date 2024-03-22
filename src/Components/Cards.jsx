import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink} from 'react-router-dom'

function Carding({cardTitle,image}){
    return (
        <Card className="mt-10">
          <Card.Img variant="top" src={image} className="img-fluid hover:opacity-25"  />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text className="mb-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <NavLink to="/contact"
            className="bg-[#09f4bf] text-white font-medium border-0 hover:bg-[#5becca] p-2 rounded">
              Click Me →
            </NavLink>
          </Card.Body>
        </Card>
    )
}
export default Carding