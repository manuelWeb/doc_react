import React, { Component } from 'react'
import './App.css'
import Link from './Linktomd'
// import myMarkdownFile from './md_files/grids.md'

const ReactMarkdown = require('react-markdown')
// const testmd = require('./grids.md')
const input = '# Header…\n\npis un paragraphe'

function getMdByName(name) {
  return require(`./md_files/${name}`)
}

var hellomd = (name) => fetch( getMdByName(name) )
  .then(response => response.text())
  .then(text => {
    console.log(text);
  })
hellomd('grids.md')

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
