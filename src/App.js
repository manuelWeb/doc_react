import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import './css/github.css'
import Link from './Linktomd'
// import source from './md_files/grids.md'
const markdownContext = require.context('./md_files', false, /\.md$/)
console.log(markdownContext)
console.log(markdownContext.keys())
console.log(markdownContext.keys()[0])

// solution via article medium : https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
function hopla(mdname) {
  // const file = 'atomic_design_systeme_SK.md'
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
        mdname: null,
        mdcont: null,
      }
    this.hopla = hopla.bind(this)
  }
  // arrow func to garantee this
  testfn = (md_name) => {
    console.log(`./md_files/${md_name}`);
    fetch(require(`./md_files/${md_name}`))
    .then(res => res.text())
    .then( data => this.setState({ mdcont: data }) )
    // .then( data => console.log(data) )

    return this.setState(state => ({
      num: state.num + 1,
      mdname: md_name
    }));

  }

  handleLinkClick(link) {
    console.log(link, 'clicked')
    hopla(link)
  }

  render() {
    const post = this.state.mdcont ? this.state.mdcont : 'Click on link'
    return (
      <div className="container">
        <button>
          {this.state.num ? `${this.state.num} ${this.state.mdname} `
            : 0}
        </button>
        {/* <Link onClick={this.handleLinkClick} /> */}
        <Link onClick={this.testfn} />
        <div className="markdown-body">
          <ReactMarkdown source={post} escapeHtml={false} />
        </div>
      </div>
    )
  }
}

export default App

// componentDidMount() {
//   fetch(source)
//     .then(res => res.text())
//     .then(post => this.setState((state) => ({ ...state, post })))
//     .catch((err) => console.error(err));
// }
