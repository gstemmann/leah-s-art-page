import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import './Home.css';



// const BASE_URL = "http://localhost:3001"

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Home = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_tessellations, prints_relief, two_d_ink, string_art_circles } = data.data.attributes   
    
    return (
        

        <div>
            <Row className="p-5" >
                <Col className="text-center">
                    <Card>
                        <Card.Img
                            className="card-img-top img-fluid"  
                            src={string_art_circles.data[2].attributes.url} 
                            alt={"home_photo"}/>
                    </Card>
                </Col>
                <Col className="align-self-center">
                    <p>
                        Leah Stemmann  is an American multidisciplinary artist from Southern California.  
                        She experiments with a range of media and styles, 
                        from geometric tessellations to free-flowing watercolors.  
                        Her most recent work involves painting on wood with stain, and combining hardware on the surface, such as nails and string.  
                        Her creations explore the harmonious -yet dissonant -intersections between our natural and industrial world.
                    </p>
                </Col>
            </Row>

            <Container>
                
                    <Row className="p-5">
                            <Col xs={12} md={4}>
                                <Card className="text-center">
                                    <Card.Img className="card-img-top img-fluid"
                                            src={string_art_tessellations.data[10].attributes.url} 
                                            alt={"test_photo"}/>
                                    <Card.ImgOverlay>
                                                <Button size="sm" variant="danger" href="/string">StringArt
                                                </Button>
                                    </Card.ImgOverlay>  
                                </Card>
                            </Col>


                            <Col xs={12} md={4}>
                                <Card className="text-center">
                                    <Card.Img className="card-img-top img-fluid"  
                                            src={prints_relief.data[0].attributes.url} 
                                            alt={"test_photo"}/>
                                    <Card.ImgOverlay>
                                                <Button size="sm" variant="danger" href="/prints">Printmaking
                                                </Button>
                                    </Card.ImgOverlay>  
                                </Card>
                            </Col>


                            <Col xs={12} md={4}>
                                <Card className="text-center">
                                    <Card.Img className="card-img-top img-fluid"  
                                            src={two_d_ink.data[0].attributes.url} 
                                            alt={"test_photo"}/>
                                    <Card.ImgOverlay>
                                                <Button size="sm" variant="danger" href="/twoD">2D
                                                </Button>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    
            </Container>
        
        </div>

    );
}

export default Home;
