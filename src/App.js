import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
import './App.css'
import Link from './Linktomd'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Header</h1>
        <Link />
>>>>>>> add link Component OK no bug TOFIX onClick return is not a function
      </div>
    )
  }
}

export default App
