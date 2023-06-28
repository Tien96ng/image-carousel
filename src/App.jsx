import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./util/App.css";
import animalArr from "./util/animalArr";
import Image from "../components/Image";

function App() {
  const [animals, setAnimals] = useState(animalArr);
  const [count, setCount] = useState(0);

  const prevButton = () => {
    if(count === 0) {
      setCount(animalArr.length - 1);
    } else {
      let temp = count - 1;
      setCount(temp);
    }
  }

  const nextButton = () => {
    if(count === animalArr.length - 1) {
      setCount(0);
    } else {
      let temp = count + 1;
      setCount(temp);
    }
  }

  return (
    <>
      <Container className="carousel">
        <Row className="m-5">
          <h1> {animals[count].name} </h1>
        </Row>

        <Row>
          <Col className="mt-5" sm={4}>
            <Button variant="success" onClick={prevButton}> PREV </Button>
          </Col>
          <Col sm={4}>
            <Image currAnimal={animals[count]} />
          </Col>
          <Col sm={4}>
            <Button className="mt-5" variant="success" onClick={nextButton}> NEXT </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
