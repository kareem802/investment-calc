import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [investmentValues, setInvestemtValues] = useState({
    "initial investment": "",
    "annual investment": "",
    "expected return": "",
    duration: "",
  });

  function handleChange(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    console.log("investment state: ", investmentValues);
    setInvestemtValues((prev) => ({ ...prev, [inputName]: +inputValue }));
  }
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
          <Input
            handleChange={handleChange}
            inputName="duration"
            investmentValues={investmentValues}
          ></Input>
        </div>
      </div>
      <Result investmentValues={investmentValues} />
    </>
  );
}

export default App;
