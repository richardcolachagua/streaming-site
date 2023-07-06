import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./frontend/pages/HomePage";
import Login from "./frontend/auth/Login";
import SignupPage from "./frontend/auth/Signup";
import Shows from "./frontend/pages/Shows";
import Following from "./frontend/pages/Following";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </div>
  );
}

export default App;
