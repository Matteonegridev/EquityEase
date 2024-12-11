import { ComponentProps } from "react";
import "./Mortgageinput.scss";

type InputProps = ComponentProps<"input"> & {
  text: string;
};

function MortgageInput({ text, id, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="form__label">
        {text}
      </label>
      <input {...rest} className="form__input" type="number" required id={id} />
    </>
  );
}

export default MortgageInput;
