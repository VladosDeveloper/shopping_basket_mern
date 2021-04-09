import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useStateValue } from "../store";
import axios from "axios";

function List(props) {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        dispatch({
          type: "GET_ITEMS",
          items: res.data,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [basket]);
  const deleteItem = (id) => {
    axios.delete(`/api/items/${id}`).then((res) => {
      dispatch({
        type: "DELETE_ITEM",
        item: id,
      });
    });
  };
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {basket.map((item) => {
              return (
                <CSSTransition key={item._id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => deleteItem(item._id)}
                    >
                      &times;
                    </Button>
                    {item.name}
                  </ListGroupItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
}

export default List;
