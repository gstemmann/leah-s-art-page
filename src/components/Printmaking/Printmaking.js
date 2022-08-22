import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button, Card } from "react-bootstrap";


const BASE_URL = 'http://localhost:1337'

const Printmaking = () => {

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
                    <Col>
                    <Card className="text-center">
                           
                           <Card.Img className="img-fluid"  
                                   src={BASE_URL + data.data.attributes.prints_relief.data[0].attributes.url} 
                                   alt={"test_photo"}/>
                           <Card.ImgOverlay>
                                       <Button variant="danger" href="/relief">Relief
                                       </Button>
                           </Card.ImgOverlay>
                           
                       </Card>

                       <Card className="text-center">
                           
                           <Card.Img className="img-fluid"  
                                   src={BASE_URL + data.data.attributes.prints_leaf.data[0].attributes.url} 
                                   alt={"test_photo"}/>
                           <Card.ImgOverlay>
                                       <Button variant="danger" href="/leafprints">Leaf Prints
                                       </Button>
                           </Card.ImgOverlay>
                           
                       </Card>
                    
                        
                        </Col>

                        <Col>
                        <Card className="text-center">
                           
                                <Card.Img className="img-fluid"  
                                        src={BASE_URL + data.data.attributes.prints_intaglio.data[1].attributes.url} 
                                        alt={"test_photo"}/>
                                <Card.ImgOverlay>
                                            <Button variant="danger" href="/intaglio">Intaglio
                                            </Button>
                                </Card.ImgOverlay>
                                
                            </Card>
                        
                            <Card className="text-center">
                           
                           <Card.Img className="img-fluid"  
                                   src={BASE_URL + data.data.attributes.prints_lithographs.data[0].attributes.url} 
                                   alt={"test_photo"}/>
                           <Card.ImgOverlay>
                                       <Button variant="danger" href="/lithographs">Lithographs
                                       </Button>
                           </Card.ImgOverlay>
                           
                       </Card>
                    </Col>
                </Row>
                
            </Container>

        </div>

        
    );
    }
export default Printmaking;
