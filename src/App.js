import "./App.css";
import Main from "./componnets/Main";
import NavBar from "./componnets/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componnets/Login";
import Register from "./componnets/Register";
import { AuthContextProvider } from "./context/AuthContext";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
