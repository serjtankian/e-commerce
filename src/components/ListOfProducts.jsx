import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

export default function ListOfProducts() {
  return (
    <>
      <h1 className="">List of products</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Games"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          🔎
        </Button>
        <DropdownButton id="dropdown-basic-button" title="Categories">
          <Dropdown.Item href="#/action-1">Category</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Category-1</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Category-2</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Rating Store">
          <Dropdown.Item href="#/action-1">Best - Worst</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Worst - Best</Dropdown.Item>
        </DropdownButton>
        {/* --------------MAP------------ */}
      </InputGroup>
    </>
  );
}
