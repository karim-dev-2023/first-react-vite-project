import "./App.scss";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Dish from "./components/Dish.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Header />

      <Container className="containerPrincipal">
        <Row xs={1} md={3}>
          <Col md={4}>
            <Dish
              nameItem={"Tacos à l’unité"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              }
              price={3}
            />
          </Col>
          <Col md={4}>
            <Dish
              nameItem={"Enchiladas"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              }
              price={12}
            />
          </Col>
          <Col md={4}>
            <Dish
              nameItem={"Mole poblano"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              }
              price={15}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
