import "../assets/styles/Header.scss";
import {Container,Navbar,Nav,Image} from "react-bootstrap";

import logo from "../assets/images/logo.webp";

function Header() {
  return (
    <>
      <header>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <Image
                src={logo}
                roundedCircle
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Navbar>
                <Nav.Link href="/">Home</Nav.Link>
              </Navbar>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
