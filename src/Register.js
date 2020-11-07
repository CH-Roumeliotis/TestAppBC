import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
//var fs = require('fs');
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Register = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleSubmit = (event) => {
      console.log(`
        Username: ${username}
        Password: ${password}`);
      
        axios.post('http://localhost:5000/register' , {username, password});
      event.preventDefault();
    }

    
    //fs.writeFile('/test.txt', 'Cool, I can do this in the browser!', function(err) {
    //fs.readFile('/test.txt', function(err, contents) {
    //console.log(contents.toString());
   //});
  //});

    return(
        <GridWrapper>
          <form onSubmit={handleSubmit} id="outer-container">
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
  </GridWrapper>
    );
}

  