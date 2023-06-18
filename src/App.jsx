import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LogIn";
import SignupPage from "./pages/Signup";
import Shows from "./pages/Shows";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="shows" element={<Shows />} />
      </Routes>
    </div>
  );
}

export default App;
