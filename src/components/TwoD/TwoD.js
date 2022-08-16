import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_photo from "../../assets/images/Home/home_photo.webp";

const TwoD = () => {
    return (
        <div>
        <h1>This page renders no text just the "2D Drawings title" and 2 buttons --- ink and watercolor</h1>
       

        <br></br>
        <Container className="container-fluid">
                <Row className="p-5">
                <Col>
                <Button variant="light">  <Link to="/ink">Ink</Link> </Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                
                    <Col>
                    <Button variant="light"><Link to="/watercolor">Water Color</Link> </Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>

                </Row>
                
            </Container>
        </div>
    );
    }
export default TwoD;
