import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  Form,
} from 'react-bootstrap';
// import games from './game.json';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../store/gamesReducer';
import { getCategories } from '../store/actions/categoryActions'

export default function ListOfProducts() {
  const games = useSelector((state) => state.games.allGames);
  const categories = useSelector((state) => state.allcategories.categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getCategories())
  }, []);

  return (
    <>
      <h1 className="text-center mt-3 mb-3">List of products</h1>
      <Container>
        <Row>
          <Col className="mt-1 mb-1">
            <Form>
              <InputGroup>
                <FormControl
                  placeholder="Search Games"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="search"
                  // onChange={handleChange}
                  required
                />
                <Button variant="outline-secondary" id="button-addon2">
                  🔎
                </Button>
              </InputGroup>
            </Form>
          </Col>

          <Col md="auto mt-1 mb-1">
            <DropdownButton id="dropdown-basic-button" title="Categories">
              {categories?.map(({ id, name }) => {
                console.log(categories);
                return <Dropdown.Item key={id} >{name}</Dropdown.Item>
              })}
              {/* <Dropdown.Item>Category</Dropdown.Item>
              <Dropdown.Item>Category-1</Dropdown.Item>
              <Dropdown.Item>Category-2</Dropdown.Item> */}
            </DropdownButton>
          </Col>
          <Col md="auto mt-1 mb-1">
            <DropdownButton id="dropdown-basic-button" title="Rating Store">
              <Dropdown.Item>Best - Worst</Dropdown.Item>
              <Dropdown.Item>Worst - Best</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>

      <Container className="mt-3 mb-3">
        <CardGroup>
          <Row xs={1} md={3} className="g-4">
            {/* --------------MAP------------ */}
            {games &&
              games.map((game, i) => {
                return (
                  <Col key={i}>
                    <Link
                      to={`/products/${game.id}`}
                      className="text-decoration-none text-black"
                    >
                      <Card className="h-100">
                        <Card.Img
                          variant="top"
                          width={300}
                          height={160}
                          src={game.image}
                        />
                        <Card.Body>
                          <Card.Title>{game.name}</Card.Title>
                          <Card.Text>Released: {game.released}</Card.Text>
                          <Card.Text>Rating: {game.rating}</Card.Text>
                          <Card.Text>Price: ${game.price}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            <Button as="input" type="button" value="info" />
                          </small>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
