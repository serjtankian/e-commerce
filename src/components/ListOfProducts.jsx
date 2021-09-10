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

export default function ListOfProducts() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState('');

  /*  const handleSumit = (event) => {
     event.preventDefault();
     dispath(getMovies(value));
   }; */

  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  // console.log('GAMES -> ', games);

  // const handleChange = (event) => {
  //   console.log('entrando', event.target.value);
  //   setValue(event.target.value);
  // };

  return (
    <>
      <h1 className="text-center mt-3 mb-3">List of products</h1>
      <Container>
        <Row>
          <Col>
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

          <Col md="auto">
            <DropdownButton id="dropdown-basic-button" title="Categories">
              <Dropdown.Item>Category</Dropdown.Item>
              <Dropdown.Item>Category-1</Dropdown.Item>
              <Dropdown.Item>Category-2</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col xs lg="2">
            <DropdownButton id="dropdown-basic-button" title="Rating Store">
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
            {games &&
              games.map((game, i) => {
                return (
                  <Col key={i}>
                    <Card>
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
                          <Link to={`/products/${game.id}`}>
                            <Button as="input" type="button" value="info" />
                          </Link>
                        </small>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
