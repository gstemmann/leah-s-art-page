import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const MixedMedia = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_mixed_media } = data.data.attributes

    return (
        <div>
            <Container className="container-fluid text-center">
                <Row className="p-5">
                    <Col className="align-self-left">
                        <h1>mixed-media</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Third Eye Energy</strong>
                                <p><span>8x10"</span></p>
                                <p><span>2022</span></p>
                                <p><span>~contact to purchase</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[6].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col> 
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Machine Tear</strong>
                                <p><span>4x7"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Power Lines</strong>
                                <p><span>16x6"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[7].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Inland Empire</strong>
                                <p><span>4x6"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Chi</strong>
                                <p><span>4x6"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                     
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                      
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[4].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                    <Row className="p-5">
                        <Col>
                            <Card  border="light">
                                <strong>Volunteer</strong>
                                <p><span>3x6"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_mixed_media.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                    </Row>
                </Container>
        
        </div>
    );
    }
export default MixedMedia;
