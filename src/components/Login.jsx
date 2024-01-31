import { useState } from "react";

function Login() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

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
            onChange={handleInputChange}
            value={enteredData.email}
          />
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
