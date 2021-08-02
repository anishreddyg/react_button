import React from "react";
const Child = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <button onClick={() => props.buttonData()}>Child</button>
    </React.Fragment>
  );
};

export default Child;
