import React from 'react'
// import './Styles.css'

const Link = ({link}) => (
  <ul>
    <li>
      <a
        href={link}
        onclick="showMd('md_files/RWDvsAdaptativeWD.md');"
      >
        Responsive vs Adaptative
      </a>
    </li>
  </ul>
)

export default Link
