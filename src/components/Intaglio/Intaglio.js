import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Intaglio = () => {

    
    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { prints_intaglio } = data.data.attributes

    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>Intaglio</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <span>Circulation</span>
                                <span>5x7"</span>
                                <span>zinc etching</span>
                                <span>2015</span>
                                <br></br>
                                <span>original print: 200 usd</span>
                                <span>digital print: 45 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col> 
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                I am Everyone(1/4)
                                <span>5x7"</span>
                                <span>plex</span>
                                <span>2018</span>
                                <br></br>
                                <span>original print: 200 usd</span>
                                <span>digital print: 35 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                Embedded
                                <span>5x7"</span>
                                <span>plexi engraving 1/1</span>
                                <span>2013</span>
                                <br></br>
                                <span>orignal print: 200 usd</span>
                                <span>digital print: 35 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                Embedded.O
                                <span>plexi engraving 1/1</span>
                                <span>2013</span>
                                <br></br>
                                <span>orignal print: 175 usd</span>
                                <span>digital print: 35 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                Social Network
                                <span>pixel print 1/1</span>
                                <span>2013</span>
                                <br></br>
                                <span>orignal print: 200 usd</span>
                                <span>digital print: 35 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                Network
                                <span>5x7"</span>
                                <span>plexi engraving 1/1</span>
                                <span>2013</span>
                                <br></br>
                                <span>orignal print: 200 usd</span>
                                <span>digital print: 35 usd</span>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_intaglio.data[4].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                </Container>
    

        </div>
    );
    }
export default Intaglio;
