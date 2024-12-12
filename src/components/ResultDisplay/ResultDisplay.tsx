import { useState } from "react";

function ResultDisplay() {
  const [mortgageResult, setMortgageResult] = useState("");

  return (
    <section>
      <div>
        <h6>Your monthly repayment</h6>
        <p>$ {mortgageResult}</p>
      </div>
    </section>
  );
}

export default ResultDisplay;
