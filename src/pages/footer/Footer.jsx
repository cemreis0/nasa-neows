import React from 'react'
import "./Footer.css"
import Anchor from '../../components/anchor/Anchor'

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footeritems">
        <Anchor href="https://github.com/cemreis0" value="Cem Reis 2023" target="_blank" rel="noreferrer" />
        <Anchor href="https://api.nasa.gov/" value="© NASA" target="_blank" rel="noreferrer" />
      </div>
    </div>
  )
}

export default Footer