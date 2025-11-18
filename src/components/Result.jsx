import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ investmentValues }) {
  let investmentResults;
  if (
    investmentValues["initial investment"] &&
    investmentValues["annual investment"] &&
    investmentValues["expected return"] &&
    investmentValues["duration"]
  ) {
    investmentResults = calculateInvestmentResults({
      initialInvestment: investmentValues["initial investment"],
      annualInvestment: investmentValues["annual investment"],
      expectedReturn: investmentValues["expected return"],
      duration: investmentValues["duration"],
    });
  }
  return (
    <table id="result">
      <thead id="thead">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {investmentResults &&
          investmentResults.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
