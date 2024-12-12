import React, { ReactNode, useState } from "react";
import { Context } from "../hooks/useContext";

type ContextProps = {
  children: ReactNode;
};

export type ContextValues = {
  isChecked: "repayment" | "interest" | null;
  setIsChecked: React.Dispatch<
    React.SetStateAction<"repayment" | "interest" | null>
  >;
  mortgageResult: {
    loanMonthly: string;
    loanTotal: string;
    interestMonthly: string;
    interestTotal: string;
  };
  setMortgageResult: React.Dispatch<
    React.SetStateAction<{
      loanMonthly: string;
      loanTotal: string;
      interestMonthly: string;
      interestTotal: string;
    }>
  >;
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [isChecked, setIsChecked] = useState<"repayment" | "interest" | null>(
    null
  );
  const [mortgageResult, setMortgageResult] = useState({
    loanMonthly: "",
    loanTotal: "",
    interestMonthly: "",
    interestTotal: "",
  });

  return (
    <Context.Provider
      value={{ isChecked, setIsChecked, mortgageResult, setMortgageResult }}
    >
      {children}
    </Context.Provider>
  );
};
