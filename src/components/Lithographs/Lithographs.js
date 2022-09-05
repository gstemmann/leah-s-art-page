import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Lithographs = () => {

      
    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { prints_lithographs } = data.data.attributes

    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>lithographs</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                    <Col>
                        <Card  border="light">
                            <strong>Two Forces of Time</strong>
                            <p><span>5x7"</span></p>
                            <p><span>stone lithograph/chine-colle print</span></p>
                            <p><span>2013</span></p>
                            <p><span>original print: 300 usd</span></p>
                            <p><span>digital print: 35 usd</span></p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="img-fluid" border="light">
                            <Card.Img 
                                src={prints_lithographs.data[1].attributes.url} 
                                alt="test_photo">
                            </Card.Img>
                        </Card>      
                    </Col> 
                </Row>
                <Row className="p-5">
                    <Col>
                        <Card  border="light">
                            <strong>Two Forms of Time</strong>
                            <p><span>5x7"</span></p>
                            <p><span>stone lithograph/chine-colle print</span></p>
                            <p><span>2013</span></p>
                            <p><span>original print: 300 usd</span></p>
                            <p><span>digital print: 35 usd</span></p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="img-fluid" border="light">
                            <Card.Img 
                                src={prints_lithographs.data[2].attributes.url} 
                                alt="test_photo">
                            </Card.Img>
                        </Card>      
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col>
                        <Card  border="light">
                            <strong>Sitting in a Room</strong>
                            <p><span>8x24"</span></p>
                            <p><span>stone lithograph print</span></p>
                            <p><span>2013</span></p>
                            <p><span>orignal print: sold out</span></p>
                            <p><span>orignal print: 35 usd</span></p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="img-fluid" border="light">
                            <Card.Img 
                                src={prints_lithographs.data[0].attributes.url} 
                                alt="test_photo">
                            </Card.Img>
                        </Card>      
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }
export default Lithographs;
