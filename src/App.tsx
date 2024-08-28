import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
