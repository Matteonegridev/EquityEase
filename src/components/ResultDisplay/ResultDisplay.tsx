import { useContextHook } from "../../hooks/useContext";

function ResultDisplay() {
  const { mortgageResult } = useContextHook();

  return (
    <section>
      <div>
        <h6>Your monthly repayment</h6>
        <p>$ {mortgageResult.loanTotal}</p>
        <p>$ {mortgageResult.loanMonthly}</p>
      </div>
    </section>
  );
}

export default ResultDisplay;
