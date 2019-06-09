import React from 'react';
import logo from './logo.svg';
import moMd from './grids.md';
import './App.css';
import {marked}  from './marked';
const test = marked('# Hello h1')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{marked('# yololoyole')}</div>
        <p>
          Comming soon Documentation <code>under react src/App.js</code> !
        </p>
        <div dangerouslySetInnerHTML={{ __html: marked('## hello h2#hello… by md') }} />
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
