import React from 'react'

const listLink = [
  { id: 1, text: 'Responsive vs Adaptative', link: 'RWDvsAdaptativeWD.md' },
  { id: 2, text: 'Atomic Design Method', link: 'atomic_design_systeme_SK.md' },
  { id: 3, text: 'Atomic Design exemples', link: 'atomic_design_exemples.md' },
  {
    id: 4,
    text: 'Responsive design patterns',
    link: 'responsiveDesignPatern.EMarcotte.md',
  },
  { id: 5, text: 'Grids up to date :)', link: 'grids.md' },
  { id: 6, text: 'Sketch Settings', link: 'sketch-settings.md' },
  { id: 7, text: 'Sketch Library & Zeplin', link: 'sketch-library.md' },
  { id: 8, text: 'Sketch Responsive', link: 'sketch-responsive.md' },
]
// const Link = ({ onClick, e, isActif }) => {
const Link = ({ onClick, e, id }) => {
  // console.log(`clicked:${isActif === '' ? 0 : isActif}`)
  console.log(id);
  return (
    <ul>
      {listLink.map(item => (
        <li key={item.id}>
          <a
            // className={isActif === item.link ? 'actif' : 'default'}
            className={id === item.id ? 'actif' : ''}
            href={`#filename:~${item.link}/`}
            onClick={e => {
              onClick(item.link, e, item.id)
            }}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Link
