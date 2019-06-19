import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import 'whatwg-fetch'
import './styles/App.scss'
import './styles/github.scss'
import './styles/styles.scss'
import Link from './Linktomd'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: null,
      idActif: ''
    }
    // this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  saveStateToLocalStorage = () => {
    // localStorage.setItem('state', JSON.stringify(this.state))
    localStorage.setItem('state','post')
  }
  // componentDidMount() {
  //   const state = localStorage.getItem('state')
  //   const stor = JSON.parse(state)
  //   console.log(`stor.idActif:${stor ? stor.idActif : null}`)
  //   if (state) {
  //     this.setState(JSON.parse(state))
  //   }
  // }

  load(link) {
    console.log(`./md_file/${link}`, 'clicked', 'this:', this)
    fetch(`./md_files/${link}`)
    .then(res => res.text())
    .then(md => this.setState({ post: md }) )
    .catch((err) => console.error(err));
  }

  handleLinkClick(link,e,id) {
    // console.log(link,e.target,id);
    fetch(`./md_files/${link}`)
      .then(res => res.text())
      .then(md => this.setState({ post: md },this.saveStateToLocalStorage) )
      // .then(md => this.setState({ post: md },this.saveStateToLocalStorage) )

      // add link id to state
    this.setState({idActif: id})
  }

  render () {
    // const post = this.state.post === null ? this.load('TOFIX.md') : this.state.post
    const {post} = this.state
    const state = localStorage.getItem('post')
    console.log(state);
    // console.log(post ? 'true' : 'false')
    return (
      <div className="container">
        <Link onClick={ (i,e,id) => {this.handleLinkClick(i,e,id)} } id={this.state.idActif} />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App
