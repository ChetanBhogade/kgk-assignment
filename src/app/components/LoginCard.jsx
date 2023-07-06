"use client";
import { Button, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import "./LoginCard.css";
import axios from "axios";
import { UserContextObj } from "../context/UserContext";
import { useRouter } from "next/navigation";

function LoginCard() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(UserContextObj);
  const router = useRouter();

  const login = (username, password) => {
    return axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log("response: ", response);
        return response.data;
      })
      .catch((error) => {
        console.log("got an error on login: ", error);
        return null;
      });
  };

  const handleLogin = async () => {
    const loginResponse = await login(formData.username, formData.password);
    if (loginResponse) {
      setUser(loginResponse);
      router.push("dashboard");
    }
  };

  return (
    <div>
      <Paper sx={{ m: 10 }} elevation={3}>
        <h1 className="title">Login Page</h1>
        <div className="container">
          <TextField
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <br />
          <TextField
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <Button variant="outlined" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default LoginCard;
