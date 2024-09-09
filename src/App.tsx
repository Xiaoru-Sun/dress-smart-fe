import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Weather from "./pages/Weather";
import Details from "./pages/Details";
import AppLayout from "./layouts/AppLayout";
import Location from "./pages/Location";
import { useState } from "react";


function App() {
  type PlaceDetails = {
    name: string | null;
    lat: number | null;
    lng: number | null;
  };

  const defaultPlaceDetails = { name: "", lat: 0, lng: 0 };
  const [placeDetails, setPlaceDetails] = useState(defaultPlaceDetails);
  const handlePlace = (place) => {
    setPlaceDetails(place);
  };
  console.log("on APP", placeDetails);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/details" element={<Details />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<AppLayout />}>
        <Route
          path="/weather"
          element={<Weather placeDetails={placeDetails} />}
        />
        <Route
          path="/location"
          element={
            <Location
              onHandlePlace={handlePlace}
              onSetPlaceDetails={setPlaceDetails}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
