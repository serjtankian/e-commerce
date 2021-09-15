import React, { useEffect } from "react";
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
  Form,
} from "react-bootstrap";
// import games from './game.json';
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, searchGames, byCategory } from "../store/gamesReducer";
import { useHistory } from "react-router";
import { getCategories } from "../store/actions/categoryActions";

export default function ListOfProducts() {
  const games = useSelector((state) => state.games.allGames);
  const categories = useSelector((state) => state.allcategories.categories);
  const dispatch = useDispatch();
  let newTitle;

  const [searchInput, setSearchInput] = React.useState("");
  let history = useHistory();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getCategories());
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchInput));
    setSearchInput("");
    history.push(`/search/${searchInput}`);
  };

  const dropDownHandler = (eventKey, event) => {
    event.persist();
    const value = event.target.innerText;
    newTitle = value;
    // console.log('VALUE INNET TEXT', event.target);

    dispatch(byCategory(value));
    history.push(`/search/${value}`);
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-3">List of products</h1>
      <Container>
        <Row>
          <Col className="mt-1 mb-1">
            <Form onSubmit={searchHandler}>
              <InputGroup>
                <FormControl
                  placeholder="Search Games"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="search"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  required
                />
                <Button variant="outline-secondary" id="button-addon2">
                  🔎
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col md="auto mt-1 mb-1">
<<<<<<< HEAD
            <DropdownButton id="dropdown-basic-button" title="Categories">
              {categories?.map(({ id, name }) => {
                console.log(categories);
                return <Dropdown.Item key={id} >{name}</Dropdown.Item>
              })}

=======
            <DropdownButton
              id="dropdown-basic-button"
              title={newTitle ? newTitle : "Categories"}
              onSelect={dropDownHandler}
            >
              {categories?.map(({ id, name }) => (
                <Dropdown.Item key={id}>{name}</Dropdown.Item>
                //  <Link></Link>
              ))}
>>>>>>> 5571425f4e96d7203ce03ccb4b1884da9caa70de
            </DropdownButton>
          </Col>
          <Col md="auto mt-1 mb-1">
            <DropdownButton id="dropdown-basic-button" title="Rating">
              <Dropdown.Item>Best - Worst</Dropdown.Item>
              <Dropdown.Item>Worst - Best</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>

      <Container className="mt-3 mb-3">
        <CardGroup>
          <Row xs={1} md={4} className="g-4">
            {/* --------------MAP------------ */}

<<<<<<< HEAD
            {games && games.length ? games &&
              games.map((game, i) => {
                console.log('GAMES -->> ', games)
=======
            {games && games.length ? (
              games &&
              games.map((game, i) => {
                // console.log("GAMES -->> ", games);
>>>>>>> 5571425f4e96d7203ce03ccb4b1884da9caa70de
                return (
                  <Col key={i}>
                    <Link
                      to={`/products/${game.id}`}
                      className="text-decoration-none text-black"
                    >
                      <Card className="h-100">
                        <Card.Img variant="top" src={game.image} />
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
              })
            ) : (
              <Container>
                <Row>
<<<<<<< HEAD
                  <h2 className="text-center mt-3 mb-3">Sorry we didn't find any results matching this search</h2>
=======
                  <h2 className="text-center mt-3 mb-3">
                    Sorry we didn't find any results matching this search
                  </h2>
>>>>>>> 5571425f4e96d7203ce03ccb4b1884da9caa70de
                </Row>
              </Container>
            )}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
