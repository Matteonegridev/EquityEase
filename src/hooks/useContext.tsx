import { createContext, useContext } from "react";
import { ContextValues } from "../utils/Context";

export const Context = createContext<ContextValues | undefined>(undefined);

export const useContextHook = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("Error!");
  }

  return context;
};
