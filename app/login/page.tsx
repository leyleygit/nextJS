"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch(
      "https://66a0a97e7053166bcabc32e8.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      // Save the authentication state (e.g., token)
      localStorage.setItem("token", data.token);
      console.log(username, password)
      // Redirect to the home page
      // router.push("/"); 
    } else {

      // Handle login failure
      console.error(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>Email:</label>
        <input
          
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
