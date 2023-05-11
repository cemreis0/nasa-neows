import { React } from "react"
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="container" style={{ backgroundColor: "#39414A", color: "#BECBDA", textAlign: "center", padding: "39.6vh" }}>
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