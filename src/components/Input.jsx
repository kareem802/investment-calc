import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Input({ inputName, handleChange, investmentValues }) {
  const inputValue = investmentValues[inputName];
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
