import LogInBtn from "../navbar/LogInBtn/LogInBtn";
import RegisterBtn from "../navbar/RegisterBtn/RegisterBtn";
import "./Form.css";
const Form = ({ isCreatingAccount }) => {
  return (
    <div className="gaming__account-container">
      <form className="gaming__account-form">
        {isCreatingAccount && (
          <input
            placeholder="username"
            className="gaming__account-form-input"
            type="text"
          ></input>
        )}
        <input
          placeholder="email"
          className="gaming__account-form-input"
          type="email"
        ></input>
        <input
          placeholder="pass"
          className="gaming__account-form-input"
          type="password"
        ></input>
        <div className="gaming__account-form-btn-modifier">
          {isCreatingAccount ? <RegisterBtn /> : <LogInBtn />}
        </div>
      </form>
    </div>
  );
};

export default Form;
