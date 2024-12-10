import FormApp from "./components/Form/FormApp";
import MortgageInput from "./components/Mortgage-Input/MortgageInput";
import MortgageSelect from "./components/Mortgage-Select/MortgageSelect";

function App() {
  return (
    <div>
      <FormApp>
        <MortgageInput text="Morgage Amount" />
        <MortgageInput text="Mortgage Term" />
        <MortgageInput text="Interest Rate" />
        <MortgageSelect />
      </FormApp>
    </div>
  );
}

export default App;
