export const mortgageFunction = (
  amount: string,
  term: string,
  rate: string
) => {
  const monthlyInterest = Number(rate) / 100 / 12;
  const loanTerms = Number(term) * 12;

  const monthlyRepayment =
    (Number(amount) *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, loanTerms)) /
    (Math.pow(1 + monthlyInterest, loanTerms) - 1);

  const totalRepayment = monthlyRepayment * loanTerms;
  console.log(
    "Total Repayment:",
    totalRepayment,
    "Monthly Repayment:",
    monthlyRepayment
  );
  return { monthlyRepayment, totalRepayment };
};
