import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import './css/github.css'
import Link from './Linktomd'

function hopla(mdname) {
  const readmePath = require(`./md_files/${mdname}`)
  fetch(readmePath)
    .then(response => response.text())
    .then(data => console.log(data))
    // .then( data => this.setState({ data }) )
    // .then(console.log('Ok!!!!!!!!!!!!'))
}

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        post: null,
        data: null,
        num: null,
        mdname: [],
        mdcont: null,
      }
    this.hopla = hopla.bind(this)
  }
  // arrow func to garantee this
  testfn = (md_name) => {
    this.setState({num: this.state.num + 1})
    const name = this.state.mdname ? this.state.mdname.concat(' / '+md_name) : this.state.mdname
    console.log(name)
    fetch(require(`./md_files/${md_name}`))
      .then(res => res.text())
      .then( data => this.setState({ mdcont: data }) )

    return this.setState(state => ({
      num: state.num,
      mdname: name
    }));

  }

  handleLinkClick(link) {
    console.log(link, 'clicked')
    hopla(link)
  }

  render() {
    const post = this.state.mdcont ? this.state.mdcont : 'Click on links'
    return (
      <div>
        <p className="history">
          {this.state.num ? `${this.state.num} ${this.state.mdname} `
            : 0}
        </p>
        <div className="container">
          {/* <Link onClick={this.handleLinkClick} /> */}
          <Link onClick={this.testfn} />
          <div className="markdown-body">
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

