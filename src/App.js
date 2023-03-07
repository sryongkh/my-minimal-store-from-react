import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Badge } from 'react-bootstrap';
import "./App.css";
import Products from "./component/Products/Products";
import Product from "./component/Product/Product";
import Cart from "./component/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              React Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  Cart <Badge bg="secondary">{cartItems.length}</Badge>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/">
                  <Products addToCart={addToCart} />
                </Route>
                <Route path="/product/:id">
                  <Product addToCart={addToCart} />
                </Route>
                <Route path="/cart">
                  <Cart cartItems={cartItems} />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
