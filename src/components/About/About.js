import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

const BASE_URL = "https://lstemmann-art-page.herokuapp.com"

const About = () => {
    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_mixed_media } = data.data.attributes

    return (
        <div>
        <h1>about</h1>
        <Container className="container-fluid">
            <Row className="p-5">
                <Col className="align-self-left">
                    <p>In 2015, she received her BA in Studio Art from University California at
                        Santa Cruz, where she studied contemporary ways of integrating multiple forms of media,
                        including sculpture, printmaking, and 2D design. Her work has been exhibited at the 
                        Sasse Museum of Art in Pomona, CA, Secret Land Artist Residendency in Altadena, CA,
                        and at Shock Records in Portland, OR.
                    </p>
                    <br>
                    </br>
                    <p>
                        *To purchase artwork, or for more information regarding commissions and show
                        opportunities, please send a message via the <Link to="/contact"></Link> page
                    </p>
                </Col>
                <Col>
                <img className="img-fluid rounded-circle" 
                        src={string_art_mixed_media.data[5].attributes.url} 
                        alt="test_photo">
                        </img>

                </Col>
            </Row>
        </Container>
        </div>

       

    );
    }
export default About;
