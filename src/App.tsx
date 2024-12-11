import { useState } from "react";
import FormApp from "./components/Form/FormApp";
import MortgageInput from "./components/Mortgage-Input/MortgageInput";
import MortgageSelect from "./components/Mortgage-Select/MortgageSelect";
import Result from "./components/Result/Result";
import SubmitButton from "./components/Submit-Button/SubmitButton";

function App() {
  const [inputValue, setInputValue] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <FormApp>
        <MortgageInput
          id="amount"
          value={inputValue.amount}
          onChange={handleChange}
          text="Morgage Amount"
          name="amount"
        />
        <MortgageInput
          id="term"
          value={inputValue.term}
          onChange={handleChange}
          text="Mortgage Term"
          name="term"
        />
        <MortgageInput
          id="rate"
          value={inputValue.rate}
          onChange={handleChange}
          text="Interest Rate"
          name="rate"
          min="0"
          max="100"
          step="0.01"
        />
        <MortgageSelect
          id="repayment"
          text="Repayment"
          value="repayment"
          check={inputValue.type === "repayment"}
          onChange={handleChange}
        />
        <MortgageSelect
          id="interest"
          text="Interest Only"
          value="interest"
          check={inputValue.type === "interest"}
          onChange={handleChange}
        />
        <SubmitButton text="Calculate Repayments" />
        <Result />
      </FormApp>
    </div>
  );
}

export default App;
