import React from 'react'
const listLink = [
  {id: 1, text: 'Responsive vs Adaptative', link: 'RWDvsAdaptativeWD.md'},
  {id: 2, text: 'Atomic Design Method', link: 'atomic_design_systeme_SK.md'},
  {id: 3, text: 'Atomic Design exemples', link: 'atomic_design_exemples.md'},
  {id: 4, text: 'Responsive design patterns', link: 'responsiveDesignPatern.EMarcotte.md'}
]
const Link = ({onClick}) => (
  <ul>
    {listLink.map((item) => (
      <li key={item.id}>
        <a href={`link: ${item.link}`} onClick={() => onClick(item.link)}>{item.text}</a>
      </li>
    ))}
  </ul>
)

export default Link
