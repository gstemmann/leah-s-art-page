import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Digital = () => {
    return (
        <div>
        <h1>digital</h1>
        <Container className="container-fluid">
            <Row className="p-5">
                <Col>
                    <p>(video goes here)</p>
                </Col>
                <Col className="align-self-left">
                    <p>Nominated for an Academy Award for Best Documentary Short in 2016,
                        Last Day of Freedom tells the story of Billy Babbet, who must testify against his
                        brother, a Vietnam vet who gets put on trial for a crime hemay have commited
                        during a PTSD episode. Directed by Dee Hibbert and Nomi Talisman. The film features
                        individually roto-scoped, black-and-white stills that serve to emphasize how difficult
                        these scenarios can be when solutions lie in a very gray area.
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    );
    }
export default Digital;
