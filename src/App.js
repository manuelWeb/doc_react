import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './styles/App.scss'
import './styles/github.scss'
import './styles/styles.scss'
import Link from './Linktomd'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: null,
      isClick: ''
    }
    // this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state))
  }
  componentDidMount() {
    const state = localStorage.getItem('state')
    const stor = JSON.parse(state)
    console.log(`stor.isClick:${stor.isClick}`)
    if (state) {
      this.setState(JSON.parse(state))
      // alert(localStorage.getItem('state'))

    }
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
      .then(md => this.setState({ post: md },this.saveStateToLocalStorage) )
    // add link state
    this.setState({isClick: link},this.saveStateToLocalStorage)
  }

  render () {
    // const post = this.state.post === null ? this.load('TOFIX.md') : this.state.post
    const {post} = this.state
    // this.state.isClick
    console.log(post ? 'true' : 'false')
    return (
      <div className="container">
        <Link onClick={ (i,e) => {this.handleLinkClick(i,e)} } isActif={this.state.isClick} />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
