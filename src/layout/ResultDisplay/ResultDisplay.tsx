type ResultDisplayProps = {
  result: number;
};

function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <section>
      <div>
        <h6>Your monthly repayment</h6>
        <p>$ {result}</p>
      </div>
    </section>
  );
}

export default ResultDisplay;
