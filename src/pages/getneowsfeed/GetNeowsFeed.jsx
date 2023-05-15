import { React, useState, useEffect} from "react"
import axios from "axios"
import "./GetNeowsFeed.css"
import Input from "./../../components/input/Input"

const GetNeowsFeed = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [startdate, setStartdate] = useState(new Date().toISOString().split("T")[0])
  const [enddate, setEnddate] = useState(new Date().toISOString().split("T")[0])

  const fetchData = async (startdate, enddate) => {
    try {
      setLoader(true)
      const response = await axios.get(`http://127.0.0.1:8000/getneowsfeed/${startdate}&${enddate}`)
      setData(JSON.parse(response.data[0]).near_earth_objects)
    } catch (error) {
      console.log(error.message)
    }
    setLoader(false)
  }

  useEffect(() => {
    fetchData(new Date().toISOString().split("T")[0], new Date().toISOString().split("T")[0])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(startdate, enddate)
  }

  const maxEnddate = new Date(startdate)  
  maxEnddate.setDate(maxEnddate.getDate() + 7)

  const minEnddate = new Date(startdate)  
  minEnddate.setDate(minEnddate.getDate() - 7)

  return (
    <div className="getneowsfeed">
      {loader &&
        <div className="loader">
          <h3>Retrieving NeoWs Info...</h3>
        </div>
      }
      {!data &&
        <div className="error">
          <h3>An error occured. Refresh the page to continue.</h3>
        </div>
      }
      {!loader && data &&
        <div className="data">
          <h1 className="heading">Near Earth Object Web Service Feed</h1>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-item">
                <h4>Start Date</h4>
                <Input type="date" onChange={(e) => {setStartdate(e.target.value)}} value={startdate} />
              </div>
              <div className="form-item">
                <h4>End Date</h4>
                <Input type="date" onChange={(e) => {setEnddate(e.target.value)}} value={enddate} min={minEnddate.toISOString().split("T")[0]} max={maxEnddate.toISOString().split("T")[0]} />
              </div>
              <Input className="form-item" type="submit" value="Get Results" />
            </div>
          </form>
          {Object.entries(data).map((element, key) => (
            <div className="entries" key={key}>
              <h3 className="dateheading">Near Earth Asteroid Activity on {element[0]}</h3>
              <div className="grid-container">
                {element[1].map((element, key) => (
                  <div className="grid" key={key}>
                    <div className="grid-item">Name: {element.name}</div>
                    <div className="grid-item">Absolute Magnitude (H): {element.absolute_magnitude_h}</div>
                    <div className="grid-item">Close Approach Date: {element.close_approach_data[0].close_approach_date}</div>
                    <div className="grid-item">Close Approach Date (Full): {element.close_approach_data[0].close_approach_date_full}</div>
                    <div className="grid-item">Miss Distance (km): {element.close_approach_data[0].miss_distance.kilometers}</div>
                    <div className="grid-item">Orbiting Body: {element.close_approach_data[0].orbiting_body}</div>
                    <div className="grid-item">Relative Velocity (km/h): {element.close_approach_data[0].relative_velocity.kilometers_per_hour}</div>
                    <div className="grid-item">Maximum Estimated Diameter (km): {element.estimated_diameter.kilometers.estimated_diameter_max}</div>
                    <div className="grid-item">Minimum Estimated Diameter (km): {element.estimated_diameter.kilometers.estimated_diameter_min}</div>
                    <div className="grid-item">ID: {element.id}</div>
                    <div className="grid-item">Is Potentially Hazardous Asteroid: {element.is_potentially_hazardous_asteroid.toString()}</div>
                    <div className="grid-item">Is Sentry Object: {element.is_sentry_object.toString()}</div>
                    <div className="grid-item">Neo Reference ID: {element.neo_reference_id}</div> 
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default GetNeowsFeed