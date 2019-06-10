import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import './css/github.css'
import Link from './Linktomd'
import source from './md_files/grids.md'
const markdownContext = require.context('./md_files', false, /\.md$/);
console.log(markdownContext)
console.log(markdownContext.keys())

// solution via article medium : https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f


class App extends Component {
  state = {
    post: null,
  }
  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(post => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }
  handleLinkClick (link) {
    console.log(link, 'clicked')
  }
  render () {
    const { post } = this.state;
    return (
      <div className="container">
        <Link onClick={this.handleLinkClick} />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
