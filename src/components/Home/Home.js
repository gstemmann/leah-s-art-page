import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import home_photo from "../../assets/images/Home/home_photo.webp";


const BASE_URL = 'http://localhost:1337'

const Home = () => {

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
            <Row className="p-5" >
                <Col className="text-center">
                    <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                </Col>
                <Col className="align-self-center">
                    <p>
                        Leah is a multidisciplinary artist from Southern California.  
                        She experiments with a range of media and styles: 
                        from heavily-geometric tessellations, to organic, free-flowing watercolors.  
                        Her most recent work involves stain-painting on wood and  incorporating hardware on the surface, such as nails and string.  
                        These creations explore the harmonious and dissonant intersections between our natural and industrial world.
                    </p>
                </Col>
            </Row>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <Card className="text-center">
                           
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.string_art_tessellations.data[10].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/string">StringArt
                                            </Button>
                                </Card.ImgOverlay>
                                
                            </Card>
                        </Col>


                        <Col>
                            <Card className="text-center">
                           
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.prints_relief.data[3].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/prints">Printmaking
                                            </Button>
                                </Card.ImgOverlay>
                                
                            </Card>
                        </Col>


                        <Col>
                            <Card className="text-center">
                           
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.two_d_ink.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/twoD">2D
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
