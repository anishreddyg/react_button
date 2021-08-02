import React from "react";
const Child = (props) => {
  console.log(props);

  const passData = (e) => {
    console.log(e);
    props.buttonData(e);
  };

  return (
    <React.Fragment>
      <button onClick={(e) => passData(e)}>Child</button>
    </React.Fragment>
  );
};

export default Child;
