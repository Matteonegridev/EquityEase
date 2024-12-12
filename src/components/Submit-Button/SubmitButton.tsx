import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

function SubmitButton({ text }: ButtonProps) {
  return (
    <div>
      <button type="submit">{text}</button>
    </div>
  );
}

export default SubmitButton;
