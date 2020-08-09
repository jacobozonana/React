import React from "react";

function Controls(props) {
  return (
    <div className="controls">
      <button onClick={props.aumentar}>Agergar +</button>
      <button onClick={props.disminuir}> Disminuir -</button>
    </div>
  );
}

export default Controls;
