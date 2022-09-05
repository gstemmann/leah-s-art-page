import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const WaterColor = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { two_d_water_color } = data.data.attributes

    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>watercolor on paper</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                    <Row className="p-5">   
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>harmony</p>
                                <p><span>2018</span></p>
                                <p><span>for sale</span></p>
                                <p><span>*contact for purchase</span></p>
                            </Card>
                        </Col> 
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>use it or lose it</p>
                                <p><span>9x12"</span></p>
                                <p><span>2020</span></p>
                                <p><span>for sale</span></p>
                                <p><span>*contact for purchase</span></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>interdimension</p>
                                <p><span>9x12"</span></p>
                                <p><span>2017</span></p>
                                <p><span>for sale</span></p>
                                <p><span>*contact for purchase</span></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[4].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>star gazer</p>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>angel-wing begonia</p>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[6].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>passion flower</p>
                                <p><span>11x14"</span></p>
                                <p><span>2020</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={two_d_water_color.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <p>ventricular</p>
                                <p><span>9x12"</span></p>
                                <p><span>2018</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
    }
export default WaterColor;
