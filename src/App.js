import Navigation from "./components/Navigation"
import GameBoard from "./pages/GameBoard"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameboard" element={<GameBoard />} />
      </Routes>
    </>
  )
}

export default App
