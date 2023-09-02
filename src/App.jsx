import { Route, Routes } from "react-router-dom";
import LandingPage from "./frontend/pages/LandingPage";
import Login from "./frontend/auth/Login";
import SignupPage from "./frontend/auth/Signup";
import Shows from "./frontend/pages/Shows/Shows";
import Following from "./frontend/pages/FollowingPage";
import CreatorDashboard from "./frontend/Creator/CreatorDashboard";
import TrendingPage from "./frontend/pages/TrendingPage";
import Movies from "./frontend/pages/Movies";
import MemberSettings from "./frontend/pages/Settings/MemberSettings";
import ActionShow from "./frontend/pages/Shows/Genres/ActionShow";

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
        <Route path="/membersettings" element={<MemberSettings />} />
        <Route path="/shows/shows-action" element={<ActionShow />} />
      </Routes>
    </div>
  );
}

export default App;
