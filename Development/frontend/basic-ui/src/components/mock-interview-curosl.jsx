import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import img from '../assets/images/9067498.jpg';
import '../assets/css/mock-interview.css';


function CardGridExample() {
  const cardData = [
    {
      title: 'Machine Learning',
      level: 'Easy',
      color: 'success',
      link: '/start-interview/ml',
    },
    {
      title: 'Deep Learning',
      level: 'Medium',
      color: 'warning',
      link: '/start-interview/dl',
    },
    {
      title: 'NLP Basics',
      level: 'Easy',
      color: 'success',
      link: '/start-interview/nlp',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Ready Interviews</h2>
      <Row className="g-4 justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} sm={10} md={5} lg={4}>
            <Card style={{ width: '100%', minHeight: '400px' }}>
              <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{card.title}</Card.Title>
                  <Badge bg={card.color} className="mb-3">
                    Level: {card.level}
                  </Badge>
                </div>
                <Button variant="primary" href={card.link}>
                  Start Interview
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
      </Row>
    </div>
  );
}

export default CardGridExample;
