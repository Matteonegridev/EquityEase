import { useState } from "react";

type InputValues = {
  amount?: string;
  term?: string;
  rate?: string;
  type?: string;
};

function useError(inputValue: InputValues) {
  const [isError, setIsError] = useState<InputValues>({});

  const validate = (inputValue: InputValues) => {
    const newErrors: InputValues = {};

    if (!inputValue.amount) {
      newErrors.amount = "Field is required";
    }
    if (!inputValue.term) {
      newErrors.term = "Field is required";
    }
    if (!inputValue.rate) {
      newErrors.rate = "Field is required";
    }
    if (!inputValue.type) {
      newErrors.type = "Field is required";
    }
    return newErrors;
  };

  const handleErrors = (values: InputValues) => {
    const newErrors = validate(values);
    setIsError(newErrors);
    return newErrors;
  };

  return { isError, handleErrors, inputValue };
}

export default useError;
