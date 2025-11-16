import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";

function handleChange(e) {
  const inputValue = e.target.value;
  const inputName = e.target.name;

  console.log("old: ", investmentValues);
  setInvestemtValues((prev) => ({ ...prev, [inputName]: +inputValue }));
  console.log("new: ", investmentValues);
}

function App() {
  const [investmentValues, setInvestemtValues] = useState({
    "initial investment": 0,
    "annual investment": 0,
    "expected return": 0,
    duration: 0,
  });

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <Input
            handleChange={handleChange}
            inputName="initial investment"
            investmentValues={investmentValues}
          ></Input>
          <Input
            handleChange={handleChange}
            inputName="annual investment"
            investmentValues={investmentValues}
          ></Input>
        </div>

        <div className="input-group">
          <Input
            handleChange={handleChange}
            inputName="expected return"
            investmentValues={investmentValues}
          ></Input>
          <Input handleChange={handleChange} inputName="duration"></Input>
        </div>
      </div>
    </>
  );
}

export default App;
