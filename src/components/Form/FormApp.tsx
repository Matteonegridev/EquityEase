import { useForm, Controller } from "react-hook-form";
import "./FormApp.scss";
import MortgageInput from "../Mortgage-Input/MortgageInput";
import MortgageSelect from "../Mortgage-Select/MortgageSelect";
import { ReactNode } from "react";

type InputState = {
  amount: string;
  term: string;
  rate: string;
  type: string;
};

type FormProp = {
  children: ReactNode;
};

function FormApp({ children }: FormProp) {
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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Mortgage Calculator</h1>
      <button className="btn form--reset" type="reset">
        Clear All
      </button>
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
        name="type"
        control={control}
        rules={{ required: "Field is required" }}
        render={({ field }) => (
          <>
            <MortgageSelect
              defaultChecked={true}
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
      {children}
    </form>
  );
}

export default FormApp;
