import React, { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DateInput
        label="Final"
        value={inicio}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DateRange;
