import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const Ink = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { two_d_ink } = data.data.attributes


    return (
        <div>
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="align-self-center">
                        <h1>INK ON PAPER</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <img className="img-fluid" 
                            src={two_d_ink.data[0].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[1].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[2].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[3].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[4].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[5].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={two_d_ink.data[6].attributes.url} 
                            alt="test_photo">
                            </img>


                        </Col>
                </Row>
                
            </Container>
        </div>
    );
    }
export default Ink;
