import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FocusMode from "./pages/Focusmode";
import Profile from "./pages/Profile";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import BottomNav from "./layouts/BottomNav";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div data-theme="synthwave">  
      <Navbar/>
      <div className="pt-12">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<FocusMode />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
