import ResultDisplay from "../../layout/ResultDisplay/ResultDisplay";

function Result() {
  return (
    <main>
      <div>
        <h1>Your Result</h1>
        <p>
          Your results are shown below based on the informations you provided.
          To adjust the results, edit the form and click "calculate repayment"
          again.{" "}
        </p>
      </div>
      <ResultDisplay />
    </main>
  );
}

export default Result;
