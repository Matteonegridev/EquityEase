import { useForm, Controller } from "react-hook-form";
import "./FormApp.scss";
import MortgageInput from "../Mortgage-Input/MortgageInput";
import MortgageSelect from "../Mortgage-Select/MortgageSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaValidation, schemaValues } from "../../utils/zodSchema";
import SubmitButton from "../Submit-Button/SubmitButton";
import { mortgageFunction, interestOnly } from "../../utils/mortgageFunction";
import { useContextHook } from "../../hooks/useContext";

function FormApp() {
  const { setMortgageResult, setIsChecked } = useContextHook();
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
    setIsChecked(null);
  };

  const onSubmit = (data: schemaValues) => {
    console.log("Form submitted:", data);
    // CHECK WHICH RADIO IS
    if (type === "repayment") {
      setIsChecked("repayment");
      setMortgageResult((prev) => ({
        ...prev,
        loanTotal: String(mortgageFunction(amount, term, rate).totalRepayment),
        loanMonthly: String(
          mortgageFunction(amount, term, rate).monthlyRepayment
        ),
      }));
    } else {
      setIsChecked("interest");
      setMortgageResult((prev) => ({
        ...prev,
        interestTotal: String(interestOnly(amount, rate).totalRepayment),
        interestMonthly: String(interestOnly(amount, rate).monthlyRepayment),
      }));
    }

    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__box">
        <h1 className="form__box--title">Mortgage Calculator</h1>
        <button className="form__box--reset" type="reset" onClick={onReset}>
          Clear All
        </button>
      </div>
      <Controller
        defaultValue={""}
        control={control}
        name="amount"
        render={({ field }) => (
          <MortgageInput
            icon="$"
            id="amount"
            {...field}
            text="Morgage Amount"
            error={errors.amount?.message}
          />
        )}
      />
      <div className="desktop-input">
        <Controller
          defaultValue={""}
          control={control}
          name="term"
          render={({ field }) => (
            <MortgageInput
              icon="years"
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
              icon="%"
              id="rate"
              {...field}
              text="Interest Rate"
              error={errors.rate?.message}
            />
          )}
        />
      </div>
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <div className="select-form">
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
          </div>
        )}
      />
      <SubmitButton text="Calculate Repayments" />
    </form>
  );
}

export default FormApp;
