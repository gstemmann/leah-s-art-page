import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

const BASE_URL = 'http://localhost:1337'


const ThreeD = () => {

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
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>3D</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <img className="img-fluid" 
                            src={BASE_URL + data.data.attributes.three_d.data[0].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={BASE_URL + data.data.attributes.three_d.data[1].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={BASE_URL + data.data.attributes.three_d.data[2].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={BASE_URL + data.data.attributes.three_d.data[3].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={BASE_URL + data.data.attributes.three_d.data[4].attributes.url} 
                            alt="test_photo">
                            </img>


                        </Col>
                </Row>
                
            </Container>
        </div>
    );
    }
export default ThreeD;
