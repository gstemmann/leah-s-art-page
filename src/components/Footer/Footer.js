import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row className="justify-content-center">
                <Col className="col-auto">
                    <p>Copyright © 2022 Leah Stemmann Art - All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    );
    }
export default Footer;
