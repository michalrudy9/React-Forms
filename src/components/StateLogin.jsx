import { useState } from "react";
import Input from "./Input";

function Login() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredData.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredData.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredData.email);
    console.log(enteredData.password);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEnteredData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [name]: false,
    }));
  }

  function handleInputBlur(event) {
    const { name } = event.target;
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [name]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredData.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredData.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default Login;
