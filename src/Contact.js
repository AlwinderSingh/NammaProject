import React from 'react'
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <Container style={{backgroundColor:"black"}}>
    <Row>
        <Col lg={{ span: 8, offset: 2 }}>
        <Card style={{ width: '100%', backgroundColor:"lightgray",marginTop:"120px",marginBottom:"120px" }} >
            <Card.Body>
                <Card.Title><div style={{backgroundColor:"#FFC107" , padding:"20px",}}>Ask a Question</div></Card.Title>
                <Card.Text style={{textAlign:"left"}}> 
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Question
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn" style={{backgroundColor:"#FFC107" }}  type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </Card.Text>
                     
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
  )
}
export default ContactForm