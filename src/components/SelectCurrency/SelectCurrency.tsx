import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useCurrenciesHook from "../../api/useCurrencies";
import { useState } from "react";

export default function SelectCurrency() {
  const [currency, setCurrency] = useState("");
  const { data } = useCurrenciesHook();

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>GBP</MenuItem>
          <MenuItem value={30}>EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
