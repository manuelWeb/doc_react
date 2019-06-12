import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './css/App.scss'
import './css/github.scss'
import Link from './Linktomd'
import handleKeyClick from './func'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'hello',
      num: null,
      mdname: [],
      mdcont: null,
      clickedLink: null,
    }
    this.handleKeyClick = handleKeyClick.bind(this)
  }
  // arrow func to garantee this
  testfn = (md_name, e) => {
    this.setState({ num: this.state.num + 1 })
    this.setState({ clickedLink: e.target })
    const name = this.state.mdname.concat(' / ' + md_name)
    e.target.className === 'default'
      ? (e.target.className = 'actif')
      : (e.target.className = 'default')

    fetch(require(`./md_files/${md_name}`))
      .then(res => res.text())
      .then(data => this.setState({ mdcont: data }))

    return this.setState(state => ({
      num: state.num,
      mdname: this.state.mdname.length > 0 ? name : md_name,
    }))
  }
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'http://www.macfly.webdesignord.fr/web_project/Documentation/assets/scripts/mult_n.js'
    // script.async = true
    document.body.appendChild(script)
  }

  render() {
    const post = this.state.mdcont ? this.state.mdcont : fetch(require('./md_files/TOFIX.md'))
        .then(res => res.text())
        .then(data => this.setState({ mdcont: data }))
    return (
      <div>
        <p className="history">
          {this.state.num
            ? `visited link: ${this.state.num} ${this.state.mdname} `
            : 'visited link…'}
        </p>
        <div className="container">
          {/* <Link onClick={ this.testfn } isClickedProps={this.handleKeyClick} /> */}
          <Link onClick={ this.testfn } isClickedProps={ this.state.clickedLink } />
          <div className="markdown-body">
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
