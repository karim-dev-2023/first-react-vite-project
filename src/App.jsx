import "./App.scss";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dish from "./components/Dish.jsx";

// Boostrap Import
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useCart } from "./hooks/useCart";

function App() {

  const { count } = useCart();

  // Array
  const dishs = [
    {
      id: 1,
      name: "Tacos à l’unité",
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      prix: 3,
      stock: 12,
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      imageSrc:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      prix: 12,
      stock: 0,
    },
    {
      id: 3,
      name: "Mole poblano",
      imageSrc:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      prix: 5,
      stock: 5,
    },
  ];

  // Ce sont des État
  const [showNewOnly, setshowNewOnly] = useState(false);

  // Filtrage des utilisateurs actifs
  const stockDish = dishs.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  function handleShowNewOnly() {
    setshowNewOnly((prevState) => !prevState);
  }

  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);

  useEffect(() => {
    prevCartCountRef.current = cartCount; // Stocke la valeur avant le re-render
  }, [cartCount]);

  return (
    <>
      <Header />
      <main>
        <Container className="containerPrincipal">
          {(prevCartCountRef.current >= 0 && count>0) &&
            "Le panier est passé de " +
              prevCartCountRef.current +
              " à " +
              count +
              " article"}

          <div className="d-grid gap-2">
            <Button bg="primary" onClick={handleShowNewOnly}>
              {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
            </Button>
          </div>
          <Row xs={1} md={3}>
            {stockDish.map((dish) => (
              <Col md={4} key={dish.id}>
                <Dish
                  nameItem={dish.name}
                  imageSrc={dish.imageSrc}
                  price={dish.prix}
                  isNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
