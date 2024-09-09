import { RxHamburgerMenu } from "react-icons/rx";
import { FiGlobe } from "react-icons/fi";
import sunshineIcon from "../assets/weather-icons/01_clear_sky.svg";
import { Link } from "react-router-dom";

const Navbar = ({ onHandleToggleMap }) => {
  return (
    <nav className="w-full h-[44px] flex items-center justify-between p-4 border-b-2 border-gray-200">
      <h2 className="font-lobster text-[22px] text-secondary">DressSmart</h2>
      <div className="flex items-center ">
        <Link to={"/weather"}>
          <img className="mr-2 w-[40px] h-[40px]" src={sunshineIcon} />
        </Link>
        <FiGlobe
          className="mr-4 w-[20px] h-[20px] text-secondary"
          onClick={onHandleToggleMap}
        />
        <RxHamburgerMenu className="text-secondary text-[22px] font-bold" />
      </div>
    </nav>
  );
};

export default Navbar;
