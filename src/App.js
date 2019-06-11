import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './css/App.css'
import './css/github.css'
import Link from './Linktomd'
import TodoApp from './Test'
import handleKeyClick from './func'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'hello',
      num: null,
      mdname: [],
      mdcont: null,
    }
    this.handleKeyClick = handleKeyClick.bind(this)
  }
  // arrow func to garantee this
  testfn = (md_name, e) => {
    this.setState({ num: this.state.num + 1 })
    const name = this.state.mdname.concat(' / ' + md_name)
    console.log(e.target)

    fetch(require(`./md_files/${md_name}`))
      .then(res => res.text())
      .then(data => this.setState({ mdcont: data }))

    return this.setState(state => ({
      num: state.num,
      mdname: this.state.mdname.length > 0 ? name : md_name,
    }))
  }

  render() {
    const post = this.state.mdcont ? this.state.mdcont : 'Click on links'
    return (
      <div>
        <p className="history">
          {this.state.num ? `${this.state.num} ${this.state.mdname} ` : 0}
        </p>
        <div className="container">
          <Link onClick={this.testfn} isClickedPops={this.handleKeyClick} />
          <div className="markdown-body">
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        </div>
        <TodoApp />
      </div>
    )
  }
}

export default App
