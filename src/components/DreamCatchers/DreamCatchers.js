import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const DreamCatchers = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_dreamcatchers } = data.data.attributes


    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>dreamcatchers</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                            <Col>
                                <Card  border="light">
                                    <strong>Yellow</strong>
                                    <p><span>poplar moulding, weathership nails, and machine embroidery</span></p>
                                    <p><span>36x48"</span></p>
                                    <p><span>2022</span></p>
                                    <br></br>
                                    <p><span>~sold</span></p>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="img-fluid" border="light">
                                    <Card.Img 
                                        src={string_art_dreamcatchers.data[0].attributes.url} 
                                        alt="test_photo">
                                    </Card.Img>
                                </Card>      
                            </Col>
                            
                    </Row>
                    <Row className="p-5">
                            <Col>
                                <Card  border="light">
                                    <strong>Pachinko</strong>
                                    <p><span>4x4.5 ft</span></p>
                                    <p><span>2021</span></p>
                                    <br></br>
                                    <p><span>~sold</span></p>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="img-fluid" border="light">
                                    <Card.Img 
                                        src={string_art_dreamcatchers.data[1].attributes.url} 
                                        alt="test_photo">
                                    </Card.Img>
                                </Card>      
                            </Col>
                        
                    </Row>
                </Container>
        </div>

    );

    }
export default DreamCatchers;
