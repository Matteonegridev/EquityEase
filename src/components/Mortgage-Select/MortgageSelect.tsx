import { ComponentProps, forwardRef } from "react";
import "./MortgageSelect.scss";

type Props = ComponentProps<"input"> & {
  text: string;
  name: string;
  id: string;
  error?: string;
};

const MorgageSelect = forwardRef<HTMLInputElement, Props>(
  ({ value, text, id, error, ...rest }, ref) => {
    return (
      <>
        <div className="select">
          <input
            {...rest}
            id={id}
            className="select--input"
            type="radio"
            value={value}
            ref={ref}
          />
          <label htmlFor={id} className="select--label">
            {text}
          </label>
        </div>
        {error && <p className="form--error ">{error}</p>}
      </>
    );
  }
);

export default MorgageSelect;
