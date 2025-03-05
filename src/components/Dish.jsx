import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/Dish.scss";

function Dish({ nameItem, imageSrc, price, isNew = false ,addToCart}) {
  // Plus besoin la fonctionnalité ajout d'un panier remplace
  // const addCartHandleClick = (message) => {
  //   alert(message);
  // };

  return (
    <Card>
      {isNew && <Badge bg="primary">Nouveau</Badge>}

      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Button onClick={() => addToCart()} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
