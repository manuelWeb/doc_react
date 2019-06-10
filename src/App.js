import React, { Component } from 'react'
import './App.css'
import Link from './Linktomd'

class App extends Component {
  handleLinkClick(link){
    console.log(`link:${link}`);
  }
  render () {
    return (
      <div>
        <h1>Header</h1>
        <Link onClick={this.handleLinkClick} />
      </div>
    )
  }
}

export default App
