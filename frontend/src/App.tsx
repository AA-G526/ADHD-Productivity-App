import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FocusMode from "./pages/Focusmode"
import Profile from "./pages/Profile"
import BottomNav from "./layouts/BottomNav"

function App() {

  return (
    <div className="h-screen" data-theme="synthwave">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusMode />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App
