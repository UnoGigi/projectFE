import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './SingleProduct.css'
import { Link } from 'react-router-dom';

function SingleProduct({ nome, category, prezzo, cover1, description, _id }) {


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
      <Link to={`/products/${_id}`} className='text-decoration-none mt-3 mb-2 d-flex justify-content-center align-self-center align-items-center'><button className='glow-on-hover'>
         Dettagli
        </button></Link>
    </Card>
  );
}

export default SingleProduct;