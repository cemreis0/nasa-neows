import { React } from "react"
import "./Homepage.css"
import Anchor from "./../../components/anchor/Anchor"

const Homepage = () => {
  return (
    <div className="homepage">
      <h3>Near Earth Object Web Service (NeoWs)</h3>
      <div className="url">
        <Anchor href="/getneowsfeed" value="NeoWs Feed" />
      </div>
      <div className="url">
        <Anchor href="/getneowslookup" value="NeoWs Lookup" />
      </div>
    </div>
  )
}

export default Homepage