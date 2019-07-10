import React from 'react'

const listLink = [
  { id: 1, text: 'Questions', link: 'devfront.md' },
  { id: 2, text: 'B__E--M', link: 'bem.md' },
  { id: 3, text: '8pt Grid system ', link: 'heightPtGridSys.md' },
  { id: 4, text: 'Atomic Design Method', link: 'atomic_design_systeme_SK.md' },
  { id: 5, text: 'Atomic Design exemples', link: 'atomic_design_exemples.md' },
  { id: 6, text: 'Grids out of date ', link: 'grids.md' },
  { id: 7, text: 'React', link: 'react.md' },
]

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
)

const SvgFb = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M5 0h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5z"
        fill="#ff7200"
      />
      <path
        d="M9.506 22h3.735l.002-10 3.393-.001L17 8.552h-3.759l.005-1.724c0-.9.061-1.38 1.347-1.38h2.375V2h-3.406c-3.3 0-4.06 1.711-4.06 4.522l.004 2.03L7 8.555V12h2.506v10z"
        fill="#FFF"
      />
    </g>
  </svg>
)

const Link = ({ onClick, e, id }) => {
  return (
    <nav className="nav-block">
      <ul className="items-list">
        {listLink.map(item => (
          <li key={item.id} className="items-list__item">
            <a
              className={
                id === item.id
                  ? 'items-list__link items-list__link--actif'
                  : 'items-list__link'
              }
              href={`#filename:~${item.link}/`}
              onClick={e => {
                onClick(item.link, e, item.id)
              }}
            >
              {item.text}
              {item.id === 5 && <Emoji symbol="😅" />}
              {item.id === 2 && <SvgFb className="svg--svg-baseline" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Link
