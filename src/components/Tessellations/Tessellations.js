import React from "react";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container } from "react-bootstrap";


const BASE_URL = "https://lstemmann-art-page.herokuapp.com"


const Tessellations = () => {

    const { data, loading, error } = useFetch(`${BASE_URL}/api/image/?populate=%2A`);
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }

    const { string_art_tessellations } = data.data.attributes

    return (
        <div>
            <div>
                <Container className="container-fluid">
                <h1>tessellations</h1>
                </Container>
            <Container className="container-fluid">

                <Row className="p-5">
                
                    <Col className="sm align-self-center" >

                    <img className="img-fluid rounded-circle" 
                        src={string_art_tessellations.data[9].attributes.url} 
                        alt="test_photo">
                        </img>
                    </Col>
                    <Col className="sm align-self-center">
                        <p>
                            the Oxford English Dictionary defines a tessellation as, " 
                            an arrangement of shapes closely fitted together in a repeated pattern without gaps or overlapping."
                            In grade school, Leah learned how to make a tessellation using card stock and a blade for paper collages, 
                            and since then has used them in her 2D work. Naturally, she eventually discovered the power 
                            and beauty of making tessellated patterns with string.  Tiling lends itself almost perfectly to this medium.  
                            From The Flower of Life to a rhombille tiling, 
                            we see very close similarities and, in some cases, mirroring measurements that unite these sacred patterns.
                        </p>
                    </Col>
                </Row>  
            </Container>
        
            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[0].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={string_art_tessellations.data[1].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={string_art_tessellations.data[2].attributes.url} 
                                alt="test_photo">
                                </img>

                                <img className="img-fluid" 
                                src={string_art_tessellations.data[3].attributes.url} 
                                alt="test_photo">
                                </img>

                      
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[4].attributes.url} 
                                alt="test_photo">
                                </img>
                      
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[5].attributes.url} 
                                alt="test_photo">
                                </img>

                      
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[6].attributes.url} 
                                alt="test_photo">
                                </img>

                        
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[7].attributes.url} 
                                alt="test_photo">
                                </img>

                     
                                <img className="img-fluid" 
                                src={string_art_tessellations.data[10].attributes.url} 
                                alt="test_photo">
                                </img>


                                <img className="img-fluid" 
                                src={string_art_tessellations.data[11].attributes.url} 
                                alt="test_photo">
                                </img>

                       

                        </Col>
                   
                
                </Row>
                
            </Container>
        
            </div>
        </div>

    
);
}

export default Tessellations;


