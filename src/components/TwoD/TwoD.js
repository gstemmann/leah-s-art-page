import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import './TwoD.css';


const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const TwoD = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { two_d_ink, two_d_water_color } = data.data.attributes

    return (
        
        <div>
            <Container>
                <Row>
                    <Col className="text-center">
                    <h1>2D Drawings</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col>
                    <Card className="text-center">
                           
                                <Card.Img className="card-img-top img-fluid"  
                                        src={two_d_ink.data[0].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/ink">Ink
                                            </Button>
                                </Card.ImgOverlay>
                                
                            </Card>
                    </Col>
                    <Col>
                            <Card className="text-center">
                           
                                <Card.Img className="card-img-top img-fluid"  
                                        src={two_d_water_color.data[0].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/watercolor">Water Color
                                            </Button>
                                </Card.ImgOverlay>
                                
                            </Card>
                    </Col>

                </Row>
                    
            </Container>
        </div>
    );
    }
export default TwoD;
