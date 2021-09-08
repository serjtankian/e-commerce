import React from 'react'
import { Card, Container, Button, Col, Row } from "react-bootstrap"
import games from "./game.json"

function ProductDetail() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={games[1].image} />
                        <Card.Body>
                            <Card.Title>{games[1].name}</Card.Title>

                            <Card.Text>
                                Disponible en plataformas: {games[1].platforms}
                            </Card.Text>
                            <Card.Text>
                                {games[1].description}
                            </Card.Text>
                            <Card.Text>
                                Price: ${games[1].price}
                            </Card.Text>
                            <Card.Text>
                                Stock: {1}
                            </Card.Text>
                            <Button variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
