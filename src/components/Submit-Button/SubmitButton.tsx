import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

function SubmitButton({ text }: ButtonProps) {
  const handleSubmit = () => {};

  return (
    <div>
      <button onClick={handleSubmit}>{text}</button>
    </div>
  );
}

export default SubmitButton;
