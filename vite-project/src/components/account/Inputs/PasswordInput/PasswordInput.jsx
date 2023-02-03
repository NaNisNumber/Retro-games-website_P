import { React, useEffect } from "react";
import { debounce } from "../../../../../Assets/debounce/debounce";
const PasswordInput = ({ validatePassword, userPassword, setUserPassword }) => {
  const debouncePasswordInput = debounce((e) => {
    setUserPassword(e.target.value);
  });
  useEffect(() => {
    if (validatePassword) {
      validatePassword(userPassword);
    }
  }, [userPassword]);
  return (
    <input
      onChange={(e) => {
        debouncePasswordInput(e);
      }}
      placeholder="pass"
      className="gaming__account-form-input"
      type="text"
    ></input>
  );
};

export default PasswordInput;
