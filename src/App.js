import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './css/App.css'
import './css/github.css'
import Link from './Linktomd'
const markdownContext = require.context('./md_files', false, /\.md$/);
console.log(markdownContext)
console.log(markdownContext.keys())

// solution via article medium : https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f


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
      fetch('https://api.aladhan.com/timingsByCity?city=france&country=US&method=2')
        .then(res => res.text())
        .then(post => this.setState((state) => ({ ...state, post })))
        .catch((err) => console.error(err));
    }, 800);
  }
  handleLinkClick(link) {
    console.log(`./md_file/${link}`, 'clicked', 'this:', this)
    fetch(require(`./md_files/${link}`))
      .then(res => res.text())
      .then(md => this.setState({ post: md }) )
      .then(md => console.log(md) )
  }
  render () {
    const { post } = this.state;
    return (
      <div className="container">
        <Link onClick={ (i) => {this.handleLinkClick(i);this.load()} } />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
