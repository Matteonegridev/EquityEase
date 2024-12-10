import FormApp from "./components/Form/FormApp";
import MortgageInput from "./components/Mortgage-Input/MortgageInput";
import MortgageSelect from "./components/Mortgage-Select/MortgageSelect";
import Result from "./components/Result/Result";
import SubmitButton from "./components/Submit-Button/SubmitButton";

function App() {
  return (
    <div>
      <FormApp>
        <MortgageInput text="Morgage Amount" />
        <MortgageInput text="Mortgage Term" />
        <MortgageInput text="Interest Rate" />
        <MortgageSelect />
        <SubmitButton text="Calculate Repayments" />
        <Result />
      </FormApp>
    </div>
  );
}

export default App;
