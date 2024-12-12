import { useState } from "react";
import FormApp from "./components/Form/FormApp";
import IdleResult from "./components/ResultNotDisplayed/IdleResult";
import { ContextProvider } from "./utils/Context";

function App() {
  const [isCalculated, setIsCalculated] = useState(false);

  return (
    <div>
      <ContextProvider>
        <FormApp setIsCalculated={setIsCalculated} />
        <IdleResult isCalculated={isCalculated} />
      </ContextProvider>
    </div>
  );
}

export default App;
