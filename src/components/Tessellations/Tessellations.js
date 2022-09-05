import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";


const BASE_URL = "https://lstemmann-art-page.herokuapp.com"


const Tessellations = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_tessellations } = data.data.attributes

    return (
        <div>
            <div>
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="sm align-self-center" >
                    <img className="img-fluid rounded-circle" 
                        src={string_art_tessellations.data[9].attributes.url} 
                        alt="test_photo">
                        </img>
                    </Col>
                    <Col className="sm align-self-center">
                    <h1>tessellations</h1>
                        <p>
                            the Oxford English Dictionary defines a tessellation as, " 
                            an arrangement of shapes closely fitted together in a repeated pattern without gaps or overlapping."
                            In grade school, Leah learned how to make a tessellation using card stock and a blade for paper collages, 
                            and since then has used them in her 2D work. Naturally, she eventually discovered the power 
                            and beauty of making tessellated patterns with string.  Tiling lends itself almost perfectly to this medium.  
                            From The Flower of Life to a rhombille tiling, 
                            we see very close similarities and, in some cases, mirroring measurements that unite these sacred patterns.
                        </p>
                    </Col>
                </Row>  
            </Container>
        
            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[1].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>XYZ</strong>
                                <p><span>16x16"</span></p>
                                <p><span>2019</span></p>
                                <br></br>
                                <p><span>~SOLD</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[0].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Square Circus</strong>
                                <p><span>1x1'</span></p>
                                <p><span>polyester embroidery nails on oak</span></p>
                                <p><span>plywood</span></p>
                                <p><span>2016</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[2].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Simply Orange</strong>
                                <p><span>6x6"</span></p>
                                <p><span>2020</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[3].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Magical Portal Invention</strong>
                                <p><span>1x1'</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[6].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Los Lakers</strong>
                                <p><span>1x1'</span></p>
                                <p><span>2017</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[10].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Green Wiz</strong>
                                <p><span>1x1'</span></p>
                                <p><span>2020</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[7].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Flower of life</strong>
                                <p><span>16" diameter</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[7].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>flower of life II</strong>
                                <p><span>16" diameter</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[11].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Askew</strong>
                                <p><span>35x35"</span></p>
                                <p><span>2021</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[5].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Granddady Purp</strong>
                                <p><span>16x16"</span></p>
                                <p><span>2020</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
                <Row className="p-5">
                        <Col>
                            <Card className="img-fluid" border="light">
                                <Card.Img 
                                    src={string_art_tessellations.data[8].attributes.url} 
                                    alt="test_photo">
                                </Card.Img>
                            </Card>      
                        </Col>
                        <Col>
                            <Card  border="light">
                                <strong>Cotton Candy</strong>
                                <p><span>1x1'</span></p>
                                <p><span>2018</span></p>
                                <br></br>
                                <p><span>~sold</span></p>
                            </Card>
                        </Col>
                </Row>
            </Container>
        
            </div>
        </div>

    
);
}

export default Tessellations;


