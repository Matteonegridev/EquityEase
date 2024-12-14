import { ComponentProps } from "react";
import { CalculateOutlined } from "@mui/icons-material";
import "./SubmitButton.scss";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

function SubmitButton({ text }: ButtonProps) {
  return (
    <div className="submit">
      <button className="submit--button" type="submit">
        <CalculateOutlined fontSize="medium" /> {text}
      </button>
    </div>
  );
}

export default SubmitButton;
