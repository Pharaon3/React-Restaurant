import { React } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import restURL from "../public/img/restaurant.png"
import Hierarchy from "./Hierarchy"
import Dishes from "./Dishes"
import MyCart from "./MyCart"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />


function Menu(props) {
  console.log('Menu component entered!')
  return (
    <>
    <img src = {restURL} alt = "restaurant" style = {{ width:'100%', height: '100%', objectFit: 'cover', zIndex: -3}}/>
    <div style = {{position: 'absolute', top: 150, left: 200, color: 'white'}}>
      <h1 style = {{ textShadow: '2px 2px 3px #000000' }}> <b> Restaurant Jannat </b></h1>
      <p style = {{ textShadow: '2px 2px 3px #000000' }}> Indian Restaurant in Puchheim </p>
    </div>
    <Row style = {{width: '100%'}}>
      <Col >
        <Hierarchy key = "hierarchykey" />
      </Col>
      <Col>
        <Dishes key = "disheskey" />
      </Col>
      <Col>
        <MyCart key = "MyCartKey" />
      </Col>           
    </Row>
    </>
  );
}

export default Menu;