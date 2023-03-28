import { useState } from "react";
import EmailInput from "../../Inputs/EmailInput/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../../firebaseConfig";
import "./RegisterForm.css";

const RegisterForm = () => {
  const passwordValidationFragments = {
    hasNumber: false,
    hasUpperCase: false,
    hasSpecialChar: false,
    minPassLength: 7,
  };
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validationFragments, setValidationFragments] = useState(
    passwordValidationFragments
  );
  const navigate = useNavigate();
  const callSetValidationFragments = (validationFragment, boolean) => {
    setValidationFragments((prevState) => {
      return { ...prevState, [validationFragment]: boolean };
    });
  };

  const validatePassword = (userPassword) => {
    const specialChars = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
    ];

    for (let i = 0; i < userPassword.length; i++) {
      const passChar = userPassword[i];

      const isNumber = Number(passChar);
      const isSpecialChar = specialChars.some(function (char) {
        return passChar === char;
      });
      // if current typed char is a number change hasNumber to true;
      if (isNumber) {
        callSetValidationFragments("hasNumber", true);
      }

      if (passChar === passChar.toUpperCase() && !isNumber && !isSpecialChar) {
        callSetValidationFragments("hasUpperCase", true);
      }
      if (isSpecialChar) {
        callSetValidationFragments("hasSpecialChar", true);
      }
    }

    const verifyPassForSpecialChar = () => {
      const passIncludesSpecialChar = specialChars.some(function (specialChar) {
        return userPassword.includes(specialChar);
      });

      if (!passIncludesSpecialChar) {
        callSetValidationFragments("hasSpecialChar", false);
      }
    };
    /* when you are removing a character check the entire userPassword if a char of regex is present  */
    const verifyPass = (regexInput, validationFragment, boolean) => {
      let regex = regexInput;
      let isFound = regex.test(userPassword);
      if (!isFound) {
        callSetValidationFragments(validationFragment, boolean);
      }
    };

    verifyPass(/\d/, "hasNumber", false); // if userPassword does not contain atleast one digit, set the state for hasNumber to false
    verifyPass(/[A-Z]/, "hasUpperCase", false); //same thing but for hasUpperCase
    verifyPassForSpecialChar();

    if (
      validationFragments.hasNumber &&
      validationFragments.hasUpperCase &&
      validationFragments.hasSpecialChar
    ) {
      return true;
    } else {
      return false;
    }
  };

  const register = async (e) => {
    if (userPassword.length < passwordValidationFragments.minPassLength) return;
    if (!validatePassword(userPassword)) {
      return;
    }
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredentials.user;
      // if user created an account and is loged in redirect him to /shop page
      if (user) {
        navigate("/shop");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="gaming__account-container">
      <form onSubmit={register} className="gaming__account-form">
        <EmailInput setUserEmail={setUserEmail} />
        <PasswordInput
          validatePassword={validatePassword}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
        />
        <button className="gaming__account-register-btn">Create Account</button>
        <div className="gaming__account-validation">
          <ul>
            <li
              className={`gaming__account-validation-li-${
                validationFragments.hasUpperCase ? "correct" : "wrong"
              }`}
            >
              <span>&rarr;</span>atleast one upper case character;
            </li>

            <li
              className={`gaming__account-validation-li-${
                validationFragments.hasNumber ? "correct" : "wrong"
              }`}
            >
              <span>&rarr;</span> atleast one number character;
            </li>

            <li
              className={`gaming__account-validation-li-${
                validationFragments.hasSpecialChar ? "correct" : "wrong"
              }`}
            >
              <span>&rarr;</span> atleast one special character;
            </li>

            <li
              className={`gaming__account-validation-li-${
                userPassword.length >= validationFragments.minPassLength
                  ? "correct"
                  : "wrong"
              }`}
            >
              <span>&rarr;</span>password length must be atleast 7;
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
