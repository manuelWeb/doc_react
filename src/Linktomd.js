import React from 'react'
import './css/styles.css'
// webpack @see require.context
// const markdownContext = require.context('./md_files', false, /\.md$/)
// console.log(markdownContext)
// console.log(markdownContext.keys())
// console.log(markdownContext.keys()[0])

const listLink = [
  {id: 1, text: 'Responsive vs Adaptative', link: 'RWDvsAdaptativeWD.md'},
  {id: 2, text: 'Atomic Design Method', link: 'atomic_design_systeme_SK.md'},
  {id: 3, text: 'Atomic Design exemples', link: 'atomic_design_exemples.md'},
  {id: 4, text: 'Responsive design patterns', link: 'responsiveDesignPatern.EMarcotte.md'},
  {id: 5, text: 'Grids up to date :)', link: 'grids.md'},
  {id: 6, text: 'Sketch Settings', link: 'sketch-settings.md'},
  {id: 7, text: 'Sketch Library & Zeplin', link: 'sketch-library.md'},
  {id: 8, text: 'Sketch Responsive', link: 'sketch-responsive.md'}
]
const Link = ({onClick}) => (
  <ul>
    {listLink.map((item) => (
      <li key={item.id}>
        <a
          href={`link: ${item.link}`}
          onClick={() => onClick(item.link)}
        >
        {item.text}
        </a>
      </li>
    ))}
  </ul>
)

export default Link
