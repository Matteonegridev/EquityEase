import { useContextHook } from "../../hooks/useContext";
import Result from "../Result/Result";

function IdleResult() {
  const { isChecked } = useContextHook();
  return (
    <div>
      {isChecked !== null ? (
        <Result />
      ) : (
        <>
          {" "}
          <h1>Results shown here</h1>
          <p>
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </>
      )}
    </div>
  );
}

export default IdleResult;
