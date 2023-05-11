import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

//pages
import GetNeowsFeed from "./pages/getneowsfeed/GetNeowsFeed"
import GetNeowsLookup from "./pages/getneowslookup/GetNeowsLookup"
import Homepage from "./pages/homepage/Homepage"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<GetNeowsFeed />} path="/getneowsfeed" />
        <Route element={<GetNeowsLookup />} path="/getneowslookup" />
      </Routes>
    </Router>
  )
}

export default App
