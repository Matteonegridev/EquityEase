import { useState } from "react";
import FormApp from "./components/Form/FormApp";
import IdleResult from "./components/ResultNotDisplayed/IdleResult";

function App() {
  const [isCalculated, setIsCalculated] = useState(false);

  return (
    <div>
      <FormApp setIsCalculated={setIsCalculated} />
      <IdleResult isCalculated={isCalculated} />
    </div>
  );
}

export default App;
