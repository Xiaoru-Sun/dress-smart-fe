import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Weather from "./pages/Weather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default App;
