import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Relief = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { prints_relief } = data.data.attributes

    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>Relief Prints</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Forces</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>original print: 95 usd</span></p>
                                <p><span>digital print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_relief.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col> 
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Desert</strong>
                                <p><span>8 1/2 x 11"</span></p>
                                <p><span>traffic cone cut</span></p>
                                <p><span>2018</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_relief.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Lyra</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: sold out</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_relief.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Mushroom</strong>
                                <p><span>7x11"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: sold out</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_relief.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                </Container>
  
        </div>
    );
    }
export default Relief;
