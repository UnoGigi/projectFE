import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './SingleProduct.css'
import { Link, useNavigate } from 'react-router-dom';

function SingleProduct({ nome, category, prezzo, cover1, description }) {

  const navigate = useNavigate

  const goDetails = (productId) => {
    navigate(`/dettagli/${productId}`)
  }


  return (
    <Card style={{ width: '18rem' }} className='mt-2 mx-3 mb-4'>
      <Card.Img variant="top" src={cover1} className='cardimg'/>
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{category}</ListGroup.Item>
        <ListGroup.Item>{prezzo}$</ListGroup.Item>
      </ListGroup>
      <button onClick={goDetails()} className='glow-on-hover mt-2 d-flex justify-content-center align-self-center align-items-center'>Dettagli</button>
    </Card>
  );
}

export default SingleProduct;