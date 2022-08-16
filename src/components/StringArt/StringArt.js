import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_photo from "../../assets/images/Home/home_photo.webp";




const StringArt = () => {
    return (
        <div>
        <h1>This page has 4 buttons to 4 different types of StringArt</h1>
    

        <Container className="container-fluid">
                <Row className="p-5">
                <Col>
                <Button variant="light"> <Link to="/circles">Circles</Link> </Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                
                    <Col>
                    <Button variant="light"><Link to="/tessellations">Tessellations</Link> </Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>

                    <Col>
                    <Button variant="light"><Link to="/dreamcatchers">DreamCatchers</Link></Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                    <Col>
                    <Button variant="light"><Link to="/mixed">Mixed Media</Link></Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
    }
export default StringArt;
