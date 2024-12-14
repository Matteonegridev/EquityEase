import { useContextHook } from "../../hooks/useContext";

function ResultDisplay() {
  const { mortgageResult, isChecked } = useContextHook();

  return (
    <section className="result-showed">
      <div className="section">
        <h1 className="section__title">Your Result</h1>
        <p className="section__text">
          Your results are shown below based on the informations you provided.
          To adjust the results, edit the form and click "calculate repayment"
          again.{" "}
        </p>
      </div>
      <div className="result-showed--box">
        {isChecked === "repayment" && (
          <div className="box">
            <h6 className="box__title">Your monthly repayment</h6>
            <p className="box--yellow">$ {mortgageResult.loanMonthly}</p>
            <h6 className="box__title">Total you'll repay over the term</h6>
            <p className="box-white">$ {mortgageResult.loanTotal}</p>
          </div>
        )}
        __
        {isChecked === "interest" && (
          <div className="box">
            <h6 className="box__title">Your monthly interest</h6>
            <p className="box--yellow">$ {mortgageResult.interestMonthly}</p>
            <h6 className="box__title">Total interest over the term</h6>
            <p className="box-white">$ {mortgageResult.interestTotal}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResultDisplay;
