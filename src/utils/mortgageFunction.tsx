export const mortgageFunction = (
  amount: string,
  term: string,
  rate: string
) => {
  const monthlyInterest = Number(rate) / 100 / 12;
  const loanTerms = Number(term) * 12;

  const monthlyRepayment = (
    (Number(amount) *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, loanTerms)) /
    (Math.pow(1 + monthlyInterest, loanTerms) - 1)
  ).toFixed(2);

  const totalRepayment = (Number(monthlyRepayment) * loanTerms).toFixed(2);
  console.log(
    "Total Repayment:",
    totalRepayment,
    "Monthly Repayment:",
    monthlyRepayment
  );
  return { monthlyRepayment, totalRepayment };
};

export const interestOnly = (amount: string, rate: string) => {
  const monthlyInterest = Number(rate) / 100 / 12;
  const monthlyRepayment = Number(amount) * monthlyInterest;

  const totalRepayment = monthlyRepayment * 12;
  console.log(
    "Total Repayment for one year:",
    totalRepayment,
    "Monthly Repayment (Interest Only):",
    monthlyRepayment
  );

  return { monthlyRepayment, totalRepayment };
};
