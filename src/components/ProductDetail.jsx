import React, { useEffect } from 'react';
import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGame } from '../store/gamesReducer';
import { useLocation } from 'react-router';

function ProductDetail() {
  const game = useSelector((state) => state.games.singleGame);
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState('');

  const location = useLocation();
  const pathName = location.pathname;
  const gameId = parseInt(pathName.slice(10));
  // console.log('ID: ', gameId);

  //   console.log('UN JUEGO -> ', games.id);
  useEffect(() => {
    dispatch(getSingleGame(gameId));
    // console.log('GAME --> ', game);
  }, [dispatch, gameId]);

  console.log('GAME --> ', game);
  //   const platform = game.platforms.join(' , ');

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
              <Card.Text>Disponible en plataformas: </Card.Text>
              <Card.Text>Categories: </Card.Text>
              <Card.Text>{game.description}</Card.Text>
              <Card.Text>Price: ${game.price}</Card.Text>
              <Card.Text>Stock: {game.stock}</Card.Text>
              <Card.Text>Rating: {game.rating}</Card.Text>
              <Card.Text>Released date: {game.released}</Card.Text>
              <Row>
                <Col fluid>
                  <Button
                    className="justify-content-md-center"
                    variant="primary"
                  >
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
