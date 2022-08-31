import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

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
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="align-self-center">
                        <p>Leaf Prints are taken from real leaves. They are made by rolling one side of the Leaf
                            with Gamblin relied ink, then stamping them onto paper and burnishing them until a legible print is revealed.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                            <img className="img-fluid" 
                            src={prints_leaf.data[0].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[1].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[2].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[3].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[4].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[5].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[6].attributes.url} 
                            alt="test_photo">
                            </img>

                            <img className="img-fluid" 
                            src={prints_leaf.data[7].attributes.url} 
                            alt="test_photo">
                            </img>

                        </Col>
                </Row>
                
            </Container>


        </div>
    );
    }
export default LeafPrints;
