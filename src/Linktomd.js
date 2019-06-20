import React from 'react'
const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>

);

const listLink = [
  { id: 1, text: 'Atomic Design Method', link: 'atomic_design_systeme_SK.md' },
  { id: 2, text: 'Atomic Design exemples', link: 'atomic_design_exemples.md' },
  { id: 4, text: 'Grids out of date ', link: 'grids.md' },
  { id: 5, text: '8pt Grid system', link: 'heightPtGridSys.md' },
  { id: 6, text: 'BEM', link: 'bem.md' },
]
// const Link = ({ onClick, e, isActif }) => {
const Link = ({ onClick, e, id }) => {
  return (
    <ul>
      {listLink.map(item => (
        <li key={item.id}>
          <a
            className={id === item.id ? 'actif' : ''}
            href={`#filename:~${item.link}/`}
            onClick={e => {
              onClick(item.link, e, item.id)
            }}
          >
            {item.text}{item.id === 4 && <Emoji symbol="🙁" />}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Link
