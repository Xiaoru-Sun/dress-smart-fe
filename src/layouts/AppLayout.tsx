import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = ({ onHandleToggleMap }) => {
  return (
    <>
      <div>
        <Navbar onHandleToggleMap={onHandleToggleMap} />
        <main className="flex justify-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
