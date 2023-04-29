import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export function About(){
    return(
        <Container style={{backgroundColor:"black"}}>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                <Card style={{ width: '100%', backgroundColor:"lightgray",marginTop:"120px",marginBottom:"120px" }} >
                    <Card.Body>
                        <Card.Title><div style={{backgroundColor:"#FFC107" , padding:"20px",}}>About Us</div></Card.Title>
                        <Card.Text>
                            <br />
                        <p style={{textAlign:"left"}}>Customer friendly app Namma Yatri is a mobility application built with a vision to effectively contribute to the Open Mobility initiative. The true strength of an open mobility initiative lies in a collective ecosystem of multiple mobility service providers to coexist on a common standard network. This allows for enhanced choice for customers to avail the benefits of a truly multi modal offering. The application, has been built on the Beckn Protocol which is an open source protocol.                        
                        </p >
                        <p style={{textAlign:"left"}}>Namma Yatri is the first open network mobility application built with the idea to provide multi-modal service to the commuters without the involvement of any middlemen. Auto rickshaws are the first of the many service providers to join this mobility network. This application is built on the common network standards defined by ONDC built on the Beckn protocol (open source). The common network standards allows for interoperability for any buyer app compliant with the network standards to offer rides</p>

                        </Card.Text>
                     
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        )
}