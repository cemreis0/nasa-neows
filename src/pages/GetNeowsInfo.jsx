import { React, useState, useEffect} from "react"
import axios from "axios"

const GetNeowsInfo = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [startdate, setStartdate] = useState(new Date().toISOString().slice(0, 10))
  const [enddate, setEnddate] = useState(new Date().toISOString().slice(0, 10))

  const fetchData = async (startdate, enddate) => {
    try {
      setLoader(true)
      const response = await axios.get(`http://127.0.0.1:8000/getneowsinfo/${startdate}&${enddate}`)
      setData(JSON.parse(response.data[0]).near_earth_objects)
    } catch (error) {
      console.log(error.message)
    }
    setLoader(false)
  }

  useEffect(() => {
    fetchData(new Date().toISOString().slice(0, 10), new Date().toISOString().slice(0, 10))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(startdate, enddate)
  }

  return (
    <div id="container">
      {loader &&
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h3>Retrieving NeoWs Info...</h3>
        </div>
      }
      {!loader &&
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="startdate">Start date</label>
            <input id="startdate" onChange={(e) => {setStartdate(e.target.value)}} type="date" />
            <label htmlFor="enddate">End date</label>
            <input id="enddate" onChange={(e) => {setEnddate(e.target.value)}} type="date" />
            <input type="submit" value="Submit" />
          </form>
          {Object.entries(data).map((element, key) => (
            <div key={key}>{element[0]}: {element[1].map((element, key) => (<p key={key}>
              name: {element.name},
              absolute magnitude: {element.absolute_magnitude_h},
              close approach date: {element.close_approach_data[0].close_approach_date},
              close approach date full: {element.close_approach_data[0].close_approach_date_full},
              miss distance kilometers: {element.close_approach_data[0].miss_distance.kilometers},
              orbiting body: {element.close_approach_data[0].orbiting_body},
              relative velocity kilometers per hour: {element.close_approach_data[0].relative_velocity.kilometers_per_hour}
              maximum estimated diameter kilometers: {element.estimated_diameter.kilometers.estimated_diameter_max},
              minimum estimated diameter kilometers: {element.estimated_diameter.kilometers.estimated_diameter_min},
              id: {element.id},
              is potentially hazardous: {element.is_potentially_hazardous_asteroid.toString()},
              is sentry object: {element.is_sentry_object.toString()},
              neo reference id: {element.neo_reference_id}
            </p>) )}
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default GetNeowsInfo