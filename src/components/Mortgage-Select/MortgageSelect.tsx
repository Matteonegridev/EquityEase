import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  text: string;
  name: string;
  id: string;
};

const MorgageSelect = forwardRef<HTMLInputElement, Props>(
  ({ value, text, id, ...rest }, ref) => {
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
      </div>
    );
  }
);

export default MorgageSelect;
