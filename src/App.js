import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './styles/App.scss'
import './styles/github.scss'
import Link from './Linktomd'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: null,
    }
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  load() {
    setTimeout(() => {
      fetch('https://api.aladhan.com/timingsByCity?city=usa&country=US&method=2')
        .then(res => res.text())
        .then(post => this.setState((state) => ({ ...state, post })))
        .catch((err) => console.error(err));
    }, 800);
  }
  handleLinkClick(link) {
    console.log(`./md_file/${link}`, 'clicked', 'this:', this)
    fetch(`./md_files/${link}`)
      .then(res => res.text())
      .then(md => this.setState({ post: md }) )
      .then(md => console.log(md) )
  }
  render () {
    const { post } = this.state
    return (
      <div className="container">
        {/* <Link onClick={ (i) => {this.handleLinkClick(i);this.load()} } /> */}
        <Link onClick={ (i) => {this.handleLinkClick(i)} } />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
