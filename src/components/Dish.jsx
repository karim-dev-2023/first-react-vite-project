import { Card, Badge, Stack } from "react-bootstrap";
import "../assets/styles/Dish.scss";

function Dish({ nameItem, imageSrc, price, isNew = false }) {
  return (
    <Card>
      {isNew && (
        <Stack>
          <Badge pill bg="primary"  >
            Nouveau
          </Badge>
        </Stack>
      )}
      
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
