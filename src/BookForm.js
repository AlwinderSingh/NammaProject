import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MapContainer } from './Map';
import { useEffect, useState,useRef } from 'react';


export const BookForm=()=>{
const [lng, setLng] = useState(78.9629);
const [lat, setLat] = useState(20.5937);
const [zoom, setZoom] = useState(5);
const handleLng=(lng)=>{
    setLng(lng)
}
const handleLat=(lng)=>{
    setLat(lng)
}
const handleZoom=(lng)=>{
    setZoom(lng)
}
    return(
        <Container fluid style={{backgroundColor:"black"}}>
            <Row>
                <Col lg={{ span: 6, offset: 3 }}
>
            <div style={{  marginTop:"40px",paddingBottom:"40px",marginBottom:"40px",  backgroundColor:"whitesmoke"}}>
            <MapContainer lng={lng} lat={lat} zoom={zoom} setLat={handleLat} setLng={handleLng} setZoom={handleZoom}></MapContainer>
            </div>
            <div>
            <Form>
            
      <Form.Group className="mb-3" style={{color:"white" ,textAlign:"left"}} controlId="formBasicEmail">
      <h4>Enter Coordinates where to book</h4>
        <Form.Label style={{color:"white" ,textAlign:"left"}}>Latitude</Form.Label>
        <Form.Control type="text" value={lat} />
    
        <Form.Label>Longitude</Form.Label>
        <Form.Control type="text" value={lng} />
        
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
      
    </Form>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}

            </div>
            </Col>

            </Row>
        </Container>
    )
}