// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import client from "./db.js";
// import "./db.js"

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'shrey',
  password: 'abc',
  database: 'lab2db'
});

// client = require("./db.js");
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

client.query('SELECT * FROM teaches', (err, res) => {
    if(!err)
    {
        console.log(res.rows);
    }
    else
    {
        console.log(err.message);
    }
});


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  // .catch(err => console.error('Connection error', err.stack));
    .then(()=>client.query('SELECT * FROM teaches')).
    then((err, res) => {
      if(!err)
      {
          data = res.json();
          setData(data.message);
      }
      else
      {
          console.log(err.message);
      }
    });
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
