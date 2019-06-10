import React, { Component } from 'react'
import './App.css'
import Link from './Linktomd'
import myMarkdownFile from './grids.md'

const ReactMarkdown = require('react-markdown')
// const testmd = require('./grids.md')
const input = '# Header…\n\npis un paragraphe'

fetch(myMarkdownFile)
  .then(response => response.text())
  .then(text => {
    // Logs a string of Markdown content.
    // Now you could use e.g. <rexxars/react-markdown> to render it.
    console.log(text)
  })
class App extends Component {
  handleLinkClick (link) {
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
