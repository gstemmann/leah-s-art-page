import React from "react";

import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Row, Col, Container, Button } from "react-bootstrap";
// import test_photo from "../../assets/images/Home/test_photo.png";
import home_photo from "../../assets/images/Home/home_photo.webp";

const test_photo_path = "/home/george/art-page-backend/public/uploads/rs_w_1280_h_1406_6bd0def5cc.png"
const base_backend_url = "home/george/art-page-backend/public"

const Home = () => {
    const { data, loading, error } = useFetch("http://localhost:1337/api/image/?populate=%2A");
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error</div>;
    }


    return (
        <div>
       

            <Row className="p-5" >
                <Col className="text-center">
                    <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                </Col>
                <Col className="align-self-center">
                    <p>
                        Leah is a multidisciplinary artist from Southern California.  
                        She experiments with a range of media and styles: 
                        from heavily-geometric tessellations, to organic, free-flowing watercolors.  
                        Her most recent work involves stain-painting on wood and  incorporating hardware on the surface, such as nails and string.  
                        These creations explore the harmonious and dissonant intersections between our natural and industrial world.
                    </p>
                </Col>
            </Row>

            <Container className="container-fluid">
                <Row className="p-5">
                        <Col>
                        <Button variant="light"> <Link to="/string">StringArt</Link> </Button>
                                <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                        </Col>
                    
                        <Col>
                            <Button variant="light"><Link to="/prints">Printmaking</Link> </Button>
                                <img className="img-fluid"  src={home_photo} alt={"test_photo"}/>
                        </Col>

                        <Col>
                            <Button variant="light"><Link to="/twod">TwoD</Link></Button>

                                <img className="img-fluid" 
                                src={data.data.attributes.collage.data[0].attributes.url} 
                                alt="test_photo">
                                </img>
                                
                                {/* <img className="img-fluid"
                                src={data.data.attributes.collage.data[0].attributes.name}
                                alt={"test_photo"}/> */}
                        </Col>
                </Row>
                
            </Container>
        
        </div>

    );
}

export default Home;
