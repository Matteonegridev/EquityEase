# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73).

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Live Site URL: [Add live site URL here](https://equityease.netlify.app/)

## My process

### Built with

- SCSS
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library

### What I learned

1. Form validation with React Hook Form:
   this method helped me to write cleaner code and more efficient code thanks to the build in the library offers. There wasn't needed to create a handleChange fuction and states. the {...field} spreads out the values we need.

```js
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
```

2. Another important solution to this has been the use of ComponentsProps with Typescript:

```js
type InputProps = ComponentProps<"input"> & {
  text: string;
  error: string | undefined;
};

const MortgageInput = forwardRef<HTMLInputElement, InputProps>(
  ({ text, id, error, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id} className="form__label">
          {text}
        </label>
        <input
          {...rest}
          className="form__input"
          type="number"
          id={id}
          ref={ref}
        />
        {error && <p className="form--error">{error}</p>}
      </>
    );
  }
);

```

3. Creating a custom hook for the context:
   Another important task was to create a context to pass down state into the right components. This has been achieved mainly in 2 steps:
   The first step was to create a custom context hook. Here the context is created, and given the expected values (with type import). The custom hook is important because encapluses the states and the error itself.

```js
import { createContext, useContext } from "react";
import { ContextValues } from "../utils/Context";

export const Context =
  (createContext < ContextValues) | (undefined > undefined);

export const useContextHook = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("Error!");
  }

  return context;
};
```

4. Second step is to create the provider into a contextProvider file. Provider that later on is exported to the App.tsx.
   Here things can get tricky with the types of our useState.
   In our example we have 2 states, the mortgageResult is an objext with 4 values. These are the values we need for the amounts we need to show up on our app.
   The setState takes the function to calculate the results. We take strings to show the result. Numbers from the function has been converted to strings.

```js
export type ContextValues = {
  isChecked: "repayment" | "interest" | null,
  setIsChecked: React.Dispatch<
    React.SetStateAction<"repayment" | "interest" | null>
  >,
  mortgageResult: {
    loanMonthly: string,
    loanTotal: string,
    interestMonthly: string,
    interestTotal: string,
  },
  setMortgageResult: React.Dispatch<
    React.SetStateAction<{
      loanMonthly: string,
      loanTotal: string,
      interestMonthly: string,
      interestTotal: string,
    }>
  >,
};

export const ContextProvider = ({ children }: ContextProps) => {
  const [isChecked, setIsChecked] =
    (useState < "repayment") | "interest" | (null > null);
  const [mortgageResult, setMortgageResult] = useState({
    loanMonthly: "",
    loanTotal: "",
    interestMonthly: "",
    interestTotal: "",
  });
  // ...
};
```

Here we use the spread operator to get the native input values.
Another important key to function this component is the ref we need to pass in.

5. Another yet important feature is the way we are able to read the parameters (amount, term, rate) we need to use in our function to calculate the mortgage:

```js
const {
  handleSubmit,
  control,
  reset,
  watch,
  formState: { errors },
} = useForm <
schemaValues >
{
  resolver: zodResolver(schemaValidation),
};

const amount = watch("amount");
const term = watch("term");
const rate = watch("rate");
const type = watch("type");
```

Here we import the 'watch' from RHF and we use it to actually watch the parameters defined here:

```js
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
```

The logic here is pretty much straightforward: since we created 2 functions for the math (interest and repayement), we return from them 4 values. These values are represented by morgageResult useState.
the value take the function with the parameters we are watching and converted to string.

## Author

Matteo Negri
