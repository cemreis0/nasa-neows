import React from 'react'
import "./Navbar.css"
import Anchor from '../../components/anchor/Anchor'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navitems">
        <Anchor type="button" href="/" value="Home Page" />
        <div className="navlinks">
          <Anchor type="button" href="/getneowsfeed" value="NeoWs Feed" />
          <Anchor  type="button" href="/getneowslookup" value="NeoWs Lookup" />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar