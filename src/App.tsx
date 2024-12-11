import FormApp from "./components/Form/FormApp";
import MortgageInput from "./components/Mortgage-Input/MortgageInput";
import MortgageSelect from "./components/Mortgage-Select/MortgageSelect";
import Result from "./components/Result/Result";
import SubmitButton from "./components/Submit-Button/SubmitButton";
import { useForm, Controller } from "react-hook-form";

type InputState = {
  amount: string;
  term: string;
  rate: string;
  type: string;
};

function App() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InputState>();

  const onSubmit = (data: InputState) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div>
      <FormApp onSubmit={handleSubmit(onSubmit)}>
        <Controller
          defaultValue={""}
          control={control}
          name="amount"
          rules={{ required: "Field is required" }}
          render={({ field }) => (
            <MortgageInput
              id="amount"
              {...field}
              text="Morgage Amount"
              error={errors.amount?.message}
            />
          )}
        />
        <Controller
          defaultValue={""}
          control={control}
          name="term"
          rules={{ required: "Field is required" }}
          render={({ field }) => (
            <MortgageInput
              id="term"
              {...field}
              text="Morgage Term"
              error={errors.term?.message}
            />
          )}
        />
        <Controller
          defaultValue={""}
          control={control}
          name="rate"
          rules={{ required: "Field is required" }}
          render={({ field }) => (
            <MortgageInput
              id="rate"
              {...field}
              text="Interest Rate"
              error={errors.rate?.message}
            />
          )}
        />
        <Controller
          defaultValue="repayment"
          name="type"
          control={control}
          rules={{ required: "Field is required" }}
          render={({ field }) => (
            <>
              <MortgageSelect
                id="repayment"
                {...field}
                text="Repayment"
                value="repayment"
              />
              <MortgageSelect
                id="interest"
                {...field}
                text="Interest Only"
                value="interest"
              />
            </>
          )}
        />

        <SubmitButton text="Calculate Repayments" />
        <Result />
      </FormApp>
    </div>
  );
}

export default App;
