import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages
import GetNeowsInfo from "./pages/GetNeowsInfo"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<GetNeowsInfo />} path="/" />
      </Routes>
    </Router>
  )
}

export default App
