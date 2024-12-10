import { ComponentProps } from "react";
import "./Mortgageinput.scss";

type InputProps = ComponentProps<"input"> & {
  text: string;
};

function MortgageInput({ text }: InputProps) {
  return (
    <>
      <label className="form__label">{text}</label>
      <input
        defaultValue=""
        min="1"
        className="form__input"
        type="number"
        required
      />
    </>
  );
}

export default MortgageInput;
