import { useForm, Controller } from "react-hook-form";
import "./FormApp.scss";
import MortgageInput from "../Mortgage-Input/MortgageInput";
import MortgageSelect from "../Mortgage-Select/MortgageSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaValidation, schemaValues } from "../../utils/zodSchema";
import SubmitButton from "../Submit-Button/SubmitButton";
import { mortgageFunction, interestOnly } from "../../utils/mortgageFunction";
import { useContextHook } from "../../hooks/useContext";

type FormProp = {
  setIsCalculated: React.Dispatch<React.SetStateAction<boolean>>;
};

function FormApp({ setIsCalculated }: FormProp) {
  const { setMortgageResult } = useContextHook();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<schemaValues>({
    resolver: zodResolver(schemaValidation),
  });

  const amount = watch("amount");
  const term = watch("term");
  const rate = watch("rate");
  const type = watch("type");

  const onReset = () => {
    reset();
  };

  const onSubmit = (data: schemaValues) => {
    console.log("Form submitted:", data);
    // CHECK WHICH RADIO IS
    if (type === "repayment") {
      setMortgageResult((prev) => ({
        ...prev,
        loanTotal: String(mortgageFunction(amount, term, rate).totalRepayment),
        loanMonthly: String(
          mortgageFunction(amount, term, rate).monthlyRepayment
        ),
      }));
    } else {
      setMortgageResult((prev) => ({
        ...prev,
        interestTotal: String(interestOnly(amount, rate).totalRepayment),
        interestMonthly: String(interestOnly(amount, rate).monthlyRepayment),
      }));
    }
    setIsCalculated(true);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Mortgage Calculator</h1>
      <button className="btn form--reset" type="reset" onClick={onReset}>
        Clear All
      </button>
      <Controller
        defaultValue={""}
        control={control}
        name="amount"
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
        render={({ field }) => (
          <>
            <MortgageSelect
              id="repayment"
              {...field}
              text="Repayment"
              value="repayment"
              checked={field.value === "repayment"}
            />
            <MortgageSelect
              id="interest"
              {...field}
              text="Interest Only"
              value="interest"
              checked={field.value === "interest"}
              error={errors.type?.message}
            />
          </>
        )}
      />
      <SubmitButton text="Calculate Repayments" />
    </form>
  );
}

export default FormApp;
