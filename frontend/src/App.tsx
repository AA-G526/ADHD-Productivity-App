import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FocusMode from "./pages/Focusmode"
import Profile from "./pages/Profile"
import BottomNav from "./layouts/BottomNav"
import LoginForm from "./pages/Login"
import SignupForm from "./components/SignupForm"

function App() {

  return (
    <div className="min-h-screen" data-theme="synthwave">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusMode />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App
