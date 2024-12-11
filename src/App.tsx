import { useState } from "react";
import FormApp from "./components/Form/FormApp";
import MortgageInput from "./components/Mortgage-Input/MortgageInput";
import MortgageSelect from "./components/Mortgage-Select/MortgageSelect";
import Result from "./components/Result/Result";
import SubmitButton from "./components/Submit-Button/SubmitButton";
import useError from "./hooks/useError";

type InputState = {
  amount: string;
  term: string;
  rate: string;
  type: string;
};

function App() {
  const [inputValue, setInputValue] = useState<InputState>({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const { isError, handleErrors } = useError(inputValue as InputState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = handleErrors(inputValue);
    if (Object.keys(newErrors).length === 0) {
      // onCalculateMortgage(values.amount, values.term, values.rate);
    }
  };

  return (
    <div>
      <FormApp onSubmit={onSubmit}>
        <MortgageInput
          id="amount"
          value={inputValue.amount}
          onChange={handleChange}
          text="Morgage Amount"
          name="amount"
        />
        {isError.amount && <p className="form--error">Fiels is required</p>}
        <MortgageInput
          id="term"
          value={inputValue.term}
          onChange={handleChange}
          text="Mortgage Term"
          name="term"
        />
        {isError.term && <p className="form--error">Fiels is required</p>}
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
        {isError.rate && <p className="form--error">Fiels is required</p>}
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
        {isError.type && <p className="form--error">Please select one</p>}
        <SubmitButton text="Calculate Repayments" />
        <Result />
      </FormApp>
    </div>
  );
}

export default App;
