import Result from "../Result/Result";

type Result = {
  isCalculated: boolean;
};

function IdleResult({ isCalculated }: Result) {
  return (
    <div>
      {isCalculated ? (
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
