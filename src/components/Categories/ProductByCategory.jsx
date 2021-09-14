import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductByCategory() {
    const games = useSelector((state) => state.allcategories.vgsByCategory);

    return (
        <>
          <h1 className="text-center mt-3 mb-3">List of products</h1>    
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