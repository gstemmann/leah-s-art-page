import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
    const { data, loading, error } = useFetch("http://localhost:1337/api/image?populate[2]=collage");
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }


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
                    <p>(video goes here)</p>
                </Col>
            </Row>
        </Container>
        </div>

       

    );
    }
export default About;
