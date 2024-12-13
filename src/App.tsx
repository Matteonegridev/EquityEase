import FormApp from "./components/Form/FormApp";
import ResultSection from "./components/ResultSection/ResultSection";
import SelectCurrency from "./components/SelectCurrency/SelectCurrency";
import { ContextProvider } from "./utils/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <SelectCurrency />
        <FormApp />
        <ResultSection />
      </ContextProvider>
    </div>
  );
}

export default App;
