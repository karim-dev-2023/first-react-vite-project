import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/Dish.scss";
import { useCart } from "../hooks/useCart";

function Dish({ nameItem, imageSrc, price, isNew = false}) {
  const { increment, decrement } = useCart();
  return (
    <Card>
      {isNew && <Badge bg="primary">Nouveau</Badge>}

      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Button
          onClick={increment}
          variant="primary"
          className="mr-2"
        >
          Add To Cart
        </Button>
        <Button
          onClick={decrement}
          variant="danger"
        >
          Remove To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
