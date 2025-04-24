import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FocusMode from "./pages/Focusmode"
import Navbar from "./layouts/Navbar"
import BottomNav from "./layouts/BottomNav"

function App() {

  return (
    <div className="h-screen" data-theme="synthwave">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusMode />} />
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App
