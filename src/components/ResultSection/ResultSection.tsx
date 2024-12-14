import { useContextHook } from "../../hooks/useContext";
import CalculatorLogo from "../../utils/CalculatorLogo";
import Result from "../Result/Result";
import "./ResultSection.scss";

function ResultSection() {
  const { isChecked } = useContextHook();
  return (
    <main className="result-section">
      {isChecked !== null ? (
        <Result />
      ) : (
        <>
          <CalculatorLogo fill="none" height="192" width="192" />
          <h1 className="result-section__title">Results shown here</h1>
          <p className="result-section__text">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </>
      )}
    </main>
  );
}

export default ResultSection;
