import React, { Component } from 'react'
import './App.css'
import Link from './Linktomd'
import ReactMarkdown from 'react-markdown'

const testmd = "# je suis un titre en forme"

class App extends Component {
  handleLinkClick(link){
    console.log(`link:${link}`);
  }
  render () {
    return (
      <div>
        <h1>Header</h1>
        <Link onClick={this.handleLinkClick} />
        <ReactMarkdown source={testmd} />
      </div>
    )
  }
}

export default App
