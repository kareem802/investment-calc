import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ investmentValues }) {
  let investmentResults;
  if (
    investmentValues["initial investment"] &&
    investmentValues["annual investment"] &&
    investmentValues["expected return"] &&
    investmentValues["duration"]
  ) {
    investmentResults = calculateInvestmentResults(
      investmentValues["initial investment"],
      investmentValues["annual investment"],
      investmentValues["expected return"],
      investmentValues["duration"]
    );
  }
  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      {investmentResults &&
        investmentResults.map((result) => {
          console.log(result.year);
          return (
            <tr>
              <td>{result.year}</td>
              <td>{result.year}</td>
              <td>{result.interest}</td>
              <td>{result.year}</td>
              <td>{result.year}</td>
            </tr>
          );
        })}
    </table>
  );
}
