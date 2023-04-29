import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import FeedbackCarousel from "./FeedbackCarousel";

export function Feedback(){
    return(
        <Container style={{backgroundColor:"black"}}>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                <Card style={{ width: '100%', backgroundColor:"lightgray",marginTop:"120px",marginBottom:"120px" }} >
                    <Card.Body>
                        <Card.Title><div style={{backgroundColor:"#FFC107" , padding:"20px",}}>Testimonials</div></Card.Title>
                        <Card.Text>
                            <br />
                            <FeedbackCarousel />
                        </Card.Text>
                     
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        )
}