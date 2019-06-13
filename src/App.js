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
      isClick: null
    }
    // this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  load(link) {
    console.log(`./md_file/${link}`, 'clicked', 'this:', this)
    fetch(`./md_files/${link}`)
    .then(res => res.text())
    .then(md => this.setState({ post: md }) )
    .catch((err) => console.error(err));
  }

  handleLinkClick(link,e) {
    console.log(e.target,link);
    fetch(`./md_files/${link}`)
      .then(res => res.text())
      .then(md => this.setState({ post: md }) )
    this.setState({isClick: link})
  }

  render () {
    const post = this.state.post === null ? this.load('TOFIX.md') : this.state.post
    console.log(post ? 'true' : 'false')
    return (
      <div className="container">
        {/* <Link onClick={ (i) => {this.handleLinkClick(i);this.load('TOFIX.md')} } /> */}
        <Link onClick={ (i,e) => {this.handleLinkClick(i,e)} } isAct={this.state.isClick} />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
