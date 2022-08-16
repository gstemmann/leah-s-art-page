import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_photo from "../../assets/images/Home/home_photo.webp";


const Printmaking = () => {
    return (
        <div>
        
        <h1>This page has 4 buttons to 4 different types of Prints </h1>
    

        <br></br>
        <Container className="container-fluid">
                <Row className="p-5">
                <Col>
                <Button variant="light"> <Link to="/relief">Relief</Link></Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                
                    <Col>
                    <Button variant="light"><Link to="/intaglio">Intaglio</Link> </Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>

                    <Col>
                    <Button variant="light"><Link to="/leafprints">Leaf Prints</Link></Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                    <Col>
                    <Button variant="light"><Link to="/lithographs">Lithographs</Link></Button>
                        <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                    </Col>
                </Row>
                
            </Container>

        </div>

        
    );
    }
export default Printmaking;
