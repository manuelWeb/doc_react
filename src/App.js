import React, { Component } from 'react'
import './App.css'
import Link from './Linktomd'

const ReactMarkdown = require('react-markdown')
// const testmd = require('./grids.md')
const input = '# Header…\n\npis un paragraphe'

class App extends Component {
  handleLinkClick(link){
    console.log(link, 'clicked')
  }
  render () {
    return (
      <div>
        <Link onClick={this.handleLinkClick} />
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

export default App
