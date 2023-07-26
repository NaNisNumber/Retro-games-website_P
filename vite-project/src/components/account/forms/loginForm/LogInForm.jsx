import { useState, React } from "react";
import EmailInput from "../../Inputs/EmailInput/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput/PasswordInput";
import "../loginForm/LogInForm.css";
import "../registrationForm/RegisterForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../../firebaseConfig";

const LogInForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const userLoginCredentials = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userLoginCredentials.user;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="gaming__account-container">
      <form onSubmit={login} className="gaming__account-form">
        <EmailInput setUserEmail={setUserEmail} />
        <PasswordInput setUserPassword={setUserPassword} />
        <button type="submit" className="gaming__account-login-btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
