import { useState } from "react";

function App() {
  const [operator, setOperator] = useState("");
  const [operand, setOperand] = useState(0);

  return (
    <>
      <div className="container m-5">
        <div>
          <input className="form-control" type="text" />
          <div className="row m-1">
            <button className="btn btn-primary col m-1">AC</button>
            <button className="btn btn-primary col m-1">+/-</button>
            <button className="btn btn-primary col m-1">%</button>
            <button className="btn btn-primary col m-1">/</button>
          </div>

          <div className="row m-1">
            <button className="btn btn-primary col m-1">7</button>
            <button className="btn btn-primary col m-1">8</button>
            <button className="btn btn-primary col m-1">9</button>
            <button className="btn btn-primary col m-1">x</button>
          </div>

          <div className="row m-1">
            <button className="btn btn-primary col m-1">4</button>
            <button className="btn btn-primary col m-1">5</button>
            <button className="btn btn-primary col m-1">6</button>
            <button className="btn btn-primary col m-1">-</button>
          </div>

          <div className="row m-1">
            <button className="btn btn-primary col m-1">1</button>
            <button className="btn btn-primary col m-1">2</button>
            <button className="btn btn-primary col m-1">3</button>
            <button className="btn btn-primary col m-1">+</button>
          </div>

          <div className="row m-1">
            <button className="btn btn-primary col-6 m-1">0</button>
            <button className="btn btn-primary col m-1">.</button>
            <button className="btn btn-primary col m-1">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
