import { React } from "react"
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="homepage">
      <h3>Near Earth Object Web Service (NeoWs)</h3>
      <div id="url">
        <a id="anchor" type="button" href="/getneowsfeed">NeoWs Feed</a>
      </div>
      <div id="url">
        <a id="anchor" type="button" href="/getneowslookup">NeoWs Lookup</a>
      </div>
    </div>
  )
}

export default Homepage