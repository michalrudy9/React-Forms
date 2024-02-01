import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredData.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={enteredData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default Login;
