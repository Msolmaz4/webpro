import React, { useContext, useState } from "react";
import "./Register.css";
//import AuthContext from "../context/AuthContext";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";




export default function Register() {
 // const { credentials, handleCredentials } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handleCredentials(firstName, lastName, email, password);
    //setEmail("");
    //setFirstName("");
    //setPassword("");
    //setPassword("");

    try {
    
     let user= await createUserWithEmailAndPassword(auth,email,password);
     console.log(user)

    }catch (err) {
      alert(err)
    }
  };


  return (
    <div className="rer">
      <div className="rer1">
        <img src="https://picsum.photos/800/800" alt="foto" />
      </div>
      <div className="register-form">
        <h2 className="form-title display-3"> Register</h2>
        <form id="register" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label for="first-Name" className="form-label display-4">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="enter your name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>

          <div className="mb-3">
            <label for="last-Name" className="form-label display-4">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="enter your  lastname"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required// yorunlu giris
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label display-4">
              E-Mail
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="register"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
