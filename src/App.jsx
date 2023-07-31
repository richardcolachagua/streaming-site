import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./frontend/pages/LandingPage";
import Login from "./frontend/auth/Login";
import SignupPage from "./frontend/auth/Signup";
import Shows from "./frontend/pages/Shows";
import Following from "./frontend/pages/FollowingPage";
import CreatorDashboard from "./frontend/pages/CreatorDashboard";
import TrendingPage from "./frontend/pages/TrendingPage";
import Movies from "./frontend/pages/Movies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/following" element={<Following />} />
        <Route path="/creatordashboard" element={<CreatorDashboard />} />
        <Route path="/trending" element={<TrendingPage />} />
      </Routes>
    </div>
  );
}

export default App;
