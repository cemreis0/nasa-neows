import { React, useState, useEffect } from "react"
import axios from "axios"

const GetNeowsInfo = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [startdate, setStartdate] = useState("2023-05-02")
  const [enddate, setEnddate] = useState("2023-05-08")

  // data to be shown
  const [dates, setDates] = useState([])
  const [names, setNames] = useState([])

  useEffect(() => {
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
    fetchData(startdate, enddate)
  }, [startdate, enddate])

  console.log(Object.entries(data).map(element => console.log(element)))

  return (
    <div id="container">
      {loader &&
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h3>Retrieving NeoWs Info...</h3>
        </div>
      }
      {!loader &&
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {Object.entries(data).map((element, key) => (
            <p key={key}>{element[0]}: {element[1][0].name}</p>
          ))}
        </div>
      }
    </div>
  )
}

export default GetNeowsInfo