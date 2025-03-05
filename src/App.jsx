import "./App.scss";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dish from "./components/Dish.jsx";

// Boostrap Import
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function App() {
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

  const [showNewOnly, setshowNewOnly] = useState(false);
  const [filterDish, setFilterDish] = useState(
    dishs.filter((dishs) => dishs.stock > 0)
  );
  const [button, setButton] = useState("Nouveautés uniquement");

  const handleShowNewOnly = () => {
    if (showNewOnly) {
      setshowNewOnly(false);
      setFilterDish(dishs.filter((dishs) => dishs.stock > 0));
      setButton("Nouveautés uniquement");
    } else {
      setshowNewOnly(true);
      setFilterDish(dishs.filter((dishs) => dishs.isNew));
      setButton("Voir tous les plats");
    }
  };

  return (
    <>
      <Header />
      <main>
        <Container className="containerPrincipal">
          <div className="d-grid gap-2">
            <Button bg="primary" onClick={handleShowNewOnly}>
              {button}
            </Button>
          </div>
          <Row xs={1} md={3}>
            {filterDish.map((dish) => (
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
