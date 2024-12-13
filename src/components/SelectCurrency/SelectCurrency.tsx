import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useCurrenciesHook from "../../api/useCurrencies";
import { useState } from "react";
import "./SelectCurrency.scss";
import fx from "money";

export default function SelectCurrency() {
  const [currency, setCurrency] = useState("");
  const { data } = useCurrenciesHook();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCurrency = event.target.value as string;
    setCurrency(selectedCurrency);

    if (data && data.rates) {
      fx.rates = data.rates;
      fx.base = selectedCurrency;
      console.log(
        "Updated money.js with rates for base currency:",
        selectedCurrency
      );
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="form-control">
        <InputLabel className="select-label" id="demo-simple-select-label">
          Currency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select-label select-label--code"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
