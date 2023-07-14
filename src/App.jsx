import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./frontend/pages/LandingPage";
import Login from "./frontend/auth/Login";
import SignupPage from "./frontend/auth/Signup";
import Shows from "./frontend/pages/Shows";
import Following from "./frontend/pages/FollowingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </div>
  );
}

export default App;
