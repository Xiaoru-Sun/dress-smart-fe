import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
