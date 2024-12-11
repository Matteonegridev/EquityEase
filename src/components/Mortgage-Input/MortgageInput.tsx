import { ComponentProps, forwardRef } from "react";
import "./Mortgageinput.scss";

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

export default MortgageInput;
