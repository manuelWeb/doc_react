import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './Linktomd'

const ReactMarkdown = require('react-markdown')
const testmd = require('./grids.md')
const input = '# Header…\n\npis un paragraphe'

function App() {
  return (
    <div className="App">
      <Link />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactMarkdown source={input} />
        <p>
          {testmd}
          Comming soon Documentation <code>under react src/App.js</code> !
        </p>
        <ReactMarkdown source={testmd} />
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
