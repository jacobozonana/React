import React, { useState } from "react"; //Destructuring
import Count from "./Count";
import "./styles.css";
import Controls from "./Controls";

export default function App() {
  const [count, setCount] = useState(0); //Hooks
  const [pollito, setPollitoName] = useState("Toto");
  return (
    <div className="App">
      <Count num={count} />
      {/*num es el prop que recibe los datos*/}
      <Controls
        aumentar={() => setCount(count + 1)}
        disminuir={() => setCount(count - 1)}
      />
      <p>{pollito}</p>
    </div>
  );
}
