import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/Dish.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Dish({ nameItem, imageSrc, price, isNew = false }) {

  const {addToCart} = useContext(CartContext);

  return (
    <Card>
      {isNew && <Badge bg="primary">Nouveau</Badge>}

      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Button onClick={addToCart} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
