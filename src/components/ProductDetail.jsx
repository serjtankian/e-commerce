import React, { useEffect } from 'react';
import { Card, Container, Button, Col, Row, Form, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGame } from '../store/gamesReducer';
import { useHistory, useLocation } from 'react-router';
import { addProductToCart } from '../store/cartReducer';
import EditButton from './AdminButtons/EditButton';
import DeleteButton from './AdminButtons/DeleteButton';

import { message } from 'antd'
import { postReview, getReview } from "../store/reviewReducer"

function ProductDetail() {
  const game = useSelector((state) => state.games.singleGame);
  const user = useSelector((state) => state.users.loggedIn)
  const reviews = useSelector((state) => state.reviews);


  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  let history = useHistory();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = location.pathname;
  const gameId = parseInt(pathName.slice(10));
  const gamePlatforms = game.platforms;
  const gameCategories = game.categories ? game.categories.map(catg => { return catg.name }) : null;

  const [reviewInput, setReviewInput] = React.useState('');
  const [reviewRate, setReviewRate] = React.useState("")

  useEffect(() => {
    dispatch(getSingleGame(gameId))
    dispatch(getReview(gameId))
  }, [dispatch, gameId]);

  const addGameToCart = (e) => {
    e.preventDefault();
    if (!user) {
      history.push('/login')
      message.warning("You need to be logged in!")
    } else {

      dispatch(addProductToCart({ gameId, userId }));
    }
  };
  const gameName = game.name
  const addReviewToGame = (e) => {
    e.preventDefault()
    console.log("rating", reviewRate)
    dispatch(postReview({ gameName, gameId, userId, reviewInput, reviewRate }))
  }

  return (
    <Container className="mt-3 mb-3">
      <Row className="mt-3 mb-3">
        <Col>
          <h1 className="text-center ">{game.name}</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <Card className="" style={{ width: '38rem' }}>
            <Card.Img variant="top" src={game.image} />
            <Card.Body>
              <Card.Title>{game.name}</Card.Title>
              <Card.Text>Disponible en plataformas: {gamePlatforms ? gamePlatforms.join(", ") : null} </Card.Text>
              <Card.Text>Categories: {gameCategories ? gameCategories.join(", ") : null} </Card.Text>
              <Card.Text>{game.description}</Card.Text>
              <Card.Text>Price: ${game.price}</Card.Text>
              <Card.Text>Stock: {game.stock}</Card.Text>
              <Card.Text>Rating: {game.rating}</Card.Text>
              <Card.Text>Released date: {game.released}</Card.Text>
              <Row>
                <Col>
                  <Button
                    className="justify-content-md-center"
                    variant="primary"
                    onClick={(e) => addGameToCart(e)}
                  >
                    Add to Cart
                  </Button>
                </Col>
                <Col>

                  {userStatus === "Admin" || userStatus === "SAdmin" ? <EditButton gameId={gameId} /> : null}
                  {userStatus === "Admin" || userStatus === "SAdmin" ? <DeleteButton gameId={gameId} /> : null}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {userId ? <Row className="mt-3 mb-3">
        <h5>Add review:</h5>

        <Form onSubmit={addReviewToGame} >
          <Row>
            {/* rate */}
            <Form.Select aria-label="Select game rating" onClick={(e) => setReviewRate(e.target.value)}>
              <option>Select rating:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Row>
          {/* text comment */}
          <Row>
            <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here"  >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                onChange={(e) => setReviewInput(e.target.value)}
              />
              <Button
                className="justify-content-md-center"
                variant="primary"
                type="submit">Submit</Button>
            </FloatingLabel>
          </Row>
        </Form>
      </Row>
        : null}

      <Container>
        <Row className="mt-3 mb-3">
          <h2> Reviews from other customers:</h2>
        </Row>
        <Row className="mt-3 mb-3">
          {console.log('reviews -->', reviews)}


          {/*  ---------MAP REVIEWS------ */}
          <Card>
            <Card.Header>NOMBRE JUEGO</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>RATING</p>
                <p>COMENTARIO
                </p>

              </blockquote>
            </Card.Body>
          </Card>
        </Row>

      </Container>
    </Container>
  );
}

export default ProductDetail;
