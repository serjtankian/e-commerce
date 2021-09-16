import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCategory } from "../store/actions/categoryActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  NavDropdown,
  InputGroup,
  SplitButton,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import {
  getCategories,
  editCategory,
  deleteCategory,
} from "../store/actions/categoryActions";

export default function NewCategory() {
  const [category, setCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState("Select Category");
  const [input, setInput] = useState("");
  const [idCategory, setIdCategory] = useState(0);
  //const [disableToggle, setDisableToggle] = useState(true);
  let disableToggle = false;
  const categories = useSelector((state) => state.allcategories.categories);
  console.log("CATEGORIAS", categories);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
    setCategory({ name: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [categories]);

  return (
    <div>
      <>
        <Container>
          <Row className="mt-3 mb-3">
            <Col></Col>
            <Col xs={6}>
              <InputGroup className="mb-3">
                <SplitButton
                  variant="outline-secondary"
                  title={selectCategory}
                  id="segmented-button-dropdown-1"
                >
                  {categories.map((category) => (
                    <Dropdown.Item
                      onClick={() => {
                        setIdCategory(category.id);
                        setSelectCategory(category.name);
                      }}
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </SplitButton>
                <FormControl
                  disabled={disableToggle}
                  onChange={(e) => {
                    setInput(e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase());
                  }}
                  aria-label="Text input with dropdown button"
                />
                {input ? (
                  <Button
                    onClick={() => {
                      dispatch(editCategory({ idCategory, input }));
                    }}
                  >
                    CONFIRMAR
                  </Button>
                ) : (
                  <Button onClick={() => (disableToggle = false)}>
                    EDITAR
                  </Button>
                )}{" "}
                <Button onClick={() => {dispatch(deleteCategory(idCategory)); setSelectCategory("Select Category")}}>
                  BORRAR
                </Button>
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>
        </Container>
                  
        <Container className="mr-3 margin-top">
          <h1 className="text-center mt-3 mb-3">Add Category</h1>
          <Row className="mt-3 mb-3">
            <Col></Col>
            <Col xs={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    placeholder="Enter the name of the new category"
                    name="name"
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
