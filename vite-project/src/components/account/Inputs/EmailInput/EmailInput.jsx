import React from "react";
import { debounce } from "../../../../../Assets/debounce/debounce";
const EmailInput = ({ setUserEmail }) => {
  const debounceEmailInput = debounce((e) => {
    setUserEmail(e.target.value);
  });

  return (
    <input
      onChange={debounceEmailInput}
      placeholder="email"
      className="gaming__account-form-input"
      type="email"
    ></input>
  );
};

export default EmailInput;
