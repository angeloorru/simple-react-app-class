import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//Just in case the message is forgotten in index.js
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
