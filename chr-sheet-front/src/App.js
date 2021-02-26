import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="container m-2 d-flex flex-column">
          Edit <code>src/App.js</code> and save to reload.
          <input
            type="button"
            className="btn btn-primary align-self-center"
            style={{ width: '10%' }}
            value="Click Here!"
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
