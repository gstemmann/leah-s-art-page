import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

const BASE_URL = 'http://localhost:1337'

const MixedMedia = () => {

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
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="align-self-center">
                        <h1>mixed media</h1>
                        </Col>
                </Row>
            </Container>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[0].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[1].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[2].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[3].attributes.url} 
                                alt="test_photo">
                                </img>

                      
                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[4].attributes.url} 
                                alt="test_photo">
                                </img>
                      
                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[5].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={BASE_URL + data.data.attributes.string_art_mixed_media.data[6].attributes.url} 
                                alt="test_photo">
                                </img>

                        </Col>
                </Row>
                
            </Container>
        
        </div>
    );
    }
export default MixedMedia;
