import { Card, Badge } from "react-bootstrap";
import "../assets/styles/Dish.scss";

function Dish({ nameItem, imageSrc, price, isNew = false }) {
  return (
    <Card>
      {isNew && <Badge bg="primary">Nouveau</Badge>}

      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
