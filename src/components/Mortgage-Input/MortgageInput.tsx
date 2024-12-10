import { ComponentProps, useState } from "react";

type InputProps = ComponentProps<"input"> & {
  text: string;
};

function MortgageInput({ text, ...rest }: InputProps) {
  return (
    <>
      <label className="form__label">{text}</label>
      <input {...rest} className="form__input" required />
    </>
  );
}

export default MortgageInput;
