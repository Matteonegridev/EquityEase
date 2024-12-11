import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  text: string;
  name: string;
  id: string;
  error?: string;
};

const MorgageSelect = forwardRef<HTMLInputElement, Props>(
  ({ value, text, id, error, ...rest }, ref) => {
    return (
      <div className="form__select">
        <label htmlFor={id} className="form__select--label">
          {text}
        </label>
        <input
          {...rest}
          id={id}
          className="form__select--input"
          type="radio"
          value={value}
          ref={ref}
        />
        {error && <p className="form--error">{error}</p>}
      </div>
    );
  }
);

export default MorgageSelect;
