import React, { useState } from "react";
const InputText = () => {
  const [value, setValue] = useState("My text");
  function changeValue(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        // onChange={(event) => {
        //   setValue(event.target.value);
        // }}
        onChange={changeValue}
      />
    </div>
  );
};
export default InputText;
