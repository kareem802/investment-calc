import { formatter, calculateInvestmentResults } from "../util/investment";
export default function Input({ inputName, handleChange, investmentValues }) {
  function format(e) {
    let value = e.target.value;
    value = formatter.format(value);
    return value;
  }

  const inputValue = format(investmentValues[inputName]);

  return (
    <p>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        onChange={handleChange}
        name={inputName}
        type="number"
        value={inputValue}
      ></input>
    </p>
  );
}
