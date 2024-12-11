import FormApp from "./components/Form/FormApp";

import Result from "./components/Result/Result";
import SubmitButton from "./components/Submit-Button/SubmitButton";

function App() {
  return (
    <div>
      <FormApp>
        <SubmitButton text="Calculate Repayments" />
      </FormApp>
      <Result />
    </div>
  );
}

export default App;
