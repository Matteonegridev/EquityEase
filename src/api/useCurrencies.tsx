import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import fx from "money";

const getData = async () => {
  const apiUrl = import.meta.env.VITE_GETAPI;
  const apiKey = import.meta.env.VITE_GETKEY;
  const url = `${apiUrl}latest.json?app_id=${apiKey}&base=USD`;
  const res = await axios.get(url, {
    headers: {
      accept: "application/json",
    },
  });
  return res.data;
};

const useCurrenciesHook = () => {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["currencies"],
    queryFn: getData,
    select: (data) => {
      console.log("Transforming data:", data);
      // Transform or process data here
      return data.rates; // Example: return only the rates
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    gcTime: 1000 * 50,
  });

  useEffect(() => {
    if (data && data.rates) {
      // Initialize money.js with rates and base
      fx.rates = data.rates;
      fx.base = data.base || "USD";
      console.log("Money.js initialized with rates:", fx.rates);
    }
  }, [data]);

  return { data, error, isLoading, isSuccess };
};

export default useCurrenciesHook;
