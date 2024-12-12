import FormApp from "./components/Form/FormApp";
import IdleResult from "./components/ResultNotDisplayed/IdleResult";
import { ContextProvider } from "./utils/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <FormApp />
        <IdleResult />
      </ContextProvider>
    </div>
  );
}

export default App;
