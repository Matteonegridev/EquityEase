import { ReactNode } from "react";
import "./FormApp.scss";

type FormProps = {
  children: ReactNode;
};

function FormApp({ children }: FormProps) {
  return (
    <form className="form">
      <h1 className="form__title">Mortgage Calculator</h1>
      <button className="btn form--reset" type="reset">
        Clear All
      </button>
      {children}
    </form>
  );
}

export default FormApp;
