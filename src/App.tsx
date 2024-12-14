import FormApp from "./components/Form/FormApp";
import ResultSection from "./components/ResultSection/ResultSection";
import { ContextProvider } from "./utils/Context";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <FormApp />
        <ResultSection />
      </ContextProvider>
    </div>
  );
}

export default App;
