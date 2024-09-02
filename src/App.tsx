import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Weather from "./pages/Weather";
import Details from "./pages/Details";
import AppLayout from "./layouts/AppLayout";
import { useState } from "react";

function App() {
  const [searchOpen, setsearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setsearchOpen(!searchOpen);
  };

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/weather"
        element={
          <AppLayout handleSearchOpen={handleSearchOpen}>
            <Weather searchOpen={searchOpen} />
          </AppLayout>
        }
      />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
