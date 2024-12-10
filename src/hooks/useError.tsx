import { useState, useEffect } from "react";

function useError() {
  const [isError, setIsError] = useState<"valid" | "invalid" | null>(null);

  useEffect(() => {});
}

export default useError;
