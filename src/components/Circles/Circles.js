import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import first_circle from "../../assets/images/StringArt/Circles/first_circle.webp";

const Circles = () => {
    return (
        <div>
        <h1>This page shows photos of Circles in string art</h1>
            <Container className="container-fluid">
                <Row className="p-5">
                    <Col className="align-self-center">
                        <p>
                        All circular pieces are based on a specific amount of nails making up the circumference of the design. 
                        To achieve these shapes and patterns, there are designated rules that must be followed, usually based on a times table of
                        a specific number that is then followed throughout the entire pattern until the design is complete. Different patterns form
                        different shapes within the circle. And although there are limits to working in only one particular shape, the possibilities within a circle are indeed infinite.
                        </p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src={first_circle}></img>
                    </Col>
                 
                </Row>  
            </Container>
        </div>
    );
    }
export default Circles; 
