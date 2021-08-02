import React, { useState, useEffect } from "react";
import Child from "./Child";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function App() {
  const [count, setCount] = useState(2);
  const [vClass, setVClass] = useState("danger");

  useEffect(() => {
    if (count > 0) {
      setVClass("primary");
    }
  }, []);
  const changeHandler = (e) => {
    console.log(e);
  };
  return (
    <React.Fragment>
      <Button variant={vClass} onClick={(e) => changeHandler(e)}>
        Profile <Badge bg="secondary">9</Badge>
      </Button>
      <Child buttonData={changeHandler} />
    </React.Fragment>
  );
}
