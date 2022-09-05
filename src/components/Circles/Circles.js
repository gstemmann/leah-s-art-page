import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Card } from "react-bootstrap";
// import "./Circles.css";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Circles = () => {
    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_circles } = data.data.attributes

    return (
        <div>
        
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="align-self-center">
                    <h1>Circles</h1>
                        <p>
                        All circular pieces are based on a specific amount of nails making up the circumference of the design. 
                        To achieve these shapes and patterns, there are designated rules that must be followed, usually based on a times table of
                        a specific number that is then followed throughout the entire pattern until the design is complete. Different patterns form
                        different shapes within the circle. And although there are limits to working in only one particular shape, the possibilities within a circle are indeed infinite.
                        </p>
                    </Col>
                    <Col>
                        <img className="rounded-circle img-fluid" 
                        src={string_art_circles.data[10].attributes.url} alt="first circle pic"></img>
                    </Col>
                 
                </Row>  
            </Container>
        
            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <Card className="text-center" border="light">
                                <Card.Img
                                            src={string_art_circles.data[0].attributes.url} 
                                            alt="test_photo">
                                </Card.Img>
                                <p>
                                    <strong style={{color: "black"}}>White Lotus
                                    </strong>
                                </p>
                                
                                <p><span>1 x 1'</span></p>
                                <p><span>2021</span></p>
                                <p><span>250 usd</span></p>

                            </Card>

                            
                                <img className="img-fluid" 
                                src={string_art_circles.data[1].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={string_art_circles.data[2].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={string_art_circles.data[3].attributes.url} 
                                alt="test_photo">
                                </img>

                      
                                <img className="img-fluid" 
                                src={string_art_circles.data[4].attributes.url} 
                                alt="test_photo">
                                </img>
                      
                                <img className="img-fluid" 
                                src={string_art_circles.data[5].attributes.url} 
                                alt="test_photo">
                                </img>

                      
                                <img className="img-fluid" 
                                src={string_art_circles.data[6].attributes.url} 
                                alt="test_photo">
                                </img>

                        
                                <img className="img-fluid" 
                                src={string_art_circles.data[7].attributes.url} 
                                alt="test_photo">
                                </img>

                     
                                <img className="img-fluid" 
                                src={string_art_circles.data[8].attributes.url} 
                                alt="test_photo">
                                </img>

                       
                                <img className="img-fluid" 
                                src={string_art_circles.data[9].attributes.url} 
                                alt="test_photo">
                                </img>

                        </Col>
                   
                
                </Row>
                
            </Container>
        
        </div>

    
);
}
export default Circles; 



