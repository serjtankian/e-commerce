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
  CardGroup,
  Form
} from "react-bootstrap";
import games from "./game.json"
import { useDispatch, useSelector } from "react-redux";

export default function ListOfProducts() {

  const juegos = useSelector((state) => state.juegos);
  const dispath = useDispatch();
  const [value, setValue] = React.useState("");

  /*  const handleSumit = (event) => {
     event.preventDefault();
     dispath(getMovies(value));
   }; */

  const handleChange = (event) => {
    console.log("entrando", event.target.value)
    setValue(event.target.value);
  };


  return (
    <>
      <h1 className="">List of products</h1>


      <Container>

        <Row>

          <Col>
            <Form>
              <FormControl
                placeholder="Search Games"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="search"
                onChange={handleChange}
                required
              />
              <Button variant="outline-secondary" id="button-addon2">
                🔎
              </Button>
            </Form>
          </Col>
          <Col md="auto"> <DropdownButton id="dropdown-basic-button" title="Categories">
            <Dropdown.Item >Category</Dropdown.Item>
            <Dropdown.Item >Category-1</Dropdown.Item>
            <Dropdown.Item >Category-2</Dropdown.Item>
          </DropdownButton></Col>
          <Col xs lg="2">
            <DropdownButton id="dropdown-basic-button" title="Rating Store">
              <Dropdown.Item >Best - Worst</Dropdown.Item>
              <Dropdown.Item >Worst - Best</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

      </Container>
      <Container>
        <CardGroup>
          <Row xs={1} md={4} className="g-4">

            {/* --------------MAP------------ */}
            {games.map((game, i) => {
              return (<Col key={i} >
                <Card >
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
                    <small className="text-muted"  ><Link to={`/products/${game.id}`}><Button as="input" type="button" value="info" /></Link></small>
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
