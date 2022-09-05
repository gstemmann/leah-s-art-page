import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Ink = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { two_d_ink } = data.data.attributes


    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>INK ON PAPER</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>sentient beings</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>original print: 330 usd</span></p>
                                <p><span>digital print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[6].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col> 
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>6 orange geese</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2017</span></p>
                                <br></br>
                                <p><span>original print: 225 usd</span></p>
                                <p><span>digital print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>hangin' on</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: 250 usd</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>jester energy</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2016</span></p>
                                <br></br>
                                <p><span>orignal print: 224 usd</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>radiation</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: 175 usd</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>demogorgon</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: 280 usd</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>untitled</strong>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>orignal print: 280 usd</span></p>
                                <p><span>orignal print: 35 usd</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_ink.data[4].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                </Container>
        </div>
    );
    }
export default Ink;
