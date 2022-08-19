import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button } from "react-bootstrap";
import home_photo from "../../assets/images/Home/home_photo.webp";


const BASE_URL = 'http://localhost:1337'

const TwoD = () => {

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
            <h1>2D Drawings</h1>
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col>
                        <Button variant="light">  <Link to="/ink">Ink</Link> </Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.two_d_ink.data[3].attributes.url} 
                            alt={"test_photo"}/>
                        </Col>
                    
                        <Col>
                        <Button variant="light"><Link to="/watercolor">Water Color</Link> </Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.two_d_water_color.data[3].attributes.url} 
                            alt={"test_photo"}/>
                    </Col>

                </Row>
                    
            </Container>
        </div>
    );
    }
export default TwoD;
