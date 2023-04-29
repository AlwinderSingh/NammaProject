import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function FeedbackCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./testimonial.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./testimonial.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./testimonial.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeedbackCarousel;