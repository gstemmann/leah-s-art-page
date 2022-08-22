import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button, Card } from "react-bootstrap";


const BASE_URL = 'http://localhost:1337'

const StringArt = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }
    
    return (
        <div>
            <Container className="text-end">
            <h1>StringArt</h1>   
                <p>
                    Leah began making string art in 2016. 
                    What started out as a fun hobby with friends has grown into a true labor of love.
                    below you will notice four different categories of string art. 
                    Click on them to learn more about what makes them distinct.
                </p>
                <br></br>
                <br></br>
                <br></br>
            </Container>
        <Container className="container-fluid">
                <Row>
                    <Col>
                        <Card className="text-center">
                            
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.string_art_circles.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/circles">Circles
                                            </Button>
                                </Card.ImgOverlay>
                        </Card>
                        <Card className="text-center">
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.string_art_dreamcatchers.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/dreamcatchers">Dreamcatchers
                                            </Button>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>


                    <Col>
                    <Card className="text-center">
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.string_art_tessellations.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/tessellations">Tessellations
                                            </Button>
                                </Card.ImgOverlay>
                        </Card>
                        
                        <Card className="text-center">
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.string_art_mixed_media.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/mixed">Mixed Media
                                            </Button>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
    }
export default StringArt;
