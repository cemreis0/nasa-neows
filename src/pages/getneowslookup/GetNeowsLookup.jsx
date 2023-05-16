import { React, useEffect, useState } from "react"
import axios from "axios"
import "./GetNeowsLookup.css"
import Loader from "./../../components/loader/Loader"
import Input from "./../../components/input/Input"

const GetNeowsLookup = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [id, setId] = useState("")
  const [error, setError] = useState("")

  const fetchData = async (id) => {
    try {
      setLoader(true)
      const response = await axios.get(`http://127.0.0.1:8000/getneowslookup/${id}`)
      setData(JSON.parse(response.data))
    } catch (error) {
      setError(error.message)
    }
    setLoader(false)
  }

  useEffect(() => {
    fetchData(2177016)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(id)
  }
  
  console.log(Object.values(data))

  return (
    <div className="container">
      {loader &&
        <Loader />
      }
      {!loader && 
        <div className="data">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-item">
                <h4 className="idheading">ID of an Asteroid</h4>
                <Input type="string" placeholder="Enter an ID" value={id} onChange={(e) => setId(e.target.value)} />
              </div>
              <Input type="submit"  value="Get Results" />
            </div>
          </form>
          {data ? 
          <div className="asteroiddata">
            <div className="entries">
              <div className="data-grid">
                <h3>ID: {data.id}</h3>
                <h3>Neo Reference ID: {data.neo_reference_id}</h3>
                <h3>Name: {data.name}</h3>
                <h3>Designation: {data.designation}</h3>
                <h3>NASA JPL URL: {data.nasa_jpl_url}</h3>
                <h3>Absolute Magnitude (h): {data.absolute_magnitude_h}</h3>
                <h3>Minimum Estimated Diameter (km): {data.estimated_diameter.kilometers.estimated_diameter_min}</h3>
                <h3>Maximum Estimated Diameter (km): {data.estimated_diameter.kilometers.estimated_diameter_max}</h3>
                <h3>Is Potentially Hazardous Asteroid: {data.is_potentially_hazardous_asteroid.toString()}</h3>
                <h3>Orbit ID: {data.orbital_data.orbit_id}</h3>
                <h3>Orbit Determination Date: {data.orbital_data.orbit_determination_date}</h3>
                <h3>First Observation Date: {data.orbital_data.first_observation_date}</h3>
                <h3>Last Observation Date: {data.orbital_data.last_observation_date}</h3>
                <h3>Data Arc In Days: {data.orbital_data.data_arc_in_days}</h3>
                <h3>Observation Used: {data.orbital_data.observations_used}</h3>
                <h3>Orbit Uncertainty: {data.orbital_data.orbit_uncertainty}</h3>
                <h3>Minimum Orbit Intersetion: {data.orbital_data.minimum_orbit_intersection}</h3>
                <h3>Jupiter Tisserand Invariant: {data.orbital_data.jupiter_tisserand_invariant}</h3>
                <h3>Epoch Osculation: {data.orbital_data.epoch_osculation}</h3>
                <h3>Eccentricity: {data.orbital_data.eccentricity}</h3>
                <h3>Semi Major Axis: {data.orbital_data.semi_major_axis}</h3>
                <h3>Incliniation: {data.orbital_data.inclination}</h3>
                <h3>Ascending Node Longitude: {data.orbital_data.ascending_node_longitude}</h3>
                <h3>Orbital Period: {data.orbital_data.orbital_period}</h3>
                <h3>Perihelion Distance: {data.orbital_data.perihelion_distance}</h3>
                <h3>Perihelion Argument: {data.orbital_data.perihelion_argument}</h3>
                <h3>Aphelion Distance: {data.orbital_data.aphelion_distance}</h3>
                <h3>Perihelion Time: {data.orbital_data.perihelion_time}</h3>
                <h3>Mean Anomaly: {data.orbital_data.mean_anomaly}</h3>
                <h3>Mean Motion: {data.orbital_data.mean_motion}</h3>
                <h3>Equinox: {data.orbital_data.equinox}</h3>
                <h3>Orbit Class Type: {data.orbital_data.orbit_class.orbit_class_type}</h3>
                <h3>Orbit Class Description: {data.orbital_data.orbit_class.orbit_class_description}</h3>
                <h3>Orbit Class Range: {data.orbital_data.orbit_class.orbit_class_range}</h3>
                <h3>Is Sentry Object: {data.is_sentry_object.toString()}</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Close Approach Date</th>
                    <th>Close Approach Date (full)</th>
                    <th>Epoch Date Close Approach</th>
                    <th>Relative Velocity (km/h)</th>
                    <th>Miss Distance (km)</th>
                    <th>Orbiting Body</th>
                  </tr>
                </thead>
                <tbody>
                  {data.close_approach_data.map((element, key) => (
                    <tr key={key}>
                      <td>{element.close_approach_date}</td>
                      <td>{element.close_approach_date_full}</td>
                      <td>{element.epoch_date_close_approach}</td>
                      <td>{element.relative_velocity.kilometers_per_hour}</td>
                      <td>{element.miss_distance.kilometers}</td>
                      <td>{element.orbiting_body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          : error}
        </div>
      }
    </div>
  )
}

export default GetNeowsLookup