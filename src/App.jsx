import "./App.scss";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dish from "./components/Dish.jsx";

// Boostrap Import
import {Container, Row, Col} from "react-bootstrap";

function App() {
  // Array
  const dishs = [
    {id:1, name: "Tacos à l’unité", imageSrc: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", prix: 3,isNew: true},
    {id:2, name: "Enchiladas", imageSrc: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",prix: 12},
    {id:3,name: "Mole poblano", imageSrc: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",prix: 5}
  ];

  return (
    <>
      <Header />
      <main>
        <Container className="containerPrincipal">
          <Row xs={1} md={3}>
            {dishs.map((dish) => (
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
