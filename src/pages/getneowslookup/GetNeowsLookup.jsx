import { React, useEffect, useState } from "react"
import axios from "axios"
import "./GetNeowsLookup.css"

const GetNeowsLookup = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [id, setId] = useState("")

  const fetchData = async (id) => {
    try {
      setLoader(true)
      const response = await axios.get(`http://127.0.0.1:8000/getneowslookup/${id}`)
      setData(JSON.parse(response.data[0]))
    } catch (error) {}
    setLoader(false)
  }

  useEffect(() => {
    fetchData("")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(id)
  }

  console.log(data)

  return (
    <div className="container" style={{ backgroundColor: "#39414A", color: "#BECBDA" }}>
      {loader &&
        <div style={{ textAlign: "center", padding: "48.5vh"}}>
          <h3>Retrieving NeoWs Info...</h3>
        </div>
      }
      {!data &&
        <div style={{ textAlign: "center", padding: "48.5vh"}}>
          <h3>An error occured. Refresh the page to continue.</h3>
        </div>
      }
      {!loader && data &&
        <div style={{ textAlign: "center", minHeight: "96vh", padding: "2vh" }}>
          <form onSubmit={handleSubmit}>
            <div id="form" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div id="form-item" style={{ marginInline: "5px" }}>
                <h4>ID of an Asteroid</h4>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
              </div>
              <input id="submit" type="submit" value="Get Results" />
            </div>
          </form>
          <p>{data.name}</p>
        </div>
      }
    </div>
  )
}

export default GetNeowsLookup