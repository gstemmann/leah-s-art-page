import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./LeafPrints.css";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const LeafPrints = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { prints_leaf } = data.data.attributes

    return (
        <div>
            <Container className="justify-content-center container-fluid">
                <Row className="p-5">
                    <Col >
                        <h5>Leaf Prints are taken from real leaves. They are made by rolling one side of the Leaf
                            with Gamblin relied ink, then stamping them onto paper and burnishing them until a legible print is revealed.
                        </h5>
                    </Col>
                </Row>
            </Container>


            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                <p>sherry</p>
                                <p><span>9x12'</span></p>
                                <p><span>2019</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                <p>spring creek trail</p>
                                <p><span>11x14"</span></p>
                                <p><span>2019</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[7].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                <p>untitled</p>
                                <p><span>9x12"</span></p>
                                <p><span>2019</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                <p>filbert hazel</p>
                                <p><span>8x10"</span></p>
                                <p><span>2019</span></p>
                                <p><span>sold</span></p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                        
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img  
                                    src={prints_leaf.data[6].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img  
                                    src={prints_leaf.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                            
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                               
                            </Card>
                        </Col>
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={prints_leaf.data[4].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>
                        </Col>       
                </Row>
            </Container>


        </div>
    );
    }
export default LeafPrints;



// <img className="img-fluid" 
// src={prints_leaf.data[2].attributes.url} 
// alt="test_photo">
// </img>

// <img className="img-fluid" 
// src={prints_leaf.data[3].attributes.url} 
// alt="test_photo">
// </img>

// <img className="img-fluid" 
// src={prints_leaf.data[4].attributes.url} 
// alt="test_photo">
// </img>

// <img className="img-fluid" 
// src={prints_leaf.data[5].attributes.url} 
// alt="test_photo">
// </img>

// <img className="img-fluid" 
// src={prints_leaf.data[6].attributes.url} 
// alt="test_photo">
// </img>

// <img className="img-fluid" 
// src={prints_leaf.data[7].attributes.url} 
// alt="test_photo">
// </img>