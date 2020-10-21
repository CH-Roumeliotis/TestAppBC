import React from "react";
//import React, { Component } from "react";
import axios from 'axios';
import './App.css';

export default function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Username: ${username}
      Password: ${password}`);
    
      axios.post('http://localhost:5000/register' , {username, password});
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
          <h1>Register</h1>

      <label>
        Username: 
        <input
          name="username"
          type="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required />
      </label>
          <br/>
      <label>
        Password: 
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
         <br/>
      <button>Submit</button>
    </form>
  );
}

