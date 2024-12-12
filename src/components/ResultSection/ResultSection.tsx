import { useContextHook } from "../../hooks/useContext";
import Result from "../Result/Result";

function ResultSection() {
  const { isChecked } = useContextHook();
  return (
    <main className="result-section">
      {isChecked !== null ? (
        <Result />
      ) : (
        <>
          {" "}
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
