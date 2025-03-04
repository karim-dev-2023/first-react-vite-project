import Card from "react-bootstrap/Card";
import "../assets/styles/Dish.scss";

function Dish({ nameItem, imageSrc, price }) {
  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
