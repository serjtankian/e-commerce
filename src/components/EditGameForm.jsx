import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGame } from "../store/gamesReducer";

export default function EditGameForm() {
    const gameDetails = useSelector((state) => state.games.singleGame);
    const { name, released, image, rating, platforms, price, description, stock, categories } = gameDetails;

    const [body, setBody] = useState({
        name,
        released,
        image,
        rating,
        platforms,
        price,
        description,
        stock,
        category: categories,
    });

    const dispatch = useDispatch()
    const categoriesName = categories ? categories.map(catg => { return catg.name }) : null;

    const handleChange = (e) => {
        console.log(body);
        switch (e.target.name) {
            case "name":
                setBody({ ...body, name: e.target.value });
                return;
            case "released":
                setBody({ ...body, released: e.target.value });
                return;
            case "image":
                setBody({ ...body, image: e.target.value });
                return;
            case "rating":
                setBody({ ...body, rating: e.target.value });
                return;
            case "platforms":
                let platformsNames = e.target.value.trim();
                let splited = platformsNames.includes(",")
                    ? platformsNames.split(", ")
                    : platformsNames.split(" ");

                let array = splited.map((platf) => {
                    return platf[0].toUpperCase() + platf.slice(1).toLowerCase();;
                });
                setBody({ ...body, platforms: array });
                return;
            case "price":
                setBody({ ...body, price: e.target.value });
                return;
            case "description":
                setBody({ ...body, description: e.target.value });
                return;
            case "categories":
                let categories = e.target.value.trim();
                let splitedCatg = categories.includes(",")
                    ? categories.split(", ")
                    : categories.split(" ");

                let catgArr = splitedCatg.map((catg) => {
                    return catg[0].toUpperCase() + catg.slice(1).toLowerCase();
                });
                setBody({ ...body, category: catgArr });
                return;
            default:
                setBody({});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addGame(body))
    }

    return (
        <div>
            <>
                <Container className="mr-3 margin-top">
                    <h1 className="text-center mt-3 mb-3">Product Info</h1>

                    <Row className="mt-3 mb-3">
                        <Col></Col>
                        <Col xs={6}>
                            <Form onSubmit={handleSubmit}>
                            <Form.Label>Name</Form.Label>
                            <p>Previous Data: {name}</p>
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="New Name"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="released"
                                        placeholder="Year Released"
                                        value={released}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        placeholder="Give me an Url of an image!"
                                        value={image}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="rating"
                                        placeholder="Use integer numbers "
                                        value={rating}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="platforms"
                                        placeholder="Available on platforms ..."
                                        value={platforms}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        placeholder="price"
                                        value={price}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Control
                                        type="text"
                                        name="categories"
                                        placeholder="categories"
                                        value={categoriesName ? categoriesName.join(", ") : null}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        name="description"
                                        as="textarea"
                                        rows={3}
                                        value={description}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3 mb-3">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        </div>
    );
}
