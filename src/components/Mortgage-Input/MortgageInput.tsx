import { ComponentProps, forwardRef } from "react";
import "./Mortgageinput.scss";

type InputProps = ComponentProps<"input"> & {
  text: string;
  error: string | undefined;
  icon: string;
};

const MortgageInput = forwardRef<HTMLInputElement, InputProps>(
  ({ text, id, error, icon, ...rest }, ref) => {
    const form__input = `${error ? "form__input border" : "form__input"}`;
    const form__value = `${
      error ? "form__input--value value-error" : "form__input--value"
    }`;

    return (
      <>
        <label htmlFor={id} className="form__label">
          {text}
        </label>
        <div className="relative">
          <input
            {...rest}
            className={form__input}
            type="number"
            id={id}
            ref={ref}
          />
          <p className={form__value}>{icon}</p>
        </div>
        {error && <p className="form--error">{error}</p>}
      </>
    );
  }
);

export default MortgageInput;
