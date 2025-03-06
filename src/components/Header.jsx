import "../assets/styles/Header.scss";
import { Container, Navbar, Nav, Image, Badge } from "react-bootstrap";

import logo from "../assets/images/logo.webp";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Header() {
  const { cart } = useContext(CartContext);
console.log(cart);

  return (
    <>
      <header>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <Image src={logo} roundedCircle />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#" className="bg-primary text-white rounded ">
                  Panier <Badge bg="secondary m4-2">{cart}</Badge>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
