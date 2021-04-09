import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useStateValue } from "../store";
import axios from "axios";

function ItemModal(props) {
  const [{ basket }, dispatch] = useStateValue();
  const [showHide, setShowHide] = useState(false);
  const [name, setName] = useState("");
  const toggle = () => setShowHide(!showHide);

  const addItem = (value) => {
    axios.post("/api/items", value).then((res) => {
      dispatch({
        type: "ADD_ITEM",
        item: res.data,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        name,
      };
      addItem(newItem);
    }
    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={showHide} toggle={toggle} fade={false}>
        <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="item">Item name</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="add item to basket"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
