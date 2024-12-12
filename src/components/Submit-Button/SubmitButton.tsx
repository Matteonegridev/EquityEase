import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

function SubmitButton({ text }: ButtonProps) {
  return (
    <div className="submit">
      <button className="submit--button" type="submit">
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
