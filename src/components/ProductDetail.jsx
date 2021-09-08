import React from 'react'
import { Card, Container, Button } from "react-bootstrap"


function ProductDetail() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link > <Button as="input" type="button" value="info" />  </Card.Link>
                    <Card.Link > <Button as="input" type="button" value="info" /> </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ProductDetail
