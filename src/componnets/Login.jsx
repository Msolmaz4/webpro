import React, { useContext, useState } from "react";
import { auth } from "../auth/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

import AuthContext from "../context/AuthContext";

import { useNavigate } from "react-router-dom";
export default function Login() {


  const {handleLogin,loginError} =useContext(AuthContext)
 const naviga = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [alert, setAlert] = useState("alert alert-danger d-none"); // d- none sayfada gostermey

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    try{
      let user = await signInWithEmailAndPassword(auth,email,password)
      naviga('/')
    }
    catch(err) {
      alert(err)
    }
  };

  return (
    <div className="login">
      <div>
        <img src="https://picsum.photos/800/800" alt="foto" />
      </div>

      <div className="login-form">
        <div className={loginError ? "alert alert-danger " : 'alert-danger d-none'} role="alert">
          This is a primary alert—check it out!
        </div>

        <h1 className="form-title display-3">login</h1>
        <form id="login" onSubmit={(e)=>handleSubmit(e)}>
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
              required
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
              required
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
