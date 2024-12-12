import FormApp from "./components/Form/FormApp";
import ResultSection from "./components/ResultSection/ResultSection";
import { ContextProvider } from "./utils/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <FormApp />
        <ResultSection />
      </ContextProvider>
    </div>
  );
}

export default App;
