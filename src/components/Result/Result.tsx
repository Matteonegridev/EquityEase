import { useContextHook } from "../../hooks/useContext";

function ResultDisplay() {
  const { mortgageResult, isChecked } = useContextHook();

  return (
    <section>
      <div>
        <h1>Your Result</h1>
        <p>
          Your results are shown below based on the informations you provided.
          To adjust the results, edit the form and click "calculate repayment"
          again.{" "}
        </p>
      </div>
      {isChecked === "repayment" && (
        <div>
          <h6>Your monthly repayment</h6>
          <p>$ {mortgageResult.loanTotal}</p>
          <p>$ {mortgageResult.loanMonthly}</p>
        </div>
      )}
      {isChecked === "interest" && (
        <div>
          <h6>Your monthly repayment</h6>
          <p>$ {mortgageResult.interestMonthly}</p>
          <p>$ {mortgageResult.interestTotal}</p>
        </div>
      )}
    </section>
  );
}

export default ResultDisplay;
