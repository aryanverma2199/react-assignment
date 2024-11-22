import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      dispatch(setUser(username));
      navigate("/dashboard");
    } else {
      alert("Please enter valid username and password.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input
        type="text" style={{height:"40px", marginBottom:"24px", padding:"6px"}}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password" style={{height:"40px", marginBottom:"24px", padding:"6px"}}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin} style={{height:"40px", marginBottom:"24px", padding:"12px", cursor:"pointer"}}>Login</button>
    </div>
  );
};

export default Login;
