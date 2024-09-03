import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Weather from "./pages/Weather";
import Details from "./pages/Details";
import AppLayout from "./layouts/AppLayout";
import Location from "./pages/Location";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<AppLayout />}>
        <Route path="/weather" element={<Weather />} />
        <Route path="/details" element={<Details />} />
      </Route>
      <Route path="/location" element={<Location />}></Route>
    </Routes>
  );
}

export default App;
