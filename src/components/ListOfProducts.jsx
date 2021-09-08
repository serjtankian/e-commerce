import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
  Card,
  CardGroup
} from "react-bootstrap";
import games from "./game.json"

export default function ListOfProducts() {
  return (
    <>
      <h1 className="">List of products</h1>





      <Container>
        <Row>

          <Col> <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Games"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              🔎
            </Button></InputGroup> </Col>
          <Col md="auto"> <DropdownButton id="dropdown-basic-button" title="Categories">
            <Dropdown.Item href="#/action-1">Category</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Category-1</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Category-2</Dropdown.Item>
          </DropdownButton></Col>
          <Col xs lg="2">
            <DropdownButton id="dropdown-basic-button" title="Rating Store">
              <Dropdown.Item href="#/action-1">Best - Worst</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Worst - Best</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

      </Container>
      <Container>
        <CardGroup>
          <Row xs={1} md={4} className="g-4">

            {/* --------------MAP------------ */}
            {games.map((game) => {
              return (<Col>
                <Card key={game.name} >
                  <Card.Img variant="top" src={game.image} />
                  <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text>
                      Released: {game.released}
                    </Card.Text>
                    <Card.Text>
                      Rating: {game.rating}
                    </Card.Text>
                    <Card.Text>
                      Price: ${game.price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"  ><Link to={`/products/:id`}><Button as="input" type="button" value="info" /></Link></small>
                  </Card.Footer>
                </Card>
              </Col>)
            })}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
