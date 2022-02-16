import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("alert alert-danger d-none"); // d- none sayfada gostermey

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/");
    } else {
      setAlert("alert alert-danger");
    }
  };

  return (
    <div className="login">
      <div>
        <img src="https://picsum.photos/800/800" alt="foto" />
      </div>

      <div className="login-form">
        <div className={alert} role="alert">
          This is a primary alert—check it out!
        </div>

        <h1 className="form-title display-3">login</h1>
        <form id="login" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="email" className="form-label display-4">
              {" "}
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your email adress..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="enter your Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="login"
          />
        </form>
      </div>
    </div>
  );
}
