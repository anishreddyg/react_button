import React, { useState, useEffect, useRef } from "react";
import Child from "./Child";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function App() {
  const buttonEl = useRef(null);
  const [count, setCount] = useState(2);
  const [vClass, setVClass] = useState("danger");

  useEffect(() => {
    if (count > 0) {
      setVClass("primary");
    }
  }, []);
  const changeHandler = () => {
    console.log(buttonEl);
  };
  return (
    <React.Fragment>
      <Button ref={buttonEl} variant={vClass} onClick={() => changeHandler()}>
        Parent <Badge bg="secondary">9</Badge>
      </Button>
      <Child buttonData={changeHandler} />
    </React.Fragment>
  );
}
