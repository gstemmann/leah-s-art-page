import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button } from "react-bootstrap";


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
            <Container className="container-fluid">
                <Row>
                    <Col>
                        <Button variant="light"> <Link to="/relief">Relief</Link></Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.prints_relief.data[0].attributes.url} 
                            alt={"test_photo"}/>

                        <Button variant="light"><Link to="/leafprints">Leaf Prints</Link></Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.prints_leaf.data[2].attributes.url} 
                            alt={"test_photo"}/>
                    
                        
                        </Col>

                        <Col>
                        <Button variant="light"><Link to="/intaglio">Intaglio</Link> </Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.prints_intaglio.data[1].attributes.url} 
                            alt={"test_photo"}/>
                        
                        
                        <Button variant="light"><Link to="/lithographs">Lithographs</Link></Button>
                            <img className="img-fluid"  
                            src={BASE_URL + data.data.attributes.prints_lithographs.data[0].attributes.url} 
                            alt={"test_photo"}/>
                    </Col>
                </Row>
                
            </Container>

        </div>

        
    );
    }
export default Printmaking;
