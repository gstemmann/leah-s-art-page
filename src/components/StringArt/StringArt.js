import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button } from "react-bootstrap";


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
            <h1>StringArt</h1>   
                <p>
                    Leah began making string art in 2016. 
                    What started out as a fun hobby with friends has grown into a true labor of love.
                    below you will notice four different categories of string art. 
                    Click on them to learn more about what makes them distinct.
                </p>
    
        <Container className="container-fluid">
                <Row>
                    <Col>
                        <Button variant="light"> <Link to="/circles">Circles</Link> </Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.string_art_circles.data[1].attributes.url} 
                            alt={"test_photo"}/>
                    
                        <Button variant="light"><Link to="/dreamcatchers">DreamCatchers</Link> </Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.string_art_dreamcatchers.data[1].attributes.url} 
                            alt={"test_photo"}/>
                    </Col>


                    <Col>
                        <Button variant="light"><Link to="/tessellations">Tessellations</Link></Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.string_art_tessellations.data[5].attributes.url} 
                            alt={"test_photo"}/>
                        
                        <Button variant="light"><Link to="/mixed">Mixed Media</Link></Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.string_art_mixed_media.data[7].attributes.url} 
                            alt={"test_photo"}/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
    }
export default StringArt;
