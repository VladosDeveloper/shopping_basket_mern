import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import NavBar from "./components/Navbar";
import List from "./components/List";
import ItemModal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <ItemModal />
        <List />
      </Container>
    </div>
  );
}

export default App;
